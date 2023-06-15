import Link from "next/link";

export default async function GiftThanks() {
  return (
    <div>
      <p className="mb-2 font-mono text-xs font-bold">Yaaaaay!</p>
      <p className="mb-8 font-mono text-xs">
        Escolhemos todos os presentes dessa lista com muito carinho e com
        certeza vamos ficar super felizes em recebermos esse em específico!
        Nosso mais sincero MUITO OBRIGADO por esse presente!
      </p>
      <Link
        className="mb-2 inline-block w-full bg-red px-6 py-4 text-center font-mono text-sm text-white"
        href="/gifts"
      >
        Início
      </Link>
    </div>
  );
}
