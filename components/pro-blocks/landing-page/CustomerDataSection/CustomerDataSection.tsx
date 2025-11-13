"use client"

import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { Button } from "@/components/ui/button"
import { useCountry } from "@/app/context/CountryContext"

export function CustomerDataSection() {
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
    <section className="bg-background section-padding-y border-b">
      {/* Tagline y título centrados arriba */}
      <div className="container mx-auto px-4 md:px-6 text-center mb-10 flex flex-col items-center">
        <Tagline className="text-red-500 text-lg md:text-xl">
          Herramienta de Marketing
        </Tagline>
        <h1 className="text-black font-bold text-4xl md:text-5xl mt-7">
          Todos los datos de tus clientes en un solo lugar
        </h1>
      </div>

      {/* Contenedor de columnas */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Columna Izquierda - Texto */}
        <div className="md:w-2/5 flex flex-col gap-6 md:gap-4 text-lg md:text-[1.5rem] text-foreground">
          <p>
            Una vez que el cliente se unió al club de fidelidad, tendrás acceso a un panel de control con estadísticas clave.
          </p>
          <p>
            Podrás ver los miembros de tu club y la cantidad de sellos obtenidos en un período de tiempo determinado.
          </p>
          <p>
            Además, tendrás acceso a la base de datos de los participantes, donde encontrarás información como su correo electrónico, WhatsApp y fecha de cumpleaños, para poder tomar acción y aumentar tus ventas.
          </p>

          {/* Botón responsive debajo del texto */}
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-0 md:justify-start">
            {/* Mobile */}
            <div className="md:hidden w-full flex justify-center">
              <Button
                asChild
                className="text-white px-10 py-5 text-lg rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                  Quiero mi propio Club de Fidelidad
                </a>
              </Button>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex w-full max-w-md">
              <Button
                asChild
                className="text-white px-6 py-3 md:text-xl md:px-12 md:py-6 rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                  Quiero mi propio Club de Fidelidad
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Imagen */}
        <div className="md:w-3/5 flex self-center mx-auto">
          <Image
            src="/repeat2.jpg"
            alt="Panel de Control"
            width={700}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-[400px] md:h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
