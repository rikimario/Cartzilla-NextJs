"use client";
import { ChevronDown, ChevronUp, Home, User } from "lucide-react";
import { links } from "./MobileLinks";
import Link from "next/link";
import React, { useState } from "react";

type DDMobileNavProps = {
  handleClickNav: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function DDMobileNav({ handleClickNav }: DDMobileNavProps) {
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");

  const handleClickCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenCategories(!openCategories);
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
              <div className="flex dark:text-gray-300 gap-1 pt-4">
                <ul className="flex flex-col text-lg text-left items-left text-[#333D4C] border-[#E0E5EB]">
                  {links.map((link) => (
                    <div className="flex flex-col p-2 gap-2">
                      <button
                        onClick={() =>
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading("")
                        }
                        className="border-b dark:text-gray-300 pl-2 text-left text-lg text-[#4f5e75] border-[#E0E5EB]"
                      >
                        {link.name}
                      </button>
                      {link.submenu && (
                        <ul className="flex flex-col text-base p-2 text-[#333D4C] border-[#E0E5EB]">
                          <div
                            className={`${
                              heading === link.name ? "lg:hidden" : "hidden"
                            }`}
                          >
                            {link.sublinks.map((link) => (
                              <li className="p-2 dark:text-gray-400">
                                <Link href={link.link}>{link.name}</Link>
                              </li>
                            ))}
                          </div>
                        </ul>
                      )}
                    </div>
                  ))}
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
