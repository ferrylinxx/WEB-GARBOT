import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Características - Funciones de IA Avanzadas | GarBotGPT',
  description: 'Descubre todas las características de GarBotGPT: generación de texto, imágenes y videos con IA, análisis de documentos, código automático, búsqueda web en tiempo real y más.',
  keywords: [
    'características GarBotGPT', 'funciones IA', 'generación texto IA', 'generación imágenes IA',
    'generación videos IA', 'análisis documentos', 'código automático', 'GPT-5', 'IA avanzada',
    'herramientas productividad IA', 'automatización inteligente'
  ],
  openGraph: {
    title: 'Características de GarBotGPT - IA de Nueva Generación',
    description: 'Texto, imágenes, videos, código, análisis de documentos y más. Descubre todas las funciones de GarBotGPT.',
    url: 'https://garbotgpt.com/caracteristicas',
    images: [{ url: '/og-features.png', width: 1200, height: 630, alt: 'Características GarBotGPT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Características GarBotGPT - Todas las funciones de IA',
    description: 'Genera texto, imágenes, videos, código y analiza documentos con la IA más avanzada.',
  },
  alternates: { canonical: 'https://garbotgpt.com/caracteristicas' },
}

export default function CaracteristicasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

