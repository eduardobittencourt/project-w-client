"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getSanityContent, updateSanityContent } from "@/providers/sanity";
import { Guest } from "@/types/Guest";

export default async function selectGift(data: FormData) {
  const id = data.get("id");
  const codes = data
    .getAll("code")
    .map((code) => code.toString().toUpperCase());

  const guests = await getSanityContent(
    `*[_type == 'guest' && code in ["${codes.join('","')}"]]`
  ).then((result) => result.json());

  const notFoundCodes = codes.filter(
    (code) =>
      guests.result.findIndex((guest: Guest) => guest.code === code) === -1
  );

  if (notFoundCodes.length)
    throw new Error(`Códigos não encontrados: ${notFoundCodes}`);

  await updateSanityContent([
    {
      patch: {
        id,
        set: { bought: codes },
      },
    },
  ]);

  revalidatePath("/gifts");
  redirect("/gifts/thanks");
}
