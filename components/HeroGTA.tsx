'use client'

import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function HeroGTA() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleCharsRef = useRef<HTMLSpanElement[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const titleText = "GarBotGPT"
  const subtitleText = "Tu Asistente de IA Más Potente"

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useLayoutEffect(() => {
    const mobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Initial states - valores reducidos para móvil
      gsap.set(titleCharsRef.current, { y: mobile ? 60 : 120, opacity: 0, rotateX: mobile ? -45 : -90 })
      gsap.set(subtitleRef.current, { y: mobile ? 30 : 60, opacity: 0, filter: mobile ? 'blur(5px)' : 'blur(10px)' })
      gsap.set(ctaRef.current, { y: mobile ? 20 : 40, opacity: 0, scale: 0.9 })
      gsap.set(scrollIndicatorRef.current, { y: 20, opacity: 0 })
      gsap.set([orb1Ref.current, orb2Ref.current, orb3Ref.current], { scale: 0, opacity: 0 })
      gsap.set(gridRef.current, { opacity: 0 })
      gsap.set(glowRef.current, { scale: 0.5, opacity: 0 })

      // MASTER TIMELINE - Entrada épica (más rápida en móvil)
      const masterTL = gsap.timeline({ defaults: { ease: 'expo.out' } })

      // 1. Background elements first
      masterTL
        .to(glowRef.current, {
          scale: 1,
          opacity: 1,
          duration: mobile ? 1.2 : 2,
          ease: 'power2.out'
        })
        .to(gridRef.current, {
          opacity: mobile ? 0.2 : 0.3,
          duration: mobile ? 1 : 1.5,
        }, '-=1.5')
        .to([orb1Ref.current, orb2Ref.current, orb3Ref.current], {
          scale: 1,
          opacity: mobile ? 0.7 : 1,
          duration: mobile ? 1 : 1.5,
          stagger: mobile ? 0.1 : 0.2,
          ease: mobile ? 'power2.out' : 'elastic.out(1, 0.5)'
        }, '-=1')

      // 2. Title chars - Efecto ÉPICO letra por letra (más suave en móvil)
      masterTL.to(titleCharsRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: mobile ? 0.8 : 1.2,
        stagger: {
          each: mobile ? 0.05 : 0.08,
          from: 'center'
        },
        ease: mobile ? 'power3.out' : 'back.out(1.7)'
      }, '-=0.5')

      // 3. Glitch effect on title (solo en desktop)
      if (!mobile) {
        masterTL.add(() => {
          gsap.to(titleRef.current, {
            x: 'random(-5, 5)',
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            ease: 'power1.inOut',
            onComplete: () => gsap.set(titleRef.current, { x: 0 })
          })
        })
      }

      // 4. Subtitle reveal
      masterTL.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: mobile ? 0.6 : 1,
        ease: 'power3.out'
      }, '-=0.3')

      // 5. CTA buttons
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: mobile ? 0.5 : 0.8,
        ease: 'back.out(1.5)'
      }, '-=0.5')

      // 6. Scroll indicator
      .to(scrollIndicatorRef.current, {
        y: 0,
        opacity: 1,
        duration: mobile ? 0.4 : 0.6
      }, '-=0.3')

      // SCROLL ANIMATIONS - Parallax multinivel (reducido en móvil)

      // Título se va con parallax 3D
      gsap.to(titleRef.current, {
        y: mobile ? -80 : -200,
        scale: mobile ? 0.9 : 0.8,
        rotateX: mobile ? 10 : 20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '80% top',
          scrub: 1.5
        }
      })

      // Subtitle parallax
      gsap.to(subtitleRef.current, {
        y: mobile ? -40 : -100,
        opacity: 0,
        filter: mobile ? 'blur(5px)' : 'blur(10px)',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1
        }
      })

      // Orbs parallax a diferentes velocidades (reducido en móvil)
      gsap.to(orb1Ref.current, {
        y: mobile ? -100 : -300,
        x: mobile ? -30 : -100,
        scale: mobile ? 1.2 : 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2
        }
      })

      gsap.to(orb2Ref.current, {
        y: mobile ? -80 : -200,
        x: mobile ? 50 : 150,
        scale: mobile ? 0.7 : 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(orb3Ref.current, {
        y: mobile ? -150 : -400,
        scale: mobile ? 1.5 : 2,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3
        }
      })

      // Grid parallax
      gsap.to(gridRef.current, {
        y: mobile ? -40 : -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '50% top',
          scrub: 1
        }
      })

      // Floating animation para orbs
      gsap.to(orb1Ref.current, {
        y: '+=30',
        x: '+=20',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(orb2Ref.current, {
        y: '-=25',
        x: '-=15',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(orb3Ref.current, {
        y: '+=20',
        x: '+=25',
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,113,227,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,113,227,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}
      />

      {/* Central Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,113,227,0.3) 0%, rgba(0,212,255,0.1) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Animated Orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,113,227,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      <div
        ref={orb3Ref}
        className="absolute top-[40%] left-[60%] w-[250px] h-[250px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
        {/* Release badge */}
        <div className="mb-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">Disponible Ahora</span>
        </div>

        {/* Title with split chars */}
        <h1
          ref={titleRef}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white mb-8 tracking-tighter leading-none"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transformStyle: 'preserve-3d'
          }}
        >
          {titleText.split('').map((char, i) => (
            <span
              key={i}
              ref={el => { if (el) titleCharsRef.current[i] = el }}
              className="inline-block"
              style={{
                textShadow: '0 0 80px rgba(0,113,227,0.5), 0 0 120px rgba(0,212,255,0.3)'
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 mb-14 font-light tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {subtitleText}
          </span>
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://ia.garbotgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              boxShadow: '0 0 40px rgba(0,113,227,0.4), 0 0 80px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Comenzar Gratis
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>
          <button className="group px-10 py-5 border-2 border-white/20 text-white font-semibold text-xl rounded-2xl hover:bg-white/5 hover:border-white/40 transition-all duration-500 backdrop-blur-sm">
            <span className="flex items-center gap-3">
              Ver Demo
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium">Scroll para explorar</span>
        <div className="relative w-7 h-12 border-2 border-white/20 rounded-full flex justify-center overflow-hidden">
          <div className="absolute top-2 w-1.5 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-px h-24 bg-gradient-to-t from-transparent via-purple-500/30 to-transparent" />

      <style jsx>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(16px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}

