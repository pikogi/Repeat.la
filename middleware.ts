import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "8.8.8.8"; // fallback si estás en local

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    const countryCode = data.country_code?.toLowerCase() || "us";

    const response = NextResponse.next();
    response.cookies.set("userCountry", countryCode, { path: "/" });
    return response;
  } catch (error) {
    console.error("Error geolocalizando:", error);
    const response = NextResponse.next();
    response.cookies.set("userCountry", "us", { path: "/" });
    return response;
  }
}
