import { createContext, useState } from "react";

interface Products {
  readonly products: Product[];
  readonly productsInstance: Product[];
  loading: boolean;
  error: string | null;
  setProducts: (loading: Product[]) => void;
  setProductsInstance: (loading: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const ProductsContext = createContext<Products>({
  products: [],
  productsInstance: [],
  loading: false,
  error: null,
  setProducts: () => {},
  setProductsInstance: () => {},
  setLoading: () => {},
  setError: () => {},
});

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [productsInstance, setProductsInstance] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <ProductsContext.Provider
        value={{
          products,
          setProducts,
          loading,
          setLoading,
          error,
          setError,
          productsInstance,
          setProductsInstance,
        }}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
}
