"use client";
import Link from "next/link";
import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";

import DrawerComp from "./Sub/Drawer";
import { Nav, List, Ul } from "./Styled/SubNav";

import { list_data } from "@/constants/sub_nav";

export default function SubNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Ul>
        <List
          onClick={() => setIsOpen(true)}
          className="flex items-center !font-extrabold leading-3"
        >
          <BiMenu /> All
        </List>
        {list_data.map((list) => (
          <Link key={list.id} href={list.link}>
            <List>{list.title}</List>
          </Link>
        ))}
      </Ul>

      <DrawerComp isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
}
