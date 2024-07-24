import React from "react";
import AllCategoriesBrands from "./AllCategoriesBrands";

export default function page() {
  return (
    <div className="px-4 xl:px-20 py-12">
      <h1 className="text-2xl text-gray-900 font-semibold">Shop Categories</h1>
      <AllCategoriesBrands />
    </div>
  );
}
