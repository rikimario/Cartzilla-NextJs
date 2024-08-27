import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import FilterButtonMen from "./mobile-filter-btn/FilterButtonMen";
import MenProducts from "./MenProducts";

export default function page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Men's Category</h1>

      <div className="flex items-center mt-4 mr-16">
        <label
          className="text-sm font-semibold w-1/3 text-gray-900 dark:text-white"
          htmlFor=""
        >
          Sort by:
        </label>
        <Select>
          <SelectTrigger className="md:w-1/4 dark:bg-inherit text-gray-600 dark:text-white border-none">
            <SelectValue className="text-gray-300" placeholder="Relevance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Relevance">Relevance</SelectItem>
            <SelectItem value="Popularity">Popularity</SelectItem>
            <SelectItem value="Price: Low to High">
              Price: Low to High
            </SelectItem>
            <SelectItem value="Price: High to Low">
              Price: High to Low
            </SelectItem>
            <SelectItem value="Newest Arrivals">Newest Arrivals</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <MenProducts />
      <div className="lg:hidden">
        <FilterButtonMen />
      </div>
    </div>
  );
}
