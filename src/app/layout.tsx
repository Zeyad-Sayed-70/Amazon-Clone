"use client";
import "./globals.css";
import { Suspense, lazy } from "react";
import { Lato } from "next/font/google";
import { usePathname } from "next/navigation";
import { LocalStateProvider } from "@/context/localStorage";
import Navbar from "@/components/Navbar";
import SafeGateProvider from "@/context/safeGate";
import Spinner from "@/components/Spinner";

const SubNav = lazy(() => import("@/components/Sub-Nav"));
const SigninReminder = lazy(
  () => import("@/components/Home/Sub/SigninReminder")
);
const Footer = lazy(() => import("@/components/Footer"));

// Create a lato font object with subsets and weight
const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const hideThis = !["/signin", "/register"].includes(router);
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
        <SafeGateProvider>
          <LocalStateProvider>
            {/* Render the Navbar and SubNav components */}
            {hideThis && (
              <Suspense
                fallback={
                  <nav>
                    <div className="h-[73px] bg-secondary_darkBlack"></div>
                    <div className="h-[37px] bg-secondary_medium"></div>
                  </nav>
                }
              >
                <Navbar />
                <SubNav />
              </Suspense>
            )}
            {/* Render the children passed in as a prop */}
            {children}
            {hideThis && (
              <Suspense fallback={<Spinner />}>
                <SigninReminder />
                <Footer />
              </Suspense>
            )}
          </LocalStateProvider>
        </SafeGateProvider>
      </body>
    </html>
  );
}
