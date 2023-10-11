import React from "react";

declare let window: any;

export default function useWindowWidth() {
  try {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      if (!window.location) return;
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  } catch (e) {
    return null;
  }
}
