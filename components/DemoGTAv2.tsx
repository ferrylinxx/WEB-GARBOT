'use client'

import { useLayoutEffect, useRef, useState, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Highlight, themes } from 'prism-react-renderer'

gsap.registerPlugin(ScrollTrigger)

type TabType = 'chat' | 'code' | 'image' | 'analysis'

interface Message {
  role: 'user' | 'assistant'
  text: string
  type?: 'text' | 'code' | 'image'
  imageUrl?: string
}

const tabExamples: Record<TabType, string[]> = {
  chat: ['¿Qué es la inteligencia artificial?', 'Explícame machine learning', '¿Cómo funcionan las redes neuronales?'],
  code: ['Crea una API REST en Node.js', 'Función de ordenamiento en Python', 'Componente React con hooks'],
  image: ['Ciudad cyberpunk nocturna con neones', 'Paisaje futurista con robots', 'Dragón de cristal volando'],
  analysis: ['Sube un documento para analizar', 'Extrae información clave', 'Resume el contenido']
}

export default function DemoGTAv2() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState<TabType>('chat')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: '¡Hola! 👋 Soy GarBotGPT. Tienes **5 mensajes gratuitos** para probar mi poder. ¿Qué te gustaría hacer?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [remaining, setRemaining] = useState<number>(5)
  const [limitReached, setLimitReached] = useState(false)

  // Crear partículas flotantes
  useEffect(() => {
    if (!particlesRef.current) return
    const container = particlesRef.current

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full pointer-events-none'
      const size = 2 + Math.random() * 6
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '6, 182, 212'}, ${0.3 + Math.random() * 0.5})`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.filter = 'blur(1px)'
      container.appendChild(particle)

      gsap.to(particle, {
        y: -300 - Math.random() * 200,
        x: (Math.random() - 0.5) * 150,
        opacity: 0,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        delay: Math.random() * 3,
        ease: 'none'
      })
    }

    return () => { container.innerHTML = '' }
  }, [])

  // Verificar límites al cargar
  useEffect(() => {
    fetch('/api/chat')
      .then(res => res.json())
      .then(data => {
        setRemaining(data.remaining)
        if (data.remaining === 0) setLimitReached(true)
      })
      .catch(() => {})
  }, [])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isTyping || limitReached) return

    const userMessage: Message = { role: 'user', text: inputValue }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)
    scrollToBottom()

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue, type: activeTab })
      })

      const data = await res.json()

      if (res.status === 429) {
        setLimitReached(true)
        setRemaining(0)
        setMessages(prev => [...prev, {
          role: 'assistant',
          text: `⚠️ ${data.message}\n\n💡 Para continuar usando GarBotGPT, visita **ia.garbotgpt.com** y suscríbete a un plan.`
        }])
      } else if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', text: `❌ Error: ${data.error}` }])
      } else {
        setRemaining(data.remaining)
        const response: Message = {
          role: 'assistant',
          text: data.response,
          type: data.type,
          imageUrl: data.imageUrl
        }
        setMessages(prev => [...prev, response])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: '❌ Error de conexión. Inténtalo de nuevo.' }])
    }

    setIsTyping(false)
    setTimeout(scrollToBottom, 100)
  }, [inputValue, isTyping, activeTab, scrollToBottom, limitReached])

  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || limitReached) return

    setMessages(prev => [...prev, { role: 'user', text: `📄 Analizando: ${file.name}` }])
    setIsTyping(true)
    scrollToBottom()

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()

      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', text: `❌ ${data.error}` }])
      } else {
        setRemaining(data.remaining)
        setMessages(prev => [...prev, {
          role: 'assistant',
          text: `📊 **Análisis de ${data.filename}**\n\n${data.analysis}`
        }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: '❌ Error al analizar documento' }])
    }

    setIsTyping(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
    setTimeout(scrollToBottom, 100)
  }, [limitReached, scrollToBottom])

  const handleCopy = useCallback((text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/```\w*\n?/g, '').replace(/```/g, ''))
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }, [])



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Glow pulsante de fondo
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Título con efecto reveal
      if (titleRef.current) {
        const titleText = titleRef.current.querySelectorAll('.title-word')
        tl.fromTo(titleText,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'back.out(1.7)'
          }
        )
      }

      // Tabs con efecto elástico
      if (tabsRef.current) {
        const tabs = tabsRef.current.children
        tl.fromTo(tabs,
          { y: 30, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)'
          },
          '-=0.5'
        )
      }

      // Chat container con efecto entrada
      tl.fromTo(chatRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.3'
      )

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const renderMessage = (msg: Message, index: number) => {
    const isCode = msg.type === 'code' || msg.text.includes('```')

    if (isCode) {
      const codeMatch = msg.text.match(/```(\w+)?\n?([\s\S]*?)```/)
      const language = codeMatch?.[1] || 'javascript'
      const code = codeMatch?.[2] || msg.text

      return (
        <div className="relative group">
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-xl">
            <span className="text-xs text-gray-400 uppercase">{language}</span>
            <button
              onClick={() => handleCopy(code, index)}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
            >
              {copiedIndex === index ? (
                <>✓ Copiado</>
              ) : (
                <>📋 Copiar</>
              )}
            </button>
          </div>
          <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} p-4 rounded-b-xl overflow-x-auto text-sm`} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="text-gray-500 select-none mr-4 text-xs">{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )
    }

    return <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
  }

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'code', label: 'Código', icon: '💻' },
    { id: 'image', label: 'Imágenes', icon: '🎨' },
    { id: 'analysis', label: 'Análisis', icon: '📊' }
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.2)_0%,transparent_60%)]" />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Animated Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-3xl pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header with GSAP animation */}
        <div ref={titleRef} className="text-center mb-12" style={{ perspective: '1000px' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 title-word">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Demo Interactiva en Vivo</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 overflow-hidden">
            <span className="title-word inline-block">Prueba</span>{' '}
            <span className="title-word inline-block">la</span>{' '}
            <span className="title-word inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Magia</span>
          </h2>
          <p className="title-word text-xl text-white/50">Escribe lo que quieras y experimenta el poder de la IA más avanzada</p>
        </div>

        {/* Tabs with GSAP */}
        <div ref={tabsRef} className="flex justify-center gap-3 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden group ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/40 scale-105'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:scale-105'
              }`}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Chat Container with 3D effect */}
        <div
          ref={chatRef}
          className="bg-black/60 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Header with glowing border */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 animate-pulse" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  G
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg">GarBotGPT</div>
                <div className="text-green-400 text-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online • Powered by GPT-4o
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 text-sm font-semibold border border-blue-500/20">
                {activeTab === 'code' ? '💻 Código' : activeTab === 'image' ? '🎨 DALL-E 3' : activeTab === 'analysis' ? '📊 Análisis' : '💬 Chat'}
              </span>
              <div className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all duration-300 ${
                remaining > 2 ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                remaining > 0 ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30 animate-pulse' :
                'bg-red-500/10 text-red-400 border-red-500/30'
              }`}>
                ⚡ {remaining} restantes
              </div>
            </div>
          </div>

          {/* Messages with improved styling */}
          <div className="h-[450px] overflow-y-auto p-6 space-y-5 scroll-smooth" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(59,130,246,0.3) transparent' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{
                  animation: 'messageSlide 0.4s ease-out forwards',
                  animationDelay: `${i * 0.05}s`
                }}
              >
                <div className={`relative max-w-[85%] p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 backdrop-blur-sm text-white/90 border border-white/10'
                }`}>
                  {/* Glow effect for assistant */}
                  {msg.role === 'assistant' && (
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl -z-10 blur-sm" />
                  )}
                  {renderMessage(msg, i)}
                  {msg.imageUrl && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                      <img src={msg.imageUrl} alt="Generated" className="w-full hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
                  <div className="flex gap-2 items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="ml-2 text-white/40 text-sm">Pensando...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Limit warning with animation */}
          {limitReached && (
            <div className="mx-6 mb-4 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 animate-pulse">
              <p className="text-red-400 text-sm text-center font-medium">
                ⚠️ Has alcanzado el límite de 5 mensajes gratuitos
                <a href="https://ia.garbotgpt.com" className="ml-2 px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors">
                  Suscríbete ahora →
                </a>
              </p>
            </div>
          )}

          {/* Quick suggestions with better styling */}
          <div className="px-6 py-4 border-t border-white/5 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {tabExamples[activeTab].map((example, i) => (
                <button
                  key={i}
                  onClick={() => !limitReached && setInputValue(example)}
                  disabled={limitReached}
                  className="group flex-shrink-0 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:text-white hover:border-blue-500/30 hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">{example}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input with enhanced styling */}
          <div className="p-5 border-t border-white/10 bg-black/30">
            <div className="flex items-center gap-4">
              {/* File upload for analysis */}
              {activeTab === 'analysis' && (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.pdf,.doc,.docx,.md"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={limitReached}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isTyping || limitReached}
                    className="group w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300 disabled:opacity-40"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </>
              )}
              <div className="flex-1 relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={limitReached ? '🔒 Límite alcanzado - Suscríbete para más' : `✨ Escribe tu ${activeTab === 'code' ? 'petición de código' : activeTab === 'image' ? 'descripción de imagen' : 'mensaje'}...`}
                  disabled={limitReached}
                  className="relative w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-lg placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping || limitReached}
                className="group relative w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                <svg className="relative w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for message animation */}
      <style jsx>{`
        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}