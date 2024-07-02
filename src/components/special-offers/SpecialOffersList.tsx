import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function SpecialOffersList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 5)));
  }, []);
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative p-4 lg:px-10"
      >
        <CarouselContent>
          {products.map(
            (item: {
              title: string;
              price: string;
              thumbnail: string;
              rating: string;
              stock: string;
              id: number;
            }) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="h-full dark:bg-[#181D25]">
                    <CardContent className="relative flex flex-col aspect-square items-center justify-center p-2">
                      <div className="absolute top-2 right-4">
                        <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">
                          <Heart
                            className="h-3 w-3 lg:w-5 lg:h-5 text-gray-900 dark:text-white"
                            strokeWidth={1}
                          />
                        </button>
                      </div>
                      <Image
                        className="lg:w-[200px] lg:h-[200px]"
                        src={item.thumbnail}
                        alt={item.title}
                        width={160}
                        height={160}
                      />
                      <div className="flex flex-col gap-2 w-full text-start p-2">
                        <div className="flex items-center text-center">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className="text-[#FC9231] lg:w-5 lg:h-5"
                              size={16}
                              fill="#FC9231"
                              strokeWidth={0}
                            />
                          ))}
                          <p className="pl-2 text-sm text-gray-400 flex items-center">
                            ({item.rating})
                          </p>
                        </div>
                        <h1 className="text-base lg:text-lg text-gray-900 dark:text-white font-medium md:truncate md:overflow-ellipsis">
                          {item.title}
                        </h1>
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-xl lg:text-2xl text-gray-900 dark:text-white font-semibold">
                            ${item.price}
                          </p>
                          <button className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl">
                            <ShoppingCart className="h-4 w-4" strokeWidth={1} />
                          </button>
                        </div>
                        <p className="flex gap-2 text-gray-400">
                          Available:{" "}
                          <span className="text-gray-900 dark:text-white">
                            {item.stock}
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <div className="absolute text-gray-900 dark:text-white bottom-[-20px] left-1/2">
          <CarouselPrevious className="dark:bg-[#181D25]" />
          <CarouselNext className="dark:bg-[#181D25]" />
        </div>
      </Carousel>
    </>
  );
}
