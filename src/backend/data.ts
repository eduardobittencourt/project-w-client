import { Accommodation } from "@/types/Accommodation";
import { Gift } from "@/types/Gift";
import { Guest } from "@/types/Guest";
import { SanityQueryResponse } from "@/types/Sanity";

export function getSanityContent(query: string) {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set("query", query);

  return fetch(requestURL.toString(), { next: { revalidate: 0 } });
}

export async function getGifts(): Promise<SanityQueryResponse<Gift[]>> {
  const response = await getSanityContent(
    `*[_type == 'gift'] {
      _id,
      title,
      description,
      price,
      link,
      bought,
      category,
      "image": image.asset->url
    } | order(category asc)`
  );

  return response.json();
}

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

export async function getAccommodations(): Promise<
  SanityQueryResponse<Accommodation[]>
> {
  const response = await getSanityContent(
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

  return response.json();
}

export async function getGuest(
  code: string
): Promise<SanityQueryResponse<Guest>> {
  const response = await getSanityContent(
    `*[_type == 'guest' && code == '${code}'][0] { 
      _id,
      guests
    }`
  );

  return response.json();
}
