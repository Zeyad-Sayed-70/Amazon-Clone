import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Globe from "./globe";
import Navbar from "@/components/Navbar";
import SubNav from "@/components/Sub-Nav";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Amazon Clone Project Made By Zeyad Sayed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Globe>
          <Navbar />
          <SubNav />
          {children}
        </Globe>
        <h1>hello</h1>
      </body>
    </html>
  );
}
