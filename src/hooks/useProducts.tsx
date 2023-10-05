"use client";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return { products, setProducts };
}
