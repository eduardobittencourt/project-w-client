import Link from "next/link";

import Dialog from "@/components/Dialog";

export default function Thanks() {
  return (
    <Dialog href="/">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center font-serif text-lg">YAY!</h2>

        <div className="h-px w-28 bg-red" />

        <p className="max-w-sm text-center font-mono text-sm">
          Estamos ansiosos para celebrarmos esse momento especial ao seu lado.
        </p>

        <Link
          href="/"
          className="bg-red px-8 py-4 text-center font-mono text-sm text-white"
        >
          Fechar
        </Link>
      </div>
    </Dialog>
  );
}
