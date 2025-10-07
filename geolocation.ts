export async function getUserCountry(): Promise<string> {
    try {
      const res = await fetch("https://ipapi.co/json/")
      const text = await res.text() // primero leemos como texto
      try {
        const data = JSON.parse(text) // intentamos parsear JSON
        return data.country_code?.toLowerCase() || "ar"
      } catch {
        console.error("Respuesta no es JSON:", text)
        return "ar" // fallback
      }
    } catch (error) {
      console.error("Error geolocalizando:", error)
      return "ar" // fallback
    }
  }
    