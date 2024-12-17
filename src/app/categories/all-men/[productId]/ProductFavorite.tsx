"use client";

import { Product } from "@/app/utils/products";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../../../utils/supabase/actions";
import { createClient } from "../../../../../utils/supabase/client";

interface FavoriteOptionsProps {
  product: Product;
}

export default function ProductFavorite({ product }: FavoriteOptionsProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const checkIfFavorite = async () => {
    try {
      const user = await getUser();
      const supabase = await createClient();

      if (!user) {
        console.log("User is not logged in");
        return;
      }

      // Check if product is in favorites
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", product.id);

      if (error) {
        console.error("Error checking favorite status:", error);
        return;
      }

      // If data is returned, check if it's an empty array or not
      if (data && data.length > 0) {
        console.log("Product is in favorites");
        setIsFavorite(true); // Product is in favorites
      } else {
        console.log("Product is not in favorites");
        setIsFavorite(false); // Product is not in favorites
      }
    } catch (error) {
      console.error("Unexpected error while checking favorite:", error);
    }
  };
  const toggleFavorite = async () => {
    try {
      const user = await getUser();
      const supabase = await createClient();

      if (!user) {
        console.log("User is not logged in");
        return;
      }

      if (isFavorite) {
        // Remove from favorites
        const { error } = await supabase
          .from("favorites")
          .delete()
          .eq("user_id", user?.id)
          .eq("product_id", product.id);

        if (error) {
          console.log("Failed to remove from favorites", error);
          return;
        }

        console.log("Product removed from favorites");
        setIsFavorite(false);
      } else {
        const { error } = await supabase.from("favorites").insert([
          {
            user_id: user?.id,
            product_id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          },
        ]);

        if (error) {
          console.log("Failed to add to favorites", error);
          return;
        }

        console.log("Product added to favorites");
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, [product]);
  return (
    <div className="">
      <button
        onClick={toggleFavorite}
        className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-1 md:p-2 rounded-lg h-[62px] w-14"
      >
        <Heart
          className="h-8 w-8 lg:w-10 lg:h-10 text-gray-900 dark:text-white"
          strokeWidth={0.5}
        />
      </button>
    </div>
  );
}
