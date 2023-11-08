import React from "react";
import PageChains from "../PageChains";
import ReturnedOrders from "./Sub/ReturnedOrders";

export default function Index() {
  const pages = [
    {
      page: "return orders",
      link: "return",
    },
  ];

  return (
    <article className="w-full lg:w-[70%] p-2 sm:p-12 pb-3 mx-auto">
      <PageChains pages={pages} />
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-4">
        <h1 className="text-xxlarge">Your Orders</h1>
        <div className="flex gap-4 items-center">
          <input
            name="search-orders"
            type="text"
            placeholder="Search all orders"
            className="rounded-sm w-[300px] p-1 px-2 border-2 border-primary_black"
          />
          <button className="text-white bg-black hover:bg-gray-700 rounded-lg text-small md:text-medium px-2 py-1">
            Search Orders
          </button>
        </div>
      </section>
      {/* Returned Orders and Tabs */}
      <ReturnedOrders />
    </article>
  );
}
