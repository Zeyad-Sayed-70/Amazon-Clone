import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import SubNav from "@/components/Sub-Nav";

// Create a lato font object with subsets and weight
const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Amazon Clone</title>
        <meta
          name="description"
          content="Amazon Clone Project Made By Zeyad Sayed."
        />
      </head>
      <body className={lato.className}>
        {/* Render the Navbar and SubNav components */}
        <Navbar />
        <SubNav />
        {/* Render the children passed in as a prop */}
        {children}
      </body>
    </html>
  );
}
