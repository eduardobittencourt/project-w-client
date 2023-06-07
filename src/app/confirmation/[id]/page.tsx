import { confirmGuestPresence } from "@/backend/actions";
import { getGuest } from "@/backend/data";
import Dialog from "@/components/Dialog";

type ConfirmPresencePageProps = {
  params: { id: string };
};
export default async function ConfirmPresencePage({
  params,
}: ConfirmPresencePageProps) {
  const guests = await getGuest(params.id);

  return (
    <Dialog href="/">
      <h2 className="text-center font-serif text-lg">Confirmar presença</h2>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <p className="mx-auto mb-8 max-w-sm text-center font-mono text-sm">
        Por favor selecione quais pessoas vão participar da nossa celebração
      </p>

      <form action={confirmGuestPresence} className="grid justify-center gap-2">
        <input type="hidden" name="code" defaultValue={params.id} />

        {guests.result.guests.map((guest) => (
          <div
            key={guest._key}
            className="flex items-center gap-2 font-mono text-sm"
          >
            <input
              type="checkbox"
              name="key"
              value={guest._key}
              defaultChecked={guest.confirmed}
              className='relative flex h-6 w-6 cursor-pointer appearance-none items-center justify-center border border-red checked:before:block checked:before:text-center checked:before:leading-none checked:before:text-red checked:before:content-["✓"]'
            />
            <label htmlFor="key">{guest.name}</label>
          </div>
        ))}

        <button
          type="submit"
          className="mt-8 inline-block bg-red px-8 py-4 text-center font-mono text-sm text-white"
        >
          Confirmar
        </button>
      </form>
    </Dialog>
  );
}
