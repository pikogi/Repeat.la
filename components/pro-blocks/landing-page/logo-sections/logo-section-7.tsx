"use client";

import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const logosData = [
  { id: 1, src: "/logos/Alpacafe.jpg", alt: "Alpa Café" },
  { id: 2, src: "/logos/Clubdeestetica.jpg", alt: "Club de Estética" },
  { id: 3, src: "/logos/Donmamino.jpg", alt: "Don Mamino" },
  { id: 4, src: "/logos/JuniorB.jpg", alt: "Junior B" },
  { id: 5, src: "/logos/laceleste.jpg", alt: "La Celeste" },
  { id: 6, src: "/logos/LEROMA.jpg", alt: "Leroma" },
  { id: 7, src: "/logos/MISUSHI.jpg", alt: "Misushi" },
  { id: 8, src: "/logos/PANPLANO.jpg", alt: "Pan Plano" },
  { id: 9, src: "/logos/VAQUERIA.jpg", alt: "Vaquería" },
  { id: 10, src: "/logos/VitaChica.jpg", alt: "Vita Chica" },
];

export function LogoSection10() {
  return (
    <section className="bg-gray-100 border-b pb-16 lg:pb-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Título */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center mt-10">
            <Tagline className="text-xl md:text-2xl text-black font-bold" variant="ghost">
              TRABAJAN CON NOSOTROS
            </Tagline>
          </div>

          {/* Carrusel infinito */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center gap-0 md:gap-12">
              {[...logosData, ...logosData].map((logo, index) => {
                const uniqueKey = `logo-${logo.id}-${index}`;
                return (
                  <div
                    key={uniqueKey}
                    className="w-28 md:w-48 flex-shrink-0 flex items-center justify-center"
                  >
                    {/* Contenedor circular */}
                    <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                      {/* Imagen con efecto de agrandado interno */}
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={144}
                        height={144}
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animación del carrusel */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          will-change: transform;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
