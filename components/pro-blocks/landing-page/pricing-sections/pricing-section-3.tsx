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
      monthlyPrice: { ar: 4000, mx: 499, us: 19 },
      annualPricePerMonth: { ar: 3333, mx: 420, us: 16 },
    },
    {
      name: "Pro",
      description:
        "Para negocios en crecimiento que quieren aprovechar al máximo su base de clientes.",
      features: [
        { name: "Clientes ilimitados", tooltip: "Sin límite de clientes en tu base de datos" },
        { name: "Campañas personalizadas", tooltip: "Envía promociones segmentadas por WhatsApp" },
        { name: "Analytics avanzados", tooltip: "Reportes detallados de comportamiento" },
        { name: "Múltiples sucursales", tooltip: "Gestiona varias ubicaciones desde un panel" },
        { name: "Soporte prioritario", tooltip: "Asistencia rápida vía WhatsApp" },
      ],
      monthlyPrice: { ar: 6500, mx: 899, us: 25 },
      annualPricePerMonth: { ar: 5416, mx: 749, us: 20 },
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
  };

const pruebaGratisLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
  whatsappMessages[country]
)}`;


  const currencySymbol: Record<string, string> = { mx: "$", ar: "$", us: "$" }
  const currencySuffix: Record<string, string> = { mx: "MXN", ar: "ARS", us: "USD" }

  
  return (
    <section
      className="bg-white text-black section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline className="text-red-500 text-lg md:text-xl">Precios</Tagline>
            <h2 id="pricing-section-title-3" className="heading-lg text-black">
              Planes diseñados para tu negocio
            </h2>
          </div>

          {/* Toggle mensual/anual */}
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-300">
            <button
              onClick={() => setBillingCycle("mensual")}
              className={`px-4 py-1 rounded-full font-medium transition-all ${
                billingCycle === "mensual"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("anual")}
              className={`px-4 py-1 rounded-full font-medium transition-all ${
                billingCycle === "anual"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Anual <span className="text-green-600 font-semibold text-sm">(2 meses gratis)</span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="flex w-full flex-col items-center gap-4 md:max-w-3xl md:flex-row md:gap-0">
            {pricingData.plans.map((plan, index) => {
              const isAnnual = billingCycle === "anual"
              const displayedPrice = isAnnual
                ? plan.annualPricePerMonth[country]
                : plan.monthlyPrice[country]
              const periodText = isAnnual
                ? `/mes`
                : `/mes`

              const formattedPrice = new Intl.NumberFormat("es-AR", {
                style: "decimal",
                minimumFractionDigits: 0,
              }).format(displayedPrice)

              return (
                <Card
                  key={plan.name}
                  className={`p-6 shadow-none sm:p-12 border-yellow-500 bg-yellow-500 ${
                    plan.highlighted
                      ? "shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)] md:rounded-xl"
                      : "md:rounded-xl"
                  }`}
                >
                  <CardContent className="flex flex-col gap-8 p-0 text-black">
                    {/* Header */}
                    <div className="flex flex-col gap-6">
                      <div className="relative flex flex-col gap-3">
                        <h3
                          className={`text-lg font-semibold ${
                            plan.highlighted ? "text-primary" : "text-black"
                          }`}
                        >
                          {plan.name}
                        </h3>
                        <p className="text-sm text-black">{plan.description}</p>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col text-black">
                        <div className="flex items-end gap-0.5">
                          <span className="text-4xl font-semibold">
                            {currencySymbol[country]}{formattedPrice}
                          </span>
                          <span className="text-base ml-1">{periodText} {currencySuffix[country]}</span>
                        </div>
                        {isAnnual && (
                          <p className="text-xs text-gray-700 mt-1">
                            Pago total: {currencySymbol[country]}
                            {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 0 }).format(displayedPrice*12)} {currencySuffix[country]}/año
                          </p>
                        )}
                      </div>

                      {/* CTA */}
                      {/* CTA */}
<Button
  className="w-full bg-black text-white border border-black hover:bg-white hover:text-black"
  asChild
>
  <a
    href={pruebaGratisLink} // <-- usar la variable correcta
    target="_blank"
    rel="noopener noreferrer"
  >
    Comenzar ahora
  </a>
</Button>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-4 text-black">
                      <p className="text-sm font-medium">
                        {index === 0
                          ? "Qué incluye:"
                          : `Todo lo de ${pricingData.plans[index - 1].name}, más:`}
                      </p>
                      <div className="flex flex-col gap-4">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="flex-1 text-sm text-black">{feature.name}</span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="h-4 w-4 cursor-pointer text-black opacity-70 hover:opacity-100" />
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs text-white">
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
        </div>
      </div>
    </section>
  )
}
