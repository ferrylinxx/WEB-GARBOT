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

const Caracteristicas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Inteligencia Emocional Avanzada',
      description: 'Reconoce y responde a emociones humanas con precisión extraordinaria',
      details: [
        'Análisis de sentimientos en tiempo real',
        'Adaptación emocional contextual',
        'Respuestas empáticas naturales',
        'Detección de estados de ánimo'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      icon: '⚡',
      title: 'Procesamiento Cuántico',
      description: 'Velocidad de respuesta que desafía los límites de la física',
      details: [
        'Respuestas en 0.2 segundos',
        'Procesamiento paralelo masivo',
        'Optimización cuántica',
        'Infraestructura global distribuida'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      icon: '🌟',
      title: 'Aprendizaje Evolutivo',
      description: 'Se adapta y mejora continuamente con cada interacción',
      details: [
        'Memoria conversacional persistente',
        'Personalización automática',
        'Mejora continua en tiempo real',
        'Adaptación a estilos únicos'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      icon: '🚀',
      title: 'Creatividad Infinita',
      description: 'Genera ideas y soluciones que trascienden la lógica tradicional',
      details: [
        'Generación creativa original',
        'Síntesis de ideas complejas',
        'Inspiración bajo demanda',
        'Colaboración creativa humano-IA'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    },
    {
      icon: '🔒',
      title: 'Seguridad Cuántica',
      description: 'Protección de datos con encriptación de nivel militar',
      details: [
        'Encriptación cuántica avanzada',
        'Privacidad absoluta garantizada',
        'Cumplimiento GDPR completo',
        'Auditorías de seguridad continuas'
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-900/20 to-purple-900/20'
    },
    {
      icon: '🌍',
      title: 'Multiidioma Nativo',
      description: 'Dominio perfecto de más de 100 idiomas y dialectos',
      details: [
        'Traducción instantánea precisa',
        'Comprensión cultural profunda',
        'Modismos y expresiones locales',
        'Comunicación cross-cultural'
      ],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-900/20 to-cyan-900/20'
    }
  ];

  const capabilities = [
    {
      category: 'Análisis y Procesamiento',
      items: [
        'Análisis de documentos complejos',
        'Procesamiento de imágenes y videos',
        'Reconocimiento de voz avanzado',
        'Análisis de datos en tiempo real'
      ]
    },
    {
      category: 'Creatividad y Contenido',
      items: [
        'Generación de contenido original',
        'Creación de arte y diseños',
        'Composición musical',
        'Escritura creativa avanzada'
      ]
    },
    {
      category: 'Productividad Empresarial',
      items: [
        'Automatización de procesos',
        'Análisis predictivo',
        'Optimización de workflows',
        'Integración con herramientas'
      ]
    },
    {
      category: 'Educación y Aprendizaje',
      items: [
        'Tutorías personalizadas',
        'Explicaciones adaptativas',
        'Evaluación de conocimientos',
        'Planes de estudio dinámicos'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Características Avanzadas - GarBotGPT | IA de Nueva Generación"
        description="Descubre las características revolucionarias de GarBotGPT: inteligencia emocional, procesamiento cuántico, aprendizaje evolutivo y mucho más. La IA más avanzada del mundo."
        keywords="características GarBotGPT, inteligencia artificial avanzada, IA emocional, procesamiento cuántico, aprendizaje automático"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
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

          <div className="max-w-6xl mx-auto relative z-10">
            <div className={`text-center transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">Características</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolucionarias
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                Cada función diseñada para superar los límites de lo posible y redefinir el futuro de la inteligencia artificial
              </p>
              
              <a
                href="https://ia.garbotgpt.com/auth?redirect=%2F"
                className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">✨</span>
                  Experimentar Ahora
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ${
                    activeFeature === index ? 'scale-105 z-10' : 'scale-100'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full`}>
                    
                    {activeFeature === index && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 animate-pulse`}></div>
                    )}

                    <div className="relative z-10">
                      <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        activeFeature === index ? 'animate-bounce' : ''
                      }`}>
                        {feature.icon}
                      </div>
                      
                      <h3 className={`text-2xl font-bold text-white mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                            <span className="text-slate-400 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Capacidades Ilimitadas
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Desde análisis complejos hasta creatividad pura, GarBotGPT domina cada aspecto de la inteligencia artificial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {capability.category}
                  </h3>
                  <div className="space-y-4">
                    {capability.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para Experimentar el Futuro?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Únete a millones de usuarios que ya viven la revolución de la IA conversacional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://ia.garbotgpt.com/auth?redirect=%2F"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                Comenzar Gratis
              </a>
              <a
                href="/precios"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 border border-white/30"
              >
                Ver Precios
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

export default Caracteristicas;
