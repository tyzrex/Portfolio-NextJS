import "./globals.scss";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./hoc/SmoothScroll";

const outfit = Outfit({
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Sulav Baral's Portfolio",
  description:
    " Portfolio of Sulav Baral, a frontend developer based in Nepal who loves to build beautiful and performant websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body className={outfit.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
