import React from "react";
import Delivery from "./Delivery";
import Search from "./Search";
import LangSelect from "./LangSelect";
import ReturnOrders from "./ReturnOrders";
import Login from "./Login";

export default function ResponsiveMenu() {
  return (
    <div role="container" className="flex flex-col gap-4 md:px-4 mx-auto">
      <Delivery fromMenu />
      <Search fromMenu />
      <LangSelect fromMenu />
      <Login fromMenu />
      <ReturnOrders fromMenu />
    </div>
  );
}
