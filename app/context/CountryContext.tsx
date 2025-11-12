"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CountryType = "ar" | "mx" | "us";
interface CountryContextType {
  country: CountryType;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<CountryType>("ar"); // valor por defecto

  useEffect(() => {
    // 1️⃣ Intentar recuperar de localStorage
    const localData = localStorage.getItem("userCountry");
    if (localData) {
      setCountry(localData as CountryType);
      return;
    }

    // 2️⃣ Intentar recuperar de cookie (set por el middleware)
    const cookieCountry = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userCountry="))
      ?.split("=")[1];

    if (cookieCountry) {
      setCountry(cookieCountry as CountryType);
      localStorage.setItem("userCountry", cookieCountry);
      return;
    }

    // 3️⃣ Si no hay cookie ni localStorage, llamar a la API
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const code = data.country_code?.toLowerCase();
        if (code === "ar" || code === "mx" || code === "us") {
          setCountry(code);
          localStorage.setItem("userCountry", code);
        }
      } catch (err) {
        console.error("Error geolocalizando:", err);
      }
    };

    fetchCountry();
  }, []);

  return (
    <CountryContext.Provider value={{ country }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context)
    throw new Error("useCountry debe usarse dentro de CountryProvider");
  return context;
}
