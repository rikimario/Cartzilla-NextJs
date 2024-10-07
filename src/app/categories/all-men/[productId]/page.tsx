"use client";
import { getProductById, Product } from "@/app/utils/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(Number(params.productId));
      setProduct(data);
    };
    fetchProduct();
  }, [params.productId]);

  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <h1>Product Details for {product.title}</h1>
      <ul className="flex">
        {product.images.map((image, index) => (
          <li key={index}>
            <Image src={image} alt={product.title} width={200} height={200} />
          </li>
        ))}
      </ul>
      <p>{product.description}</p>
    </div>
  );
}
