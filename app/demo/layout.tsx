import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Interactiva - Prueba GarBotGPT Gratis | GarBotGPT',
  description: 'Prueba GarBotGPT gratis ahora mismo. Demo interactiva con generación de texto, imágenes, código y análisis de documentos. Sin registro requerido.',
  keywords: [
    'demo GarBotGPT', 'probar IA gratis', 'chatbot demo', 'GPT demo', 'IA online gratis',
    'generador texto IA demo', 'generador imágenes IA demo', 'prueba chatbot'
  ],
  openGraph: {
    title: 'Prueba GarBotGPT Gratis - Demo Interactiva',
    description: 'Experimenta el poder de la IA más avanzada. Genera texto, imágenes y código sin registrarte.',
    url: 'https://garbotgpt.com/demo',
    images: [{ url: '/og-demo.png', width: 1200, height: 630, alt: 'Demo GarBotGPT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo GarBotGPT - Prueba la IA más avanzada',
    description: 'Genera texto, imágenes y código con IA. Prueba gratis sin registro.',
  },
  alternates: { canonical: 'https://garbotgpt.com/demo' },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

