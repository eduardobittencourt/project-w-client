"use client";

import { useState } from "react";

import { buyQuota } from "@/resources/mutations/buyQuota";

export default function QuotaPageForm({ id }: { id: string }) {
  const [codeCount, setCodeCount] = useState(1);

  return (
    <form action={buyQuota}>
      <fieldset className="mb-8 flex flex-col items-center gap-4">
        <input type="hidden" name="id" defaultValue={id} />
        {Array.from({ length: codeCount }).map((_item, index) => (
          <input
            type="text"
            key={index}
            name="code"
            required={!index}
            maxLength={5}
            minLength={5}
            className="border py-2 text-center text-xs uppercase"
            placeholder="ABC12"
          />
        ))}

        <button
          id="add"
          title="Add more codes"
          type="button"
          onClick={() => setCodeCount(codeCount + 1)}
          className="h-8 w-8 rounded-full bg-red p-2"
        >
          <svg viewBox="0 0 32 32" className="fill-white">
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
          </svg>
        </button>

        <button
          type="submit"
          className="mb-2 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white"
        >
          Confirmar compra
        </button>
      </fieldset>
    </form>
  );
}
