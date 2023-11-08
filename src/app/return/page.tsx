import MultiCarousel from "@/components/Home/Sub/MultiCarousel";
import ReturnOrders from "@/components/Return";
import React from "react";

export default function page() {
  return (
    <main className="bg-primary_white">
      <ReturnOrders />
      {/* Carousel */}
      <MultiCarousel />
    </main>
  );
}
