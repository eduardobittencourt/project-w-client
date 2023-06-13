import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { updateSanityContent } from "@/services/sanity";

import { getGift } from "../loader";
import AccessCodeArrayFields from "./client/AccessCodeArrayFields";

type GiftBuyPageProps = { params: { id: string } };
export default async function GiftBuyPage(props: GiftBuyPageProps) {
  const { params } = props;
  const gift = await getGift(params.id);

  async function selectGift(data: FormData) {
    "use server";

    const codes = data.getAll("code");

    await updateSanityContent([
      {
        patch: {
          id: gift.result._id,
          set: { bought: codes },
        },
      },
    ]);

    revalidatePath("/gifts");
    redirect("/gifts");
  }

  return (
    <form action={selectGift}>
      <p className="mb-2 font-mono text-xs">
        Gostou dessa opção e vai nos presentear com esse produto? Por favor,
        informe o código que enviamos no seu convite no campo abaixo.
      </p>
      <p className="mb-8 font-mono text-xs">
        Caso você queira fazer a compra desse produto com outras pessoas,
        adicione o código de acesso de todos os participantes clicando no botão
        &quot;+&quot; abaixo.
      </p>

      <AccessCodeArrayFields />

      <button
        type="submit"
        className="mb-2 inline-block w-full bg-red px-6 py-4 text-center font-mono text-sm text-white"
      >
        Confirmar compra
      </button>

      <span className="inline-block w-full pt-4 text-center font-mono text-xs text-red">
        Prefere fazer um PIX? Clique aqui
      </span>
    </form>
  );
}
