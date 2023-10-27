import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function ToggleButton({
  onExpand,
  isExpanded,
}: {
  isExpanded: boolean;
  onExpand: () => void;
}) {
  return (
    <section
      className="items-center gap-2 px-2 py-1 hover:shadow-hover !flex lg:!hidden cursor-pointer"
      onClick={onExpand}
    >
      <AiOutlineMenuFold
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          transform: isExpanded ? "rotate(90deg)" : "rotate(-90deg)",
        }}
      />
    </section>
  );
}
