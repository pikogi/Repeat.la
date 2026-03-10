export type WhatsAppCountry = "mx" | "ar" | "us"

export const WHATSAPP_NUMBERS: Record<WhatsAppCountry, string> = {
  mx: "5215543219876",
  ar: "5491150389694",
  us: "5215543219876", // fallback MX hasta tener número propio
}

export const WHATSAPP_MESSAGE = "¡Hola! Quiero comenzar mi prueba gratuita."

export function getWhatsAppCountry(country: string): WhatsAppCountry {
  if (country === "ar") return "ar"
  if (country === "us") return "us"
  return "mx"
}

export function getWhatsAppLink(country: string, message?: string): string {
  const whatsappCountry = getWhatsAppCountry(country)
  const text = message ?? WHATSAPP_MESSAGE
  return `https://wa.me/${WHATSAPP_NUMBERS[whatsappCountry]}?text=${encodeURIComponent(text)}`
}
