import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/lib/types";
import { useTranslations } from "next-intl";
import React from "react";

export default function ShippingOptions({ product }: { product: Product }) {
  const t = useTranslations("Categories");
  return (
    <div className="mt-6">
      <Accordion type="single" collapsible className="w-full">
        {/* Shipping */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base font-semibold">
            {t("shippingOptions.shipping")}
          </AccordionTrigger>
          <div className="flex justify-between">
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="flex flex-col gap-5">
                <p className="">{t("shippingOptions.place1")}</p>
                <p className="">{t("shippingOptions.place2")}</p>
                <p className="">{t("shippingOptions.place3")}</p>
              </div>
            </AccordionContent>
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="flex flex-col gap-5">
                <p>{t("shippingOptions.time1")}</p>
                <p>{t("shippingOptions.time2")}</p>
                <p>{t("shippingOptions.time3")}</p>
              </div>
            </AccordionContent>
            <AccordionContent className="text-gray-600 dark:text-gray-300">
              <div className="text-end flex flex-col gap-5">
                <p className="text-gray-900 dark:text-gray-300 font-semibold">
                  {t("shippingOptions.free")}
                </p>
                <p className="text-gray-900 dark:text-gray-300 font-semibold">
                  $5.00
                </p>
                <p className="text-gray-900 dark:text-gray-300 font-semibold">
                  $10.00
                </p>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        {/* Warranty */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base font-semibold">
            {t("shippingOptions.warrantyInfo")}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            <p className="text-gray-600 dark:text-gray-300 font-semibold">
              {product.warrantyInformation}
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* Return */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base font-semibold">
            {t("shippingOptions.returnPolicy")}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 dark:text-gray-300">
            <p className="text-gray-600 dark:text-gray-300 font-semibold">
              {product.returnPolicy}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
