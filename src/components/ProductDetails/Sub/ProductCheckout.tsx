import QuantitySelector from "@/components/QuantitySelector";
import { ProductDetailsContext } from "@/context/productDetail";
import { SafeGateContext } from "@/context/safeGate";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import AddToCartButton from "./AddToCartButton";
import { create_checkout_session } from "@/lib/create-checkout-session";

export default function ProductCheckout() {
  const { product } = useContext(ProductDetailsContext);
  const { isLoggined } = useContext(SafeGateContext);
  const [quantity, setQuantity] = useState(1);

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
        <button
          onClick={() =>
            create_checkout_session([
              { quantity: 1, product: product as Product },
            ])
          }
          disabled={!isLoggined}
          className={`py-1.5 w-full rounded-full bg-orange-400 hover:bg-orange-500 text-medium my-3 disabled:opacity-50 disabled:bg-gray-300 disabled:hover:bg-gray-300`}
        >
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
