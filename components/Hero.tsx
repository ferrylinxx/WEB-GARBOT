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
      {/* Gradientes estáticos optimizados - Sin parallax para mejor rendimiento */}
      <div className="absolute inset-0 overflow-hidden opacity-30 hidden md:block">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        ></div>
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
            <span className="block gradient-text">Tu asistente de IA más potente</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed px-4"
             style={{
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}
             itemProp="description">
            Genera contenido, analiza documentos, crea imágenes y automatiza tareas complejas. <br className="hidden md:block" />
            Todo el poder de la IA en una sola plataforma.
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

