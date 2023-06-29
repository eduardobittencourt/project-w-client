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

        <GuestCodeForm id={id} action={buyQuota} />
      </div>
    </div>
  );
}
