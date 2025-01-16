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
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [value, setValue] = useState<[number, number]>([0, 40000]);

  const category: string[] = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = (await getProducts()).filter((product) =>
        category.includes(product.category)
      );
      setProducts(fetchedProducts);
      setSortedProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleSortedProductsChange = (newSortOrder: SortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    if (!products.length) return;

    let updatedProducts = [...products];

    if (selectedCategories.length)
      updatedProducts = updatedProducts.filter((p) =>
        selectedCategories.includes(p.category)
      );

    if (selectedBrands.length)
      updatedProducts = updatedProducts.filter((p) =>
        selectedBrands.includes(p.brand?.toString() || "")
      );

    updatedProducts = updatedProducts.filter(
      (p) => p.price >= value[0] && p.price <= value[1]
    );

    setSortedProducts(sortProducts(updatedProducts, sortOrder));
  }, [selectedCategories, selectedBrands, value, sortOrder, products]);

  const sortProducts = (products: Product[], order: SortOrder) => {
    return [...products].sort((a, b) => {
      switch (order) {
        case SortOrder.Name:
          return a.title.localeCompare(b.title);
        case SortOrder.Low:
          return a.price - b.price;
        case SortOrder.High:
          return b.price - a.price;
        default:
          return a.product_id - b.product_id;
      }
    });
  };
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
            handleCategoryChange={setSelectedCategories}
            selectedCategories={selectedCategories}
          />
          <FilterBtnPrice
            products={products}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            values={value}
            setValue={setValue}
          />
          <Brands
            products={products}
            selectedBrands={selectedBrands}
            onBrandChange={setSelectedBrands}
          />
        </div>
        <div className="md:flex-1">
          <ProductsMain product={sortedProducts} />
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
