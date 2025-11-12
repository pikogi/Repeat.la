"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="relative section-padding-y bg-cover bg-center bg-no-repeat text-white"
      role="contentinfo"
      aria-label="Site footer"
      style={{ backgroundImage: "url('/repeat4.jpg')" }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link href="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link href="#features" className="hover:text-gray-200 transition-colors">
              Cómo funciona
            </Link>
            <Link href="#faq" className="hover:text-gray-200 transition-colors">
              FAQ
            </Link>
            <Link href="#pricing" className="hover:text-gray-200 transition-colors">
              Precios
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <Separator role="presentation" className="bg-white/30" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          
          {/* Copyright */}
          <p className="text-center lg:text-left text-white/80">
            Built with ❤️ in Córdoba.  All rights reserved. 2025.  
            <br/>Contacto: hi@repeat.la
          </p>

          {/* Legal Links */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <Link
              href="#footer"
              target="_blank"
              className="hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#footer"
              target="_blank"
              className="hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#footer"
              target="_blank"
              className="hover:text-gray-200 transition-colors"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
