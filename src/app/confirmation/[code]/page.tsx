import { confirmGuestPresence } from "@/resources/mutations/confirmGuestPresence";
import { getGuests } from "@/resources/queries/getGuests";

type GuestConfirmationPageProps = { params: { code: string } };
export default async function GuestConfirmationPage({
  params,
}: GuestConfirmationPageProps) {
  const { code } = params;
  const guests = await getGuests(code);

  return (
    <main className="mt-10">
      <h2 className="mb-2 text-center font-serif text-md">
        Selecione quem vai participar do evento
      </h2>
      <p className="mb-8 text-center font-mono">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        ante sed nunc fermentum efficitur quis nec enim. Suspendisse tortor
        tortor, rhoncus fermentum sem sit amet, porttitor volutpat tellus. Duis
        vel pulvinar libero, vitae euismod felis.
      </p>

      <form action={confirmGuestPresence} className="grid justify-center gap-2">
        <input type="hidden" name="id" defaultValue={guests.result._id} />

        {guests.result.guests.map((guest) => (
          <div
            key={guest._key}
            className="flex items-center gap-2 font-mono text-sm"
          >
            <input type="hidden" name="guest" defaultValue={guest._key} />
            <input
              type="checkbox"
              name="confirmed"
              value={guest._key}
              defaultChecked={guest.confirmed}
              className='relative flex h-6 w-6 cursor-pointer appearance-none items-center justify-center border border-red checked:before:block checked:before:text-center checked:before:leading-none checked:before:text-red checked:before:content-["✓"]'
            />
            <label htmlFor="key">{guest.name}</label>
          </div>
        ))}

        <button
          className="mt-8 w-full bg-red px-12 py-4 text-center text-sm text-white md:w-auto"
          type="submit"
        >
          Confirmar
        </button>
      </form>
    </main>
  );
}
