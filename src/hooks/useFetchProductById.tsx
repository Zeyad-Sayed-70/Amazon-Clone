import { useEffect, useState } from "react";

export default function useFetchProductById({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProductById = async (id: number) => {
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      const data = await response.json();

      setLoading(false);

      if (response.ok) {
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
