import { useContext } from "react";
import Link from "next/link";
import { SafeGateContext } from "@/context/safeGate";

export default function Login({ fromMenu = false }: { fromMenu?: boolean }) {
  const { isLoggined, userData } = useContext(SafeGateContext);
  return (
    <section
      className={`
      items-center gap-2 px-2 py-1 hover:shadow-hover mx-3 ${
        fromMenu ? "!flex justify-center lg:!hidden" : "!hidden lg:!flex"
      }`}
    >
      {isLoggined && userData ? (
        <div>
          <span className="text-medium" color="grey_original">
            Hello, {userData.username}
          </span>
          <h2
            className="text-small cursor-pointer text-grey_dark w-fit hover:text-grey_original"
            onClick={() => {
              localStorage.removeItem("token");
              location.reload();
            }}
          >
            Logout
          </h2>
        </div>
      ) : (
        <Link href={"/signin"}>
          <span className="text-small" color="grey_original">
            Hello, Sign in
          </span>
          <h2 className="text-medium" color="primary_white">
            Join to us now
          </h2>
        </Link>
      )}
    </section>
  );
}
