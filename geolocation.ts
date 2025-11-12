export async function getUserCountry(req?: Request): Promise<string> {
  try {
    // 1️⃣ Si estamos en un entorno con request (ej: middleware o route handler)
    if (req) {
      const cookieHeader = req.headers.get("cookie");
      if (cookieHeader) {
        const cookieCountry = cookieHeader
          .split("; ")
          .find((row) => row.startsWith("userCountry="))
          ?.split("=")[1];
        if (cookieCountry) return cookieCountry.toLowerCase();
      }
    }

    // 2️⃣ Si no hay cookie, llamamos a la API (solo una vez)
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const country = data.country_code?.toLowerCase() || "ar";
    return country;
  } catch (error) {
    console.error("Error geolocalizando:", error);
    return "ar"; // fallback
  }
}
