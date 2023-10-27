import { ProductDetailsContext } from "@/context/productDetail";
import Link from "next/link";
import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function PageChains() {
  const { product } = useContext(ProductDetailsContext);
  return (
    <section className="flex items-center gap-1">
      <Link
        href={"#"}
        className="text-small text-grey_disabled capitalize hover:underline"
      >
        Home
      </Link>
      <IoIosArrowForward
        className="text-grey_disabled"
        style={{ fontSize: "10px", marginTop: "1.8px" }}
      />
      <Link
        href={`/category/${product?.category}`}
        className="text-small text-grey_disabled capitalize hover:underline"
      >
        {product?.category}
      </Link>
      <IoIosArrowForward
        className="text-grey_disabled"
        style={{ fontSize: "10px", marginTop: "1.8px" }}
      />
      <Link
        href={`/product/${product?.id}`}
        className="text-small text-grey_disabled capitalize hover:underline"
      >
        {product?.title}
      </Link>
    </section>
  );
}
