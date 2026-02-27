"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

const LANDING_PAGES = ["/arizona", "/make-your-move"];

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = LANDING_PAGES.includes(pathname);

  return (
    <>
      {!isLandingPage && <Navigation />}
      <main>{children}</main>
      {!isLandingPage && <Footer />}
    </>
  );
}
