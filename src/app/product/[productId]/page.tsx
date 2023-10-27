"use client";
import ProductDetails from "@/components/ProductDetails";
import { ProductDetailsProvider } from "@/context/productDetail";

export default function page() {
  return (
    <main className="bg-primary_white">
      <ProductDetailsProvider>
        <ProductDetails />
      </ProductDetailsProvider>
    </main>
  );
}
