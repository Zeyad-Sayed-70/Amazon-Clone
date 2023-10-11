import dynamic from "next/dynamic";
import Image from "next/image";
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
        <div>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel1.jpg"
            alt="photo"
          />
        </div>
        <div>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel2.jpg"
            alt="photo"
          />
        </div>
        <div>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel3.jpg"
            alt="photo"
          />
        </div>
        <div>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel4.jpg"
            alt="photo"
          />
        </div>
        <div>
          <Image
            width={1000}
            height={600}
            src="/assets/carousel/carousel5.jpg"
            alt="photo"
          />
        </div>
      </CarouselComp>
    </section>
  );
}
