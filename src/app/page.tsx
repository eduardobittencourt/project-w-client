import HeartIcon from "@/assets/HeartIcon";

export const metadata = {
  title: "Início | Letícia & Eduardo",
  description: "Site do casamento da Letícia e do Eduardo",
};

export default function RootPage() {
  return (
    <main className="grid min-h-[calc(100vh-144px)] content-center gap-40">
      <h1 className="flex flex-col items-center gap-4 text-center font-serif text-lg md:text-hg">
        <span>Eduardo</span>
        <HeartIcon />
        <span>Letícia</span>
      </h1>

      <div>
        <h2 className="text-center font-mono text-xs md:text-sm">
          23 de Dezembro de 2023
          <span className="px-3 text-red">&#8226;</span>
          18h às 22h
        </h2>

        <div className="mx-auto my-5 h-px w-10 bg-red" />

        <h2 className="text-center font-mono text-xs md:text-sm">
          Lá nos Fundos | Rua Dinarte Ribeiro, 155
        </h2>
      </div>
    </main>
  );
}
