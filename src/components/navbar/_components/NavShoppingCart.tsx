import { ShoppingCart } from "lucide-react";
import React from "react";

export default function NavShoppingCart() {
  return (
    <div className="relative">
      <button className="bg-[#333D4C] p-3 rounded-full">
        <ShoppingCart className="h-5 w-5" strokeWidth={1} />
      </button>
      <div className="absolute bg-[#33B36B] text-sm top-0 right-[-12px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex">
        0
      </div>
    </div>
  );
}
