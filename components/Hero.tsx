'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      aria-label="Sección principal de GarBotGPT"
    >
      {/* PREMIUM gradient orbs - Apple style - Ocultos en móvil para rendimiento */}
      <div className="absolute inset-0 overflow-hidden opacity-50 hidden md:block">
        {/* Orbe principal azul */}
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.20) 0%, rgba(0, 113, 227, 0.10) 40%, transparent 70%)',
            transform: `translateY(${scrollY * 0.3}px)`,
            animation: 'orbPulse 8s ease-in-out infinite'
          }}
        ></div>
        {/* Orbe secundario cyan */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.08) 40%, transparent 70%)',
            transform: `translateY(${scrollY * -0.2}px)`,
            animation: 'orbPulse 10s ease-in-out infinite 2s'
          }}
        ></div>
        {/* Orbe terciario azul claro */}
        <div
          className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.12) 0%, rgba(147, 197, 253, 0.06) 40%, transparent 70%)',
            transform: `translateY(${scrollY * 0.15}px)`,
            animation: 'orbPulse 12s ease-in-out infinite 4s'
          }}
        ></div>
      </div>

      {/* Partículas flotantes premium - Solo desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[...Array(20)].map((_, i) => {
          // Valores fijos para evitar hydration mismatch
          const positions = [
            { left: 10, top: 20, duration: 10, delay: 0 },
            { left: 25, top: 15, duration: 12, delay: 1 },
            { left: 40, top: 30, duration: 9, delay: 2 },
            { left: 55, top: 25, duration: 11, delay: 0.5 },
            { left: 70, top: 40, duration: 13, delay: 1.5 },
            { left: 85, top: 35, duration: 10, delay: 2.5 },
            { left: 15, top: 60, duration: 14, delay: 3 },
            { left: 30, top: 55, duration: 9, delay: 0.8 },
            { left: 45, top: 70, duration: 11, delay: 1.8 },
            { left: 60, top: 65, duration: 12, delay: 2.8 },
            { left: 75, top: 80, duration: 10, delay: 3.5 },
            { left: 90, top: 75, duration: 13, delay: 4 },
            { left: 20, top: 45, duration: 11, delay: 1.2 },
            { left: 35, top: 50, duration: 9, delay: 2.2 },
            { left: 50, top: 10, duration: 14, delay: 3.2 },
            { left: 65, top: 90, duration: 10, delay: 4.2 },
            { left: 80, top: 20, duration: 12, delay: 0.3 },
            { left: 12, top: 85, duration: 11, delay: 1.3 },
            { left: 48, top: 42, duration: 13, delay: 2.3 },
            { left: 92, top: 58, duration: 9, delay: 3.3 }
          ]
          const pos = positions[i]
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animation: `floatParticle ${pos.duration}s ease-in-out infinite ${pos.delay}s`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)'
              }}
            />
          )
        })}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Apple-style minimal heading - Responsive - SEO Optimizado */}
        <header className="mb-12 space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 md:mb-6 px-2"
              style={{
                fontWeight: 600,
                letterSpacing: '-0.015em',
                lineHeight: 1.05
              }}>
            <span className="block text-gray-900 mb-2">GarBotGPT</span>
            <span className="block gradient-text">Inteligencia Artificial que Inspira</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed px-4"
             style={{
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}
             itemProp="description">
            Asistente de IA disponible 24/7 para generar texto, analizar documentos, crear imágenes y automatizar tareas. <br className="hidden md:block" />
            Creatividad y tecnología en perfecta armonía con inteligencia artificial adaptativa.
          </p>
        </header>

        {/* Apple-style CTA buttons con efectos mejorados - Responsive - SEO */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4" aria-label="Acciones principales">
          <a
            href="https://ia.garbotgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button px-6 sm:px-8 py-3 text-base sm:text-lg shadow-2xl chromatic-glass dynamic-reflection w-full sm:w-auto text-center"
            aria-label="Probar GarBotGPT"
          >
            Comenzar Ahora
          </a>
          <Link
            href="/caracteristicas"
            className="apple-button-secondary px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full light-refraction chromatic-glass-rainbow w-full sm:w-auto text-center"
            aria-label="Ver características de GarBotGPT"
          >
            Ver Características
          </Link>
        </nav>

        {/* Minimal stats - Apple style - Responsive */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 max-w-4xl mx-auto px-4">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text" style={{ letterSpacing: '-0.02em' }}>8+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-500 font-normal">Modelos de IA</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text" style={{ letterSpacing: '-0.02em' }}>24/7</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-500 font-normal">Disponible</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold gradient-text" style={{ letterSpacing: '-0.02em' }}>∞</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-500 font-normal">Posibilidades</div>
          </div>
        </div>

        {/* Minimal scroll indicator - Oculto en móvil */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

