'use client'

import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Producto',
    links: [
      { name: 'Características', href: '/caracteristicas' },
      { name: 'Precios', href: '/precios' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'Comparativa', href: '/comparativa' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentación', href: '/docs' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Soporte', href: '/contacto' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacidad', href: '/privacidad' },
      { name: 'Términos', href: '/terminos' },
      { name: 'Cookies', href: '/cookies' }
    ]
  }
]

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'Discord', href: '#', icon: '💬' },
  { name: 'GitHub', href: 'https://github.com/ferrylinxx/GarBotWeb', icon: '🐙' }
]

export default function FooterGTA() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="GarBotGPT"
                width={48}
                height={48}
                className="opacity-90"
              />
              <span className="text-2xl font-bold text-white">GarBotGPT</span>
            </Link>
            <p className="text-white/50 max-w-sm mb-6">
              La plataforma de inteligencia artificial más avanzada para potenciar tu productividad.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} GarBotGPT. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Hecho con</span>
            <span className="text-red-500">❤️</span>
            <span>en España</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

