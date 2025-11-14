"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCountry } from "@/app/context/CountryContext"

export function Cardsection() {
  const { country } = useCountry(); // "ar" | "mx" | "us"

  const whatsappNumbers: Record<string, string> = {
    mx: "5215543219876",
    ar: "5491150389694",
    us: "1234567890",
  };

  const whatsappMessages: Record<string, string> = {
    mx: "¡Hola! Quiero comenzar mi prueba gratuita desde México.",
    ar: "¡Hola! Quiero comenzar mi prueba gratuita desde Argentina.",
    us: "Hi! I want to start my free trial from the USA.",
  };

  const pruebaGratisLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
    whatsappMessages[country]
  )}`;

  return (
    <section
      id="personalizacion"
      className="bg-gray-100 text-black py-10 border-b"
      aria-labelledby="personaliza-tu-club"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-8 md:flex-row md:items-center">

        {/* Imagen lado izquierdo */}
        <div className="relative w-full md:w-[70%] flex justify-center md:justify-start">
          <div className="relative w-[90%] md:w-[120%] h-[350px] md:h-[750px]">
            <Image
              src="/repeat7.png"
              alt="Vista previa de tarjetas personalizadas"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto lado derecho */}
        <div className="flex w-full md:w-1/2 flex-col justify-center text-center gap-6">
          <h2 id="personaliza-tu-club" className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Personaliza tu club <br /> con tu identidad:
          </h2>

          <p className="text-2xl md:text-4xl font-semibold text-black">
            <span className="relative inline-block">
              <span className="relative z-10">Único</span>
              <svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 200 20" fill="none">
                <path d="M3 15C40 5 160 5 197 15" stroke="#FACC15" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">estético</span>
              <svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 200 20" fill="none">
                <path d="M3 15C40 5 160 5 197 15" stroke="#FACC15" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </span>{" "}
            y{" "}
            <span className="relative inline-block">
              <span className="relative z-10">claro</span>
              <svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 200 20" fill="none">
                <path d="M3 12 C40 2, 160 2, 197 12" stroke="#FACC15" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </span>
            .
          </p>

          {/* Botón responsive */}
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-0 md:justify-center">
            {/* Mobile */}
            <div className="md:hidden w-full flex justify-center">
              <Button
                asChild
                className="text-white px-10 py-5 text-lg rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                Comienza tu Prueba Gratis
                </a>
              </Button>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex w-full max-w-md">
              <Button
                asChild
                className="w-full bg-black text-white md:text-xl md:px-12 md:py-6 px-16 py-5 rounded-lg hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                  Quiero mi propio Club de Fidelidad
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
