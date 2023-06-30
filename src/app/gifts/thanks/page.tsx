import Link from "next/link";

export default function GiftThanksPage() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="mb-8 font-serif text-hg">YAY!</h2>
      <p className="mb-8 max-w-xl text-center text-sm">
        Agradecemos por esse presente incrível! Com ele, nossa casinha vai ficar
        ainda mais especial. Cada vez que olharmos para esse presente,
        lembraremos de vocês.
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
