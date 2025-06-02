import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavLanguageChange() {
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;

    router.refresh();
  };
  return (
    <div className="flex text-[#E0E5EB] gap-6 p-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-[#E0E5EB] text-xs items-center flex space-x-1">
          <GlobeIcon size={20} /> <span>{locale}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Button
              className="w-full"
              onClick={() => handleLocaleChange("bg")}
              variant={"ghost"}
            >
              Български
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Button
              className="w-full"
              onClick={() => handleLocaleChange("en")}
              variant={"ghost"}
            >
              English
            </Button>
          </DropdownMenuLabel>
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
  );
}
