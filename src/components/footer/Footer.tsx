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
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#222934] dark:bg-[#181D25] px-3 xl:px-0">
      <div className="max-w-[83rem] mx-auto bg-[#222934] dark:bg-[#181D25] text-white">
        <div className="flex gap-2">
          <div className="pt-16 pb-10 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Cartzilla</h1>
            <p className="text-sm text-gray-300">{t("contactPrompt")}</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#E0E5EB] text-sm md:text-xs xl:text-sm items-center md:w-full bg-gray-700 p-2 rounded-md flex justify-between">
                {t("helpAndConsulting")}
                <span>
                  <ChevronDown strokeWidth={1} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#181D25] text-gray-300 border-gray-500">
                <DropdownMenuItem>{t("helpCenter")}</DropdownMenuItem>
                <DropdownMenuItem>{t("supportChat")}</DropdownMenuItem>
                <DropdownMenuItem>{t("openTicket")}</DropdownMenuItem>
                <DropdownMenuItem>{t("callCenter")}</DropdownMenuItem>
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
