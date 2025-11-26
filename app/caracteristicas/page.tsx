'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'

export default function CaracteristicasPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [demoInput, setDemoInput] = useState('')
  const [demoOutput, setDemoOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const features = [
    {
      id: 'text-generation',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: "Generación de Texto",
      description: "Crea contenido de alta calidad en segundos: artículos, emails, posts, guiones y más.",
      color: "from-blue-500 to-cyan-500",
      useCases: [
        "Artículos de blog SEO-optimizados",
        "Emails profesionales personalizados",
        "Posts para redes sociales",
        "Guiones para videos y podcasts"
      ],
      demoPlaceholder: "Escribe sobre los beneficios de la IA en educación...",
      plans: { free: true, pro: true, enterprise: true }
    },
    {
      id: 'image-generation',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: "Generación de Imágenes",
      description: "Crea imágenes únicas y profesionales con IA a partir de descripciones de texto.",
      color: "from-purple-500 to-pink-500",
      useCases: [
        "Ilustraciones para artículos",
        "Logos y branding",
        "Imágenes para redes sociales",
        "Mockups y prototipos visuales"
      ],
      demoPlaceholder: "Un paisaje futurista con ciudades flotantes...",
      plans: { free: "10/día", pro: "Ilimitado", enterprise: "Ilimitado" }
    },
    {
      id: 'video-generation',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
      title: "Generación de Videos",
      description: "Crea videos cortos con IA para redes sociales, presentaciones y marketing.",
      color: "from-green-500 to-emerald-500",
      useCases: [
        "Videos para TikTok e Instagram",
        "Presentaciones animadas",
        "Anuncios publicitarios",
        "Tutoriales y demos"
      ],
      demoPlaceholder: "Video de 10 segundos mostrando un producto tech...",
      plans: { free: "5/día", pro: "Ilimitado", enterprise: "Ilimitado" }
    },
    {
      id: 'document-analysis',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: "Análisis de Documentos",
      description: "Analiza PDFs, Word, Excel y extrae información clave automáticamente.",
      color: "from-yellow-500 to-orange-500",
      useCases: [
        "Resúmenes de contratos legales",
        "Análisis de informes financieros",
        "Extracción de datos de facturas",
        "Revisión de documentos académicos"
      ],
      demoPlaceholder: "Sube un PDF y obtén un resumen ejecutivo...",
      plans: { free: true, pro: true, enterprise: true }
    },
    {
      id: 'code-generation',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: "Generación de Código",
      description: "Escribe, debuggea y optimiza código en múltiples lenguajes de programación.",
      color: "from-indigo-500 to-blue-500",
      useCases: [
        "Desarrollo web (React, Vue, Angular)",
        "Backend (Python, Node.js, Java)",
        "Scripts de automatización",
        "Debugging y optimización"
      ],
      demoPlaceholder: "Crea una función en Python que...",
      plans: { free: true, pro: true, enterprise: true }
    },
    {
      id: 'web-search',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: "Búsqueda Web en Tiempo Real",
      description: "Accede a información actualizada de internet para respuestas precisas y actuales.",
      color: "from-red-500 to-pink-500",
      useCases: [
        "Noticias y eventos actuales",
        "Investigación de mercado",
        "Precios y comparativas",
        "Datos estadísticos recientes"
      ],
      demoPlaceholder: "¿Cuáles son las últimas noticias sobre IA?",
      plans: { free: true, pro: true, enterprise: true }
    },
    {
      id: 'data-analysis',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Análisis de Datos",
      description: "Procesa y analiza grandes volúmenes de datos para obtener insights valiosos.",
      color: "from-teal-500 to-green-500",
      useCases: [
        "Análisis de ventas y tendencias",
        "Visualización de datos",
        "Predicciones y forecasting",
        "Reportes automatizados"
      ],
      demoPlaceholder: "Analiza estos datos de ventas...",
      plans: { free: true, pro: true, enterprise: true }
    },
    {
      id: 'voice-transcription',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
      title: "Transcripción de Voz",
      description: "Convierte audio a texto con alta precisión en múltiples idiomas.",
      color: "from-pink-500 to-rose-500",
      useCases: [
        "Transcripción de reuniones",
        "Subtítulos para videos",
        "Notas de voz a texto",
        "Podcasts a artículos"
      ],
      demoPlaceholder: "Sube un archivo de audio...",
      plans: { free: true, pro: true, enterprise: true }
    }
  ]

  const handleDemo = (featureId: string) => {
    setActiveDemo(featureId)
    setDemoInput('')
    setDemoOutput('')
  }

  const simulateGeneration = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setDemoOutput('Esta es una demostración simulada. En la versión real, aquí verías el resultado generado por la IA basado en tu input.')
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm font-semibold text-blue-600 border border-blue-500/30">
              8 Características Principales
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900"
              style={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}>
            Todo lo que Necesitas en un Solo Lugar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Desde generación de texto hasta análisis de datos. GarBotGPT tiene todas las herramientas que necesitas.
          </p>
        </div>
      </section>

      {/* Features with Interactive Demos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Feature Info */}
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 transform hover:scale-110 hover:rotate-6 transition-all`}>
                  {feature.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Use Cases */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Casos de Uso
                  </h3>
                  <ul className="space-y-2">
                    {feature.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Availability */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Free: {typeof feature.plans.free === 'boolean' ? '✓' : feature.plans.free}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Pro: {typeof feature.plans.pro === 'boolean' ? '✓' : feature.plans.pro}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Enterprise: {typeof feature.plans.enterprise === 'boolean' ? '✓' : feature.plans.enterprise}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDemo(feature.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeDemo === feature.id
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                      : 'glass-effect text-gray-900 hover:scale-105'
                  }`}
                >
                  {activeDemo === feature.id ? 'Demo Activo' : 'Probar Demo'}
                </button>
              </div>

              {/* Interactive Demo */}
              <div className="flex-1 w-full">
                <div className="glass-effect p-8 rounded-3xl">
                  {activeDemo === feature.id ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Prueba esta característica
                        </label>
                        <textarea
                          value={demoInput}
                          onChange={(e) => setDemoInput(e.target.value)}
                          placeholder={feature.demoPlaceholder}
                          className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                          rows={4}
                        />
                      </div>
                      <button
                        onClick={simulateGeneration}
                        disabled={!demoInput || isGenerating}
                        className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                          !demoInput || isGenerating
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : `bg-gradient-to-r ${feature.color} text-white hover:scale-105 shadow-lg`
                        }`}
                      >
                        {isGenerating ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generando...
                          </span>
                        ) : (
                          'Generar'
                        )}
                      </button>
                      {demoOutput && (
                        <div className="mt-4 p-4 bg-white/50 rounded-2xl border border-gray-200">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Resultado:</p>
                          <p className="text-gray-700">{demoOutput}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mx-auto mb-4`}>
                        {feature.icon}
                      </div>
                      <p className="text-gray-600">
                        Haz clic en "Probar Demo" para ver esta característica en acción
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900"
                style={{ letterSpacing: '-0.02em' }}>
              Comparativa de Planes
            </h2>
            <p className="text-xl text-gray-600">
              Todas las características disponibles según tu plan
            </p>
          </div>

          <div className="glass-effect rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.id}
                      className={`border-t border-white/20 ${
                        index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.title}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {typeof feature.plans.free === 'boolean' ? (
                          feature.plans.free ? (
                            <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <span className="font-semibold">{feature.plans.free}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {typeof feature.plans.pro === 'boolean' ? (
                          feature.plans.pro ? (
                            <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <span className="font-semibold">{feature.plans.pro}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">
                        {typeof feature.plans.enterprise === 'boolean' ? (
                          feature.plans.enterprise ? (
                            <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <span className="font-semibold">{feature.plans.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/precios"
              className="inline-block px-8 py-3 glass-effect rounded-full text-gray-900 font-semibold hover:scale-105 transition-transform"
            >
              Ver Todos los Planes
            </Link>
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
                ¿Listo para Empezar?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Prueba todas estas características gratis. Sin tarjeta de crédito requerida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  Comenzar Gratis
                </a>
                <Link
                  href="/comparativa"
                  className="px-8 py-4 glass-effect text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Ver Comparativa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

