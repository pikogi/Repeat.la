import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1"
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2"
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7"
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1"
import { ModernFeatures } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6"
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9"
import { WalletCallout } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4"
import { CustomerDataSection } from "@/components/pro-blocks/landing-page/CustomerDataSection/CustomerDataSection" // <-- import nueva sección
import { Cardsection } from "@/components/pro-blocks/landing-page/card-section/card-section" // <-- import nueva sección
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3"
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2"
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1"

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="Repeat transformó completamente nuestro negocio. Ahora tenemos una base de datos de más de 500 clientes y podemos hacer campañas personalizadas."
        authorName="María González"
        authorRole="Dueña de Café Central"
      />
      <ModernFeatures/>
      <FeatureSection9 />
      <WalletCallout />
      <TestimonialsSection1
        quote="La implementación fue súper rápida y nuestros clientes aman tener la tarjeta en su celular. Ya no se olvidan de traerla."
        authorName="Carlos Martínez"
        authorRole="Gerente de Peluquería Estilo"
      />
      <CustomerDataSection />
      <Cardsection />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  )
}
