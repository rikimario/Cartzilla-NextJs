import { ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import MobileCategoriesAccordion from "./MobileCategoriesAccordion";
import MobileNavLinks from "./MobileNavLinks";
import MobileFooter from "./MobileFooter";

export default function DDMobileNav() {
  return (
    <>
      <div className="dark:bg-[#181D25] dark:text-[white]">
        <div className="py-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="relative pr-8 pl-12 justify-between bg-gray-200 rounded-xl text-gray-700">
                <span className="absolute left-4 top-[1.2rem]">
                  <LayoutGrid className="  h-5 w-5" />
                </span>
                Categories
              </AccordionTrigger>
              <AccordionContent className="text-start text-sm p-4 pr-8  border border-gray-100 mt-2">
                <Link
                  className="relative flex items-center gap-2"
                  href="/all-categories"
                >
                  <span>
                    <LayoutGrid className="h-5 w-5 text-gray-400" />
                  </span>
                  All Categories
                  <span className="absolute right-0">
                    <ChevronRight className=" h-4 w-4" />
                  </span>
                </Link>
                <MobileCategoriesAccordion />
              </AccordionContent>
              <MobileNavLinks />
            </AccordionItem>
          </Accordion>
        </div>
        <MobileFooter />
      </div>
    </>
  );
}
