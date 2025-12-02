'use client'

import { useState, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

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
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })
    }, heroRef)
    return () => ctx.revert()
  }, [selectedCategory, selectedStatus])

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-bold text-purple-400 border border-purple-500/30 mb-6">
            ROADMAP 2025
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            El <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Futuro</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Vota por las características que más te interesan
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-bold text-white/70 mb-2">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'Todas' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex-1">
              <label className="block text-sm font-bold text-white/70 mb-2">Estado</label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      selectedStatus === status.value
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-white/50">
            Mostrando <span className="font-bold text-white">{filteredFeatures.length}</span> característica(s)
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                ref={el => { cardsRef.current[index] = el }}
                className="group relative rounded-3xl p-6 transition-all duration-500 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${statusConfig[feature.status].color}`}>
                    {statusConfig[feature.status].icon} {statusConfig[feature.status].label}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white pr-24 mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{feature.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">
                      {feature.category}
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs font-medium">
                      {feature.quarter}
                    </span>
                    <span className={`px-3 py-1 bg-white/10 rounded-full text-xs font-medium ${priorityConfig[feature.priority].color}`}>
                      Prioridad {priorityConfig[feature.priority].label}
                    </span>
                  </div>
                </div>

                {/* Vote Button */}
                <button
                  onClick={() => handleVote(feature.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-purple-500/20 transition-all"
                >
                  <span className="text-purple-400">👍</span>
                  <span className="font-bold text-white">{feature.votes}</span>
                  <span className="text-white/50 text-sm">votos</span>
                </button>
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No se encontraron características con estos filtros</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)', border: '1px solid rgba(168,85,247,0.3)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4 text-white">¿Tienes una idea?</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Comparte tus sugerencias y ayúdanos a construir el mejor asistente de IA
              </p>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Enviar Sugerencia
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

