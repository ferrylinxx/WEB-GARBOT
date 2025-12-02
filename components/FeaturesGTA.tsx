'use client'

import { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LottieIcon from './LottieIcon'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    id: 1,
    title: 'GarBotGPT-5.1',
    description: 'Nuestro modelo más avanzado con razonamiento superior y contexto extendido de 256K tokens.',
    lottie: 'brain' as const,
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    stats: '256K tokens'
  },
  {
    id: 2,
    title: 'GarBotGPT-5-mini',
    description: 'Genera imágenes impresionantes en 4K con nuestro modelo de visión creativa.',
    lottie: 'art' as const,
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    stats: '4K resolution'
  },
  {
    id: 3,
    title: 'Análisis de Documentos',
    description: 'Sube PDFs, Word, Excel y extrae información instantáneamente con IA avanzada.',
    lottie: 'document' as const,
    gradient: 'from-emerald-600 via-green-500 to-lime-400',
    stats: '50+ formatos'
  },
  {
    id: 4,
    title: 'GarBotGPT-Code',
    description: 'Genera, revisa y optimiza código en más de 50 lenguajes de programación.',
    lottie: 'code' as const,
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    stats: '50+ lenguajes'
  }
]

export default function FeaturesGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const titleWordsRef = useRef<HTMLSpanElement[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal line animation
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Title words staggered reveal
      gsap.fromTo(titleWordsRef.current,
        {
          y: 100,
          opacity: 0,
          rotateX: -45,
          transformOrigin: 'center bottom'
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Cards - Scroll-triggered 3D reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const isLeft = index % 2 === 0

        // Initial state
        gsap.set(card, {
          opacity: 0,
          x: isLeft ? -100 : 100,
          rotateY: isLeft ? 15 : -15,
          scale: 0.8,
          transformPerspective: 1000
        })

        // Scroll trigger animation
        gsap.to(card, {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        })

        // Parallax effect on scroll
        gsap.to(card, {
          y: (index % 2 === 0) ? -30 : -50,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const titleWords = ['Capacidades', 'Sin', 'Límites']

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative min-h-screen py-32 bg-black overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,113,227,0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0,212,255,0.15) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Top line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-24" style={{ perspective: '1000px' }}>
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Características</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 overflow-hidden">
            {titleWords.map((word, i) => (
              <span
                key={i}
                ref={el => { if (el) titleWordsRef.current[i] = el }}
                className={`inline-block mr-4 ${i === 0 ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent' : 'text-white'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {word}
              </span>
            ))}
          </h2>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Todo el poder de la inteligencia artificial más avanzada,
            <span className="text-white/80"> en una sola plataforma.</span>
          </p>
        </div>

        {/* Feature Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => { cardsRef.current[index] = el }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card background with gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="absolute inset-[1px] rounded-3xl bg-black/95" />

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`} />

              {/* Content */}
              <div className="relative p-8 lg:p-10 h-full">
                {/* Lottie Icon with animated background */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-150`} />
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <LottieIcon animation={feature.lottie} />
                  </div>
                </div>

                {/* Stats badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-20 mb-4`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-white/90 text-xs font-bold tracking-wider uppercase">{feature.stats}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Corner accent line */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-cyan-500/50 to-transparent" />
    </section>
  )
}

