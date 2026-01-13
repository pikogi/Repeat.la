"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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

const NavMenuItems = ({
  className,
  isMobile = false,
}: {
  className?: string;
  isMobile?: boolean;
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const isExternal = (url: string) => url.startsWith("http");

  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map((item) => {
        const { label } = item;
        if (isMobile && label === "Iniciar Sesión") return null;

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
                className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black flex items-center gap-1"
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
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black"
                  >
                    {label}
                  </Button>
                </Link>
              ) : (
                <Link href={href}>
                  <Button
                    variant="ghost"
                    className="w-full md:w-auto text-white hover:bg-yellow-500 hover:text-black"
                  >
                    {label}
                  </Button>
                </Link>
              )
            ) : null}

            {/* Desktop submenu */}
            {!isMobile && submenu && isOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-black/90 rounded-lg shadow-lg z-50 flex flex-col animate-fade-in">
                {submenu.map((item) =>
                  isExternal(item.href) ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        className="justify-start text-white hover:bg-yellow-500 hover:text-black w-full"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ) : (
                    <Link key={item.label} href={item.href}>
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

            {/* Mobile submenu */}
            {isMobile && submenu && isOpen && (
              <div className="flex flex-col items-center mt-1 space-y-1 pl-4 bg-black/80 rounded-md animate-slide-down">
                {submenu.map((item) =>
                  isExternal(item.href) ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="ghost" className="justify-center text-yellow-500 w-full">
                        {item.label}
                      </Button>
                    </Link>
                  ) : (
                    <Link key={item.label} href={item.href}>
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

  const selectedCountry = ["mx", "ar"].includes(country) ? country : "mx";

  const whatsappNumbers: Record<string, string> = {
    mx: "5215543219876",
    ar: "5491150389694",
  };

  const whatsappMessages: Record<string, string> = {
    mx: "¡Hola! Quiero comenzar mi prueba gratuita.",
    ar: "¡Hola! Quiero comenzar mi prueba gratuita.",
  };

  const pruebaGratisLink = `https://wa.me/${whatsappNumbers[selectedCountry]}?text=${encodeURIComponent(
    whatsappMessages[selectedCountry]
  )}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 flex justify-center transition-all duration-500">
      <div
        className={`flex items-center justify-between gap-2 sm:gap-4 w-[92%] max-w-7xl px-4 py-[12px] md:py-5 md:px-6 transition-all duration-500 ${
          scrolled
            ? "bg-black border-neutral-800 shadow-lg rounded-xl lg:rounded-full"
            : "bg-transparent rounded-xl lg:rounded-full"
        }`}
      >
        <Link href="/">
          <Logo className="w-25 h-auto md:w-32" />
        </Link>

        <div className="hidden flex-1 justify-end lg:flex">
          <NavMenuItems />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            className="hidden min-[360px]:block bg-yellow-500 hover:bg-yellow-600 text-black rounded-full px-4 py-2.5 md:py-2 text-xs sm:text-sm font-medium shadow-md transition-all"
          >
            <a href={pruebaGratisLink} target="_blank" rel="noopener noreferrer">
              Prueba Gratis →
            </a>
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menú móvil"
            className="relative flex size-10 items-center justify-center rounded-full border border-neutral-700"
          >
            <span
              className={`absolute left-1/2 top-[13px] h-[2px] w-4 -translate-x-1/2 rounded-full bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute bottom-[13px] left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-full z-10 mt-2 rounded-b-2xl border-t-0 border border-neutral-800 bg-black shadow-md animate-slide-down">
          <nav className="flex-1 items-center justify-center">
            <div className="flex flex-col px-4 py-4">
              <NavMenuItems isMobile />
            </div>
            <div className="m-4 mx-auto mt-6 max-w-fit sm:hidden">
              <Button
                asChild
                className="rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-[22px] py-[14px] text-sm font-medium font-bold"
              >
                <a href="https://app.repeat.la/auth/login" target="_blank" rel="noopener noreferrer">
                  Iniciar Sesión
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}

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
