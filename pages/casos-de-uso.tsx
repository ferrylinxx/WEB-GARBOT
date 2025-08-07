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

const CasosDeUso = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveUseCase(prev => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const useCases = [
    {
      title: 'Educación Personalizada',
      description: 'Revoluciona el aprendizaje con tutorías adaptativas',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      features: [
        'Tutorías personalizadas 24/7',
        'Explicaciones adaptadas al nivel',
        'Evaluación continua del progreso',
        'Planes de estudio dinámicos'
      ],
      metrics: {
        improvement: '85%',
        satisfaction: '94%',
        timeReduction: '60%'
      },
      testimonial: {
        text: 'GarBotGPT transformó completamente mi experiencia de aprendizaje. Es como tener un tutor personal que nunca se cansa.',
        author: 'María González, Estudiante de Medicina'
      }
    },
    {
      title: 'Atención al Cliente',
      description: 'Soporte inteligente que nunca duerme',
      icon: '🎧',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      features: [
        'Respuestas instantáneas 24/7',
        'Resolución de problemas complejos',
        'Escalamiento inteligente',
        'Múltiples idiomas nativos'
      ],
      metrics: {
        improvement: '92%',
        satisfaction: '96%',
        timeReduction: '75%'
      },
      testimonial: {
        text: 'Nuestros clientes están más satisfechos que nunca. GarBotGPT maneja el 90% de las consultas sin intervención humana.',
        author: 'Carlos Ruiz, Director de Soporte'
      }
    },
    {
      title: 'Creación de Contenido',
      description: 'Creatividad ilimitada para tu marca',
      icon: '✍️',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      features: [
        'Generación de contenido original',
        'Adaptación a diferentes tonos',
        'SEO optimizado automáticamente',
        'Múltiples formatos y estilos'
      ],
      metrics: {
        improvement: '300%',
        satisfaction: '91%',
        timeReduction: '80%'
      },
      testimonial: {
        text: 'Triplicamos nuestra producción de contenido manteniendo la calidad. GarBotGPT es nuestro escritor estrella.',
        author: 'Ana Martín, Content Manager'
      }
    },
    {
      title: 'Análisis de Datos',
      description: 'Insights inteligentes de tus datos',
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20',
      features: [
        'Análisis predictivo avanzado',
        'Visualizaciones automáticas',
        'Detección de patrones ocultos',
        'Reportes ejecutivos inteligentes'
      ],
      metrics: {
        improvement: '250%',
        satisfaction: '89%',
        timeReduction: '70%'
      },
      testimonial: {
        text: 'Los insights que obtenemos ahora nos han ayudado a tomar decisiones más inteligentes y rentables.',
        author: 'Roberto Silva, Data Analyst'
      }
    },
    {
      title: 'Desarrollo de Software',
      description: 'Tu compañero de programación inteligente',
      icon: '💻',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-900/20 to-purple-900/20',
      features: [
        'Generación de código optimizado',
        'Debugging inteligente',
        'Documentación automática',
        'Revisión de código avanzada'
      ],
      metrics: {
        improvement: '180%',
        satisfaction: '93%',
        timeReduction: '65%'
      },
      testimonial: {
        text: 'Mi productividad como desarrollador se ha disparado. GarBotGPT es como tener un senior developer siempre disponible.',
        author: 'Diego López, Full Stack Developer'
      }
    },
    {
      title: 'Marketing Digital',
      description: 'Campañas que convierten más',
      icon: '📈',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-900/20 to-cyan-900/20',
      features: [
        'Estrategias personalizadas',
        'Copy que convierte',
        'Análisis de competencia',
        'Optimización continua'
      ],
      metrics: {
        improvement: '320%',
        satisfaction: '95%',
        timeReduction: '55%'
      },
      testimonial: {
        text: 'Nuestras conversiones aumentaron un 320%. GarBotGPT entiende a nuestros clientes mejor que nosotros.',
        author: 'Laura Fernández, Marketing Director'
      }
    }
  ];

  const industries = [
    { name: 'Educación', icon: '🎓', users: '2.3M+' },
    { name: 'E-commerce', icon: '🛒', users: '1.8M+' },
    { name: 'Salud', icon: '🏥', users: '950K+' },
    { name: 'Finanzas', icon: '💰', users: '1.2M+' },
    { name: 'Tecnología', icon: '💻', users: '3.1M+' },
    { name: 'Consultoría', icon: '📋', users: '780K+' }
  ];

  return (
    <>
      <SEOHead 
        title="Casos de Uso - GarBotGPT | Soluciones IA para Cada Industria"
        description="Descubre cómo GarBotGPT transforma diferentes industrias: educación, atención al cliente, marketing, desarrollo y más. Casos de uso reales con resultados comprobados."
        keywords="casos de uso GarBotGPT, IA educación, chatbot atención cliente, IA marketing, automatización procesos"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 60 }).map((_, i) => (
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

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">Casos de</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Uso Reales
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                Descubre cómo GarBotGPT está transformando industrias completas con resultados medibles y casos de éxito comprobados
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {industries.map((industry, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{industry.name}</div>
                    <div className="text-sm text-slate-400">{industry.users} usuarios</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Use Case Display */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Use Case Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`text-6xl p-4 bg-gradient-to-r ${useCases[activeUseCase].color} rounded-3xl`}>
                    {useCases[activeUseCase].icon}
                  </div>
                  <div>
                    <h2 className={`text-4xl font-bold text-white mb-2 bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text text-transparent`}>
                      {useCases[activeUseCase].title}
                    </h2>
                    <p className="text-xl text-slate-300">
                      {useCases[activeUseCase].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {useCases[activeUseCase].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${useCases[activeUseCase].color}`}></div>
                      <span className="text-slate-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 py-8">
                  <div className="text-center">
                    <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text mb-2`}>
                      +{useCases[activeUseCase].metrics.improvement}
                    </div>
                    <div className="text-slate-400 text-sm">Mejora</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text mb-2`}>
                      {useCases[activeUseCase].metrics.satisfaction}
                    </div>
                    <div className="text-slate-400 text-sm">Satisfacción</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text mb-2`}>
                      -{useCases[activeUseCase].metrics.timeReduction}
                    </div>
                    <div className="text-slate-400 text-sm">Tiempo</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className={`bg-gradient-to-br ${useCases[activeUseCase].bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10`}>
                  <blockquote className="text-lg text-white italic mb-4">
                    "{useCases[activeUseCase].testimonial.text}"
                  </blockquote>
                  <cite className="text-slate-400">
                    — {useCases[activeUseCase].testimonial.author}
                  </cite>
                </div>
              </div>

              {/* Use Case Selector */}
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveUseCase(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                      activeUseCase === index
                        ? `bg-gradient-to-r ${useCase.color} text-white scale-105`
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{useCase.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{useCase.title}</h3>
                        <p className={`text-sm ${activeUseCase === index ? 'text-white/80' : 'text-slate-400'}`}>
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Historias de Éxito
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Resultados reales de empresas que confiaron en GarBotGPT para transformar sus operaciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: 'TechStartup Inc.',
                  industry: 'Tecnología',
                  result: '400% aumento en productividad',
                  description: 'Automatizaron su soporte técnico y desarrollo de documentación',
                  icon: '🚀'
                },
                {
                  company: 'EduLearn Academy',
                  industry: 'Educación',
                  result: '95% satisfacción estudiantil',
                  description: 'Implementaron tutorías personalizadas con IA para 10,000+ estudiantes',
                  icon: '📚'
                },
                {
                  company: 'RetailMax',
                  industry: 'E-commerce',
                  result: '250% más conversiones',
                  description: 'Optimizaron su atención al cliente y recomendaciones de productos',
                  icon: '🛍️'
                }
              ].map((story, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <div className="text-5xl mb-6">{story.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{story.industry}</p>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-4">
                    {story.result}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {story.description}
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
              ¿Listo para tu Historia de Éxito?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Únete a miles de empresas que ya están transformando sus operaciones con GarBotGPT
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
                Hablar con Experto
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

export default CasosDeUso;
