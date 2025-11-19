"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { ModernFeatures } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { WalletCallout } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { CustomerDataSection } from "@/components/pro-blocks/landing-page/CustomerDataSection/CustomerDataSection";
import { Cardsection } from "@/components/pro-blocks/landing-page/card-section/card-section";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Page() {
  return (
    <main className="bg-white">
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />

      <TestimonialsSection1
        quote="Repeat transformó completamente nuestro negocio. Ahora tenemos una base de datos de más de 500 clientes y podemos hacer campañas personalizadas."
        authorName="Guadalupe Montero"
        authorRole="Cafe Moon"
      />

      {/* ✅ Animadas con componente */}
      <AnimatedSection className="bg-gray-50">
        <ModernFeatures />
      </AnimatedSection>

      <FeatureSection9 />

      <AnimatedSection className="bg-white">
        <WalletCallout />
      </AnimatedSection>

      <TestimonialsSection1
        quote="La implementación fue súper rápida y nuestros clientes aman tener la tarjeta en su celular. Ya no se olvidan de traerla."
        authorName="Gaston Barreto"
        authorRole="Barberia Gaherba"
      />

      <AnimatedSection className="bg-gray-50">
        <CustomerDataSection />
      </AnimatedSection>


        <Cardsection />


      <AnimatedSection className="bg-gray-50">
        <PricingSection3 />
      </AnimatedSection>

      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
