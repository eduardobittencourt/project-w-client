import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Quicksand } from "next/font/google";

import Accommodations from "./server/Accommodations";
import Clothes from "./server/Clothes";
import Confirmation from "./server/Confirmation";
import Gifts from "./server/Gifts";
import Hero from "./server/Hero";

export const metadata = {
  title: "Letícia & Eduardo",
  description: "Site do casamento da Letícia e do Eduardo",
};

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

type RootLayoutProps = { children: React.ReactNode };
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" className={`${cinzel.variable} ${quicksand.variable}`}>
      <body>
        <main className="mx-20">
          <div className="mx-auto max-w-7xl">
            <Hero />
            {/* @ts-expect-error Server Component */}
            <Gifts />
            {/* @ts-expect-error Server Component */}
            <Accommodations />
            <Clothes />
            <Confirmation />
            {children}
            <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}
