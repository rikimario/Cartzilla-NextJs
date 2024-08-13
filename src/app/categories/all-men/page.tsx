import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Men's Category</h1>

      <div className="flex items-center gap-2 mt-4">
        <label
          className="text-sm font-semibold text-gray-900 dark:text-white"
          htmlFor=""
        >
          Sort by:
        </label>
        <Select>
          <SelectTrigger className="w-1/2 md:w-1/4 dark:bg-inherit text-gray-600 dark:text-white border-none">
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
    </div>
  );
}
