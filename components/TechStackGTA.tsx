'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: 'OpenAI', icon: '🤖' },
  { name: 'GPT-4', icon: '🧠' },
  { name: 'Claude', icon: '🎭' },
  { name: 'DALL-E', icon: '🎨' },
  { name: 'Midjourney', icon: '🖼️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '💙' },
  { name: 'Vercel', icon: '🔺' },
  { name: 'AWS', icon: '☁️' },
]

export default function TechStackGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
        }
      )

      // Infinite marquee
      const marqueeWidth = marqueeRef.current?.scrollWidth || 0
      gsap.to(marqueeRef.current, {
        x: -marqueeWidth / 2,
        duration: 20,
        ease: 'none',
        repeat: -1,
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 px-4">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Powered by</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Las mejores <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">tecnologías</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-8">
          <div ref={marqueeRef} className="flex items-center gap-12">
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 whitespace-nowrap hover:bg-white/10 transition-all duration-300 group cursor-default"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                <span className="text-white/80 text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

