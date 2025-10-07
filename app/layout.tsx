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
    icon: "/repeatlogo.png",
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
