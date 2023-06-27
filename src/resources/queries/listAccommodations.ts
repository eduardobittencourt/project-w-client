"use server";

import { getSanityContent } from "@/providers/sanity";
import { Accommodation } from "@/types/Accommodation";
import { SanityQueryResponse } from "@/types/Sanity";

export default async function listAccommodations(): Promise<
  SanityQueryResponse<Accommodation[]>
> {
  const response = await getSanityContent(`*[_type == 'accommodation'] {
      ...,
      "image": image.asset->url
    }`);

  return response.json();
}
