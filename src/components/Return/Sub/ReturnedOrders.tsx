"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import Select from "@/components/Select";
import Link from "next/link";

const options = [
  {
    value: "1",
    label: "Today",
  },
  {
    value: "2",
    label: "This Week",
  },
  {
    value: "3",
    label: "This Month",
  },
  {
    value: "4",
    label: "This Year",
  },
];

export default function ReturnedOrders() {
  const [tab, setTab] = useState(1);

  return (
    <section>
      <Tabs tab={tab} setTab={setTab} />

      <section className="mt-2 text-medium">
        <div className="flex items-center gap-3">
          <h6>
            <span className="font-bold">0 orders</span> placed in
          </h6>
          <Select
            options={options}
            className="focus:border-2 focus:border-secondary_blue"
          />
        </div>

        <p className="text-small mt-12 text-center">
          You have not placed any orders in last 30 days.
          <span className="ml-2 text-secondary_blue hover:text-secondary_orange hover:underline cursor-pointer">
            View orders in past 3 months
          </span>
        </p>
      </section>
    </section>
  );
}
