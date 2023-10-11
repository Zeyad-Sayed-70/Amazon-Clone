import React from "react";

export default function Select({
  options,
  className,
  handleChange,
}: {
  options: { label: string; value: string }[];
  className?: string;
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      name="select"
      className={`${className} bg-primary_white text-primary_black text-medium px-3 py-2 border-2 outline-none`}
      onChange={handleChange}
    >
      {options.map((op, ind) => (
        <option
          className="bg-primary_white text-primary_black text-medium border-2"
          key={ind}
          value={op.value}
        >
          {op.label}
        </option>
      ))}
    </select>
  );
}
