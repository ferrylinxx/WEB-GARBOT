'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const demoMessages = [
  { role: 'user', text: '¡Hola! ¿Qué puedes hacer por mí?' },
  { role: 'assistant', text: '¡Hola! 👋 Soy GarBotGPT, tu asistente de IA avanzado.\n\n🧠 Respondo preguntas complejas\n🎨 Genero imágenes HD\n💻 Escribo código profesional\n📄 Analizo documentos\n🎬 Creo videos con IA\n🌐 Traduzco 50+ idiomas\n\n¡Pregúntame lo que quieras!' },
  { role: 'user', text: 'Genera una imagen de una ciudad cyberpunk futurista' },
  { role: 'assistant', text: '🎨 Procesando con GarBotGPT-5-mini...\n\n✨ ¡Imagen generada en 4K!\n\nMetrópolis nocturna con rascacielos de neón púrpura, lluvia holográfica, vehículos voladores y carteles de neón asiáticos brillando en la niebla.' },
  { role: 'user', text: '¿Puedes escribirme código para una API REST?' },
  { role: 'assistant', text: '💻 ¡Por supuesto! Aquí tienes:\n\n```javascript\napp.get("/api/users", async (req, res) => {\n  const users = await db.find();\n  res.json({ success: true, data: users });\n});\n```\n\n✅ Con manejo de errores y validación incluida.' },
  { role: 'user', text: 'Traduce esto al japonés: "El futuro es ahora"' },
  { role: 'assistant', text: '🌐 Traducción completada:\n\n🇯🇵 未来は今です\n(Mirai wa ima desu)\n\n✨ Traducción verificada con 99.8% de precisión.' },
  { role: 'user', text: 'Analiza este documento y dame un resumen' },
  { role: 'assistant', text: '📄 Analizando documento...\n\n📊 Resumen ejecutivo:\n• 15 páginas procesadas\n• 3 puntos clave identificados\n• Sentimiento: Positivo (87%)\n• Tiempo de lectura: 12 min\n\n¿Quieres el análisis detallado?' },
  { role: 'user', text: 'Crea un video promocional de 30 segundos' },
  { role: 'assistant', text: '🎬 Generando video con GarBotGPT-5...\n\n⏳ Progreso: ████████░░ 80%\n\n✅ Video HD 1080p generado\n🎵 Música de fondo incluida\n📝 Subtítulos automáticos\n⬇️ Listo para descargar en MP4' },
  { role: 'user', text: '¿Cuánto cuesta la suscripción Pro?' },
  { role: 'assistant', text: '💎 Plan Pro - Solo €19.99/mes\n\n✅ Tokens ilimitados\n✅ Todos los modelos GPT-5\n✅ Generación de imágenes 4K\n✅ Videos hasta 2 minutos\n✅ API access incluido\n✅ Soporte prioritario 24/7\n\n🎁 ¡Primer mes 50% OFF!' },
]

export default function DemoGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleCharsRef = useRef<HTMLSpanElement[]>([])
  const messagesRef = useRef<(HTMLDivElement | null)[]>([])
  const glowRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Create floating particles
  useEffect(() => {
    if (!particlesRef.current) return

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full'
      particle.style.width = `${2 + Math.random() * 4}px`
      particle.style.height = particle.style.width
      particle.style.background = `rgba(${Math.random() > 0.5 ? '0,113,227' : '0,212,255'}, ${0.3 + Math.random() * 0.4})`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particlesRef.current.appendChild(particle)

      gsap.to(particle, {
        y: -window.innerHeight,
        x: (Math.random() - 0.5) * 200,
        opacity: 0,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        delay: Math.random() * 5,
        ease: 'none'
      })
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(titleCharsRef.current, { y: 100, opacity: 0, rotateX: -90 })
      gsap.set(chatRef.current, { y: 100, opacity: 0, scale: 0.8, rotateX: -15 })

      // Create scanning lines
      if (linesRef.current) {
        for (let i = 0; i < 5; i++) {
          const line = document.createElement('div')
          line.className = 'absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          line.style.top = `${20 + i * 20}%`
          linesRef.current.appendChild(line)

          gsap.to(line, {
            y: window.innerHeight,
            opacity: 0,
            duration: 3,
            repeat: -1,
            delay: i * 0.5,
            ease: 'none'
          })
        }
      }

      // Entrance timeline
      const entranceTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      entranceTL
        // Glow pulse
        .to(glowRef.current, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1,
          ease: 'power2.out'
        })
        // Title chars explosion
        .to(titleCharsRef.current, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: { each: 0.05, from: 'center' },
          ease: 'back.out(2)'
        }, '-=0.5')
        // Chat window
        .to(chatRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out'
        }, '-=0.5')

      // PIN section and show messages on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=500%',
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress
          const messageIndex = Math.floor(progress * (demoMessages.length + 0.5))

          const newVisible: number[] = []
          for (let i = 0; i < messageIndex && i < demoMessages.length; i++) {
            newVisible.push(i)
          }
          setVisibleMessages(newVisible)

          // Rotate glow based on scroll
          gsap.to(glowRef.current, {
            rotation: progress * 360,
            scale: 1 + progress * 0.3,
            duration: 0.1
          })
        }
      })

      // Floating glow animation
      gsap.to(glowRef.current, {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate messages with typing effect
  useLayoutEffect(() => {
    visibleMessages.forEach((index) => {
      const msg = messagesRef.current[index]
      if (msg && !msg.dataset.animated) {
        msg.dataset.animated = 'true'

        const isAssistant = demoMessages[index].role === 'assistant'

        // Epic entrance animation
        const tl = gsap.timeline()

        tl.fromTo(msg,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateX: isAssistant ? -30 : 30,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'back.out(1.7)',
            onComplete: () => {
              // Asegurar que se mantiene visible
              gsap.set(msg, { opacity: 1 })
            }
          }
        )

        // Glow pulse on new message
        if (isAssistant) {
          tl.to(glowRef.current, {
            scale: 1.5,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          }, '-=0.5')
          .to(glowRef.current, {
            scale: 1,
            opacity: 0.6,
            duration: 0.5,
            ease: 'power2.inOut'
          })
        }

        // Auto-scroll después de la animación
        tl.add(() => {
          if (messagesContainerRef.current) {
            const container = messagesContainerRef.current
            gsap.to(container, {
              scrollTop: container.scrollHeight,
              duration: 0.4,
              ease: 'power2.out'
            })
          }
        }, '-=0.3')
      }
    })
  }, [visibleMessages])

  const titleText = "Mira la Magia"

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Scanning lines */}
      <div ref={linesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,113,227,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,113,227,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }}
      />

      {/* Central glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, rgba(0,113,227,0.4), rgba(147,51,234,0.3), rgba(0,212,255,0.4), rgba(0,113,227,0.4))',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-blue-500/30" />
      <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-purple-500/30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-blue-500/30" />

      <div ref={containerRef} className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Title with split chars */}
        <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 overflow-hidden">
          {titleText.split('').map((char, i) => (
            <span
              key={i}
              ref={el => { if (el) titleCharsRef.current[i] = el }}
              className={`inline-block ${char === ' ' ? 'w-4' : ''}`}
              style={{
                color: i > 7 ? 'transparent' : 'white',
                backgroundImage: i > 7 ? 'linear-gradient(to right, #60a5fa, #22d3ee)' : 'none',
                backgroundClip: i > 7 ? 'text' : 'unset',
                WebkitBackgroundClip: i > 7 ? 'text' : 'unset',
                textShadow: i > 7 ? '0 0 40px rgba(0,212,255,0.5)' : '0 0 30px rgba(255,255,255,0.3)'
              }}
            >
              {char}
            </span>
          ))}
        </h2>

        {/* Chat window with 3D transform */}
        <div
          ref={chatRef}
          className="w-full max-w-4xl rounded-3xl overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: `
              0 0 80px rgba(0,113,227,0.3),
              0 0 120px rgba(0,212,255,0.2),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `
          }}
        >
          {/* Chat header */}
          <div className="flex items-center gap-4 p-5 border-b border-white/10 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-white/80 text-sm font-semibold tracking-wide">GarBotGPT Terminal</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">LIVE</span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.2) transparent'
            }}
          >
            {demoMessages.map((msg, i) => {
              const maxVisible = visibleMessages.length > 0 ? Math.max(...visibleMessages) : -1
              const shouldShow = i <= maxVisible
              return (
              <div
                key={i}
                ref={el => { messagesRef.current[i] = el }}
                className={`${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{
                  display: shouldShow ? 'flex' : 'none',
                  opacity: 0,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`max-w-[85%] p-5 rounded-2xl relative overflow-hidden ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
                    : 'bg-white/10 text-white/90 border border-white/10'
                }`}
                style={{
                  boxShadow: msg.role === 'user'
                    ? '0 10px 40px rgba(0,113,227,0.3)'
                    : '0 10px 40px rgba(0,0,0,0.2)'
                }}
                >
                  {/* Shine effect on assistant messages */}
                  {msg.role === 'assistant' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite]" />
                  )}
                  <p className="text-sm whitespace-pre-line relative z-10 leading-relaxed">{msg.text}</p>
                </div>
              </div>
              )
            })}

            {/* Enhanced typing indicator */}
            {visibleMessages.length > 0 && visibleMessages.length < demoMessages.length && demoMessages[visibleMessages.length]?.role === 'assistant' && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-5 py-4 rounded-2xl flex items-center gap-2 border border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-white/40 text-xs ml-2">GarBotGPT está pensando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white/30 text-sm flex-1">Escribe tu mensaje...</span>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll para ver más</span>
          <div className="flex gap-2">
            {demoMessages.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  visibleMessages.includes(i)
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 scale-125'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  )
}

