import Image from "next/image";

import Tobias from "@/assets/tobias.png";
export default function AccommodationsPage() {
  return (
    <div className="grid min-h-[calc(100vh-144px)] items-center tablet:grid-cols-2">
      <div>
        <h1 className="mb-4 font-serif text-lg">Onde se Hospedar</h1>
        <p className="mb-8 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          ante sed nunc fermentum efficitur quis nec enim. Suspendisse tortor
          tortor, rhoncus fermentum sem sit amet, porttitor volutpat tellus.
          Duis vel pulvinar libero, vitae euismod felis. Aenean non diam sit
          amet neque gravida dictum. Vestibulum euismod tellus ut est porttitor
          volutpat. Ut tempor aliquam metus, placerat lobortis elit finibus nec.
          Aliquam vehicula interdum eros, eu maximus sapien feugiat id. Quisque
          pretium metus quis massa pulvinar rutrum. Integer a leo viverra,
          fermentum sem eget, sodales sapien.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="mx-auto h-6 w-6 animate-bounce stroke-red"
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
  );
}
