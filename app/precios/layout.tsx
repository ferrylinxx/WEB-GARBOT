import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios y Planes - 100% Gratis | GarBotGPT',
  description: 'GarBotGPT es 100% gratis. Accede a generación de texto ilimitada, imágenes, videos, análisis de documentos y código. Sin tarjeta de crédito.',
  keywords: [
    'precios GarBotGPT', 'planes GarBotGPT', 'IA gratis', 'chatbot gratis', 'GPT gratis',
    'alternativa ChatGPT gratis', 'generador texto gratis', 'generador imágenes gratis', 'IA sin coste'
  ],
  openGraph: {
    title: 'GarBotGPT - 100% Gratis | Precios y Planes',
    description: 'Accede a toda la potencia de la IA sin pagar nada. Plan Free con generación ilimitada de texto.',
    url: 'https://garbotgpt.com/precios',
    images: [{ url: '/og-pricing.png', width: 1200, height: 630, alt: 'Precios GarBotGPT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GarBotGPT Gratis - Planes y Precios',
    description: 'IA avanzada sin coste. Texto ilimitado, imágenes, videos y código.',
  },
  alternates: { canonical: 'https://garbotgpt.com/precios' },
}

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

