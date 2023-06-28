"use client";

import Link from "next/link";

export default function GuestConfirmationError() {
  return (
    <div>
      <h2>Ooops!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
        ante sed nunc fermentum efficitur quis nec enim. Suspendisse tortor
        tortor, rhoncus fermentum sem sit amet, porttitor volutpat tellus. Duis
        vel pulvinar libero, vitae euismod felis.
      </p>
      <Link href="/confirmation">Tentar novamente</Link>
    </div>
  );
}
