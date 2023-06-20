"use server";

import { Accommodation } from "@/types/Accommodation";
import { SanityQueryResponse } from "@/types/Sanity";

export default async function listAccommodations(): Promise<
  SanityQueryResponse<Accommodation[]>
> {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set(
    "query",
    `*[_type == 'accommodation'] {
      _id,
      name,
      address,
      homeDistance,
      eventDistance,
      link,
      "image": image.asset->url
    }`
  );

  const response = await fetch(requestURL.toString(), {
    next: { tags: ["listAccommodations"], revalidate: 0 },
  });

  return response.json();
}
