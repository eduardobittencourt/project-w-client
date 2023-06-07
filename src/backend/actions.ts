"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getGuest } from "./data";

export async function updateSanityContent(body: object[]) {
  const requestURL = new URL(`mutate/production`, process.env.SANITY_API_URL);

  await fetch(requestURL.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.SANITY_TOKEN}`,
    },
    body: JSON.stringify({ mutations: body }),
  });
}

export async function selectGift(data: FormData) {
  const id = data.get("id");
  const codes = data.getAll("code");

  await updateSanityContent([
    {
      patch: {
        id,
        set: { bought: codes },
      },
    },
  ]);

  revalidatePath("/");
  redirect("/");
}

export async function confirmPresence(data: FormData) {
  const code = data.get("code");

  redirect(`/confirmation/${code}`);
}

export async function confirmGuestPresence(data: FormData) {
  const code = data.get("code");
  const keys = data.getAll("key");
  const guests = await getGuest(code as string);

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

  revalidatePath(`/confirmation/${code}`);
  redirect("/thanks");
}
