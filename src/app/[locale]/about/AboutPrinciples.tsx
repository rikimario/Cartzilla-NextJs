import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AboutPrinciples() {
  const t = useTranslations("About");
  return (
    <div className="md:flex md:gap-8 md:py-6">
      <div className="px-4 md:px-0 md:w-4/5 md:h-2/3">
        <Image
          className="rounded-xl h-full w-full object-cover"
          src="/delivery.jpg"
          alt="delivery"
          width={600}
          height={600}
        />
      </div>

      <div className="px-4 md:px-0 pt-8 w-full">
        <p className="px-4 pt-4 text-gray-600 dark:text-gray-300">
          {t("principles.paragraph1")}
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white p-4">
          {t("principles.title")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 px-4">
          {t("principles.paragraph2")}
        </p>

        <div className="px-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold">
                {t("principles.customerFocus")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {t("principles.customerFocusDesription")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-semibold">
                {t("principles.bettingOnReputation")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {t("principles.bettingOnReputationDescription")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-semibold">
                {t("principles.fastAndEnjoyable")}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {t("principles.fastAndEnjoyableDescription")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
