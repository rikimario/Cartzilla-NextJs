"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import getProductsMen from "@/app/utils/products";

// const SORT_OPTIONS = [
//   { value: "fashion trends", name: "Fashion Trends" },
//   { value: "gigabyte", name: "Gigabyte" },
//   { value: "Classic Wear", name: "classic wear" },
//   { value: "casual comfort", name: "Casual Comfort" },
//   { value: "urban chic", name: "Urban Chic" },
//   { value: "nike", name: "Nike" },
//   { value: "puma", name: "Puma" },
//   { value: "off white", name: "Off White" },
//   { value: "fashion timepieces", name: "Fashion Timepieces" },
//   { value: "longines", name: "Longines" },
//   { value: "rolex", name: "Rolex" },
// ] as const;

interface FilterBtnBrandsProps {
  handleBrandClick: (brand: string) => void;
  selectedBrands: string[];
}

export default function FilterBtnBrands({
  handleBrandClick,
  selectedBrands,
}: FilterBtnBrandsProps) {
  const products = getProductsMen();

  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold">Brand</h2>
      <div className="relative flex flex-col items-start gap-2 mt-4">
        {Array.from(new Set(products.map((item) => item.brand))).map(
          (brand) => (
            <button
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
            </button>
          )
        )}
      </div>
    </div>
  );
}
