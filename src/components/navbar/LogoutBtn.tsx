import { LogOut } from "lucide-react";
import { logout } from "../../../utils/supabase/actions";

export default function LogoutBtn() {
  return (
    <>
      <button onClick={logout}>
        <LogOut className="h-5 w-5 hidden lg:block" strokeWidth={1}>
          Logout
        </LogOut>
      </button>
    </>
  );
}
