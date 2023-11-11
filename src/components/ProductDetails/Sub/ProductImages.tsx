import Spinner from "@/components/Spinner";
import { ProductDetailsContext } from "@/context/productDetail";
import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import { useContext, useEffect, useState, Suspense } from "react";

export default function ProductImages() {
  const width = useWindowWidth();
  const { product } = useContext(ProductDetailsContext);
  const [isImageHoverd, setIsImageHoverd] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);
  const [imageAxis, setImageAxis] = useState<{ x: number; y: number } | null>(
    null
  );
  let isLoading = false;

  function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (isLoading) return null;

    setTimeout(() => {
      setImageAxis({ x: e.clientX, y: e.clientY });
      isLoading = false;
    }, 10);

    isLoading = true;
  }

  useEffect(() => {
    if (product?.thumbnail) setSelectedImage(product.thumbnail);
  }, [product]);

  return (
    <div className="xl:sticky top-4 flex flex-col md:flex-row border-2 border-collapse">
      <ul className="flex-1 flex flex-row md:flex-col gap-2 border-2 p-2 overflow-auto">
        {product?.images?.map((img, ind) => (
          <li
            key={ind}
            className={`rounded-lg overflow-hidden hover:border-2 hover:border-secondary_blue cursor-pointer ${
              selectedImage === img ? "border-2 border-secondary_blue" : ""
            }`}
          >
            <Image
              className="w-[50px] h-[50px] object-cover"
              width={40}
              height={40}
              quality={20}
              src={img || "/download.jpg"}
              alt={img || "Product Image"}
              onClick={() => setSelectedImage(img)}
            />
          </li>
        ))}
      </ul>

      <Image
        onMouseEnter={() => width && width > 1280 && setIsImageHoverd(true)}
        onMouseLeave={() => width && width > 1280 && setIsImageHoverd(false)}
        onMouseMove={(e) => handleMouseMove(e)}
        className="max-w-full md:max-w-[500px] h-[420px] object-contain p-3 xl:cursor-crosshair"
        width={400}
        height={400}
        quality={50}
        src={selectedImage || "/download.jpg"}
        alt={product?.title || "Product Image"}
      />

      <Suspense fallback={<Spinner />}>
        <div
          className={`absolute top-0 left-full ml-1 w-[750px] h-[600px] bg-primary_white overflow-hidden z-[100] ${
            isImageHoverd ? "block" : "hidden"
          }`}
        >
          <Image
            style={{ transformOrigin: `${imageAxis?.x}px ${imageAxis?.y}px` }}
            className={`w-full h-[100%] object-contain scale-150`}
            width={900}
            height={900}
            quality={100}
            src={selectedImage || "/download.jpg"}
            alt={product?.title || "Product Image"}
          />
        </div>
      </Suspense>
    </div>
  );
}
