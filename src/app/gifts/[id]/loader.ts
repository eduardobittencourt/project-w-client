"use server";

import { getSanityContent } from "@/services/sanity";
import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getGift(
  gift: string
): Promise<SanityQueryResponse<Gift>> {
  const response = await getSanityContent(
    `*[_type == 'gift' && _id == '${gift}'][0] {
      _id,
      title,
      description,
      specifications,
      price,
      link,
      bought,
      category,
      "image": image.asset->url
    }`
  );

  return response.json();
}
