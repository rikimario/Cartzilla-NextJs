"use client";
import { getProductsElectronics, Product } from "@/app/utils/products";
import { ChevronRight, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function TrendingProducts() {
  const products = getProductsElectronics();
  return (
    <div className="p-4 dark:bg-[#181D25]">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200">
        <h1 className="text-xl lg:text-2xl lg:pl-[4rem] xl:pl-[7.7rem] text-gray-900 dark:text-white font-semibold pb-6">
          Trending Products
        </h1>
        <span className="flex items-center pb-6 lg:pr-[4rem] xl:pr-[6.5rem]">
          view all <ChevronRight strokeWidth={1} className="h-5 w-5" />
        </span>
      </div>

      <div className="px-2 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-2 lg:pt-4 items-center justify-center justify-items-center text-center">
        {products.slice(28, 36).map((item: Product) => (
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
                <Link href={`all-electronics/${item.id}`}>
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
                              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
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
