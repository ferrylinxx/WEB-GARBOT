'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  { q: '¿Qué modelos de IA están disponibles?', a: 'Disponemos de nuestros modelos propietarios: GarBotGPT-5.1 (nuestro modelo más avanzado con razonamiento superior), GarBotGPT-5.0 (equilibrio perfecto entre velocidad y calidad) y GarVideo (generación de videos con IA de última generación). Constantemente mejoramos y actualizamos nuestros modelos.' },
  { q: '¿Puedo usar GarBotGPT para mi empresa?', a: 'Sí, ofrecemos planes Enterprise con SLA garantizado, soporte 24/7, deployment privado y personalización completa según tus necesidades.' },
  { q: '¿Mis datos están seguros?', a: 'Absolutamente. Utilizamos encriptación de nivel militar (AES-256), cumplimos con GDPR y SOC 2, y nunca usamos tus datos para entrenar modelos.' },
  { q: '¿Hay límites de uso?', a: 'Actualmente no hay límites de uso. Disfruta de acceso ilimitado a todas las funcionalidades de GarBotGPT sin restricciones.' },
  { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí, puedes cancelar tu suscripción cuando quieras sin penalizaciones. Tu acceso continuará hasta el final del período pagado.' },
]

export default function FAQGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const answersRef = useRef<(HTMLDivElement | null)[]>([])
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return

        // Animación adaptada: menos movimiento en móvil
        const xOffset = isMobile ? (i % 2 === 0 ? -30 : 30) : (i % 2 === 0 ? -100 : 100)

        gsap.fromTo(item,
          { x: xOffset, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: isMobile ? 0.5 : 0.8,
            delay: i * (isMobile ? 0.05 : 0.1),
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: isMobile ? 'top 95%' : 'top 90%', toggleActions: 'play none none reverse' }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [isMobile])

  const toggleFAQ = (index: number) => {
    const answer = answersRef.current[index]
    if (!answer) return

    if (openIndex === index) {
      gsap.to(answer, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' })
      setOpenIndex(null)
    } else {
      // Close previous
      if (openIndex !== null && answersRef.current[openIndex]) {
        gsap.to(answersRef.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' })
      }
      // Open new
      gsap.set(answer, { height: 'auto', opacity: 1 })
      const h = answer.offsetHeight
      gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: h, opacity: 1, duration: 0.4, ease: 'power2.out' })
      setOpenIndex(index)
    }
  }

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,113,227,0.1)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Preguntas <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Frecuentes</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={el => { itemsRef.current[i] = el }}
              className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                openIndex === i ? 'bg-white/10 border-blue-500/50' : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <span className="text-white text-xl font-light">+</span>
                </div>
              </button>
              <div ref={el => { answersRef.current[i] = el }} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <div className="px-6 pb-6 text-white/60 leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

