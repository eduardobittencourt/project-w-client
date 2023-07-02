import { LinkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import GuestCodeForm from "@/components/GuestCodeForm";
import { buyGift } from "@/resources/mutations/buyGift";
import { getGift } from "@/resources/queries/getGift";
import moneyFormat from "@/utils/moneyFormat";

export const metadata = {
  title: "Presente | Letícia & Eduardo",
  description: "Detalhe de presente do casamento de Letícia e Eduardo",
};

type GiftPageProps = { params: { id: string } };
export default async function GiftPage({ params }: GiftPageProps) {
  const { id } = params;
  const gift = await getGift(id);

  return (
    <main className="mt-10 grid gap-10 md:grid-cols-2 md:gap-20">
      <Image
        src={gift.result.image}
        alt={gift.result.title}
        sizes="(max-width: 768px) 100vw, 50vw"
        width={650}
        height={490}
        className="h-auto w-full"
      />

      <section>
        <h1 className="mb-2 font-serif text-lg">{gift.result.title}</h1>
        <span className="mb-4 inline-block border-b border-red text-sm">
          {gift.result.bought?.length
            ? "Comprado"
            : moneyFormat(gift.result.price)}
        </span>
        <p className="mb-12 text-sm">{gift.result.description}</p>

        <h2 className="mb-4 font-serif text-sm">Detalhes do produto</h2>
        <table className="mb-12 w-full text-xs">
          <tbody>
            {gift.result.specifications?.map((specification) => (
              <tr key={specification.key}>
                <td className="font-bold">{specification.key}</td>
                <td>{specification.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-8 flex items-center gap-2">
          <LinkIcon className="h-5 w-5" />

          <Link
            href={gift.result.link}
            target="_blank"
            className="border-b border-white text-sm hover:border-red"
          >
            Link para comprar o produto
          </Link>
        </div>

        {!gift.result.bought?.length && (
          <>
            <h2 className="mb-4 font-serif text-sm">Avisar sobre a compra</h2>
            <p className="mb-2 text-xs">
              Gostou dessa opção e vai nos presentear com esse produto? Por
              favor, nos avise informando o código que enviamos no seu convite
              no campo abaixo.
            </p>
            <p className="mb-8 text-xs">
              Caso decida fazer a compra desse produto junto com outras pessoas,
              adicione o código de acesso de todos os participantes clicando no
              botão &quot;<span className="text-red">+</span>&quot; abaixo.
            </p>

            <GuestCodeForm id={id} action={buyGift} />
          </>
        )}
      </section>
    </main>
  );
}
