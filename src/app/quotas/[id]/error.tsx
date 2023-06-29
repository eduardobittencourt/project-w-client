"use client";

type QuotaErrorProps = { error: Error; reset: () => void };
export default function QuotaError({ reset, error }: QuotaErrorProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-8 font-serif text-lg">Ooops!</h2>
      <p className="mb-8 text-center text-sm">
        Tivemos algum problema na confirmação da compra da cota. Por favor,
        verifique se todos os códigos informados estão exatamente como no
        convite que mandamos e, em caso positivo, por favor nos envie uma
        mensagem para que possamos te ajudar a solucionar o problema.
      </p>
      <button
        className="w-full bg-red px-6 py-4 text-center text-sm text-white md:w-auto"
        onClick={reset}
      >
        Tentar novamente
      </button>
    </div>
  );
}
