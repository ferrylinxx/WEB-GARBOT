'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { id: 1, value: 50000, suffix: '+', label: 'Usuarios Activos', icon: '👥' },
  { id: 2, value: 10, suffix: 'M+', label: 'Mensajes Procesados', icon: '💬' },
  { id: 3, value: 99.9, suffix: '%', label: 'Uptime Garantizado', icon: '⚡' },
  { id: 4, value: 100, suffix: 'ms', prefix: '<', label: 'Tiempo de Respuesta', icon: '🚀' },
]

export default function StatsGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each stat
      statsRef.current.forEach((stat, i) => {
        if (!stat) return

        // Card entrance
        gsap.fromTo(stat,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: stat, start: 'top 90%', toggleActions: 'play none none reverse' }
          }
        )

        // Counter animation
        const numEl = numbersRef.current[i]
        if (numEl) {
          const target = stats[i].value
          const obj = { val: 0 }
          
          gsap.to(obj, {
            val: target,
            duration: 2,
            delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: stat, start: 'top 85%', toggleActions: 'play none none reverse' },
            onUpdate: () => {
              numEl.textContent = target % 1 === 0 ? Math.floor(obj.val).toString() : obj.val.toFixed(1)
            }
          })
        }
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Números que <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Impresionan</span>
          </h2>
          <p className="text-xl text-white/50">Creciendo cada día con nuestra comunidad</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              ref={el => { statsRef.current[i] = el }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-white/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                {stat.prefix && <span className="text-blue-400">{stat.prefix}</span>}
                <span ref={el => { numbersRef.current[i] = el }}>0</span>
                <span className="text-blue-400">{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <div className="text-white/50 text-sm md:text-base">{stat.label}</div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

