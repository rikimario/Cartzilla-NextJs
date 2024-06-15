"use client";
import { Search, X } from "lucide-react";
import React, { useState } from "react";

export default function MobileSearch() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };
  return (
    <>
      {openSearch ? (
        <div className="flex lg:hidden">
          <div className="absolute top-0 right-0 h-20 left-0 p-4 md:px-12 flex items-center justify-center bg-[#222934]">
            <input
              className="h-full w-full text-lg overflow-auto bg-[#333e4e] outline-none border-none text-[#E0E5EB] rounded-full pl-4 pr-12"
              type="text"
              placeholder="Search"
            />
            <button onClick={handleClickSearch}>
              <X
                className="h-10 w-10 absolute top-5 right-5 md:right-14 text-[#E0E5EB]"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleClickSearch}>
          <Search className="h-5 w-5 lg:hidden" strokeWidth={1} />
        </button>
      )}
    </>
  );
}
