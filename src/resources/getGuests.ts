"use server";

import { Guest } from "@/types/Guest";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getGuests(
  code: string
): Promise<SanityQueryResponse<Guest>> {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set(
    "query",
    `*[_type == 'guest' && code == '${code}'][0] { guests }`
  );

  const response = await fetch(requestURL.toString(), {
    next: { tags: [`getGuests-${code}`], revalidate: 0 },
  });

  return response.json();
}
