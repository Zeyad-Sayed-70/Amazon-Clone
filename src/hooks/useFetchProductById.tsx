import BACKEND_URL from "@/constants/backend";
import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchProductById({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProductById = async (id: number) => {
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const response = await axios.get(`${BACKEND_URL}/products/${id}`);

      const data = response.data.product;

      setLoading(false);

      if (response.status) {
        setProduct(data);
      } else {
        setError(data.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return { product, loading, error };
}
