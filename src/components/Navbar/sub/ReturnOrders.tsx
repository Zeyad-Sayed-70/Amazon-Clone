import Link from "next/link";

export default function ReturnOrders({
  fromMenu = false,
}: {
  fromMenu?: boolean;
}) {
  return (
    <section
      className={`
      items-center gap-2 px-2 py-1 hover:shadow-hover mr-3 
      ${fromMenu ? "!flex justify-center lg:!hidden" : "!hidden lg:!flex"}`}
    >
      <Link href={"/retrun"}>
        <span className="text-small" color="grey_original">
          Return
        </span>
        <h2 className="text-medium font-bold" color="primary_white">
          & Orders
        </h2>
      </Link>
    </section>
  );
}
