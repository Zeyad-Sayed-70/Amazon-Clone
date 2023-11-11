import { createContext, useState } from "react";

interface ProductType {
  readonly product: Product | null;
  readonly productInstance: Product | null;
  loading: boolean;
  error: string | null;
  setProduct: (loading: Product | null) => void;
  setProductInstance: (loading: Product | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const ProductDetailsContext = createContext<ProductType>({
  product: null,
  productInstance: null,
  loading: false,
  error: null,
  setProduct: () => {},
  setProductInstance: () => {},
  setLoading: () => {},
  setError: () => {},
});

export function ProductDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [productInstance, setProductInstance] = useState<Product | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <ProductDetailsContext.Provider
        value={{
          product,
          setProduct,
          loading,
          setLoading,
          error,
          setError,
          productInstance,
          setProductInstance,
        }}
      >
        {children}
      </ProductDetailsContext.Provider>
    </>
  );
}
