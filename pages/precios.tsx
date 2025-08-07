import React, { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Precios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: 'Explorador',
      description: 'Perfecto para comenzar tu viaje con IA',
      price: { monthly: 0, yearly: 0 },
      popular: false,
      features: [
        '50 conversaciones por mes',
        'Respuestas básicas de IA',
        'Soporte por email',
        'Acceso a la comunidad',
        'Tutoriales básicos'
      ],
      color: 'from-slate-600 to-slate-700',
      bgColor: 'from-slate-800/50 to-slate-900/50'
    },
    {
      name: 'Profesional',
      description: 'Para profesionales que buscan productividad',
      price: { monthly: 29, yearly: 290 },
      popular: true,
      features: [
        'Conversaciones ilimitadas',
        'IA avanzada con memoria',
        'Análisis de documentos',
        'Integración con herramientas',
        'Soporte prioritario',
        'Personalización avanzada',
        'Exportación de conversaciones'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      name: 'Empresarial',
      description: 'Soluciones escalables para equipos',
      price: { monthly: 99, yearly: 990 },
      popular: false,
      features: [
        'Todo lo de Profesional',
        'IA personalizada para empresa',
        'API dedicada',
        'Análisis y métricas avanzadas',
        'Gestión de equipos',
        'Seguridad empresarial',
        'Soporte 24/7',
        'Entrenamiento personalizado'
      ],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      name: 'Enterprise',
      description: 'Soluciones a medida para grandes organizaciones',
      price: { monthly: 'Personalizado', yearly: 'Personalizado' },
      popular: false,
      features: [
        'Todo lo de Empresarial',
        'Implementación dedicada',
        'IA entrenada específicamente',
        'Infraestructura privada',
        'Cumplimiento regulatorio',
        'Gerente de cuenta dedicado',
        'SLA garantizado',
        'Integración personalizada'
      ],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  const faqs = [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan inmediatamente y se prorratea el costo.'
    },
    {
      question: '¿Hay límites en el plan gratuito?',
      answer: 'El plan Explorador incluye 50 conversaciones por mes con funcionalidades básicas. Es perfecto para probar GarBotGPT.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito principales, PayPal, transferencias bancarias y criptomonedas para planes empresariales.'
    },
    {
      question: '¿Ofrecen descuentos para estudiantes?',
      answer: 'Sí, ofrecemos 50% de descuento para estudiantes verificados y 30% para organizaciones sin fines de lucro.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Precios - GarBotGPT | Planes Flexibles para Todos"
        description="Descubre nuestros planes de precios flexibles. Desde gratis hasta soluciones empresariales. Encuentra el plan perfecto para tus necesidades de IA."
        keywords="precios GarBotGPT, planes IA, suscripción inteligencia artificial, precios chatbot, planes empresariales IA"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">Precios</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Transparentes
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                Elige el plan perfecto para tu viaje hacia el futuro de la IA. Sin sorpresas, sin compromisos ocultos.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                  Mensual
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative w-16 h-8 bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none"
                >
                  <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}></div>
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
                  Anual
                </span>
                {billingCycle === 'yearly' && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Ahorra 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative group transition-all duration-500 ${
                    plan.popular ? 'scale-105 z-10' : 'scale-100'
                  } ${hoveredPlan === index ? 'scale-105' : ''}`}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Más Popular
                    </div>
                  )}

                  <div className={`relative bg-gradient-to-br ${plan.bgColor} backdrop-blur-xl rounded-3xl p-8 border ${
                    plan.popular ? 'border-purple-500/50' : 'border-white/10'
                  } hover:border-purple-500/50 transition-all duration-500 h-full`}>
                    
                    {plan.popular && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-5 animate-pulse rounded-3xl`}></div>
                    )}

                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold text-white mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.name}
                      </h3>
                      
                      <p className="text-slate-400 mb-6">
                        {plan.description}
                      </p>

                      <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                          {typeof plan.price[billingCycle] === 'number' ? (
                            <>
                              <span className="text-4xl font-bold text-white">
                                ${plan.price[billingCycle]}
                              </span>
                              <span className="text-slate-400">
                                /{billingCycle === 'monthly' ? 'mes' : 'año'}
                              </span>
                            </>
                          ) : (
                            <span className="text-2xl font-bold text-white">
                              {plan.price[billingCycle]}
                            </span>
                          )}
                        </div>
                        {billingCycle === 'yearly' && typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                          <p className="text-sm text-slate-400 mt-1">
                            ${Math.round(plan.price.yearly / 12)}/mes facturado anualmente
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`}></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="https://ia.garbotgpt.com/auth?redirect=%2F"
                        className={`block w-full text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                          plan.popular
                            ? `bg-gradient-to-r ${plan.color} text-white hover:scale-105 shadow-lg`
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        }`}
                      >
                        {plan.name === 'Enterprise' ? 'Contactar Ventas' : 'Comenzar Ahora'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Preguntas Frecuentes
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Resolvemos tus dudas sobre nuestros planes y servicios
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Únete a millones de usuarios que ya confían en GarBotGPT para sus necesidades de IA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://ia.garbotgpt.com/auth?redirect=%2F"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                Comenzar Gratis
              </a>
              <a
                href="/contacto"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 border border-white/30"
              >
                Contactar Ventas
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Precios;
