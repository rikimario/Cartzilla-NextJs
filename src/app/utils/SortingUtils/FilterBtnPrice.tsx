"use client";
import { Slider } from "@/components/ui/slider";
import { Product } from "@/lib/types";

export default function FilterBtnPrice({
  products,
  selectedCategories,
  selectedBrands,
  values,
  setValue,
  onFilteredProducts,
}: {
  products: Product[];
  selectedCategories: string[];
  selectedBrands: string[];
  values: [number, number];
  setValue: (newValue: [number, number]) => void;
  onFilteredProducts: (filteredProducts: Product[]) => void;
}) {
  const handlePriceChange = (newValues: [number, number]) => {
    setValue(newValues);

    const filteredProducts = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand?.toString() || "")) &&
        product.price >= newValues[0] &&
        product.price <= newValues[1]
    );

    onFilteredProducts(filteredProducts);
  };
  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 dark:text-white mt-6">
      <h2 className="text-start text-xl text-gray-700 dark:text-white font-semibold mb-6">
        Price
      </h2>
      <div>
        <Slider
          min={0}
          max={40000}
          step={1}
          defaultValue={values}
          onValueChange={(value) =>
            handlePriceChange(value as [number, number])
          }
        />

        <div className="flex justify-between items-center mt-8">
          <p className="p-3 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {values[0]}
          </p>{" "}
          -{" "}
          <p className="p-3 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {values[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
