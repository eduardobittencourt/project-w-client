export default function GiftsLoading() {
  return (
    <>
      <h2 className="mb-4 font-serif text-md">Itens</h2>
      <p className="mb-2">
        Os links abaixo são sugestões de onde encontrar o produto, fiquem à
        vontade para adquiri-los onde for mais conveniente para vocês. Para mais
        detalhes, clique no item e, caso optem por algum, não esqueçam de
        marcá-lo como comprado! Vai dividir com alguém? É só clicar em “
        <span className="text-red">+</span>” ao marcar como comprado e colocar o
        código do outro convidado.
      </p>
      <p className="mb-8">
        <span className="font-bold">Endereço para entrega:</span> Rua Coronel
        Feijo, 371 - apto 202 | 90520-060 Porto Alegre/RS
      </p>

      <ul className="grid animate-pulse grid-cols-4 gap-x-8 gap-y-10">
        {Array.from({ length: 8 }).map((_item, index) => (
          <li key={index}>
            <div className="mb-2 rounded bg-grey pb-[75%]" />
            <div className="mb-2 h-4 rounded bg-grey" />
            <div className="h-4 w-1/2 rounded bg-grey" />
          </li>
        ))}
      </ul>
    </>
  );
}
