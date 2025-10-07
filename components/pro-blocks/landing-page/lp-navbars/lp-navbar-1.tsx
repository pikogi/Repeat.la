"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCountry } from "@/app/context/CountryContext";

const MENU_ITEMS = [
  { label: "Cómo funciona", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

const NavMenuItems = ({ className }: { className?: string }) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} passHref>
        <Button
          variant="ghost"
          className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black"
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { country } = useCountry();

  const whatsappNumbers: Record<string, string> = {
    mx: "5215543219876",
    ar: "5491150389694",
    us: "1234567890",
  };

  const whatsappMessages: Record<string, string> = {
    mx: "¡Hola! Quiero comenzar mi prueba gratuita desde México.",
    ar: "¡Hola! Quiero comenzar mi prueba gratuita desde Argentina.",
    us: "Hi! I want to start my free trial from the USA.",
  };

  const pruebaGratisLink = `https://wa.me/${whatsappNumbers[country]}?text=${encodeURIComponent(
    whatsappMessages[country]
  )}`;
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6 py-3.5 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <Logo className="w-36 md:w-48 h-auto" />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Button asChild className="text-black bg-yellow-500 hover:text-white">
            <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
              Prueba Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Button asChild className="w-full">
              <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
                Prueba Gratis
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
