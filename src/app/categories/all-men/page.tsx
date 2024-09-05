"use client";
import FilterButtonMen from "./mobile-filter-btn/FilterButtonMen";
import MenProducts from "./MenProducts";
import FilterSectionMen from "./FilterSectionMen";
import SortProductsBtn from "./SortProductsBtn";
import getProductsMen from "@/app/utils/products";
import { useEffect, useState } from "react";
import FilterBtnCategories from "./mobile-filter-btn/FilterBtnCategories";
import FilterBtnPrice from "./mobile-filter-btn/FilterBtnPrice";
import FilterBtnBrands from "./mobile-filter-btn/FilterBtnBrands";

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

  const handleCategoryClick = (category: string) => {
    console.log("Selected category:", category);
    const filteredProducts = products.filter((product) => {
      return product.category === category;
    });

    if (filteredProducts.length === 0) {
      setSort(products);
    } else {
      setSort(filteredProducts);
    }
  };

  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem]">
      <h1 className="text-2xl font-semibold">Men's Category</h1>

      <SortProductsBtn handleChange={handleChange} />

      <div className="flex gap-4 xl:justify-between">
        <div className="lg:block hidden">
          {/* <FilterSectionMen /> */}
          <FilterBtnCategories handleCategoryClick={handleCategoryClick} />
          <FilterBtnPrice />
          <FilterBtnBrands />
        </div>
        <MenProducts products={sort} />
        <div className="lg:hidden">
          <FilterButtonMen />
        </div>
      </div>
    </div>
  );
}
