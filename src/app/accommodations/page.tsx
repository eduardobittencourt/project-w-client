import { CakeIcon, HomeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import Tobias from "@/assets/tobias.png";
import SectionHeader from "@/components/SectionHeader";
import listAccommodations from "@/resources/queries/listAccommodations";
import measurementFormat from "@/utils/measurementFormat";

export const metadata = {
  title: "Acomodações | Letícia & Eduardo",
  description:
    "Lista de hospedagens recomendadas do casamento de Letícia e Eduardo",
};

export default async function AccommodationsPage() {
  const accommodations = await listAccommodations();

  return (
    <main>
      <SectionHeader
        title="Onde se Hospedar"
        description="Selecionamos alguns hotéis próximos ao local do evento, bem como a nossa casinha, para facilitar a sua escolha. Recomendamos que você faça sua reserva o quanto antes, garantindo assim sua estadia nos arredores do local do evento. Não hesite em entrar em contato com os hotéis diretamente para obter mais detalhes e, caso tenha alguma dúvida sobre a localização ou precise de outra opção e só nos avisar."
        image={{
          src: Tobias,
          alt: "Foto do Tobias",
        }}
      />

      <ul className="mb-20 grid gap-20 md:grid-cols-2">
        {accommodations.result.map((accommodation) => (
          <li key={accommodation._id}>
            <Image
              src={accommodation.image}
              alt={accommodation.name}
              width={650}
              height={490}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-2 h-auto w-full"
            />
            <p className="mb-2 text-sm font-bold">{accommodation.name}</p>
            <div className="mb-1 flex items-end gap-2">
              <MapPinIcon className="h-6 w-6" />
              <span className="text-xs">{accommodation.address}</span>
            </div>
            <div className="mb-1 flex items-end gap-2">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs">
                {measurementFormat(accommodation.homeDistance)} da nossa casinha
              </span>
            </div>
            <div className="mb-2 flex items-end gap-2">
              <CakeIcon className="h-6 w-6" />
              <span className="text-xs">
                {measurementFormat(accommodation.eventDistance)} do local do
                evento
              </span>
            </div>
            <Link
              href={accommodation.link}
              target="_blank"
              className="border-b border-red text-xs font-bold"
            >
              Infomações aqui
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
