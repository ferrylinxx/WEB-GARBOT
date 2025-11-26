import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Comparativa - GarBotGPT vs ChatGPT, Claude, Gemini',
  description: 'Compara GarBotGPT con ChatGPT, Claude, Gemini y otros asistentes de IA. Descubre por qué GarBotGPT es la mejor opción para ti.',
  keywords: ['comparativa IA', 'GarBotGPT vs ChatGPT', 'GarBotGPT vs Claude', 'mejor asistente IA'],
  openGraph: {
    title: 'GarBotGPT vs Competidores - Comparativa Completa',
    description: 'Comparación detallada de GarBotGPT con los principales asistentes de IA del mercado.',
    url: 'https://garbotgpt.com/comparativa',
    type: 'website',
  },
  alternates: {
    canonical: 'https://garbotgpt.com/comparativa',
  },
}

export default function ComparativaPage() {
  const features = [
    { name: 'Precio', garbotgpt: 'Gratis', chatgpt: '$20/mes', claude: '$20/mes', gemini: 'Gratis (limitado)', copilot: '$20/mes' },
    { name: 'Generación de texto', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'Generación de imágenes', garbotgpt: true, chatgpt: true, claude: false, gemini: true, copilot: true },
    { name: 'Generación de videos', garbotgpt: true, chatgpt: false, claude: false, gemini: false, copilot: false },
    { name: 'Análisis de documentos', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'Búsqueda web en tiempo real', garbotgpt: true, chatgpt: false, claude: false, gemini: true, copilot: true },
    { name: 'Generación de código', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'Multimodal (texto + imagen)', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'API disponible', garbotgpt: 'Próximamente', chatgpt: true, claude: true, gemini: true, copilot: false },
    { name: 'Límite de mensajes', garbotgpt: 'Ilimitado', chatgpt: '40 msgs/3h', claude: '45 msgs/5h', gemini: 'Limitado', copilot: '30 msgs/día' },
    { name: 'Modelos disponibles', garbotgpt: 'Múltiples', chatgpt: 'GPT-4', claude: 'Claude 3', gemini: 'Gemini Pro', copilot: 'GPT-4' },
    { name: 'Interfaz en español', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'Soporte 24/7', garbotgpt: true, chatgpt: false, claude: false, gemini: false, copilot: false },
    { name: 'Sin anuncios', garbotgpt: true, chatgpt: true, claude: true, gemini: false, copilot: true },
    { name: 'Privacidad garantizada', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
  ]

  const competitors = [
    {
      name: 'GarBotGPT',
      logo: '🤖',
      color: 'from-blue-600 to-cyan-500',
      highlight: true
    },
    {
      name: 'ChatGPT',
      logo: '💬',
      color: 'from-green-600 to-emerald-500',
      highlight: false
    },
    {
      name: 'Claude',
      logo: '🧠',
      color: 'from-purple-600 to-pink-500',
      highlight: false
    },
    {
      name: 'Gemini',
      logo: '✨',
      color: 'from-yellow-600 to-orange-500',
      highlight: false
    },
    {
      name: 'Copilot',
      logo: '🚀',
      color: 'from-indigo-600 to-blue-500',
      highlight: false
    }
  ]

  const advantages = [
    {
      title: 'Completamente Gratis',
      description: 'Acceso a todas las funciones sin costo, mientras otros cobran $20/mes',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: 'Generación de Videos',
      description: 'Única plataforma que ofrece generación de videos con IA',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    },
    {
      title: 'Sin Límites de Mensajes',
      description: 'Usa GarBotGPT todo lo que quieras, sin restricciones horarias',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: 'Búsqueda Web Integrada',
      description: 'Información actualizada en tiempo real, sin salir de la plataforma',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      title: 'Múltiples Modelos IA',
      description: 'Acceso a varios modelos de IA para diferentes necesidades',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    {
      title: 'Soporte en Español',
      description: 'Interfaz y soporte completamente en español, diseñado para hispanohablantes',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
    }
  ]

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm font-semibold text-blue-600 border border-blue-500/30">
              Comparativa Completa
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900" 
              style={{ 
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}>
            GarBotGPT vs Competidores
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{ 
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Descubre por qué GarBotGPT es la mejor opción para tus necesidades de IA
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full glass-effect rounded-3xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Característica</th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.name}
                      className={`px-6 py-4 text-center text-sm font-semibold ${
                        comp.highlight ? 'text-blue-600' : 'text-gray-900'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-2xl`}>
                          {comp.logo}
                        </div>
                        <span>{comp.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`border-t border-white/20 ${
                      index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.garbotgpt === 'boolean' ? (
                        feature.garbotgpt ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm font-semibold text-blue-600">{feature.garbotgpt}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.chatgpt === 'boolean' ? (
                        feature.chatgpt ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.chatgpt}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.claude === 'boolean' ? (
                        feature.claude ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.claude}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.gemini === 'boolean' ? (
                        feature.gemini ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.gemini}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.copilot === 'boolean' ? (
                        feature.copilot ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.copilot}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900"
                style={{ letterSpacing: '-0.02em' }}>
              Ventajas Únicas de GarBotGPT
            </h2>
            <p className="text-xl text-gray-600">
              Lo que nos hace diferentes y mejores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                ¿Convencido? Prueba GarBotGPT Gratis
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sin tarjeta de crédito. Sin límites. Sin compromisos.
              </p>
              <a
                href="https://ia.garbotgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Comenzar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


