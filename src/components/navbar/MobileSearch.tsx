"use client";
import { Product } from "@/lib/types";
import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { searchProducts } from "../../../utils/supabase/actions";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

export default function MobileSearch() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
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

  const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
    setSearchQuery("");
  };
  return (
    <div>
      {openSearch ? (
        <div className="flex lg:hidden">
          <div className="absolute top-0 right-0 h-20 left-0 p-4 md:px-12 flex items-center justify-center bg-[#222934]">
            <input
              className="h-full w-full text-lg overflow-auto bg-[#333e4e] outline-none border-none text-[#E0E5EB] rounded-full pl-4 pr-12"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleClickSearch}>
              <X
                className="h-10 w-10 absolute top-5 right-5 md:right-14 text-[#E0E5EB]"
                strokeWidth={1}
              />
            </button>
            <div className="absolute top-20 left-0 right-0 z-50">
              {searchResults.length > 0 && (
                <ScrollArea className="bg-white rounded-lg">
                  <div className="p-4 min-w-96">
                    <h2 className="text-gray-900 text-lg font-bold mb-2">
                      Search Results
                    </h2>
                    <ul>
                      {searchResults.map((result) => (
                        <li
                          className="border border-gray-100 p-2 mb-1"
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
                              <span className="text-gray-700">
                                {result.title}
                              </span>
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
        </div>
      ) : (
        <button className="p-3" onClick={handleClickSearch}>
          <Search className="h-5 w-5 lg:hidden" strokeWidth={1} />
        </button>
      )}
    </div>
  );
}
