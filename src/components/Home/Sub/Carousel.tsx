import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarouselComp: any = dynamic(() =>
  import("react-responsive-carousel").then((module) => module.Carousel)
);

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DemoCarousel() {
  return (
    <section className="h-[70vh] overflow-hidden">
      <CarouselComp
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        className="carousel"
      >
        <Link href={`/category/skincare`}>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel1.jpg"
            alt="photo"
          />
        </Link>
        <Link href={`/category/home-decoration`}>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel2.jpg"
            alt="photo"
          />
        </Link>
        <Link href={`/category/furniture`}>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel3.jpg"
            alt="photo"
          />
        </Link>
        <Link href={`/category/automotive`}>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel4.jpg"
            alt="photo"
          />
        </Link>
        <Link href={`/category/groceries`}>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel5.jpg"
            alt="photo"
          />
        </Link>
      </CarouselComp>
    </section>
  );
}
