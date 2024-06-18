"use client";
import { ChevronDown, ChevronUp, Home, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type DDMobileNavProps = {
  handleClickNav: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function DDMobileNav({ handleClickNav }: DDMobileNavProps) {
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
  };
  return (
    <>
      <div className="absolute dark:bg-[#181D25] dark:text-[white] p-4 z-20 h-screen left-0 right-0 block w-full transition lg:hidden bg-white">
        <ul className="p-12 text-xl text-center dark:text-[white] items-center text-[#333D4C] border border-[#E0E5EB]">
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <div className="flex gap-1 items-center justify-center pr-5">
              <Home className="h-5 w-5 dark:text-gray-400" />
              <button onClick={handleClickNav} type="button">
                <Link href="/">Home</Link>
              </button>
            </div>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <div className="flex gap-1 items-center justify-center pr-5">
              <User className="h-5 w-5 dark:text-gray-400" />
              <button onClick={handleClickNav} type="button">
                <Link href="/profile">Profile</Link>
              </button>
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
                <div className="flex dark:text-gray-300 gap-1 items-center justify-center pt-4 md:pt-0">
                  <ul className="p-4 gap-8 flex flex-col md:p-8 text-lg text-center items-center text-[#333D4C] border-x border-[#E0E5EB]">
                    <button onClick={handleClickNav}>
                      <Link
                        href="/clothes"
                        className="py-4 border-b dark:text-gray-300 text-[#4f5e75] border-[#E0E5EB]"
                        type="button"
                      >
                        Clothes
                      </Link>
                    </button>
                    <button onClick={handleClickNav}>
                      <Link
                        href="/shoes"
                        className="py-4 border-b dark:text-gray-300 text-[#4f5e75] border-[#E0E5EB]"
                      >
                        Shoes
                      </Link>
                    </button>
                    <button onClick={handleClickNav}>
                      <Link
                        href="/electronics"
                        className="py-4 border-b dark:text-gray-300 text-[#4f5e75] border-[#E0E5EB]"
                      >
                        Electronics
                      </Link>
                    </button>
                    <button onClick={handleClickNav}>
                      <Link
                        href="/furniture"
                        className="py-4 border-b dark:text-gray-300 text-[#4f5e75] border-[#E0E5EB]"
                      >
                        Furniture
                      </Link>
                    </button>
                    <button onClick={handleClickNav}>
                      <Link
                        href="/miscellaneous"
                        className="py-4 border-b dark:text-gray-300 text-[#4f5e75] border-[#E0E5EB]"
                      >
                        Miscellaneous
                      </Link>
                    </button>
                  </ul>
                </div>
              ) : null}
            </>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <button onClick={handleClickNav} type="button">
              <Link href="/about">About</Link>
            </button>
          </li>
          <li className="py-4 my-4 border-b border-[#E0E5EB]">
            <button onClick={handleClickNav} type="button">
              <Link href="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
