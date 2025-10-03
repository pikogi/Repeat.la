"use client"

import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function CustomerDataSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      {/* Tagline y título centrados arriba */}
      <div className="container mx-auto px-4 md:px-6 text-center mb-16 flex flex-col items-center">
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
        <div className="md:w-2/5 flex flex-col gap-6 md:gap-12 text-lg md:text-[1.5rem] text-foreground">
          <p>
            Una vez que el cliente se unió al club de fidelidad, tendrás acceso a un panel de control con estadísticas clave.
          </p>
          <p>
            Podrás ver los miembros de tu club y la cantidad de sellos obtenidos en un período de tiempo determinado.
          </p>
          <p>
            Además, tendrás acceso a la base de datos de los participantes, donde encontrarás información como su correo electrónico, WhatsApp y fecha de cumpleaños, para poder tomar acción y aumentar tus ventas.
          </p>
        </div>

          {/* Columna Derecha */}
  <div className="md:w-3/5 flex self-center">
    <Image
      src="/repeat2.jpg"
      alt="Panel de Control"
      width={700}
      height={600}
      className="rounded-xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
/>
  </div>
</div>
    </section>
  )
}
