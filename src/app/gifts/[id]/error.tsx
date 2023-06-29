"use client";

import Image from "next/image";

import ErrorImage from "@/assets/error.png";

type GiftErrorProps = { error: Error; reset: () => void };
export default function GiftError({ reset, error }: GiftErrorProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-serif text-lg">Ooops!</h2>
      <Image src={ErrorImage} alt="Foto do Tobias com a língua para fora" />
      <p className="mb-8 text-center text-sm">
        Tivemos algum problema na confirmação da compra do presente. Por favor,
        verifique se todos os códigos informados estão exatamente como no
        convite que mandamos e, em caso positivo, por favor nos envie uma
        mensagem para que possamos te ajudar a solucionar o problema.
      </p>
      <button
        className="w-full bg-red px-6 py-4 text-center text-sm text-white md:w-auto"
        onClick={reset}
      >
        Retornar ao presente
      </button>
    </div>
  );
}
