"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function PageWithLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const text = "REPEAT" // Tu marca

  useEffect(() => {
    // Loader dura 2.5 segundos
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Variantes para cada letra
  const easeInOut: [number, number, number, number] = [0.6, 0.01, 0.05, 0.95]
  const slideEase: [number, number, number, number] = [0.76, 0, 0.24, 1]

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  // Variante para el contenedor (controla el stagger)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay entre cada letra
        delayChildren: 0.1    // Delay antes de empezar
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1 // Las letras desaparecen en reversa
      }
    }
  }

  return (
    <>
      {/* Loader con animación de cortina hacia arriba */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: slideEase
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-300"
          >
            {/* Texto con letras animadas */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex gap-1"
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-4xl md:text-4xl font-bold text-black inline-block"
                  style={{ textShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline opcional debajo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-black/90 mt-8 text-xl font-medium tracking-widest"
            >
              WHAT YOUR CLIENTS LOVE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido que aparece desde abajo */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: loading ? 100 : 0, 
          opacity: loading ? 0 : 1 
        }}
        transition={{ 
          duration: 0.8, 
          delay: loading ? 0 : 0.3,
          ease: slideEase
        }}
      >
        {children}
      </motion.div>
    </>
  )
}