"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortProductsBtnProps {
  handleChange: (value: string) => void;
}

export default function SortProductsBtn({
  handleChange,
}: SortProductsBtnProps) {
  return (
    <div className="flex items-center lg:justify-end mt-4 text-nowrap">
      <label className="text-sm font-semibold text-gray-900 dark:text-white">
        Sort by:
      </label>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-44 dark:bg-inherit text-gray-600 dark:text-white border-none">
          <SelectValue className="text-gray-300" placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Relevance">Relevance</SelectItem>
          <SelectItem value="Popularity">Popularity</SelectItem>
          <SelectItem value="low">Price: Low to High</SelectItem>
          <SelectItem value="high">Price: High to Low</SelectItem>
          <SelectItem value="Newest Arrivals">Newest Arrivals</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
