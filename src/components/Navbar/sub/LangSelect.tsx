import Select from "@/components/Select";

export default function LangSelect({
  fromMenu = false,
}: {
  fromMenu?: boolean;
}) {
  return (
    <section
      className={`
      items-center gap-2 px-2 hover:shadow-hover py-0 
      ${fromMenu ? "!flex justify-center md:!hidden" : "!hidden md:!flex"} `}
    >
      <Select
        options={[
          { label: "en-🇺🇸", value: "en-🇺🇸" },
          { label: "ar-eg", value: "ar-eg" },
        ]}
      />
    </section>
  );
}
