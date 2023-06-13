import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Quicksand } from "next/font/google";

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

type HomeLayoutProps = { children: React.ReactNode };
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="pt-br" className={`${cinzel.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
