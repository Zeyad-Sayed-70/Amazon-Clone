import React from "react";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "@/components/QuantitySelector";
import { LocalStateContext } from "@/context/localStorage";

export default function ProductCart({
  product,
  quantity: q,
}: {
  product: Product;
  quantity: number;
}) {
  const { setLocalState, localState } = React.useContext(LocalStateContext);
  // Create a state for the quantity and set it to the passed in quantity.
  const [quantity, setQuantity] = React.useState(q);

  // Get the key for the local storage.
  const key = "cart_data";

  // This function sets the quantity and saves it to local storage.
  function setQuantityAndSave(quan: number) {
    setQuantity(quan);

    // Get the old values from local storage.
    const oldValues =
      JSON.parse(window.localStorage.getItem(key) as string) || [];

    // Map over the old values and update the quantity if it matches the product id.
    const newValues = oldValues.map((item: any) => {
      if (item.product.id === product?.id) item.quantity = quan;

      return item;
    });

    // Save the new values to local storage.
    window.localStorage.setItem(key, JSON.stringify(newValues));

    // Update the local state with the new values.
    setLocalState(newValues);
  }

  function deleteItem(product: Product) {
    const newValue = localState.filter(
      (item) => item.product.id !== product.id
    );
    setLocalState(newValue);
    // Save the new values to local storage.
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <Link href={`/product/${product.id}`}>
        <Image
          alt="product/photo"
          src={product.thumbnail || "/download.jpg"}
          width={100}
          height={100}
          className="min-w-[300px] md:min-w-[150px] object-contain h-[200px] bg-primary_white"
        />
      </Link>
      <div className="flex flex-col gap-1 py-4">
        <h2 className="text-large">{product.description}</h2>
        {/* Discount */}
        <div className="font-bold text-small flex items-center gap-2">
          <span className="p-1 bg-secondary_red text-primary_white">
            {product.discountPercentage}% off
          </span>
          <small className="text-secondary_red text-small">Deal</small>
        </div>
        <span className="text-large font-extrabold">${product.price}</span>
        <small className="text-gray-500 text-small mt-1 -mb-1">In Stock</small>
        <div>
          <input type="checkbox" id={product.id.toString()} />{" "}
          <label
            htmlFor={product.id.toString()}
            className="select-none ml-2 text-medium"
          >
            This is a gift{" "}
            <span className="text-secondary_blue hover:text-secondary_red cursor-pointer">
              Learn more
            </span>
          </label>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantityAndSave}
          />

          <span
            onClick={() => deleteItem(product)}
            className="text-secondary_blue cursor-pointer hover:underline text-small"
          >
            Delete
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-secondary_blue cursor-pointer hover:underline text-small">
            Save for later
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-secondary_blue cursor-pointer hover:underline text-small">
            Compare with similar items
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-secondary_blue hover:text-secondary_red cursor-pointer hover:underline text-small">
            Share
          </span>
        </div>
      </div>
    </div>
  );
}
