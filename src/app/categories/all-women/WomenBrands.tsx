"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getProductsWomen } from "@/app/utils/products";

interface FilterBtnBrandsProps {
  handleBrandClick: (brand: string) => void;
  selectedBrands: string[];
}

export default function WomenBrands({
  handleBrandClick,
  selectedBrands,
}: FilterBtnBrandsProps) {
  const products = getProductsWomen();

  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 dark:text-white mt-6">
      <h2 className="text-start text-xl text-gray-700 dark:text-white font-semibold">
        Brand
      </h2>
      <div className="relative flex flex-col items-start gap-2 mt-4">
        {Array.from(new Set(products.map((item) => item.brand))).map(
          (brand) => (
            <span
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className="flex items-center space-x-2"
            >
              <Checkbox
                checked={selectedBrands.includes(brand)}
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
