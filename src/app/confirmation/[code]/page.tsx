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
        O código que te enviamos está atrelado a várias pessoas ao mesmo tempo,
        mas você pode especificar quais pessoas vão comparecer no nosso
        casamento aqui. Isso nos ajuda a organizar o evento da melhor maneira
        possível para todos.
      </p>

      <ConfirmationGuestsForm guests={guests.result} />
    </main>
  );
}
