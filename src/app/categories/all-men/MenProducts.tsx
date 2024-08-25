"use client";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function MenProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="px-4 md:px-0 py-10 dark:bg-[#181D25]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-2 lg:pt-4 items-center justify-center justify-items-center text-center">
        {products.map(
          (item: {
            title: string;
            price: string;
            thumbnail: string;
            id: number;
          }) => (
            <div
              className="relative flex flex-col text-center items-center gap-2 lg:min-w-[250px] pb-8 hover:shadow-lg transition-transform duration-600"
              key={item.id}
            >
              <div className="absolute top-2 right-1">
                <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">
                  <Heart
                    className="h-3 w-3 lg:w-5 lg:h-5 text-gray-900 dark:text-white"
                    strokeWidth={1}
                  />
                </button>
              </div>
              <Image
                className="md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"
                src={item.thumbnail}
                alt={item.title}
                width={120}
                height={120}
              />
              <div className="flex flex-col gap-2  w-full text-start p-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#FC9231] lg:w-5 lg:h-5"
                      size={14}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <h1 className="text-xs lg:text-base text-gray-900 dark:text-white font-medium md:truncate md:overflow-ellipsis">
                  {item.title}
                </h1>
                <div className="flex items-center justify-between pt-4">
                  <p className="text-base lg:text-lg text-gray-900 dark:text-white font-semibold">
                    ${item.price}
                  </p>
                  <button className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl">
                    <ShoppingCart className="h-4 w-4" strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
