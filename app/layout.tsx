import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import SmoothScroll from '@/components/SmoothScroll'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://garbotgpt.com'),
  title: {
    default: 'GarBotGPT - Asistente de IA Avanzado 24/7',
    template: '%s | GarBotGPT'
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  description: 'Asistente de IA 24/7. Genera texto, imágenes y videos, analiza documentos, programa código y automatiza tareas. 100% Gratis. Prueba ahora.',
  keywords: [
    // Términos principales de IA
    'inteligencia artificial',
    'IA',
    'artificial intelligence',
    'AI',
    'asistente virtual',
    'asistente IA',
    'chatbot IA',
    'chatbot inteligente',
    'GPT',
    'GPT-4',
    'GarBotGPT',
    'GarBot',

    // Generación de contenido
    'generación de texto',
    'generación de texto IA',
    'crear texto con IA',
    'escribir con IA',
    'redacción automática',
    'generación de contenido',
    'creación de contenido IA',
    'generación de imágenes IA',
    'crear imágenes con IA',
    'generación de videos IA',
    'crear videos con IA',
    'generación de código',
    'programación con IA',
    'código automático',
    'asistente de programación',

    // Análisis y procesamiento
    'análisis de documentos',
    'análisis PDF',
    'análisis Word',
    'análisis Excel',
    'procesamiento de documentos',
    'extracción de datos',
    'procesamiento lenguaje natural',
    'NLP',
    'PLN',
    'comprensión de texto',
    'análisis de datos',
    'análisis de datos IA',

    // Tecnologías y conceptos
    'machine learning',
    'aprendizaje automático',
    'deep learning',
    'aprendizaje profundo',
    'redes neuronales',
    'neural networks',
    'IA conversacional',
    'IA generativa',
    'generative AI',
    'large language model',
    'LLM',
    'modelo de lenguaje',
    'transformer',

    // Funcionalidades específicas
    'búsqueda web inteligente',
    'búsqueda con IA',
    'transcripción de voz',
    'voz a texto',
    'speech to text',
    'exportación documentos',
    'exportar PDF',
    'exportar Word',
    'automatización IA',
    'automatización de tareas',
    'automatización inteligente',
    'RPA con IA',

    // Idiomas y localización
    'IA en español',
    'chatbot español',
    'asistente español',
    'IA español',
    'ChatGPT español',
    'GPT en español',
    'IA multilingüe',
    'traducción IA',

    // Casos de uso y sectores
    'IA para empresas',
    'IA para negocios',
    'IA corporativa',
    'IA educación',
    'IA marketing',
    'IA ventas',
    'IA atención al cliente',
    'IA recursos humanos',
    'IA finanzas',
    'IA legal',
    'IA salud',
    'IA e-commerce',

    // Productividad y herramientas
    'productividad IA',
    'herramientas IA',
    'herramientas productividad',
    'asistente productividad',
    'optimización tiempo',
    'eficiencia IA',
    'trabajo inteligente',
    'smart work',
    'automatización trabajo',

    // Comparativas y alternativas
    'alternativa ChatGPT',
    'alternativa Claude',
    'alternativa Gemini',
    'mejor que ChatGPT',
    'ChatGPT gratis',
    'IA gratis',
    'asistente IA gratis',
    'chatbot gratis',

    // Características técnicas
    'API IA',
    'integración IA',
    'IA cloud',
    'IA en la nube',
    'IA segura',
    'privacidad IA',
    'GDPR IA',
    'encriptación IA',
    'IA ética',

    // Términos de búsqueda long-tail
    'cómo usar IA',
    'qué es GarBotGPT',
    'mejor asistente IA',
    'mejor chatbot IA',
    'IA más avanzada',
    'IA 2025',
    'futuro IA',
    'tendencias IA',
    'innovación IA',

    // Tecnología y desarrollo
    'tecnología IA',
    'desarrollo IA',
    'soluciones IA',
    'plataforma IA',
    'software IA',
    'aplicación IA',
    'app IA',
    'web IA',

    // Características del producto
    'asistente 24/7',
    'IA 24 horas',
    'disponibilidad total',
    'asistente inteligente',
    'IA avanzada',
    'IA de última generación',
    'IA estado del arte',
    'IA cutting edge',

    // Acciones y verbos
    'generar con IA',
    'crear con IA',
    'analizar con IA',
    'automatizar con IA',
    'optimizar con IA',
    'mejorar con IA',
    'transformar con IA',
    'innovar con IA'
  ],
  authors: [{ name: 'GarBotGPT Team' }],
  creator: 'GarBotGPT',
  publisher: 'GarBotGPT',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://garbotgpt.com',
    siteName: 'GarBotGPT',
    title: 'GarBotGPT - Asistente de IA Avanzado 24/7',
    description: 'Genera texto, imágenes y videos con IA. Analiza documentos, programa código y automatiza tareas. 100% Gratis. Prueba ahora.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GarBotGPT - Asistente de Inteligencia Artificial para Generación de Contenido, Análisis y Automatización',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GarBotGPT - Asistente de IA Avanzado 24/7',
    description: 'Genera texto, imágenes y videos con IA. Analiza documentos, programa código y automatiza tareas. 100% Gratis.',
    images: ['/twitter-image.png'],
    creator: '@garbotgpt',
    site: '@garbotgpt',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GarBotGPT'
  },
  formatDetection: {
    telephone: false
  },
  alternates: {
    canonical: 'https://garbotgpt.com',
    languages: {
      'es-ES': 'https://garbotgpt.com',
      'en-US': 'https://garbotgpt.com/en',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0071e3" />

        {/* Preconnect para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Favicon y App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'GarBotGPT',
              alternateName: ['GarBot', 'GarBotGPT AI', 'GarBot GPT'],
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Artificial Intelligence Assistant',
              operatingSystem: 'Web, Windows, macOS, Linux, iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
                priceValidUntil: '2025-12-31',
                description: 'Plan gratuito con acceso completo a todas las funcionalidades de IA',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
                bestRating: '5',
                worstRating: '1',
              },
              description: 'GarBotGPT es un asistente de inteligencia artificial avanzado disponible 24/7 que permite generar texto, imágenes y videos con IA, analizar documentos PDF/Word/Excel, programar código en múltiples lenguajes, realizar búsquedas web inteligentes, transcribir voz a texto y automatizar tareas. Completamente gratis.',
              url: 'https://garbotgpt.com',
              image: 'https://garbotgpt.com/og-image.png',
              screenshot: 'https://garbotgpt.com/screenshot.png',
              author: {
                '@type': 'Organization',
                name: 'GarBotGPT',
                url: 'https://garbotgpt.com',
                logo: 'https://garbotgpt.com/logo.png',
                sameAs: [
                  'https://twitter.com/garbotgpt',
                  'https://linkedin.com/company/garbotgpt',
                  'https://github.com/garbotgpt',
                  'https://youtube.com/@garbotgpt',
                ],
              },
              publisher: {
                '@type': 'Organization',
                name: 'GarBotGPT',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://garbotgpt.com/logo.png',
                },
              },
              datePublished: '2024-06-01',
              dateModified: new Date().toISOString(),
              inLanguage: ['es-ES', 'en-US'],
              featureList: [
                'Generación de texto con IA',
                'Generación de imágenes con IA',
                'Generación de videos con IA',
                'Análisis de documentos PDF, Word, Excel',
                'Generación de código en múltiples lenguajes',
                'Búsqueda web en tiempo real',
                'Transcripción de voz a texto',
                'Análisis de datos avanzado',
                'Exportación en múltiples formatos',
                'Interfaz conversacional intuitiva',
                'Disponibilidad 24/7',
                'Soporte multilingüe',
              ],
              keywords: 'inteligencia artificial, IA, chatbot, GPT, generación de texto, generación de imágenes, generación de videos, análisis de documentos, programación con IA, automatización, asistente virtual, machine learning, deep learning, procesamiento de lenguaje natural, NLP',
              softwareVersion: '3.0.0',
              releaseNotes: 'https://garbotgpt.com/changelog',
              softwareHelp: 'https://garbotgpt.com/blog',
              installUrl: 'https://ia.garbotgpt.com',
              downloadUrl: 'https://ia.garbotgpt.com',
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              memoryRequirements: '512MB',
              storageRequirements: '100MB',
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269718356198501"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

