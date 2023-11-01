import useCategories from "@/hooks/useCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CBoxSingle({ category }: { category: string }) {
  const { products } = useCategories({
    category,
    limit: 1,
    select: ["title", "thumbnail"],
  });

  if (!products || products.length === 0)
    return (
      <>
        <section className="p-4 bg-primary_white">
          <div className="w-[350px] h-[300px] flex justify-center items-center">
            Loading...
          </div>
        </section>
      </>
    );

  return (
    <section className="p-4 bg-primary_white flex flex-col justify-between">
      <Link
        href={`/category/${category}`}
        className="capitalize text-xlarge font-bold text-secondary_medium mb-3 block"
      >
        {category.split("-").join(" ")}
      </Link>
      <Link href={`/category/${category}`}>
        <Image
          className="mb-3 w-full h-[300px] object-contain"
          width={300}
          height={400}
          src={
            products[0].thumbnail ? products[0].thumbnail : "/small-logo.jpg"
          }
          alt="category-image"
        />
      </Link>
      <Link
        href={`/category/${category}`}
        className="text-small font-bold text-secondary_blue hover:text-secondary_orange"
      >
        See More
      </Link>
    </section>
  );
}
