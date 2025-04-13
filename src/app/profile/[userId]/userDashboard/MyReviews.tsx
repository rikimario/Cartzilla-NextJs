import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../utils/supabase/client";
import Image from "next/image";
import { Product, Review } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

const ITEMS_PER_PAGE = 4;

export default function MyReviews() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get("page") || "1");
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
              product_id: product.product_id,
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

  const totalPages = Math.ceil(myReviews.length / ITEMS_PER_PAGE);
  const paginatedReviews = myReviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-700 mb-4 pb-2 dark:text-white">
        My reviews
      </h1>
      {paginatedReviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        paginatedReviews.map((review, index) => (
          <div
            key={index}
            className="flex py-4 border-b border-gray-200 dark:border-gray-600"
          >
            <Link href={`/categories/${review.product_id}`}>
              <Image
                width={100}
                height={100}
                src={review.productImage}
                alt={review.productName}
                className="w-24 h-24 object-cover rounded-md"
              />
            </Link>
            <div>
              <h3 className="text-lg font-bold">{review.productName}</h3>
              <p className="text-yellow-600 font-semibold">
                Rating: {review.rating}/5
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {review.comment}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      )}
      {totalPages > 1 && (
        <div className="overflow-x-auto w-full">
          <Pagination className="mt-6 flex justify-center">
            <PaginationContent className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>

              <div className="flex gap-2">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      handlePageChange(Math.max(currentPage - 1, 1))
                    }
                    isActive={currentPage !== 1}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      handlePageChange(Math.min(currentPage + 1, totalPages))
                    }
                    isActive={currentPage !== totalPages}
                  />
                </PaginationItem>
              </div>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}
