"use client";

import { useState } from "react";

import SpinnerIcon from "@/assets/SpinnerIcon";
import confirmPresence from "@/resources/mutations/confirmPresence";

export default function ConfirmationCodeForm() {
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      className="flex flex-col items-center gap-8"
      action={confirmPresence}
      onSubmit={() => setIsSending(true)}
    >
      <input
        type="text"
        name="code"
        className="border p-4 text-center uppercase"
        placeholder="ABC12"
        required
        minLength={5}
        maxLength={5}
      />

      <button
        type="submit"
        disabled={isSending}
        className="mb-2 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white disabled:opacity-50 md:max-w-sm"
      >
        {isSending ? (
          <span className="flex justify-center">
            <SpinnerIcon />
            <span>Confirmando...</span>
          </span>
        ) : (
          "Confirmar presença"
        )}
      </button>
    </form>
  );
}
