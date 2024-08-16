"use client";
import Categories from "@/components/Home";
import DemoCarousel from "@/components/Home/Sub/Carousel";
// import MultiCarousel from "@/components/Home/Sub/MultiCarousel";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const MultiCarousel = dynamic(
  () => import("@/components/Home/Sub/MultiCarousel"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <article>
        <Suspense fallback={<Spinner />}>
          <DemoCarousel />
        </Suspense>
        <section className="-mt-72 relative z-10">
          <Suspense fallback={<Spinner />}>
            <Categories
              categories={[
                "mobile-accessories",
                "laptops",
                "skin-care",
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
          <Suspense fallback={<Spinner />}>
            <MultiCarousel title="Best Sellers" />
            <MultiCarousel skip={30} />
            <Categories
              categories={[
                "motorcycle",
                "tablets",
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
