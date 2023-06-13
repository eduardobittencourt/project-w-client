import { redirect } from "next/navigation";

export default function ConfirmationPage() {
  async function confirmPresence(data: FormData) {
    "use server";

    const code = data.get("code");

    redirect(`/confirmation/${code}`);
  }

  return (
    <main className="my-32">
      <h2 className="mb-2 text-center font-serif text-lg">
        Confirmar presença
      </h2>
      <p className="mb-7 text-center font-mono text-sm">
        Insira seu código para confirmar presença
      </p>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <form
        action={confirmPresence}
        className="flex flex-col items-center gap-8"
      >
        <input
          type="text"
          name="code"
          className="border p-4 text-center text-xs uppercase"
          placeholder="ABC12"
          required
          minLength={5}
          maxLength={5}
        />
        <button
          type="submit"
          className="mb-2 inline-block bg-red px-8 py-4 text-center font-mono text-sm text-white"
        >
          Confirmar
        </button>
      </form>
    </main>
  );
}
