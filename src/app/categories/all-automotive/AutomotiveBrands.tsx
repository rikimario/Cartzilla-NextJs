"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  getProductsAutomotive,
  getProductsCosmetics,
  getProductsElectronics,
  getProductsHomeAndKitchen,
  getProductsMen,
  getProductsSportsAccessories,
  getProductsSunglasses,
  getProductsWomen,
} from "@/app/utils/products";

interface FilterBtnBrandsProps {
  handleBrandClick: (brand: string) => void;
  selectedBrands: string[];
  currentCategory: string;
}

export default function AutomotiveBrands({
  handleBrandClick,
  selectedBrands,
  currentCategory,
}: FilterBtnBrandsProps) {
  // const products = getProductsMen();
  let products;
  if (currentCategory === "Men") {
    products = getProductsMen();
  } else if (currentCategory === "Women") {
    products = getProductsWomen();
  } else if (currentCategory === "Electronics") {
    products = getProductsElectronics();
  } else if (currentCategory === "Home & Kitchen") {
    products = getProductsHomeAndKitchen();
  } else if (currentCategory === "Cosmetics") {
    products = getProductsCosmetics();
  } else if (currentCategory === "Automotive") {
    products = getProductsAutomotive();
  } else if (currentCategory === "Sports Accessories") {
    products = getProductsSportsAccessories();
  } else if (currentCategory === "Sunglasses") {
    products = getProductsSunglasses();
  } else {
    // Handle other categories or default to one of the above
    products = getProductsMen(); // or getProductsWomen()
  }

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
