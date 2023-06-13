import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Quicksand } from "next/font/google";
import Link from "next/link";

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
      <body className="flex min-h-screen w-[100vw] justify-center overflow-x-hidden">
        <nav className="fixed top-0 z-10 w-[100vw] bg-white py-4">
          <div className="mx-auto flex max-w-4xl justify-between font-serif text-sm">
            <Link href="/">Home</Link>
            <span className="px-3 text-red">&#8226;</span>
            <Link href="/gifts">Presentes</Link>
            <span className="px-3 text-red">&#8226;</span>
            <Link href="/accommodations">Acomodações</Link>
            <span className="px-3 text-red">&#8226;</span>
            <Link href="/clothes">Vestimentas</Link>
            <span className="px-3 text-red">&#8226;</span>
            <Link href="/confirmation">Confirmar Presença</Link>
          </div>
        </nav>

        <main className="mx-10 mt-14 max-w-7xl py-10 tablet:mx-20 desktop:mx-40">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
