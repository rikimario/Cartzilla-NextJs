"use client";

import React, { useEffect, useState } from "react";
import { searchProducts } from "../../../../utils/supabase/actions";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchIcon, X } from "lucide-react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() !== "") {
        const results = await searchProducts(searchQuery);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);
  return (
    <div className="hidden relative lg:flex gap-8">
      <div className="felx flex-col">
        <input
          className="h-10 min-w-96 text-lg overflow-auto border border-white bg-[#333e4e] outline-none text-[#E0E5EB] rounded-full pl-4 pr-12"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery.trim() !== "" ? (
          <X
            onClick={() => setSearchQuery("")}
            className="h-8 w-8 absolute top-1 right-4 cursor-pointer text-[#E0E5EB]"
            strokeWidth={1}
          />
        ) : (
          <SearchIcon
            className="h-8 w-8 absolute top-1 right-4 cursor-pointer text-[#E0E5EB]"
            strokeWidth={1}
          />
        )}
        <div className="absolute top-12 z-50">
          {searchResults.length > 0 && (
            <ScrollArea className="bg-white rounded-lg">
              <div className="p-4 w-72 max-h-[600px] min-w-96">
                <h2 className="text-lg font-bold mb-2">Search Results</h2>
                <ul>
                  {searchResults.map((result) => (
                    <li
                      className="border border-gray-100 hover:border-gray-300 p-2 mb-1"
                      key={result.product_id}
                    >
                      <Link
                        onClick={() => setSearchQuery("")}
                        className="flex items-center gap-2"
                        href={`/categories/${result.product_id}`}
                      >
                        <Image
                          className="bg-gray-100"
                          width={100}
                          height={100}
                          src={result.thumbnail}
                          alt={result.title}
                        />
                        <div className="flex flex-col gap-2">
                          <span>{result.title}</span>
                          <span className="text-gray-900 font-semibold">
                            ${result.price}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
      {/* <div className="flex gap-2 items-center">
        <div className="bg-[#333D4C] p-3 h-10 w-10 rounded-full flex items-center justify-center">
          <span className="text-[#F55266]">%</span>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Only this month</p>
          <h2 className="text-[#E0E5EB]">Super sale 20%</h2>
        </div>
      </div> */}
    </div>
  );
}
