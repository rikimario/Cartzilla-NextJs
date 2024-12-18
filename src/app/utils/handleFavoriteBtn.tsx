"use client";

import React, { useEffect, useState } from "react";
import { getUser } from "../../../utils/supabase/actions";
import { createClient } from "../../../utils/supabase/client";
import { Product } from "./products";

interface FavoriteOptionsProps {
  product: Product;
}

export function handleFavoriteBtn({ product }: FavoriteOptionsProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
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
          .eq("user_id", user.id)
          .eq("product_id", product.id);

        if (error) throw new Error("Failed to remove from favorites");
        setIsFavorite(false);
      } else {
        // Add to favorites
        const { error } = await supabase.from("favorites").insert([
          {
            user_id: user.id,
            product_id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          },
        ]);

        if (error) throw new Error("Failed to add to favorites");
        setIsFavorite(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const user = await getUser();
        const supabase = await createClient();

        if (!user) return;

        const { data, error } = await supabase
          .from("favorites")
          .select("id")
          .eq("user_id", user.id)
          .eq("product_id", product.id)
          .single();

        if (error && error.code !== "PGRST116") throw error;

        setIsFavorite(!!data);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    checkFavoriteStatus();
  }, [product]);

  return { isFavorite, toggleFavorite };
}
