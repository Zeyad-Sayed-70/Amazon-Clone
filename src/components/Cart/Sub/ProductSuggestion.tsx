import Rating from "@/components/Rating";
import { LocalStateContext } from "@/context/localStorage";
import Image from "next/image";
import { useContext } from "react";

export default function ProductSuggestion({ product }: { product: Product }) {
  const { localState, deleteLocalValue, setLocalValue } =
    useContext(LocalStateContext);

  let isInCart: Boolean = localState?.some(
    (item: any) => item.product?.id === product?.id
  );

  if (product)
    return (
      <div className="flex items-center gap-1 mb-4">
        <Image
          className="rounded-md object-contain max-h-[150px]"
          width={100}
          height={100}
          src={product.thumbnail || "/download.jpg"}
          alt={"product/photo"}
        />
        <div className="flex flex-col text-large mt-3">
          <h3 className="text-medium font-bold">{product.title}</h3>
          <div className="flex items-center">
            <Rating stars={4} />
            <span className="text-secondary_blue hover:text-secondary_red cursor-pointer text-small ml-1">
              418
            </span>
          </div>
          <h4 className="text-secondary_red mb-2">${product.price}</h4>
          <button
            onClick={() =>
              isInCart
                ? deleteLocalValue(product?.id as number)
                : setLocalValue(product as Product, 1)
            }
            className="bg-yellow-300 hover:bg-yellow-400 p-1 px-2 rounded-full text-small w-fit"
          >
            {isInCart ? "Remove from the Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    );
}
