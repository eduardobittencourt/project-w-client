import Image from "next/image";

import { getGift } from "@/resources/getGift";
import moneyFormat from "@/utils/moneyFormat";

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
        <h1 className="font-serif text-lg">{gift.result.title}</h1>
        <span className="mb-8 inline-block border-b border-red font-mono text-sm">
          {moneyFormat(gift.result.price)}
        </span>
        <p className="mb-8 text-sm">{gift.result.description}</p>
        <table className="mb-8 w-full font-mono text-xs">
          <tbody>
            {gift.result.specifications?.map((specification) => (
              <tr key={specification.key}>
                <td className="font-bold">{specification.key}</td>
                <td>{specification.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
