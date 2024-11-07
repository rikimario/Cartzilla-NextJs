import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { links } from "./CategoriesLinks";

export default function DesktopNav() {
  return (
    <div className="hidden font-light lg:flex px-4 md:px-12 lg:px-0 justify-around bg-[#222934]">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-[#E0E5EB] min-w-[15rem] bg-gray-700 py-2 px-4 rounded-md flex justify-between">
          Categories{" "}
          <span>
            <ChevronDown strokeWidth={1} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[15rem]">
          {/* All categories */}
          <DropdownMenuItem>
            <div className="flex justify-between items-center">
              <Link className="flex gap-[6.59rem]" href="/all-categories">
                All Categories{" "}
                <span>
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </Link>
            </div>
          </DropdownMenuItem>
          {links.map((link) => (
            <DropdownMenuSub key={link.name}>
              <DropdownMenuSubTrigger>{link.name}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {link.sublinks.map((sublink) => (
                    <DropdownMenuItem key={link.name}>
                      <Link href={sublink.link}>{sublink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}

          {/* Sports */}
          <DropdownMenuItem>
            <Link href="/categories/sports-accessories">
              Sports Accessories
            </Link>
          </DropdownMenuItem>

          {/* Sunglasses */}
          <DropdownMenuItem>
            <Link href="/categories/sunglasses">Sunglasses</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ul className="flex text-[#E0E5EB] gap-6">
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <button>
            <Link href="/best-sellers">Best Sellers</Link>
          </button>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <button>
            <Link href="/today-deals">Today's Deals</Link>
          </button>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <button>
            <Link href="/new-arrivals">New Arrivals</Link>
          </button>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <button>
            <Link href="/about">About</Link>
          </button>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded-md">
          <button>
            <Link href="/contact">Contact</Link>
          </button>
        </li>
      </ul>

      <div className="flex text-[#E0E5EB] gap-6 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#E0E5EB] text-xs items-center flex">
            Eng{" "}
            <span>
              <ChevronDown strokeWidth={1} size={16} />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Bg</DropdownMenuLabel>
            <DropdownMenuLabel>Eng</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-[#E0E5EB] text-xs items-center flex">
            USD($){" "}
            <span>
              <ChevronDown strokeWidth={1} size={16} />
            </span>
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
