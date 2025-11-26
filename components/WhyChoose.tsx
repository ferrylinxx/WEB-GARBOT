'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhyChoose() {
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

  const advantages = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
      title: 'Interfaz intuitiva',
      description: 'Fácil de usar para todos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: 'Personalización',
      description: 'Adaptado a cada usuario',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: 'Aprendizaje continuo',
      description: 'Mejora constantemente',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Cobertura amplia',
      description: 'Múltiples idiomas y culturas',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">Por qué elegir GarBotGPT</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-michroma font-bold mb-6">
            Estamos aquí para ofrecerte <br />
            <span className="gradient-text">ideas que funcionan</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Descubre las razones por las que GarBotGPT es la mejor opción para tus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`glass-effect p-8 md:p-10 rounded-3xl transition-all duration-1000 hover:shadow-2xl hover:shadow-primary/20 group ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                IA con visión profesional
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              Nuestro sistema está entrenado con grandes volúmenes de datos y optimizado para ofrecer
              respuestas útiles, precisas y personalizadas en tiempo real.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">Precisión</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/30">Velocidad</span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/30">Confiabilidad</span>
            </div>
          </div>

          <div className={`glass-effect p-8 md:p-10 rounded-3xl transition-all duration-1000 hover:shadow-2xl hover:shadow-secondary/20 group ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-secondary transition-colors">
                Experiencia tecnológica real
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              Desarrollado por un programador apasionado por la IA, GarBotGPT está pensado para ofrecer
              soluciones prácticas, creativas y adaptadas a cualquier reto digital.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">Innovación</span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/30">Creatividad</span>
              <span className="px-4 py-2 bg-pink-500/10 text-pink-400 text-sm rounded-full border border-pink-500/30">Adaptabilidad</span>
            </div>
          </div>
        </div>

        <div className={`glass-effect p-8 md:p-12 rounded-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl md:text-3xl font-michroma font-bold mb-10 text-center">
            Ventajas <span className="gradient-text">principales</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4 inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity`}></div>
                  <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {advantage.description}
                </p>
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${advantage.color} rounded-full mx-auto mt-4 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

