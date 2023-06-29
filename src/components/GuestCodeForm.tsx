"use client";

import { useState } from "react";

export type GuestCodeFormProps = {
  action: (data: FormData) => void;
  id: string;
};

export default function GuestCodeForm({ action, id }: GuestCodeFormProps) {
  const [codeCount, setCodeCount] = useState(1);
  const [isSending, setIsSending] = useState(false);

  return (
    <form action={action} onSubmit={() => setIsSending(true)}>
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
          disabled={isSending}
          className="mb-2 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white disabled:opacity-50"
        >
          {isSending ? (
            <span className="flex justify-center">
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Confirmando...
            </span>
          ) : (
            "Confirmar compra"
          )}
        </button>
      </fieldset>
    </form>
  );
}
