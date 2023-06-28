"use server";

import { getSanityContent } from "@/providers/sanity";
import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getGift(
  gift: string
): Promise<SanityQueryResponse<Gift>> {
  const response =
    await getSanityContent(`*[_type == 'gift' && _id == '${gift}'][0] {
    ...,
    "image": image.asset->url
  }`);

  return response.json();
}
