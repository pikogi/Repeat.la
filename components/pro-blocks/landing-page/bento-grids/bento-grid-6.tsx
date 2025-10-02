"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

const features = [
  {
    title: "Tarjetas Digitales",
    description: "Sin necesidad de tarjetas físicas. Todo en la billetera virtual del cliente.",
    icon: "/digital-loyalty-card-on-smartphone.jpg",
  },
  {
    title: "Código QR",
    description: "Los clientes escanean y se unen al instante.",
    icon: "/qr-code-scanner-in-store.jpg",
  },
  {
    title: "Base de Datos",
    description: "Email, WhatsApp y fecha de cumpleaños de cada cliente.",
    icon: "/customer-database-dashboard.jpg",
  },
  {
    title: "Panel de Control",
    description: "Estadísticas clave y métricas de tu programa de fidelización.",
    icon: "/analytics-dashboard-with-statistics.jpg",
  },
  {
    title: "Panel de Control",
    description: "Estadísticas clave y métricas de tu programa de fidelización.",
    icon: "/analytics-dashboard-with-statistics.jpg",
  },
]

export function ModernFeatures() {
  return (
    <section className="relative bg-background section-padding-y border-b pt-15" id="features">

  
  {/* Título y subtítulo centrados arriba */}
  <div className="text-center mb-16 flex flex-col items-center">
  {/* Tagline */}
  <Tagline className="text-red-500 text-lg md:text-xl">
    ¿Cómo Funciona?
  </Tagline>
  <h2 className="text-black font-bold text-4xl md:text-5xl mt-7">
    ¡Junta 5 sellos y gana un peinado GRATIS!
    </h2> {/* subí de text-2xl a text-3xl y md:text-4xl a md:text-5xl */}
  </div>


      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Columna Izquierda - Imagen sticky */}
        <div className="md:w-[45%] relative">
          <div className="sticky top-24">
            <Image
              src="/repeat1.jpg"
              alt="Tarjeta Digital"
              width={300}
              height={400}
              className="rounded-xl shadow-lg w-[3500px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] object-cover"/>              
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
      className="border rounded-lg shadow-lg p-4 flex items-start gap-6 md:gap-8 bg-white"
    >
      {/* Imagen más grande */}
      <Image
        src={feature.icon}
        alt={feature.title}
        width={120}
        height={120}
        className="rounded-lg object-cover border shadow-md"
      />
      <div>
        {/* Título más grande */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {feature.title}
        </h3>
        {/* Descripción más grande */}
        <p className="text-md md:text-lg text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  )
}
