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
      // ===== HERO SPECTACULAR ENTRANCE =====
      const heroTl = gsap.timeline()

      // Floating money/coin particles
      gsap.to('.pricing-particle', {
        y: 'random(-100, 100)',
        x: 'random(-60, 60)',
        rotation: 'random(-360, 360)',
        scale: 'random(0.5, 1.5)',
        duration: 'random(4, 7)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 2.5, from: 'random' }
      })

      // Pulsing glow orbs
      gsap.to('.pricing-glow', {
        scale: 1.3,
        opacity: 0.5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.8
      })

      // Badge elastic entrance
      heroTl.fromTo('.pricing-badge',
        { y: -80, opacity: 0, scale: 0.3, filter: 'blur(15px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      )

      // Title with dramatic reveal
      heroTl.fromTo('.pricing-title',
        { y: 100, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', scale: 0.9 },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.2, ease: 'expo.out' },
        '-=0.7'
      )

      // Toggle with bounce
      heroTl.fromTo('.pricing-toggle',
        { y: 60, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      )

      // ===== PRICING CARDS - 3D FLIP REVEAL =====
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        const cardTl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
        })

        // Epic 3D entrance with perspective
        cardTl.fromTo(card,
          {
            y: 150,
            opacity: 0,
            rotateX: -45,
            rotateY: i === 0 ? -20 : (i === 2 ? 20 : 0),
            scale: 0.7,
            transformPerspective: 1000,
            filter: 'blur(8px)'
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.3,
            delay: i * 0.2,
            ease: 'expo.out'
          }
        )

        // Popular card special glow
        if (i === 1) {
          gsap.to(card.querySelector('.popular-glow'), {
            boxShadow: '0 0 60px rgba(59,130,246,0.5), 0 0 100px rgba(59,130,246,0.3)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          })
        }

        // Features stagger in
        const featureItems = card.querySelectorAll('li')
        cardTl.fromTo(featureItems,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
          '-=0.6'
        )
      })

      // ===== FEATURES - CIRCULAR EXPLOSION =====
      if (featuresRef.current) {
        gsap.fromTo('.feature-box',
          {
            y: 80,
            opacity: 0,
            scale: 0,
            rotation: -15
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: {
              amount: 0.5,
              from: 'center',
              ease: 'power2.out'
            },
            ease: 'elastic.out(1, 0.6)',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )

        // Hover float effect
        gsap.to('.feature-box', {
          y: 'random(-5, 5)',
          duration: 'random(2, 3)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: { amount: 1, from: 'random' },
          delay: 1
        })
      }

      // ===== TESTIMONIALS - WAVE REVEAL =====
      if (testimonialsRef.current) {
        gsap.fromTo('.testimonial-card',
          {
            x: -100,
            opacity: 0,
            scale: 0.85,
            rotateY: -25
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          }
        )
      }

      // ===== FAQ - ACCORDION REVEAL =====
      if (faqRef.current) {
        const faqItems = faqRef.current.querySelectorAll('details')
        gsap.fromTo(faqItems,
          { y: 50, opacity: 0, x: -30 },
          {
            y: 0, opacity: 1, x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="pricing-particle absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {['💰', '✨', '🎁', '💎', '⭐'][i % 5]}
            </div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0">
          <div className="pricing-glow absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[180px]" />
          <div className="pricing-glow absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="pricing-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[200px]" />
        </div>

        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="pricing-badge inline-block mb-8">
            <span className="px-8 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-bold text-green-400 border border-green-500/40 shadow-lg shadow-green-500/20 flex items-center gap-3">
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
                      <div>
                        <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          €{billingPeriod === 'monthly' ? plan.price : plan.priceYearly}
                        </span>
                        <span className="text-white/50 text-sm">/{billingPeriod === 'monthly' ? 'mes' : 'año'}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white/70' : 'text-white/30'}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  target={plan.link.startsWith('http') ? '_blank' : undefined}
                  rel={plan.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`relative z-10 block w-full py-4 px-6 rounded-full text-center font-bold transition-all hover:scale-105 ${
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Incluido en <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">todos los planes</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="feature-box text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-bold text-purple-400 border border-purple-500/30">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 mb-4 text-white">
              Lo que dicen nuestros <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">usuarios</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card p-8 rounded-3xl border border-white/10 bg-white/5">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-white/70 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm font-bold text-blue-400 border border-blue-500/30">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-6 mb-4 text-white">
              Preguntas <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group cursor-pointer rounded-2xl p-6 transition-all hover:border-blue-500/30"
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-green-600/30 to-emerald-500/30 blur-[120px]" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                ¿Listo para <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">comenzar</span>?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios transformando su trabajo con IA. 100% gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/30"
                >
                  Comenzar Gratis Ahora
                </a>
                <Link
                  href="/demo"
                  className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
                >
                  Probar Demo
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/40">
                Sin tarjeta de crédito • Acceso instantáneo • Cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

