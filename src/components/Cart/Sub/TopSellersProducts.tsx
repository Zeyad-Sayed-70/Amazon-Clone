import React from "react";
import ProductSuggestion from "./ProductSuggestion";
import useProducts from "@/hooks/useProducts";

export default function TopSellersProducts() {
  const { products } = useProducts({ limit: 10, skip: 20 });
  return (
    <section>
      {products?.slice(0, 6).map((product) => (
        <ProductSuggestion key={product.id} product={product} />
      ))}
    </section>
  );
}
