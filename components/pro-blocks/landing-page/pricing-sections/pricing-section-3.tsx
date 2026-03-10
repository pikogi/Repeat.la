"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { getUserCountry } from "@/geolocation"
import { getWhatsAppLink } from "@/lib/whatsapp"

const pricingData = {
  plans: [
    {
      name: "Club de Lealtad",
      description:
        "Un plan optimizado para todo tipo de negocios, desde pequeños emprendedores hasta marcas consolidadas",
      features: [
        { name: "Clientes ilimitados", tooltip: "Sin límite en la cantidad de miembros que puede tener tu club." },
        { name: "Hasta 5 condiciones de club", tooltip: "Crea y gestiona hasta cinco tipos de membresías o reglas activas al mismo tiempo." },
        { name: "Miembros de equipo ilimitados", tooltip: "Agrega a todo tu staff sin restricciones." },
        { name: "Herramienta de Email Marketing integrada", tooltip: "Envía campañas, recordatorios y comunicaciones con un solo clic." },
        { name: "Base de datos completa de clientes", tooltip: "Acceso a toda la información clave de tus miembros." },
        { name: "Sin necesidad de app", tooltip: "Funciona directamente en Google Wallet y Apple Wallet." },
      ],
      monthlyPrice: { ar: 24999, mx: 499, us: 24.99 },
      semiAnnualPricePerMonth: { ar: 17999, mx: 359, us: 17.99 },
      annualPricePerMonth: { ar: 14999, mx: 299, us: 14.99 },
    },
  ],
}

export function PricingSection3() {
  const [billingCycle, setBillingCycle] = useState<"mensual" | "anual" | "semianual">("mensual")
  const [country, setCountry] = useState<"ar" | "mx" | "us">("us")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const paramCountry = urlParams.get("country")?.toLowerCase()

    if (paramCountry === "ar" || paramCountry === "mx" || paramCountry === "us") {
      setCountry(paramCountry)
    } else {
      getUserCountry().then((c) => {
        if (c === "ar" || c === "mx" || c === "us") setCountry(c)
        else setCountry("us") // fallback
      })
    }
  }, [])

  const currency = country === "ar" || country === "mx" ? country : "us"

  const currencySymbol: Record<string, string> = { mx: "$", ar: "$", us: "$" }
  const currencySuffix: Record<string, string> = { mx: "MXN", ar: "ARS", us: "USD" }

  const calculateSavings = (plan: typeof pricingData.plans[0]) => {
    const monthlyTotal = plan.monthlyPrice[currency] * 12
    const annualTotal = plan.annualPricePerMonth[currency] * 12
    return Math.round(((monthlyTotal - annualTotal) / monthlyTotal) * 100)
  }

  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline className="text-red-500 text-lg md:text-xl">
              Precios
            </Tagline>
            <h2 id="pricing-section-title-3" className="heading-lg text-gray-900">
              Un plan diseñado para todos los negocios
            </h2>
          </div>

          {/* Toggle mensual / semestral / anual */}

          {/* Versión Desktop */}
          <div className="hidden sm:flex items-center gap-3 bg-white px-2 py-2 rounded-full shadow-md border border-gray-200">

            <button
              onClick={() => setBillingCycle("mensual")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "mensual"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensual
            </button>

            <button
              onClick={() => setBillingCycle("semianual")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "semianual"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Semestral
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                Recomendado 🚀
              </span>
            </button>

            <button
              onClick={() => setBillingCycle("anual")}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                billingCycle === "anual"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Anual
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                40% de ahorro 🔥
              </span>
            </button>

          </div>

          {/* Versión Mobile */}
          <div className="sm:hidden w-full overflow-x-auto">
            <div className="flex items-center gap-4 bg-white px-2 py-2 rounded-full shadow-md border border-gray-200 min-w-max">

              <button
                onClick={() => setBillingCycle("mensual")}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  billingCycle === "mensual"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mensual
              </button>

              <button
                onClick={() => setBillingCycle("semianual")}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  billingCycle === "semianual"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>Semestral 🚀</span>
                  <span className="mt-0.5 text-xs font-semibold text-green-700">

                  </span>
                </div>
              </button>

              <button
                onClick={() => setBillingCycle("anual")}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  billingCycle === "anual"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>Anual 🔥</span>
                  <span className="mt-0.5 text-xs font-semibold text-red-700">
                  </span>
                </div>
              </button>

            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid w-full max-w-5xl grid-cols-1 place-items-center gap-6 md:gap-8">
            {pricingData.plans.map((plan) => {
              
              const isMonthly = billingCycle === "mensual"
              const isSemiAnnual = billingCycle === "semianual"
              const isAnnual = billingCycle === "anual"

              let displayedPrice = plan.monthlyPrice[currency]

              if (isSemiAnnual) {
                displayedPrice = plan.semiAnnualPricePerMonth[currency]
              } else if (isAnnual) {
                displayedPrice = plan.annualPricePerMonth[currency]
              }

              const formattedPrice = new Intl.NumberFormat("es-AR").format(displayedPrice)
              const formattedMonthlyPrice = new Intl.NumberFormat("es-AR").format(
                plan.monthlyPrice[currency]
              )

              const whatsappLink = getWhatsAppLink(country, "¡Hola! Quisiera comenzar ahora con mi prueba gratuita.")

              return (
                <Card
                  key={plan.name}
                  className="relative overflow-hidden transition-all border border-gray-900 shadow-md"
                >
                  <CardContent className="flex flex-col gap-8 p-8">

                    <div className="flex flex-col gap-4 -mt-6">
                      
                      {/* Badges - Solo se muestran cuando NO es mensual */}
                      {isSemiAnnual && (
                        <div className="flex justify-start">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                            Recomendado 🚀
                          </span>
                        </div>
                      )}
                      
                      {isAnnual && (
                        <div className="flex justify-start">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                            40% de ahorro 🔥
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col">

                        <div className="flex items-end gap-1">
                          <span className="text-5xl font-bold text-gray-900">
                            {currencySymbol[currency]}{formattedPrice}
                          </span>
                          <span className="text-lg text-gray-600 mb-2">/mes</span>
                        </div>

                        {(isSemiAnnual || isAnnual) && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500 line-through">
                              {currencySymbol[currency]}{formattedMonthlyPrice}/mes
                            </span>
                          </div>
                        )}

                        <span className="text-xs text-gray-500 mt-1">
                          {currencySuffix[currency]}
                        </span>

                        {isSemiAnnual && (
                          <p className="text-xm text-gray-600 mt-2 bg-gray-100 px-3 py-2 rounded-md">
                            💰 Pago Semestral:{" "}
                            {currencySymbol[currency]}
                            {new Intl.NumberFormat("es-AR").format(displayedPrice * 6)}{" "}
                            {currencySuffix[currency]}
                          </p>
                        )}

                        {isAnnual && (
                          <p className="text-xm text-gray-600 mt-2 bg-gray-100 px-3 py-2 rounded-md">
                            💰 Pago anual:{" "}
                            {currencySymbol[currency]}
                            {new Intl.NumberFormat("es-AR").format(displayedPrice * 12)}{" "}
                            {currencySuffix[currency]}
                          </p>
                        )}
                      </div>

                      {/* CTA WhatsApp */}
                      <Button
                        asChild
                        className="w-full font-semibold py-6 transition-all bg-yellow-500 text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
                      >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          Comenzar ahora →
                        </a>
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Incluye:
                      </p>
                      <div className="flex flex-col gap-3">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-gray-900">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="flex-1 text-sm text-gray-700">
                              {feature.name}
                            </span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600 flex-shrink-0" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs bg-gray-900 text-white">
                                  <p>{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        ))}
                      </div>
                    </div>

                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="text-sm text-gray-500 text-center max-w-2xl">
            🎁 <span className="font-semibold">Prueba gratis por 7 días</span> · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  )
}