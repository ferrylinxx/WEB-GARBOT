'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

interface GlassCard3DProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function GlassCard3D({
  children,
  className = '',
  intensity = 1
}: GlassCard3DProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Detectar si es móvil para desactivar efectos 3D
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Desactivar en móvil para mejor rendimiento
    if (isMobile || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Reducir intensidad para efectos más sutiles
    setPosition({
      x: x * 10 * intensity,
      y: y * 10 * intensity
    })
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false)
      setPosition({ x: 0, y: 0 })
    }
  }

  return (
    <div
      ref={cardRef}
      className={`glass-3d-container ${className}`}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
      style={{
        transform: !isMobile && isHovered
          ? `perspective(1000px) rotateY(${position.x * 0.5}deg) rotateX(${-position.y * 0.5}deg) scale(1.02)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      {/* Capa de cristal 1 - Más profunda */}
      <div 
        className="glass-layer glass-layer-1"
        style={{ 
          transform: `translate(${position.x * 0.3}px, ${position.y * 0.3}px)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
      />
      
      {/* Capa de cristal 2 - Intermedia */}
      <div 
        className="glass-layer glass-layer-2"
        style={{ 
          transform: `translate(${position.x * 0.6}px, ${position.y * 0.6}px)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
      />
      
      {/* Capa de cristal 3 - Superficie */}
      <div 
        className="glass-layer glass-layer-3"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
      />
      
      {/* Contenido */}
      <div className="glass-content relative z-10">
        {children}
      </div>
      
      {/* Sombra dinámica */}
      <div 
        className="glass-shadow"
        style={{
          transform: `translate(${-position.x * 0.5}px, ${-position.y * 0.5}px)`,
          opacity: isHovered ? 0.3 : 0.15,
          transition: isHovered ? 'all 0.1s ease-out' : 'all 0.5s ease-out',
        }}
      />
    </div>
  )
}

