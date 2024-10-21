"use client";
import { useEffect, useState } from "react";

export interface Product {
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviews: string[];
  warrantyInformation: string;
  id: number;
}

export default function getProductsMen() {
  const [products, setProducts] = useState<Product[]>([]);

  const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = [];
      for (const category of categories) {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();
        products.push(...data.products);
      }
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return products;
}

export async function getProductById(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}
