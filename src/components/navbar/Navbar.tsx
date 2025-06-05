import { Menu, User } from "lucide-react";
import Link from "next/link";
import Theme from "../Theme";
import DDMobileNav from "./DDMobileNav";
import MobileSearch from "./MobileSearch";
import DesktopNav from "./DesktopNav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import MobileFooter from "./MobileFooter";
import { getUser } from "../../../utils/supabase/actions";
import Image from "next/image";
import NavFavoriteBtn from "./_components/NavFavoriteBtn";
import NavShoppingCart from "./_components/NavShoppingCart";
import Search from "./_components/Search";
import { headers } from "next/headers";

const tabTranslations: Record<string, Record<string, string>> = {
  en: { orders: "Orders", wishlist: "Wishlist" },
  bg: { orders: "Поръчки", wishlist: "Любими" },
};
export default async function Navbar() {
  const user = await getUser();

  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") || "en";
  const profileLinks = {
    orders: tabTranslations[locale]?.orders || "Orders",
    wishlist: tabTranslations[locale]?.wishlist || "Wishlist",
  };

  return (
    <nav className="bg-[#222934] w-full px-3 xl:px-0">
      <div className="h-20 max-w-[83rem] mx-auto flex items-center justify-between bg-[#222934]">
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden text-[#E0E5EB]">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetDescription></SheetDescription>
            <SheetContent
              side="left"
              className="dark:bg-[#181D25] dark:text-[white]"
            >
              <ScrollArea className="h-screen">
                <SheetHeader>
                  <SheetTitle className="text-start text-xl">
                    Browse Cartzilla
                  </SheetTitle>
                  <DDMobileNav />
                </SheetHeader>
              </ScrollArea>
              <MobileFooter />
            </SheetContent>
          </Sheet>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <div className="hidden lg:block">
                <Image width={40} height={40} src="/logo.svg" alt="cartzilla" />
              </div>
              <h1 className="text-white font-semibold text-xl leading-loose">
                Cartzilla
              </h1>
            </div>
          </Link>
        </div>

        {/* Search  */}
        <Search />

        <div className="flex items-center gap-2 lg:gap-4 text-[#E0E5EB]">
          <div className="z-50 flex">
            <MobileSearch />
          </div>
          <Theme />
          <NavFavoriteBtn profileLinks={profileLinks} />

          {user ? (
            <div className="hidden lg:flex justify-center text-center gap-1 items-center">
              <Link href={`/profile?tab=${profileLinks.orders}`}>
                <div className="flex items-center">
                  <p className="hidden lg:block size-10 text-lg text-center bg-[#333D4C] p-2 rounded-full">
                    <span className="text-xl">
                      {user?.user_metadata?.full_name.charAt(0).toUpperCase()}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <button className="hidden lg:block hover:bg-[#333D4C] p-3 hover:rounded-full">
                <User className="h-5 w-5 hidden lg:block" strokeWidth={1} />
              </button>
            </Link>
          )}

          <NavShoppingCart />
        </div>
      </div>

      <DesktopNav />
    </nav>
  );
}
