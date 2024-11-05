"use client";
import SortProductsBtn from "../../utils/SortingUtils/SortProductsBtn";
import { getProductsCosmetics, Product } from "@/app/utils/products";
import { useEffect, useState } from "react";
import FilterBtnCategories from "../../utils/SortingUtils/FilterBtnCategories";
import FilterBtnPrice from "../../utils/SortingUtils/FilterBtnPrice";
import FilterButton from "../../utils/SortingUtils/FilterButton";
import CosmeticsBrands from "./CosmeticsBrands";
import CosmeticsProducts from "./CosmeticsProducts";

enum SortOrder {
  Relevance = "relevance",
  Name = "name",
  Low = "low",
  High = "high",
}

export default function page() {
  const products = getProductsCosmetics();

  const [sort, setSort] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Relevance);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [value, setValue] = useState<[number, number]>([0, 14000]);
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
    setSelectedBrands(brands);
  }, [brands]);

  useEffect(() => {
    if (selectedCategories.length === 0 && selectedBrands.length === 0) {
      setSort(products);
    } else {
      const filteredProducts = products.filter(
        (product) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand?.toString() || ""))
      );
      setSort(filteredProducts);
    }
  }, [selectedCategories, selectedBrands]);

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

  const handleBrandClick = (brand: string) => {
    const isSelected = brands.includes(brand);

    if (isSelected) {
      setBrands((prev) => prev.filter((c) => c !== brand));
      setSelectedBrands((prev) => prev.filter((c) => c !== brand));
    } else {
      setBrands((prev) => [...prev, brand]);
      setSelectedBrands((prev) => [...prev, brand]);
    }

    const sortedProducts = getSortedProducts(products, sortOrder);
    const filteredProducts = sortedProducts.filter((product) =>
      selectedBrands.includes(product.brand?.toString() || "")
    );
    setSort(filteredProducts);
  };

  const handlePriceChange = (values: [number, number]) => {
    const filteredProducts = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand?.toString() || "")) &&
        product.price >= values[0] &&
        product.price <= values[1]
    );
    setSort(filteredProducts);
  };

  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem] dark:bg-[#181D25]">
      <h1 className="text-2xl font-semibold mt-10">Cosmetics</h1>

      <SortProductsBtn handleChange={handleChange} />

      <div className="flex lg:gap-4 md:justify-start w-full">
        <div className="lg:block hidden">
          <FilterBtnCategories
            handleCategoryClick={handleCategoryClick}
            selectedCategories={selectedCategories}
            currentCategory="Cosmetics"
          />
          <FilterBtnPrice
            values={value}
            setValue={setValue}
            onChange={handlePriceChange}
          />
          <CosmeticsBrands
            handleBrandClick={handleBrandClick}
            selectedBrands={selectedBrands}
            currentCategory="Cosmetics"
          />
        </div>
        <div className="md:flex-1">
          <CosmeticsProducts products={sort} />
        </div>
        <div className="lg:hidden">
          <FilterButton
            handleCategoryClick={handleCategoryClick}
            selectedCategories={selectedCategories}
            values={value}
            setValue={setValue}
            onChange={handlePriceChange}
            handleBrandClick={handleBrandClick}
            selectedBrands={selectedBrands}
            currentCategory="Cosmetics"
          />
        </div>
      </div>
    </div>
  );
}
