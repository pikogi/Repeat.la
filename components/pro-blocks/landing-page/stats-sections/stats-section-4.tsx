"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Repeat en acción</Tagline>
            <h2 className="heading-lg text-foreground">Personaliza tu club con tu identidad</h2>
            <p className="text-muted-foreground">
              Único, estético y claro. Diseña tu programa de fidelización a tu medida.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Sin tarjetas físicas</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">100%</span>

                <p className="text-muted-foreground text-base">
                  Digital. Todo en la billetera virtual de tus clientes con Apple y Google Wallet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Configuración</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">5 min</span>
                <p className="text-muted-foreground text-base">
                  Tu club de fidelidad listo en minutos. Sin complicaciones técnicas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Retención</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">+80%</span>
                <p className="text-muted-foreground text-base">
                  Aumenta la retención de clientes con un programa de fidelización efectivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
