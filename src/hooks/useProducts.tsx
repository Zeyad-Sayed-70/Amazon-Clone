"use client";
import { useEffect, useState } from "react";

export default function useProducts({
  limit = 30,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return { products, setProducts };
}
