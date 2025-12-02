'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

export default function ComparativaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  const advantagesRef = useRef<(HTMLDivElement | null)[]>([])

  const features = [
    { name: 'Precio', garbotgpt: 'GRATIS', chatgpt: '$20/mes', claude: '$20/mes', gemini: 'Limitado', copilot: '$20/mes' },
    { name: 'Generación de texto', garbotgpt: true, chatgpt: true, claude: true, gemini: true, copilot: true },
    { name: 'Generación de imágenes', garbotgpt: true, chatgpt: true, claude: false, gemini: true, copilot: true },
    { name: 'Generación de videos', garbotgpt: true, chatgpt: false, claude: false, gemini: false, copilot: false },
    { name: 'Búsqueda web', garbotgpt: true, chatgpt: false, claude: false, gemini: true, copilot: true },
    { name: 'Límite mensajes', garbotgpt: '∞', chatgpt: '40/3h', claude: '45/5h', gemini: 'Limitado', copilot: '30/día' },
    { name: 'Soporte 24/7', garbotgpt: true, chatgpt: false, claude: false, gemini: false, copilot: false },
  ]

  const competitors = [
    { name: 'GarBotGPT', logo: '🤖', color: 'from-blue-600 to-cyan-500', highlight: true },
    { name: 'ChatGPT', logo: '💬', color: 'from-green-600 to-emerald-500', highlight: false },
    { name: 'Claude', logo: '🧠', color: 'from-purple-600 to-pink-500', highlight: false },
    { name: 'Gemini', logo: '✨', color: 'from-yellow-600 to-orange-500', highlight: false },
    { name: 'Copilot', logo: '🚀', color: 'from-indigo-600 to-blue-500', highlight: false }
  ]

  const advantages = [
    { title: 'Gratis', desc: 'Sin costo mientras otros cobran $20/mes', icon: '💰', color: 'from-green-600 to-emerald-500' },
    { title: 'Videos IA', desc: 'Única plataforma con generación de videos', icon: '🎬', color: 'from-purple-600 to-pink-500' },
    { title: 'Sin Límites', desc: 'Usa todo lo que quieras, sin restricciones', icon: '⚡', color: 'from-yellow-600 to-orange-500' },
    { title: 'Web Search', desc: 'Información actualizada en tiempo real', icon: '🔍', color: 'from-blue-600 to-cyan-500' },
    { title: 'Multi-Modelo', desc: 'Acceso a varios modelos de IA', icon: '🧠', color: 'from-indigo-600 to-purple-500' },
    { title: 'Español', desc: 'Interfaz y soporte en español', icon: '🇪🇸', color: 'from-red-600 to-orange-500' },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo(tableRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: tableRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      advantagesRef.current.forEach((adv, i) => {
        if (!adv) return
        gsap.fromTo(adv,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: adv, start: 'top 85%', toggleActions: 'play none none reverse' }
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
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-sm font-bold text-blue-400 border border-blue-500/30 mb-6">
            COMPARATIVA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            GarBotGPT vs <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Todos</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Descubre por qué somos la mejor opción
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={tableRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 text-left text-sm font-bold text-white/70">Feature</th>
                  {competitors.map((comp) => (
                    <th key={comp.name} className="px-4 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-xl ${comp.highlight ? 'ring-2 ring-blue-400' : ''}`}>
                          {comp.logo}
                        </div>
                        <span className={`text-xs font-bold ${comp.highlight ? 'text-blue-400' : 'text-white/60'}`}>{comp.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-t border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="px-4 py-3 text-sm font-medium text-white/80">{feature.name}</td>
                    {['garbotgpt', 'chatgpt', 'claude', 'gemini', 'copilot'].map((key) => {
                      const val = feature[key as keyof typeof feature]
                      return (
                        <td key={key} className="px-4 py-3 text-center">
                          {typeof val === 'boolean' ? (
                            val ? <span className="text-green-400 text-lg">✓</span> : <span className="text-red-400/60 text-lg">✗</span>
                          ) : (
                            <span className={`text-xs font-bold ${key === 'garbotgpt' ? 'text-blue-400' : 'text-white/50'}`}>{val}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
              Ventajas <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Únicas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <div
                key={index}
                ref={el => { advantagesRef.current[index] = el }}
                className="group relative rounded-3xl p-6 transition-all duration-500 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-white/60 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-r from-blue-600/30 to-cyan-500/30 blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                ¿Convencido? <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pruébalo</span>
              </h2>
              <p className="text-xl text-white/60 mb-8">Sin tarjeta • Sin límites • Sin compromisos</p>
              <a
                href="https://ia.garbotgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-blue-500/30"
              >
                Comenzar Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}


