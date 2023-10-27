"use client";
import Categories from "@/components/Home";
import DemoCarousel from "@/components/Home/Sub/Carousel";
import MultiCarousel from "@/components/Home/Sub/MultiCarousel";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <article>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DemoCarousel />
        </Suspense>
        <section className="-mt-72 relative z-10">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Categories
              categories={[
                "lighting",
                "laptops",
                "skincare",
                "fragrances",
                "mens-shirts",
                "womens-dresses",
                "furniture",
                "smartphones",
              ]}
            />
          </Suspense>
        </section>
        <section>
          <Suspense fallback={<h1>Loading...</h1>}>
            <MultiCarousel title="Best Sellers" />
            <MultiCarousel skip={30} />
            <Categories
              categories={[
                "motorcycle",
                "automotive",
                "sunglasses",
                "womens-jewellery",
                "tops",
                "womens-watches",
                "womens-bags",
                "womens-shoes",
              ]}
            />
            <MultiCarousel skip={60} title="Explore More" />
          </Suspense>
        </section>
      </article>
    </>
  );
}
