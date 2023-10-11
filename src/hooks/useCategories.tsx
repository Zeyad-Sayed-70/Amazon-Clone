"use client";
import { useEffect, useState } from "react";

export default function useCategories({
  category,
  limit,
  select,
}: {
  category: string;
  limit?: number;
  select?: string[];
}) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&select=${select?.join(
        ","
      )}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return { products, setProducts };
}
