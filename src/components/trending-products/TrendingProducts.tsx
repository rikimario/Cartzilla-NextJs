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
    <div className="py-4">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200">
        <h1 className="text-xl lg:text-2xl text-gray-900 dark:text-white font-semibold pb-6">
          Trending Products
        </h1>
        <span className="flex items-center pb-6">
          view all <ChevronRight strokeWidth={1} className="h-5 w-5" />
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-2 lg:pt-4 items-center justify-center justify-items-center text-center">
        {products.slice(100, 108).map((item, index) => (
          <TrendingProductsCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
