"use client";
import Categories from "@/components/Home";
import DemoCarousel from "@/components/Home/Sub/Carousel";
import Footer from "@/components/Home/Sub/Footer";
import MultiCarousel from "@/components/Home/Sub/MultiCarousel";
import SigninReminder from "@/components/Home/Sub/SigninReminder";
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
            <MultiCarousel />
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
            <MultiCarousel skip={60} />
          </Suspense>
        </section>
        <section>
          <Suspense fallback={<h1>Loading...</h1>}>
            <SigninReminder />
            <Footer />
          </Suspense>
        </section>
      </article>
    </>
  );
}
