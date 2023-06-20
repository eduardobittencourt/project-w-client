import Image from "next/image";

import selectGift from "@/resources/actions/buyGift";
import { getGift } from "@/resources/getGift";
import moneyFormat from "@/utils/moneyFormat";

import AccessCodeArrayFields from "./AccessCodeArrayFields";

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

        <h2 className="mb-4 font-serif text-sm">Avisar sobre a compra</h2>
        <p className="mb-2 text-xs">
          Gostou dessa opção e vai nos presentear com esse produto? Por favor,
          nos avise informando o código que enviamos no seu convite no campo
          abaixo.
        </p>
        <p className="mb-8 text-xs">
          Caso decida fazer a compra desse produto junto com outras pessoas,
          adicione o código de acesso de todos os participantes clicando no
          botão &quot;+&quot; abaixo. (e deixa esse + vermelho como na tela
          anterior)
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

          <span className="inline-block w-full pt-4 text-center text-xs text-red">
            Prefere fazer um PIX? Clique aqui
          </span>
        </form>
      </div>
    </div>
  );
}
