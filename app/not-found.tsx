import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada - 404 | GarBotGPT',
  description: 'La página que buscas no existe. Explora nuestras características, blog o contacta con nosotros.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  const popularLinks = [
    { name: 'Inicio', href: '/', icon: '🏠' },
    { name: 'Características', href: '/caracteristicas', icon: '✨' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Precios', href: '/precios', icon: '💰' },
    { name: 'Contacto', href: '/contacto', icon: '📧' },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      {/* Gradient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[150px]" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            404
          </div>
          <div className="mt-4 text-6xl">🤖</div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-xl text-white/60 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Search Suggestion */}
        <div className="mb-12 p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-white/70 mb-4">
            ¿Qué estabas buscando? Prueba con estas páginas populares:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
              >
                <span className="text-3xl">{link.icon}</span>
                <span className="text-sm font-bold text-white">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 hover:scale-105 transition-all"
          >
            Leer el Blog
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-12 text-white/40 text-sm">
          Si crees que esto es un error, por favor{' '}
          <Link href="/contacto" className="text-red-400 hover:underline">
            contáctanos
          </Link>
          .
        </p>
      </div>
    </main>
  )
}

