"use client";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";

export default function FilterBtnPrice() {
  const [value, setValue] = useState([0, 5000]);
  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold mb-6">
        Price
      </h2>
      <div>
        <Slider
          min={0}
          max={5000}
          step={50}
          defaultValue={value}
          onValueChange={(value) => setValue(value)}
        />

        <div className="flex justify-between items-center mt-8">
          <p className="p-4 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {value[0]}
          </p>{" "}
          -{" "}
          <p className="p-4 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {value[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
