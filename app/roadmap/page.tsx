'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

interface Feature {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned' | 'under-review'
  category: string
  votes: number
  quarter: string
  priority: 'high' | 'medium' | 'low'
}

export default function RoadmapPage() {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: '1',
      title: 'API Pública',
      description: 'Acceso programático a todas las funciones de GarBotGPT mediante API REST',
      status: 'in-progress',
      category: 'Desarrollo',
      votes: 342,
      quarter: 'Q1 2025',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Aplicación Móvil',
      description: 'Apps nativas para iOS y Android con todas las funcionalidades',
      status: 'planned',
      category: 'Producto',
      votes: 289,
      quarter: 'Q2 2025',
      priority: 'high'
    },
    {
      id: '3',
      title: 'Modo Colaborativo',
      description: 'Trabaja en equipo con espacios compartidos y permisos',
      status: 'planned',
      category: 'Colaboración',
      votes: 256,
      quarter: 'Q2 2025',
      priority: 'medium'
    },
    {
      id: '4',
      title: 'Generación de Presentaciones',
      description: 'Crea presentaciones PowerPoint/Google Slides automáticamente',
      status: 'under-review',
      category: 'Contenido',
      votes: 234,
      quarter: 'Q3 2025',
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Integración con Slack',
      description: 'Usa GarBotGPT directamente desde Slack',
      status: 'planned',
      category: 'Integraciones',
      votes: 198,
      quarter: 'Q2 2025',
      priority: 'medium'
    },
    {
      id: '6',
      title: 'Análisis de Voz Avanzado',
      description: 'Transcripción y análisis de reuniones y podcasts',
      status: 'in-progress',
      category: 'IA',
      votes: 187,
      quarter: 'Q1 2025',
      priority: 'high'
    },
    {
      id: '7',
      title: 'Modelos Personalizados',
      description: 'Entrena modelos con tus propios datos (Enterprise)',
      status: 'planned',
      category: 'IA',
      votes: 176,
      quarter: 'Q3 2025',
      priority: 'low'
    },
    {
      id: '8',
      title: 'Extensión de Navegador',
      description: 'Usa GarBotGPT en cualquier página web',
      status: 'under-review',
      category: 'Producto',
      votes: 165,
      quarter: 'Q2 2025',
      priority: 'medium'
    },
    {
      id: '9',
      title: 'Generación de Música',
      description: 'Crea música y efectos de sonido con IA',
      status: 'under-review',
      category: 'Contenido',
      votes: 143,
      quarter: 'Q4 2025',
      priority: 'low'
    },
    {
      id: '10',
      title: 'Modo Offline',
      description: 'Funcionalidades básicas sin conexión a internet',
      status: 'planned',
      category: 'Producto',
      votes: 132,
      quarter: 'Q3 2025',
      priority: 'low'
    },
    {
      id: '11',
      title: 'Integración con Google Workspace',
      description: 'Conecta con Docs, Sheets, Drive y Gmail',
      status: 'planned',
      category: 'Integraciones',
      votes: 128,
      quarter: 'Q2 2025',
      priority: 'medium'
    },
    {
      id: '12',
      title: 'Asistente de Código Mejorado',
      description: 'Autocompletado inteligente y debugging avanzado',
      status: 'in-progress',
      category: 'Desarrollo',
      votes: 119,
      quarter: 'Q1 2025',
      priority: 'high'
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const categories = ['all', 'Producto', 'IA', 'Desarrollo', 'Integraciones', 'Contenido', 'Colaboración']
  const statuses = [
    { value: 'all', label: 'Todos' },
    { value: 'completed', label: 'Completado' },
    { value: 'in-progress', label: 'En Progreso' },
    { value: 'planned', label: 'Planificado' },
    { value: 'under-review', label: 'En Revisión' }
  ]

  const statusConfig = {
    'completed': { label: 'Completado', color: 'from-green-500 to-emerald-500', icon: '✓' },
    'in-progress': { label: 'En Progreso', color: 'from-blue-500 to-cyan-500', icon: '⟳' },
    'planned': { label: 'Planificado', color: 'from-purple-500 to-pink-500', icon: '○' },
    'under-review': { label: 'En Revisión', color: 'from-yellow-500 to-orange-500', icon: '?' }
  }

  const priorityConfig = {
    'high': { label: 'Alta', color: 'text-red-600' },
    'medium': { label: 'Media', color: 'text-yellow-600' },
    'low': { label: 'Baja', color: 'text-green-600' }
  }

  const handleVote = (id: string) => {
    setFeatures(features.map(f => 
      f.id === id ? { ...f, votes: f.votes + 1 } : f
    ))
  }

  const filteredFeatures = features
    .filter(f => selectedCategory === 'all' || f.category === selectedCategory)
    .filter(f => selectedStatus === 'all' || f.status === selectedStatus)
    .sort((a, b) => b.votes - a.votes)

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-semibold text-purple-600 border border-purple-500/30">
              Roadmap 2025
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900"
              style={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}>
            El Futuro de GarBotGPT
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Vota por las características que más te interesan y ayúdanos a priorizar nuestro desarrollo
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                        : 'glass-effect text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {cat === 'all' ? 'Todas' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Estado</label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedStatus === status.value
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                        : 'glass-effect text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Mostrando <span className="font-semibold text-gray-900">{filteredFeatures.length}</span> característica(s)
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="glass-effect p-6 rounded-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${statusConfig[feature.status].color}`}>
                    {statusConfig[feature.status].icon} {statusConfig[feature.status].label}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 pr-24">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {feature.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {feature.quarter}
                    </span>
                    <span className={`px-3 py-1 bg-gray-100 rounded-full text-xs font-medium ${priorityConfig[feature.priority].color}`}>
                      Prioridad {priorityConfig[feature.priority].label}
                    </span>
                  </div>
                </div>

                {/* Vote Button */}
                <button
                  onClick={() => handleVote(feature.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 glass-effect rounded-full hover:bg-blue-50 transition-all group-hover:scale-105"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{feature.votes}</span>
                  <span className="text-gray-600 text-sm">votos</span>
                </button>
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-lg">No se encontraron características con estos filtros</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                ¿Tienes una idea?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Comparte tus sugerencias y ayúdanos a construir el mejor asistente de IA
              </p>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Enviar Sugerencia
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

