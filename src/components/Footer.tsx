import LangSelect from "@/components/Navbar/sub/LangSelect";
import Logo from "@/components/Navbar/sub/Logo";
import {
  amazon_hubs,
  amazon_payment_products,
  get_to_know_us,
  let_us_help_you,
  make_money_with_us,
} from "@/constants/footer";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <article className="bg-secondary_medium">
      <section className="w-full py-4 text-center bg-slate-600 hover:bg-slate-500 text-primary_white text-small font-bold cursor-pointer">
        Back to top
      </section>
      <section className="py-24 px-2 flex flex-col md:flex-row justify-center gap-12 lg:gap-24">
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Get to Know Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {get_to_know_us.map((list, ind) => (
              <li
                key={ind}
                className="text-medium text-grey_dark hover:underline font-bold w-fit"
              >
                <Link href={list.to}>Link {list.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Make Money with Us
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {make_money_with_us.map((list, ind) => (
              <li
                key={ind}
                className="text-medium text-grey_dark hover:underline font-bold w-fit"
              >
                <Link href={list.to}>Link {list.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Amazon Payment Products
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {amazon_payment_products.map((list, ind) => (
              <li
                key={ind}
                className="text-medium text-grey_dark hover:underline font-bold w-fit"
              >
                <Link href={list.to}>Link {list.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-large text-primary_white font-bold">
            Let Us Help You
          </h1>
          <ul className="flex flex-col gap-3 mt-2">
            {let_us_help_you.map((list, ind) => (
              <li
                key={ind}
                className="text-medium text-grey_dark hover:underline font-bold w-fit"
              >
                <Link href={list.to}>Link {list.title}</Link>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-start gap-8 mx-auto px-12 max-w-[800px]">
          {amazon_hubs.map((e, ind) => (
            <Link key={ind} href={"#"} className="text-small">
              <h6 className="flex flex-col text-primary_white hover:underline">
                {e.title}
                <span className="text-grey_disabled">{e.description}</span>
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
