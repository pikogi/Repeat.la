"use client"

import { useRef, useState } from "react"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function FeatureSection9() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

  return (
    <section className="bg-gray-100 py-30 md:py-38 border-b" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">

          {/* Texto: arriba en mobile, a la derecha en desktop */}
          <div className="flex flex-col md:flex-none md:col-span-1 items-center md:items-start order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-center text-black underline decoration-4 decoration-black underline-offset-8 mb-0 md:mb-0 leading-normal lg:leading-relaxed">
  <span className="block mb-2">REPEAT</span>
  <span className="block">EN ACCION.</span>
</h1>

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
          </div>
          
        </div>
      </div>
    </section>
  )
}
