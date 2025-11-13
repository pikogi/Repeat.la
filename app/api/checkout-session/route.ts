import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get("session_id")

  if (!sessionId) {
    return NextResponse.json(
      { error: "No se proporcionó session_id" },
      { status: 400 }
    )
  }

  try {
    // Recuperar la sesión de checkout
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product', 'subscription']
    })

    // Obtener el producto y precio
    const lineItem = session.line_items?.data[0]
    const product = lineItem?.price?.product as Stripe.Product
    const price = lineItem?.price

    // Calcular próxima fecha de cobro
    const subscription = session.subscription as Stripe.Subscription
    const nextBillingDate = subscription?.current_period_end 
      ? new Date(subscription.current_period_end * 1000) 
      : null

    return NextResponse.json({
      success: true,
      orderNumber: session.id.slice(-8).toUpperCase(),
      sessionId: session.id,
      planName: session.metadata?.plan_name || product?.name || "Plan",
      billingCycle: session.metadata?.billing_cycle || "mensual",
      amount: (session.amount_total || 0) / 100,
      currency: (session.currency || "usd").toUpperCase(),
      customerEmail: session.customer_details?.email || "",
      customerName: session.customer_details?.name || "",
      paymentStatus: session.payment_status,
      subscriptionStatus: subscription?.status || "active",
      date: new Date(session.created * 1000).toISOString(),
      nextBillingDate: nextBillingDate?.toISOString() || null,
      interval: price?.recurring?.interval || "month",
      intervalCount: price?.recurring?.interval_count || 1,
    })
  } catch (err: any) {
    console.error("Error al recuperar sesión de Stripe:", err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}