import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import React from "react";

export default function AllCategoriesBrands() {
  return (
    <div className="overflow-auto lg:flex lg:justify-center lg:items-center">
      <ScrollArea className="p-4  w-[80rem] xl:w-full whitespace-nowrap">
        <div className="rounded-md flex justify-around">
          <Image
            src="/apple-dark-mode.svg"
            alt="apple"
            width={200}
            height={200}
          />
          <Image
            src="/motorola-dark-mode.svg"
            alt="motorola"
            width={200}
            height={200}
          />
          <Image
            src="/canon-dark-mode.svg"
            alt="canon"
            width={200}
            height={200}
          />
          <Image
            src="/samsung-dark-mode.svg"
            alt="samsung"
            width={200}
            height={200}
          />
          <Image
            src="/sony-dark-mode.svg"
            alt="sony"
            width={200}
            height={150}
          />
          <Image
            src="/xiaomi-dark-mode.svg"
            alt="xiaomi"
            width={150}
            height={150}
          />
        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
