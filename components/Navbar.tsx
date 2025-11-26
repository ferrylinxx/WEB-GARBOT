'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHover, setActiveHover] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    {
      href: '/',
      label: 'Inicio',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      href: '/caracteristicas',
      label: 'Características',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
    {
      href: '/precios',
      label: 'Precios',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
    },
    {
      href: '/changelog',
      label: 'Changelog',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    },
    {
      href: '/contacto',
      label: 'Contacto',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/20 backdrop-blur-3xl border-b border-white/30'
        : 'bg-white/10 backdrop-blur-2xl'
    }`}
    style={{
      boxShadow: scrolled
        ? '0 8px 32px rgba(0, 113, 227, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06), inset 0 -1px 0 rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        : '0 4px 16px rgba(0, 0, 0, 0.02), inset 0 -1px 0 rgba(255, 255, 255, 0.15)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo - Premium Style */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/logo.png"
                  alt="GarBotGPT Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:scale-105"
                  style={{
                    letterSpacing: '-0.03em'
                  }}>
                GarBotGPT
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation - Ultra Premium */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setActiveHover(link.href)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {/* Background hover effect */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-white/40 backdrop-blur-xl shadow-lg'
                      : activeHover === link.href
                      ? 'bg-white/30 backdrop-blur-lg'
                      : 'bg-transparent'
                  }`}
                  style={{
                    boxShadow: pathname === link.href
                      ? '0 4px 16px rgba(0, 113, 227, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                      : 'none'
                  }}></div>

                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    <span className={`transition-all duration-300 ${
                      pathname === link.href || activeHover === link.href
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-0 w-0'
                    }`}>
                      {link.icon}
                    </span>
                    {link.label}
                  </span>

                  {/* Active indicator */}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full shadow-lg"
                      style={{
                        boxShadow: '0 0 8px rgba(0, 113, 227, 0.8)'
                      }}
                    ></span>
                  )}
                </Link>
              ))}

              {/* CTA Button Premium */}
              <a
                href="https://ia.garbotgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative px-6 py-2.5 text-sm font-semibold text-white flex items-center gap-2">
                  Probar Ahora
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button - Premium */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-lg bg-white/30 backdrop-blur-lg hover:bg-white/40 transition-all duration-300 group"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
              }}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="h-5 w-5 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Ultra Premium */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/20 backdrop-blur-3xl border-t border-white/30"
          style={{
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.08)'
          }}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 text-base font-medium transition-all duration-300 rounded-xl relative group ${
                  pathname === link.href
                    ? 'text-blue-600 bg-white/40 shadow-lg'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/30'
                }`}
                style={{
                  letterSpacing: '-0.01em',
                  transitionDelay: `${index * 50}ms`,
                  boxShadow: pathname === link.href
                    ? '0 4px 12px rgba(0, 113, 227, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                    : 'none'
                }}
              >
                <span className="flex items-center gap-3">
                  <span className={`transition-all duration-300 ${
                    pathname === link.href ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>
                    {link.icon}
                  </span>
                  {link.label}
                  {pathname === link.href && (
                    <span className="ml-auto w-2 h-2 bg-blue-600 rounded-full shadow-lg"
                      style={{
                        boxShadow: '0 0 8px rgba(0, 113, 227, 0.8)'
                      }}
                    ></span>
                  )}
                </span>
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <a
              href="https://ia.garbotgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 relative group overflow-hidden rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative px-4 py-3.5 text-base font-semibold text-white flex items-center justify-center gap-2">
                Probar Ahora
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

