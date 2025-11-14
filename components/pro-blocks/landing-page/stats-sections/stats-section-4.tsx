"use client"

import Image from "next/image"
import Link from "next/link"

export function WalletCallout() {
  return (
    <section className="bg-white section-padding-y border-b">
      <div className="container-padding-x container mx-auto flex flex-col items-center text-center gap-10 md:gap-12">
        <h1 className="text-black text-4xl md:text-5xl font-bold">
          Sin necesidad de tarjetas físicas 🚀
        </h1>
        <p className="text-black text-lg md:text-xl">
          Integrado con Apple y Google Wallet 📲
        </p>
        <p className="text-black text-lg md:text-xl border-2 border-black px-4 py-2 rounded-lg inline-block">
          ¡Descarga ahora la tuya y probala en tu teléfono! 👇
        </p>

        <div className="flex gap-6 items-center">
          <Link
            href="https://app.repeat.la/tester-restaurant/pos/61c0658be9d8960ab9e789cd/promo/6827f2f4fc2905dab9c7c95f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/apple.png"
              alt="Apple Wallet"
              width={192}
              height={64}
              className="w-40 md:w-48 h-auto animate-bounce-slow"
            />
          </Link>
          <Link
            href="https://app.repeat.la/cafe-moon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/google.png"
              alt="Google Wallet"
              width={192}
              height={64}
              className="w-40 md:w-48 h-auto object-contain animate-bounce-slow"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
