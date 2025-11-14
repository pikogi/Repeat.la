"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Download, Mail, Loader2 } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface StripeSessionData {
  success: boolean;
  orderNumber: string;
  sessionId: string;
  planName: string;
  billingCycle: string;
  amount: number;
  currency: string;
  customerEmail: string;
  customerName: string;
  paymentStatus: string;
  subscriptionStatus: string;
  date: string;
  nextBillingDate: string | null;
  interval: string;
  intervalCount: number;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  
  const [sessionData, setSessionData] = useState<StripeSessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setError("No se encontró la sesión de pago");
      setLoading(false);
      return;
    }

    // Fetch real data from Stripe
    fetch(`/api/checkout-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSessionData(data);
        } else {
          setError(data.error || "Error al recuperar datos");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Error al cargar los datos del pago");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sessionId]);

  const handleDownloadReceipt = () => {
    if (!sessionData) return;

    const billingText = sessionData.billingCycle === "anual" ? "Anual" : "Mensual";
    const nextBilling = sessionData.nextBillingDate
      ? new Date(sessionData.nextBillingDate).toLocaleDateString("es-AR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "No disponible";

    const receiptContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Recibo - ${sessionData.orderNumber}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #16a34a; padding-bottom: 20px; }
          .header h1 { color: #16a34a; margin: 0; font-size: 32px; }
          .header p { color: #666; margin: 5px 0; }
          .status { background: #16a34a; color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; font-weight: bold; }
          .details { margin: 30px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee; }
          .detail-label { color: #666; font-weight: 500; }
          .detail-value { color: #000; font-weight: 600; }
          .footer { margin-top: 40px; text-align: center; color: #666; font-size: 14px; padding-top: 20px; border-top: 1px solid #eee; }
          .highlight { background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>✓ Recibo de Suscripción</h1>
          <p>Gracias por confiar en nosotros</p>
        </div>
        
        <div style="text-align: center; margin: 20px 0;">
          <span class="status">✓ PAGO CONFIRMADO</span>
        </div>

        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Número de orden:</span>
            <span class="detail-value">#${sessionData.orderNumber}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Plan:</span>
            <span class="detail-value">${sessionData.planName} - ${billingText}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Monto pagado:</span>
            <span class="detail-value">${sessionData.currency} $${sessionData.amount.toFixed(2)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Fecha de compra:</span>
            <span class="detail-value">${new Date(sessionData.date).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Cliente:</span>
            <span class="detail-value">${sessionData.customerName || sessionData.customerEmail}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${sessionData.customerEmail}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Estado de suscripción:</span>
            <span class="detail-value">${sessionData.subscriptionStatus === "active" ? "Activa" : sessionData.subscriptionStatus}</span>
          </div>
        </div>

        <div class="highlight">
          <strong>📅 Próximo cobro:</strong> ${nextBilling}
        </div>

        <div class="footer">
          <p><strong>ID de Sesión:</strong> ${sessionData.sessionId}</p>
          <p style="margin-top: 20px;">Si tienes alguna pregunta, contáctanos en soporte@tuempresa.com</p>
          <p style="margin-top: 10px; font-size: 12px;">Este es un recibo generado automáticamente</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([receiptContent], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `recibo-${sessionData.orderNumber}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Loading state
  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-16 h-16 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Cargando información del pago...</p>
        </motion.div>
      </main>
    );
  }

  // Error state
  if (error || !sessionData) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md text-center"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error || "No se pudo cargar la información"}</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
          >
            Volver al inicio
          </a>
        </motion.div>
      </main>
    );
  }

  const formattedDate = new Date(sessionData.date).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const nextBillingDate = sessionData.nextBillingDate
    ? new Date(sessionData.nextBillingDate).toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-white/20"
      >
        {/* Success icon with animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <CheckCircle2 className="w-24 h-24 text-green-600 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Suscripción exitosa!
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            Tu suscripción al plan <strong>{sessionData.planName}</strong> ha sido confirmada.
            Recibirás un correo en <strong>{sessionData.customerEmail}</strong>
          </p>
        </motion.div>

        {/* Order details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-100"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Detalles de tu suscripción</h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Número de orden</span>
              <span className="font-mono font-semibold text-gray-900">#{sessionData.orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Plan</span>
              <span className="font-semibold text-gray-900">
                {sessionData.planName} - {sessionData.billingCycle === "anual" ? "Anual" : "Mensual"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monto pagado</span>
              <span className="font-semibold text-gray-900">
                {sessionData.currency} ${sessionData.amount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Fecha</span>
              <span className="font-semibold text-gray-900">{formattedDate}</span>
            </div>
            {nextBillingDate && (
              <div className="flex justify-between items-center pt-2 border-t border-green-200">
                <span className="text-gray-600">Próximo cobro</span>
                <span className="font-semibold text-green-700">{nextBillingDate}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estado</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {sessionData.subscriptionStatus === "active" ? "Activa" : "Confirmada"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all"
          >
            Volver al inicio
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={handleDownloadReceipt}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <Download className="w-5 h-5" />
            Descargar recibo
          </motion.button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 pt-6 border-t border-gray-200"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            <p>
              ¿Necesitas ayuda?{" "}
              <a
                href="mailto:soporte@tuempresa.com"
                className="text-green-600 font-medium hover:text-green-700 underline"
              >
                Contáctanos
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating confetti elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-green-400 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: -20,
            opacity: 1,
          }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 20 : 1000,
            opacity: 0,
            rotate: 360,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-16 h-16 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Cargando...</p>
        </motion.div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}