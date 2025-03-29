import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import FooterAccordion from "./FooterAccordion";
import FooterMenus from "./FooterMenus";
import FooterCategories from "./FooterCategories";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-[#222934] dark:bg-[#181D25]">
      <div className="max-w-[83rem] mx-auto bg-[#222934] dark:bg-[#181D25] text-white">
        <div className="flex gap-2">
          <div className="pt-16 pb-10 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Cartzilla</h1>
            <p className="text-sm text-gray-300">
              Got questions? Contact us 24/7
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#E0E5EB] text-sm md:text-xs xl:text-sm items-center md:w-full bg-gray-700 p-2 rounded-md flex justify-between">
                Help and consulting
                <span>
                  <ChevronDown strokeWidth={1} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#181D25] text-gray-300 border-gray-500">
                <DropdownMenuItem>Help center & FAQ</DropdownMenuItem>
                <DropdownMenuItem>Support chat</DropdownMenuItem>
                <DropdownMenuItem>Open support ticket</DropdownMenuItem>
                <DropdownMenuItem>Call center</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:flex w-full justify-evenly pt-16 pb-10">
            <FooterMenus />
          </div>
        </div>

        <div className="md:hidden">
          <FooterAccordion />
        </div>

        <FooterCategories />

        <FooterBottom />
      </div>
    </footer>
  );
}
