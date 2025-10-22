"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCountry } from "@/app/context/CountryContext";

const MENU_ITEMS = [
  {
    label: "Servicios",
    submenu: [
      { label: "Club de Lealtad", href: "https://repeat-la.vercel.app/" },
      { label: "Encuesta de Satisfacción", href: "https://www.repeat.la/home" },
      { label: "Catálogo", href: "https://www.repeat.la/menu-online" },
    ],
  },
  { label: "Cómo funciona", href: "#features" },
  { label: "Precios", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Iniciar Sesión", href: "https://app.repeat.la/auth/login" },
] as const;

const NavMenuItems = ({ className, isMobile = false }: { className?: string; isMobile?: boolean }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isExternal = (url: string) => url.startsWith("http");

  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map((item) => {
        const { label } = item;
        const href = "href" in item ? item.href : undefined;
        const submenu = "submenu" in item ? item.submenu : undefined;
        const isOpen = openSubmenu === label;

        return (
          <div
            key={label}
            className={`relative ${!isMobile ? "group" : ""}`}
            onMouseEnter={() => !isMobile && submenu && setOpenSubmenu(label)}
            onMouseLeave={() => !isMobile && submenu && setOpenSubmenu(null)}
          >
            {submenu ? (
              <Button
                variant="ghost"
                className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black flex items-center justify-center gap-1"
                onClick={() => setOpenSubmenu(isOpen ? null : label)}
              >
                {label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </Button>
            ) : href ? (
              isExternal(href) ? (
                <Link href={href} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black"
                    >
                      {label}
                    </Button>
                  </a>
                </Link>
              ) : (
                <Link href={href} passHref>
                  <Button
                    variant="ghost"
                    className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black"
                  >
                    {label}
                  </Button>
                </Link>
              )
            ) : null}

            {/* Submenú Desktop */}
            {!isMobile && submenu && isOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-black/90 rounded-lg shadow-lg z-50 flex flex-col animate-fade-in">
                {submenu.map((item) =>
                  isExternal(item.href) ? (
                    <Link key={item.label} href={item.href} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          className="justify-start text-white hover:bg-yellow-500 hover:text-black w-full"
                        >
                          {item.label}
                        </Button>
                      </a>
                    </Link>
                  ) : (
                    <Link key={item.label} href={item.href} passHref>
                      <Button
                        variant="ghost"
                        className="justify-start text-white hover:bg-yellow-500 hover:text-black w-full"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )
                )}
              </div>
            )}

            {/* Submenú Mobile (acordeón) */}
            {isMobile && submenu && isOpen && (
              <div className="flex flex-col items-center mt-1 space-y-1 pl-4 bg-black/80 rounded-md animate-slide-down">
                {submenu.map((item) =>
                  isExternal(item.href) ? (
                    <Link key={item.label} href={item.href} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="ghost" className="justify-start text-yellow-500 w-full">
                          {item.label}
                        </Button>
                      </a>
                    </Link>
                  ) : (
                    <Link key={item.label} href={item.href} passHref>
                      <Button variant="ghost" className="justify-start text-yellow-500 w-full">
                        {item.label}
                      </Button>
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

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
        scrolled || isMenuOpen ? "bg-black backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6 py-3.5 md:py-4">
        {/* Logo + toggle */}
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
          <Button asChild className="text-black bg-yellow-500 hover:bg-yellow-500 hover:text-black">
            <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
              Prueba Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-2 pb-2.5 md:hidden">
            <NavMenuItems isMobile />
            <Button asChild className="w-full mt-2">
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

/* Animaciones suaves */
<style jsx global>{`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.2s ease-out forwards;
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 300px;
    }
  }
  .animate-slide-down {
    animation: slide-down 0.25s ease-out forwards;
  }
`}</style>
