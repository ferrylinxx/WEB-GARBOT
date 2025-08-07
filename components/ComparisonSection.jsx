import React, { useState, useEffect } from 'react';

const ComparisonSection = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const comparisons = [
    {
      title: "Velocidad de Respuesta",
      garbotgpt: {
        value: "< 1 segundo",
        description: "Respuestas instantáneas con procesamiento ultrarrápido",
        icon: "⚡",
        color: "text-emerald-600"
      },
      others: {
        value: "3-10 segundos",
        description: "Tiempos de espera variables y menos consistentes",
        icon: "🐌",
        color: "text-red-500"
      }
    },
    {
      title: "Comprensión Contextual",
      garbotgpt: {
        value: "96% precisión",
        description: "Mantiene contexto completo de conversaciones largas",
        icon: "🧠",
        color: "text-purple-600"
      },
      others: {
        value: "70-85% precisión",
        description: "Pierde contexto en conversaciones complejas",
        icon: "🤔",
        color: "text-orange-500"
      }
    },
    {
      title: "Disponibilidad",
      garbotgpt: {
        value: "24/7/365",
        description: "Siempre disponible, sin interrupciones de servicio",
        icon: "🌟",
        color: "text-blue-600"
      },
      others: {
        value: "Limitado",
        description: "Restricciones de uso y mantenimientos frecuentes",
        icon: "⏰",
        color: "text-gray-500"
      }
    },
    {
      title: "Personalización",
      garbotgpt: {
        value: "Totalmente adaptable",
        description: "Se adapta a tu estilo y preferencias únicas",
        icon: "🎯",
        color: "text-indigo-600"
      },
      others: {
        value: "Respuestas genéricas",
        description: "Mismo estilo para todos los usuarios",
        icon: "📋",
        color: "text-slate-500"
      }
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Velocidad Extrema",
      description: "Respuestas en menos de 1 segundo",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: "🧠",
      title: "IA Avanzada",
      description: "Comprensión contextual superior",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Personalización Total",
      description: "Se adapta a tu estilo único",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔒",
      title: "Privacidad Garantizada",
      description: "Tus conversaciones son privadas",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🌍",
      title: "Multiidioma",
      description: "Soporte para 50+ idiomas",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "📱",
      title: "Multiplataforma",
      description: "Disponible en todos tus dispositivos",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveComparison((prev) => (prev + 1) % comparisons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [comparisons.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/50 dark:to-purple-950/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Comparación Objetiva
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GarBotGPT?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comparamos GarBotGPT con otras soluciones de IA para que veas la diferencia
          </p>
        </div>

        {/* Comparison Cards */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {comparisons[activeComparison].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* GarBotGPT */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-emerald-200 dark:border-emerald-800 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  GANADOR
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">GarBotGPT</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Líder en IA</p>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{comparisons[activeComparison].garbotgpt.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${comparisons[activeComparison].garbotgpt.color}`}>
                    {comparisons[activeComparison].garbotgpt.value}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {comparisons[activeComparison].garbotgpt.description}
                  </p>
                </div>
              </div>

              {/* Others */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-gray-500 rounded-2xl flex items-center justify-center text-2xl">
                    🤷
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Otros Chatbots</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-semibold">Competencia</p>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{comparisons[activeComparison].others.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${comparisons[activeComparison].others.color}`}>
                    {comparisons[activeComparison].others.value}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {comparisons[activeComparison].others.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveComparison(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === activeComparison 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125 shadow-lg' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Características{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                exclusivas
              </span>
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Funcionalidades que nos hacen únicos en el mercado de IA conversacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                ¿Listo para la experiencia superior?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios que ya han elegido la mejor IA conversacional
              </p>
              <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Probar GarBotGPT Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
