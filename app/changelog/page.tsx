'use client'

import { useState, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

interface Change {
  type: 'feature' | 'improvement' | 'fix' | 'security'
  title: string
  description: string
  link?: string
}

interface Version {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch'
  summary: string
  changes: Change[]
  highlights?: string[]
}

export default function ChangelogPage() {
  const [filterType, setFilterType] = useState<string>('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const versionsRef = useRef<(HTMLDivElement | null)[]>([])

  const versions: Version[] = [
    {
      version: "3.0.0",
      date: "26 Enero 2025",
      type: "major",
      summary: "Lanzamiento mayor con generación de videos, nuevo diseño y optimizaciones de rendimiento",
      highlights: [
        "Generación de videos con IA",
        "Diseño Liquid Glass premium",
        "60% más rápido en móviles"
      ],
      changes: [
        {
          type: 'feature',
          title: 'Generación de Videos con IA',
          description: 'Crea videos cortos automáticamente desde descripciones de texto. Perfecto para redes sociales y marketing.',
          link: '/caracteristicas#video-generation'
        },
        {
          type: 'feature',
          title: 'Nuevo Diseño Liquid Glass',
          description: 'Interfaz completamente rediseñada con efectos glassmorphism premium, refracción de luz y dispersión cromática.',
        },
        {
          type: 'improvement',
          title: 'Optimización de Rendimiento',
          description: '60% más rápido en dispositivos móviles. Lazy loading, code splitting y optimización de imágenes.',
        },
        {
          type: 'feature',
          title: 'Sistema de Blog Completo',
          description: '5 artículos profesionales sobre IA con sistema de categorías, filtros y SEO optimizado.',
          link: '/blog'
        },
        {
          type: 'feature',
          title: 'Página de Precios Transparente',
          description: 'Información clara sobre planes Free, Pro y Enterprise con comparativa de características.',
          link: '/precios'
        },
        {
          type: 'feature',
          title: 'Comparativa con Competidores',
          description: 'Tabla detallada comparando GarBotGPT con ChatGPT, Claude, Gemini y Copilot.',
          link: '/comparativa'
        },
        {
          type: 'feature',
          title: 'Roadmap Público Interactivo',
          description: 'Sistema de votación para próximas características con filtros por categoría y estado.',
          link: '/roadmap'
        },
        {
          type: 'improvement',
          title: 'Footer Mejorado',
          description: 'Newsletter signup, redes sociales, mapa del sitio completo y trust badges.',
        },
        {
          type: 'improvement',
          title: 'Optimización de Imágenes',
          description: 'Conversión automática a WebP/AVIF con 86.5% de reducción en tamaño. Blur placeholders y lazy loading.',
        },
        {
          type: 'improvement',
          title: 'SEO Avanzado',
          description: 'Schema.org JSON-LD, metadata completa, sitemap actualizado y Open Graph optimizado.',
        },
        {
          type: 'security',
          title: 'Políticas GDPR Compliant',
          description: 'Páginas de privacidad, cookies y términos conformes con GDPR, CCPA y regulaciones europeas.',
          link: '/politicas'
        }
      ]
    },
    {
      version: "2.5.0",
      date: "15 Diciembre 2024",
      type: "minor",
      summary: "Mejoras en análisis de documentos y nuevas capacidades de exportación",
      changes: [
        {
          type: 'improvement',
          title: 'Análisis de Documentos Mejorado',
          description: 'Soporte para más formatos: PDF, Word, Excel, PowerPoint. Extracción de tablas y gráficos.',
        },
        {
          type: 'feature',
          title: 'Exportación Avanzada',
          description: 'Nuevos formatos de salida: Markdown, HTML, JSON, CSV. Personalización de estilos.',
        },
        {
          type: 'feature',
          title: 'Búsqueda Web Inteligente',
          description: 'Integración con fuentes verificadas. Citación automática de referencias.',
        },
        {
          type: 'improvement',
          title: 'Generación de Código Mejorada',
          description: 'Soporte para 15+ lenguajes adicionales. Mejor debugging y optimización.',
        },
        {
          type: 'fix',
          title: 'Correcciones de Bugs',
          description: 'Solucionados 23 bugs reportados por usuarios. Mejoras en estabilidad.',
        }
      ]
    },
    {
      version: "2.0.0",
      date: "1 Noviembre 2024",
      type: "major",
      summary: "Rediseño completo de interfaz y actualización del modelo de IA",
      highlights: [
        "Nueva interfaz de usuario",
        "50% más rápido",
        "Modelo de IA actualizado"
      ],
      changes: [
        {
          type: 'feature',
          title: 'Nueva Interfaz de Usuario',
          description: 'Diseño completamente rediseñado con enfoque en simplicidad y elegancia. Inspirado en Apple Design.',
        },
        {
          type: 'improvement',
          title: 'Velocidad de Respuesta',
          description: '50% más rápido en generación de respuestas. Optimización de modelos y infraestructura.',
        },
        {
          type: 'feature',
          title: 'Modelo de IA Actualizado',
          description: 'Nuevo modelo con capacidades mejoradas de razonamiento y comprensión contextual.',
        },
        {
          type: 'feature',
          title: 'Sistema de Temas',
          description: 'Personaliza la apariencia con temas claro, oscuro y automático.',
        },
        {
          type: 'security',
          title: 'Encriptación E2E',
          description: 'Todas las conversaciones protegidas con encriptación de extremo a extremo.',
        }
      ]
    },
    {
      version: "1.5.0",
      date: "15 Octubre 2024",
      type: "minor",
      summary: "Expansión multilingüe y mejoras en análisis de datos",
      changes: [
        {
          type: 'feature',
          title: 'Soporte Multilingüe Expandido',
          description: 'Añadidos 15 idiomas nuevos. Total: 50+ idiomas soportados.',
        },
        {
          type: 'feature',
          title: 'Análisis de Datos Avanzado',
          description: 'Nuevas capacidades para procesar y visualizar datos complejos.',
        },
        {
          type: 'improvement',
          title: 'Aprendizaje Continuo',
          description: 'Sistema mejorado que se adapta mejor a tu estilo de comunicación.',
        },
        {
          type: 'fix',
          title: 'Correcciones de Interfaz',
          description: 'Solucionados errores menores en la interfaz de usuario.',
        }
      ]
    },
    {
      version: "1.0.0",
      date: "1 Junio 2024",
      type: "major",
      summary: "Lanzamiento oficial de GarBotGPT al público",
      highlights: [
        "Lanzamiento oficial",
        "Modelo de IA avanzado",
        "Interfaz intuitiva"
      ],
      changes: [
        {
          type: 'feature',
          title: 'Lanzamiento Oficial',
          description: 'GarBotGPT está ahora disponible para todos los usuarios de forma gratuita.',
        },
        {
          type: 'feature',
          title: 'Modelo de IA de Última Generación',
          description: 'Tecnología de punta para generación de texto, imágenes y análisis.',
        },
        {
          type: 'feature',
          title: 'Interfaz Conversacional',
          description: 'Diseño intuitivo que hace que interactuar con IA sea natural y fácil.',
        },
        {
          type: 'security',
          title: 'Sistema de Seguridad Robusto',
          description: 'Protección de datos y privacidad desde el primer día.',
        },
        {
          type: 'feature',
          title: 'Soporte Multilingüe',
          description: 'Lanzamiento con soporte para 35 idiomas incluyendo español.',
        }
      ]
    }
  ]

  const getVersionColor = (type: string) => {
    switch(type) {
      case 'major':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
      case 'minor':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white'
      case 'patch':
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
    }
  }

  const getChangeTypeIcon = (type: string) => {
    switch(type) {
      case 'feature':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        )
      case 'improvement':
        return (
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      case 'fix':
        return (
          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        )
      case 'security':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  const getChangeTypeLabel = (type: string) => {
    switch(type) {
      case 'feature': return 'Nueva Característica'
      case 'improvement': return 'Mejora'
      case 'fix': return 'Corrección'
      case 'security': return 'Seguridad'
      default: return type
    }
  }

  const filterTypes = [
    { id: 'all', label: 'Todos', color: 'from-gray-500 to-gray-600' },
    { id: 'feature', label: 'Características', color: 'from-blue-500 to-blue-600' },
    { id: 'improvement', label: 'Mejoras', color: 'from-green-500 to-green-600' },
    { id: 'fix', label: 'Correcciones', color: 'from-orange-500 to-orange-600' },
    { id: 'security', label: 'Seguridad', color: 'from-red-500 to-red-600' }
  ]

  const filteredVersions = versions.map(version => ({
    ...version,
    changes: filterType === 'all'
      ? version.changes
      : version.changes.filter(change => change.type === filterType)
  })).filter(version => version.changes.length > 0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      versionsRef.current.forEach((v, i) => {
        if (!v) return
        gsap.fromTo(v,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: v, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })
    }, heroRef)
    return () => ctx.revert()
  }, [filterType])

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-bold text-green-400 border border-green-500/30 mb-6">
            {versions.length} VERSIONES
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Changelog</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Historial de versiones y actualizaciones
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {filterTypes.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilterType(filter.id)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                filterType === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Changelog Timeline */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {filteredVersions.map((version, index) => (
              <div
                key={index}
                ref={el => { versionsRef.current[index] = el }}
                className="rounded-3xl p-6 md:p-8 transition-all duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* Version Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${getVersionColor(version.type)}`}>
                        v{version.version}
                      </span>
                      <span className="text-white/40 text-sm">{version.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{version.summary}</h2>
                    {version.highlights && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {version.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
                            ⭐ {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-white/30 font-bold mt-4 md:mt-0">
                    {version.type === 'major' ? 'MAYOR' : version.type === 'minor' ? 'MENOR' : 'PARCHE'}
                  </span>
                </div>

                {/* Changes List */}
                <div className="space-y-3">
                  {version.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all">
                      <div className="flex-shrink-0 mt-1">{getChangeTypeIcon(change.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3 className="font-bold text-white">{change.title}</h3>
                          <span className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded-full whitespace-nowrap">
                            {getChangeTypeLabel(change.type)}
                          </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-2">{change.description}</p>
                        {change.link && (
                          <a href={change.link} className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 font-medium">
                            Ver más →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-white/50">
                  <span>✨ <strong className="text-white">{version.changes.filter(c => c.type === 'feature').length}</strong> nuevas</span>
                  <span>✓ <strong className="text-white">{version.changes.filter(c => c.type === 'improvement').length}</strong> mejoras</span>
                  <span>🔧 <strong className="text-white">{version.changes.filter(c => c.type === 'fix').length}</strong> fixes</span>
                  {version.changes.filter(c => c.type === 'security').length > 0 && (
                    <span>🔒 <strong className="text-white">{version.changes.filter(c => c.type === 'security').length}</strong> seguridad</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredVersions.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white/50">No hay cambios de este tipo.</p>
            </div>
          )}
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}
