import React from "react";
import CBoxSingle from "./Sub/CBoxSingle";
import CBoxMulti from "./Sub/CBoxMulti";

export default function Categories({ categories }: { categories: string[] }) {
  return (
    <div className="px-2 flex gap-3 lg:gap-6 justify-center w-full flex-wrap">
      <CBoxMulti category={categories[0]} />
      {categories.slice(1, 7).map((category, ind) => (
        <CBoxSingle key={ind} category={category} />
      ))}
      <CBoxMulti category={categories[7]} />
    </div>
  );
}
