"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function WishlistContent() {
  const [favorites, setFavorites] = useState<
    Array<{
      title: string;
      product_id: string;
      thumbnail: string;
      price: number;
      category: string;
    }>
  >([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const supabase = await createClient();

        const { data: favorites, error } = await supabase
          .from("favorites")
          .select("title, product_id, thumbnail, price, category");

        if (error) throw error;

        setFavorites(favorites.reverse());
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);
  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold text-gray-700 mb-2">Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, index) => (
          <div key={index} className="relative">
            <Card>
              <Link href={`/categories/${favorite.product_id}`}>
                <CardContent className="flex flex-col p-2">
                  <Image
                    className="lg:w-[200px] lg:h-[200px] self-center"
                    src={favorite.thumbnail}
                    alt={favorite.title}
                    width={160}
                    height={160}
                  />
                  <div className="text-gray-700 p-2 space-y-1">
                    <p className="text-xs lg:text-lg text-gray-900 dark:text-white font-medium truncate overflow-ellipsis">
                      {favorite.title}
                    </p>
                    <p className="text-xs lg:text-xl text-gray-900 dark:text-white font-semibold">
                      ${favorite.price}
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
            <button className="absolute bottom-2 right-4 bg-gray-200 dark:bg-gray-700 p-2 md:p-3 rounded-xl">
              <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" strokeWidth={1} />
            </button>
            <span className="absolute top-2 right-5">
              <Checkbox className="h-3 w-3 md:h-4 md:w-4 border-gray-400" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
