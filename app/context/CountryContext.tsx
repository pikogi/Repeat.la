"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CountryType = "ar" | "mx" | "us";

interface CountryContextType {
  country: CountryType;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<CountryType>("ar"); // fallback AR

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const code = data.country_code?.toLowerCase();
        if (code === "ar" || code === "mx" || code === "us") {
          setCountry(code);
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
  if (!context) throw new Error("useCountry debe usarse dentro de CountryProvider");
  return context;
}
