import Image from "next/image";
import Link from "next/link";

import Pietro from "@/assets/pietro.png";
import { listGifts } from "@/resources/listGifts";
import moneyFormat from "@/utils/moneyFormat";

export default async function GiftsPage() {
  const gifts = await listGifts();

  return (
    <>
      <div className="mb-10 grid min-h-[calc(100vh-80px)] items-center lg:mb-0 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 font-serif text-lg">Lista de Presentes</h1>
          <p className="mb-8 text-sm">
            Queremos que se sintam à vontade para nos presentear de acordo com
            suas preferências e possibilidades. Preparamos uma seleção de itens
            que precisamos na nossa nova casinha. Além disso, pensando em
            facilitar a contribuição para aqueles que preferem presentear de
            maneira mais flexível, também disponibilizamos a opção de cotas de
            PIX. Explore sem restrições, certamente qualquer presente escolhido
            com carinho será muito apreciado.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="mx-auto hidden h-6 w-6 animate-bounce stroke-red lg:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        <Image
          src={Pietro}
          alt="Foto do Pietro"
          className="justify-self-center"
        />
      </div>

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

      <ul className="mb-20 grid gap-4 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4">
        {gifts.result.map((gift) => (
          <li
            key={gift._id}
            className="rounded-lg px-4 py-6 transition-shadow hover:shadow-lg"
          >
            <Link href={`/gift/${gift._id}`}>
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
