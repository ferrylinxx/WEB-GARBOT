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

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Todas', icon: '📋' },
    { id: 'getting-started', name: 'Primeros Pasos', icon: '🚀' },
    { id: 'features', name: 'Características', icon: '⚡' },
    { id: 'pricing', name: 'Precios', icon: '💰' },
    { id: 'technical', name: 'Técnicas', icon: '🔧' },
    { id: 'security', name: 'Seguridad', icon: '🔒' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: '¿Cómo empiezo a usar GarBotGPT?',
      answer: 'Comenzar es muy simple: 1) Regístrate gratis en nuestra plataforma, 2) Completa tu perfil básico, 3) Inicia tu primera conversación. No necesitas conocimientos técnicos previos.',
      popular: true
    },
    {
      id: 2,
      category: 'getting-started',
      question: '¿Necesito experiencia técnica para usar GarBotGPT?',
      answer: 'No, GarBotGPT está diseñado para ser intuitivo. Simplemente escribe o habla como lo harías con cualquier persona. Nuestra IA entiende el lenguaje natural perfectamente.',
      popular: true
    },
    {
      id: 3,
      category: 'features',
      question: '¿Qué hace diferente a GarBotGPT de otros chatbots?',
      answer: 'GarBotGPT tiene inteligencia emocional avanzada, memoria conversacional persistente, respuestas en 0.2 segundos, y se adapta a tu estilo personal de comunicación. Es más que un chatbot, es tu compañero digital.',
      popular: true
    },
    {
      id: 4,
      category: 'features',
      question: '¿GarBotGPT puede recordar conversaciones anteriores?',
      answer: 'Sí, GarBotGPT tiene memoria conversacional avanzada. Recuerda el contexto de conversaciones pasadas, tus preferencias, y se adapta continuamente a tu estilo de comunicación.',
      popular: false
    },
    {
      id: 5,
      category: 'pricing',
      question: '¿El plan gratuito tiene limitaciones?',
      answer: 'El plan Explorador incluye 50 conversaciones mensuales con funcionalidades básicas. Es perfecto para probar GarBotGPT. Los planes pagos ofrecen conversaciones ilimitadas y características avanzadas.',
      popular: true
    },
    {
      id: 6,
      category: 'pricing',
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Absolutamente. Puedes actualizar, degradar o cancelar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente.',
      popular: false
    },
    {
      id: 7,
      category: 'technical',
      question: '¿En qué idiomas funciona GarBotGPT?',
      answer: 'GarBotGPT domina más de 100 idiomas y dialectos nativamente. Puede traducir, conversar y entender matices culturales en tiempo real.',
      popular: false
    },
    {
      id: 8,
      category: 'technical',
      question: '¿Qué tan rápido responde GarBotGPT?',
      answer: 'GarBotGPT responde en promedio en 0.2 segundos gracias a nuestra infraestructura de procesamiento cuántico distribuida globalmente.',
      popular: true
    },
    {
      id: 9,
      category: 'security',
      question: '¿Mis conversaciones son privadas y seguras?',
      answer: 'Absolutamente. Utilizamos encriptación cuántica de nivel militar, cumplimos con GDPR, y nunca compartimos tus datos. Tu privacidad es nuestra prioridad máxima.',
      popular: true
    },
    {
      id: 10,
      category: 'security',
      question: '¿GarBotGPT almacena mis datos personales?',
      answer: 'Solo almacenamos lo mínimo necesario para mejorar tu experiencia. Puedes ver, editar o eliminar todos tus datos en cualquier momento desde tu panel de privacidad.',
      popular: false
    },
    {
      id: 11,
      category: 'features',
      question: '¿Puede GarBotGPT ayudarme con tareas específicas de trabajo?',
      answer: 'Sí, GarBotGPT puede ayudarte con análisis de datos, creación de contenido, programación, diseño, marketing, educación y mucho más. Se adapta a tu industria y necesidades específicas.',
      popular: false
    },
    {
      id: 12,
      category: 'technical',
      question: '¿GarBotGPT funciona en dispositivos móviles?',
      answer: 'Sí, GarBotGPT funciona perfectamente en todos los dispositivos: móviles, tablets, computadoras. También tenemos apps nativas para iOS y Android.',
      popular: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <SEOHead 
        title="FAQ - GarBotGPT | Preguntas Frecuentes y Respuestas"
        description="Encuentra respuestas a las preguntas más frecuentes sobre GarBotGPT. Guías, tutoriales y soporte para aprovechar al máximo tu IA conversacional."
        keywords="FAQ GarBotGPT, preguntas frecuentes IA, ayuda chatbot, soporte GarBotGPT, guía usuario"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
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
                <span className="block mb-4">Preguntas</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Frecuentes
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                Encuentra respuestas rápidas a las dudas más comunes sobre GarBotGPT
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar en preguntas frecuentes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 text-lg"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Preguntas Más Populares
                </span>
              </h2>
              <p className="text-slate-300">Las dudas que más resolvemos cada día</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFAQs.slice(0, 6).map((faq) => (
                <div
                  key={faq.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">❓</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                        {faq.question}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2">
                        {faq.answer.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      {faq.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-white/10 pt-6">
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No encontramos resultados</h3>
                <p className="text-slate-400">Intenta con otros términos de búsqueda o selecciona una categoría diferente</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿No Encontraste tu Respuesta?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Nuestro equipo de soporte está aquí para ayudarte 24/7
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-2">Chat en Vivo</h3>
                <p className="text-slate-300 mb-4">Respuesta inmediata</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-4 rounded-lg">
                  Iniciar Chat
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-slate-300 mb-4">Respuesta en 2 horas</p>
                <a href="mailto:soporte@garbotgpt.com" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                  Enviar Email
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-white mb-2">Documentación</h3>
                <p className="text-slate-300 mb-4">Guías detalladas</p>
                <a href="/documentacion" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2 px-4 rounded-lg">
                  Ver Docs
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default FAQ;
