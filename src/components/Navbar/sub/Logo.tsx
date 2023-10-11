import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <section className="items-center gap-2 px-2 py-1 hover:shadow-hover">
      <Link href={"/"}>
        <Image
          className="object-contain w-[100px] max-h-[120px]"
          width={100}
          height={100}
          src="/logo.png"
          alt="amazon_logo"
          aria-label="amazon_logo"
        />
      </Link>
    </section>
  );
}
