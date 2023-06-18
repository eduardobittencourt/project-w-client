type GiftsLayoutProps = { children: React.ReactNode };
export default function GiftsLayout({ children }: GiftsLayoutProps) {
  return (
    <>
      <h1 className="mb-4 font-serif text-lg">Lista de Presentes</h1>
      <p className="mb-8 text-sm">
        Queremos que se sintam à vontade para nos presentear de acordo com suas
        preferências e possibilidades. Preparamos uma seleção de itens que
        precisamos na nossa nova casinha. Além disso, pensando em facilitar a
        contribuição para aqueles que preferem presentear de maneira mais
        flexível, também disponibilizamos a opção de cotas de PIX. Explore sem
        restrições, certamente qualquer presente escolhido com carinho será
        muito apreciado.
      </p>

      <div className="mx-auto my-10 h-px w-24 bg-red" />

      {children}
    </>
  );
}
