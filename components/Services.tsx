'use client'

import { useEffect, useRef, useState } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      number: '01',
      title: 'Generación de Documentos',
      description: 'Crea documentos profesionales en múltiples formatos con IA avanzada',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '02',
      title: 'Creación y Análisis de Imágenes',
      description: 'Genera imágenes únicas o analiza contenido visual con precisión',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      gradient: 'from-pink-500 to-red-500'
    },
    {
      number: '03',
      title: 'Análisis de Documentos',
      description: 'Extrae información clave y obtén resúmenes automáticos',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      number: '04',
      title: 'Generación de Código y Webs',
      description: 'Desarrolla aplicaciones completas en múltiples lenguajes',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      number: '05',
      title: 'Reconocimiento de Voz',
      description: 'Interactúa mediante comandos de voz en tiempo real',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      number: '06',
      title: 'Búsqueda Web',
      description: 'Obtén información actualizada con fuentes verificadas',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      number: '07',
      title: 'Selector de Modelos de IA',
      description: 'Elige entre diferentes modelos según tus necesidades',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      number: '08',
      title: 'Contexto Dinámico y Memoria Inteligente',
      description: 'La IA recuerda y aprende de tus conversaciones',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      gradient: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Servicios / Mi Experiencia</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-michroma font-bold mb-6">
            Elige lo que realmente <span className="gradient-text">importa</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Descubre todas las capacidades que GarBotGPT tiene para ofrecerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredIndex === index ? 'scale-105' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl font-michroma gradient-text opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                    {service.number}
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="glass-effect p-8 rounded-3xl inline-block">
            <p className="text-white/80 text-lg mb-4">
              ¿Necesitas algo más específico?
            </p>
            <a
              href="https://garbotgpt.com"
              target="_blank"
              className="inline-block bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              Explorar todas las funciones
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

