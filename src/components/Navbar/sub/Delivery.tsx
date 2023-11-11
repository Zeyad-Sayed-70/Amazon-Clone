import { getCityAndCountry } from "@/lib/getCityAndCountry";
import { IoLocationOutline } from "react-icons/io5";

export default function Delivery({ fromMenu = false }: { fromMenu?: boolean }) {
  const userLocation = getCityAndCountry();

  return (
    <section
      className={`
      items-center gap-2 px-2 py-1 hover:shadow-hover
      ${fromMenu ? "!flex justify-center sm:!hidden" : "!hidden sm:!flex"}`}
    >
      <IoLocationOutline />
      <div>
        <span className="text-small" color={"grey_dark"}>
          Delivery to
        </span>
        <h2 className="text-medium" color={"primary_white"}>
          {userLocation}
        </h2>
      </div>
    </section>
  );
}
