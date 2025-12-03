'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function CTAGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleCharsRef = useRef<HTMLSpanElement[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ringsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  const titleText = "COMIENZA"
  const subtitleWord = "AHORA"

  useLayoutEffect(() => {
    const mobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Create particles (menos en móvil)
      if (particlesRef.current) {
        const particleCount = mobile ? 20 : 50
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div')
          particle.className = 'absolute w-1 h-1 bg-blue-500 rounded-full'
          particle.style.left = `${Math.random() * 100}%`
          particle.style.top = `${Math.random() * 100}%`
          particle.style.opacity = '0'
          particlesRef.current.appendChild(particle)

          gsap.to(particle, {
            y: mobile ? -100 - Math.random() * 100 : -200 - Math.random() * 200,
            x: (Math.random() - 0.5) * (mobile ? 50 : 100),
            opacity: Math.random() * (mobile ? 0.3 : 0.5),
            duration: mobile ? 4 + Math.random() * 3 : 3 + Math.random() * 2,
            repeat: -1,
            delay: Math.random() * 2,
            ease: 'none'
          })
        }
      }

      // Rings animation (más lento en móvil)
      gsap.to('.cta-ring', {
        rotation: 360,
        duration: mobile ? 40 : 30,
        repeat: -1,
        ease: 'none',
        stagger: {
          each: 0.5,
          from: 'start'
        }
      })

      // Main scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: mobile ? 'top 90%' : 'top 80%',
          end: mobile ? 'top 40%' : 'top 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // Rings scale in (más suave en móvil)
      tl.fromTo('.cta-ring',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: mobile ? 0.7 : 1, stagger: mobile ? 0.05 : 0.1, ease: mobile ? 'power3.out' : 'back.out(1.7)' }
      )

      // Title chars explosion from center (más suave en móvil)
      .fromTo(titleCharsRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: mobile ? 0 : (() => gsap.utils.random(-180, 180)),
          y: mobile ? 30 : (() => gsap.utils.random(-100, 100)),
          x: mobile ? 0 : (() => gsap.utils.random(-100, 100))
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          y: 0,
          x: 0,
          duration: mobile ? 0.6 : 1,
          stagger: { each: mobile ? 0.03 : 0.05, from: 'center' },
          ease: mobile ? 'power3.out' : 'back.out(1.7)'
        }, '-=0.5'
      )

      // Subtitle word
      .fromTo(subtitleRef.current,
        { y: mobile ? 25 : 50, opacity: 0, filter: mobile ? 'blur(10px)' : 'blur(20px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: mobile ? 0.5 : 0.8, ease: 'power3.out' },
        '-=0.3'
      )

      // Button
      .fromTo(buttonRef.current,
        { y: mobile ? 15 : 30, opacity: 0, scale: mobile ? 0.9 : 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: mobile ? 0.4 : 0.6, ease: mobile ? 'power3.out' : 'back.out(1.7)' },
        '-=0.2'
      )

      // Stats
      .fromTo(statsRef.current?.children || [],
        { y: mobile ? 10 : 20, opacity: 0 },
        { y: 0, opacity: 1, duration: mobile ? 0.3 : 0.5, stagger: mobile ? 0.05 : 0.1, ease: 'power2.out' },
        '-=0.2'
      )

      // Hover animation for button (solo desktop)
      if (buttonRef.current && !mobile) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to('.cta-ring', {
            scale: 1.1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out'
          })
        })

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to('.cta-ring', {
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out'
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-32"
    >
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated rings */}
      <div ref={ringsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="cta-ring absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full" />
        <div className="cta-ring absolute w-[450px] h-[450px] border border-cyan-500/15 rounded-full" />
        <div className="cta-ring absolute w-[600px] h-[600px] border border-purple-500/10 rounded-full" />
        <div className="cta-ring absolute w-[750px] h-[750px] border border-blue-500/5 rounded-full" />
      </div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-cyan-600/30 blur-[100px] rounded-full" />

      {/* Content */}
      <div ref={containerRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-30 scale-150" />
          <Image
            src="/logo.png"
            alt="GarBotGPT"
            width={140}
            height={140}
            className="mx-auto relative z-10"
          />
        </div>

        {/* Title */}
        <h2 ref={titleRef} className="mb-4 overflow-hidden">
          <div className="flex justify-center items-center flex-wrap">
            {titleText.split('').map((char, i) => (
              <span
                key={i}
                ref={el => { if (el) titleCharsRef.current[i] = el }}
                className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white"
                style={{ textShadow: '0 0 60px rgba(255,255,255,0.3)' }}
              >
                {char}
              </span>
            ))}
          </div>
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12"
          style={{ textShadow: '0 0 80px rgba(0,113,227,0.5)' }}
        >
          {subtitleWord}
        </p>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          Únete a <span className="text-white font-semibold">miles de usuarios</span> que ya están transformando su productividad
        </p>

        {/* CTA Button */}
        <a
          ref={buttonRef}
          href="https://ia.garbotgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-bold text-2xl rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 0 60px rgba(0,113,227,0.5), 0 0 100px rgba(147,51,234,0.3), inset 0 2px 0 rgba(255,255,255,0.2)'
          }}
        >
          <span className="relative z-10">Comenzar Gratis</span>
          <svg className="relative z-10 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          </div>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* Stats */}
        <div ref={statsRef} className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            { icon: '⭐', label: '4.9/5 Rating', value: '4.9' },
            { icon: '🚀', label: '+5000 usuarios', value: '5K+' },
            { icon: '🔒', label: '100% Seguro', value: '100%' },
            { icon: '⚡', label: 'Respuesta <100ms', value: '<100ms' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className="text-white/80 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

