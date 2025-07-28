"use client";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCategoryLinks } from "./CategoriesLinks";
import { SheetClose } from "../ui/sheet";

export default function MobileCategoriesAccordion() {
  const links = useCategoryLinks();
  const [heading, setHeading] = useState<string>("");
  return (
    <div className="py-4 pl-6">
      <Accordion type="single" collapsible className="w-full">
        {links.map((link) => (
          <AccordionItem key={link.name} value={link.name}>
            <AccordionTrigger
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
              className="text-gray-700 dark:text-white"
            >
              {link.name}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 border dark:text-gray-300 border-gray-200 rounded-xl">
              {link.sublinks.map((sublink) => (
                <SheetClose key={sublink.name} asChild>
                  <Link
                    key={sublink.name}
                    className="flex items-center justify-between gap-2 p-2"
                    href={sublink.link}
                  >
                    {sublink.name}
                    <span>
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                </SheetClose>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
