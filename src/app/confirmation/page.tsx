import Image from "next/image";

import Oreo from "@/assets/oreo.png";
import confirmPresence from "@/resources/actions/confirmPresence";

export const metadata = {
  title: "Confirmar Presença | Letícia & Eduardo",
};

export default function ConfirmationPage() {
  return (
    <>
      <div className="mb-10 grid min-h-[calc(100vh-80px)] items-center lg:mb-0 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 font-serif text-lg">Confirmação de presença</h1>
          <p className="mb-8 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ante sed nunc fermentum efficitur quis nec enim. Suspendisse
            tortor tortor, rhoncus fermentum sem sit amet, porttitor volutpat
            tellus. Duis vel pulvinar libero, vitae euismod felis. Aenean non
            diam sit amet neque gravida dictum. Vestibulum euismod tellus ut est
            porttitor volutpat. Ut tempor aliquam metus, placerat lobortis elit
            finibus nec. Aliquam vehicula interdum eros, eu maximus sapien
            feugiat id. Quisque pretium metus quis massa pulvinar rutrum.
            Integer a leo viverra, fermentum sem eget, sodales sapien.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="mx-auto hidden h-6 w-6 animate-bounce stroke-red lg:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        <Image
          src={Oreo}
          alt="Foto do Tobias"
          className="justify-self-center"
        />
      </div>

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
    </>
  );
}
