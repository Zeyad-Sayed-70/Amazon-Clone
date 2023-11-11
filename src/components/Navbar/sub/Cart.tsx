import { LocalStateContext } from "@/context/localStorage";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function Cart() {
  const { localState } = React.useContext(LocalStateContext);
  const ITEMSCOUNT =
    localState?.length > 0 &&
    localState
      ?.map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr);

  return (
    <section className="items-center gap-2 px-2 py-1 hover:shadow-hover">
      <Link href={"/cart"} className="flex items-end">
        <HiOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
        <div className="flex flex-col justify-between items-center">
          <h3 className="text-large text-primary_orange font-bold">
            {ITEMSCOUNT || 0}
          </h3>
          <h4 className="text-medium text-grey_original font-bold">Cart</h4>
        </div>
      </Link>
    </section>
  );
}
