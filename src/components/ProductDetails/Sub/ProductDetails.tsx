import { useContext } from "react";
import Rating from "@/components/Rating";
import Link from "next/link";
import { AiFillQuestionCircle } from "react-icons/ai";
import { ProductDetailsContext } from "@/context/productDetail";

export default function ProductDetails() {
  const { product, loading } = useContext(ProductDetailsContext);

  return (
    <div className="flex-1 p-4 px-6">
      <p className="text-xxlarge ">{product?.description}</p>
      <div className="flex items-center font-bold gap-1">
        {product?.rating}
        {product?.rating && (
          <Rating stars={parseInt(product?.rating.toString())} />
        )}
        <Link
          href={"#"}
          className="ml-2 font-normal block -mb-1 text-medium text-secondary_blue hover:text-secondary_orange"
        >
          58 rating
        </Link>
      </div>
      <hr className="py-[1px] my-2 bg-grey_original" />
      <div>
        <div className="flex items-center gap-3">
          <h4 className="text-xxlarge text-secondary_red font-thin">
            -{product?.discountPercentage}%
          </h4>
          <h4 className="text-xxlarge font-bold">
            <span className="text-small font-extralight align-[8px]">$</span>
            {product?.price ? product?.price - 1 : ""}
            <span className="text-small font-thin align-[-4px]">99</span>
          </h4>
        </div>
        <p className="text-small font-bold text-grey_disabled flex items-center">
          Typical price:{" "}
          <del>
            $
            {product?.price &&
              (
                product?.price +
                product?.price * (product?.discountPercentage / 100)
              ).toFixed(2)}
          </del>{" "}
          <AiFillQuestionCircle
            title="This is determined using the 90-day median price paid by customers for the product on Amazon. We exclude prices paid by customers for the product during a limited time deal.
            "
            className="ml-2 text-medium text-grey_disabled hover:text-grey_dark"
          />
        </p>
      </div>
      <ul className="mt-3">
        <li className="text-medium mb-2">
          <span className="font-extrabold">Style: </span>Standard
        </li>
        <li className="text-medium mb-2">
          <span className="font-extrabold">Brand: </span>WESEARY
        </li>
        <li className="text-medium mb-2">
          <span className="font-extrabold">Model Name: </span>WG1
        </li>
      </ul>
      <hr className="py-[1px] my-2 bg-grey_original" />
      <ul className="list-disc text-medium pl-6">
        <h2 className="text-large font-bold mb-3">About this item</h2>
        <li className="mb-2">
          Discover the amazing features and benefits of the {product?.title}, a
          {product?.category} that will {product?.description}.
        </li>
        <li className="mb-2">
          Enjoy the {product?.brand} {product?.title} that make the{" "}
          {product?.title} stand out from the rest. Whether you need{" "}
          {product?.category}, {product?.description}, the {product?.title} has
          it all.
        </li>
        <li className="mb-2">
          Choose from the {product?.brand} that suit your needs and preferences.
          The {product?.title} comes in different {product?.brand}.
        </li>
        <li className="mb-2">
          Experience the convenience and reliability of the {product?.title},
          with its {product?.description}.
        </li>
        <li className="mb-2">
          Comfortable and stylish design with amazing look. The {product?.title}{" "}
          is {product?.description}.
        </li>
      </ul>
    </div>
  );
}
