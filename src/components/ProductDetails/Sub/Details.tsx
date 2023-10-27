import QuantitySelector from "@/components/QuantitySelector";
import Rating from "@/components/Rating";
import { LocalStateContext } from "@/context/localStorage";
import { ProductDetailsContext } from "@/context/productDetail";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export default function Details() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col items-start xl:flex-row my-2">
        {/* Images */}
        <ProductImages />

        {/* Details */}
        <ProductDetails />
      </div>
      {/* Checkout */}
      <ProductCheckout />
    </section>
  );
}

function ProductImages() {
  const width = useWindowWidth();
  const { product } = useContext(ProductDetailsContext);
  const [isImageHoverd, setIsImageHoverd] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);
  const [imageAxis, setImageAxis] = useState<{ x: number; y: number } | null>(
    null
  );
  let isLoading = false;

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (isLoading) return null;

    setTimeout(() => {
      setImageAxis({ x: e.clientX, y: e.clientY });
      isLoading = false;
    }, 10);

    isLoading = true;
  }

  useEffect(() => {
    if (product?.thumbnail) setSelectedImage(product.thumbnail);
  }, [product]);

  return (
    <div className="xl:sticky top-4 flex flex-col md:flex-row border-2 border-collapse">
      <ul className="flex-1 flex flex-row md:flex-col gap-2 border-2 p-2 overflow-auto">
        {product?.images.map((img, ind) => (
          <li
            key={ind}
            className={`rounded-lg overflow-hidden hover:border-2 hover:border-secondary_blue cursor-pointer ${
              selectedImage === img ? "border-2 border-secondary_blue" : ""
            }`}
          >
            <Image
              className="w-[50px] h-[50px] object-cover"
              width={40}
              height={40}
              quality={20}
              src={img || "/download.jpg"}
              alt={img || "Product Image"}
              onClick={() => setSelectedImage(img)}
            />
          </li>
        ))}
      </ul>

      <Image
        onMouseEnter={() => width && width > 1280 && setIsImageHoverd(true)}
        onMouseLeave={() => width && width > 1280 && setIsImageHoverd(false)}
        onMouseMove={(e) => handleMouseMove(e)}
        className="max-w-full md:max-w-[500px] h-[420px] object-contain p-3 xl:cursor-crosshair"
        width={400}
        height={400}
        quality={50}
        src={selectedImage || "/download.jpg"}
        alt={product?.title || "Product Image"}
      />

      <div
        className={`absolute top-0 left-full ml-1 w-[750px] h-[600px] bg-primary_white overflow-hidden z-[100] hidden ${
          isImageHoverd ? "xl:block" : ""
        }`}
      >
        <Image
          style={{ transformOrigin: `${imageAxis?.x}px ${imageAxis?.y}px` }}
          className={`w-full h-[100%] object-contain scale-150`}
          width={900}
          height={900}
          quality={100}
          src={selectedImage || "/download.jpg"}
          alt={product?.title || "Product Image"}
        />
      </div>
    </div>
  );
}

function ProductDetails() {
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

function ProductCheckout() {
  const { product } = useContext(ProductDetailsContext);
  const [quantity, setQuantity] = useState(1);
  const { localState, deleteLocalValue, setLocalValue } =
    React.useContext(LocalStateContext);

  let isInCart: Boolean = localState?.some(
    (item: any) => item.product.id === product?.id
  );

  return (
    <div className="min-w-[300px] max-w-[230px] md:min-w-[230px] mx-auto flex flex-col">
      <div className="p-3 border-2 rounded-lg">
        <h4 className="text-xxlarge font-bold">
          <sup className="text-small font-extralight">$</sup>
          {product && product.price - 1}
          <sub className="text-small font-thin">99</sub>
        </h4>
        <p className="text-medium my-3">
          $86.62 Shipping & Import Fees Deposit to Egypt{" "}
          <Link
            href={"#"}
            className="inline text-medium text-secondary_blue hover:text-secondary_orange"
          >
            Details
          </Link>
          . Delivery <span className="font-bold">Tuesday, November 7</span>.
          Order within <span className="text-green-700">23 hrs 40 mins</span>
        </p>

        <Link
          href={"#"}
          className="flex items-center gap-1 text-medium text-secondary_blue hover:text-secondary_orange"
        >
          <IoLocationOutline className="text-grey_disabled" /> Deliver to Egypt
        </Link>
        <h2 className="text-green-700 text-xlarge my-3">In Stock</h2>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton quantity={quantity} />
        <button className="py-1.5 w-full rounded-full bg-orange-400 hover:bg-orange-500 text-medium my-3">
          Buy Now
        </button>
        <ul>
          <li className="text-small mb-1 flex justify-start w-full gap-3">
            <span>Payment</span>
            <Link
              href={"#"}
              className="text-secondary_blue hover:text-secondary_orange"
            >
              Secure transaction
            </Link>
          </li>
          <li className="text-small mb-1 flex justify-start w-full gap-3">
            <span>Ships from</span>
            <Link
              href={"#"}
              className="text-secondary_blue hover:text-secondary_orange"
            >
              Amazon
            </Link>
          </li>
          <li className="text-small mb-1 flex justify-start w-full gap-3">
            <span>Sold by</span>
            <Link
              href={"#"}
              className="text-secondary_blue hover:text-secondary_orange"
            >
              Gaming Headphone
            </Link>
          </li>
          <li className="text-small mb-1 flex justify-start w-full gap-3">
            <span>Returns</span>
            <Link
              href={"#"}
              className="text-secondary_blue hover:text-secondary_orange"
            >
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </Link>
          </li>
        </ul>
        <hr className="py-[1px] my-2 bg-grey_original" />
        <button className="py-1 w-full rounded-md bg-grey_original hover:bg-grey_dark text-medium my-3">
          Add to List
        </button>
      </div>
    </div>
  );
}

function AddToCartButton({ quantity }: { quantity: number }) {
  const { product } = useContext(ProductDetailsContext);
  const { localState, deleteLocalValue, setLocalValue } =
    React.useContext(LocalStateContext);

  let isInCart: Boolean = localState?.some(
    (item: any) => item.product.id === product?.id
  );
  return (
    <button
      onClick={() =>
        isInCart
          ? deleteLocalValue(product?.id as number)
          : setLocalValue(product as Product, quantity)
      }
      className="py-1.5 w-full mt-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-medium"
    >
      {isInCart ? "Remove from the Cart" : "Add to Cart"}
    </button>
  );
}
