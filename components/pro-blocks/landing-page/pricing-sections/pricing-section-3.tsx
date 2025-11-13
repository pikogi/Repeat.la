"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info, Sparkles } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"
import { getUserCountry } from "@/geolocation"

const pricingData = {
  plans: [
    {
      name: "Básico",
      description:
        "Perfecto para negocios pequeños que están comenzando con programas de fidelidad.",
      features: [
        { name: "Hasta 100 clientes", tooltip: "Base de datos de hasta 100 clientes activos" },
        { name: "Tarjetas digitales ilimitadas", tooltip: "Tus clientes pueden tener su tarjeta en el celular" },
        { name: "Escaneo QR", tooltip: "Sistema de escaneo rápido y fácil" },
        { name: "Reportes básicos", tooltip: "Estadísticas de uso y clientes" },
      ],
      monthlyPrice: { ar: 20000, mx: 400, us: 20 },
      annualPricePerMonth: { ar: 16.666, mx: 333.33, us: 16.65, },
    },
    {
      name: "Full",
      description:
        "Para negocios en crecimiento que quieren aprovechar al máximo su base de clientes.",
      features: [
        { name: "Clientes ilimitados", tooltip: "Sin límite de clientes en tu base de datos" },
        { name: "Campañas personalizadas", tooltip: "Envía promociones segmentadas por WhatsApp" },
        { name: "Analytics avanzados", tooltip: "Reportes detallados de comportamiento" },
        { name: "Múltiples sucursales", tooltip: "Gestiona varias ubicaciones desde un panel" },
        { name: "Soporte prioritario", tooltip: "Asistencia rápida vía WhatsApp" },
      ],
      monthlyPrice: { ar: 35.000, mx: 700, us: 35 },
      annualPricePerMonth: { ar: 29.166, mx: 583.33, us: 29.16, },
      highlighted: true,
    },
  ],
}

export function PricingSection3() {
  const [billingCycle, setBillingCycle] = useState<"mensual" | "anual">("mensual")
  const [country, setCountry] = useState<"ar" | "mx" | "us">("ar")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const paramCountry = urlParams.get("country")?.toLowerCase()
    if (paramCountry === "ar" || paramCountry === "mx" || paramCountry === "us") {
      setCountry(paramCountry)
    } else {
      getUserCountry().then((c) => {
        if (c === "ar" || c === "mx" || c === "us") setCountry(c)
      })
    }
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

  const currencySymbol: Record<string, string> = { mx: "$", ar: "$", us: "$" }
  const currencySuffix: Record<string, string> = { mx: "MXN", ar: "ARS", us: "USD" }

  // Calcular ahorro porcentual
  const calculateSavings = (plan: typeof pricingData.plans[0]) => {
    const monthlyTotal = plan.monthlyPrice[country] * 12
    const annualTotal = plan.annualPricePerMonth[country] * 12
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
          {/* Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
          <Tagline className="text-red-500 text-lg md:text-xl">
          Precios
        </Tagline>
            <h2 id="pricing-section-title-3" className="heading-lg text-gray-900">
              Planes diseñados para tu negocio
            </h2>
          </div>

          {/* Toggle mensual/anual */}
          <div className="flex items-center gap-3 bg-white px-2 py-2 rounded-full shadow-md border border-gray-200">
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
              onClick={() => setBillingCycle("anual")}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                billingCycle === "anual"
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Anual
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                2 Meses Gratis!
              </span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {pricingData.plans.map((plan, index) => {
              const isAnnual = billingCycle === "anual"
              const displayedPrice = isAnnual
                ? plan.annualPricePerMonth[country]
                : plan.monthlyPrice[country]
              const monthlyPrice = plan.monthlyPrice[country]
              const savings = calculateSavings(plan)

              const formattedPrice = new Intl.NumberFormat("es-AR", {
                minimumFractionDigits: 0,
              }).format(displayedPrice)

              const formattedMonthlyPrice = new Intl.NumberFormat("es-AR", {
                minimumFractionDigits: 0,
              }).format(monthlyPrice)

              const pruebaGratisLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
                whatsappMessages[country]
              )}`

              return (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden transition-all hover:shadow-xl ${
                    plan.highlighted
                      ? "border-3 border-gray-900 shadow-lg md:scale-105  bg-gray-50"
                      : "border border-gray-900 shadow-md"
                  }`}
                >
                  {/* Badge "Más popular" */}
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1 text-xs font-bold uppercase tracking-wide rounded-bl-lg">
                      Más popular
                    </div>
                  )}

                  <CardContent className="flex flex-col gap-8 p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-4 pt-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col">
                        <div className="flex items-end gap-1">
                          <span className="text-5xl font-bold text-gray-900">
                            {currencySymbol[country]}{formattedPrice}
                          </span>
                          <span className="text-lg text-gray-600 mb-2">
                            /mes
                          </span>
                        </div>

                        {/* Precio tachado cuando es anual */}
                        {isAnnual && (
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500 line-through">
                              {currencySymbol[country]}{formattedMonthlyPrice}/mes
                            </span>
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              -{savings}%
                            </span>
                          </div>
                        )}

                        <span className="text-xs text-gray-500 mt-1">
                          {currencySuffix[country]}
                        </span>

                        {isAnnual && (
                          <p className="text-xs text-gray-600 mt-2 bg-gray-100 px-3 py-2 rounded-md">
                            💰 Pago anual: {currencySymbol[country]}
                            {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 0 }).format(displayedPrice * 12)} {currencySuffix[country]}
                          </p>
                        )}
                      </div>

                      {/* CTA */}
                      <Button
                        className={`w-full font-semibold py-6 transition-all ${
                          plan.highlighted
                            ? "bg-black text-white border-2 border-gray-900 hover:bg-yellow-500 hover:text-gray-900 shadow-md hover:shadow-xl"
                            : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-yellow-500 hover:text-gray-900 hover:shadow-lg"
                        }`}
                        asChild
                      >
                        <a
                          href={pruebaGratisLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comenzar ahora →
                        </a>
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        {index === 0
                          ? "Incluye:"
                          : `Todo lo de ${pricingData.plans[index - 1].name}, más:`}
                      </p>
                      <div className="flex flex-col gap-3">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                plan.highlighted ? "bg-gray-900" : "bg-gray-900"
                              }`}
                            >
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

          {/* Footer text */}
          <p className="text-sm text-gray-500 text-center max-w-2xl">
            🎁 <span className="font-semibold">Prueba gratis por 7 días</span> · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  )
}