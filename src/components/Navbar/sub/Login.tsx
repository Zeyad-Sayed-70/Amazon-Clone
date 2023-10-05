import Link from "next/link";
import { FlexBox } from "../Styled/Navbar,";
import { T4 } from "@/components/Globe/Titles";
import { C3 } from "@/components/Globe/Contents";

export default function Login({ fromMenu = false }: { fromMenu?: boolean }) {
  return (
    <FlexBox
      className={`mx-3 ${
        fromMenu ? "!flex justify-center lg:!hidden" : "!hidden lg:!flex"
      }`}
    >
      <Link href={"/login"}>
        <T4 color="grey_original">Hello, Sign in</T4>
        <C3 color="primary_white">Join to us now</C3>
      </Link>
    </FlexBox>
  );
}
