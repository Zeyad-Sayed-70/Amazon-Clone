import React, { Suspense, useContext, lazy } from "react";
import Delivery from "./Delivery";
import Search from "./Search";
import LangSelect from "./LangSelect";
import ReturnOrders from "./ReturnOrders";
import Logo from "./Logo";
import { SafeGateContext } from "@/context/safeGate";
import Login from "./Login";

export default function Index() {
  return (
    <>
      <Logo />
      <Delivery />
      <Search />
      <LangSelect />
      <Login />
      <ReturnOrders />
    </>
  );
}
