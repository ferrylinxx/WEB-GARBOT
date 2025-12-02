'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const showcaseItems = [
  {
    id: 1,
    title: 'Conversaciones',
    titleAccent: 'Inteligentes',
    description: 'Mantén diálogos naturales y contextuales con la IA más avanzada. Memoria de conversación, contexto profundo y respuestas humanas.',
    stat: '8+',
    statLabel: 'Modelos IA',
    gradient: 'from-blue-600 to-cyan-400',
    features: ['Memoria contextual', 'Multi-idioma', 'Voz natural']
  },
  {
    id: 2,
    title: 'Velocidad',
    titleAccent: 'Extrema',
    description: 'Respuestas en milisegundos gracias a nuestra infraestructura optimizada con Edge Computing global.',
    stat: '<100',
    statLabel: 'ms respuesta',
    gradient: 'from-purple-600 to-pink-400',
    features: ['Edge Computing', 'CDN Global', '99.9% Uptime']
  },
  {
    id: 3,
    title: 'Posibilidades',
    titleAccent: 'Infinitas',
    description: 'Sin límites de uso, sin restricciones. Explora todo el potencial de la IA sin barreras artificiales.',
    stat: '∞',
    statLabel: 'Sin límites',
    gradient: 'from-emerald-600 to-teal-400',
    features: ['Uso ilimitado', 'API completa', 'Integraciones']
  }
]

export default function ShowcaseGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll effect
      const items = itemsRef.current.filter(Boolean)
      const totalWidth = items.length * 100

      // Pin and horizontal scroll
      gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current!.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${horizontalRef.current!.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })

      // Progress bar
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${horizontalRef.current!.scrollWidth}`,
          scrub: 1,
        }
      })

      // Individual item animations
      items.forEach((item, index) => {
        const content = item?.querySelector('.showcase-content')
        const stat = item?.querySelector('.showcase-stat')
        const features = item?.querySelectorAll('.showcase-feature')
        const glow = item?.querySelector('.showcase-glow')

        // Content reveal
        gsap.fromTo(content,
          { opacity: 0, x: 100, rotateY: -15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              containerAnimation: gsap.getById('horizontal') || undefined,
              start: 'left 80%',
              end: 'left 30%',
              scrub: 1,
            }
          }
        )

        // Stat counter animation
        gsap.fromTo(stat,
          { scale: 0, opacity: 0, rotation: -180 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: item,
              containerAnimation: gsap.getById('horizontal') || undefined,
              start: 'left 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Features stagger
        gsap.fromTo(features,
          { opacity: 0, y: 20, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: item,
              containerAnimation: gsap.getById('horizontal') || undefined,
              start: 'left 60%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Glow pulse
        gsap.to(glow, {
          scale: 1.2,
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div ref={triggerRef} className="relative overflow-hidden">
        {/* Section header - Fixed while scrolling */}
        <div className="absolute top-8 left-8 z-20">
          <div className="text-white/40 text-sm tracking-widest uppercase mb-2">Por qué</div>
          <div className="text-4xl md:text-5xl font-black text-white">
            Gar<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bot</span>GPT
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={horizontalRef}
          className="flex h-screen"
          style={{ width: `${showcaseItems.length * 100}vw` }}
        >
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => { itemsRef.current[index] = el }}
              className="relative flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-16"
              style={{ perspective: '1000px' }}
            >
              {/* Background glow */}
              <div
                className={`showcase-glow absolute w-[600px] h-[600px] bg-gradient-to-br ${item.gradient} opacity-20 blur-[100px] rounded-full`}
              />

              {/* Content */}
              <div className="showcase-content relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Stat circle */}
                <div className="showcase-stat relative flex-shrink-0">
                  <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center`}>
                    {/* Animated rings */}
                    <div className={`absolute inset-0 rounded-full border-2 border-dashed opacity-30 animate-[spin_20s_linear_infinite]`} style={{ borderColor: 'currentColor' }} />
                    <div className={`absolute inset-4 rounded-full border border-white/20`} />
                    <div className={`absolute inset-8 rounded-full bg-gradient-to-br ${item.gradient} opacity-10`} />

                    {/* Stat content */}
                    <div className="text-center z-10">
                      <div className={`text-6xl md:text-8xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                        {item.stat}
                      </div>
                      <div className="text-white/50 text-sm md:text-base mt-2 tracking-wide uppercase">{item.statLabel}</div>
                    </div>

                    {/* Orbiting dots */}
                    <div className={`absolute w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full`}
                      style={{
                        top: '10%',
                        left: '50%',
                        animation: 'orbit 8s linear infinite'
                      }}
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2">
                    {item.title}
                  </h3>
                  <h3 className={`text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-8`}>
                    {item.titleAccent}
                  </h3>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
                    {item.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`showcase-feature px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition-colors`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Item number */}
              <div className="absolute bottom-8 right-8 text-8xl font-black text-white/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
      `}</style>
    </section>
  )
}

