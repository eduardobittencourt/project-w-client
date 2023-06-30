import Image from "next/image";
import Link from "next/link";

import Pietro from "@/assets/pietro.png";
import SectionHeader from "@/components/SectionHeader";
import { listGifts } from "@/resources/queries/listGifts";
import { listQuotas } from "@/resources/queries/listQuotas";
import moneyFormat from "@/utils/moneyFormat";

export const metadata = {
  title: "Presentes | Letícia & Eduardo",
  description: "Lista de presentes do casamento de Letícia e Eduardo",
};

export default async function GiftsPage() {
  const [gifts, quotas] = await Promise.all([listGifts(), listQuotas()]);

  return (
    <main>
      <SectionHeader
        title="Lista de Presentes"
        description="Queremos que se sintam à vontade para nos presentear de acordo com suas preferências e possibilidades. Preparamos uma seleção de itens que precisamos na nossa nova casinha. E, para facilitar a contribuição daqueles que preferem presentear de maneira mais flexível, também disponibilizamos a opção de cotas de PIX. Explore sem restrições, certamente qualquer presente escolhido com carinho será muito apreciado."
        image={{
          src: Pietro,
          alt: "Foto do Pietro",
        }}
      />

      <h2 className="mb-4 font-serif text-md">Produtos</h2>
      <p className="mb-2">
        Os links abaixo são sugestões de onde encontrar o produto, fiquem à
        vontade para adquiri-los onde for mais conveniente para vocês. Para mais
        detalhes, clique no item e, caso optem por algum, não esqueçam de
        marcá-lo como comprado! Vai dividir com alguém? É só clicar em &quot;
        <span className="text-red">+</span>&quot; ao marcar como comprado e
        colocar o código do outro convidado.
      </p>
      <p className="mb-8">
        <span className="font-bold">Endereço para entrega:</span> Rua Coronel
        Feijo, 371 - apto 202 | 90520-060 Porto Alegre/RS
      </p>

      <ul className="mb-20 grid gap-4 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-4">
        {gifts.result.map((gift) => (
          <li
            key={gift._id}
            className={`rounded-lg px-4 py-6 transition-shadow hover:shadow-lg ${
              gift.bought?.length && "pointer-events-none opacity-60"
            }`}
          >
            <Link href={`/gifts/${gift._id}`}>
              <Image
                src={gift.image}
                alt={gift.title}
                width={650}
                height={490}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 100vw"
                className="mb-2 h-auto w-full"
              />
              <p className="font-bold">{gift.title}</p>
              <p>
                {gift.bought?.length ? "Comprado" : moneyFormat(gift.price)}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 font-serif text-md">Cotas</h2>
      <p className="mb-2">
        Ficou em dúvida na hora de escolher algo da lista, ou prefere presentear
        com um valor livre? Separamos algumas cotas de PIX, é só escolher qual
        atende melhor o seu perfil. Agradecemos desde já por todo o carinho e
        apoio.
      </p>
      <p className="mb-8">
        <span className="font-bold">Email PIX:</span>{" "}
        manzolibittencourt@gmail.com
      </p>

      <ul className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotas.result.map((quota) => (
          <li
            key={quota._id}
            className="rounded-lg px-4 py-6 transition-shadow hover:shadow-lg"
          >
            <Link href={`/quotas/${quota._id}`}>
              <Image
                src={quota.image}
                alt={quota.title}
                width={650}
                height={490}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 100vw"
                className="mb-2 h-auto w-full"
              />
              <p className="font-bold">{quota.title}</p>
              <p>{quota.price ? moneyFormat(quota.price) : "--"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
