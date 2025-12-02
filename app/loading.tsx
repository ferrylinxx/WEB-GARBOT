'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => prev >= 95 ? prev : prev + Math.random() * 15)
    }, 200)
    const dotsInterval = setInterval(() => {
      setDots(prev => prev === '...' ? '' : prev + '.')
    }, 400)
    return () => { clearInterval(progressInterval); clearInterval(dotsInterval) }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Gradient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[150px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
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
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-400 border-l-blue-400 animate-spin-reverse"></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-cyan-300 border-r-blue-300 animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse blur-xl"></div>
          <div className="absolute inset-6 rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="text-4xl">🤖</span>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-500 rounded-full -ml-1.5 shadow-lg"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full -ml-1.5 shadow-lg"></div>
          </div>
        </div>

        {/* Brand name */}
        <h2 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
          GarBotGPT
        </h2>

        {/* Loading text */}
        <p className="text-xl text-white/60 mb-8 font-medium">
          Cargando{dots}
        </p>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto mb-6">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out animate-gradient-x"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-white/40 mt-2 font-medium">{Math.round(progress)}%</p>
        </div>

        {/* Loading messages */}
        <div className="space-y-2 text-sm text-white/40">
          <p className="animate-fade-in-up" style={{ animationDelay: '0s' }}>Inicializando IA...</p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Cargando modelos...</p>
          <p className="animate-fade-in-up" style={{ animationDelay: '1s' }}>Preparando experiencia...</p>
        </div>
      </div>

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

