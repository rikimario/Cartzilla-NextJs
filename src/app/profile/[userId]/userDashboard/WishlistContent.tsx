"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUser } from "../../../../../utils/supabase/actions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WishlistContent() {
  const [favorites, setFavorites] = useState<
    Array<{
      title: string;
      product_id: number;
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
          .select("*");

        if (error) throw error;

        setFavorites(favorites.reverse());
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const handleRemove = async (productId: number) => {
    const user = await getUser();
    const supabase = await createClient();
    try {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user?.id)
        .eq("product_id", productId);

      if (error && error.code !== "PGRST116") throw error;

      const { data: updatedFavorites, error: fetchError } = await supabase
        .from("favorites")
        .select("title, product_id, thumbnail, price, category");

      if (fetchError) throw fetchError;

      setFavorites(updatedFavorites.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-2 dark:text-white">
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 border-b-[1px] dark:text-white">
        Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, index) => (
          <div key={index} className="relative">
            <Card className="bg-inherit">
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
            <Dialog>
              <DialogTrigger className="absolute top-2 right-3.5" asChild>
                <span className="p-2 hover:bg-red-200 rounded-full cursor-pointer">
                  <Trash2
                    className="h-3 w-3 md:h-5 md:w-5 text-red-800"
                    strokeWidth={1}
                  />
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="text-center">
                  Are you sure you want to remove this item?
                </DialogTitle>
                <DialogDescription className="text-center">
                  This action will permanently remove the item from your
                  wishlist.
                </DialogDescription>
                <DialogClose className="w-full flex justify-center gap-2">
                  <Button
                    className="w-full"
                    variant={"outline"}
                    onClick={() => handleRemove(favorite.product_id)}
                  >
                    Yes
                  </Button>
                  <Button className="w-full" variant={"destructive"}>
                    No
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
      {favorites.length === 0 && (
        <p className="text-center text-gray-600 text-5xl my-10">
          Wishlist is empty
        </p>
      )}
    </div>
  );
}
