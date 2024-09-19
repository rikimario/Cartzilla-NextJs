"use client";
import FilterButtonMen from "./mobile-filter-btn/FilterButtonMen";
import MenProducts from "./MenProducts";
import SortProductsBtn from "./SortProductsBtn";
import getProductsMen, { Product } from "@/app/utils/products";
import { useEffect, useState } from "react";
import FilterBtnCategories from "./mobile-filter-btn/FilterBtnCategories";
import FilterBtnPrice from "./mobile-filter-btn/FilterBtnPrice";
import FilterBtnBrands from "./mobile-filter-btn/FilterBtnBrands";

enum SortOrder {
  Relevance = "relevance",
  Name = "name",
  Low = "low",
  High = "high",
}

export default function page() {
  const products = getProductsMen();

  const [sort, setSort] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Relevance);
  const getSortedProducts = (
    filteredProducts: Product[],
    sortOrder: SortOrder
  ) => {
    switch (sortOrder) {
      case SortOrder.Relevance:
        return filteredProducts.sort((a, b) => a.id - b.id);
      case SortOrder.Name:
        return filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      case SortOrder.Low:
        return filteredProducts.sort((a, b) => a.price - b.price);
      case SortOrder.High:
        return filteredProducts.sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  useEffect(() => {
    setSort(products);
  }, [products]);

  useEffect(() => {
    setSelectedCategories(categories);
  }, [categories]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setSort(products);
    } else {
      const filteredProducts = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setSort(filteredProducts);
    }
  }, [selectedCategories]);

  const handleChange = (value: string) => {
    if (value === "low") {
      setSort((prev) => [...prev].sort((a, b) => a.price - b.price));
      setSortOrder(SortOrder.Low);
    } else if (value === "high") {
      setSort((prev) => [...prev].sort((a, b) => b.price - a.price));
      setSortOrder(SortOrder.High);
    } else if (value === "name") {
      setSort((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
      setSortOrder(SortOrder.Name);
    } else if (value === "relevance") {
      setSort((prev) => [...prev].sort((a, b) => a.id - b.id));
      setSortOrder(SortOrder.Relevance);
    }
  };

  const handleCategoryClick = (category: string) => {
    const isSelected = categories.includes(category);

    if (isSelected) {
      setCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setCategories((prev) => [...prev, category]);
    }

    setSelectedCategories(categories);

    const sortedProducts = getSortedProducts(products, sortOrder);
    const filteredProducts = sortedProducts.filter((product) =>
      categories.includes(product.category)
    );
    setSort(filteredProducts);
  };

  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem]">
      <h1 className="text-2xl font-semibold">Men's Category</h1>

      <SortProductsBtn handleChange={handleChange} />

      <div className="flex gap-4 xl:justify-between">
        <div className="lg:block hidden">
          <FilterBtnCategories
            handleCategoryClick={handleCategoryClick}
            selectedCategories={selectedCategories}
          />
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
