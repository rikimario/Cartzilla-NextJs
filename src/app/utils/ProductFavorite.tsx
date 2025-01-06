import { Heart } from "lucide-react";
import { handleFavoriteBtn } from "@/app/utils/handleFavoriteBtn";
import { Product } from "@/lib/types";

export default function ProductFavorite({ product }: { product: Product }) {
  const { isFavorite, toggleFavorite } = handleFavoriteBtn({ product });

  return (
    <div>
      <button
        onClick={toggleFavorite}
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-1 md:p-2 rounded-lg h-[62px] w-14"
      >
        <Heart
          className={`h-8 w-8 lg:w-10 lg:h-10 ${
            isFavorite ? "text-red-500" : "text-gray-900 dark:text-white"
          }`}
          strokeWidth={isFavorite ? 1.5 : 0.5}
          fill={isFavorite ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
}
