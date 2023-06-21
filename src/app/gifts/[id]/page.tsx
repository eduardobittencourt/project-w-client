import Image from "next/image";
import Link from "next/link";

import selectGift from "@/resources/actions/buyGift";
import { getGift } from "@/resources/getGift";
import moneyFormat from "@/utils/moneyFormat";

import AccessCodeArrayFields from "./AccessCodeArrayFields";

export const metadata = {
  title: "Presente | Letícia & Eduardo",
  description: "Detalhe de presente do casamento de Letícia e Eduardo",
};

type GiftPageProps = { params: { id: string } };
export default async function GiftPage({ params }: GiftPageProps) {
  const { id } = params;
  const gift = await getGift(id);

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-20">
      <Image
        src={gift.result.image}
        alt={gift.result.title}
        sizes="(max-width: 768px) 100vw, 50vw"
        width={650}
        height={490}
        className="h-auto w-full"
      />

      <div>
        <h1 className="mb-2 font-serif text-lg">{gift.result.title}</h1>
        <span className="mb-4 inline-block border-b border-red text-sm">
          {moneyFormat(gift.result.price)}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
          </svg>

          <Link
            href={gift.result.link}
            target="_blank"
            className="border-b border-white text-sm hover:border-red"
          >
            Link para comprar o produto
          </Link>
        </div>

        <h2 className="mb-4 font-serif text-sm">Avisar sobre a compra</h2>
        <p className="mb-2 text-xs">
          Gostou dessa opção e vai nos presentear com esse produto? Por favor,
          nos avise informando o código que enviamos no seu convite no campo
          abaixo.
        </p>
        <p className="mb-8 text-xs">
          Caso decida fazer a compra desse produto junto com outras pessoas,
          adicione o código de acesso de todos os participantes clicando no
          botão &quot;<span className="text-red">+</span>&quot; abaixo.
        </p>

        <form action={selectGift}>
          <input type="hidden" name="id" defaultValue={id} />

          <AccessCodeArrayFields />

          <button
            type="submit"
            className="mb-2 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white"
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </div>
  );
}
