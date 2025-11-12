"use client"

import { useRef, useState, useEffect } from "react"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { Button } from "@/components/ui/button"
import { getUserCountry } from "@/geolocation"

export function FeatureSection9() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [country, setCountry] = useState<"ar" | "mx" | "us">("ar")

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        videoRef.current.setAttribute("controls", "true")
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    getUserCountry().then((c) => {
      if (c === "ar" || c === "mx" || c === "us") setCountry(c)
    })
  }, [])

  const whatsappNumbers: Record<string, string> = {
    mx: "5215543219876",
    ar: "5491150389694",
    us: "1234567890",
  }

  const whatsappMessages: Record<string, string> = {
    mx: "¡Hola! Quiero comenzar mi prueba gratuita desde México.",
    ar: "¡Hola! Quiero comenzar mi prueba gratuita desde Argentina.",
    us: "Hi! I want to start my free trial from the USA.",
  }

  const pruebaGratisLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
    whatsappMessages[country]
  )}`

  return (
    <section className="bg-gray-100 section-padding-y border-b" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
          
          {/* Texto: arriba en mobile, a la derecha en desktop */}
          <div className="flex flex-col md:flex-none md:col-span-1 items-center md:items-start order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-center text-black underline decoration-4 decoration-black underline-offset-8 mb-0 md:mb-0 leading-normal lg:leading-relaxed">
              <span className="block mb-2">REPEAT</span>
              <span className="block">EN ACCION.</span>
            </h1>

            {/* Botón para desktop */}
            <div className="hidden md:flex md:mt-6 md:justify-center w-full">
              <Button
                asChild
                className="text-white px-6 py-3 md:px-8 md:py-4 rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                  Comienza tu Prueba Gratis
                </a>
              </Button>
            </div>
          </div>

          {/* Video */}
          <div className="md:col-span-2 flex flex-col items-center order-2 md:order-1">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg md:-ml-10 flex items-center justify-center bg-black md:mt-0">
              <video
                ref={videoRef}
                className="w-full h-auto object-contain"
                src="/repeatenaccion.mp4"
                poster="/repeat3.png"
              />
              
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-black/60 hover:bg-black/80 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-12 md:w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>

            {/* Botón debajo del video en mobile */}
            <div className="mt-20 md:mt-0 md:hidden flex justify-center w-full">
              <Button
                asChild
                className="text-white px-10 py-5 text-lg rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
              >
                <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                  Comienza tu Prueba Gratis
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
