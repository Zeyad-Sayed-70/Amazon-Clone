import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <section className="items-center gap-2 px-2 py-1 hover:shadow-hover">
      <Link href={"/"}>
        <Image
          className="w-[100px] object-contain"
          width={70}
          height={35}
          quality={50}
          src="/logo.png"
          alt="amazon_logo"
          aria-label="amazon_logo"
        />
      </Link>
    </section>
  );
}
