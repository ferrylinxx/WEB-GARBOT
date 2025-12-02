'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'

// SVG Icons as components
const Icons = {
  home: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  features: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  demo: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pricing: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  scroll: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  blog: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  docs: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  changelog: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  discord: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  ),
  arrow: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  chevron: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  rocket: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

const navLinks = [
  { name: 'Inicio', href: '/', icon: 'home' },
  { name: 'Características', href: '/caracteristicas', icon: 'features' },
  { name: 'Demo', href: '/demo', icon: 'demo' },
  { name: 'Precios', href: '/precios', icon: 'pricing' },
]

const moreLinks = [
  { name: 'Blog', href: '/blog', icon: 'blog', description: 'Últimas noticias y tutoriales' },
  { name: 'Documentación', href: '/docs', icon: 'docs', description: 'Guías y API reference' },
  { name: 'Changelog', href: '/changelog', icon: 'changelog', description: 'Historial de versiones' },
  { name: 'Sobre mí', href: '/sobre-nosotros', icon: 'home', description: 'Conoce al creador' },
]

export default function NavbarGTA() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeLink, setActiveLink] = useState('')
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const moreMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animación de entrada GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )

      // Links stagger animation
      if (linksRef.current) {
        gsap.fromTo(linksRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.4 }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  // Efecto magnético en hover
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(target, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-black/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        ref={navRef}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo con efecto glow */}
            <div ref={logoRef}>
              <Link href="/" className="flex items-center gap-3 group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                  <Image
                    src="/logo.png"
                    alt="GarBotGPT"
                    width={48}
                    height={48}
                    className="relative opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                    GarBot
                  </span>
                  <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    GPT
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation con efectos */}
            <div ref={linksRef} className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => setActiveLink(link.name)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 group ${
                    activeLink === link.name
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {/* Glow background */}
                  <span className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    activeLink === link.name ? 'opacity-100' : ''
                  }`} />

                  {/* Border glow */}
                  <span className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-all duration-300" />

                  <span className="relative flex items-center gap-2">
                    <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{Icons[link.icon as keyof typeof Icons]}</span>
                    <span>{link.name}</span>
                  </span>

                  {/* Underline effect */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowMoreMenu(true)}
                onMouseLeave={() => setShowMoreMenu(false)}
              >
                <button
                  className="relative px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 text-white/60 hover:text-white group flex items-center gap-2"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{Icons.rocket}</span>
                    <span>Más</span>
                    <span className={`transition-transform duration-300 ${showMoreMenu ? 'rotate-180' : ''}`}>{Icons.chevron}</span>
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div
                  ref={moreMenuRef}
                  className={`absolute top-full right-0 mt-2 w-72 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 ${
                    showMoreMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                  }`}
                >
                  <div className="p-2">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {Icons[link.icon as keyof typeof Icons]}
                        </span>
                        <div>
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{link.name}</div>
                          <div className="text-white/40 text-sm">{link.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-3 border-t border-white/10 bg-white/5">
                    <a
                      href="https://discord.gg/garbotgpt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 transition-all group"
                    >
                      <span className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        {Icons.discord}
                      </span>
                      <div>
                        <div className="text-white font-medium">Únete a Discord</div>
                        <div className="text-white/40 text-sm">+5,000 miembros</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://ia.garbotgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-xl font-semibold text-sm overflow-hidden"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient-x" />

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Glow */}
                <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative text-white flex items-center gap-2">
                  <span>Probar Gratis</span>
                  <span className="group-hover:translate-x-1 transition-transform">{Icons.arrow}</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button mejorado */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Mejorado */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-2xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Content */}
        <div className={`relative flex flex-col items-center justify-center h-full transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative space-y-4">
            {[...navLinks, ...moreLinks].map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-4 text-xl font-bold text-white/70 hover:text-white transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                  {Icons[link.icon as keyof typeof Icons]}
                </span>
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <a
            href="https://ia.garbotgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-12 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xl rounded-2xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-3">
              {Icons.rocket}
              <span>Comenzar Ahora</span>
            </span>
          </a>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  )
}

