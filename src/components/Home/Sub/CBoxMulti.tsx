import useCategories from "@/hooks/useCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CBoxMulti({
  category,
  limit = 4,
}: {
  category: string;
  limit?: number;
  select?: string[];
}) {
  const { products } = useCategories({
    category,
    limit,
    select: ["id", "category", "thumbnail"],
  });

  if (!products || products.length === 0)
    return (
      <>
        <section className="p-4 bg-primary_white">
          <div className="w-[320px] h-[320px] flex justify-center items-center">
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
      <div className="flex flex-wrap gap-2 gap-y-4 mb-3">
        {products.slice(0, 4).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="flex items-center w-[48%]"
          >
            <Image
              quality={100}
              className="w-full object-contain"
              width={200}
              height={200}
              src={product.thumbnail ? product.thumbnail : "/small-logo.jpg"}
              alt={`${product.category}-image`}
            />
          </Link>
        ))}
      </div>
      <Link
        href={`/category/${category}`}
        className="text-small font-bold text-secondary_blue hover:text-secondary_orange"
      >
        See More
      </Link>
    </section>
  );
}
