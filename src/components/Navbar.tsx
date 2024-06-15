"use client";
import {
  ChevronDown,
  ChevronUp,
  Home,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import React, { useState } from "react";

import Theme from "./Theme";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
  };

  const mobileNav: React.ReactNode = (
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
                <div className="flex  dark:text-light gap-1 items-center justify-center pt-4 md:pt-0">
                  <ul className="p-4  md:p-12 text-lg text-center items-center text-[#333D4C] border-x border-[#E0E5EB]">
                    <li className="py-4 my-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Clothes
                    </li>
                    <li className="py-4 my-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Shoes
                    </li>
                    <li className="py-4 my-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Electronics
                    </li>
                    <li className="py-4 my-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
                      Furniture
                    </li>
                    <li className="py-4 my-4 border-b dark:text-light text-[#4f5e75] border-[#E0E5EB]">
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

  return (
    <nav>
      <div className="h-20 px-4 md:px-12 flex items-center bg-[#222934]">
        <div className="flex-1 flex gap-2 items-center">
          <button onClick={handleClick} className="lg:hidden text-[#E0E5EB]">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <h1 className="text-white font-semibold text-xl leading-loose">
            Cartzilla
          </h1>
        </div>
        <div className="flex gap-4 text-[#E0E5EB] items-center">
          <Search className="h-5 w-5" strokeWidth={1} />
          <Theme />
          <div className="bg-[#333D4C] p-3 rounded-full">
            <ShoppingCart className="h-5 w-5" strokeWidth={1} />
          </div>
        </div>
      </div>

      {open && mobileNav}
    </nav>
  );
}
