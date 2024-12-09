import { Heart, User, UserCheck } from "lucide-react";
import React from "react";
import { createClient } from "../../../utils/supabase/server";
import Link from "next/link";

export default async function MobileFooter() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <div className="absolute flex bottom-0 left-0 right-0 bg-inherit py-6 border-t-2 border-gray-200 items-center justify-center gap-12">
      {data.user ? (
        <Link href={"/profile"}>
          <button className="flex items-center justify-center w-full p-2 gap-2">
            Account
          </button>
        </Link>
      ) : (
        <Link href={"/login"}>
          <button className="flex items-center justify-center w-full border-r-2 border-x-gray-200 p-2 gap-2">
            <span>
              <User className="h-6 w-6" strokeWidth={1} />
            </span>
            Account
          </button>
        </Link>
      )}
      <div className="flex items-center justify-center p-2 gap-2">
        <span>
          <Heart className="h-6 w-6" strokeWidth={1} />
        </span>
        Wishlist
      </div>
    </div>
  );
}
