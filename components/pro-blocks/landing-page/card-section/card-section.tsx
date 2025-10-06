"use client"

import Image from "next/image"

export function Cardsection() {
  return (
    <section
      id="personalizacion"
      className="bg-gray-100 text-black py-10 border-b"
      aria-labelledby="personaliza-tu-club"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-2 md:flex-row">

        {/* Imagen lado izquierdo */}
        <div className="relative w-full md:w-[70%] flex justify-center flex md:justify-start">
          <div className="relative w-[90%] md:w-[120%] h-[350px] md:h-[750px]">
            <Image
              src="/repeat6.png"
              alt="Vista previa de tarjetas personalizadas"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto lado derecho */}
<div className="flex w-full md:w-1/2 flex-col justify-center text-center md:text-left gap-6">
  <h2 id="personaliza-tu-club" className="text-3xl md:text-5xl font-bold text-black leading-tight">
    Personaliza tu Club <br /> con tu identidad:
  </h2>

  <p className="text-2xl md:text-4xl font-semibold text-black">
    {/* Palabra 1: Único */}
    <span className="relative inline-block">
      <span className="relative z-10">Único</span>
      <svg
        className="absolute bottom-0 left-0 w-full h-3"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 15C40 5 160 5 197 15"
          stroke="#FACC15"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </span>
    ,{" "}
    {/* Palabra 2: estético */}
    <span className="relative inline-block">
      <span className="relative z-10">estético</span>
      <svg
        className="absolute bottom-0 left-0 w-full h-3"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 15C40 5 160 5 197 15"
          stroke="#FACC15"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </span>{" "}
    y{" "}
    {/* Palabra 3: claro */}
<span className="relative inline-block">
  <span className="relative z-10">claro</span>
  <svg
    className="absolute bottom-0 left-0 w-full h-3"
    viewBox="0 0 200 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12 C40 2, 160 2, 197 12"
      stroke="#FACC15"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
</span>

    .
  </p>
</div>
      </div>
    </section>
  )
}
