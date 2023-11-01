import React from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import ProductCheckout from "./ProductCheckout";

export default function Details() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col items-start xl:flex-row my-2">
        <ProductImages />
        <ProductDetails />
      </div>
      <ProductCheckout />
    </section>
  );
}
