import React, { useState, useEffect } from 'react';
import ComingSoonModal from './ComingSoonModal';

const FinalCTASection = () => {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: "🚀",
      title: "Velocidad Extrema",
      description: "Respuestas en menos de 1 segundo"
    },
    {
      icon: "🧠",
      title: "IA Superinteligente",
      description: "Comprensión contextual avanzada"
    },
    {
      icon: "🎯",
      title: "Personalización Total",
      description: "Se adapta a tu estilo único"
    },
    {
      icon: "🌟",
      title: "Disponible 24/7",
      description: "Siempre listo para ayudarte"
    }
  ];

  const stats = [
    { number: "50K+", label: "Usuarios Activos", color: "text-blue-400" },
    { number: "96%", label: "Precisión IA", color: "text-emerald-400" },
    { number: "<1s", label: "Tiempo Respuesta", color: "text-purple-400" },
    { number: "24/7", label: "Disponibilidad", color: "text-orange-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-indigo-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-float-delayed opacity-70"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-300 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <svg className="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Potenciado por IA Avanzada
          </div>
          
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            El futuro es{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              ahora
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Únete a más de <span className="font-bold text-blue-400">50,000 usuarios</span> que ya han transformado 
            su forma de trabajar, aprender y crear con la IA más avanzada del mundo.
          </p>

          {/* Dynamic Feature Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-5xl animate-bounce">
                {features[currentFeature].icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {features[currentFeature].title}
                </h3>
                <p className="text-slate-300">
                  {features[currentFeature].description}
                </p>
              </div>
            </div>
            
            {/* Progress indicators */}
            <div className="flex justify-center space-x-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://ia.garbotgpt.com/auth?redirect=%2F"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <span className="text-xl">🚀</span>
                <span className="text-lg">Comenzar Gratis</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            <a
              href="https://ia.garbotgpt.com/auth?redirect=%2F"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1" />
                </svg>
                <span className="text-lg">Ver Demo</span>
              </div>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-400 text-sm mb-6">Confiado por empresas líderes y universidades de todo el mundo</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Universidad Complutense</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">TechCorp</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Creative Studios</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Research Labs</span>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¿Listo para revolucionar tu productividad?
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              No esperes más. El futuro de la inteligencia artificial está aquí, y está esperándote.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowComingSoonModal(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Empezar Ahora - Es Gratis
              </button>
            </div>
          </div>
        </div>
      </div>

      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </section>
  );
};

export default FinalCTASection;
