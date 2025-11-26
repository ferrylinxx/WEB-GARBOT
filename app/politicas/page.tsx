import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad - GarBotGPT',
  description: 'Lee la política de privacidad de GarBotGPT. Información sobre cómo recopilamos, usamos y protegemos tus datos personales al usar nuestro asistente de IA.',
  keywords: [
    'política privacidad GarBotGPT',
    'privacidad IA',
    'protección datos',
    'GDPR',
    'términos uso',
    'seguridad datos'
  ],
  openGraph: {
    title: 'Política de Privacidad - GarBotGPT',
    description: 'Política de privacidad y protección de datos de GarBotGPT.',
    url: 'https://garbotgpt.com/politicas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://garbotgpt.com/politicas',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PoliticasPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-gray-900"
              style={{
                fontWeight: 600,
                letterSpacing: '-0.015em',
                lineHeight: 1.05
              }}>
            Políticas y Privacidad
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Tu privacidad y seguridad son nuestra prioridad.
          </p>
        </div>
      </section>

      {/* Policy Links Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/politicas/privacidad" className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-300 group">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Política de Privacidad</h2>
              <p className="text-gray-600">
                Información sobre cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD.
              </p>
              <span className="inline-block mt-4 text-blue-600 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>

            <Link href="/politicas/cookies" className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-300 group">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Política de Cookies</h2>
              <p className="text-gray-600">
                Información sobre el uso de cookies en GarBotGPT y cómo gestionarlas en tu navegador.
              </p>
              <span className="inline-block mt-4 text-blue-600 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>

            <Link href="/politicas/terminos" className="glass-effect p-8 rounded-3xl hover:scale-105 transition-all duration-300 group">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">Términos y Condiciones</h2>
              <p className="text-gray-600">
                Lee nuestros términos de servicio antes de utilizar nuestra plataforma de IA.
              </p>
              <span className="inline-block mt-4 text-blue-600 group-hover:translate-x-2 transition-transform">
                Leer más →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-10 rounded-3xl space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                1. Introducción
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En GarBotGPT, nos comprometemos a proteger tu privacidad y tus datos personales. 
                Esta política de privacidad explica cómo recopilamos, usamos, almacenamos y protegemos 
                tu información cuando utilizas nuestros servicios.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                2. Información que Recopilamos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos la siguiente información:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span><strong>Información de cuenta:</strong> Nombre, correo electrónico y preferencias de usuario.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span><strong>Datos de uso:</strong> Interacciones con el servicio, consultas y conversaciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo.</span>
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                3. Uso de la Información
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Proporcionar y mejorar nuestros servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Personalizar tu experiencia de usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Comunicarnos contigo sobre actualizaciones y novedades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Garantizar la seguridad y prevenir fraudes</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                4. Protección de Datos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos, 
                incluyendo encriptación de extremo a extremo, almacenamiento seguro y acceso restringido. 
                Tus conversaciones son privadas y nunca se comparten con terceros sin tu consentimiento explícito.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                5. Tus Derechos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tienes derecho a:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Acceder a tus datos personales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Rectificar información incorrecta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Solicitar la eliminación de tus datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Exportar tus datos en formato portable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Retirar tu consentimiento en cualquier momento</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.015em' }}>
                6. Contacto
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, 
                contáctanos en:{' '}
                <a href="mailto:garbotgpt@garbotgpt.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  garbotgpt@garbotgpt.com
                </a>
              </p>
            </div>

            {/* Last Update */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última actualización: Diciembre 2024
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

