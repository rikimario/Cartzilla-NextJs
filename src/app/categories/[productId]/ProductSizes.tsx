import { Product } from "@/app/utils/products";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface SizesOptionsProps {
  product: Product;
}
export default function ProductSizes({ product }: SizesOptionsProps) {
  const searchParams = useSearchParams();
  const selectedSize = searchParams.get("size");

  return (
    <div className="flex flex-wrap gap-4 md:mt-4 mt-8 lg:w-2/3">
      {product.size?.map((s, index) => (
        <Link
          href={`?size=${s}`}
          key={index}
          className={`flex items-center justify-center p-2 border border-gray-300 hover:border-gray-700 min-w-10 md:min-w-32 lg:min-w-10 ${
            selectedSize === s
              ? "border-gray-800 bg-gray-800 text-white"
              : "border-gray-300"
          }`}
        >
          <p>{s}</p>
        </Link>
      ))}
    </div>
  );
}
