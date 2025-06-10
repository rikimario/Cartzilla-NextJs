import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenLine, Star } from "lucide-react";
import React, { useState } from "react";
import { getUser } from "../../../../../../utils/supabase/actions";
import { createClient } from "../../../../../../utils/supabase/client";
import toast from "react-hot-toast";
import { Product } from "@/lib/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

export default function LeaveReview({ product }: { product: Product | null }) {
  const t = useTranslations("Categories");
  const [rating, setRating] = useState<number>(1);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleReview = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const user = await getUser();
    const supabase = await createClient();

    if (!user) {
      console.log("User is not logged in");
      return;
    }

    const { data: productData, error: fetchError } = await supabase
      .from("products")
      .select("reviews")
      .eq("product_id", product?.product_id)
      .single();

    if (fetchError) {
      console.log(fetchError);
      return;
    }

    const newReview = {
      user_id: user.id,
      rating,
      comment,
      reviewerName: name,
      reviewerEmail: email,
      date: new Date().toISOString(),
    };

    const updatedReviews = [...(productData?.reviews || []), newReview];

    const { error: updateError } = await supabase
      .from("products")
      .update({ reviews: updatedReviews })
      .eq("product_id", product?.product_id);

    if (updateError) {
      console.log(updateError);
      throw new Error("Failed to add review");
    }

    toast.success("Review added successfully");

    setName("");
    setEmail("");
    setComment("");
    setRating(1);
  };

  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gray-100 text-gray-900 hover:bg-gray-300 font-semibold flex items-center gap-2">
            <PenLine className="h-5 w-5" strokeWidth={2} />
            {t("leaveReview.trigger")}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription></DialogDescription>
          <DialogTitle>{t("leaveReview.title")}</DialogTitle>
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="rating">{t("leaveReview.rating")}: *</Label>
              <div className="flex">
                {[...Array(5)].map((_, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        required
                        className="hidden"
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <Star
                        className="cursor-pointer"
                        fill={
                          currentRating <= (hover || rating)
                            ? "#FC9231"
                            : "#e5e7eb"
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(0)}
                        strokeWidth={0.3}
                        key={index}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <Label htmlFor="name">{t("leaveReview.name")}: *</Label>
              <Input
                required
                type="text"
                id="name"
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("leaveReview.namePlaceholder")}
                className="text-gray-900 dark:text-white font-semibold placeholder:text-gray-350"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <Label htmlFor="email">{t("leaveReview.email")}: *</Label>
              <Input
                required
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@me.com"
                className="text-gray-900 dark:text-white font-semibold placeholder:text-gray-350"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5 text-sm">
              <Label htmlFor="review">{t("leaveReview.comment")}: *</Label>
              <textarea
                required
                id="review"
                maxLength={3000}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t("leaveReview.commentPlaceholder")}
                className="text-gray-900 dark:text-white dark:bg-[#020817] font-semibold w-full px-3 py-2 rounded-md border border-input min-h-32"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={handleReview}
                disabled={!name || !email || !comment}
                className="bg-gray-200 text-gray-900 hover:bg-gray-300 font-semibold"
              >
                {t("leaveReview.submit")}
              </Button>
            </DialogClose>
          </DialogFooter>
          <span className="text-gray-500 text-sm font-light">
            * {t("leaveReview.required")}
          </span>
        </DialogContent>
      </Dialog>
    </div>
  );
}
