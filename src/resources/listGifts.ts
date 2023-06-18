"use server";

import { Gift } from "@/types/Gift";
import { SanityQueryResponse } from "@/types/Sanity";

export async function listGifts(): Promise<SanityQueryResponse<Gift[]>> {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set(
    "query",
    `*[_type == 'gift'] {
    _id,
    title,
    price,
    bought,
    category,
    "image": image.asset->url
  } | order(category asc)`
  );

  const response = await fetch(requestURL.toString(), {
    next: { tags: ["listGifts"] },
  });

  return response.json();
}
