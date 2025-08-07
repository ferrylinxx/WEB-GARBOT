import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ComingSoonModal from './ComingSoonModal';

const FeaturesSection = () => {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Conversaciones Naturales",
      description: "Interactúa con GarBotGPT como si fuera una conversación real. Comprende el contexto, mantiene el hilo de la conversación y responde de manera coherente.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Respuestas Instantáneas",
      description: "Obtén respuestas precisas y detalladas en menos de un segundo. Procesamiento ultrarrápido que no te hace esperar para continuar tu conversación.",
      color: "from-indigo-400 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Inteligencia Avanzada",
      description: "Comprensión profunda del lenguaje natural con capacidad de razonamiento complejo. Aprende de cada interacción para brindarte mejores respuestas.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },

    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Disponible 24/7",
      description: "Tu asistente de IA está siempre disponible, sin importar la hora o el día. Soporte continuo para todas tus consultas y necesidades de información.",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    },

  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            <span className="block mb-4">Características</span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Extraordinarias
            </span>
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Cada función diseñada para superar tus expectativas y redefinir lo que esperas de la IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                activeFeature === index ? 'scale-105 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border border-white/20 dark:border-slate-700/20 hover:border-indigo-300/40 dark:hover:border-indigo-600/40 overflow-hidden">

                {/* Active glow effect */}
                {activeFeature === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-5 animate-pulse`}></div>
                )}

                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:bg-gradient-to-r group-hover:${feature.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {feature.title}
                  </h3>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Enhanced progress bar */}
                  <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className={`absolute inset-y-0 left-0 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-1000 ${
                      activeFeature === index ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Epic CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                ¿Listo para la Revolución?
              </h3>
              <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Únete a millones de usuarios que ya viven el futuro de la conversación inteligente
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://ia.garbotgpt.com/auth?redirect=%2F"
                  className="group bg-white text-indigo-600 font-bold py-5 px-10 rounded-2xl hover:bg-slate-100 transition-all duration-500 transform hover:scale-110 text-center shadow-2xl hover:shadow-white/25"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <span className="text-2xl">🚀</span>
                    Comenzar Ahora
                  </span>
                </a>
                <a
                  href="https://ia.garbotgpt.com/auth?redirect=%2F"
                  className="group border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-110 text-center backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <span className="text-2xl">💬</span>
                    Probar Gratis
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </section>
  );
};

export default FeaturesSection;
