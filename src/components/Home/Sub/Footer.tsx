import LangSelect from "@/components/Navbar/sub/LangSelect";
import Logo from "@/components/Navbar/sub/Logo";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <article className="bg-secondary_medium">
      <section className="w-full py-4 text-center bg-slate-600 hover:bg-slate-500 text-primary_white text-small font-bold cursor-pointer">
        Back to top
      </section>
      <section className="py-24 px-2 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Get to Know Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((list) => (
              <li className="text-medium text-grey_dark hover:underline font-bold w-fit">
                <Link href={"#"}>Link {list}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Get to Know Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((list) => (
              <li className="text-medium text-grey_dark hover:underline font-bold w-fit">
                <Link href={"#"}>Link {list}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Get to Know Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((list) => (
              <li className="text-medium text-grey_dark hover:underline font-bold w-fit">
                <Link href={"#"}>Link {list}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Get to Know Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((list) => (
              <li className="text-medium text-grey_dark hover:underline font-bold w-fit">
                <Link href={"#"}>Link {list}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-8 flex items-center gap-12 justify-center border-t-2 border-grey_disabled">
        <Logo />
        <div>
          <LangSelect />
        </div>
      </section>
      <section className="pt-12 pb-6 bg-secondary_darkBlack">
        <div className="flex justify-center md:justify-start flex-wrap gap-8 mx-auto px-12 max-w-[800px]">
          {[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            ,
            11,
            22,
            33,
            44,
            55,
            66,
            77,
            88,
            99,
          ].map((e) => (
            <Link key={e} href={"#"} className="text-small">
              <h6 className="flex flex-col text-primary_white hover:underline">
                Amazon Music {e}
                <span className="text-grey_disabled">
                  Stream millions of songs
                </span>
              </h6>
            </Link>
          ))}
        </div>
        <div className="pt-20">
          <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12 mb-6">
            <Link
              className="text-small text-primary_white hover:underline"
              href={"#"}
            >
              Conditions of Use
            </Link>
            <Link
              className="text-small text-primary_white hover:underline"
              href={"#"}
            >
              Privacy Notice
            </Link>
            <Link
              className="text-small text-primary_white hover:underline"
              href={"#"}
            >
              Your Ads Privacy Choices
            </Link>
          </div>
          <div className="text-primary_white text-small text-center">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </section>
    </article>
  );
}
