import { Inter } from "next/font/google";
import "./globals.css";

import { NavLinks } from "@/app/components/nav";
import Footer from "./components/landing/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ungurmuiža",
  description: "Unikāls 18. gadsimta koka arhitektūras ansamblis.",
  openGraph: {
    title: `Ungurmuiža`,
    description: "Unikāls 18. gadsimta koka arhitektūras ansamblis.",
    images: [
      {
        url: `${process.env.HOST}/meta/main.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="lv" className={`${inter.variable}`}>
      <body>
        <NavLinks />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
