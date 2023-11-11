"use client";
import BACKEND_URL from "@/constants/backend";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts({
  limit = 30,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        `${BACKEND_URL}/products?limit=${limit}&skip=${skip}`
      );
      setProducts(data.data.products);
    }

    getData();
  }, [limit, skip]);

  return { products, setProducts };
}
