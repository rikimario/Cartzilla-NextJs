"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useCategoryLinks } from "./CategoriesLinks";
import { useState } from "react";
import NavLanguageChange from "./_components/NavLanguageChange";
import { useTranslations } from "next-intl";

export default function DesktopNav() {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations("Navigation");
  const links = useCategoryLinks();
  const closeDropdown = () => {
    setOpen(false);
  };
  return (
    <div className="hidden font-light lg:flex max-w-[83rem] mx-auto justify-between bg-[#222934]">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="text-[#E0E5EB] min-w-[15rem] bg-gray-700 py-2 px-4 rounded-md flex justify-between">
          {t("categories")}{" "}
          <span>
            <ChevronDown strokeWidth={1} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[15rem]">
          {/* All categories */}
          <DropdownMenuItem>
            <div className="flex justify-between items-center">
              <Link
                className="flex gap-[6.59rem]"
                href="/categories"
                onClick={closeDropdown}
              >
                {t("allCategories")}{" "}
                <span>
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </DropdownMenuItem>
          {links.map((link, index) => (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger
              //  ref={dropdownMenuSubTriggerRef}
              >
                <Link href={link.href ?? "/"} onClick={closeDropdown}>
                  <span>{link.name}</span>
                </Link>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {link.sublinks.map((sublink, index) => (
                    <DropdownMenuItem key={index} onClick={closeDropdown}>
                      <Link href={sublink.link}>{sublink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <ul className="flex text-[#E0E5EB] gap-6">
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <Link href="/best-sellers">{t("bestSellers")}</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <Link href="/today-deals">{t("todayDeals")}</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <Link href="/new-arrivals">{t("newArrivals")}</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <Link href="/about">{t("about")}</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>

      <NavLanguageChange />
    </div>
  );
}
