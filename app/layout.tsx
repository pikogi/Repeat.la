import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { CountryProvider } from "./context/CountryContext";
import Script from "next/script";
import PageWithLoader from "@/components/page-loader"; // 👈 Importa el loader

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VBQWCS8');
          `}
        </Script>
        {/* Fin Google Tag Manager */}
      </head>

      <body className={`${onest.variable} relative antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VBQWCS8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <CountryProvider>
          <PageWithLoader>
            {children}
          </PageWithLoader>
        </CountryProvider>
      </body>
    </html>
  );
}