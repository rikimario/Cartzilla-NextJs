import { Product } from "@/lib/types";
import React from "react";
import { createClient } from "../../../../../utils/supabase/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function CartRemoveAllProducts({
  setProduct,
}: {
  setProduct: (product: Product[]) => void;
}) {
  const t = useTranslations("Cart");
  const handleRemove = async () => {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    try {
      const { error } = await supabase
        .from("cart")
        .delete()
        .eq("user_id", user?.id);

      if (error && error.code !== "PGRST116") throw error;

      const { data: updatedFavorites, error: fetchError } = await supabase
        .from("cart")
        .select("*");

      if (fetchError) throw fetchError;

      setProduct(updatedFavorites);
      toast.success("All items removed from cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span className="w-full text-right md:text-left text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer">
            {t("clearCart")}
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-center">
            {t("removeAllItemsTitle")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t("removeAllItemsDescription")}
          </DialogDescription>
          <DialogClose className="w-full flex justify-center gap-2">
            <Button
              className="w-full"
              variant={"outline"}
              onClick={handleRemove}
            >
              {t("yes")}
            </Button>
            <Button className="w-full" variant={"destructive"}>
              {t("no")}
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
