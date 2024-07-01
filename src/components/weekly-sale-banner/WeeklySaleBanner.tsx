import { Percent } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WeeklySaleBanner() {
  return (
    <div className="px-4 py-4 md:py-10 w-full md:flex dark:bg-[#181D25] md:px-12 lg:px-[7rem] xl:px-[14rem]">
      <div className="flex md:w-1/3 items-center justify-center gap-2 pt-14 bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632] md:from-[#ACCBEE] md:to-[#ACCBEE] md:dark:from-[#1B273A] md:dark:to-[#1B273A] rounded-t-xl md:rounded-xl md:border-dashed md:border-r-2 md:border-white md:dark:border-[#181D25] md:p-8 lg:p-12">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-white">20</h1>
        <div className="text-gray-900 dark:text-white text-center flex flex-col items-center">
          <Percent className="h-10 w-10" strokeWidth={2} />
          <p className="text-base font-bold">OFF</p>
        </div>
      </div>

      <div className="relative flex md:w-full flex-col text-center items-center md:items-start justify-center gap-2 py-8 bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632] rounded-b-xl md:rounded-xl">
        <h1 className="text-gray-900 dark:text-white text-2xl px-8 text-center font-medium">
          SEASON WEEKLY SALE 2024
        </h1>
        <p className="text-gray-800 dark:text-white text-xs font-normal px-2 pt-2 md:px-8">
          Use code{" "}
          <span className="p-1 rounded-xl bg-white dark:text-gray-800 font-bold text-sm">
            Sale 2024
          </span>{" "}
          to get the best offer
        </p>
        <div className="md:absolute right-0 md:right-[-2rem] xl:right-10 bottom-[-2rem]">
          <Image
            className="w-full md:h-[140px] lg:h-[180px] xl:h-[200px]"
            src="/weekly-sale-cam.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
