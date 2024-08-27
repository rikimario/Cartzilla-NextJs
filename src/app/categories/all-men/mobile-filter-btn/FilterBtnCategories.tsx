import { links } from "@/components/navbar/CategoriesLinks";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FilterBtnCategories() {
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
                <Link
                  key={sublink.name}
                  className="flex items-center justify-between gap-2 p-2"
                  href={sublink.link}
                >
                  {sublink.name}
                  <span>
                    <ChevronRight className=" h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
