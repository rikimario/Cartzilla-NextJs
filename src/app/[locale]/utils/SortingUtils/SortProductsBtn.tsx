"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOrder } from "@/lib/types";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SortProductsBtn({
  handleSortedProductsChange,
}: {
  handleSortedProductsChange: (sortOrder: SortOrder) => void;
}) {
  const t = useTranslations("Products");
  const SORT_OPTIONS = [
    { value: "relevance", name: t("relevance") },
    { value: "name", name: t("name") },
    { value: "low", name: t("low") },
    { value: "high", name: t("high") },
  ] as const;
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSort = useMemo(
    () => searchParams.getAll("sort") || "relevance",
    [searchParams]
  );
  const handleSortChange = (value: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("sort", value);

    // Replace the URL without reloading the page
    router.replace(`${window.location.pathname}?${urlParams.toString()}`);

    handleSortedProductsChange(value as SortOrder);
  };
  return (
    <div className="flex items-center lg:justify-end mt-4 text-nowrap">
      <label className="text-sm font-semibold text-gray-900 dark:text-white">
        {t("sortBy")}:
      </label>
      <Select
        value={selectedSort[0] || "relevance"}
        onValueChange={handleSortChange}
      >
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
