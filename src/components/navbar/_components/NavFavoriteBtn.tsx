"use client";

import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createClient } from "../../../../utils/supabase/client";
import Link from "next/link";
import { getUser } from "../../../../utils/supabase/actions";
import { User } from "@supabase/supabase-js";

export default function NavFavoriteBtn({
  profileLinks,
}: {
  profileLinks: {
    wishlist: string;
  };
}) {
  const [favorites, setFavorites] = useState<Array<object>>([{}]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const supabase = createClient();
    const fetchFavorites = async () => {
      const { data: favorites, error } = await supabase
        .from("favorites")
        .select("*");

      if (error) {
        console.error("Error fetching favorites:", error);
      } else {
        setFavorites(favorites || []);
      }
    };

    fetchFavorites();

    // Set up real-time subscription for changes to the "favorites" table
    const subscription = supabase
      .channel("realtime:favorites")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "favorites" },
        (payload) => {
          console.log("Change received:", payload);
          fetchFavorites();
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div className="relative">
      {user ? (
        <Link
          href={`/profile?tab=${profileLinks.wishlist}`}
          className="hidden lg:block hover:bg-[#333D4C] p-3 hover:rounded-full"
        >
          <Heart className="h-5 w-5 hidden lg:block" strokeWidth={1} />
          <span className="absolute bg-[#33B36B] text-xs top-0 right-[-5px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex text-white">
            {favorites.length}
          </span>
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="hidden lg:block hover:bg-[#333D4C] p-3 hover:rounded-full"
        >
          <Heart className="h-5 w-5 hidden lg:block" strokeWidth={1} />
          <span className="absolute bg-[#33B36B] text-xs top-0 right-[-5px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex text-white">
            0
          </span>
        </Link>
      )}
    </div>
  );
}
