import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import React from "react";
import { createClient } from "../../../../../utils/supabase/client";
import { Product } from "@/lib/types";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function CartRemoveProduct({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: (product: Product[]) => void;
}) {
  const t = useTranslations("Cart");
  const handleRemove = async (productId: number) => {
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
        .eq("user_id", user?.id)
        .eq("product_id", productId)
        .eq("size", product.size);

      if (error && error.code !== "PGRST116") throw error;

      const { data: updatedFavorites, error: fetchError } = await supabase
        .from("cart")
        .select("*");

      if (fetchError) throw fetchError;

      setProduct(updatedFavorites.reverse());
      toast.success("Item removed from cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span className="text-red-500 w-full flex items-center justify-center">
            <Trash2
              className="h-5 w-5 text-red-800 cursor-pointer"
              strokeWidth={1}
            />
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-center">
            {t("removeItemTitle")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t("removeItemDescription")}
          </DialogDescription>
          <DialogClose className="w-full flex justify-center gap-2">
            <Button
              className="w-full"
              variant={"outline"}
              onClick={() => handleRemove(product.product_id)}
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
