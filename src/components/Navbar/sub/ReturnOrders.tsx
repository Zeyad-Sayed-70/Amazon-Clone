import Link from "next/link";
import { FlexBox } from "../Styled/Navbar,";
import { T4 } from "@/components/Globe/Titles";
import { C3 } from "@/components/Globe/Contents";

export default function ReturnOrders({
  fromMenu = false,
}: {
  fromMenu?: boolean;
}) {
  return (
    <FlexBox
      className={`mr-3 ${
        fromMenu ? "!flex justify-center lg:!hidden" : "!hidden lg:!flex"
      }`}
    >
      <Link href={"/retrun"}>
        <C3 color="grey_original">Return</C3>
        <T4 color="primary_white">& Orders</T4>
      </Link>
    </FlexBox>
  );
}
