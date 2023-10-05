import { useId } from "react";
import Select from "react-select";
import { FlexBox } from "../Styled/Navbar,";

export default function LangSelect({
  fromMenu = false,
}: {
  fromMenu?: boolean;
}) {
  const randId = useId();
  return (
    <FlexBox
      className={`py-0 ${
        fromMenu ? "!flex justify-center md:!hidden" : "!hidden md:!flex"
      } `}
    >
      <Select
        instanceId={randId}
        className="text-black w-[100px]"
        placeholder="en-🇺🇸"
        value={"en-🇺🇸"}
        isSearchable={false}
        onChange={() => {}}
        options={
          [
            { label: "en-🇺🇸", value: "en-🇺🇸" },
            { label: "ar-eg", value: "ar-eg" },
          ] as any
        }
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "0",
            backgroundColor: "none",
            border: "none",
          }),
        }}
      />
    </FlexBox>
  );
}
