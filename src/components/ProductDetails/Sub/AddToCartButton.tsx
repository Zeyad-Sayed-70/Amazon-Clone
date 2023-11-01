import { LocalStateContext } from "@/context/localStorage";
import { ProductDetailsContext } from "@/context/productDetail";
import { useContext } from "react";

export default function AddToCartButton({ quantity }: { quantity: number }) {
  const { product } = useContext(ProductDetailsContext);
  const { localState, deleteLocalValue, setLocalValue } =
    useContext(LocalStateContext);

  let isInCart: Boolean = localState?.some(
    (item: any) => item.product.id === product?.id
  );

  return (
    <button
      onClick={() =>
        isInCart
          ? deleteLocalValue(product?.id as number)
          : setLocalValue(product as Product, quantity)
      }
      className="py-1.5 w-full mt-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-medium"
    >
      {isInCart ? "Remove from the Cart" : "Add to Cart"}
    </button>
  );
}
