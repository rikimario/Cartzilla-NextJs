import { useFavoriteButton } from "@/app/[locale]/utils/handleFavoriteBtn";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("Products");
  const { isFavorite, toggleFavorite } = useFavoriteButton({ product });
  const [isHeartVisible, setIsHeartVisible] = useState(false);

  // const slug = product.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div
      key={product.product_id}
      className="p-1 grid grid-cols-1 grid-rows-1 h-full w-full"
    >
      <Card
        onMouseEnter={() => setIsHeartVisible(true)}
        onMouseLeave={() => setIsHeartVisible(false)}
        className="dark:bg-[#181D25] h-full w-full"
      >
        <CardContent className="relative flex flex-col aspect-square items-center justify-center p-2">
          {isHeartVisible && (
            <div className="absolute top-2 right-4">
              <button
                onClick={toggleFavorite}
                className="bg-gray-100 dark:bg-gray-700 p-1 md:p-2 rounded-lg"
              >
                <Heart
                  className={`h-3 w-3 lg:w-5 lg:h-5 ${
                    isFavorite
                      ? "text-red-500"
                      : "text-gray-900 dark:text-white"
                  } `}
                  strokeWidth={1}
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </button>
            </div>
          )}
          <Link href={`/categories/${product.product_id}`}>
            <Image
              className="lg:w-[200px] lg:h-[200px]"
              src={product.thumbnail}
              alt={product.title}
              width={160}
              height={160}
            />
          </Link>
          <div className="flex flex-col gap-2 w-full text-start p-2">
            <div className="flex items-center text-center">
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
              <p className="pl-2 text-xs md:text-sm text-gray-400 flex items-center">
                ({product.rating})
              </p>
            </div>
            <h1 className="text-xs lg:text-lg text-gray-900 dark:text-white font-medium truncate overflow-ellipsis">
              {product.title}
            </h1>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs lg:text-2xl text-gray-900 dark:text-white font-semibold">
                ${product.price}
              </p>
            </div>
            <p className="flex text-xs md:text-base gap-2 text-gray-400">
              {t("available")}:{" "}
              <span className="text-gray-900 dark:text-white text-xs md:text-base">
                {product.stock}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
