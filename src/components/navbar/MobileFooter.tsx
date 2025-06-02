import { Heart, User } from "lucide-react";
import { createClient } from "../../../utils/supabase/server";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function MobileFooter() {
  const supabase = await createClient();
  const t = await getTranslations("MobileFooter");

  const { data, error } = await supabase.auth.getUser();
  return (
    <div className="absolute flex bottom-0 left-0 right-0 bg-inherit py-6 border-t-2 border-gray-200 items-center justify-center gap-12">
      {data.user ? (
        <Link href={`/profile?tab=Orders`}>
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
        href={`/profile?tab=Wishlist`}
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
