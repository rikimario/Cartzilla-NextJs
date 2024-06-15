"use client";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

import Theme from "../Theme";
import DDMobileNav from "./DDMobileNav";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleClickNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenNav(!openNav);
  };

  return (
    <nav>
      <div className="h-20 px-4 md:px-12 flex items-center bg-[#222934]">
        <div className="flex-1 flex gap-2 items-center">
          <button onClick={handleClickNav} className="lg:hidden text-[#E0E5EB]">
            {openNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

      {openNav && <DDMobileNav />}
    </nav>
  );
}
