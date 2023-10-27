import React from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

export default function Rating({
  stars,
  size = 20,
}: {
  stars: number;
  size?: number;
}) {
  const starsInt = parseInt(stars.toString());
  return (
    <div className="flex items-center">
      {Array.apply(null, Array(starsInt)).map((e, ind) => (
        <IoMdStar
          key={ind}
          style={{ fontSize: `${size}px` }}
          className="text-orange-400"
        />
      ))}
      {Array.apply(null, Array(5 - starsInt)).map((e, ind) => (
        <IoMdStarOutline
          key={ind}
          style={{ fontSize: `${size}px` }}
          className="text-orange-400"
        />
      ))}
    </div>
  );
}
