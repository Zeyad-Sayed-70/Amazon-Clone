"use client";
import React from "react";
import CategoryPage from "@/components/Category/index";
import { ProductsProvider } from "@/context/products";

export default function page() {
  return (
    <main>
      <ProductsProvider>
        <CategoryPage />
      </ProductsProvider>
    </main>
  );
}
