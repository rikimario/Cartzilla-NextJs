"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

interface Products {
  brand: string;
}

export default function FilterBtnBrands() {
  const [products, setProducts] = useState<Products[]>([]);

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
  return (
    <div className="p-6 border border-gray-200 rounded-xl text-gray-700 mt-6">
      <h2 className="text-start text-xl text-gray-700 font-semibold">Brand</h2>
      <div className="relative flex flex-col items-start gap-2 mt-4">
        {Array.from(new Set(products.map((item) => item.brand))).map(
          (brand) => (
            <div className="flex items-center space-x-2">
              <Checkbox id={brand} key={brand} />
              <Label htmlFor="r2">{brand}</Label>
            </div>
          )
        )}
      </div>
    </div>
  );
}
