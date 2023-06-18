import Image from "next/image";
import Link from "next/link";

import { listGifts } from "@/resources/listGifts";
import moneyFormat from "@/utils/moneyFormat";

export default async function GiftsPage() {
  const gifts = await listGifts();

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

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 tablet:grid-cols-4">
        {gifts.result.map((gift) => (
          <li
            key={gift._id}
            className="rounded-lg px-4 py-6 transition-shadow hover:shadow-lg"
          >
            <Link href={`/gifts/${gift._id}`}>
              <Image
                src={gift.image}
                alt={gift.title}
                width={650}
                height={490}
                sizes="25vw"
                className="mb-2 h-auto w-full"
              />
              <p className="font-bold">{gift.title}</p>
              <p>{moneyFormat(gift.price)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
