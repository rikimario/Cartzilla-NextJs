"use client";
import { useEffect, useState } from "react";
import productsData from "./products.json";

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export interface Product {
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  images: string[];
  category: string;
  brand?: string;
  rating: number;
  reviews: Review[];
  warrantyInformation: string;
  returnPolicy: string;
  id: number;
}

export default function getProductsMen() {
  const [products, setProducts] = useState<Product[]>([]);

  const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = [];
      for (const category of categories) {
        const categoryProducts = productsData.filter(
          (product) => product.category === category
        );
        products.push(...categoryProducts);
      }
      setProducts(products);
    };

    fetchProducts();
  }, [productsData]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = [];
  //     for (const category of categories) {
  //       const res = await fetch(
  //         `https://dummyjson.com/products/category/${category}`
  //       );
  //       const data = await res.json();
  //       products.push(...data.products);
  //     }
  //     setProducts(products);
  //   };

  //   fetchProducts();
  // }, []);

  return products;
}

export async function getProductById(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  const updatedProduct = productsData.find((product) => product.id === id);
  return { ...data, ...updatedProduct };
}
// export async function getProductById(id: number) {
//   const res = await fetch(`https://dummyjson.com/products/${id}`);
//   const data = await res.json();
//   return data;
// }
