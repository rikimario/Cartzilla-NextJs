import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function NewArrivals() {
  return (
    <div className="p-4 w-full dark:bg-[#181D25]">
      <h1 className="text-2xl text-gray-900 dark:text-white font-semibold pb-6">
        New Arrivals
      </h1>
      <div className="relative h-[500px] w-full py-4 px-4 bg-[url('/NewArrivalsBg.jpg')] bg-cover rounded-xl flex flex-col items-center justify-end">
        <div className="text-center flex flex-col items-center gap-4 pb-14">
          <Image
            className="absolute top-4 md:w-[300px] md:h-[300px]"
            src="/MacBook.png"
            width={250}
            height={250}
            alt=""
          />
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            MacBook
          </h2>
          <p className="text-gray-400">Be Pro Anywhere</p>
          <Button className="bg-[#F55266] hover:bg-[#F2223B] flex gap-1 items-center justify-center font-normal dark:text-white">
            From $1,199{" "}
            <span>
              <ArrowUpRight className="h-5 w-5" strokeWidth={1} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
