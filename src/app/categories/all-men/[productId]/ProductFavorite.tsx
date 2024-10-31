import { Heart } from "lucide-react";
import React from "react";

export default function ProductFavorite() {
  return (
    <div className="">
      <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-1 md:p-2 rounded-lg h-[62px] w-14">
        <Heart
          className="h-8 w-8 lg:w-10 lg:h-10 text-gray-900 dark:text-white"
          strokeWidth={0.5}
        />
      </button>
    </div>
  );
}
