import Image from "next/image";
import Link from "next/link";

import Tobias from "@/assets/tobias.png";
import listAccommodations from "@/resources/listAccommodations";

export const metadata = {
  title: "Acomodações | Letícia & Eduardo",
};

export default async function AccommodationsPage() {
  const accommodations = await listAccommodations();

  return (
    <>
      <div className="my-10 grid items-center gap-10 lg:my-0 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2">
        <div>
          <h1 className="mb-4 font-serif text-lg">Onde se Hospedar</h1>
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
          src={Tobias}
          alt="Foto do Tobias"
          className="justify-self-center"
        />
      </div>

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className="text-xs">{accommodation.address}</span>
            </div>
            <div className="mb-1 flex items-end gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="text-xs">
                {accommodation.homeDistance}km da nossa casinha
              </span>
            </div>
            <div className="mb-2 flex items-end gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                />
              </svg>
              <span className="text-xs">
                {accommodation.eventDistance}km do local do evento
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
    </>
  );
}
