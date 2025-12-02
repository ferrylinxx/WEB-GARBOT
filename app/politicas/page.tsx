'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function PoliticasPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-slate-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gray-600/20 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent">Políticas</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Tu privacidad y seguridad son nuestra prioridad.
          </p>
        </div>
      </section>

      {/* Policy Links */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/politicas/privacidad" ref={el => { cardsRef.current[0] = el }} className="group p-8 rounded-3xl hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="text-slate-400 mb-4 text-4xl">🔒</div>
              <h2 className="text-xl font-bold mb-3 text-white">Política de Privacidad</h2>
              <p className="text-white/50 text-sm">
                Cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD.
              </p>
              <span className="inline-block mt-4 text-slate-400 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>

            <Link href="/politicas/cookies" ref={el => { cardsRef.current[1] = el }} className="group p-8 rounded-3xl hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="text-slate-400 mb-4 text-4xl">🍪</div>
              <h2 className="text-xl font-bold mb-3 text-white">Política de Cookies</h2>
              <p className="text-white/50 text-sm">
                Información sobre el uso de cookies y cómo gestionarlas.
              </p>
              <span className="inline-block mt-4 text-slate-400 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>

            <Link href="/politicas/terminos" ref={el => { cardsRef.current[2] = el }} className="group p-8 rounded-3xl hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="text-slate-400 mb-4 text-4xl">📋</div>
              <h2 className="text-xl font-bold mb-3 text-white">Términos y Condiciones</h2>
              <p className="text-white/50 text-sm">
                Lee nuestros términos de servicio antes de utilizar la plataforma.
              </p>
              <span className="inline-block mt-4 text-slate-400 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 space-y-8" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introducción</h2>
              <p className="text-white/60 leading-relaxed">
                En GarBotGPT, nos comprometemos a proteger tu privacidad y tus datos personales.
                Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y protegemos
                tu información cuando utilizas nuestros servicios.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Información que Recopilamos</h2>
              <p className="text-white/60 leading-relaxed mb-4">Recopilamos la siguiente información:</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong className="text-white">Información de cuenta:</strong> Nombre, correo electrónico y preferencias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong className="text-white">Datos de uso:</strong> Interacciones con el servicio, consultas y conversaciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong className="text-white">Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo.</span>
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Uso de la Información</h2>
              <p className="text-white/60 leading-relaxed mb-4">Utilizamos tu información para:</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Proporcionar y mejorar nuestros servicios</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Personalizar tu experiencia de usuario</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Comunicarnos contigo sobre actualizaciones</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Garantizar la seguridad y prevenir fraudes</span></li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Protección de Datos</h2>
              <p className="text-white/60 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos,
                incluyendo encriptación de extremo a extremo, almacenamiento seguro y acceso restringido.
                Tus conversaciones son privadas y nunca se comparten con terceros sin tu consentimiento explícito.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Tus Derechos</h2>
              <p className="text-white/60 leading-relaxed mb-4">Tienes derecho a:</p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Acceder a tus datos personales</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Rectificar información incorrecta</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Solicitar la eliminación de tus datos</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Exportar tus datos en formato portable</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-400">•</span><span>Retirar tu consentimiento en cualquier momento</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Contacto</h2>
              <p className="text-white/60 leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos,
                contáctanos en:{' '}
                <a href="mailto:garbotgpt@garbotgpt.com" className="text-slate-400 hover:text-white font-medium">
                  garbotgpt@garbotgpt.com
                </a>
              </p>
            </div>

            {/* Last Update */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/40">Última actualización: Diciembre 2024</p>
            </div>

          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

