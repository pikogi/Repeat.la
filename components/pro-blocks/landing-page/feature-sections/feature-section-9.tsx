"use client"

import { QrCode, Smartphone, Gift, Database } from "lucide-react"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function FeatureSection9() {
  return (
    <section className="bg-secondary section-padding-y border-b" id="how-it-works">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Cómo funciona</Tagline>
          <h2 className="heading-lg text-foreground">Junta 5 sellos y gana un premio GRATIS</h2>
          <p className="text-muted-foreground text-base">Tu programa de fidelización digital en 4 simples pasos</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <QrCode className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Expone el QR</h3>
              <p className="text-muted-foreground">Coloca el código QR de tu Club de Fidelidad en tu local</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Smartphone className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Escanean</h3>
              <p className="text-muted-foreground">
                Los clientes escanean el QR y descargan la tarjeta en su billetera virtual
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Gift className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Acumulan</h3>
              <p className="text-muted-foreground">
                Presentan su tarjeta virtual cada vez que visitan hasta ganar su premio
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Database className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Datos</h3>
              <p className="text-muted-foreground">Accede a todos los datos de tus clientes en un solo lugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
