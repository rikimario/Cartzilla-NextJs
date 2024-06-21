"use client";
import { ChevronDown, ChevronUp, Home, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type DDMobileNavProps = {
  handleClickNav: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DDMobileNav({ handleClickNav }: DDMobileNavProps) {
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [openSubCategories, setOpenSubCategories] = useState<boolean>(false);

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
  };

  const handleSubClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSubCategories(!openSubCategories);
  };

  return (
    <div className="dark:bg-[#181D25] dark:text-[white]">
      <ul className=" text-xl dark:bg-[#181D25] dark:text-[white] text-[#333D4C] border-[#E0E5EB]">
        <li className="py-4 my-4 border-b border-[#E0E5EB]">
          <div className="flex gap-1 items-center pr-5">
            <Home className="h-5 w-5 dark:text-gray-400" />
            <button onClick={handleClickNav} type="button">
              <Link href="/">Home</Link>
            </button>
          </div>
        </li>
        <li className="py-4 my-4 border-b border-[#E0E5EB]">
          <div className="flex gap-1 items-center pr-5">
            <User className="h-5 w-5 dark:text-gray-400" />
            <button onClick={handleClickNav} type="button">
              <Link href="/profile">Profile</Link>
            </button>
          </div>
        </li>
        <li className="py-4 my-4 border-b border-[#E0E5EB]">
          <div className="flex gap-1 items-center pr-5">
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
                <ul className="gap-8 flex flex-col md:p-8 text-lg text-left items-center text-[#333D4C] border-[#E0E5EB]">
                  <div className="flex flex-col p-2 gap-2">
                    <button
                      onClick={handleSubClickCategories}
                      className=" border-b dark:text-gray-300 text-xl text-[#4f5e75] border-[#E0E5EB]"
                    >
                      Men
                    </button>
                    <>
                      {openSubCategories ? (
                        <ul className="gap-4 flex flex-col md:p-8 text-lg p-2 text-end text-[#333D4C] border-[#E0E5EB]">
                          <li className="">Shirts</li>
                          <li className="">Shoes</li>
                          <li className="">Watches</li>
                        </ul>
                      ) : null}
                    </>
                  </div>
                  <div className="flex flex-col p-2 gap-2">
                    <button
                      onClick={handleSubClickCategories}
                      className=" border-b dark:text-gray-300 text-xl text-[#4f5e75] border-[#E0E5EB]"
                    >
                      Woman
                    </button>
                    <>
                      {openSubCategories ? (
                        <ul className="gap-4 flex flex-col md:p-8 text-lg p-2 text-end text-[#333D4C] border-[#E0E5EB]">
                          <li className="">Tops</li>
                          <li className="">Dresses</li>
                          <li className="">Shoes</li>
                          <li className="">Bags</li>
                          <li className="">Watches</li>
                          <li className="">Jewelry</li>
                        </ul>
                      ) : null}
                    </>
                  </div>
                </ul>
              </div>
            ) : null}
          </>
        </li>
        <li className="py-4 my-4 border-b text-start pl-5 border-[#E0E5EB]">
          <button onClick={handleClickNav} type="button">
            <Link href="/best-sellers">Best Sellers</Link>
          </button>
        </li>
        <li className="py-4 my-4 border-b text-start pl-5 border-[#E0E5EB]">
          <button onClick={handleClickNav} type="button">
            <Link href="/todays-deals">Today's Deals</Link>
          </button>
        </li>
        <li className="py-4 my-4 border-b text-start pl-5 border-[#E0E5EB]">
          <button onClick={handleClickNav} type="button">
            <Link href="/new-arrivals">New Arrivals</Link>
          </button>
        </li>
        <li className="py-4 my-4 border-b text-start pl-5 border-[#E0E5EB]">
          <button onClick={handleClickNav} type="button">
            <Link href="/about">About</Link>
          </button>
        </li>
        <li className="py-4 my-4 border-b text-start pl-5 border-[#E0E5EB]">
          <button onClick={handleClickNav} type="button">
            <Link href="/contact">Contact</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
