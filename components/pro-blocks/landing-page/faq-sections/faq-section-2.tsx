"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { useCountry } from "@/app/context/CountryContext";

export function FaqSection2() {
  const { country } = useCountry(); // "ar" | "mx" | "us"

  const whatsappNumbers: Record<string, string> = {
    mx: "5215543219876",
    ar: "5491150389694",
    us: "1234567890",
  };

  const whatsappMessages: Record<string, string> = {
    mx: "¡Hola! Quiero agendar una demo desde México.",
    ar: "¡Hola! Quiero agendar una demo desde Argentina.",
    us: "Hi! I want to schedule a demo from USA.",
  };

  const contactoLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
    whatsappMessages[country]
  )}`;

  return (
    <section className="bg-gray-100 section-padding-y border-b text-black" aria-labelledby="faq-heading" id="faq">
      <div className="container-padding-x container mx-auto md:text-lg">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline className="text-black">FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-black">
              Preguntas frecuentes
            </h1>
            {/* Section Description */}
            <p className="text-black">
              ¿Quieres agendar una demo? Contáctanos por WhatsApp y en breve nuestro equipo se pondrá en contacto contigo.{" "}
              <Link
                href={contactoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                Contáctanos
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8 text-black">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-black text-lg font-semibold md:text-xl">General</h2>
              {/* FAQ Accordion */}
              <Accordion type="single" collapsible aria-label="General FAQ items">
                {/* FAQ Items */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-black">
                    ¿Cómo funciona el programa de fidelización?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Es muy simple: expones el código QR en tu local, los clientes lo escanean y descargan su tarjeta de
                    fidelidad digital en Apple Wallet o Google Wallet. Cada vez que visitan tu negocio, presentan la
                    tarjeta virtual y acumulan sellos hasta ganar su premio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-black">¿Necesito tarjetas físicas?</AccordionTrigger>
                  <AccordionContent className="text-black">
                    No, Repeat es 100% digital. Los clientes guardan su tarjeta de fidelidad directamente en su
                    billetera virtual (Apple Wallet o Google Wallet). Esto elimina costos de impresión y es más
                    conveniente para tus clientes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-black">¿Puedo personalizar mi programa?</AccordionTrigger>
                  <AccordionContent className="text-black">
                    Sí, puedes personalizar completamente tu programa de fidelización con tu logo, colores de marca,
                    cantidad de sellos necesarios y el premio que ofreces. Todo se adapta a tu identidad de marca.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-black">¿Qué datos obtengo de mis clientes?</AccordionTrigger>
                  <AccordionContent className="text-black">
                    Tendrás acceso a un panel de control con información valiosa: correo electrónico, WhatsApp, fecha de
                    cumpleaños, cantidad de sellos obtenidos y frecuencia de visitas. Esto te permite crear campañas de
                    marketing personalizadas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing FAQ Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-lg font-semibold md:text-xl">Precios</h2>
              <Accordion type="single" collapsible aria-label="Billing FAQ items">
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left text-black">
                    ¿Cómo funciona la prueba gratuita?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                  Ofrecemos 7 días de prueba gratuita. Durante este período tendrás acceso completo a todas las funcionalidades de Repeat para que puedas probar el sistema con tus clientes reales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left text-black">¿Cuánto tiempo toma implementarlo?</AccordionTrigger>
                  <AccordionContent className="text-black">
                  Nuestro equipo se encarga de crear tu cuenta para tu prueba gratuita de 7 dias. Vamos a solicitar algunos datos para crear tu cuenta y en 24 horas estará lista! Te enviaremos los accesos junto con un QR para imprimir y poner en tu local para comenzar a conseguir miembros en tu club.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left text-black">¿Hay límite de clientes?</AccordionTrigger>
                  <AccordionContent className="text-black">
                    No hay límite en la cantidad de clientes que pueden unirse a tu programa de fidelización. Puedes
                    tener tantos miembros como desees sin costos adicionales por usuario.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left text-black">¿Ofrecen soporte técnico?</AccordionTrigger>
                  <AccordionContent className="text-black">
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
  );
}
