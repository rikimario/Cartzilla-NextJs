import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-20 px-4 md:px-10 lg:px-16 dark:bg-[#181D25]">
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[250px] xl:h-[110px]">
        <Image src="/apple-dark-mode.svg" alt="" width={150} height={150} />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[250px] xl:h-[110px]">
        <Image src="/motorola-dark-mode.svg" alt="" width={150} height={150} />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[250px] xl:h-[110px]">
        <Image src="/canon-dark-mode.svg" alt="" width={150} height={150} />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[250px] xl:h-[110px]">
        <Image src="/samsung-dark-mode.svg" alt="" width={150} height={150} />
      </div>
      <div className="flex items-center justify-center border border-gray-300 rounded-xl xl:w-[250px] xl:h-[110px]">
        <Image src="/sony-dark-mode.svg" alt="" width={150} height={150} />
      </div>
    </div>
  );
}
