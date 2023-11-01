import { table_data } from "@/constants/tableData";
import { ProductDetailsContext } from "@/context/productDetail";
import React, { useContext } from "react";

export default function ProductInfo() {
  const { product } = useContext(ProductDetailsContext);
  return (
    <section>
      <h1 className="text-large font-bold mb-4">Product Information</h1>
      <table>
        <tbody>
          <tr className="border-2">
            <th className="text-start bg-grey_original p-2 px-2 md:px-4 font-normal">
              Product Name
            </th>
            <td className="p-2 px-2 md:px-4">{product?.title}</td>
          </tr>
          <tr className="border-2">
            <th className="text-start bg-grey_original p-2 px-2 md:px-4 font-normal">
              Product Category
            </th>
            <td className="p-2 px-2 md:px-4">{product?.category}</td>
          </tr>
          <tr className="border-2">
            <th className="text-start bg-grey_original p-2 px-2 md:px-4 font-normal">
              Product Brand
            </th>
            <td className="p-2 px-2 md:px-4">{product?.brand}</td>
          </tr>
          {Object.entries(table_data).map(([key, value], ind) => (
            <tr key={ind} className="border-2">
              <th className="text-start bg-grey_original p-2 px-2 md:px-4 font-normal">
                {key}
              </th>
              <td className="p-2 px-2 md:px-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
