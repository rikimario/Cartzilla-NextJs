import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslations } from "next-intl";

export default function FooterAccordion() {
  const t = useTranslations("FooterMenus");
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("company")}</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {t("aboutCompany")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("ourTeam")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("careers")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("contactUs")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("news")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("account")}</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {t("yourAccount")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("shippingPolicies")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("refundReplacements")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("deliveryInfo")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("orderTracking")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("taxesFees")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("customerService")}</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {t("paymentMethods")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("moneyBackGuarantee")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("productReturns")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("supportCenter")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("shipping")}
          </AccordionContent>
          <AccordionContent className="text-gray-300">
            {t("termsConditions")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
