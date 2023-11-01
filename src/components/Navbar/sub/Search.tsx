import { useId } from "react";
import { categories } from "@/constants/categories";
import SelectComp from "@/components/Select";
import Select from "react-select/async";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function Search({ fromMenu = false }: { fromMenu?: boolean }) {
  const randId = useId();

  const getProducts = (input: string) => {
    return axios
      .get(`https://dummyjson.com/products/search?q=${input}`)
      .then((res) => {
        // Transform the data into the format expected by react-select
        return res.data.products.map((product: Product) => ({
          label: product.title,
          value: product.id,
        }));
      });
  };

  return (
    <section
      className={`flex-1 items-center px-2 ${
        fromMenu ? "!flex justify-center sm:!hidden" : "!hidden sm:!flex"
      }`}
    >
      <SelectComp
        className="w-full min-w-[100px] max-w-[180px] h-[38px] rounded-s-md"
        options={[
          { value: "all", label: "All Departments" },
          ...(categories as any),
        ]}
      />
      <Select
        instanceId={randId}
        className="flex-1 min-w-[150px] text-black z-[1000]"
        placeholder="Search Amazon"
        onChange={(e: any) => {
          location.href = `/product/${e.value}`;
        }}
        loadOptions={getProducts}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "0",
            textWrap: "nowrap",
          }),
        }}
      />
      <div className="flex items-center">
        <button className="p-2 px-4 h-[38px] rounded-e-md flex items-center justify-center bg-primary_orange text-primary_black hover:bg-secondary_yellow">
          <BsSearch />
        </button>
      </div>
    </section>
  );
}
