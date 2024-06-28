import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function NewArrivalsList() {
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => setLaptops(data.products));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tablets")
      .then((res) => res.json())
      .then((data) => setTablets(data.products));
  }, []);

  return (
    <>
      <div className="md:grid md:grid-cols-2">
        {laptops.map(
          (item: {
            title: string;
            price: string;
            thumbnail: string;
            id: number;
          }) => (
            <div className="flex text-center items-center gap-2" key={item.id}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={120}
                height={120}
              />
              <div className="text-start flex flex-col gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#FC9231]"
                      size={14}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <h1 className="text-xs text-gray-900 dark:text-white font-medium">
                  {item.title}
                </h1>
                <p className="text-base text-gray-900 dark:text-white font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
          )
        )}

        {tablets.map(
          (item: {
            title: string;
            price: string;
            thumbnail: string;
            id: number;
          }) => (
            <div className="flex text-center items-center gap-2" key={item.id}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={120}
                height={120}
              />
              <div className="text-start flex flex-col gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#FC9231]"
                      size={14}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <h1 className="text-xs text-gray-900 dark:text-white font-medium">
                  {item.title}
                </h1>
                <p className="text-base text-gray-900 dark:text-white font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
