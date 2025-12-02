'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

// Fixed particle positions to avoid hydration mismatch
const particles = [
  { left: '8%', top: '12%', size: 3, delay: 0 }, { left: '22%', top: '28%', size: 2, delay: 0.5 },
  { left: '35%', top: '15%', size: 4, delay: 1 }, { left: '48%', top: '38%', size: 2, delay: 1.5 },
  { left: '62%', top: '22%', size: 3, delay: 2 }, { left: '78%', top: '45%', size: 2, delay: 2.5 },
  { left: '12%', top: '55%', size: 4, delay: 3 }, { left: '28%', top: '72%', size: 2, delay: 3.5 },
  { left: '42%', top: '65%', size: 3, delay: 4 }, { left: '58%', top: '82%', size: 2, delay: 4.5 },
  { left: '72%', top: '58%', size: 4, delay: 5 }, { left: '88%', top: '35%', size: 2, delay: 5.5 },
  { left: '5%', top: '42%', size: 3, delay: 6 }, { left: '18%', top: '88%', size: 2, delay: 6.5 },
  { left: '32%', top: '8%', size: 4, delay: 7 }, { left: '52%', top: '25%', size: 2, delay: 7.5 },
]

const loadingMessages = [
  'Inicializando núcleo de IA...',
  'Conectando con servidores...',
  'Cargando modelos neuronales...',
  'Optimizando rendimiento...',
  'Preparando tu experiencia...',
  'Casi listo...',
]

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [glitchText, setGlitchText] = useState('GarBotGPT')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 98) return prev
        const increment = prev < 30 ? 8 : prev < 60 ? 5 : prev < 80 ? 3 : 1
        return Math.min(prev + increment, 98)
      })
    }, 150)

    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length)
    }, 2000)

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'
      const original = 'GarBotGPT'
      let glitched = ''
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched += chars[Math.floor(Math.random() * chars.length)]
        } else {
          glitched += original[i]
        }
      }
      setGlitchText(glitched)
      setTimeout(() => setGlitchText('GarBotGPT'), 100)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.15),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.15),_transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.1),_transparent_60%)]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `rgba(6, 182, 212, ${0.3 + (i % 3) * 0.1})`,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.size * 3}px rgba(6, 182, 212, 0.5)`
            }}
          />
        ))}
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-scan" />
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 px-6 max-w-md mx-auto">
        {/* Epic Logo Animation */}
        <div className="relative w-40 h-40 mx-auto mb-10">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" />

          {/* Middle pulsing ring */}
          <div className="absolute inset-2 rounded-full border border-cyan-400/40 animate-pulse-ring" />

          {/* Inner rotating gradient */}
          <div className="absolute inset-4 rounded-full bg-gradient-conic from-cyan-500 via-blue-500 via-purple-500 to-cyan-500 animate-spin-medium opacity-20 blur-sm" />

          {/* Core circle with logo */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
            <Image
              src="/logo.png"
              alt="GarBotGPT"
              width={64}
              height={64}
              className="relative z-10 animate-float-gentle"
            />
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
          <div className="absolute inset-0 animate-spin-medium">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
          </div>

          {/* Energy burst effect */}
          <div className="absolute inset-0 rounded-full animate-energy-burst" />
        </div>

        {/* Brand name with glitch effect */}
        <div className="relative mb-2">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
              {glitchText}
            </span>
          </h2>
          {/* Glitch layers */}
          <h2 className="absolute top-0 left-0 w-full text-5xl md:text-6xl font-black tracking-tight text-cyan-500/20 animate-glitch-1" aria-hidden>
            GarBotGPT
          </h2>
          <h2 className="absolute top-0 left-0 w-full text-5xl md:text-6xl font-black tracking-tight text-purple-500/20 animate-glitch-2" aria-hidden>
            GarBotGPT
          </h2>
        </div>

        <p className="text-white/40 text-sm mb-8 tracking-widest uppercase">Inteligencia Artificial Avanzada</p>

        {/* Advanced progress bar */}
        <div className="relative max-w-xs mx-auto mb-8">
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                backgroundSize: '200% 100%',
                animation: 'gradient-flow 2s linear infinite'
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-between mt-3">
            <span className="text-xs text-cyan-400 font-mono">{Math.round(progress)}%</span>
            <span className="text-xs text-white/30 font-mono">CARGANDO</span>
          </div>
        </div>

        {/* Loading message with typewriter effect */}
        <div className="h-6 relative overflow-hidden">
          <p className="text-sm text-white/50 font-medium animate-fade-slide" key={messageIndex}>
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
            {loadingMessages[messageIndex]}
          </p>
        </div>

        {/* Neural network visualization */}
        <div className="mt-10 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 rounded-full bg-gradient-to-t from-cyan-500/50 to-blue-500/50 animate-neural-bar"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-30px) scale(1.2); }
          90% { opacity: 1; }
        }

        @keyframes scan {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-medium { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes energy-burst {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(6, 182, 212, 0); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes gradient-text {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(30deg); }
        }

        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 2px); }
          80% { clip-path: inset(80% 0 0 0); transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 0 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
        }

        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fade-slide {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @keyframes neural-bar {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        .animate-particle { animation: particle 6s ease-in-out infinite; }
        .animate-scan { animation: scan 4s linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-medium { animation: spin-medium 4s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 6s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }
        .animate-energy-burst { animation: energy-burst 2s ease-out infinite; }
        .animate-float-gentle { animation: float-gentle 3s ease-in-out infinite; }
        .animate-gradient-text { animation: gradient-text 4s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 3s infinite step-end; }
        .animate-glitch-2 { animation: glitch-2 3s infinite step-end; animation-delay: 0.1s; }
        .animate-shine { animation: shine 2s infinite; }
        .animate-fade-slide { animation: fade-slide 2s ease-in-out; }
        .animate-neural-bar { animation: neural-bar 1s ease-in-out infinite; }

        .bg-gradient-conic {
          background: conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
        }
      `}</style>
    </div>
  )
}

