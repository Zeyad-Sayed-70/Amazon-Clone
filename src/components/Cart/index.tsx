"use client";
import React, { lazy, Suspense } from "react";
import ProductCart from "@/components/Cart/Sub/ProductCart";
import { LocalStateContext } from "@/context/localStorage";
import dynamic from "next/dynamic";
import { create_checkout_session } from "@/lib/create-checkout-session";
import Spinner from "../Spinner";

const MultiCarousel = dynamic(
  () => import("@/components/Home/Sub/MultiCarousel"),
  { ssr: false }
);

const TopSellersProducts = lazy(() => import("./Sub/TopSellersProducts"));

export default function Index() {
  const { localState } = React.useContext(LocalStateContext);

  const ITEMSCOUNT =
    localState?.length > 0
      ? localState
          ?.map((item) => item.quantity)
          .reduce((prev, curr) => prev + curr)
      : 0;

  const SUBTOTAL =
    localState?.length > 0
      ? localState
          ?.map((item) => item.product?.price * item.quantity)
          .reduce((prev, curr) => prev + curr)
          .toFixed(2)
      : 0;

  return (
    <main>
      <article className="md:m-4 flex flex-col lg:flex-row gap-3">
        {/* Shopping Cart */}
        <section className="bg-primary_white p-4 flex-1">
          <h1 className="text-xlarge font-bold mb-3">Shopping Cart</h1>
          <hr className="h-[1px] bg-grey_original" />
          <p className="text-small my-4">
            <span className="text-secondary_blue hover:text-secondary_red cursor-pointer">
              Scotch Magic Greener Tape 3 Rolls, Numerous Applications,
              Invisi...
            </span>{" "}
            was removed from Shopping Cart.
          </p>
          <hr className="h-[1px] bg-grey_original" />
          {/* Cart Products */}
          <div className="flex flex-col gap-3">
            {localState && localState.length > 0 ? (
              localState?.map((item: any) => (
                <ProductCart
                  key={item.product?.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <h2 className="font-bold text-large my-4 mx-auto">
                Your Cart is Empty
              </h2>
            )}
          </div>
          <hr className="h-[1px] bg-grey_original my-2" />
          {/* Subtotal */}
          <h2 className="text-large text-right">
            Subtotal ({ITEMSCOUNT} items):{" "}
            <span className="font-bold">${SUBTOTAL}</span>
          </h2>
        </section>
        <section className="w-full lg:w-[300px] flex flex-col gap-3">
          {/* Subtotal & Checkout */}
          <div className="bg-primary_white p-4">
            <h2 className="text-large">
              Subtotal ({ITEMSCOUNT} items):{" "}
              <span className="font-bold">${SUBTOTAL}</span>
            </h2>
            <div>
              <input type="checkbox" id="gift" />{" "}
              <label htmlFor="gift" className="select-none ml-2 text-medium">
                This order contains a gift
              </label>
            </div>
            <button
              disabled={ITEMSCOUNT === 0}
              onClick={() => create_checkout_session(localState)}
              className="py-2 w-full text-medium font-bold bg-yellow-400 hover:bg-yellow-500 rounded-lg mt-4 disabled:bg-grey_original disabled:cursor-not-allowed disabled:opacity-50"
            >
              Proceed to checkout
            </button>
          </div>

          {/* International top sellers */}
          <div className="bg-primary_white p-4">
            <h2 className="text-large font-bold">International top sellers</h2>
            <Suspense fallback={<Spinner />}>
              <TopSellersProducts />
            </Suspense>
          </div>
        </section>
      </article>

      {/* Products Carousel */}
      <Suspense fallback={<Spinner />}>
        <MultiCarousel
          skip={50}
          title="New international customers purchased"
        />
        <MultiCarousel skip={25} title="Also you may like" />
      </Suspense>
    </main>
  );
}
