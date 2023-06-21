"use server";

import { getSanityContent } from "@/providers/sanity";
import { Quota } from "@/types/Quota";
import { SanityQueryResponse } from "@/types/Sanity";

export async function getQuota(
  quota: string
): Promise<SanityQueryResponse<Quota>> {
  const response =
    await getSanityContent(`*[_type == 'quota' && _id == '${quota}'][0] {
    ...,
    "image": image.asset->url
  }`);

  return response.json();
}
