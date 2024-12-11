import { LogOut } from "lucide-react";
import { logout } from "../../../utils/supabase/actions";

export default function LogoutBtn() {
  return (
    <>
      <button className="flex gap-2 items-center ml-4" onClick={logout}>
        <LogOut className="h-5 w-5 hidden lg:block" strokeWidth={1} />
        Logout
        {/* Logout
        </LogOut> */}
      </button>
    </>
  );
}
