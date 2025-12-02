'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'
import {
  TextIcon, ImageIcon, VideoIcon, DocumentIcon, CodeIcon, SearchIcon,
  ChartIcon, MicrophoneIcon, LockIcon, ShieldIcon, TrashIcon,
  SlackIcon, DiscordIcon, WhatsAppIcon, TelegramIcon, GoogleIcon,
  MicrosoftIcon, NotionIcon, ZapierIcon
} from '@/components/icons/FeatureIcons'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Icon components map
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  'text': TextIcon,
  'image': ImageIcon,
  'video': VideoIcon,
  'document': DocumentIcon,
  'code': CodeIcon,
  'search': SearchIcon,
  'chart': ChartIcon,
  'microphone': MicrophoneIcon,
}

const integrationIconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  'Slack': SlackIcon,
  'Discord': DiscordIcon,
  'WhatsApp': WhatsAppIcon,
  'Telegram': TelegramIcon,
  'Google': GoogleIcon,
  'Microsoft': MicrosoftIcon,
  'Notion': NotionIcon,
  'Zapier': ZapierIcon,
}

export default function CaracteristicasPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])
  const comparisonRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      id: 'text-generation',
      iconKey: 'text',
      title: "GarBotGPT-5.1",
      subtitle: "Generación de Texto",
      description: "Crea contenido de alta calidad en segundos con nuestro modelo más avanzado.",
      color: "from-blue-600 to-cyan-500",
      useCases: ["Artículos SEO", "Emails profesionales", "Posts virales", "Guiones creativos"],
      stats: "256K tokens"
    },
    {
      id: 'image-generation',
      iconKey: 'image',
      title: "GarBotGPT-5-mini",
      subtitle: "Generación de Imágenes",
      description: "Crea imágenes únicas y profesionales con IA a partir de descripciones.",
      color: "from-purple-600 to-pink-500",
      useCases: ["Ilustraciones HD", "Logos creativos", "Arte digital", "Mockups"],
      stats: "4K resolution"
    },
    {
      id: 'video-generation',
      iconKey: 'video',
      title: "GarBotGPT-Video",
      subtitle: "Generación de Videos",
      description: "Crea videos cortos con IA para redes sociales y marketing.",
      color: "from-green-600 to-emerald-500",
      useCases: ["TikTok & Reels", "Presentaciones", "Anuncios", "Tutoriales"],
      stats: "60 FPS"
    },
    {
      id: 'document-analysis',
      iconKey: 'document',
      title: "GarBotGPT-Docs",
      subtitle: "Análisis de Documentos",
      description: "Analiza PDFs, Word, Excel y extrae información clave automáticamente.",
      color: "from-yellow-600 to-orange-500",
      useCases: ["Contratos legales", "Informes financieros", "Facturas", "Académicos"],
      stats: "500+ páginas"
    },
    {
      id: 'code-generation',
      iconKey: 'code',
      title: "GarBotGPT-Code",
      subtitle: "Generación de Código",
      description: "Escribe, debuggea y optimiza código en múltiples lenguajes.",
      color: "from-indigo-600 to-blue-500",
      useCases: ["React & Vue", "Python & Node", "Automatización", "Debugging"],
      stats: "128K context"
    },
    {
      id: 'web-search',
      iconKey: 'search',
      title: "GarBotGPT-Search",
      subtitle: "Búsqueda Web en Tiempo Real",
      description: "Accede a información actualizada de internet para respuestas precisas.",
      color: "from-red-600 to-pink-500",
      useCases: ["Noticias actuales", "Investigación", "Comparativas", "Estadísticas"],
      stats: "Real-time"
    },
    {
      id: 'data-analysis',
      iconKey: 'chart',
      title: "GarBotGPT-Analytics",
      subtitle: "Análisis de Datos",
      description: "Procesa y analiza grandes volúmenes de datos para obtener insights.",
      color: "from-teal-600 to-green-500",
      useCases: ["Ventas & tendencias", "Visualización", "Predicciones", "Reportes"],
      stats: "Big Data"
    },
    {
      id: 'voice-transcription',
      iconKey: 'microphone',
      title: "GarBotGPT-Voice",
      subtitle: "Transcripción de Voz",
      description: "Convierte audio a texto con alta precisión en múltiples idiomas.",
      color: "from-pink-600 to-rose-500",
      useCases: ["Reuniones", "Subtítulos", "Notas de voz", "Podcasts"],
      stats: "99% accuracy"
    }
  ]

  const comparison = [
    { feature: 'Generación de texto', garbotgpt: true, chatgpt: true, claude: true },
    { feature: 'Generación de imágenes', garbotgpt: true, chatgpt: true, claude: false },
    { feature: 'Generación de videos', garbotgpt: true, chatgpt: false, claude: false },
    { feature: 'Análisis de documentos', garbotgpt: true, chatgpt: true, claude: true },
    { feature: 'Búsqueda web en tiempo real', garbotgpt: true, chatgpt: true, claude: false },
    { feature: 'Transcripción de voz', garbotgpt: true, chatgpt: true, claude: false },
    { feature: 'API gratuita', garbotgpt: true, chatgpt: false, claude: false },
    { feature: 'Sin límites de uso', garbotgpt: true, chatgpt: false, claude: false },
    { feature: '100% Gratis', garbotgpt: true, chatgpt: false, claude: false },
  ]

  const integrations = [
    { name: 'Slack', color: 'bg-purple-500' },
    { name: 'Discord', color: 'bg-indigo-500' },
    { name: 'WhatsApp', color: 'bg-green-500' },
    { name: 'Telegram', color: 'bg-blue-500' },
    { name: 'Google', color: 'bg-red-500' },
    { name: 'Microsoft', color: 'bg-cyan-500' },
    { name: 'Notion', color: 'bg-gray-500' },
    { name: 'Zapier', color: 'bg-orange-500' },
  ]

  const securityFeatures = [
    { title: 'Encriptación E2E', description: 'Tus datos viajan seguros con cifrado de extremo a extremo', iconKey: 'lock' },
    { title: 'GDPR Compliant', description: 'Cumplimos con todas las normativas europeas de protección de datos', iconKey: 'shield' },
    { title: 'Sin almacenamiento', description: 'No guardamos tus conversaciones ni datos sensibles', iconKey: 'trash' },
    { title: 'Auditorías regulares', description: 'Tests de seguridad periódicos por expertos externos', iconKey: 'shield' },
  ]

  const securityIconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    'lock': LockIcon,
    'shield': ShieldIcon,
    'trash': TrashIcon,
  }

  const tabs = ['Todos', 'Texto', 'Imágenes', 'Código', 'Datos']

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ===== HERO EPIC ENTRANCE =====
      const heroTl = gsap.timeline()

      // Animated background particles
      gsap.to('.hero-particle', {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 2, from: 'random' }
      })

      // Badge with bounce and glow
      heroTl.fromTo('.hero-badge',
        { y: -50, opacity: 0, scale: 0.5, filter: 'blur(10px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'elastic.out(1, 0.5)' }
      )

      // Title with split text effect simulation
      heroTl.fromTo(titleRef.current,
        { y: 150, opacity: 0, skewY: 7, scale: 0.8 },
        { y: 0, opacity: 1, skewY: 0, scale: 1, duration: 1.4, ease: 'expo.out' },
        '-=0.5'
      )

      // Subtitle with wave effect
      heroTl.fromTo('.hero-subtitle',
        { y: 80, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power4.out' },
        '-=0.8'
      )

      // Glowing orb animation
      gsap.to('.hero-glow', {
        scale: 1.3,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // ===== FEATURES - 3D FLIP & REVEAL =====
      featuresRef.current.forEach((feature, i) => {
        if (!feature) return
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: feature,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        })

        tl.fromTo(feature,
          {
            opacity: 0,
            y: 120,
            rotateX: -45,
            rotateY: i % 2 === 0 ? -25 : 25,
            scale: 0.7,
            transformPerspective: 1000,
            transformOrigin: 'center center'
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            ease: 'expo.out',
            delay: i * 0.08
          }
        )

        // Hover magnetic effect
        feature.addEventListener('mouseenter', () => {
          gsap.to(feature, {
            scale: 1.05,
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            duration: 0.4,
            ease: 'power2.out'
          })
        })
        feature.addEventListener('mouseleave', () => {
          gsap.to(feature, {
            scale: 1,
            boxShadow: '0 0 0 rgba(0,0,0,0)',
            duration: 0.4,
            ease: 'power2.out'
          })
        })
      })

      // ===== COMPARISON TABLE - STAGGERED REVEAL =====
      if (comparisonRef.current) {
        const tableRows = comparisonRef.current.querySelectorAll('tr')
        gsap.fromTo(tableRows,
          { x: -100, opacity: 0, scale: 0.9 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: comparisonRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          }
        )

        // Checkmarks pop animation
        const checkmarks = comparisonRef.current.querySelectorAll('.check-icon')
        gsap.fromTo(checkmarks,
          { scale: 0, rotation: -180 },
          {
            scale: 1, rotation: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: comparisonRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
          }
        )
      }

      // ===== INTEGRATIONS - CIRCULAR EXPLOSION =====
      if (integrationsRef.current) {
        gsap.fromTo('.integration-item',
          {
            opacity: 0,
            scale: 0,
            rotation: -180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              from: 'center',
              grid: 'auto',
              ease: 'power2.inOut'
            },
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: { trigger: integrationsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          }
        )

        // Floating animation after reveal
        gsap.to('.integration-item', {
          y: 'random(-10, 10)',
          duration: 'random(2, 3)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: { amount: 1, from: 'random' },
          delay: 1
        })
      }

      // ===== SECURITY - SLIDE & LOCK ANIMATION =====
      if (securityRef.current) {
        gsap.fromTo('.security-card',
          { x: -150, opacity: 0, rotateY: -30, scale: 0.8 },
          {
            x: 0, opacity: 1, rotateY: 0, scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: securityRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          }
        )
      }

      // ===== CTA - EPIC FINALE =====
      if (ctaRef.current) {
        const ctaTl = gsap.timeline({
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        })

        ctaTl.fromTo(ctaRef.current,
          { y: 100, opacity: 0, scale: 0.8, rotateX: 20 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: 'expo.out' }
        )
        .fromTo('.cta-button',
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
          '-=0.4'
        )

        // Pulsing glow effect on CTA
        gsap.to('.cta-glow', {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: 'power2.out'
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Animated Background Particles - Fixed positions to avoid hydration mismatch */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { left: '10%', top: '15%' }, { left: '25%', top: '35%' }, { left: '40%', top: '20%' },
            { left: '55%', top: '45%' }, { left: '70%', top: '25%' }, { left: '85%', top: '55%' },
            { left: '15%', top: '65%' }, { left: '30%', top: '80%' }, { left: '45%', top: '70%' },
            { left: '60%', top: '85%' }, { left: '75%', top: '60%' }, { left: '90%', top: '40%' },
            { left: '5%', top: '50%' }, { left: '20%', top: '90%' }, { left: '35%', top: '10%' },
            { left: '50%', top: '30%' }, { left: '65%', top: '75%' }, { left: '80%', top: '5%' },
            { left: '95%', top: '70%' }, { left: '48%', top: '55%' }
          ].map((pos, i) => (
            <div
              key={i}
              className="hero-particle absolute w-2 h-2 bg-blue-500/30 rounded-full"
              style={pos}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0">
          <div className="hero-glow absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[180px]" />
          <div className="hero-glow absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" style={{ animationDelay: '1s' }} />
          <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px]" style={{ animationDelay: '2s' }} />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="hero-badge inline-block mb-8">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm font-bold text-blue-400 border border-blue-500/40 shadow-lg shadow-blue-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              8 Modelos Especializados
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </span>
          </div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-white">
            Poder <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Ilimitado</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-normal leading-relaxed">
            Cada modelo diseñado para una tarea específica. Máximo rendimiento garantizado.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={el => { featuresRef.current[index] = el }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Card */}
                <div className={`relative p-6 h-full bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 rounded-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/30`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    {iconComponents[feature.iconKey] &&
                      (() => { const Icon = iconComponents[feature.iconKey]; return <Icon className="w-8 h-8 text-white" />; })()
                    }
                  </div>

                  {/* Stats badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r ${feature.color} text-white`}>
                    {feature.stats}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{feature.subtitle}</p>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{feature.description}</p>

                  {/* Use cases */}
                  <div className="space-y-2">
                    {feature.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/60 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                        {useCase}
                      </div>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-bold text-purple-400 border border-purple-500/30">
              Comparativa
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 mb-4 text-white">
              GarBotGPT vs <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Competencia</span>
            </h2>
          </div>

          <div ref={comparisonRef} className="rounded-3xl overflow-hidden border border-white/10"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white/50 font-medium">Característica</th>
                    <th className="p-6 text-center">
                      <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GarBotGPT</span>
                    </th>
                    <th className="p-6 text-center text-white/50">ChatGPT</th>
                    <th className="p-6 text-center text-white/50">Claude</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-white/70">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.garbotgpt ? (
                          <span className="text-2xl">✅</span>
                        ) : (
                          <span className="text-2xl">❌</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.chatgpt ? (
                          <span className="text-2xl opacity-50">✓</span>
                        ) : (
                          <span className="text-2xl">❌</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.claude ? (
                          <span className="text-2xl opacity-50">✓</span>
                        ) : (
                          <span className="text-2xl">❌</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-bold text-green-400 border border-green-500/30">
              Integraciones
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 mb-4 text-white">
              Conecta con tus <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">herramientas</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              GarBotGPT se integra con las aplicaciones que ya usas
            </p>
          </div>

          <div ref={integrationsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration) => {
              const IntIcon = integrationIconComponents[integration.name]
              return (
                <div
                  key={integration.name}
                  className="integration-item group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer text-center"
                >
                  <div className={`w-16 h-16 ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    {IntIcon && <IntIcon className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-white font-bold">{integration.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full text-sm font-bold text-amber-400 border border-amber-500/30">
              Seguridad
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 mb-4 text-white">
              Tus datos están <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">protegidos</span>
            </h2>
          </div>

          <div ref={securityRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((item) => {
              const SecIcon = securityIconComponents[item.iconKey]
              return (
                <div
                  key={item.title}
                  className="security-card group p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {SecIcon && <SecIcon className="w-7 h-7 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/50">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div ref={ctaRef} className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-blue-600/30 to-cyan-500/30 blur-[120px]" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                ¿Listo para <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Empezar</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Prueba todos los modelos gratis. Sin tarjeta de crédito. Sin límites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-blue-500/30"
                >
                  Comenzar Gratis Ahora
                </a>
                <Link
                  href="/demo"
                  className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
                >
                  Probar Demo
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/40">
                Sin registro • Acceso instantáneo • 100% Gratis
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

