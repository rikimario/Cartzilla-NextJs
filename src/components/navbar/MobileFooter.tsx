import { Heart, User } from "lucide-react";
import { createClient } from "../../../utils/supabase/server";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

const tabTranslations: Record<string, Record<string, string>> = {
  en: { orders: "Orders", wishlist: "Wishlist" },
  bg: { orders: "Поръчки", wishlist: "Любими" },
};

export default async function MobileFooter() {
  const supabase = await createClient();
  const t = await getTranslations("MobileFooter");

  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") || "en";
  const profileLinks = {
    orders: tabTranslations[locale]?.orders || "Orders",
    wishlist: tabTranslations[locale]?.wishlist || "Wishlist",
  };

  const { data, error } = await supabase.auth.getUser();
  return (
    <div className="absolute flex bottom-0 left-0 right-0 bg-inherit py-6 border-t-2 border-gray-200 items-center justify-center gap-12">
      {data.user ? (
        <Link href={`/profile?tab=${profileLinks.orders}`}>
          <button className="flex items-center justify-center w-full p-2 gap-2">
            {t("account")}
          </button>
        </Link>
      ) : (
        <Link href={"/login"}>
          <span className="flex items-center justify-center w-full border-r-2 border-x-gray-200 p-2 gap-2">
            <span>
              <User className="h-6 w-6" strokeWidth={1} />
            </span>
            {t("account")}
          </span>
        </Link>
      )}
      <Link
        href={`/profile?tab=${profileLinks.orders}`}
        className="flex items-center justify-center p-2 gap-2"
      >
        <span>
          <Heart className="h-6 w-6" strokeWidth={1} />
        </span>
        {t("wishlist")}
      </Link>
    </div>
  );
}
