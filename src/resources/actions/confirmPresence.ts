"use server";

import { redirect } from "next/navigation";

export default async function confirmPresence(data: FormData) {
  const code = data.get("code");

  redirect(`/confirmation/${code}`);
}
