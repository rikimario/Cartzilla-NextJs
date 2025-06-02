import { ChevronRight } from "lucide-react";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import SpecialOffersList from "./SpecialOffersList";
import { useTranslations } from "next-intl";

export default function SpecialOffers() {
  const t = useTranslations("Home");
  return (
    <div className="py-4">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200">
        <div className="md:flex md:gap-4">
          <h1 className="text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white font-semibold pb-2">
            {t("SpecialOffersForYou")}
          </h1>
          <CountDownTimer />
        </div>
        <span className="flex items-center pb-14 md:pb-4">
          {t("viewAll")} <ChevronRight strokeWidth={1} className="h-5 w-5" />
        </span>
      </div>

      <div>
        <SpecialOffersList />
      </div>
    </div>
  );
}
