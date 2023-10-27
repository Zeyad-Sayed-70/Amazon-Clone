import { ProductDetailsContext } from "@/context/productDetail";
import Image from "next/image";
import React, { useContext } from "react";

export default function ImagesPreview() {
  const { product } = useContext(ProductDetailsContext);
  return (
    <section className="flex flex-col gap-4">
      <hr className="py-[1px] my-2 bg-grey_original" />
      <div>
        <h2 className="font-extrabold text-xxlarge">From the brand</h2>
        {product?.images.map((img, ind) => (
          <Image
            key={ind}
            width={400}
            height={400}
            src={img || "/download.jpg"}
            alt="image"
            className="w-full max-h-[600px] object-contain mb-4"
          />
        ))}
        <hr className="py-[1px] my-2 bg-grey_original" />
      </div>
    </section>
  );
}
