import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import Dialog from "@/components/Dialog";
import { getSanityContent, updateSanityContent } from "@/services/sanity";
import { Guest } from "@/types/Guest";
import { SanityQueryResponse } from "@/types/Sanity";

async function getGuest(code: string): Promise<SanityQueryResponse<Guest>> {
  const response = await getSanityContent(
    `*[_type == 'guest' && code == '${code}'][0] { guests }`
  );

  return response.json();
}

type ConfirmPresenceProps = { params: { id: string } };
export default async function ConfirmPresencePage(props: ConfirmPresenceProps) {
  const { id } = props.params;
  const guests = await getGuest(id);

  async function confirmGuestPresence(data: FormData) {
    "use server";

    const keys = data.getAll("key");

    const finalGuestsStatus = guests.result.guests.reduce(
      (acc, guest) => ({
        ...acc,
        [`guests[_key=="${guest._key}"].confirmed`]: keys.includes(guest._key),
      }),
      {}
    );

    await updateSanityContent([
      {
        patch: {
          id: guests.result._id,
          set: finalGuestsStatus,
        },
      },
    ]);

    revalidatePath(`/confirmation/${id}`);
    redirect("/confirmation/thanks");
  }

  return (
    <Dialog href="/confirmation">
      <h2 className="text-center font-serif text-lg">Confirmar presença</h2>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <p className="mx-auto mb-8 max-w-sm text-center font-mono text-sm">
        Por favor selecione quais pessoas vão participar da nossa celebração
      </p>

      <form action={confirmGuestPresence} className="grid justify-center gap-2">
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
