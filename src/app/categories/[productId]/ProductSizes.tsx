import { Product } from "@/app/utils/products";
import { useRouter, useSearchParams } from "next/navigation";

interface SizesOptionsProps {
  product: Product;
}
export default function ProductSizes({ product }: SizesOptionsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSize = searchParams.get("size");

  const handleSizeClick = (size: string) => {
    const url = new URLSearchParams(window.location.search);
    url.set("size", size);
    router.replace(`${window.location.pathname}?${url.toString()}`, undefined);
  };

  return (
    <div className="flex flex-wrap gap-4 md:mt-4 mt-8 lg:w-2/3">
      {product.size?.map((s, index) => (
        <button
          onClick={() => handleSizeClick(s)}
          key={index}
          className={`flex items-center justify-center p-2 border border-gray-300 hover:border-gray-700 min-w-10 md:min-w-32 lg:min-w-10 ${
            selectedSize === s
              ? "border-gray-800 bg-gray-800 text-white"
              : "border-gray-300"
          }`}
        >
          <p>{s}</p>
        </button>
      ))}
    </div>
  );
}
