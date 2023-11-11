"use client";
import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!window.location) return;

    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
