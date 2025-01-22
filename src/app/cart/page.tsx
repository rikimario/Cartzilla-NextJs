"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { Product } from "@/lib/types";

export default function Cart() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const supabase = await createClient();

        const { data: product, error } = await supabase
          .from("cart")
          .select("*");

        if (error) throw error;

        const groupedProducts = product.reduce((acc, product) => {
          const existingProduct = acc.find(
            (p: Product) => p.product_id === product.product_id
          );
          if (existingProduct) {
            existingProduct.quantity += product.quantity;
          } else {
            acc.push(product);
          }
          return acc;
        }, [] as Product[]);

        setProduct(groupedProducts.reverse());
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {product.map((product) => (
        <div key={product.product_id}>
          <div className="flex gap-4">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
