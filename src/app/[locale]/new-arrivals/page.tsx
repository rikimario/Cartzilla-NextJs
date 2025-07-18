import Image from "next/image";
import React from "react";

export default function NewArrivals() {
  return (
    <div>
      <Image
        className="w-full h-full object-cover"
        src="/under-construction.webp"
        alt="under-construction"
        width={1000}
        height={1000}
      />
    </div>
  );
}
