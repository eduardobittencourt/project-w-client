"use client";

import { useState } from "react";

import SpinnerIcon from "@/assets/SpinnerIcon";
import { confirmGuestPresence } from "@/resources/mutations/confirmGuestPresence";
import { Guest } from "@/types/Guest";

export type ConfirmationGuestsFormProps = {
  guests: Guest;
};

export default function ConfirmationGuestsForm({
  guests,
}: ConfirmationGuestsFormProps) {
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      action={confirmGuestPresence}
      className="grid justify-center gap-2"
      onSubmit={() => setIsSending(true)}
    >
      <input type="hidden" name="id" defaultValue={guests._id} />

      {guests.guests.map((guest) => (
        <div
          key={guest._key}
          className="flex items-center gap-2 font-mono text-sm"
        >
          <input type="hidden" name="guest" defaultValue={guest._key} />

          <input
            type="checkbox"
            name="confirmed"
            value={guest._key}
            defaultChecked={guest.confirmed}
            className='relative flex h-6 w-6 cursor-pointer appearance-none items-center justify-center border border-red checked:before:block checked:before:text-center checked:before:leading-none checked:before:text-red checked:before:content-["✓"]'
          />

          <label htmlFor="key">{guest.name}</label>
        </div>
      ))}

      <button
        className="mb-2 mt-8 inline-block w-full bg-red px-6 py-4 text-center text-sm text-white disabled:opacity-50 md:max-w-sm"
        type="submit"
        disabled={isSending}
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
