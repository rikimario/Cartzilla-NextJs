"use client";

import { User } from "@supabase/supabase-js";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../../utils/supabase/actions";
import { createClient } from "../../../../utils/supabase/client";
import Link from "next/link";

export default function NavShoppingCart() {
  const [product, setProduct] = useState<Array<object>>([{}]);
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
      const { data: cart, error } = await supabase.from("cart").select("*");

      if (error) {
        console.error("Error fetching cart:", error);
      } else {
        setProduct(cart || []);
      }
    };

    fetchFavorites();

    // Set up real-time subscription for changes to the "cart" table
    const subscription = supabase
      .channel("realtime:cart")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cart" },
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
        <Link href={"/cart"} className="bg-[#333D4C] p-3 rounded-full flex">
          <ShoppingCart className="h-5 w-5" strokeWidth={1} />
          <span className="absolute bg-[#33B36B] text-xs top-0 right-[-5px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex text-white">
            {product.length}
          </span>
        </Link>
      ) : (
        <Link href={"/login"} className="bg-[#333D4C] p-3 rounded-full flex">
          <ShoppingCart className="h-5 w-5" strokeWidth={1} />
          <span className="absolute bg-[#33B36B] text-sm top-0 right-[-5px] border-2 border-[#222934] rounded-full h-6 w-6 items-center justify-center flex">
            0
          </span>
        </Link>
      )}
    </div>
  );
}
