"use client";
import { useState, memo } from "react";
import AllElements from "./sub";
import ResponsiveMenu from "./sub/ResponsiveMenu";
import Cart from "./sub/Cart";
import ToggleButton from "./sub/ToggleButton";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="py-2 bg-secondary_darkBlack text-primary_white">
      <div
        role="container"
        className="flex w-full justify-between md:px-4 mx-auto"
      >
        {/* Display all elements */}
        <AllElements />

        <div className="flex">
          <Cart />
          <ToggleButton isExpanded={isExpanded} onExpand={onExpand} />
        </div>
      </div>

      {/* Responsive Menu */}
      {isExpanded && <ResponsiveMenu />}
    </nav>
  );
}
