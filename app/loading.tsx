'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    // Animación de progreso
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev
        return prev + Math.random() * 15
      })
    }, 200)

    // Animación de puntos
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return ''
        return prev + '.'
      })
    }, 400)

    return () => {
      clearInterval(progressInterval)
      clearInterval(dotsInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 animate-gradient"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 px-6">
        {/* Logo with advanced animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer rotating rings */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-400 border-l-cyan-400 animate-spin-reverse"></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-blue-300 border-r-cyan-300 animate-spin-slow"></div>

          {/* Pulsing glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse blur-xl"></div>

          {/* Center logo container */}
          <div className="absolute inset-6 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* AI Brain Icon */}
              <svg className="w-12 h-12 text-blue-600 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -ml-1.5 shadow-lg"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-500 rounded-full -ml-1.5 shadow-lg"></div>
          </div>
        </div>

        {/* Brand name with gradient */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x"
            style={{ letterSpacing: '-0.02em' }}>
          GarBotGPT
        </h2>

        {/* Loading text with animated dots */}
        <p className="text-xl text-gray-600 mb-8 font-medium">
          Cargando{dots}
        </p>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full transition-all duration-300 ease-out animate-gradient-x"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Loading messages */}
        <div className="space-y-2 text-sm text-gray-500">
          <p className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            Inicializando IA...
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Cargando modelos de lenguaje...
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Preparando tu experiencia...
          </p>
        </div>

        {/* Powered by badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-gray-400">
          <svg className="w-4 h-4 text-blue-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span>Powered by Advanced AI</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

