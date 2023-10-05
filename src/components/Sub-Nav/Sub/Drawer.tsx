import Link from "next/link";
import { useState, useId } from "react";

import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { LiaArrowLeftSolid } from "react-icons/lia";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { DrawerList, DrawerLoginButton, DrawerUl } from "../Styled/SubNav";
import { Div } from "@/components/Globe/Div";
import { T3 } from "@/components/Globe/Titles";

import { drawer_list_data } from "@/constants/sub_nav";

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
      <DrawerLoginButton type="button" title="sign in">
        <FaCircleUser /> Hello, Sing In
      </DrawerLoginButton>

      <Div
        style={{ height: "calc(100% - 60.8px)" }}
        className={`overflow-y-auto ${
          isJoin ? "-translate-x-[100%]" : ""
        } transition`}
      >
        {drawer_list_data.map((lst) => (
          <Div key={lst.id} className="py-6 border-b-2">
            <T3 className="px-8 mb-3" color="secondary_medium">
              {lst.title}
            </T3>
            <DrawerUl>
              {lst.list.map((cate) => (
                <DrawerList
                  key={cate.id}
                  onClick={() => {
                    setIsJoin(true);
                    setSelectedList(cate);
                  }}
                >
                  {cate.title} <IoIosArrowForward />
                </DrawerList>
              ))}
            </DrawerUl>
          </Div>
        ))}
      </Div>

      <Div
        className={`text-black absolute w-full top-[60.8px] ${
          isJoin
            ? "translate-x-[0] z-auto opacity-100"
            : "translate-x-[100%] -z-10 opacity-0"
        } transition`}
        style={{ visibility: isJoin ? "visible" : "hidden" }}
      >
        <DrawerList
          className="uppercase font-extrabold flex gap-3 !justify-start border-b-2"
          onClick={() => setIsJoin(false)}
        >
          <LiaArrowLeftSolid
            style={{ fontWeight: "900", fontSize: "1.6rem" }}
          />{" "}
          main menu
        </DrawerList>
        <T3 className="px-8 mb-3 mt-3" color="secondary_medium">
          {selectedList.title}
        </T3>
        {selectedList.list?.map((cate: any) => (
          <Link key={cate.id} href={cate.link}>
            <DrawerList key={cate.id} className="capitalize text-sm">
              {cate.title}
            </DrawerList>
          </Link>
        ))}
      </Div>
    </Drawer>
  );
}
