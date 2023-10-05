import { useId } from "react";
import { Button } from "@/components/Globe/Button";
import { Div } from "@/components/Globe/Div";
import { categories } from "@/constants/categories";
import { search_history } from "@/constants/search-history";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";

export default function Search({ fromMenu = false }: { fromMenu?: boolean }) {
  const randId = useId();
  return (
    <Div
      className={`flex-1 items-center px-2 ${
        fromMenu ? "!flex justify-center sm:!hidden" : "!hidden sm:!flex"
      }`}
    >
      <Select
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
      />
      <Select
        instanceId={randId}
        className="flex-1 text-black"
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
      <Div className="flex items-center">
        <Button className="h-[38px] rounded">
          <BsSearch />
        </Button>
      </Div>
    </Div>
  );
}
