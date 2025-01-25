"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import CartCountBtn from "./_components/CartCountBtn";
import CartRemoveBtn from "./_components/CartRemoveBtn";

export default function Cart() {
  const [product, setProduct] = useState<Product[]>([]);

  const handleUpdateQuantity = async (
    currentProduct: Product,
    quantity: number
  ) => {
    const updatedProduct = { ...currentProduct, quantity };
    const updatedProducts = [...product];
    const index = updatedProducts.findIndex(
      (p) =>
        p.product_id === currentProduct.product_id &&
        p.size === currentProduct.size
    );
    if (index !== -1) {
      updatedProducts[index] = updatedProduct;
    }
    setProduct(updatedProducts);

    try {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("User not authenticated");
      }

      const { error } = await supabase
        .from("cart")
        .update({ quantity: quantity })
        .eq("user_id", user.id)
        .eq("product_id", currentProduct.product_id)
        .eq("size", currentProduct.size);

      if (error) throw error;
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const supabase = await createClient();

        const { data: product, error } = await supabase
          .from("cart")
          .select("*");

        if (error) throw error;

        const groupedProducts = product.reduce((acc, product) => {
          const key = `${product.product_id}-${product.size}`;
          const existingProduct = acc[key];
          if (existingProduct) {
            existingProduct.quantity += product.quantity;
          } else {
            acc[key] = product;
          }
          return acc;
        }, {});

        const products = Object.values(groupedProducts) as Product[];

        setProduct(products.reverse());
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="py-10 md:px-12 lg:px-[5rem] xl:px-[5.5rem]">
      <h1 className="text-3xl text-gray-900 dark:text-white font-semibold mb-10">
        Shopping Cart
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3 pr-8">
          <div className="flex items-center text-gray-500 py-4 gap-6">
            <p className="w-1/2 pl-2">Product</p>
            <div className="flex items-center w-1/2">
              <p className="w-full">Price</p>
              <p className="w-full">Quantity</p>
              <p className="w-full">Total</p>
              <p className="w-full">clear cart</p>
            </div>
          </div>
          {product.map((product, index) => (
            <div className="border-t border-gray-200" key={index}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 p-2 w-full">
                  <Link href={`/categories/${product.product_id}`}>
                    <Image
                      width={150}
                      height={150}
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </Link>
                  <div className="max-w-56">
                    <h2>{product.title}</h2>
                    <p className="text-sm flex gap-1">
                      <span className="text-gray-400">Size:</span>{" "}
                      {product.size}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="w-full">${product.price}</p>
                  <CartCountBtn
                    product={product}
                    initialCount={product.quantity}
                    onUpdateQuantity={(quantity) =>
                      handleUpdateQuantity(product, quantity)
                    }
                  />
                  <p className="w-full">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  {/* remove button */}
                  <CartRemoveBtn product={product} setProduct={setProduct} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 bg-gray-100 rounded-lg">
          <p>Order Summary</p>
        </div>
      </div>
    </div>
  );
}
