import React from "react";
import Delivery from "./Delivery";
import Search from "./Search";
import LangSelect from "./LangSelect";
import Login from "./Login";
import ReturnOrders from "./ReturnOrders";
import Logo from "./Logo";

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
