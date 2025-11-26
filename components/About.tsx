'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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
    <section ref={sectionRef} id="sobre-mi" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Introducción / Bienvenido a GarBotGPT</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-michroma font-bold mb-6">
            Innovación digital con <span className="gradient-text">Inteligencia Artificial</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`glass-effect p-8 md:p-10 rounded-3xl transition-all duration-1000 hover:shadow-2xl hover:shadow-primary/20 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-michroma font-bold gradient-text">Sobre mí</h3>
            </div>

            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white">
              Desarrollador apasionado por la Inteligencia Artificial
            </h4>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                Soy un apasionado de la <span className="text-primary font-semibold">programación</span> y de todo lo que la inteligencia artificial puede ofrecernos.
                Me motiva aprender, experimentar y crear soluciones que aporten valor real.
              </p>

              <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
                <p className="text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">GarBotGPT</span> es el resultado de esa pasión: un proyecto personal en constante evolución,
                  desarrollado para explorar los límites del conocimiento automático, la conversación inteligente y la creatividad digital.
                </p>
              </div>

              <p className="text-white/80 leading-relaxed">
                Esta IA no solo responde; <span className="font-semibold text-primary">comprende, se adapta y crece contigo</span>.
                Está pensada para ayudarte a resolver problemas, generar ideas, automatizar tareas y acompañarte en tu proceso
                de aprendizaje o desarrollo profesional.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 italic">
                "La inteligencia artificial no reemplaza la creatividad humana, la amplifica."
              </p>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/20 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    IA con visión profesional
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Nuestro sistema está entrenado con grandes volúmenes de datos y optimizado para ofrecer
                    respuestas útiles, precisas y personalizadas en tiempo real.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Precisión</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">Velocidad</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-secondary/20 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    Experiencia tecnológica real
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Desarrollado por un programador apasionado por la IA, GarBotGPT está pensado para ofrecer
                    soluciones prácticas, creativas y adaptadas a cualquier reto digital.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Innovación</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">Adaptabilidad</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/70 mb-1">Desarrollado por</p>
                  <p className="text-lg font-semibold gradient-text">Ferran Garola Bonilla</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

