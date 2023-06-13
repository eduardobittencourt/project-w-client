import Link from "next/link";

import { getGift } from "./loader";

type SelectedGiftPageProps = { params: { id: string } };
export default async function SelectedGiftPage(props: SelectedGiftPageProps) {
  const { params } = props;
  const gift = await getGift(params.id);

  return (
    <div>
      <p className="mb-8 font-mono text-sm">{gift.result.description}</p>

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

      <Link
        href={`/gifts/${gift.result._id}/buy`}
        className="mb-2 inline-block w-full bg-red px-6 py-4 text-center font-mono text-sm text-white"
      >
        Vou dar esse
      </Link>

      <Link
        href={gift.result.link}
        target="_blank"
        className="inline-block w-full pt-4 text-center font-mono text-xs text-red"
      >
        Link para o produto
      </Link>
    </div>
  );
}
