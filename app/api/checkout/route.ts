import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(req: Request) {
  const { priceId, planName, billingCycle } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      // Agregar metadata para tener info adicional
      metadata: {
        plan_name: planName,
        billing_cycle: billingCycle,
      },
      subscription_data: {
        metadata: {
          plan_name: planName,
          billing_cycle: billingCycle,
        }
      }
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error("Error al crear sesión de Stripe:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}