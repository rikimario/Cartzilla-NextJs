import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductComments from "./ProductComments";
import LeaveReview from "./LeaveReview";
import { Product } from "@/lib/types";
import { createClient } from "../../../../../../utils/supabase/client";
import { useTranslations } from "next-intl";

export default function ProductReviews({ product }: { product: Product }) {
  const t = useTranslations("Categories");
  const [stars, setStars] = useState([
    { rating: 5, count: 0 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ]);

  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const updatedStars = stars.map((star) => {
      const count = product.reviews.reduce((acc, review) => {
        return review.rating === star.rating ? Number(acc) + 1 : acc;
      }, 0);
      return { ...star, count: parseInt(count.toString()) };
    });
    setStars(updatedStars);
  }, [product]);

  useEffect(() => {
    const supabase = createClient();
    const fetchReviews = async () => {
      const { data: review, error } = await supabase
        .from("products")
        .select("reviews")
        .eq("product_id", product?.product_id);

      if (error) {
        console.error("Error fetching reviews:", error);
      } else {
        setReviews(review[0]?.reviews || []);
      }
    };

    fetchReviews();

    const subscription = supabase
      .channel("realtime:products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload) => {
          console.log("New review added:", payload);
          fetchReviews();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [product?.product_id]);

  return (
    <div id="reviews" className="p-4 mt-14 lg:w-1/2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("productReviews.title")}</h1>
        <div className="hidden md:flex">
          <LeaveReview product={product} />
        </div>
      </div>
      <div className="mt-8 flex-col md:flex md:flex-row gap-4">
        {/* Rating */}
        <div className="lg:p-12 p-8 flex flex-col items-center justify-center bg-gray-100 dark:bg-[#181D25] dark:border border-gray-600 rounded-md">
          <span className="text-4xl font-semibold">{product.rating}</span>
          <span>
            <div className="flex flex-col items-center gap-2 text-center mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) =>
                  product.rating >= index + 1 ? (
                    <Star
                      key={index}
                      className="text-[#FC9231] lg:w-5 lg:h-5"
                      size={16}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ) : product.rating > index && product.rating < index + 1 ? (
                    <div key={index} style={{ position: "relative" }}>
                      <Star
                        key={index}
                        className="text-[#FC9231] lg:w-5 lg:h-5"
                        size={16}
                        fill="#FC9231"
                        strokeWidth={0}
                        style={{
                          clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                        }}
                      />
                      <Star
                        key={index + 5}
                        className="text-gray-400 lg:w-5 lg:h-5"
                        size={16}
                        fill="none"
                        stroke="#999897"
                        strokeWidth={1}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                    </div>
                  ) : (
                    <Star
                      key={index}
                      className="text-gray-400 lg:w-5 lg:h-5"
                      size={16}
                      fill="none"
                      stroke="#999897"
                      strokeWidth={1}
                    />
                  )
                )}
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 flex items-center">
                  {reviews.length} {t("productReviews.reviews")}
                </p>
              </div>
            </div>
          </span>
        </div>
        {/* Progress */}
        <div className="w-full flex flex-col justify-center">
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              className="h-full w-full flex flex-col justify-between py-2"
            >
              {stars.map((star, index) => (
                <span key={index} className="flex gap-3 items-center">
                  <p className="flex p-1 items-center justify-center">
                    <span className="size-5 text-center">{star.rating}</span>
                    <span>
                      <Star
                        className="text-[#FC9231] lg:w-5 lg:h-5"
                        size={16}
                        fill="#FC9231"
                        strokeWidth={0}
                      />
                    </span>
                  </p>
                  <Progress value={star.count} className="w-full" />
                  <p className="text-gray-400">{star.count}</p>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-6">
          <LeaveReview product={product} />
        </div>
      </div>
      {/* Comments */}
      <ProductComments reviews={reviews} />
    </div>
  );
}
