"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Tagline } from "@/components/pro-blocks/landing-page/tagline"

export function FaqSection2() {
  return (
    <section className="bg-background section-padding-y border-b" aria-labelledby="faq-heading" id="faq">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Preguntas frecuentes
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              ¿Quieres agendar una demo? Completa el formulario y en breve nuestro equipo se pondrá en contacto contigo.{" "}
              <Link href="https://wa.me/+5493517881653" className="text-primary underline">
                Contáctanos
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">General</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="General FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">¿Cómo funciona el programa de fidelización?</AccordionTrigger>
                  <AccordionContent>
                    Es muy simple: expones el código QR en tu local, los clientes lo escanean y descargan su tarjeta de
                    fidelidad digital en Apple Wallet o Google Wallet. Cada vez que visitan tu negocio, presentan la
                    tarjeta virtual y acumulan sellos hasta ganar su premio.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">¿Necesito tarjetas físicas?</AccordionTrigger>
                  <AccordionContent>
                    No, Repeat es 100% digital. Los clientes guardan su tarjeta de fidelidad directamente en su
                    billetera virtual (Apple Wallet o Google Wallet). Esto elimina costos de impresión y es más
                    conveniente para tus clientes.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">¿Puedo personalizar mi programa?</AccordionTrigger>
                  <AccordionContent>
                    Sí, puedes personalizar completamente tu programa de fidelización con tu logo, colores de marca,
                    cantidad de sellos necesarios y el premio que ofreces. Todo se adapta a tu identidad de marca.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">¿Qué datos obtengo de mis clientes?</AccordionTrigger>
                  <AccordionContent>
                    Tendrás acceso a un panel de control con información valiosa: correo electrónico, WhatsApp, fecha de
                    cumpleaños, cantidad de sellos obtenidos y frecuencia de visitas. Esto te permite crear campañas de
                    marketing personalizadas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">Precios</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="Billing FAQ items">
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">¿Cómo funciona la prueba gratuita?</AccordionTrigger>
                  <AccordionContent>
                    Puedes comenzar con una prueba gratuita sin necesidad de tarjeta de crédito. Durante este período
                    tendrás acceso completo a todas las funcionalidades de Repeat para que puedas probar el sistema con
                    tus clientes reales.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">¿Cuánto tiempo toma implementarlo?</AccordionTrigger>
                  <AccordionContent>
                    La configuración toma aproximadamente 5 minutos. Solo necesitas personalizar tu tarjeta con tu
                    marca, imprimir el código QR y colocarlo en tu local. Nuestro equipo te guía en todo el proceso.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">¿Hay límite de clientes?</AccordionTrigger>
                  <AccordionContent>
                    No hay límite en la cantidad de clientes que pueden unirse a tu programa de fidelización. Puedes
                    tener tantos miembros como desees sin costos adicionales por usuario.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">¿Ofrecen soporte técnico?</AccordionTrigger>
                  <AccordionContent>
                    Sí, nuestro equipo de expertos está disponible para ayudarte con cualquier duda o problema. Puedes
                    contactarnos por WhatsApp, email o agendar una demo personalizada para tu negocio.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
