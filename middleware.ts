import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Si ya tenemos cookie, no llamamos a la API
  const existingCountry = req.cookies.get("userCountry")?.value;
  if (existingCountry) {
    return NextResponse.next();
  }

  // Obtenemos IP (según entorno)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "8.8.8.8";

  try {
    // Llamada a ipapi solo si no hay cookie previa
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    const countryCode = data.country_code?.toLowerCase() || "us";

    const response = NextResponse.next();
    // Guardamos cookie por 1 día
    response.cookies.set("userCountry", countryCode, {
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("Error geolocalizando:", error);

    const response = NextResponse.next();
    response.cookies.set("userCountry", "us", { path: "/", maxAge: 60 * 60 * 24 });
    return response;
  }
}
