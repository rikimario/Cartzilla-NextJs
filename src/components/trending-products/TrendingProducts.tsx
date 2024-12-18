"use client";
import { getProductsElectronics, Product } from "@/app/utils/products";
import { ChevronRight } from "lucide-react";
import TrendingProductsCard from "./TrendingProductsCard";

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
        {products.slice(28, 36).map((item: Product, index) => (
          <TrendingProductsCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
