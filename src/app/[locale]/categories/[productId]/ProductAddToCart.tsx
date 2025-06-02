import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import { getUser } from "../../../../../utils/supabase/actions";
import { createClient } from "../../../../../utils/supabase/client";
import toast from "react-hot-toast";

export default function ProductAddToCart({
  product,
  count,
  size,
}: {
  product: Product | null;
  count: number;
  size: string | null;
}) {
  const handleAddToCart = async () => {
    const user = await getUser();
    const supabase = await createClient();

    if (!user) {
      console.log("User is not logged in");
      return;
    }

    if (product?.size && !size) {
      toast.error("Please select a size");
      return;
    }

    // Add to cart
    const { error } = await supabase.from("cart").insert([
      {
        user_id: user.id,
        product_id: product?.product_id,
        title: product?.title,
        price: product?.price,
        thumbnail: product?.thumbnail,
        category: product?.category,
        quantity: count,
        size: size,
      },
    ]);

    if (error) {
      console.log(error);

      throw new Error("Failed to add to cart");
    }
    toast.success("Product added to cart");
  };

  return (
    <div className="">
      <Button
        onClick={handleAddToCart}
        className="flex items-center dark:text-white gap-2 h-[62px] w-[178px] rounded-lg bg-[#F55266] hover:bg-[#F2223B]"
      >
        <ShoppingCart /> Add to cart
      </Button>
    </div>
  );
}
