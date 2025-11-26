'use client'

import { useEffect, useState } from 'react'

export default function PremiumBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        // Throttle usando requestAnimationFrame
        if (rafId) return
        rafId = requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          })
          rafId = 0
        })
      }
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Efecto de seguimiento del mouse - Gradiente interactivo */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.1), transparent 70%)`,
          willChange: 'background',
        }}
      />

      {/* Capa de luz ambiental */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        <div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 700px 500px at ${50 + mousePosition.x * 0.08}% ${50 + mousePosition.y * 0.08}%,
                rgba(255, 255, 255, 0.15) 0%,
                transparent 50%
              )
            `,
            transition: 'background 0.5s ease-out',
            willChange: 'background',
          }}
        />
      </div>

      {/* Efecto de refracción de luz en las esquinas */}
      <div className="fixed top-0 left-0 w-80 h-80 pointer-events-none z-0 opacity-15">
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.2) 0%, transparent 60%)',
            animation: 'cornerGlow 15s ease-in-out infinite',
            willChange: 'opacity, transform',
          }}
        />
      </div>

      <div className="fixed bottom-0 right-0 w-80 h-80 pointer-events-none z-0 opacity-15">
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 60%)',
            animation: 'cornerGlow 18s ease-in-out infinite 3s',
            willChange: 'opacity, transform',
          }}
        />
      </div>

      {/* Líneas de luz sutiles */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div
          className="absolute top-1/4 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)',
            animation: 'lightLine 25s ease-in-out infinite',
            willChange: 'opacity, transform',
          }}
        />
        <div
          className="absolute top-2/3 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 113, 227, 0.3), transparent)',
            animation: 'lightLine 30s ease-in-out infinite 8s',
            willChange: 'opacity, transform',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes cornerGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        @keyframes lightLine {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.6;
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  )
}

