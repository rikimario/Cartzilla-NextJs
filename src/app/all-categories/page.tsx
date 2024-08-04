import React from "react";
import AllCategoriesBrands from "./AllCategoriesBrands";
import AllCategoriesList from "./AllCategoriesList";
import AllCategoriesBanner from "./AllCategoriesBanner";
import AllCategoriesProducts from "./AllCategoriesProducts";

export default function page() {
  return (
    <div className="px-4 md:px-12 lg:px-4 xl:px-32 py-12 dark:bg-[#181D25]">
      <h1 className="text-2xl text-gray-900 dark:text-white font-semibold">
        Shop Categories
      </h1>
      <AllCategoriesBrands />
      <AllCategoriesList />
      <AllCategoriesBanner />
      <AllCategoriesProducts />
    </div>
  );
}
