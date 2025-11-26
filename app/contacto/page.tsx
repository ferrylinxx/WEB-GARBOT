import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import GlassCard3D from '@/components/GlassCard3D'

export const metadata: Metadata = {
  title: 'Contacto - GarBotGPT | Soporte y Ayuda',
  description: 'Contacta con el equipo de GarBotGPT. Envíanos tus preguntas, sugerencias o solicita soporte técnico. Estamos aquí para ayudarte con tu asistente de IA.',
  keywords: [
    'contacto GarBotGPT',
    'soporte IA',
    'ayuda GarBotGPT',
    'contactar asistente IA',
    'soporte técnico',
    'email GarBotGPT'
  ],
  openGraph: {
    title: 'Contacto - GarBotGPT',
    description: 'Contacta con el equipo de GarBotGPT para soporte, preguntas o sugerencias.',
    url: 'https://garbotgpt.com/contacto',
    type: 'website',
  },
  alternates: {
    canonical: 'https://garbotgpt.com/contacto',
  },
}

export default function ContactoPage() {
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
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{ 
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Ponte en contacto con nosotros para más información.
          </p>
        </div>
      </section>

      {/* Contact Info Section con efectos 3D */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <GlassCard3D className="glass-effect p-8 rounded-3xl light-refraction dynamic-reflection" intensity={0.6}>
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.01em' }}>
                Email
              </h3>
              <a href="mailto:garbotgpt@garbotgpt.com"
                 className="text-lg text-blue-600 hover:text-blue-700 transition-colors">
                garbotgpt@garbotgpt.com
              </a>
            </GlassCard3D>

            {/* GarBotGPT Info Card */}
            <GlassCard3D className="glass-effect p-8 rounded-3xl light-refraction dynamic-reflection" intensity={0.6}>
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 tracking-tight"
                  style={{ letterSpacing: '-0.01em' }}>
                GarBotGPT
              </h3>
              <p className="text-lg text-gray-600">
                Tu asistente de IA disponible 24/7
              </p>
            </GlassCard3D>
          </div>

          {/* Contact Form */}
          <GlassCard3D className="glass-effect p-10 rounded-3xl max-w-3xl mx-auto chromatic-glass dynamic-reflection" intensity={0.5}>
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center tracking-tight" 
                style={{ letterSpacing: '-0.015em' }}>
              Envíanos un mensaje
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-gray-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all outline-none backdrop-blur-xl"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-gray-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all outline-none backdrop-blur-xl"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-gray-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all outline-none backdrop-blur-xl resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full apple-button py-4 text-lg font-medium shadow-xl chromatic-glass-rainbow"
              >
                Enviar mensaje
              </button>
            </form>
          </GlassCard3D>
        </div>
      </section>

      <Footer />
    </main>
  )
}

