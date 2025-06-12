"use client";
import ProductCard from "@/app/[locale]/utils/ProductCard";
import ProductSkeleton from "@/app/[locale]/utils/ProductSkeleton";
import { Product } from "@/lib/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ProductsMain({ product }: { product: Product[] }) {
  const t = useTranslations("Products");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);
  return (
    <div className="py-10 dark:bg-[#181D25]">
      <p className="text-lg ml-1 text-gray-600 dark:text-gray-300 font-light">
        {t("productsMain.found")}{" "}
        <span className="font-bold text-gray-700">{product.length}</span>{" "}
        {t("productsMain.items")}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:gap-2 lg:pt-4 items-center justify-center justify-items-center text-center grid-auto-columns">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : product.map((product, index) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
      </div>
    </div>
  );
}
