"use server";

import { getSanityContent } from "@/providers/sanity";
import { Quota } from "@/types/Quota";
import { SanityQueryResponse } from "@/types/Sanity";

export async function listQuotas(): Promise<SanityQueryResponse<Quota[]>> {
  const response = await getSanityContent(`*[_type == 'quota'] {
    ...,
    "image": image.asset->url
  } | order(price asc)`);

  return response.json();
}
