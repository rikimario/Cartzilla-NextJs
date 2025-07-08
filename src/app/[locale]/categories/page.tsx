import React from "react";
import AllCategoriesBrands from "./AllCategoriesBrands";
import AllCategoriesList from "./AllCategoriesList";
import AllCategoriesBanner from "./AllCategoriesBanner";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("AllCategories");
  return (
    <div className="py-12 dark:bg-[#181D25]">
      <h1 className="text-2xl text-gray-900 dark:text-white font-semibold">
        {t("title")}
      </h1>
      <AllCategoriesBrands />
      <AllCategoriesList />
      <AllCategoriesBanner />
    </div>
  );
}
