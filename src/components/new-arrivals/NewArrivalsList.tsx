import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../../utils/supabase/actions";
import { Product } from "@/lib/types";

export default function NewArrivalsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="md:grid md:grid-cols-2">
      {products.slice(77, 85).map((item) => (
        <Link key={item.product_id} href={`/categories/${item.product_id}`}>
          <div
            className="flex text-center items-center gap-2"
            key={item.product_id}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={130}
              height={130}
            />
            <div className="text-start flex flex-col gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) =>
                  item.rating >= index + 1 ? (
                    <Star
                      key={index}
                      className="text-[#FC9231] lg:w-5 lg:h-5"
                      size={16}
                      fill="#FC9231"
                      strokeWidth={0}
                    />
                  ) : item.rating > index && item.rating < index + 1 ? (
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
              <h1 className="text-xs text-gray-900 dark:text-white font-medium">
                {item.title}
              </h1>
              <p className="text-base text-gray-900 dark:text-white font-semibold">
                ${item.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
