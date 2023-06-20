"use server";

import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getGift(
  gift: string
): Promise<SanityQueryResponse<Gift>> {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set(
    "query",
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

  const response = await fetch(requestURL.toString(), {
    next: { tags: [`getGift-${gift}`], revalidate: 0 },
  });

  return response.json();
}
