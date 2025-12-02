import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Noticias, Tutoriales y Guías de IA | GarBotGPT',
  description: 'Últimas noticias sobre inteligencia artificial, tutoriales de IA, guías de productividad y actualizaciones de GarBotGPT. Aprende a usar la IA de forma efectiva.',
  keywords: [
    'blog IA', 'noticias inteligencia artificial', 'tutoriales IA', 'guías productividad IA',
    'tendencias IA 2025', 'cómo usar ChatGPT', 'tips IA', 'GarBotGPT novedades', 'machine learning blog'
  ],
  openGraph: {
    title: 'Blog GarBotGPT - Todo sobre IA',
    description: 'Noticias, tutoriales, guías y actualizaciones sobre inteligencia artificial y productividad.',
    url: 'https://garbotgpt.com/blog',
    images: [{ url: '/og-blog.png', width: 1200, height: 630, alt: 'Blog GarBotGPT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog GarBotGPT - Noticias y Tutoriales de IA',
    description: 'Todo lo que necesitas saber sobre inteligencia artificial y productividad.',
  },
  alternates: { canonical: 'https://garbotgpt.com/blog' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

