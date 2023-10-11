import { useId } from "react";
import { categories } from "@/constants/categories";
import { search_history } from "@/constants/search-history";
import SelectComp from "@/components/Select";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";

export default function Search({ fromMenu = false }: { fromMenu?: boolean }) {
  const randId = useId();
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
      {/* <input
        type="text"
        name="search"
        placeholder="Search Amazon"
        className="flex-1 h-[40px] px-2 py-1 text-black bg-white border border-gray-300 focus:outline-none focus"
      /> */}
      {/* <Select
        instanceId={randId}
        className="text-black w-[130px]"
        isSearchable={false}
        placeholder="All Departments"
        value={"All Departments"}
        onChange={() => {}}
        options={[
          { value: "all", label: "All Departments" },
          ...(categories as any),
        ]}
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "4px 0 0 4px",
            textWrap: "nowrap",
          }),
        }}
      /> */}
      <Select
        instanceId={randId}
        className="flex-1 min-w-[150px] text-black"
        placeholder="Search Amazon"
        value={""}
        onChange={() => {}}
        options={search_history as any}
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
