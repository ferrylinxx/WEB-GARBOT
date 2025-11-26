'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de suscripción real
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/garbotgpt',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/garbotgpt',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      name: 'GitHub',
      href: 'https://github.com/garbotgpt',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@garbotgpt',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/garbotgpt',
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
    }
  ]

  return (
    <footer className="relative bg-white/5 backdrop-blur-xl border-t border-gray-200 overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Mantente Actualizado
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recibe las últimas noticias, actualizaciones y consejos sobre IA directamente en tu correo.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-4 py-3 rounded-full bg-white/50 border border-gray-200
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                             transition-all outline-none backdrop-blur-xl"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
                  >
                    Suscribirse
                  </button>
                </form>
                {subscribed && (
                  <p className="mt-3 text-green-600 text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ¡Gracias por suscribirte!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="GarBotGPT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-3xl gradient-text font-semibold tracking-tight">GarBotGPT</h3>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Tu asistente de inteligencia artificial avanzado. Genera texto, imágenes, videos, analiza documentos y más.
              <span className="text-blue-600 font-semibold"> Completamente gratis.</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:garbotgpt@garbotgpt.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:underline">garbotgpt@garbotgpt.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Soporte 24/7</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-3">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Producto</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/caracteristicas"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Características
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/comparativa"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Comparativa
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Changelog
                </Link>
              </li>
              <li>
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Probar Ahora
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Roadmap
                </Link>
              </li>
              <li>
                <a
                  href="https://status.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Estado del Servicio
                </a>
              </li>
              <li>
                <a
                  href="https://api.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  API (Próximamente)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/politicas/privacidad"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/cookies"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/terminos"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Términos
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Todas las Políticas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
              <p>© {currentYear} GarBotGPT. Todos los derechos reservados.</p>
              <span className="hidden md:inline text-gray-400">•</span>
              <p className="flex items-center gap-2">
                Hecho con
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                en España
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/politicas/privacidad" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacidad
              </Link>
              <Link href="/politicas/cookies" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookies
              </Link>
              <Link href="/politicas/terminos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Términos
              </Link>
              <Link href="/sitemap.xml" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>Privacidad Garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>100% Gratis</span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full text-gray-600 hover:text-blue-600 transition-all transform hover:scale-105 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

