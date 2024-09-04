import getProductsMen from "@/app/utils/products";
import { links } from "@/components/navbar/CategoriesLinks";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function FilterBtnCategories() {
  const products = getProductsMen();
  const [sort, setSort] = useState(products);

  // useEffect(() => {
  //   setSort(products);
  // }, [products]);
  // console.log(sort);

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const handleChange = (category: string) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories(checkedCategories.filter((c) => c !== category));
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold">
        Categories
      </h2>
      {links.map((link) => (
        <>
          {link.name === "Men" ? (
            <div className="relative flex flex-col items-start gap-2 mt-4">
              {link.sublinks.map((sublink) => (
                <button
                  key={sublink.name}
                  className={`flex items-center justify-between gap-2 p-2 ${
                    checkedCategories.includes(sublink.name)
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={handleChange.bind(null, sublink.name)}
                >
                  {sublink.name}
                  <span>
                    <ChevronRight className=" h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
