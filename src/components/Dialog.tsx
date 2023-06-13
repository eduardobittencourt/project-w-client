"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type DialogProps = { children: React.ReactNode; href: string | URL };
export default function Dialog({ children, href }: DialogProps) {
  const router = useRouter();

  useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      event.key === "Escape" && router.push(href as string);
    };

    document.addEventListener("keyup", closeModal, false);

    return () => {
      document.removeEventListener("keyup", closeModal, false);
    };
  }, [router, href]);

  return (
    <aside className="pointer-events-auto fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center">
      <Link href={href}>
        <div className="absolute left-0 top-0 h-full w-full cursor-default bg-black opacity-50" />
      </Link>

      <div className="relative h-full w-full overflow-auto bg-white p-8 tablet:h-auto tablet:max-w-4xl">
        <Link
          href={href}
          className="fixed right-2 top-2 z-10 m-0 h-12 w-12 p-3 tablet:absolute"
        >
          <svg
            viewBox="0 0 32 32"
            className="rounded-full bg-red fill-white p-1.5"
          >
            <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
          </svg>
        </Link>

        {children}
      </div>
    </aside>
  );
}
