import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function NewsLetter() {
  const t = useTranslations("Newsletter");
  return (
    <div className="flex flex-col items-center justify-center text-center px-3 bg-gray-100 dark:bg-gray-800">
      <div className="py-12">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-900 font-semibold dark:text-white">
            {t("title")}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 py-4">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 w-full  md:items-center md:justify-center">
          <input
            className="w-full p-2 bg-[#E0E5EB] dark:bg-gray-800 border border-gray-300 rounded-3xl"
            type="email"
            name="email"
            required
            placeholder={t("placeholder")}
          />
          <Button className="bg-[#F55266] hover:bg-[#F2223B] w-full md:w-1/3 p-3 font-normal dark:text-white rounded-3xl">
            {t("button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
