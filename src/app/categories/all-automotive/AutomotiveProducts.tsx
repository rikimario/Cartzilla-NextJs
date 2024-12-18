"use client";
import ProductCard from "@/app/utils/ProductCard";
import { Product } from "@/app/utils/products";
import ProductSkeleton from "@/app/utils/ProductSkeleton";
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
          : products.map((item, index) => (
              <ProductCard key={item.id} product={item} />
            ))}
      </div>
    </div>
  );
}
