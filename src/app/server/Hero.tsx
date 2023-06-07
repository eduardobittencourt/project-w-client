export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen min-w-full items-end justify-center"
    >
      <div className="mb-[20vh] flex flex-col gap-[15vh]">
        <h1 className="flex flex-col items-center gap-5 text-center font-serif text-lg tablet:text-hg">
          Letícia
          <svg viewBox="0 0 33 30" className="w-8 fill-red">
            <path d="M29.9529 15.1283C29.6382 15.7025 29.3087 16.2619 28.9791 16.8045C26.3389 21.1413 23.4832 25.3246 20.8704 29.6866C20.7986 29.8044 20.7183 29.9327 20.5894 29.979C20.4416 30.0337 20.2811 29.9685 20.1374 29.9054C12.5187 26.5255 -6.95801 11.4288 3.53545 2.19995C5.8272 0.182981 9.56582 0.681439 11.9885 2.53856C14.4112 4.39779 15.7968 7.26865 16.9628 10.0848C17.6767 7.4979 18.8321 5.03085 20.3677 2.8267C22.0363 0.431158 25.3102 -0.439565 28.1174 0.206116C35.0349 1.79824 32.251 10.945 29.9529 15.1283Z" />
          </svg>
          Eduardo
        </h1>

        <div>
          <h2 className="text-center font-mono text-sm">
            23 de Dezembro de 2023
            <span className="px-3 text-red">&#8226;</span>
            16h às 22h
          </h2>

          <div className="mx-auto my-5 h-px w-10 bg-red" />

          <h2 className="text-center font-mono text-sm">
            Lá nos Fundos | Rua Dinarte Ribeiro, 155
          </h2>
        </div>
      </div>
    </section>
  );
}
