import Image from "next/image";
import Link from "next/link";

import { getAccommodations } from "@/backend/data";

export default async function Accommodations() {
  const accommodations = await getAccommodations();

  return (
    <section id="accommodations" className="my-32">
      <h2 className="mb-2 text-center font-serif text-lg">Onde se Hospedar</h2>
      <p className="mb-7 text-center font-mono text-sm">
        Selecionamos alguns hotéis próximos ao local do evento e também a nossa
        casinha
      </p>

      <div className="mx-auto mb-10 mt-5 h-px w-28 bg-red" />

      <ul className="my-10 grid gap-x-40 gap-y-20 tablet:grid-cols-2">
        {accommodations.result.map((accommodation) => (
          <li key={accommodation._id} className="flex flex-col items-center">
            <div className="relative mb-4 h-0 w-full overflow-hidden pb-[75.5%]">
              <Image
                className="object-contain"
                src={accommodation.image}
                alt={accommodation.name}
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <h3 className="mx-4 mb-2 text-center font-serif text-sm">
              {accommodation.name}
            </h3>
            <span className="mx-4 mb-1 text-center font-mono text-xs">
              {accommodation.address}
            </span>
            <span className="mx-4 mb-1 text-center font-mono text-xs">
              {accommodation.homeDistance}km da nossa casinha
            </span>
            <span className="mx-4 mb-1 text-center font-mono text-xs">
              {accommodation.eventDistance}km do local do evento
            </span>
            <Link
              href={accommodation.link}
              target="_blank"
              className="mx-4 mb-1 text-center font-mono text-sm text-red"
            >
              Link
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
