import { selectGift } from "@/backend/actions";
import { getGift } from "@/backend/data";

import AccessCodeArrayFields from "./client/AccessCodeArrayFields";

type GiftBuyPageProps = { params: { id: string } };
export default async function GiftBuyPage(props: GiftBuyPageProps) {
  const { params } = props;
  const gift = await getGift(params.id);

  if (!gift.result) return "";

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

      <AccessCodeArrayFields id={gift.result._id} />

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
