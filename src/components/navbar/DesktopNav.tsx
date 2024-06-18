import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export default function DesktopNav() {
  return (
    <div className="hidden font-light lg:flex px-4 md:px-12 lg:px-0 justify-around bg-[#222934]">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-[#E0E5EB] bg-gray-700 p-2 rounded-md flex gap-10">
          Categories{" "}
          <span>
            <ChevronDown strokeWidth={1} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Clothes</DropdownMenuItem>
          <DropdownMenuItem>Shoes</DropdownMenuItem>
          <DropdownMenuItem>Electronics</DropdownMenuItem>
          <DropdownMenuItem>Miscellaneous</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ul className="flex text-[#E0E5EB] gap-6">
        <li className="hover:bg-gray-700 p-2 rounded-md">Best Sellers</li>
        <li className="hover:bg-gray-700 p-2 rounded-md">Today's Deals</li>
        <li className="hover:bg-gray-700 p-2 rounded-md">New Arrivals</li>
        <li className="hover:bg-gray-700 p-2 rounded-md">About</li>
        <li className="hover:bg-gray-700 p-2 rounded-md">Contact</li>
      </ul>

      <div className="flex text-[#E0E5EB] gap-6 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#E0E5EB]">
            Eng
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Bg</DropdownMenuLabel>
            <DropdownMenuLabel>Eng</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#E0E5EB]">
            USD($)
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>USD($)</DropdownMenuLabel>
            <DropdownMenuLabel>BG(lv)</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
