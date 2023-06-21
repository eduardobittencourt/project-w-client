import Image from "next/image";
import Link from "next/link";

import { getQuota } from "@/resources/getQuota";
import moneyFormat from "@/utils/moneyFormat";

export const metadata = {
  title: "Presente | Letícia & Eduardo",
  description: "Detalhe de presente do casamento de Letícia e Eduardo",
};

type QuotaPageProps = { params: { id: string } };
export default async function QuotaPage({ params }: QuotaPageProps) {
  const { id } = params;
  const quota = await getQuota(id);

  console.log(quota);

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-20">
      <Image
        src={quota.result.image}
        alt={quota.result.title}
        sizes="(max-width: 768px) 100vw, 50vw"
        width={650}
        height={490}
        className="h-auto w-full"
      />

      <div>
        <h1 className="mb-2 font-serif text-lg">{quota.result.title}</h1>
        {quota.result.price ? (
          <span className="mb-4 inline-block border-b border-red text-sm">
            {moneyFormat(quota.result.price)}
          </span>
        ) : (
          ""
        )}
        <p className="mb-12 text-sm">{quota.result.description}</p>

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
      </div>
    </div>
  );
}
