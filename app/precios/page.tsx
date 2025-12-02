'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function PreciosPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const faqRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Free',
      price: '0',
      priceYearly: '0',
      description: 'Perfecto para empezar',
      popular: false,
      icon: '🚀',
      color: 'from-green-600 to-emerald-500',
      features: [
        { text: 'Acceso a GarBotGPT-5', included: true },
        { text: 'Generación de texto ilimitada', included: true },
        { text: 'Análisis de documentos', included: true },
        { text: 'Búsqueda web en tiempo real', included: true },
        { text: 'Imágenes (10/día)', included: true },
        { text: 'Videos (5/día)', included: true },
        { text: 'Soporte por email', included: true },
        { text: 'API access', included: false },
      ],
      cta: 'Comenzar Gratis',
      link: 'https://ia.garbotgpt.com'
    },
    {
      name: 'Pro',
      price: '19',
      priceYearly: '190',
      description: 'Para profesionales',
      popular: true,
      icon: '⚡',
      color: 'from-blue-600 to-cyan-500',
      comingSoon: true,
      features: [
        { text: 'Todo lo de Free', included: true },
        { text: 'GarBotGPT-5.1 ilimitado', included: true },
        { text: 'Imágenes ilimitadas', included: true },
        { text: 'Videos ilimitados', included: true },
        { text: 'Modelos premium', included: true },
        { text: 'Prioridad en respuestas', included: true },
        { text: 'API access completo', included: true },
        { text: 'Soporte 24/7', included: true },
      ],
      cta: 'Próximamente',
      link: '#'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceYearly: 'Custom',
      description: 'Para empresas',
      popular: false,
      icon: '🏢',
      color: 'from-purple-600 to-pink-500',
      comingSoon: true,
      features: [
        { text: 'Todo lo de Pro', included: true },
        { text: 'Servidores dedicados', included: true },
        { text: 'Modelos personalizados', included: true },
        { text: 'Entrenamiento con tus datos', included: true },
        { text: 'SLA 99.9%', included: true },
        { text: 'GDPR/HIPAA', included: true },
        { text: 'Gestor dedicado', included: true },
        { text: 'Onboarding VIP', included: true },
      ],
      cta: 'Contactar',
      link: '/contacto'
    }
  ]

  const faqs = [
    { question: '¿GarBotGPT es realmente gratis?', answer: 'Sí, el plan Free es completamente gratis para siempre. Sin tarjeta de crédito, sin compromisos. Accede a texto ilimitado, 10 imágenes/día y 5 videos/día.' },
    { question: '¿Cuándo estarán disponibles los planes Pro y Enterprise?', answer: 'Estamos trabajando en los planes premium. Suscríbete a nuestra newsletter para ser el primero en enterarte cuando lancemos.' },
    { question: '¿Puedo usar GarBotGPT para mi negocio?', answer: 'Por supuesto. El plan Free es perfecto para empezar y probar nuestras capacidades. Cuando necesites más, podrás actualizar a Pro o Enterprise.' },
    { question: '¿Hay límites en el plan Free?', answer: 'La generación de texto es ilimitada. Las imágenes están limitadas a 10/día y los videos a 5/día. Análisis de documentos y búsqueda web también son ilimitados.' },
    { question: '¿Mis datos están seguros?', answer: 'Absolutamente. Utilizamos encriptación de extremo a extremo y no almacenamos tus conversaciones. Cumplimos con GDPR y las regulaciones de privacidad.' },
    { question: '¿Puedo cambiar de plan en cualquier momento?', answer: 'Sí, podrás actualizar o degradar tu plan cuando quieras. Los cambios se aplicarán de inmediato sin penalizaciones.' },
  ]

  const features = [
    { icon: '⚡', title: 'Velocidad', description: 'Respuestas en menos de 0.5 segundos' },
    { icon: '🌐', title: 'Multilenguaje', description: 'Soportamos más de 50 idiomas' },
    { icon: '🔒', title: 'Seguro', description: 'Encriptación E2E y GDPR compliant' },
    { icon: '📱', title: 'Multiplataforma', description: 'Web, API y pronto apps móviles' },
  ]

  const testimonials = [
    { name: 'Carlos M.', role: 'CEO, TechStartup', quote: 'GarBotGPT ha revolucionado cómo creamos contenido. El plan Free es increíblemente generoso.', avatar: '👨‍💼' },
    { name: 'Laura G.', role: 'Marketing Manager', quote: 'Las imágenes que genera son profesionales. He ahorrado horas en diseño.', avatar: '👩‍💻' },
    { name: 'Miguel R.', role: 'Desarrollador', quote: 'La generación de código es precisa. Me ayuda a programar más rápido.', avatar: '👨‍🔬' },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.pricing-badge',
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      )
      gsap.fromTo('.pricing-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
      gsap.fromTo('.pricing-toggle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      )

      // Cards stagger animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 100, opacity: 0, rotateY: i === 1 ? 0 : (i === 0 ? 10 : -10), scale: 0.9 },
          {
            y: 0, opacity: 1, rotateY: 0, scale: 1,
            duration: 1, delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })

      // Features animation
      if (featuresRef.current) {
        gsap.fromTo('.feature-box',
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.6, stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      }

      // Testimonials animation
      if (testimonialsRef.current) {
        gsap.fromTo('.testimonial-card',
          { x: -60, opacity: 0, scale: 0.95 },
          {
            x: 0, opacity: 1, scale: 1,
            duration: 0.8, stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          }
        )
      }

      // FAQ animation
      gsap.fromTo(faqRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: faqRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="pricing-badge inline-block mb-6">
            <span className="px-6 py-2.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-bold text-green-400 border border-green-500/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              100% GRATIS PARA SIEMPRE
            </span>
          </div>
          <h1 className="pricing-title text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 text-white">
            Precios <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Simples</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10">
            Comienza gratis. Sin tarjeta de crédito. Sin compromisos.
          </p>

          {/* Billing Toggle */}
          <div className="pricing-toggle flex items-center justify-center gap-4">
            <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-white/50'}`}>Mensual</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-transform ${billingPeriod === 'yearly' ? 'translate-x-8' : ''}`} />
            </button>
            <span className={`font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-white/50'}`}>
              Anual <span className="text-green-400 text-sm">-20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                ref={el => { cardsRef.current[index] = el }}
                className={`relative group rounded-3xl p-8 transition-all duration-500 hover:translate-y-[-8px] ${
                  plan.popular ? 'md:scale-105 z-10' : ''
                }`}
                style={{
                  perspective: '1000px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: plan.popular ? '2px solid rgba(59,130,246,0.5)' : '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-1">
                      ⭐ MÁS POPULAR
                    </span>
                  </div>
                )}

                {plan.comingSoon && (
                  <div className="absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-sm flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg">
                      PRÓXIMAMENTE
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 relative z-10">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    {plan.price === '0' ? (
                      <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Gratis</span>
                    ) : plan.price === 'Custom' ? (
                      <span className="text-4xl font-black text-white">Personalizado</span>
                    ) : (
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${plan.color}`} />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  target={plan.link.startsWith('http') ? '_blank' : undefined}
                  rel={plan.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block w-full py-3 px-6 rounded-full text-center font-bold transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                      : plan.price === '0'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
              Preguntas <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group cursor-pointer rounded-2xl p-6 transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <summary className="flex items-center justify-between font-semibold text-white text-lg list-none">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-r from-green-600/30 to-emerald-500/30 blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                ¿Listo para <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">comenzar</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios transformando su trabajo con IA
              </p>
              <a
                href="https://ia.garbotgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/30"
              >
                Comenzar Gratis Ahora
              </a>
              <p className="mt-6 text-sm text-white/40">
                Sin tarjeta de crédito • Acceso instantáneo
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

