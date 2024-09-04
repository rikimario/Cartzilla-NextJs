"use client";
import FilterButtonMen from "./mobile-filter-btn/FilterButtonMen";
import MenProducts from "./MenProducts";
import FilterSectionMen from "./FilterSectionMen";
import SortProductsBtn from "./SortProductsBtn";
import getProductsMen from "@/app/utils/products";
import { useEffect, useState } from "react";

export default function page() {
  const products = getProductsMen();
  const [sort, setSort] = useState(products);

  useEffect(() => {
    setSort(products);
  }, [products]);

  const handleChange = (value: string) => {
    const tempArray = [...products];
    if (value === "low") {
      tempArray.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      tempArray.sort((a, b) => b.price - a.price);
    } else if (value === "name") {
      tempArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSort(tempArray);
  };

  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem]">
      <h1 className="text-2xl font-semibold">Men's Category</h1>

      <SortProductsBtn handleChange={handleChange} />

      <div className="flex gap-4 xl:justify-between">
        <div className="lg:block hidden">
          <FilterSectionMen />
        </div>
        <MenProducts products={sort} />
        <div className="lg:hidden">
          <FilterButtonMen />
        </div>
      </div>
    </div>
  );
}
