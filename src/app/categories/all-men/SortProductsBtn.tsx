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

const SORT_OPTIONS = [
  { value: "relevance", name: "Relevance" },
  { value: "name", name: "Name" },
  { value: "low", name: "Price: Low to High" },
  { value: "high", name: "Price: High to Low" },
] as const;

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
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
