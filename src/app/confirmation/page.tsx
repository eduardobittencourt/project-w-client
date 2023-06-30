import Oreo from "@/assets/oreo.png";
import SectionHeader from "@/components/SectionHeader";
import confirmPresence from "@/resources/mutations/confirmPresence";

export const metadata = {
  title: "Confirmar Presença | Letícia & Eduardo",
  description:
    "Página de confirmação de presença do casamento de Letícia e Eduardo",
};

export default function ConfirmationPage() {
  return (
    <main>
      <SectionHeader
        title="Confirmação de presença"
        description="Estamos super ansiosos pra celebrar esse momento especial com vocês. Por favor, pedimos que gentilmente confirme sua presença até o dia 23 de novembro de 2023. Isso nos ajudará a planejar todos os detalhes da celebração e garantir que tudo esteja perfeito para curtirmos cada segundo."
        image={{
          src: Oreo,
          alt: "Foto do Oreo",
        }}
      />

      <div>
        <h2 className="mb-2 font-serif text-md">O que vestir</h2>
        <p className="mb-7 font-mono">
          Em dezembro enfrentamos altas temperaturas nesta região. O clima tende
          a ser bastante quente e ensolarado. Recomendamos o uso de tecidos
          leves para maior conforto.
          <br />
          <br />
          Não é necessário traje formal, mas pedimos que evitem jeans e
          bermudas. Sugerimos que optem por calças de tecido leve, vestidos
          frescos ou outros trajes similares, que proporcionem conforto e
          estejam adequados à estação e ao evento.
        </p>

        <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />
      </div>

      <div>
        <h2 className="mb-2 text-center font-serif text-md">Tudo certo?</h2>
        <p className="mb-7 text-center font-mono">
          Insira seu código para confirmar presença
        </p>

        <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

        <form
          className="flex flex-col items-center gap-8"
          action={confirmPresence}
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
            className="mb-2 inline-block bg-red px-8 py-4 text-center font-mono text-white"
          >
            Confirmar
          </button>
        </form>
      </div>
    </main>
  );
}
