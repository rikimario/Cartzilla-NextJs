import { ChevronRight } from "lucide-react";
import React from "react";
import CountDownTimer from "./CountDownTimer";

export default function SpecialOffers() {
  return (
    <div className="p-4 dark:bg-[#181D25]">
      <div className="flex items-center justify-between border-b-[1px] border-gray-200">
        <div>
          <h1 className="text-lg lg:text-2xl lg:pl-[4rem] xl:pl-[7.7rem] text-gray-900 dark:text-white font-semibold pb-2">
            Special offers for you
          </h1>
          <CountDownTimer />
        </div>
        <span className="flex items-center pb-14 lg:pr-[4rem] xl:pr-[6.5rem]">
          view all <ChevronRight strokeWidth={1} className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
