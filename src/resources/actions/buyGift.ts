"use server";

import { revalidatePath } from "next/cache";

import { getSanityContent } from "@/providers/sanity";

export default async function selectGift(data: FormData) {
  const requestURL = new URL(`mutate/production`, process.env.SANITY_API_URL);

  const id = data.get("id");
  const codes = data.getAll("code");

  const guests = await getSanityContent(
    `*[_type == 'guest' && code in [${codes.map(
      (code) => `"${code}"`
    )}]] { guests }`
  ).then((result) => result.json());

  console.log(guests);

  // await fetch(requestURL.toString(), {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `bearer ${process.env.SANITY_TOKEN}`,
  //   },
  //   body: JSON.stringify({
  //     mutations: [
  //       {
  //         patch: {
  //           id,
  //           set: { bought: codes },
  //         },
  //       },
  //     ],
  //   }),
  // });

  // revalidatePath("/gifts");
}
