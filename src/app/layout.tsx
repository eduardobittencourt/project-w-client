import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Quicksand } from "next/font/google";

import Navbar from "@/components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

type HomeLayoutProps = { children: React.ReactNode };
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="pt-br" className={`${cinzel.variable} ${quicksand.variable}`}>
      <body className="container mx-auto px-8 font-mono">
        <Navbar />

        {children}

        <Analytics />
      </body>
    </html>
  );
}
