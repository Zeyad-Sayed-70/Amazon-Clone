import { quantityLimit } from "../constants/quantityLimit";
import React from "react";

export default function QuantitySelector({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) {
  return (
    <select
      value={quantity}
      onChange={(e) => setQuantity(parseInt(e.target.value))}
      className="p-1 px-3 text-medium text-primary_black bg-gray-200 outline-secondary_blue rounded-md"
    >
      {quantityLimit.map((e, ind) => (
        <option key={ind} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
}
