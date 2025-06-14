import { LogOut } from "lucide-react";
import { logout } from "../../../utils/supabase/actions";
import { useTranslations } from "next-intl";

export default function LogoutBtn() {
  const t = useTranslations("Profile");
  return (
    <>
      <button className="flex gap-2 items-center ml-2" onClick={logout}>
        <LogOut className="h-5 w-5 hidden lg:block" strokeWidth={1} />
        {t("logout")}
        {/* Logout
        </LogOut> */}
      </button>
    </>
  );
}
