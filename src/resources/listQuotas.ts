"use server";

import { Quota } from "@/types/Quota";
import { SanityQueryResponse } from "@/types/Sanity";

export async function listQuotas(): Promise<SanityQueryResponse<Quota[]>> {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set(
    "query",
    `*[_type == 'quota'] {
    _id,
    title,
    price,
    bought,
    "image": image.asset->url
  }`
  );

  const response = await fetch(requestURL.toString(), {
    next: { tags: ["listQuotas"] },
  });

  return response.json();
}
