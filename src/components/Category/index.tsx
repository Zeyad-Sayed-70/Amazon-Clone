import { useState, useEffect, useContext, Suspense, lazy } from "react";
import CategoryDisplay from "./Sub/CategoryDisplay";
import SideBar from "./Sub/SideBar";
import { TbFilterCog } from "react-icons/tb";
import { useParams } from "next/navigation";
import useCategories from "@/hooks/useCategories";
import { ProductsContext } from "@/context/products";
import Spinner from "../Spinner";

const SideBarDrawer = lazy(() => import("./Sub/SideBarDrawer"));

export default function Index() {
  // Get the category name from the URL
  const { categoryName } = useParams();
  // Get the products from the useCategories hook
  const { products: data } = useCategories({ category: categoryName }) || [];
  // Set the state for the sidebar drawer
  const [isOpen, setIsOpen] = useState(false);
  // Get the products from the ProductsContext
  const { products, setProducts, setProductsInstance, setLoading } =
    useContext(ProductsContext);

  // Set the products when the data is loaded
  useEffect(() => {
    if (!data || data.length === 0) return;

    setProducts(data);
    setProductsInstance(data);
    setLoading(false);
  }, [data, setProducts, setProductsInstance, setLoading]);

  return (
    <main className="lg:flex gap-4 p-3 lg:p-0 bg-primary_white">
      <div className="hidden lg:!block">
        <Suspense fallback={<Spinner />}>
          <SideBar />
        </Suspense>
      </div>

      <div className="w-full lg:hidden">
        <button
          title="Filter"
          className="p-3 bg-grey_original rounded-md hover:opacity-80"
          onClick={() => setIsOpen(true)}
        >
          <TbFilterCog style={{ fontSize: "20px" }} />
        </button>

        {isOpen && (
          <Suspense fallback={<Spinner />}>
            <SideBarDrawer
              products={products}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </Suspense>
        )}
      </div>

      <Suspense fallback={<Spinner />}>
        <CategoryDisplay />
      </Suspense>
    </main>
  );
}
