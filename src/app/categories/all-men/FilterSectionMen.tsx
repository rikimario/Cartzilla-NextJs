import React from "react";
import FilterBtnCategories from "./mobile-filter-btn/FilterBtnCategories";
import FilterBtnPrice from "./mobile-filter-btn/FilterBtnPrice";
import FilterBtnBrands from "./mobile-filter-btn/FilterBtnBrands";

export default function FilterSectionMen() {
  return (
    <div>
      <FilterBtnCategories />
      <FilterBtnPrice />
      <FilterBtnBrands />
    </div>
  );
}
