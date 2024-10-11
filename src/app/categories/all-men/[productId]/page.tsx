"use client";
import { getProductById, Product } from "@/app/utils/products";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CircleChevronLeft, CircleChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCount from "./ProductCount";
import ProductAddToCart from "./ProductAddToCart";
import ProductFavorite from "./ProductFavorite";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [thumbImage, setThumbImage] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(Number(params.productId));
      setProduct(data);
      setThumbImage(data.images[0]);
    };
    fetchProduct();
  }, [params.productId]);

  if (!product) return <div>Loading...</div>;
  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem] dark:bg-[#181D25]">
      <div className="flex gap-10 mt-14">
        <div className="w-1/2">
          <Carousel opts={{ watchDrag: false }} className="flex justify-center">
            <CarouselContent>
              <CarouselItem className="flex">
                {/* Prev */}
                <button
                  className="dark:bg-[#181D25]"
                  onClick={() => {
                    const currentIndex = product.images.indexOf(thumbImage);
                    const prevIndex =
                      (currentIndex - 1 + product.images.length) %
                      product.images.length;
                    setThumbImage(product.images[prevIndex]);
                  }}
                >
                  <CircleChevronLeft
                    strokeWidth={1}
                    className="h-10 w-10 text-gray-400"
                  />
                </button>
                <Image
                  src={thumbImage}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                {/* Next */}
                <button
                  className="dark:bg-[#181D25]"
                  onClick={() => {
                    const currentIndex = product.images.indexOf(thumbImage);
                    const nextIndex =
                      (currentIndex + 1) % product.images.length;
                    setThumbImage(product.images[nextIndex]);
                  }}
                >
                  <CircleChevronRight
                    strokeWidth={1}
                    className="h-10 w-10 text-gray-400"
                  />
                </button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <ul className="flex">
            {product.images.map((image, index) => (
              <li key={index} className="flex">
                <Card className="mx-2">
                  <button
                    onClick={() => setThumbImage(image)}
                    className={`${
                      thumbImage === image ? "opacity-100" : "opacity-60"
                    } hover:opacity-100 transition-opacity`}
                  >
                    <Image
                      src={image}
                      alt={product.title}
                      width={150}
                      height={150}
                    />
                  </button>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2">
          <div className="w-2/3">
            <p className="text-lg font-semibold">{product.brand}</p>
            <h2 className="text-3xl text-gray-900 font-bold mt-4">
              {product.title}
            </h2>
            <p className="text-2xl text-gray-900 font-bold mt-4">
              ${product.price}
            </p>
            <button className="flex items-center text-center mt-4">
              {Array.from({ length: 5 }).map((_, index) =>
                product.rating >= index + 1 ? (
                  <Star
                    key={index}
                    className="text-[#FC9231] lg:w-5 lg:h-5"
                    size={16}
                    fill="#FC9231"
                    strokeWidth={0}
                  />
                ) : product.rating > index && product.rating < index + 1 ? (
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
                ({product.reviews.length}) reviews
              </p>
            </button>
            <div className="flex items-center gap-4 mt-8">
              <ProductCount />
              <ProductAddToCart />
              <ProductFavorite />
            </div>
            <p className="max-w-fit mt-6 text-gray-600 font-medium  leading-relaxed">
              {product.description}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
