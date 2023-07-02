import Oreo from "@/assets/oreo.png";
import ConfirmationCodeForm from "@/components/ConfirmationCodeForm";
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

      <section>
        <h2 className="mb-4 text-center font-serif text-md">O que vestir</h2>
        <p className="mx-auto mb-2 max-w-2xl text-center font-mono text-sm">
          Em dezembro enfrentamos altas temperaturas nesta região. O clima tende
          a ser bastante quente e ensolarado. Recomendamos o uso de{" "}
          <b>tecidos leves</b> para maior conforto.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm">
          Não é necessário traje formal, mas pedimos que{" "}
          <b>evitem jeans e bermudas</b>. Sugerimos que optem por calças de
          tecido leve, vestidos frescos ou outros trajes similares, que
          proporcionem conforto e estejam adequados à estação e ao evento.
        </p>
      </section>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <section className="mb-20">
        <h2 className="mb-2 text-center font-serif text-md">Tudo certo?</h2>
        <p className="mb-7 text-center font-mono">
          Insira seu código para confirmar presença
        </p>

        <ConfirmationCodeForm />
      </section>
    </main>
  );
}
