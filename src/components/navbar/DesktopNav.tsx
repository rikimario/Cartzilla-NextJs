import { ChevronDown } from "lucide-react";
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
          {/* Men */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Men</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Shirts</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
                <DropdownMenuItem>Watches</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Woman */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Woman</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Tops</DropdownMenuItem>
                <DropdownMenuItem>Dresses</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
                <DropdownMenuItem>Bags</DropdownMenuItem>
                <DropdownMenuItem>Watches</DropdownMenuItem>
                <DropdownMenuItem>Jewelry</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Electronics */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Electronics</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Laptops</DropdownMenuItem>
                <DropdownMenuItem>Tablets</DropdownMenuItem>
                <DropdownMenuItem>Smartphones</DropdownMenuItem>
                <DropdownMenuItem>Mobile Accessories</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Home */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Home</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Furniture</DropdownMenuItem>
                <DropdownMenuItem>Kitchen</DropdownMenuItem>
                <DropdownMenuItem>Decorations</DropdownMenuItem>
                <DropdownMenuItem>Groceries</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Cosmetics */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Cosmetics</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Beauty</DropdownMenuItem>
                <DropdownMenuItem>Skin Care</DropdownMenuItem>
                <DropdownMenuItem>Fragrances</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Automotive */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Automotive</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Cars</DropdownMenuItem>
                <DropdownMenuItem>Motorcycles</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Sports */}
          <DropdownMenuItem>Sports Accessories</DropdownMenuItem>

          {/* Sunglasses */}
          <DropdownMenuItem>Sunglasses</DropdownMenuItem>
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
