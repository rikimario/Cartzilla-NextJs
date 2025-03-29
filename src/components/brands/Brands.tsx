import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-6 gap-6 py-20">
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image
          src="/apple-dark-mode.svg"
          alt="apple"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image
          src="/motorola-dark-mode.svg"
          alt="motorola"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image
          src="/canon-dark-mode.svg"
          alt="canon"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image
          src="/samsung-dark-mode.svg"
          alt="samsung"
          width={150}
          height={150}
        />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image src="/sony-dark-mode.svg" alt="sony" width={150} height={150} />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[190px] xl:h-[110px]">
        <Image
          src="/xiaomi-dark-mode.svg"
          alt="xiaomi"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
