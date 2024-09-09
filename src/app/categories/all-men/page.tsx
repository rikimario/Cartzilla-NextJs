"use client";
import FilterButtonMen from "./mobile-filter-btn/FilterButtonMen";
import MenProducts from "./MenProducts";
import FilterSectionMen from "./FilterSectionMen";
import SortProductsBtn from "./SortProductsBtn";
import getProductsMen, { Product } from "@/app/utils/products";
import { useEffect, useState } from "react";
import FilterBtnCategories from "./mobile-filter-btn/FilterBtnCategories";
import FilterBtnPrice from "./mobile-filter-btn/FilterBtnPrice";
import FilterBtnBrands from "./mobile-filter-btn/FilterBtnBrands";

export default function page() {
  const products = getProductsMen();

  const [sort, setSort] = useState(products);
  const getSortedProducts = (products: Product[], sort: Product[]) => {
    if (sort[0].price < sort[1].price) {
      return products.sort((a, b) => a.price - b.price);
    } else if (sort[0].price > sort[1].price) {
      return products.sort((a, b) => b.price - a.price);
    } else if (sort[0].title.localeCompare(sort[1].title) < 0) {
      return products.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      return products.sort((a, b) => a.id - b.id);
    }
  };

  useEffect(() => {
    setSort(products);
  }, [products]);

  const handleChange = (value: string) => {
    if (value === "low") {
      setSort((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (value === "high") {
      setSort((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else if (value === "name") {
      setSort((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (value === "relevance") {
      setSort((prev) => [...prev].sort((a, b) => a.id - b.id));
    }
  };

  const handleCategoryClick = (category: string) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );

    if (filteredProducts.length === 0) {
      setSort(getSortedProducts(products, sort));
    } else {
      setSort(getSortedProducts(filteredProducts, sort));
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
