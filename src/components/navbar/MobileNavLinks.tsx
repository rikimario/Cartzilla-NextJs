import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function MobileNavLinks() {
  return (
    <>
      <div className="pt-4 text-left px-2 border-b-2 border-gray-200">
        <ul className="py-4 text-lg text-gray-900 dark:text-white">
          <li className="p-2">
            <Link
              className="flex justify-between items-center pr-4"
              href="/best-sellers"
            >
              Best Sellers{" "}
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
              Today's Deals{" "}
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
              New Arrivals{" "}
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
              About{" "}
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
              Contact{" "}
              <span>
                <ChevronRight strokeWidth={2} size={16} />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-4 mb-44 pl-4 pr-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="text-gray-700 dark:text-white text-sm">
              Eng
            </AccordionTrigger>
            <AccordionContent className="text-start text-sm p-2 border border-gray-200">
              <div className="py-2 flex flex-col gap-2 text-gray-500 dark:text-gray-300">
                <p>English</p>
                <p>Bulgarian</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="text-gray-700 dark:text-white text-sm">
              USD($)
            </AccordionTrigger>
            <AccordionContent className="text-start text-sm p-2 border border-gray-200">
              <div className="py-2 flex flex-col gap-2 text-gray-500 dark:text-gray-300">
                <p>USD($)</p>
                <p>LV(lv)</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
