import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hover: "0 0 0 1px #ffffff inset",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
        large: "18px",
        xlarge: "22px",
        xxlarge: "24px",
      },
      colors: {
        primary_black: "#000000",
        primary_white: "#FFFFFF",
        primary_orange: "#F19D38",
        secondary_darkBlack: "#141920",
        secondary_medium: "#252F3D",
        secondary_blue: "#007185",
        secondary_red: "#B12704",
        secondary_yellow: "#F4BF76",
        secondary_darkYellow: "#F2A742",
        secondary_orange: "#C45500",
        hover_secondary_orange: "#B65B22",
        grey_original: "#DDDDDD",
        grey_dark: "#C9CCCC",
        grey_disabled: "#565959",
      },
    },
  },
  plugins: [],
};
export default config;
