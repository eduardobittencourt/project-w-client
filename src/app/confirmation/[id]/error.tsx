"use client";

import Link from "next/link";

import Dialog from "@/components/Dialog";

export default function ConfirmPresencePage() {
  return (
    <Dialog href="/">
      <div className="grid justify-center gap-2">
        <h2 className="text-center font-serif text-lg">Oops!</h2>

        <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

        <p className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm">
          Tivemos um erro ao confirmar a sua presença. Por favor, verifique se o
          código que você informou está correto e caso sim, por favor nos mande
          um WhatsApp ou nos ligue para que a gente possa te ajudar.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block justify-self-center bg-red px-10 py-4 text-center font-mono text-sm text-white"
        >
          Voltar
        </Link>
      </div>
    </Dialog>
  );
}
