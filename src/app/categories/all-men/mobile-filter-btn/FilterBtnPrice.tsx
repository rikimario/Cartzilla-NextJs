"use client";
import { Product } from "@/app/utils/products";
import { Slider } from "@/components/ui/slider";

interface FilterBtnPriceProps {
  values: [number, number];
  setValue: (newValue: [number, number]) => void;
  onChange: (values: [number, number]) => void;
}

export default function FilterBtnPrice({
  values,
  setValue,
  onChange,
}: FilterBtnPriceProps) {
  const handlePriceChange = (values: [number, number]) => {
    onChange(values);
    setValue(values);
  };
  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold mb-6">
        Price
      </h2>
      <div>
        <Slider
          min={0}
          max={14000}
          step={1}
          defaultValue={values}
          onValueChange={(value) =>
            handlePriceChange(value as [number, number])
          }
        />

        <div className="flex justify-between items-center mt-8">
          <p className="p-4 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {values[0]}
          </p>{" "}
          -{" "}
          <p className="p-4 border border-gray-200 rounded-xl min-w-24 max-w-24 text-center">
            $ {values[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
