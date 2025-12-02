'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

export default function ContactoPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Form animation
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const contactMethods = [
    { icon: '📧', title: 'Email', value: 'garbotgpt@garbotgpt.com', link: 'mailto:garbotgpt@garbotgpt.com', color: 'from-blue-600 to-cyan-500' },
    { icon: '🤖', title: 'GarBotGPT', value: 'Disponible 24/7', link: 'https://ia.garbotgpt.com', color: 'from-purple-600 to-pink-500' },
    { icon: '💬', title: 'Soporte', value: 'Respuesta en 24h', link: '#form', color: 'from-green-600 to-emerald-500' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[150px]" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Contacto</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                ref={el => { cardsRef.current[index] = el }}
                className="group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className={`text-sm bg-gradient-to-r ${method.color} bg-clip-text text-transparent font-medium`}>
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="py-16 px-6">
        <div ref={formRef} className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl p-10 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-[80px]" />

            <h2 className="text-3xl font-black mb-8 text-white text-center relative z-10">
              Envíanos un <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">mensaje</span>
            </h2>

            <form className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                           transition-all outline-none text-white placeholder-white/30"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                           transition-all outline-none text-white placeholder-white/30"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                           transition-all outline-none text-white placeholder-white/30 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-purple-500/30"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

