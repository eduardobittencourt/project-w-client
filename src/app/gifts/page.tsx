import Image from "next/image";
import Link from "next/link";

import { getSanityContent } from "@/services/sanity";
import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";
import moneyFormat from "@/utils/formatMoney";

async function getGifts(): Promise<SanityQueryResponse<Gift[]>> {
  const response = await getSanityContent(
    `*[_type == 'gift'] {
      _id,
      title,
      price,
      bought,
      category,
      "image": image.asset->url
    } | order(category asc)`
  );

  return response.json();
}

export default async function GiftsPage() {
  const gifts = await getGifts();

  return (
    <main className="my-32">
      <h2 className="mb-2 text-center font-serif text-lg">
        Lista de presentes
      </h2>
      <p className="mb-7 text-center font-mono text-sm">
        Sugestões de itens que realmente precisamos. Fiquem à vontade para
        adquiri-los onde for mais conveniente para vocês. Caso prefiram, também
        há a opção de PIX. Ao optar por algum item da lista, não esqueça de
        marca-lo como comprado!
        <br />
        Endereço para entrega: Rua Coronel Feijo, 371 - apto 202 | 90520-060
        Porto Alegre/RS
      </p>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <ul className="my-10 grid gap-x-20 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-3">
        {gifts.result.map((gift) => (
          <li key={gift._id}>
            <Link
              href={`/gifts/${gift._id}`}
              className="hover:border-gray-100 flex cursor-pointer flex-col items-center gap-4 rounded-lg border border-white px-4 py-6 transition hover:shadow-lg"
            >
              <div className="relative h-0 w-full pb-[75.5%]">
                <Image
                  className="object-contain"
                  src={gift.image}
                  alt={gift.title}
                  fill
                  sizes="(max-width: 960px) 100vw, (max-width: 1248px) 50vw, 33vw"
                />
              </div>
              <h3 className="mx-4 text-center font-serif text-sm">
                {gift.title}
              </h3>
              <span className="text-center font-mono text-sm text-red">
                {gift.bought?.length ? "Comprado" : moneyFormat(gift.price)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
