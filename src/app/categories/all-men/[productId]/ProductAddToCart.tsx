import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";

export default function ProductAddToCart() {
  return (
    <div className="">
      <Button className="flex items-center dark:text-white gap-2 h-[62px] w-[178px] rounded-lg bg-[#F55266] hover:bg-[#F2223B]">
        <ShoppingCart /> Add to cart
      </Button>
    </div>
  );
}
