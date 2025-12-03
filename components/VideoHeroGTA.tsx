'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const chatMessages = [
  { role: 'user', text: '¿Puedes ayudarme a crear un logo para mi startup?' },
  { role: 'assistant', text: 'Por supuesto! Voy a generar varias opciones de logo moderno y minimalista para tu startup...' },
  { role: 'user', text: 'Escribe un script en Python para web scraping' },
  { role: 'assistant', text: 'Aquí tienes un script completo con requests y BeautifulSoup:\n\nimport requests\nfrom bs4 import BeautifulSoup...' },
  { role: 'user', text: 'Analiza este documento PDF y dame un resumen' },
  { role: 'assistant', text: 'He analizado el documento. Aquí están los puntos clave:\n\n• Crecimiento del 45% interanual\n• Expansión a 3 nuevos mercados...' },
]

export default function VideoHeroGTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<typeof chatMessages>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!isClient || currentMessageIndex >= chatMessages.length) return

    const currentMessage = chatMessages[currentMessageIndex]
    let charIndex = 0
    setIsTyping(true)
    setDisplayedText('')

    const typeInterval = setInterval(() => {
      if (charIndex < currentMessage.text.length) {
        setDisplayedText(currentMessage.text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)

        // Add completed message
        setTimeout(() => {
          setMessages(prev => [...prev, currentMessage])
          setDisplayedText('')

          // Move to next message
          setTimeout(() => {
            setCurrentMessageIndex(prev => (prev + 1) % chatMessages.length)
          }, 1000)
        }, 500)
      }
    }, currentMessage.role === 'assistant' ? 20 : 40)

    return () => clearInterval(typeInterval)
  }, [currentMessageIndex, isClient])

  // GSAP Image Zoom Reveal animation
  useEffect(() => {
    if (!isClient || !containerRef.current || !revealRef.current) return

    const mobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Main container fade in
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: mobile ? 0.3 : 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: mobile ? 'top 95%' : 'top 90%',
          }
        }
      )

      // Image Zoom Reveal Effect - Circle clip path animation (más suave en móvil)
      gsap.fromTo(revealRef.current,
        {
          scale: mobile ? 1.8 : 2.5,
          clipPath: 'circle(0% at 50% 50%)',
          filter: mobile ? 'blur(10px)' : 'blur(20px)'
        },
        {
          scale: 1,
          clipPath: 'circle(100% at 50% 50%)',
          filter: 'blur(0px)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: mobile ? 'top 85%' : 'top 70%',
            end: mobile ? 'top 30%' : 'center center',
            scrub: mobile ? 0.5 : 1
          }
        }
      )

      // Header text animation (más suave en móvil)
      gsap.fromTo('.video-hero-title',
        { y: mobile ? 50 : 100, opacity: 0, scale: mobile ? 0.9 : 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: mobile ? 0.7 : 1,
          ease: mobile ? 'power3.out' : 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: mobile ? 'top 75%' : 'top 60%',
          }
        }
      )

      // Subtitle animation
      gsap.fromTo('.video-hero-subtitle',
        { y: mobile ? 25 : 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: mobile ? 0.5 : 0.8,
          delay: mobile ? 0.1 : 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: mobile ? 'top 75%' : 'top 60%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [isClient])

  if (!isClient) return null

  const currentMessage = chatMessages[currentMessageIndex]

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-black overflow-hidden">
      {/* Sticky container for zoom reveal effect */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-purple-600/5 rounded-full blur-3xl" />
        </div>

        {/* Zoom Reveal Container */}
        <div
          ref={revealRef}
          className="relative w-full max-w-6xl mx-auto px-4 z-10"
          style={{ clipPath: 'circle(100% at 50% 50%)' }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="video-hero-title text-4xl md:text-6xl font-black text-white mb-4">
              Mira la <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Magia</span> en Acción
            </h2>
            <p className="video-hero-subtitle text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
              Experimenta el poder de GarBotGPT en tiempo real
            </p>
          </div>

          {/* Chat Demo Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl" />

            {/* Chat window */}
            <div className="relative bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-white/60 text-sm font-medium">GarBotGPT Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs">En línea</span>
              </div>
            </div>

            {/* Chat messages */}
            <div ref={chatRef} className="p-6 min-h-[400px] max-h-[400px] overflow-y-auto space-y-4">
              {/* Previous messages */}
              {messages.slice(-4).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-500/20'
                      : 'bg-white/10 text-white/90 shadow-white/5'
                  }`}>
                    <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Current typing message */}
              {displayedText && (
                <div className={`flex ${currentMessage.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-lg ${
                    currentMessage.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-500/20'
                      : 'bg-white/10 text-white/90 shadow-white/5'
                  }`}>
                    <p className="whitespace-pre-wrap text-sm">
                      {displayedText}
                      {isTyping && <span className="inline-block w-2 h-4 bg-current ml-1 animate-pulse" />}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Input bar (decorative) */}
            <div className="p-4 border-t border-white/10 bg-black/30">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-white/30 text-sm border border-white/10">
                  Escribe tu mensaje...
                </div>
                <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

