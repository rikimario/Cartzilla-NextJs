"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function MobileLanguageChange() {
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;

    router.refresh();
  };
  return (
    <div className="pt-4 mb-44 pl-4 pr-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="text-gray-700 dark:text-white text-sm">
            {locale === "en" ? "English" : "Български"}
          </AccordionTrigger>
          <AccordionContent className="text-start text-sm p-2 border border-gray-200">
            <div className="py-2 flex flex-col gap-2 text-gray-500 dark:text-gray-300">
              <button onClick={() => handleLocaleChange("en")}>English</button>
              <button onClick={() => handleLocaleChange("bg")}>
                Български
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="text-gray-700 dark:text-white text-sm">
            USD($)
          </AccordionTrigger>
          <AccordionContent className="text-start text-sm p-2 border border-gray-200">
            <div className="py-2 flex flex-col gap-2 text-gray-500 dark:text-gray-300">
              <p>USD($)</p>
              <p>LV(lv)</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
