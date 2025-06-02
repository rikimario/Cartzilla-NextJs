import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AllCategoriesBanner() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center bg-gradient-to-r from-[#ACCBEE] to-[#E7F0FD] dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632] rounded-xl px-4 pt-4">
        <div className="flex flex-col items-center justify-center md:items-start md:text-start">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white py-3">
            iPhone 14
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm pb-4">
            Apple iPhone 14 128GB Blue
          </p>
          <Button className="bg-[#F55266] hover:bg-[#F2223B] flex gap-1 items-center justify-center font-normal dark:text-white">
            From $899
            <span>
              <ArrowUpRight className="h-5 w-5" strokeWidth={1} />
            </span>
          </Button>
        </div>
        <div className="w-full h-full pr-2">
          <Image
            className="h-full w-full object-cover"
            src="/all-categories-iphone-1.png"
            alt="all-categories-iphone-1"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col text-center justify-end bg-gradient-to-r from-[#FDCBF1] to-[#FFECFA] dark:bg-gradient-to-r dark:from-[#362131] dark:to-[#322730] rounded-xl px-4 pt-4">
        <div className="flex flex-col justify-center items-center pb-4 gap-2">
          <Image
            src="/logo-apple.svg"
            alt="logo-apple"
            width={25}
            height={25}
          />
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Deal of the week
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white pb-6">
            iPad Pro M1
          </h1>
        </div>
        <div className="w-full">
          <Image
            className="h-full w-full object-cover"
            src="/all-categories-ipad.png"
            alt="all-categories-ipad-1"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
