import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import React from "react";

export default function FilterButton() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed flex bottom-0 left-0 right-0 bg-[#222934] text-white py-6 border-t-[1px] border-opacity-20 border-white items-center justify-center gap-2">
            <span>
              <Filter className="h-6 w-6" />
            </span>
            Filters
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="dark:bg-[#181D25] dark:text-[white]"
        >
          <ScrollArea className="h-screen">
            <SheetHeader>
              <SheetTitle className="text-start text-xl">
                Filters and sort
              </SheetTitle>
            </SheetHeader>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
