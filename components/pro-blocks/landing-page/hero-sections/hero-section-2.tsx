"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection2() {
  return (
    <section
    className="
    relative 
    bg-secondary 
    overflow-hidden 
    pt-32 pb-16 
    lg:h-screen lg:pt-32 lg:pb-0 
    flex items-center
  "
  aria-labelledby="hero-heading"
>
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/FidelidadRepeatPortada.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="lg:mt-[-80px] relative z-10 container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            <h1
              id="hero-heading"
              className="text-5xl lg:text-7xl font-bold mt-10 text-white"
            >
              TU CLUB DE<br />
              FIDELIDAD EN <br />
              MINUTOS.
            </h1>
            <p className="text-base text-xl lg:text-2xl text-white font-bold text-xl">
              Comienza a fidelizar tus clientes hoy mismo!
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <Check className="text-yellow-400 h-5 w-5" />
              <span className="text-base lg:text-xl text-white">
                Sin necesidad de tarjetas físicas
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-yellow-400 h-5 w-5" />
              <span className="text-base lg:text-xl text-white">
                Integrado con Apple y Google Wallet
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-yellow-400 h-5 w-5" />
              <span className="text-base lg:text-xl text-white">
                Base de datos de clientes automatizada
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="text-white lg:px-10 lg:py-5 lg:text-lg rounded-lg bg-black hover:bg-yellow-500 hover:text-black">
              <a
                href="https://wa.me/+5493517881653?text=Hola%21%20Quiero%20comenzar%20mi%20prueba%20gratuita%20del%20club%20de%20fidelidad%20de%20Repeat."
                target="_blank"
                rel="noopener noreferrer"
              >
                Prueba gratis
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-black bg-yellow-400 hover:bg-black hover:text-white lg:px-10 lg:py-5 lg:text-lg rounded-lg"
            >
              Cómo funciona
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
