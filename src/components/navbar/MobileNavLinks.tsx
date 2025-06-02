import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslations } from "next-intl";
import MobileLanguageChange from "./_components/MobileLanguageChange";

export default function MobileNavLinks() {
  const t = useTranslations("Navigation");
  return (
    <>
      <div className="pt-4 text-left px-2 border-b-2 border-gray-200">
        <ul className="py-4 text-lg text-gray-900 dark:text-white">
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/best-sellers"
            >
              {t("bestSellers")}{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/today-deals"
            >
              {t("todayDeals")}{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/new-arrivals"
            >
              {t("newArrivals")}{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/about"
            >
              {t("about")}{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/contact"
            >
              {t("contact")}{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <MobileLanguageChange />
    </>
  );
}
