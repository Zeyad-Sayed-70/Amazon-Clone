"use client";
import Link from "next/link";
import React, { useState, lazy, Suspense } from "react";
import { BiMenu } from "react-icons/bi";
import { list_data } from "@/constants/subNav";

const DrawerComp = lazy(() => import("./Sub/Drawer"));

export default function SubNav() {
  // This state is used to store the state of the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="py-1 px-2 bg-secondary_medium text-primary_white">
      <ul className="flex items-center gap-1">
        <li
          onClick={() => setIsOpen(true)}
          className="cursor-pointer px-1 md:px-2 py-1 text-small md:text-medium flex items-center !font-extrabold leading-3 hover:shadow-hover"
        >
          <BiMenu style={{ fontSize: "1.2rem" }} /> All
        </li>

        {list_data.map((list) => (
          <Link key={list.id} href={list.link}>
            <li className="cursor-pointer px-1 md:px-2 py-1 text-center text-small md:text-medium hover:shadow-hover">
              {list.title}
            </li>
          </Link>
        ))}
      </ul>

      <Suspense fallback={<h1>opening...</h1>}>
        {/* This code need some changes to make sure the animation not go away */}
        {isOpen && <DrawerComp isOpen={isOpen} setIsOpen={setIsOpen} />}
      </Suspense>
    </nav>
  );
}
