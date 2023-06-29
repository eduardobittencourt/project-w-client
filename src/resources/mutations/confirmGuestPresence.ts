"use server";

import { updateSanityContent } from "@/providers/sanity";

export async function confirmGuestPresence(data: FormData) {
  const id = data.get("id");
  const guests = data.getAll("guest");
  const confirmed = data.getAll("confirmed");

  const guestsObject = guests.reduce(
    (acc, guest) => ({
      ...acc,
      [`guests[_key=="${guest}"].confirmed`]: confirmed.includes(guest),
    }),
    {}
  );

  await updateSanityContent([
    {
      patch: {
        id,
        set: guestsObject,
      },
    },
  ]);
}
