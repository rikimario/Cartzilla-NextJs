import { ChevronRight } from "lucide-react";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import SpecialOffersList from "./SpecialOffersList";

export default function SpecialOffers() {
  return (
    <div className="p-4 dark:bg-[#181D25]">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200">
        <div className="md:flex md:gap-4">
          <h1 className="text-lg md:text-xl lg:text-2xl lg:pl-[4rem] xl:pl-[7.7rem] text-gray-900 dark:text-white font-semibold pb-2">
            Special offers for you
          </h1>
          <CountDownTimer />
        </div>
        <span className="flex items-center pb-14 md:pb-4 lg:pr-[4rem] xl:pr-[6.5rem]">
          view all <ChevronRight strokeWidth={1} className="h-5 w-5" />
        </span>
      </div>

      <div>
        <SpecialOffersList />
      </div>
    </div>
  );
}
