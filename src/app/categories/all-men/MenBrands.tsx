"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function MenBrands({
  products = [],
  selectedBrands,
  onBrandChange,
  onFilteredProducts,
}: {
  products?: Product[];
  selectedBrands: string[];
  onBrandChange: (selectedBrands: string[]) => void;
  onFilteredProducts: (filteredProducts: Product[]) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrand = useMemo(
    () => searchParams.getAll("brand"),
    [searchParams]
  );

  const filteredProducts = useMemo(() => {
    return selectedBrand.length === 0
      ? products
      : products?.filter((product) =>
          selectedBrand.includes(product.brand || "")
        );
  }, [products, selectedBrand]);

  useEffect(() => {
    onFilteredProducts(filteredProducts);
  }, [filteredProducts, onFilteredProducts]);

  const handleBrandClick = (brand: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentBrand = urlParams.getAll("brand");

    if (currentBrand.includes(brand)) {
      const updatedBrand = currentBrand.filter((b) => b !== brand);
      urlParams.delete("brand");
      updatedBrand.forEach((b) => urlParams.append("brand", b));
    } else {
      urlParams.append("brand", brand);
    }

    router.replace(`${window.location.pathname}?${urlParams.toString()}`);

    const newSelectedBrand = urlParams.getAll("brand");
    onBrandChange(newSelectedBrand);
  };
  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 dark:text-white mt-6">
      <h2 className="text-start text-xl text-gray-700 dark:text-white font-semibold">
        Brand
      </h2>
      <div className="relative flex flex-col items-start gap-2 mt-4">
        {Array.from(new Set(products?.map((item) => item.brand))).map(
          (brand) => (
            <span
              key={brand}
              onClick={() => handleBrandClick(brand ?? "")}
              className="flex items-center space-x-2"
            >
              <Checkbox
                checked={selectedBrands.includes(brand ?? "")}
                id={brand}
                key={brand}
              />
              <Label htmlFor={brand}>{brand}</Label>
            </span>
          )
        )}
      </div>
    </div>
  );
}
