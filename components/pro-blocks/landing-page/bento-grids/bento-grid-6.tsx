"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

const features = [
  {
    title: "",
    description: "Expones el código QR de tu Club de Fidelidad en tu local",
    icon: "/digital-loyalty-card-on-smartphone.jpg",
  },
  {
    title: "",
    description: "Los clientes escanean el QR y completan con sus datos de contacto",
    icon: "/image2.jpg",
  },
  {
    title: "",
    description: "Descargan la tarjeta de fidelidad en su billetera virtual",
    icon: "/image8.jpg",
  },
  {
    title: "",
    description: "Presentan su tarjeta virtual cada vez que visitan el local hasta ganar su premio",
    icon: "/image4.jpg",
  },
  {
    title: "",
    description: "Otro cliente contento y fidelizado",
    icon: "/image5.jpg",
  },
]

export function ModernFeatures() {
  return (
    <section className="relative bg-background section-padding-y border-b" id="features">
      {/* Título y subtítulo centrados arriba */}
      <div className="section-title-gap-lg flex flex-col items-center text-center mb-16">
        <Tagline className="text-red-500 text-lg md:text-xl">¿Cómo Funciona?</Tagline>
        <h2 className="text-black font-bold text-4xl md:text-5xl mt-7">
          ¡Junta 6 sellos y gana un corte GRATIS!
        </h2>
      </div>

      <div className="container-padding-x container mx-auto flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Columna Izquierda - Imagen sticky */}
        <div className="md:w-[45%] relative">
          <div className="sticky top-24">
            <Image
              src="/image8.jpg"
              alt="Tarjeta Digital"
              width={550}
              height={550}
              className="rounded-xl shadow-lg w-[350px] sm:w-[450px] md:w-[550px] h-[350px] sm:h-[450px] md:h-[550px] object-cover"
            />
          </div>
        </div>

        {/* Columna Derecha - Features */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border rounded-lg shadow-lg p-4 flex items-center gap-6 md:gap-8 bg-white"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={120}
              height={120}
              className="rounded-lg object-cover border shadow-md"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-md md:text-lg text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>          
          ))}
        </div>
      </div>
    </section>
  )
}
