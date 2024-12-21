import { Card, CardContent } from "../ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/utils/products";
import { handleFavoriteBtn } from "@/app/utils/handleFavoriteBtn";

interface FavoriteOptionsProps {
  product: Product;
}

export default function SpecialOffersCard({ product }: FavoriteOptionsProps) {
  const { isFavorite, toggleFavorite } = handleFavoriteBtn({ product });
  return (
    <Card className="h-full dark:bg-[#181D25]">
      <CardContent className="relative flex flex-col aspect-square items-center justify-center p-2">
        <div className="absolute top-2 right-4">
          <button
            onClick={toggleFavorite}
            className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg"
          >
            <Heart
              className={`h-3 w-3 lg:w-5 lg:h-5 ${
                isFavorite ? "text-red-500" : "text-gray-900 dark:text-white"
              } `}
              strokeWidth={1}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
        <Link href={`categories/sports-accessories/${product.id}`}>
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
            <p className="pl-2 text-sm text-gray-400 flex items-center">
              ({product.rating})
            </p>
          </div>
          <h1 className="text-base lg:text-lg text-gray-900 dark:text-white font-medium md:truncate md:overflow-ellipsis">
            {product.title}
          </h1>
          <div className="flex items-center justify-between pt-2">
            <p className="text-xl lg:text-2xl text-gray-900 dark:text-white font-semibold">
              ${product.price}
            </p>
            <button className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl">
              <ShoppingCart className="h-4 w-4" strokeWidth={1} />
            </button>
          </div>
          <p className="flex gap-2 text-gray-400">
            Available:{" "}
            <span className="text-gray-900 dark:text-white">
              {product.stock}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
