import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex items-center justify-between py-6 lg:px-8">
      <svg viewBox="0 0 33 30" className="h-8 w-auto fill-red">
        <path d="M29.9529 15.1283C29.6382 15.7025 29.3087 16.2619 28.9791 16.8045C26.3389 21.1413 23.4832 25.3246 20.8704 29.6866C20.7986 29.8044 20.7183 29.9327 20.5894 29.979C20.4416 30.0337 20.2811 29.9685 20.1374 29.9054C12.5187 26.5255 -6.95801 11.4288 3.53545 2.19995C5.8272 0.182981 9.56582 0.681439 11.9885 2.53856C14.4112 4.39779 15.7968 7.26865 16.9628 10.0848C17.6767 7.4979 18.8321 5.03085 20.3677 2.8267C22.0363 0.431158 25.3102 -0.439565 28.1174 0.206116C35.0349 1.79824 32.251 10.945 29.9529 15.1283Z"></path>
      </svg>

      <input
        type="checkbox"
        hidden
        name="menu"
        id="menu"
        className="peer"
        defaultChecked={false}
      />

      <nav className="fixed right-0 top-0 z-10 grid h-screen translate-x-full content-start gap-4 border-l bg-white p-8 font-serif transition-transform peer-checked:translate-x-0 md:static md:h-auto md:translate-x-0 md:grid-flow-col md:border-l-0 md:p-0">
        <label
          htmlFor="menu"
          className="mb-4 cursor-pointer justify-self-end p-4 md:hidden"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>

        <Link className="transition-colors hover:text-red" href="/">
          Início
        </Link>
        <Link className="transition-colors hover:text-red" href="/gifts">
          Presentes
        </Link>
        <Link
          className="transition-colors hover:text-red"
          href="/accommodations"
        >
          Acomodações
        </Link>
        <Link className="transition-colors hover:text-red" href="/confirmation">
          Confirmar Presença
        </Link>
      </nav>

      <label htmlFor="menu" className="cursor-pointer p-1 md:hidden">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
    </header>
  );
}
