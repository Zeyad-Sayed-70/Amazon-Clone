import Rating from "@/components/Rating";
import Image from "next/image";

export default function ProductSuggestion({ product }: { product: Product }) {
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
          <button className="bg-yellow-300 hover:bg-yellow-400 p-1 px-2 rounded-full text-small w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    );
}
