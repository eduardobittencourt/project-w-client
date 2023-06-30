"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import SpinnerIcon from "@/assets/SpinnerIcon";

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
          className="h-8 w-8 rounded-full bg-red p-1"
        >
          <PlusIcon className="h-6 w-6 fill-white stroke-white" />
        </button>

        <button
          type="submit"
          disabled={isSending}
          className="mb-2 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white disabled:opacity-50"
        >
          {isSending ? (
            <span className="flex justify-center">
              <SpinnerIcon />
              <span>Confirmando...</span>
            </span>
          ) : (
            "Confirmar compra"
          )}
        </button>
      </fieldset>
    </form>
  );
}
