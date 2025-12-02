'use client'

import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="contacto" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`glass-effect p-8 md:p-16 rounded-3xl relative overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-primary/10 to-transparent opacity-50"></div>

          <div className="relative z-10">
            {/* Main heading */}
            <div className="mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-semibold text-primary border border-primary/30">
                  Comienza Gratis
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-michroma font-bold mb-6">
                Transforma tu forma de trabajar con <br />
                <span className="gradient-text">GarBotGPT</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
                Potencia tu productividad con IA avanzada. Genera contenido, analiza datos y automatiza tareas en segundos.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://garbotgpt.com"
                target="_blank"
                className="group relative bg-gradient-to-r from-primary to-secondary px-12 py-5 rounded-full text-white font-semibold text-lg transition-all transform hover:scale-110 glow-effect overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Comenzar Gratis
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="/caracteristicas"
                className="glass-effect px-12 py-5 rounded-full text-white font-semibold text-lg transition-all transform hover:scale-110 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ver Características
              </a>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Búsqueda Web</h4>
                <p className="text-white/70 text-sm leading-relaxed">Resultados precisos en tiempo real con fuentes verificadas</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Generación de Imagen</h4>
                <p className="text-white/70 text-sm leading-relaxed">Creatividad automatizada con IA de última generación</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">ChatBot Avanzado</h4>
                <p className="text-white/70 text-sm leading-relaxed">Conversación fluida y natural con contexto dinámico</p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Privacidad Garantizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

