"use server";

import { getSanityContent } from "@/providers/sanity";
import { Guest } from "@/types/Guest";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getGuests(
  code: string
): Promise<SanityQueryResponse<Guest>> {
  const response = await getSanityContent(
    `*[_type == 'guest' && code == '${code.toUpperCase()}'][0]`
  );

  return response.json();
}
