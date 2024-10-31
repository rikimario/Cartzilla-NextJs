import { Product } from "@/app/utils/products";
import React, { useState } from "react";

interface SizesOptionsProps {
  product: Product;
}
export default function ProductSizes({ product }: SizesOptionsProps) {
  const [size, setSize] = useState<string>("");

  const handleClick = (size: string) => {
    setSize(size);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 md:mt-4 mt-8 lg:w-2/3">
      {product.size?.map((s, index) => (
        <button
          key={index}
          className={`flex items-center justify-center p-2 border border-gray-300 hover:border-gray-700 min-w-10 md:min-w-32 lg:min-w-10 ${
            s === size
              ? "border-gray-800 bg-gray-800 text-white"
              : "border-gray-300"
          }`}
          onClick={() => handleClick(s)}
        >
          <p className="">{s}</p>
        </button>
      ))}
    </div>
  );
}
