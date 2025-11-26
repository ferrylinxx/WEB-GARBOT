import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Precios - GarBotGPT | Completamente Gratis',
  description: 'GarBotGPT es completamente gratis. Accede a todas las funciones de IA sin costo alguno. Planes Free, Pro y Enterprise disponibles.',
  keywords: ['precios GarBotGPT', 'gratis', 'planes', 'free', 'pro', 'enterprise', 'IA gratis'],
  openGraph: {
    title: 'Precios de GarBotGPT - Completamente Gratis',
    description: 'Accede a GarBotGPT de forma completamente gratuita. Sin tarjeta de crédito requerida.',
    url: 'https://garbotgpt.com/precios',
    type: 'website',
  },
  alternates: {
    canonical: 'https://garbotgpt.com/precios',
  },
}

export default function PreciosPage() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfecto para empezar y explorar',
      popular: false,
      features: [
        'Acceso completo a GarBotGPT',
        'Generación de texto ilimitada',
        'Análisis de documentos',
        'Búsqueda web en tiempo real',
        'Generación de imágenes (10/día)',
        'Generación de videos (5/día)',
        'Soporte por email',
        'Actualizaciones automáticas'
      ],
      cta: 'Comenzar Gratis',
      link: 'https://ia.garbotgpt.com'
    },
    {
      name: 'Pro',
      price: 'Próximamente',
      description: 'Para profesionales y equipos',
      popular: true,
      features: [
        'Todo lo de Free, más:',
        'Generación de imágenes ilimitada',
        'Generación de videos ilimitada',
        'Modelos IA premium',
        'Prioridad en respuestas',
        'Historial extendido (1 año)',
        'API access',
        'Integraciones avanzadas',
        'Soporte prioritario 24/7',
        'Sin anuncios'
      ],
      cta: 'Próximamente',
      link: '#'
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      description: 'Para organizaciones grandes',
      popular: false,
      features: [
        'Todo lo de Pro, más:',
        'Servidores dedicados',
        'Modelos personalizados',
        'Entrenamiento con tus datos',
        'SLA garantizado 99.9%',
        'Encriptación avanzada',
        'Cumplimiento GDPR/HIPAA',
        'Gestor de cuenta dedicado',
        'Onboarding personalizado',
        'Facturación personalizada'
      ],
      cta: 'Contactar Ventas',
      link: '/contacto'
    }
  ]

  const faqs = [
    {
      question: '¿GarBotGPT es realmente gratis?',
      answer: 'Sí, completamente gratis. Puedes acceder a todas las funciones principales sin costo alguno. No se requiere tarjeta de crédito para empezar.'
    },
    {
      question: '¿Cuándo estará disponible el plan Pro?',
      answer: 'Estamos trabajando en el plan Pro y estará disponible próximamente. Suscríbete a nuestro newsletter para ser el primero en enterarte del lanzamiento.'
    },
    {
      question: '¿Puedo usar GarBotGPT para mi negocio?',
      answer: 'Absolutamente. El plan Free es perfecto para pequeños negocios. Para empresas más grandes, ofrecemos el plan Enterprise con características avanzadas.'
    },
    {
      question: '¿Hay límites en el plan gratuito?',
      answer: 'El plan Free tiene límites razonables en generación de imágenes (10/día) y videos (5/día), pero la generación de texto y análisis de documentos son ilimitados.'
    },
    {
      question: '¿Cómo funciona el plan Enterprise?',
      answer: 'El plan Enterprise se personaliza según las necesidades de tu organización. Contáctanos para discutir tus requisitos específicos y obtener una cotización.'
    },
    {
      question: '¿Puedo cambiar de plan más tarde?',
      answer: 'Sí, cuando los planes de pago estén disponibles, podrás actualizar o cambiar tu plan en cualquier momento desde tu cuenta.'
    },
    {
      question: '¿Ofrecen descuentos para educación?',
      answer: 'Sí, ofrecemos descuentos especiales para instituciones educativas y estudiantes. Contáctanos para más información.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Cuando los planes de pago estén disponibles, aceptaremos tarjetas de crédito/débito, PayPal y transferencias bancarias para Enterprise.'
    }
  ]

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full text-sm font-semibold text-green-600 border border-green-500/30">
              100% Gratis - Sin Tarjeta Requerida
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900" 
              style={{ 
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05
              }}>
            Precios Simples y Transparentes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
             style={{ 
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            Comienza gratis hoy. Actualiza cuando estés listo.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative glass-effect rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular 
                    ? 'scale-105 shadow-2xl border-2 border-blue-500' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      Próximamente
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    {plan.price === '0' ? (
                      <div>
                        <span className="text-5xl font-bold text-gray-900">Gratis</span>
                      </div>
                    ) : plan.price === 'Próximamente' ? (
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  target={plan.link.startsWith('http') ? '_blank' : undefined}
                  rel={plan.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block w-full py-3 px-6 rounded-full text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 shadow-lg'
                      : plan.price === '0'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:scale-105'
                      : 'glass-effect text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900"
                style={{ letterSpacing: '-0.02em' }}>
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber sobre nuestros precios
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="glass-effect rounded-2xl p-6 group cursor-pointer hover:shadow-lg transition-all"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg list-none">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-blue-600 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿Tienes más preguntas?
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 glass-effect rounded-full text-gray-900 font-semibold hover:scale-105 transition-transform"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios que ya están transformando su forma de trabajar con IA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ia.garbotgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  Comenzar Gratis
                </a>
                <a
                  href="/contacto"
                  className="px-8 py-4 glass-effect text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Hablar con Ventas
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Sin tarjeta de crédito requerida • Acceso instantáneo • Cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

