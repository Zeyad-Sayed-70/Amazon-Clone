import React, { useId } from "react";
import Drawer from "react-modern-drawer";
import SideBar from "./SideBar";
import "react-modern-drawer/dist/index.css";
export default function SideBarDrawer({
  products,
  isOpen,
  setIsOpen,
}: {
  products: Product[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const randId = useId();
  return (
    <Drawer
      key={randId}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="left"
      duration={250}
      overlayOpacity={0.7}
      className="text-black relative overflow-hidden"
    >
      <SideBar />
    </Drawer>
  );
}
