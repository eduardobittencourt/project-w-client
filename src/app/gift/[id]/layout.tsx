import Image from "next/image";

import { getGift } from "@/backend/data";
import Dialog from "@/components/Dialog";
import moneyFormat from "@/utils/formatMoney";

type SelectedGiftLayoutProps = {
  params: { id: string };
  children: React.ReactNode;
};
export default async function SelectedGiftLayout(
  props: SelectedGiftLayoutProps
) {
  const { params, children } = props;
  const gift = await getGift(params.id);

  if (!gift.result) return "";

  return (
    <Dialog href="/">
      <div className="grid items-center gap-8 tablet:grid-cols-5">
        <div className="relative h-0 pb-[75.5%] tablet:col-span-2">
          <Image
            src={gift.result.image}
            alt={gift.result.title}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>

        <div className="tablet:col-span-3">
          <h3 className="mb-2 text-center font-serif text-md tablet:text-left">
            {gift.result.title}
          </h3>
          <span className="mb-8 block text-center font-mono text-sm text-red tablet:text-left">
            {gift.result.bought?.length
              ? "Comprado"
              : moneyFormat(gift.result.price)}
          </span>

          {children}
        </div>
      </div>
    </Dialog>
  );
}
