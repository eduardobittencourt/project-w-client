import Image from "next/image";

import GuestCodeForm from "@/components/GuestCodeForm";
import { buyQuota } from "@/resources/mutations/buyQuota";
import { getQuota } from "@/resources/queries/getQuota";
import moneyFormat from "@/utils/moneyFormat";

export const metadata = {
  title: "Presente | Letícia & Eduardo",
  description: "Detalhe de presente do casamento de Letícia e Eduardo",
};

type QuotaPageProps = { params: { id: string } };
export default async function QuotaPage({ params }: QuotaPageProps) {
  const { id } = params;
  const quota = await getQuota(id);

  return (
    <main className="mt-10 grid gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-5">
      <Image
        src={quota.result.image}
        alt={quota.result.title}
        sizes="(max-width: 768px) 100vw, 50vw"
        width={650}
        height={490}
        className="h-auto w-full lg:col-span-2"
      />

      <section className="lg:col-span-3">
        <h1 className="mb-2 font-serif text-lg">{quota.result.title}</h1>
        {quota.result.price ? (
          <span className="mb-4 inline-block border-b border-red text-sm">
            {moneyFormat(quota.result.price)}
          </span>
        ) : (
          ""
        )}
        <p className="mb-12 text-sm">{quota.result.description}</p>

        <h2 className="mb-4 font-serif text-sm">Avisar sobre a cota</h2>
        <p className="mb-2 text-xs">
          Gostou dessa opção e vai nos presentear com esse valor? Por favor, nos
          avise informando o código que enviamos no seu convite no campo abaixo.
        </p>

        <GuestCodeForm id={id} action={buyQuota} />
      </section>
    </main>
  );
}
