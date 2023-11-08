"use client";
import { ProductDetailsContext } from "@/context/productDetail";
import Link from "next/link";
import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function PageChains({
  pages,
  fontSize = 10,
}: {
  pages: { page: string; link: string }[];
  fontSize?: number;
}) {
  const { product } = useContext(ProductDetailsContext);
  return (
    <section className="flex items-center gap-1 text-center">
      <Link
        style={{ fontSize: fontSize + 2 + "px" }}
        href={"#"}
        className="text-grey_disabled capitalize hover:underline"
      >
        Home
      </Link>
      <IoIosArrowForward
        className="text-grey_disabled"
        style={{ fontSize: fontSize + "px", marginTop: "1.8px" }}
      />
      {pages.map((page, index) => {
        if (index === pages.length - 1)
          return (
            <Link
              key={index}
              style={{ fontSize: fontSize + 2 + "px" }}
              href={page.link}
              className="text-grey_disabled capitalize hover:underline"
            >
              {page.page}
            </Link>
          );
        else
          return (
            <>
              <Link
                key={index}
                style={{ fontSize: fontSize + 2 + "px" }}
                href={page.link}
                className="text-grey_disabled capitalize hover:underline"
              >
                {page.page}
              </Link>
              <IoIosArrowForward
                key={index}
                className="text-grey_disabled"
                style={{ fontSize: fontSize + "px", marginTop: "1.8px" }}
              />
            </>
          );
      })}
    </section>
  );
}
