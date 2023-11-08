import Link from "next/link";
import { useState, useId } from "react";

import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { LiaArrowLeftSolid } from "react-icons/lia";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { drawer_list_data } from "@/constants/subNav";

export default function DrawerComp({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<any>({});
  const randId = useId();
  return (
    <Drawer
      key={randId}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="left"
      size={330}
      duration={250}
      overlayOpacity={0.7}
      className="text-black relative overflow-hidden"
    >
      <button
        onClick={() => (window.location.href = "/signin")}
        className="flex items-center gap-2 py-4 px-8 w-full font-bold text-large text-start bg-secondary_medium text-primary_white"
        type="button"
        title="sign in"
        name="sign in"
      >
        <FaCircleUser style={{ fontSize: "1.75rem" }} /> Hello, Sing In
      </button>

      <section
        style={{ height: "calc(100% - 60.8px)" }}
        className={`overflow-y-auto ${
          isJoin ? "-translate-x-[100%]" : ""
        } transition`}
      >
        {drawer_list_data.map((lst) => (
          <section key={lst.id} className="py-6 border-b-2">
            <h3
              className="text-large text-secondary_medium font-bold px-8 mb-3"
              color="secondary_medium"
            >
              {lst.title}
            </h3>
            <ul className="flex flex-col gap-1">
              {lst.list.map((cate) => (
                <li
                  className="flex items-center justify-between py-2 px-8 cursor-pointer hover:bg-grey_original"
                  key={cate.id}
                  onClick={() => {
                    setIsJoin(true);
                    setSelectedList(cate);
                  }}
                >
                  {cate.title} <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section
        className={`text-black absolute w-full top-[60.8px] ${
          isJoin
            ? "translate-x-[0] z-auto opacity-100"
            : "translate-x-[100%] -z-10 opacity-0"
        } transition`}
        style={{ visibility: isJoin ? "visible" : "hidden" }}
      >
        <li
          className="flex uppercase font-extrabold items-center py-2 px-8 cursor-pointer hover:bg-grey_original gap-3 !justify-start border-b-2"
          onClick={() => setIsJoin(false)}
        >
          <LiaArrowLeftSolid
            style={{ fontWeight: "900", fontSize: "1.6rem" }}
          />{" "}
          main menu
        </li>
        <h3
          className="text-large text-secondary_medium font-bold px-8 mb-3 mt-3"
          color="secondary_medium"
        >
          {selectedList.title}
        </h3>
        {selectedList.list?.map((cate: any) => (
          <Link key={cate.id} href={cate.link}>
            <li
              key={cate.id}
              className="capitalize text-sm flex items-center justify-between py-2 px-8 cursor-pointer hover:bg-grey_original"
            >
              {cate.title}
            </li>
          </Link>
        ))}
      </section>
    </Drawer>
  );
}
