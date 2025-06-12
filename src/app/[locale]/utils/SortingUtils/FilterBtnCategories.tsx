import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Product } from "@/lib/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function FilterBtnCategories({
  products = [],
  selectedCategories,
  handleCategoryChange,
}: {
  products?: Product[];
  selectedCategories: string[];
  handleCategoryChange: (selectedCategories: string[]) => void;
}) {
  const t = useTranslations("Products");
  const router = useRouter();

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
        {t("categories")}
      </h2>
      <div className="relative flex flex-col items-start gap-3 mt-4">
        {Array.from(new Set(products?.map((item) => item.category))).map(
          (cat) => (
            <span
              key={cat}
              onClick={() => handleCategoryClick(cat ?? "")}
              className="flex items-center space-x-2"
            >
              <Checkbox
                checked={selectedCategories.includes(cat ?? "")}
                id={cat}
                key={cat}
              />
              <Label htmlFor={cat}>{cat}</Label>
            </span>
          )
        )}
      </div>
    </div>
  );
}
