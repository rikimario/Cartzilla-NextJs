"use client";
import { Product } from "@/app/utils/products";
import ProductSkeleton from "@/app/utils/ProductSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AutomotiveProductsProps {
  products: Product[];
}

export default function AutomotiveProducts({
  products,
}: AutomotiveProductsProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
    }
  }, [products]);
  return (
    <div className="py-10 dark:bg-[#181D25]">
      <p className="text-lg ml-1 text-gray-600 dark:text-gray-300 font-light">
        Found <span className="font-bold text-gray-700">{products.length}</span>{" "}
        items
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-2 lg:pt-4 items-center justify-center justify-items-center text-center grid-auto-columns">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products.map((item: any) => (
              <div className="p-1 grid grid-cols-1 grid-rows-1 h-full w-full">
                <Card className="dark:bg-[#181D25] h-full w-full">
                  <CardContent className="relative flex flex-col aspect-square items-center justify-center p-2">
                    <div className="absolute top-2 right-4">
                      <button className="bg-gray-200 dark:bg-gray-700 p-1 md:p-2 rounded-lg">
                        <Heart
                          className="h-3 w-3 lg:w-5 lg:h-5 text-gray-900 dark:text-white"
                          strokeWidth={1}
                        />
                      </button>
                    </div>
                    <Link href={`all-automotive/${item.id}`}>
                      <Image
                        className="lg:w-[200px] lg:h-[200px]"
                        src={item.thumbnail}
                        alt={item.title}
                        width={160}
                        height={160}
                      />
                    </Link>
                    <div className="flex flex-col gap-2 w-full text-start p-2">
                      <div className="flex items-center text-center">
                        {Array.from({ length: 5 }).map((_, index) =>
                          item.rating >= index + 1 ? (
                            <Star
                              key={index}
                              className="text-[#FC9231] lg:w-5 lg:h-5"
                              size={16}
                              fill="#FC9231"
                              strokeWidth={0}
                            />
                          ) : item.rating > index && item.rating < index + 1 ? (
                            <div style={{ position: "relative" }}>
                              <Star
                                key={index}
                                className="text-[#FC9231] lg:w-5 lg:h-5"
                                size={16}
                                fill="#FC9231"
                                strokeWidth={0}
                                style={{
                                  clipPath:
                                    "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                                }}
                              />
                              <Star
                                key={index + 5}
                                className="text-gray-400 lg:w-5 lg:h-5"
                                size={16}
                                fill="none"
                                stroke="#999897"
                                strokeWidth={1}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                }}
                              />
                            </div>
                          ) : (
                            <Star
                              key={index}
                              className="text-gray-400 lg:w-5 lg:h-5"
                              size={16}
                              fill="none"
                              stroke="#999897"
                              strokeWidth={1}
                            />
                          )
                        )}
                        <p className="pl-2 text-xs md:text-sm text-gray-400 flex items-center">
                          ({item.rating})
                        </p>
                      </div>
                      <h1 className="text-xs lg:text-lg text-gray-900 dark:text-white font-medium truncate overflow-ellipsis">
                        {item.title}
                      </h1>
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-xs lg:text-2xl text-gray-900 dark:text-white font-semibold">
                          ${item.price}
                        </p>
                        <button className="bg-gray-200 dark:bg-gray-700 p-2 md:p-3 rounded-xl">
                          <ShoppingCart
                            className="h-3 w-3 md:h-4 md:w-4"
                            strokeWidth={1}
                          />
                        </button>
                      </div>
                      <p className="flex text-xs md:text-base gap-2 text-gray-400">
                        Available:{" "}
                        <span className="text-gray-900 dark:text-white text-xs md:text-base">
                          {item.stock}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}
