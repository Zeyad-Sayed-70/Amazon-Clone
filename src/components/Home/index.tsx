import React from "react";
import CBoxSingle from "./Sub/CBoxSingle";
import CBoxMulti from "./Sub/CBoxMulti";

export default function Categories({ categories }: { categories: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-2 gap-3 lg:gap-6 justify-center w-full">
      <CBoxMulti category={categories[0]} />
      {categories.slice(1, 7).map((category, ind) => (
        <CBoxSingle key={ind} category={category} />
      ))}
      <CBoxMulti category={categories[7]} />
    </div>
  );
}
