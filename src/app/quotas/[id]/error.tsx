"use client";

import Image from "next/image";

import ErrorImage from "@/assets/error.png";

type QuotaErrorProps = {
  error: Error;
  reset: () => void;
};

export default function QuotaError({ reset }: QuotaErrorProps) {
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
      <button
        className="w-full bg-red px-12 py-4 text-center text-sm text-white md:w-auto"
        onClick={reset}
      >
        Retornar
      </button>
    </main>
  );
}
