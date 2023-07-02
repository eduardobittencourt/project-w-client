"use client";

import Image from "next/image";
import Link from "next/link";

import ErrorImage from "@/assets/error.png";

type GiftErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GuestConfirmationError({ reset }: GiftErrorProps) {
  return (
    <main className="flex flex-col items-center">
      <h2 className="font-serif text-lg">Ooops!</h2>
      <Image src={ErrorImage} alt="Foto do Tobias com a língua para fora" />
      <p className="mb-8 max-w-xl text-center text-sm">
        Tem certeza que digitou o código correto? O evento do ano é concorrido e
        exclusivo, então confira o código que foi enviado no seu convite e tente
        novamente. Se o problema persistir entre em contato conosco que vamos te
        ajudar!
      </p>
      <Link
        className="w-full bg-red px-12 py-4 text-center text-sm text-white md:w-auto"
        href="/confirmation"
      >
        Retornar
      </Link>
    </main>
  );
}
