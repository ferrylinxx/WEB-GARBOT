'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Importación dinámica de Lenis para evitar problemas de SSR
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default

      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      })

      lenisRef.current.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenisRef.current?.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}

