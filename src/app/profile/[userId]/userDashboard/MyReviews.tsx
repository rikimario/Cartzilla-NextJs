import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import Image from "next/image";
import { Product, Review } from "@/lib/types";

export default function MyReviews() {
  const [myReviews, setMyReviews] = useState<Review[]>([]);

  useEffect(() => {
    const supabase = createClient();

    const fetchReviews = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("Failed to get user:", userError);
        return;
      }

      const { data: products, error } = await supabase
        .from("products")
        .select("product_id, title, images, reviews");

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      const userReviewsWithProductInfo = (products as Product[]).flatMap(
        (product) => {
          const reviews = product.reviews || [];
          return reviews
            .filter((review) => review.user_id === user.id)
            .map((review) => ({
              ...review,
              productImage: product.images?.[0],
              productName: product.title,
            }));
        }
      );

      setMyReviews(
        userReviewsWithProductInfo.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        My reviews
      </h1>
      {myReviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        myReviews.map((review, index) => (
          <div
            key={index}
            className="border p-4 my-3 bg-gray-50 rounded-lg flex items-start gap-4"
          >
            <Image
              width={100}
              height={100}
              src={review.productImage}
              alt={review.productName}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-bold">{review.productName}</h3>
              <p className="text-yellow-600 font-semibold">
                Rating: {review.rating}/5
              </p>
              <p className="text-gray-800">{review.comment}</p>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
