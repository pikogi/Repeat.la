import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { CountryProvider } from "./context/CountryContext"; // importa el provider

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Repeat",
  description: "Repeat what your clients love!",
  icons: {
    icon: [
      { url: "/repeat-logo-negro-32.png", sizes: "32x32", type: "image/png" },
      { url: "/repeat-logo-negro-192.png", sizes: "192x192", type: "image/png" },
      { url: "/repeat-logo-negro-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          <CountryProvider>
            {children}
          </CountryProvider>
        </body>
      </html>
    </>
  );
}
