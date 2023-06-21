"use server";

import { getSanityContent } from "@/providers/sanity";
import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";

export async function listGifts(): Promise<SanityQueryResponse<Gift[]>> {
  const response = await getSanityContent(`*[_type == 'gift'] {
   ...,
    "image": image.asset->url
  } | order(category asc)`);

  return response.json();
}
