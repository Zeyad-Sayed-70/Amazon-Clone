"use client";
import { useState } from "react";
import Link from "next/link";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineMenuFold } from "react-icons/ai";

import { FlexBox, Logo, Nav } from "./Styled/Navbar,";
import { Container } from "../Globe/Container";
import { Div } from "../Globe/Div";
import { T3, T4 } from "../Globe/Titles";
import Delivery from "./sub/Delivery";
import Search from "./sub/Search";
import LangSelect from "./sub/LangSelect";
import Login from "./sub/Login";
import ReturnOrders from "./sub/ReturnOrders";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Nav>
      <Container className="flex w-full justify-between">
        {/* Logo */}
        <FlexBox>
          <Link href={"/"}>
            <Logo src="/logo.png" alt="amazon_logo" aria-label="amazon_logo" />
          </Link>
        </FlexBox>

        <Delivery />
        <Search />
        <LangSelect />
        <Login />
        <ReturnOrders />

        {/* Cart */}
        <Div className="flex">
          <FlexBox>
            <Link href={"/cart"} className="flex items-end">
              <HiOutlineShoppingCart style={{ fontSize: "2.5rem" }} />
              <Div className="flex flex-col justify-between items-center">
                <T3 color="primary_orange">0</T3>
                <T4 color="grey_original">Cart</T4>
              </Div>
            </Link>
          </FlexBox>
          <FlexBox
            className="!flex lg:!hidden cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <AiOutlineMenuFold
              style={{
                fontSize: "2.5rem",
                color: "#fff",
                transform: isExpanded ? "rotate(90deg)" : "rotate(-90deg)",
              }}
            />
          </FlexBox>
        </Div>
      </Container>

      {/* Responsive Menu */}
      {isExpanded && (
        <Container className="flex flex-col gap-4">
          <Delivery fromMenu />
          <Search fromMenu />
          <LangSelect fromMenu />
          <Login fromMenu />
          <ReturnOrders fromMenu />
        </Container>
      )}
    </Nav>
  );
}
