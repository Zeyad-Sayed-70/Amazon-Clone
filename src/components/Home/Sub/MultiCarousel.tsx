"use client";
import useProducts from "@/hooks/useProducts";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function MultiCarousel({
  skip = 0,
  title = "Exciting Deals",
}: {
  skip?: number;
  title?: string;
}) {
  const { products } = useProducts({ limit: 30, skip });
  const width = useWindowWidth();
  const scrollBoxRef = React.useRef<HTMLDivElement>(null);

  function scrollTo(to: number) {
    scrollBoxRef.current?.scrollBy({
      left: to,
      behavior: "smooth",
    });
  }

  return (
    <main className="bg-primary_white my-8 mx-5">
      <article className="relative p-4 pb-2">
        <header className="flex gap-4 items-center">
          <h1 className="capitalize text-large font-extrabold text-secondary_medium">
            {title}
          </h1>
          <Link
            href={"#"}
            className="text-medium text-secondary_blue hover:text-secondary_orange"
          >
            See all deals
          </Link>
        </header>
        <section
          ref={scrollBoxRef}
          className="flex scrollbar h-[350px] gap-3 items-center overflow-x-scroll md:overflow-hidden hover:overflow-x-scroll mt-2 mb-2 pb-2"
        >
          <button
            onClick={() => scrollTo(width && width > 1190 ? -332 * 4 : -332)}
            className="flex justify-center items-center h-[120px] absolute left-4 top-[40%] px-2 pl-5 text-primary_black opacity-20 md:opacity-50 bg-grey_original rounded-md hover:bg-grey_dark md:hover:opacity-70"
          >
            <MdArrowBackIos style={{ fontSize: "2.2rem" }} />
          </button>
          <button
            onClick={() => scrollTo(width && width > 1190 ? 332 * 4 : 332)}
            className="flex justify-center items-center h-[120px] absolute right-4 top-[40%] px-3 text-primary_black opacity-20 md:opacity-50 bg-grey_original rounded-md hover:bg-grey_dark md:hover:opacity-70"
          >
            <MdArrowForwardIos style={{ fontSize: "2.2rem" }} />
          </button>

          {products
            ?.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
            .map((product) => (
              <div key={product.id} className="p-4 w-[320px] ">
                <Link href={`/product/${product.id}`}>
                  <Image
                    title={product.title}
                    width={300}
                    height={300}
                    className="h-[200px] object-cover"
                    src={
                      product.thumbnail ? product.thumbnail : "/download.jpg"
                    }
                    alt="product/image"
                  />
                </Link>
                <div className="mt-2">
                  <div className="flex items-center gap-3 mt-4 text-small">
                    <span className="bg-red-500 py-1 px-2 text-primary_white">
                      {Math.ceil(product.discountPercentage)}% off
                    </span>
                    <span className="text-red-500 font-bold">Deal</span>
                  </div>
                  $<span className="text-xlarge">{product.price}</span>
                  <span className="text-small text-grey_disabled ml-2">
                    List Price:{" "}
                    <span className="line-through">
                      $
                      {Math.ceil(
                        product.price +
                          product.price * (product.discountPercentage / 100)
                      )}
                    </span>{" "}
                  </span>
                  <p
                    title={product.description}
                    className="text-ellipsis whitespace-nowrap overflow-hidden text-medium"
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </article>
    </main>
  );
}
