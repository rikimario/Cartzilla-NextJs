"use client";
import { ChevronDown, ChevronUp, Home, User } from "lucide-react";
import React, { useState } from "react";
export default function DDMobileNav() {
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
  };
  return (
    <>
      <div className="absolute dark:bg-dark dark:text-light p-4 z-20 h-screen left-0 right-0 block w-full transition lg:hidden bg-white">
        <ul className="p-12 text-xl text-center dark:text-light items-center text-[#333D4C] border border-[#E0E5EB]">
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <div className="flex gap-1 items-center justify-center pr-5">
              <Home className="h-5 w-5 dark:text-gray-400" />
              <button type="button">Home</button>
            </div>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <div className="flex gap-1 items-center justify-center pr-5">
              <User className="h-5 w-5 dark:text-gray-400" />
              <button type="button">Profile</button>
            </div>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <div className="flex gap-1 items-center justify-center pr-5">
              {openCategories ? (
                <ChevronUp className="h-5 w-5 dark:text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 dark:text-gray-400" />
              )}
              <button onClick={handleClickCategories} type="button">
                Categories
              </button>
            </div>
            <>
              {openCategories ? (
                <div className="flex dark:text-light gap-1 items-center justify-center pt-4 md:pt-0">
                  <ul className="p-4 md:p-8 text-lg text-center items-center text-[#333D4C] border-x border-[#E0E5EB]">
                    <li className="py-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Clothes
                    </li>
                    <li className="py-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Shoes
                    </li>
                    <li className="py-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Electronics
                    </li>
                    <li className="py-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Furniture
                    </li>
                    <li className="py-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Miscellaneous
                    </li>
                  </ul>
                </div>
              ) : null}
            </>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <button type="button">About</button>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <button type="button">Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
}
