import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { getAllPosts, getAllCategories } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog de GarBotGPT - Noticias y Guías sobre IA',
  description: 'Lee los últimos artículos sobre inteligencia artificial, guías de uso de GarBotGPT, tendencias en IA, casos de uso y mejores prácticas para aprovechar al máximo tu asistente de IA.',
  keywords: [
    'blog IA',
    'noticias inteligencia artificial',
    'guías GarBotGPT',
    'tutoriales IA',
    'casos de uso IA',
    'tendencias IA',
    'artículos inteligencia artificial',
    'mejores prácticas IA'
  ],
  openGraph: {
    title: 'Blog de GarBotGPT - Artículos sobre Inteligencia Artificial',
    description: 'Artículos, guías y noticias sobre IA y GarBotGPT. Aprende a aprovechar al máximo la inteligencia artificial.',
    url: 'https://garbotgpt.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://garbotgpt.com/blog',
  },
}

export default function BlogPage() {
  const articles = getAllPosts()
  const categories = getAllCategories()

  // Iconos por categoría
  const categoryIcons: Record<string, JSX.Element> = {
    'Tecnología': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Productividad': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'Seguridad': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    'Casos de Uso': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    'Guías': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }

  // Gradientes por categoría
  const categoryGradients: Record<string, string> = {
    'Tecnología': 'from-blue-500 to-cyan-500',
    'Productividad': 'from-purple-500 to-pink-500',
    'Seguridad': 'from-green-500 to-emerald-500',
    'Casos de Uso': 'from-yellow-500 to-orange-500',
    'Guías': 'from-indigo-500 to-purple-500'
  }

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-gray-900" 
              style={{ 
                fontWeight: 600,
                letterSpacing: '-0.015em',
                lineHeight: 1.05
              }}>
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{ 
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Noticias, tutoriales y actualizaciones sobre GarBotGPT.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filtros de categorías */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm shadow-lg">
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full glass-effect text-gray-700 hover:text-blue-600 font-medium text-sm transition-all hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const gradient = categoryGradients[article.category] || 'from-gray-500 to-gray-600'
              const icon = categoryIcons[article.category]

              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="glass-effect rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 light-refraction"
                >
                  {/* Article Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center text-white`}>
                    <div className="transform group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">
                        {article.readTime} lectura
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors"
                        style={{ letterSpacing: '-0.01em' }}>
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Leer más
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect p-10 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 tracking-tight"
                style={{ letterSpacing: '-0.015em' }}>
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-normal">
              Recibe las últimas noticias y actualizaciones directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-white/50 border border-gray-200 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all outline-none backdrop-blur-xl"
              />
              <button className="apple-button px-8 py-3 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

