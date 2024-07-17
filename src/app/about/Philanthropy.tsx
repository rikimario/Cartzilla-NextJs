import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Philanthropy() {
  return (
    <div className="p-4 md:flex md:gap-8">
      <div className="py-8 w-full md:w-1/2 md:py-0 md:px-0">
        <Image
          className="rounded-xl h-full w-full object-cover"
          src="/about-video-cover.jpg"
          alt="about-video-cover"
          width={600}
          height={600}
        />
      </div>

      <div className="px-4 py-8 md:px-0 bg-gray-100 rounded-xl w-full md:w-1/2 dark:bg-gradient-to-r dark:from-[#1B273A] dark:to-[#1F2632]">
        <div className="p-4 lg:px-8 xl:px-20 h-full flex flex-col justify-center items-start">
          <h1 className="text-2xl xl:text-3xl xl:pr-12 text-gray-900 dark:text-white font-semibold pr-6">
            The role of philanthropy in building a better world
          </h1>
          <p className="text-gray-600 dark:text-gray-300 py-4">
            Charitable contributions are a vital aspect of building a better
            world. These contributions come in various forms, including monetary
            donations...
          </p>
          <div className="pt-10">
            <Button
              className="bg-inherit border-gray-900 dark:border-white flex gap-1 hover:bg-gray-900 hover:text-white"
              variant="outline"
              size="lg"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
