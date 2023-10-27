import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/dateFormatting";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { ProductsContext } from "@/context/products";
import { useParams } from "next/navigation";

export default function CategoryDisplay() {
  const { products, loading } = useContext(ProductsContext);
  const { categoryName } = useParams();

  return (
    <section className="h-full w-full px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xxlarge capitalize font-extrabold">
          {categoryName.split("-").join(" ")}
        </h1>
        <small className="text-medium">
          {products?.slice(0, 3).map((p) => (
            <span
              key={p.id}
              className="capitalize mr-1 text-medium font-semibold"
            >
              {p.title},{" "}
            </span>
          ))}
          and more
        </small>
      </header>

      <div>
        <p className="text-medium px-8 py-4 border-2 rounded-lg w-full">
          1-{products?.length} of over {products?.length} results for{" "}
          <span className="text-secondary_red font-bold">
            {products?.length !== 0 &&
              products[0].category.split("-").join(" ")}
          </span>
        </p>

        {!loading && products.length === 0 && (
          <h2 className="h-[100vh] w-full text-xlarge font-bold text-grey_disabled text-center my-6">
            Not Found Products
          </h2>
        )}
        {loading && (
          <h2 className="h-[100vh] w-full text-xlarge font-bold text-grey_disabled text-center my-6">
            Loading...
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 justify-center">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.id} className="p-4 w-[360px] mx-auto">
      <Link href={`/product/${product.id}`}>
        <Image
          width={190}
          height={100}
          quality={40}
          className="h-[250px] w-[320px] object-cover"
          src={product.thumbnail || "/download.jpg"}
          alt="product/image"
        />
      </Link>
      <div className="px-2 pt-1">
        <Link href={`/product/${product.id}`} className="text-large mb-2 block">
          {product.description.length > 80
            ? product.description.slice(0, 80) + "..."
            : product.description}
        </Link>
        <div className="flex items-center">
          {Array.apply(null, Array(Math.round(product.rating))).map(
            (e, ind) => {
              if (ind + 1 < product.rating) {
                return (
                  <IoMdStar
                    key={ind}
                    style={{ fontSize: "24px" }}
                    className="text-orange-400"
                  />
                );
              } else {
                return (
                  <IoMdStarHalf
                    key={ind}
                    style={{ fontSize: "24px" }}
                    className="text-orange-400"
                  />
                );
              }
            }
          )}
          {5 - Math.round(product.rating) < 5 &&
            Array.apply(null, Array(5 - Math.round(product.rating))).map(
              (e, ind) => {
                return (
                  <IoMdStarOutline
                    key={ind}
                    style={{ fontSize: "24px" }}
                    className="text-orange-400"
                  />
                );
              }
            )}
          <span className="text-medium cursor-default">({product.rating})</span>
        </div>
        <div className="mt-2">
          <sup>$</sup>
          <span className="text-xxlarge font-bold">{product.price - 1}</span>
          <sub>99</sub>
          <span className="text-medium text-grey_disabled ml-2">
            (${(product.price / 12).toFixed(2)}/Count)
          </span>
        </div>
        <div className="text-medium mt-3">
          <p>
            Delivery <span className="font-bold">{formatDate(new Date())}</span>
          </p>
          <p>
            Or fastest delivery{" "}
            <span className="font-bold">{formatDate(new Date())}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
