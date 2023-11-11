"use client";
import { useContext, useState, useEffect } from "react";
import { categories } from "@/constants/categories";
import Link from "next/link";
import { IoIosArrowBack, IoMdStar, IoMdStarOutline } from "react-icons/io";
import { ProductsContext } from "@/context/products";
import { price_filter, rating_filter } from "@/constants/productsFilter";
import Rating from "@/components/Rating";

interface FilterData {
  category: "All" | string;
  price: "All" | [number, number];
  rating: "All" | number;
  brand: "All" | string[];
}

export default function SideBar() {
  const { productsInstance, setProducts } = useContext(ProductsContext);
  const [filterData, setFilterData] = useState<FilterData>({
    category: "All",
    price: "All",
    rating: 0,
    brand: "All",
  });

  useEffect(() => {
    setProducts(
      productsInstance.filter((product) => {
        if (filterData.category !== "All") {
          if (product.category !== filterData.category) {
            return false;
          }
        }
        if (filterData.price !== "All") {
          if (
            product.price < filterData.price[0] ||
            product.price > filterData.price[1]
          ) {
            return false;
          }
        }
        if (filterData.rating !== "All") {
          if (product.rating < filterData.rating) {
            return false;
          }
        }
        if (filterData.brand !== "All" && filterData.brand.length !== 0) {
          if (!filterData.brand.includes(product.brand)) {
            return false;
          }
        }
        return true;
      })
    );
  }, [filterData, productsInstance, setProducts]);

  return (
    <article className="flex flex-col gap-6 min-w-[200px] bg-primary_white p-6 text-primary_black lg:border-r-4 overflow-auto h-full">
      {/* Display all Departments */}
      <section>
        <h1 className="text-medium font-bold mb-2">Department</h1>
        {categories.slice(10).map((category, ind) => (
          <Link
            key={ind}
            className="capitalize flex items-center gap-2 text-medium text-secondary_blue hover:text-secondary_orange"
            href={`/category/${category.value.toLowerCase()}`}
          >
            <IoIosArrowBack />
            {category.label.split("_").join(",")}
          </Link>
        ))}
      </section>

      {/* Price Filter */}
      <section>
        <h1 className="text-medium font-bold mb-1">Price</h1>
        <ul className="text-medium">
          {price_filter.map((e) => (
            <li
              key={e.id}
              onClick={() =>
                setFilterData({
                  ...filterData,
                  price: e.limit as [number, number],
                })
              }
              className={`hover:text-secondary_orange cursor-pointer w-fit ${
                e.limit === filterData.price ? "text-secondary_orange" : ""
              }`}
            >
              {e.title}
            </li>
          ))}
        </ul>
      </section>

      {/* Rating Filter (Stars) */}
      <section>
        <h1 className="text-medium font-bold mb-1">Rating</h1>
        {rating_filter.map((r) => (
          <div
            key={r.id}
            onClick={() => setFilterData({ ...filterData, rating: r.rate })}
            className={`flex items-center gap-2 hover:text-secondary_orange cursor-pointer ${
              r.rate === filterData.rating ? "text-secondary_orange" : ""
            }`}
          >
            <Rating stars={r.rate} />
            <span className="text-small flex items-center">
              {r.title === "5" ? (
                <>
                  {r.rate}{" "}
                  <IoMdStar
                    style={{ fontSize: "14px" }}
                    className="text-orange-400"
                  />
                </>
              ) : (
                r.title
              )}
            </span>
          </div>
        ))}
      </section>

      {/* Brand Filter */}
      <section>
        <h1 className="text-medium font-bold mb-1">Brands</h1>
        {productsInstance.map((p) => {
          return (
            <div key={p.id} className="flex items-center gap-2">
              <input
                id={p.id.toString()}
                type="checkbox"
                name="brand"
                onChange={(e) =>
                  setFilterData(
                    e.target.checked
                      ? {
                          ...filterData,
                          brand:
                            filterData.brand !== "All"
                              ? [...filterData.brand, p.brand]
                              : [p.brand],
                        }
                      : {
                          ...filterData,
                          brand:
                            filterData.brand !== "All"
                              ? filterData.brand.filter((b) => b !== p.brand)
                              : [p.brand],
                        }
                  )
                }
              />
              <label htmlFor={p.id.toString()} className="select-none">
                {p.brand}
              </label>
            </div>
          );
        })}
      </section>
    </article>
  );
}
