"use client";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";

import Link from "next/link";
import React, { useState } from "react";

import Theme from "../Theme";
import DDMobileNav from "./DDMobileNav";
import MobileSearch from "./MobileSearch";
import DesktopNav from "./DesktopNav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import MobileFooter from "./MobileFooter";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleClickNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenNav(!openNav);
  };

  return (
    <nav>
      <div className="h-20 px-4 md:px-12 lg:px-0 flex items-center justify-between lg:justify-around bg-[#222934]">
        <div className="flex gap-2 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden text-[#E0E5EB]">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="dark:bg-[#181D25] dark:text-[white]"
            >
              <ScrollArea className="h-screen">
                <SheetHeader>
                  <SheetTitle className="text-start text-xl">
                    Browse Cartzilla
                  </SheetTitle>
                  <DDMobileNav handleClickNav={handleClickNav} />
                </SheetHeader>
              </ScrollArea>
              <MobileFooter />
            </SheetContent>
          </Sheet>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <div className="hidden lg:block">
                <img src="logo.svg" alt="" />
              </div>
              <h1 className="text-white font-semibold text-xl leading-loose">
                Cartzilla
              </h1>
            </div>
          </Link>
        </div>

        {/* Search  */}
        <div className="hidden lg:flex gap-8">
          <input
            className="h-10 max-w-96 text-lg overflow-auto bg-[#333e4e] outline-none border-none text-[#E0E5EB] rounded-full pl-4 pr-12"
            type="text"
            placeholder="Search"
          />
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

        <div className="flex gap-4 text-[#E0E5EB] items-center">
          <div className="z-50 flex">
            <MobileSearch />
          </div>
          <Theme />
          <button className="hidden lg:block hover:bg-[#333D4C] p-3 hover:rounded-full">
            <Heart className="h-5 w-5 hidden lg:block" strokeWidth={1} />
          </button>
          <button className="hidden lg:block hover:bg-[#333D4C] p-3 hover:rounded-full">
            <User className="h-5 w-5 hidden lg:block" strokeWidth={1} />
          </button>
          <div className="relative">
            <button className="bg-[#333D4C] p-3 rounded-full">
              <ShoppingCart className="h-5 w-5" strokeWidth={1} />
            </button>
            <div className="absolute bg-[#33B36B] text-sm top-0 right-[-12px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex">
              3
            </div>
          </div>
        </div>
      </div>

      <DesktopNav />
    </nav>
  );
}
