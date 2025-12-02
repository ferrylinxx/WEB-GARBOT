'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type AnimationType = 'brain' | 'art' | 'document' | 'code'

interface AnimatedIconProps {
  animation: AnimationType
  className?: string
}

// Iconos animados con CSS y GSAP
export default function LottieIcon({ animation, className = '' }: AnimatedIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<(SVGElement | null)[]>([])

  useEffect(() => {
    if (!iconRef.current) return

    const ctx = gsap.context(() => {
      // Animación de pulso general
      gsap.to(iconRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Animaciones específicas para cada elemento
      elementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            opacity: 0.7,
            duration: 0.8 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.1
          })
        }
      })
    }, iconRef)

    return () => ctx.revert()
  }, [animation])

  const icons: Record<AnimationType, JSX.Element> = {
    brain: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          ref={el => elementsRef.current[0] = el}
          d="M32 8C20 8 12 18 12 28c0 8 4 14 10 18v8h20v-8c6-4 10-10 10-18C52 18 44 8 32 8z"
          fill="url(#brainGrad)"
          opacity="0.9"
        />
        <path
          ref={el => elementsRef.current[1] = el}
          d="M22 28c0-6 4-10 10-10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle ref={el => elementsRef.current[2] = el} cx="26" cy="24" r="2" fill="white" opacity="0.8" />
        <circle ref={el => elementsRef.current[3] = el} cx="38" cy="24" r="2" fill="white" opacity="0.8" />
        <path
          ref={el => elementsRef.current[4] = el}
          d="M32 18v10M28 23h8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    art: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="artGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        <circle
          ref={el => elementsRef.current[0] = el}
          cx="32" cy="32" r="24"
          fill="url(#artGrad)"
          opacity="0.9"
        />
        <circle ref={el => elementsRef.current[1] = el} cx="24" cy="24" r="5" fill="#F472B6" opacity="0.9" />
        <circle ref={el => elementsRef.current[2] = el} cx="40" cy="24" r="4" fill="#FBBF24" opacity="0.9" />
        <circle ref={el => elementsRef.current[3] = el} cx="24" cy="40" r="4" fill="#34D399" opacity="0.9" />
        <circle ref={el => elementsRef.current[4] = el} cx="40" cy="40" r="3" fill="#A78BFA" opacity="0.9" />
        <path
          ref={el => elementsRef.current[5] = el}
          d="M32 16l2-6M48 32l6-2M32 48l-2 6M16 32l-6 2"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#84CC16" />
          </linearGradient>
        </defs>
        <rect
          ref={el => elementsRef.current[0] = el}
          x="14" y="8" width="36" height="48" rx="4"
          fill="url(#docGrad)"
          opacity="0.9"
        />
        <path
          ref={el => elementsRef.current[1] = el}
          d="M38 8v12h12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <rect ref={el => elementsRef.current[2] = el} x="22" y="28" width="20" height="3" rx="1" fill="white" opacity="0.7" />
        <rect ref={el => elementsRef.current[3] = el} x="22" y="36" width="16" height="3" rx="1" fill="white" opacity="0.5" />
        <rect ref={el => elementsRef.current[4] = el} x="22" y="44" width="12" height="3" rx="1" fill="white" opacity="0.3" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
        </defs>
        <rect
          ref={el => elementsRef.current[0] = el}
          x="8" y="12" width="48" height="40" rx="6"
          fill="url(#codeGrad)"
          opacity="0.9"
        />
        <path
          ref={el => elementsRef.current[1] = el}
          d="M20 28l-6 6 6 6"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          ref={el => elementsRef.current[2] = el}
          d="M44 28l6 6-6 6"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          ref={el => elementsRef.current[3] = el}
          d="M28 44l8-24"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    )
  }

  return (
    <div ref={iconRef} className={`${className}`}>
      {icons[animation]}
    </div>
  )
}

