"use client";
import { ChevronRight } from "lucide-react";
import TrendingProductsCard from "./TrendingProductsCard";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { getProducts } from "../../../utils/supabase/actions";

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
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
        {products.slice(100, 108).map((item, index) => (
          <TrendingProductsCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
