"use client";
import {
  Menu,
  ShoppingCart,
  User,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import Link from "next/link";
import React, { useState } from "react";

import Theme from "../Theme";
import DDMobileNav from "./DDMobileNav";
import MobileSearch from "./MobileSearch";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const handleClickNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenNav(!openNav);
  };

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
  };

  return (
    <nav>
      <div className="h-20 px-4 md:px-12 lg:px-0 flex items-center justify-between lg:justify-around bg-[#222934]">
        <div className="flex gap-2 items-center">
          <button onClick={handleClickNav} className="lg:hidden text-[#E0E5EB]">
            {openNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="flex gap-2 items-center">
            <div className="hidden lg:block">
              <img src="logo.svg" alt="" />
            </div>
            <h1 className="text-white font-semibold text-xl leading-loose">
              Cartzilla
            </h1>
          </div>
        </div>

        {/* Search  */}
        <div className="hidden lg:flex gap-8">
          <input
            className="h-10 max-w-96 text-lg overflow-auto bg-[#333e4e] outline-none border-none text-[#E0E5EB] rounded-full pl-4 pr-12"
            type="text"
            placeholder="Search"
          />
          <div className="flex gap-2 items-center">
            <div className="bg-[#333D4C] p-3 h-10 w-10 rounded-full flex items-center">
              <span className="text-[#F55266]">%</span>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Only this month</p>
              <h2 className="text-[#E0E5EB]">Super sale 20%</h2>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-[#E0E5EB] items-center">
          <MobileSearch />
          <Theme />
          <User className="h-5 w-5 hidden lg:block" strokeWidth={1} />
          <div className="bg-[#333D4C] p-3 rounded-full">
            <ShoppingCart className="h-5 w-5" strokeWidth={1} />
          </div>
        </div>
      </div>

      <div className="hidden font-light lg:flex px-4 md:px-12 lg:px-0 justify-around bg-[#222934]">
        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={handleClickCategories}
            className="text-[#E0E5EB] bg-gray-700 p-2 rounded-md flex gap-10"
          >
            Categories{" "}
            <span>
              {openCategories ? (
                <ChevronUp strokeWidth={1} />
              ) : (
                <ChevronDown strokeWidth={1} />
              )}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Clothes</DropdownMenuItem>
            <DropdownMenuItem>Shoes</DropdownMenuItem>
            <DropdownMenuItem>Electronics</DropdownMenuItem>
            <DropdownMenuItem>Miscellaneous</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ul className="flex text-[#E0E5EB] gap-6">
          <li className="hover:bg-gray-700 p-2 rounded-md">Best Sellers</li>
          <li className="hover:bg-gray-700 p-2 rounded-md">Today's Deals</li>
          <li className="hover:bg-gray-700 p-2 rounded-md">New Arrivals</li>
          <li className="hover:bg-gray-700 p-2 rounded-md">About</li>
          <li className="hover:bg-gray-700 p-2 rounded-md">Contact</li>
        </ul>

        <div className="flex text-[#E0E5EB] gap-6 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-[#E0E5EB]">
              Eng
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Bg</DropdownMenuLabel>
              <DropdownMenuLabel>Eng</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-[#E0E5EB]">
              USD($)
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>USD($)</DropdownMenuLabel>
              <DropdownMenuLabel>BG(lv)</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {openNav && <DDMobileNav handleClickNav={handleClickNav} />}
    </nav>
  );
}
