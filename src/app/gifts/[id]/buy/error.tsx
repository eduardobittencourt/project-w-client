"use client";

type GiftBuyErrorProps = {
  error: Error;
  reset: () => void;
};
export default function GiftBuyError({ error, reset }: GiftBuyErrorProps) {
  return (
    <div>
      <p className="mb-8 font-mono text-xs">
        <b>Ooops!</b> Tivemos um erro ao confirmar o seu presente. Por favor,
        verifique se os códigos que você informou estão corretos e caso sim, por
        favor nos mande um WhatsApp ou nos ligue para que a gente possa te
        ajudar.
      </p>
      <button
        className="mb-2 inline-block w-full bg-red px-6 py-4 text-center font-mono text-sm text-white"
        onClick={reset}
      >
        Tentar novamente
      </button>
    </div>
  );
}
