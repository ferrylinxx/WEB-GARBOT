'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { id: 'intro', title: '1. Introducción al GDPR' },
  { id: 'derechos', title: '2. Tus Derechos' },
  { id: 'datos', title: '3. Datos que Recopilamos' },
  { id: 'base-legal', title: '4. Base Legal' },
  { id: 'transferencias', title: '5. Transferencias Internacionales' },
  { id: 'retencion', title: '6. Retención de Datos' },
  { id: 'seguridad', title: '7. Medidas de Seguridad' },
  { id: 'dpo', title: '8. Delegado de Protección' },
  { id: 'reclamaciones', title: '9. Reclamaciones' },
]

export default function GDPRPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', { y: 50, opacity: 0, stagger: 0.1, duration: 0.8 })
      gsap.from('.gdpr-section', {
        scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.6
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <NavbarGTA />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
        <div className="hero-content relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Reglamento General de Protección de Datos
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Cumplimiento GDPR
          </h1>
          <p className="text-lg text-white/60">Última actualización: Diciembre 2024</p>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <nav className="lg:sticky lg:top-24 bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-wider">Contenido</h3>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} onClick={() => setActiveSection(s.id)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all ${activeSection === s.id ? 'bg-purple-500/20 text-purple-300' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-12">
            <div id="intro" className="gdpr-section bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm">1</span>
                Introducción al GDPR
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                El Reglamento General de Protección de Datos (GDPR) es una normativa de la Unión Europea que protege los datos personales de los ciudadanos. En GarBotGPT, cumplimos estrictamente con todas las disposiciones del GDPR.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p className="text-purple-300 text-sm">
                  <strong>Ámbito de aplicación:</strong> Esta política se aplica a todos los usuarios de la UE/EEE y a cualquier procesamiento de datos personales relacionado con nuestros servicios.
                </p>
              </div>
            </div>

            <div id="derechos" className="gdpr-section bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm">2</span>
                Tus Derechos bajo el GDPR
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Acceso', desc: 'Solicitar copia de tus datos personales' },
                  { title: 'Rectificación', desc: 'Corregir datos inexactos o incompletos' },
                  { title: 'Supresión', desc: 'Solicitar eliminación de tus datos' },
                  { title: 'Portabilidad', desc: 'Recibir tus datos en formato estructurado' },
                  { title: 'Oposición', desc: 'Oponerte al procesamiento de tus datos' },
                  { title: 'Limitación', desc: 'Restringir el procesamiento de datos' },
                ].map((right, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-bold text-purple-300 mb-1">{right.title}</h4>
                    <p className="text-white/60 text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="datos" className="gdpr-section bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm">3</span>
                Datos que Recopilamos
              </h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><span className="text-purple-400">•</span>Datos de identificación: nombre, email</li>
                <li className="flex items-start gap-3"><span className="text-purple-400">•</span>Datos de uso: interacciones con el chatbot</li>
                <li className="flex items-start gap-3"><span className="text-purple-400">•</span>Datos técnicos: IP, navegador, dispositivo</li>
                <li className="flex items-start gap-3"><span className="text-purple-400">•</span>Preferencias: configuración de cuenta</li>
              </ul>
            </div>

            <div id="dpo" className="gdpr-section bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Delegado de Protección de Datos</h2>
              <p className="text-white/70 mb-4">Puedes contactar con nuestro DPO para cualquier consulta relacionada con la protección de datos:</p>
              <div className="bg-black/30 rounded-xl p-4">
                <p className="text-purple-300">📧 dpo@garbotgpt.com</p>
                <p className="text-white/60 text-sm mt-2">Respuesta garantizada en 72 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

