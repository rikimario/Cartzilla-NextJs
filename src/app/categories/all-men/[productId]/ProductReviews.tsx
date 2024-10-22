import { Product } from "@/app/utils/products";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ReviewsOptionsProps {
  product: Product;
}
export default function ProductReviews({ product }: ReviewsOptionsProps) {
  const [stars, setStars] = useState([
    { rating: 5, count: 0 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ]);

  useEffect(() => {
    const updatedStars = stars.map((star) => {
      const count = product.reviews.reduce((acc, review) => {
        return review.rating === star.rating ? acc + 1 : acc;
      }, 0);
      return { ...star, count };
    });
    setStars(updatedStars);
  }, [product]);

  return (
    <div id="reviews" className="p-4 mt-14">
      <h1 className="text-2xl font-bold">Reviews</h1>
      <div className="mt-8 flex gap-4">
        <div className="p-12 flex flex-col items-center justify-center bg-gray-100 rounded-md">
          <span className="text-4xl font-semibold">{product.rating}</span>
          <span className="">
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
                    <div style={{ position: "relative" }}>
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
                <p className="pl-2 text-xs md:text-sm text-gray-400 flex items-center">
                  ({product.reviews.length}) reviews
                </p>
              </div>
            </div>
          </span>
        </div>
        <div className="w-full flex flex-col justify-center">
          {Array.from({ length: 1 }).map((_, i) => (
            <div className="h-full flex flex-col justify-between py-2">
              {stars.map((star) => (
                <span className="flex gap-3 items-center">
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
                  <Progress value={star.count} className="w-[40%]" />
                  <p className="text-gray-400">{star.count}</p>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
