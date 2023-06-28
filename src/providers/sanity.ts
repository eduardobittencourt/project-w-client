export function getSanityContent(query: string) {
  const requestURL = new URL("query/production", process.env.SANITY_API_URL);

  requestURL.searchParams.set("query", query);

  return fetch(requestURL.toString(), { next: { revalidate: 0 } });
}

export async function updateSanityContent(body: object[]) {
  const requestURL = new URL(`mutate/production`, process.env.SANITY_API_URL);

  await fetch(requestURL.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.SANITY_TOKEN}`,
    },
    body: JSON.stringify({ mutations: body }),
  });
}
