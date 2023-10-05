import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function DemoCarousel() {
  return (
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
    >
      <div>
        <Image
          width={400}
          height={400}
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt="photo"
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="photo"
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt="photo"
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="photo"
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="photo"
        />
      </div>
    </Carousel>
  );
}
