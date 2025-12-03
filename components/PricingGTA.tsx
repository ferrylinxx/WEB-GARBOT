'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    id: 1,
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    period: 'Gratis para siempre',
    features: [
      { name: '100 mensajes/día', included: true },
      { name: 'GarBotGPT-5-nano', included: true },
      { name: 'Soporte básico', included: true },
      { name: 'Historial 7 días', included: true },
      { name: 'Generación de imágenes', included: false },
      { name: 'API Access', included: false },
    ],
    gradient: 'from-gray-500 to-gray-400',
    popular: false,
    comingSoon: false
  },
  {
    id: 2,
    name: 'Pro',
    priceMonthly: 9.99,
    priceYearly: 7.99,
    period: '/mes',
    features: [
      { name: 'Mensajes ilimitados', included: true },
      { name: 'GarBotGPT-5.1', included: true },
      { name: 'GarBotGPT-5-mini incluido', included: true },
      { name: 'Soporte prioritario', included: true },
      { name: 'API Access', included: true },
      { name: 'Historial ilimitado', included: true },
    ],
    gradient: 'from-blue-600 to-cyan-400',
    popular: true,
    comingSoon: true
  },
  {
    id: 3,
    name: 'Enterprise',
    priceMonthly: 49.99,
    priceYearly: 39.99,
    period: '/mes',
    features: [
      { name: 'Todo de Pro', included: true },
      { name: 'Modelos personalizados', included: true },
      { name: 'SLA 99.99%', included: true },
      { name: 'Soporte 24/7', included: true },
      { name: 'Deployment privado', included: true },
      { name: 'Training personalizado', included: true },
    ],
    gradient: 'from-purple-600 to-pink-400',
    popular: false,
    comingSoon: true
  },
]

export default function PricingGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLDivElement>(null)
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [isYearly, setIsYearly] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  // Animación de precio
  useEffect(() => {
    priceRefs.current.forEach((priceEl, i) => {
      if (!priceEl) return
      const plan = plans[i]
      const targetPrice = isYearly ? plan.priceYearly : plan.priceMonthly

      gsap.to({}, {
        duration: 0.6,
        onUpdate: function() {
          const progress = this.progress()
          const startPrice = isYearly ? plan.priceMonthly : plan.priceYearly
          const currentPrice = startPrice + (targetPrice - startPrice) * progress
          if (priceEl) {
            priceEl.textContent = currentPrice === 0 ? '0' : currentPrice.toFixed(2)
          }
        },
        ease: 'power2.out'
      })
    })
  }, [isYearly])

  useLayoutEffect(() => {
    const mobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Title (más suave en móvil)
      gsap.fromTo(titleRef.current,
        { y: mobile ? 40 : 80, opacity: 0 },
        { y: 0, opacity: 1, duration: mobile ? 0.7 : 1, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: mobile ? 'top 95%' : 'top 85%' } }
      )

      // Cards cascade (adaptado para móvil)
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: mobile ? 60 : 150, opacity: 0, rotateX: mobile ? -5 : -15, scale: mobile ? 0.95 : 0.9 },
          {
            y: 0, opacity: 1, rotateX: 0, scale: 1,
            duration: mobile ? 0.6 : 1,
            delay: i * (mobile ? 0.1 : 0.2),
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: mobile ? 'top 95%' : 'top 90%', toggleActions: 'play none none reverse' }
          }
        )

        // Hover effect (solo en desktop)
        if (!mobile) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, scale: 1.02, duration: 0.3, ease: 'power2.out' })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
          })
        }
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 bg-black overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Elige tu <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8">Empieza gratis y escala cuando lo necesites</p>

          {/* Toggle Anual/Mensual */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-white' : 'text-white/40'}`}>Mensual</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-white/10 rounded-full border border-white/20 transition-all hover:border-white/40"
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  isYearly ? 'left-9' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-white' : 'text-white/40'}`}>
              Anual
              <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">-20%</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              ref={el => { cardsRef.current[i] = el }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-white/10 to-white/5 border-blue-500/50 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Coming Soon Overlay */}
              {plan.comingSoon && hoveredPlan === plan.id && (
                <div className="absolute inset-0 z-20 rounded-3xl bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 animate-fadeIn">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl border border-white/20 shadow-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl animate-bounce">🚀</span>
                        <span className="text-2xl font-black text-white">PRÓXIMAMENTE</span>
                        <span className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>✨</span>
                      </div>
                      <p className="text-white/70 text-center text-sm">Estamos trabajando en algo increíble</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-white/50 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    En desarrollo activo
                  </div>
                </div>
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold">
                  ⭐ Más Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                {plan.name}
              </h3>

              {/* Price with animation */}
              <div className="mb-6">
                <span className="text-white/50 text-2xl">€</span>
                <span
                  ref={el => { priceRefs.current[i] = el }}
                  className="text-5xl font-black text-white"
                >
                  {isYearly ? plan.priceYearly.toFixed(2) : plan.priceMonthly.toFixed(2)}
                </span>
                <span className="text-white/50 ml-1">{plan.period}</span>
                {isYearly && plan.priceMonthly > 0 && (
                  <div className="text-green-400 text-sm mt-1">
                    Ahorras €{((plan.priceMonthly - plan.priceYearly) * 12).toFixed(2)}/año
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className={`flex items-center gap-3 ${feature.included ? 'text-white/70' : 'text-white/30'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      feature.included
                        ? `bg-gradient-to-r ${plan.gradient} text-white`
                        : 'bg-white/10 text-white/30'
                    }`}>
                      {feature.included ? '✓' : '✕'}
                    </span>
                    {feature.name}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://ia.garbotgpt.com"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.priceMonthly === 0 ? 'Comenzar Gratis' : 'Suscribirse'}
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            {showComparison ? 'Ocultar comparativa' : 'Ver comparativa completa'}
            <svg
              className={`w-5 h-5 transition-transform ${showComparison ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Feature Comparison Table */}
        {showComparison && (
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-white/50 text-sm font-medium p-4 border-b border-white/10">Característica</th>
                  {plans.map(plan => (
                    <th key={plan.id} className={`text-center p-4 border-b border-white/10 ${plan.popular ? 'bg-blue-500/10' : ''}`}>
                      <span className={`font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Mensajes por día', values: ['100', 'Ilimitados', 'Ilimitados'] },
                  { feature: 'Modelo IA', values: ['GarBotGPT-5-nano', 'GarBotGPT-5.1', 'Personalizado'] },
                  { feature: 'Generación de imágenes', values: ['❌', '✅ Ilimitadas', '✅ Ilimitadas'] },
                  { feature: 'Análisis de documentos', values: ['5/día', 'Ilimitados', 'Ilimitados'] },
                  { feature: 'Historial', values: ['7 días', 'Ilimitado', 'Ilimitado'] },
                  { feature: 'API Access', values: ['❌', '✅', '✅ Priority'] },
                  { feature: 'Soporte', values: ['Email', 'Prioritario', '24/7 Dedicado'] },
                  { feature: 'Exportación', values: ['PDF', 'PDF, Word, Excel', 'Todos + Personalizado'] },
                ].map((row, ri) => (
                  <tr key={ri} className="hover:bg-white/5 transition-colors">
                    <td className="text-white/70 text-sm p-4 border-b border-white/5">{row.feature}</td>
                    {row.values.map((val, vi) => (
                      <td key={vi} className={`text-center text-white/60 text-sm p-4 border-b border-white/5 ${plans[vi].popular ? 'bg-blue-500/5' : ''}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

