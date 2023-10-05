import { IoLocationOutline } from "react-icons/io5";
import { FlexBox } from "../Styled/Navbar,";
import { Div } from "@/components/Globe/Div";
import { T4 } from "@/components/Globe/Titles";
import { C2 } from "@/components/Globe/Contents";

export default function Delivery({ fromMenu = false }: { fromMenu?: boolean }) {
  return (
    <FlexBox
      className={`${
        fromMenu ? "!flex justify-center sm:!hidden" : "!hidden sm:!flex"
      }`}
    >
      <IoLocationOutline />
      <Div>
        <T4 color={"grey_dark"}>Delivery to</T4>
        <C2 color={"primary_white"}>Egypt</C2>
      </Div>
    </FlexBox>
  );
}
