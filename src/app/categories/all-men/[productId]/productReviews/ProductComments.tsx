"use client";
import { Product } from "@/app/utils/products";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronRight,
  CornerDownRight,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import React, { useState } from "react";

interface ReviewsOptionsProps {
  product: Product;
}

interface ReviewState {
  [reviewerEmail: string]: {
    thumbsUp: number;
    thumbsDown: number;
  };
}

export default function ProductComments({ product }: ReviewsOptionsProps) {
  const [reviewState, setReviewState] = useState<ReviewState>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleThumbsUp = (reviewerEmail: string) => {
    setReviewState((prevState) => {
      if (prevState[reviewerEmail]?.thumbsUp === 1) {
        return prevState;
      }
      return {
        ...prevState,
        [reviewerEmail]: {
          thumbsUp: prevState[reviewerEmail]?.thumbsUp
            ? prevState[reviewerEmail].thumbsUp + 1
            : 1,
          thumbsDown: prevState[reviewerEmail]?.thumbsDown
            ? prevState[reviewerEmail].thumbsDown - 1
            : 0,
        },
      };
    });
  };

  const handleThumbsDown = (reviewerEmail: string) => {
    setReviewState((prevState) => {
      if (prevState[reviewerEmail]?.thumbsDown === 1) {
        return prevState;
      }
      return {
        ...prevState,
        [reviewerEmail]: {
          thumbsUp: prevState[reviewerEmail]?.thumbsUp
            ? prevState[reviewerEmail].thumbsUp - 1
            : 0,
          thumbsDown: prevState[reviewerEmail]?.thumbsDown
            ? prevState[reviewerEmail].thumbsDown + 1
            : 1,
        },
      };
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
      month: "long" as "long",
      day: "numeric" as "numeric",
      year: "numeric" as "numeric",
      locale: "en-US",
    };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="mt-10">
      {product.reviews.slice(0, 2).map((review) => (
        <div className="p-2 border-b-2 border-gray-200">
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-900 text-lg font-semibold">
                {review.reviewerName}
              </p>
              <span className="flex items-center text-center mt-4">
                {Array.from({ length: 5 }).map((_, index) =>
                  review.rating >= index + 1 ? (
                    <Star
                      key={index}
                      className="text-[#FC9231] lg:w-5 lg:h-5"
                      size={16}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ) : review.rating > index && review.rating < index + 1 ? (
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
              </span>
            </div>
            <p className="text-gray-500 text-sm">{formatDate(review.date)}</p>
          </div>
          <p className="text-gray-600 py-2">{review.comment}</p>
          <div className="flex justify-between my-4">
            <button className="font-medium flex items-center gap-2">
              <span>
                <CornerDownRight size={16} />
              </span>
              Reply
            </button>
            <div className="flex gap-4">
              <button
                onClick={() => handleThumbsUp(review.reviewerEmail)}
                className="flex items-center gap-2"
              >
                <ThumbsUp size={20} strokeWidth={1} />{" "}
                {reviewState[review.reviewerEmail]?.thumbsUp || 0}
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => handleThumbsDown(review.reviewerEmail)}
                className="flex items-center gap-2"
              >
                <ThumbsDown size={20} strokeWidth={1} />{" "}
                {reviewState[review.reviewerEmail]?.thumbsDown || 0}
              </button>
            </div>
          </div>
        </div>
      ))}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent className="space-y-2">
          {product.reviews.slice(2).map((review) => (
            <div className="p-2 border-b-2 border-gray-200">
              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {review.reviewerName}
                  </p>
                  <span className="flex items-center text-center mt-4">
                    {Array.from({ length: 5 }).map((_, index) =>
                      review.rating >= index + 1 ? (
                        <Star
                          key={index}
                          className="text-[#FC9231] lg:w-5 lg:h-5"
                          size={16}
                          fill="#FC9231"
                          strokeWidth={0}
                        />
                      ) : review.rating > index && review.rating < index + 1 ? (
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
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  {formatDate(review.date)}
                </p>
              </div>
              <p className="text-gray-600 py-2">{review.comment}</p>
              <div className="flex justify-between my-4">
                <button className="font-medium flex items-center gap-2">
                  <span>
                    <CornerDownRight size={16} />
                  </span>
                  Reply
                </button>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleThumbsUp(review.reviewerEmail)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp size={20} strokeWidth={1} />{" "}
                    {reviewState[review.reviewerEmail]?.thumbsUp || 0}
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => handleThumbsDown(review.reviewerEmail)}
                    className="flex items-center gap-2"
                  >
                    <ThumbsDown size={20} strokeWidth={1} />{" "}
                    {reviewState[review.reviewerEmail]?.thumbsDown || 0}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <button className="mt-4 text-sm flex items-center gap-1 font-medium text-[#F55266] hover:text-[#F2223B]">
            {isOpen ? (
              <span className="">Hide reviews</span>
            ) : (
              <span className="">Show all reviews</span>
            )}
            <ChevronRight size={16} strokeWidth={1} />
          </button>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
}
