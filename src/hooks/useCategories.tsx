"use client";
import BACKEND_URL from "@/constants/backend";
import { useEffect, useState } from "react";
import axios from "axios";

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
    async function getData() {
      const res = await axios.get(
        `${BACKEND_URL}/products/category/${category}${
          limit ? `?limit=${limit}` : ""
        }${select ? `&select=${select?.join(",")}` : ""}`
      );

      setProducts(res.data.products);
    }
    getData();
  }, [setProducts, limit, category]);

  return { products, setProducts, limit, select };
}
