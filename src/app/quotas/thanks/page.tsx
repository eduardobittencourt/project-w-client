import Link from "next/link";

export default function QuotaThanksPage() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="mb-8 font-serif text-hg">YAY!</h2>
      <p className="mb-8 text-center text-sm">
        Escolhemos as cotas como uma maneira de nos presentear independente de
        um item específico e com certeza vamos ficar super felizes em recebermos
        a sua contribuição! Nosso mais sincero MUITO OBRIGADO por esse presente!
      </p>
      <Link
        className="w-full bg-red px-6 py-4 text-center text-sm text-white md:w-auto"
        href="/"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
