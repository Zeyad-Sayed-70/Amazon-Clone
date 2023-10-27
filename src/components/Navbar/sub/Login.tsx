import Link from "next/link";

export default function Login({ fromMenu = false }: { fromMenu?: boolean }) {
  return (
    <section
      className={`
      items-center gap-2 px-2 py-1 hover:shadow-hover mx-3 ${
        fromMenu ? "!flex justify-center lg:!hidden" : "!hidden lg:!flex"
      }`}
    >
      <Link href={"/signin"}>
        <span className="text-small" color="grey_original">
          Hello, Sign in
        </span>
        <h2 className="text-medium" color="primary_white">
          Join to us now
        </h2>
      </Link>
    </section>
  );
}
