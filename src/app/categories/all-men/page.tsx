"use client";
import SortProductsBtn from "../../utils/SortingUtils/SortProductsBtn";
import { useEffect, useState } from "react";
import FilterBtnCategories from "../../utils/SortingUtils/FilterBtnCategories";
import FilterBtnPrice from "../../utils/SortingUtils/FilterBtnPrice";
import FilterButton from "../../utils/SortingUtils/FilterButton";
import { getProducts } from "../../../../utils/supabase/actions";
import { Product, SortOrder } from "@/lib/types";
import ProductsMain from "@/app/utils/ProductsMain";
import Brands from "@/app/utils/Brands";

export default function page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Relevance);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [value, setValue] = useState<[number, number]>([0, 40000]);

  const category: string[] = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    getProducts().then((products) => {
      const filteredProducts = products.filter((product) =>
        category.includes(product.category)
      );
      setProducts(filteredProducts);
    });
  }, []);

  const handleSortedProductsChange = (newSortOrder: SortOrder) => {
    setSortOrder(newSortOrder);
  };

  const handleCategoryChange = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
  };

  const applySorting = (filteredProducts: Product[]) => {
    const sorted = [...filteredProducts];
    switch (sortOrder) {
      case SortOrder.Relevance:
        sorted.sort((a, b) => a.product_id - b.product_id);
        break;
      case SortOrder.Name:
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SortOrder.Low:
        sorted.sort((a, b) => a.price - b.price);
        break;
      case SortOrder.High:
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand?.toString() || "")) &&
        product.price >= value[0] &&
        product.price <= value[1]
    );
    applySorting(filteredProducts);
  }, [selectedCategories, selectedBrands, value, products, sortOrder]);

  return (
    <div className="p-4 xl:px-[5.4rem] 2xl:px-[7.7rem] dark:bg-[#181D25]">
      <h1 className="text-4xl font-semibold mt-10">Men</h1>

      <SortProductsBtn
        handleSortedProductsChange={handleSortedProductsChange}
      />

      <div className="flex lg:gap-4 md:justify-start w-full">
        <div className="lg:block hidden">
          <FilterBtnCategories
            products={products}
            handleCategoryChange={handleCategoryChange}
            onFilteredProducts={(filteredProducts) => setSort(filteredProducts)}
            category={category}
          />
          <FilterBtnPrice
            products={products}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            values={value}
            setValue={setValue}
            onFilteredProducts={(filteredProducts) =>
              setSortedProducts(filteredProducts)
            }
          />
          <Brands
            products={products}
            selectedBrands={selectedBrands}
            onBrandChange={handleBrandChange}
            onFilteredProducts={(filteredProducts) => setSort(filteredProducts)}
          />
        </div>
        <div className="md:flex-1">
          <ProductsMain products={sortedProducts} />
        </div>
        {/* <div className="lg:hidden">
          <FilterButton
            handleCategoryClick={handleCategoryClick}
            selectedCategories={selectedCategories}
            values={value}
            setValue={setValue}
            onChange={handlePriceChange}
            handleBrandClick={handleBrandClick}
            selectedBrands={selectedBrands}
            currentCategory="Men"
          />
        </div> */}
      </div>
    </div>
  );
}
