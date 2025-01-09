import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/types";
import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBtnCategories({
  products = [],
  category,
  onFilteredProducts,
  handleCategoryChange,
}: {
  products?: Product[];
  category: string[];
  onFilteredProducts: (filteredProducts: Product[]) => void;
  handleCategoryChange: (selectedCategories: string[]) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  const filteredProducts = useMemo(() => {
    return selectedCategory.length === 0
      ? products ?? []
      : products?.filter((product) =>
          selectedCategory.includes(product.category || "")
        );
  }, [products, selectedCategory]);

  useEffect(() => {
    onFilteredProducts(filteredProducts);
  }, [filteredProducts, onFilteredProducts]);

  const handleCategoryClick = (category: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategories = urlParams.getAll("category");

    if (currentCategories.includes(category)) {
      const updatedCategories = currentCategories.filter(
        (cat) => cat !== category
      );
      urlParams.delete("category");
      updatedCategories.forEach((cat) => urlParams.append("category", cat));
    } else {
      urlParams.append("category", category);
    }

    router.replace(`${window.location.pathname}?${urlParams.toString()}`);

    const newSelectedCategories = urlParams.getAll("category");
    handleCategoryChange(newSelectedCategories);
  };

  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 dark:text-white mt-10">
      <h2 className="text-start text-xl text-gray-700 dark:text-white font-semibold">
        Categories
      </h2>
      {category.map((cat, index) => (
        <div key={index}>
          <span
            onClick={() => handleCategoryClick(cat)}
            key={index}
            className="relative flex flex-col items-start gap-2 mt-4 cursor-pointer"
          >
            <span className="flex items-center justify-between gap-2 p-2 cursor-pointer">
              <Checkbox
                id={cat}
                key={cat}
                checked={selectedCategory.includes(cat)}
              />
              <Label className="cursor-pointer" htmlFor={cat}>
                {cat}
              </Label>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
