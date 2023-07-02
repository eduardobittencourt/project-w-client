import ConfirmationGuestsForm from "@/components/ConfirmationGuestsForm";
import { getGuests } from "@/resources/queries/getGuests";

type GuestConfirmationPageProps = { params: { code: string } };
export default async function GuestConfirmationPage({
  params,
}: GuestConfirmationPageProps) {
  const { code } = params;
  const guests = await getGuests(code);

  return (
    <main className="mt-10">
      <h2 className="mb-4 text-center font-serif text-md">
        Confirmar presença
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center font-mono">
        Antes de confirmar, por favor selecione abaixo quem estará presente no
        nosso casamento. Precisamos dessa informação para que tudo seja
        planejado e personalizado com muito carinho.
      </p>

      <ConfirmationGuestsForm guests={guests.result} />
    </main>
  );
}
