'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const DemoGTA = dynamic(() => import('@/components/DemoGTAv2'), {
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

const FooterGTA = dynamic(() => import('@/components/FooterGTA'), {
  ssr: true,
  loading: () => null
})

const capabilities = [
  {
    icon: '💬',
    title: 'Generación de Texto',
    description: 'Crea contenido profesional, responde preguntas complejas y genera ideas creativas',
    color: 'from-blue-600 to-cyan-500',
    examples: ['Artículos SEO', 'Emails profesionales', 'Guiones creativos', 'Resúmenes']
  },
  {
    icon: '🎨',
    title: 'Creación de Imágenes',
    description: 'Genera imágenes únicas y profesionales a partir de descripciones detalladas',
    color: 'from-purple-600 to-pink-500',
    examples: ['Ilustraciones HD', 'Logos', 'Arte digital', 'Mockups']
  },
  {
    icon: '💻',
    title: 'Generación de Código',
    description: 'Escribe, debuggea y optimiza código en más de 50 lenguajes de programación',
    color: 'from-green-600 to-emerald-500',
    examples: ['React & Vue', 'Python', 'APIs REST', 'Automatización']
  },
  {
    icon: '📄',
    title: 'Análisis de Documentos',
    description: 'Sube PDFs, Word, Excel y extrae información clave automáticamente',
    color: 'from-orange-600 to-amber-500',
    examples: ['Contratos', 'Informes', 'Facturas', 'Investigación']
  }
]

const stats = [
  { value: '10M+', label: 'Mensajes procesados' },
  { value: '<0.5s', label: 'Tiempo de respuesta' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '50+', label: 'Lenguajes soportados' }
]

const useCases = [
  {
    title: 'Marketing & Contenido',
    icon: '📢',
    description: 'Crea campañas, posts y contenido viral en segundos',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Desarrollo de Software',
    icon: '⚙️',
    description: 'Acelera tu desarrollo con código de calidad profesional',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Educación & Formación',
    icon: '🎓',
    description: 'Crea materiales educativos y tutoriales personalizados',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Análisis de Datos',
    icon: '📊',
    description: 'Procesa y analiza grandes volúmenes de información',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Atención al Cliente',
    icon: '🎧',
    description: 'Automatiza respuestas y mejora la satisfacción',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Legal & Compliance',
    icon: '⚖️',
    description: 'Analiza contratos y documentos legales rápidamente',
    gradient: 'from-slate-500 to-gray-500'
  }
]

export default function DemoPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const capabilitiesRef = useRef<(HTMLDivElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement>(null)
  const useCasesRef = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.demo-hero-badge',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      )
      gsap.fromTo('.demo-hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
      gsap.fromTo('.demo-hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      )

      // Capabilities cards
      capabilitiesRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 100, opacity: 0, rotateY: -15, scale: 0.9 },
          {
            y: 0, opacity: 1, rotateY: 0, scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Stats counter animation
      if (statsRef.current) {
        gsap.fromTo('.stat-item',
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Use cases
      useCasesRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0, scale: 0.95 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // CTA
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })

    return () => ctx.revert()
  }, [isClient])

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="demo-hero-badge inline-block mb-6">
            <span className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-sm font-bold text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Prueba en Vivo • 5 Mensajes Gratis
            </span>
          </div>
          <h1 className="demo-hero-title text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Demo Interactiva
            </span>
          </h1>
          <p className="demo-hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Experimenta el poder de <span className="text-cyan-400 font-semibold">GarBotGPT</span> en tiempo real.
            Genera texto, imágenes y código con IA de última generación.
          </p>
        </div>
      </section>

      {/* Demo Component */}
      <DemoGTA />

      {/* Capabilities Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Capacidades <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Ilimitadas</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Explora todo lo que puedes hacer con GarBotGPT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                ref={el => { capabilitiesRef.current[i] = el }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
                style={{ perspective: '1000px' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cap.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                    <p className="text-white/60 mb-4">{cap.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.examples.map((ex, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Casos de <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Uso</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Descubre cómo empresas y profesionales utilizan GarBotGPT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div
                key={useCase.title}
                ref={el => { useCasesRef.current[i] = el }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-white/50 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div ref={ctaRef} className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl text-center overflow-hidden border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.1) 100%)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-[120px]" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                ¿Te ha gustado la <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">demo</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Accede a todas las funcionalidades sin límites. Gratis para siempre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
                >
                  Comenzar Gratis
                </a>
                <Link
                  href="/caracteristicas"
                  className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
                >
                  Ver Características
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

