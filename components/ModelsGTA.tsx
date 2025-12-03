'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const models = [
  { id: 1, name: 'GarBotGPT-5.1', desc: 'El más inteligente', icon: '🧠', color: 'from-violet-600 to-purple-500', speed: '256K', power: 99 },
  { id: 2, name: 'GarBotGPT-5', desc: 'Razonamiento avanzado', icon: '🎭', color: 'from-orange-500 to-amber-400', speed: '200K', power: 97 },
  { id: 3, name: 'GarBotGPT-5-nano', desc: 'Ultra rápido', icon: '💎', color: 'from-blue-500 to-cyan-400', speed: '64K', power: 94 },
  { id: 4, name: 'GarBotGPT-5-mini', desc: 'Imágenes HD', icon: '🎨', color: 'from-pink-500 to-rose-400', speed: '4K', power: 96 },
  { id: 5, name: 'GarBotGPT-Vision', desc: 'Multimodal', icon: '👁️', color: 'from-emerald-500 to-teal-400', speed: '128K', power: 95 },
  { id: 6, name: 'GarBotGPT-Code', desc: 'Especializado en código', icon: '💻', color: 'from-indigo-500 to-blue-400', speed: '128K', power: 98 },
]

export default function ModelsGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const mobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Title reveal with split (más suave en móvil)
      gsap.fromTo(titleRef.current,
        { y: mobile ? 50 : 100, opacity: 0, rotateX: mobile ? -20 : -45 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: mobile ? 0.8 : 1.2,
          ease: mobile ? 'power3.out' : 'back.out(1.7)',
          scrollTrigger: { trigger: titleRef.current, start: mobile ? 'top 95%' : 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Cards 3D staggered reveal (adaptado para móvil)
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        // En móvil: animación más simple sin rotaciones 3D extremas
        gsap.set(card, {
          rotateY: mobile ? 0 : (i % 2 === 0 ? -90 : 90),
          opacity: 0,
          scale: mobile ? 0.9 : 0.5,
          y: mobile ? 30 : 0,
          transformPerspective: 1000,
          transformOrigin: mobile ? 'center center' : (i % 2 === 0 ? 'right center' : 'left center')
        })

        gsap.to(card, {
          rotateY: 0,
          opacity: 1,
          scale: 1,
          y: 0,
          duration: mobile ? 0.6 : 1,
          delay: i * (mobile ? 0.05 : 0.1),
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: mobile ? 'top 95%' : 'top 90%', toggleActions: 'play none none reverse' }
        })

        // Power bar animation
        const powerBar = card.querySelector('.power-bar-fill')
        if (powerBar) {
          gsap.fromTo(powerBar,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: mobile ? 1 : 1.5,
              delay: i * (mobile ? 0.05 : 0.1) + 0.3,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: mobile ? 'top 95%' : 'top 85%', toggleActions: 'play none none reverse' }
            }
          )
        }

        // Hover 3D effect (solo en desktop)
        if (!mobile) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, rotateY: 5, rotateX: -5, duration: 0.4, ease: 'power2.out' })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, rotateY: 0, rotateX: 0, duration: 0.4, ease: 'power2.out' })
          })
        }
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20" style={{ transformStyle: 'preserve-3d' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">8+ Modelos</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
            Todos los <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Modelos</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">Un solo lugar para acceder a la IA más avanzada del planeta</p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <div
              key={model.id}
              ref={el => { cardsRef.current[i] = el }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{model.icon}</span>
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${model.color} text-white text-xs font-bold`}>{model.speed}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{model.name}</h3>
                <p className="text-white/50 mb-4">{model.desc}</p>
                
                {/* Power bar */}
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`power-bar-fill absolute inset-y-0 left-0 bg-gradient-to-r ${model.color} rounded-full origin-left`}
                    style={{ width: `${model.power}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-white/40">
                  <span>Potencia</span>
                  <span className="text-white/80 font-semibold">{model.power}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

