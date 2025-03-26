"use client";

import React, { useEffect, useState } from "react";
import { searchProducts } from "../../../../utils/supabase/actions";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="hidden lg:flex gap-8">
      <div className="felx flex-col">
        <input
          className="h-10 max-w-96 text-lg overflow-auto bg-[#333e4e] outline-none border-none text-[#E0E5EB] rounded-full pl-4 pr-12"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="absolute top-16 z-50">
          {searchResults.length > 0 && (
            <ScrollArea className="bg-white rounded-lg">
              <div className="p-4 w-72 h-96">
                <h2 className="text-lg font-bold mb-2">Search Results</h2>
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.product_id}>
                      <Link href={`/categories/${result.product_id}`}>
                        <span>{result.title}</span>
                        <Image
                          width={100}
                          height={100}
                          src={result.thumbnail}
                          alt={result.title}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-[#333D4C] p-3 h-10 w-10 rounded-full flex items-center justify-center">
          <span className="text-[#F55266]">%</span>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Only this month</p>
          <h2 className="text-[#E0E5EB]">Super sale 20%</h2>
        </div>
      </div>
    </div>
  );
}
