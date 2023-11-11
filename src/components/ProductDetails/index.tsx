import { useContext, useEffect } from "react";
import PageChains from "../PageChains";
import Details from "./Sub/Details";
import ProductsCarousel from "./Sub/ProductsCarousel";
import ImagesPreview from "./Sub/ImagesPreview";
import useFetchProductById from "@/hooks/useFetchProductById";
import { useParams } from "next/navigation";
import { ProductDetailsContext } from "@/context/productDetail";
import ProductInfo from "./Sub/ProductInfo";
import Reviews from "./Sub/Reviews";
import Spinner from "../Spinner";

export default function Index() {
  const { productId } = useParams();
  const { setProduct, setError, setLoading } = useContext(
    ProductDetailsContext
  );
  const { product, error, loading } = useFetchProductById({
    id: parseInt(productId),
  });

  const pages = [
    {
      page: product?.category as string,
      link: `category/${product?.category}`,
    },
    {
      page: product?.title as string,
      link: `product/${product?.id}`,
    },
  ];

  useEffect(() => {
    setProduct(product);
    setError(error);
    setLoading(loading);
  }, [product, error, loading, setProduct, setError, setLoading]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <article className="p-4">
      {loading && (
        <div
          style={{ height: "calc(100% - 109px)" }}
          className="fixed w-full top-[109px] left-0 z-50 bg-primary_white flex justify-center items-center font-bold text-xlarge"
        >
          <Spinner />
        </div>
      )}
      <PageChains pages={pages} />
      <Details />
      <ProductsCarousel skip={Math.floor(Math.random() * 60)} />
      <ImagesPreview />
      <ProductInfo />
      <Reviews />
    </article>
  );
}
