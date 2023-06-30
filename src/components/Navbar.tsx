import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import HeartIcon from "@/assets/HeartIcon";

export default function Navbar() {
  return (
    <header className="mx-auto flex items-center justify-between py-6">
      <Link href="/" aria-label="Homepage">
        <HeartIcon />
      </Link>

      <input
        type="checkbox"
        hidden
        name="menu"
        id="menu"
        className="peer"
        defaultChecked={false}
      />

      <nav className="fixed right-0 top-0 z-10 grid h-screen translate-x-full content-start gap-4  bg-white p-8 font-serif transition-transform peer-checked:translate-x-0 md:static md:h-auto md:translate-x-0 md:grid-flow-col md:p-0">
        <label
          htmlFor="menu"
          className="mb-4 cursor-pointer justify-self-end p-4 md:hidden"
        >
          <XMarkIcon className="h-6 w-6" />
        </label>

        <Link className="transition-colors hover:text-red" href="/">
          Início
        </Link>
        <Link className="transition-colors hover:text-red" href="/gifts">
          Presentes
        </Link>
        <Link
          className="transition-colors hover:text-red"
          href="/accommodations"
        >
          Acomodações
        </Link>
        <Link className="transition-colors hover:text-red" href="/confirmation">
          Confirmar Presença
        </Link>
      </nav>

      <label htmlFor="menu" className="cursor-pointer p-1 md:hidden">
        <Bars3Icon className="h-6 w-6" />
      </label>

      <label
        htmlFor="menu"
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-black opacity-0 transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-30 md:hidden"
      />
    </header>
  );
}
