import React, { useState, useEffect } from 'react';

const RevolutionaryFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Inteligencia Emocional',
      subtitle: 'IA que Siente y Comprende',
      description: 'No solo procesa palabras, comprende emociones, contexto y matices humanos como nunca antes.',
      details: [
        'Reconocimiento emocional avanzado',
        'Adaptación al estado de ánimo',
        'Respuestas empáticas naturales',
        'Comprensión contextual profunda'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      icon: '⚡',
      title: 'Velocidad Cuántica',
      subtitle: 'Respuestas en 0.2 Segundos',
      description: 'Procesamiento instantáneo que supera los límites de la velocidad humana de pensamiento.',
      details: [
        'Procesamiento paralelo masivo',
        'Optimización cuántica',
        'Cache inteligente predictivo',
        'Infraestructura global distribuida'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      icon: '🌟',
      title: 'Aprendizaje Evolutivo',
      subtitle: 'Se Adapta y Mejora Contigo',
      description: 'Cada conversación lo hace más inteligente, más personal, más tuyo.',
      details: [
        'Memoria conversacional persistente',
        'Personalización automática',
        'Mejora continua en tiempo real',
        'Adaptación a tu estilo único'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20'
    },
    {
      icon: '🚀',
      title: 'Creatividad Infinita',
      subtitle: 'Más Allá de la Lógica',
      description: 'Genera ideas, soluciones y contenido que trasciende los límites de la programación tradicional.',
      details: [
        'Generación creativa original',
        'Síntesis de ideas complejas',
        'Inspiración bajo demanda',
        'Colaboración creativa humano-IA'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-black via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Header */}
        <div className={`text-center mb-20 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block mb-4">Características</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolucionarias
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            No es solo una mejora incremental. Es un salto cuántico hacia el futuro de la inteligencia artificial.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Feature Cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-1000 ${
                  activeFeature === index 
                    ? 'scale-105 opacity-100' 
                    : 'scale-100 opacity-70 hover:opacity-90'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                  {/* Active indicator */}
                  {activeFeature === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 animate-pulse`}></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`text-6xl group-hover:scale-110 transition-transform duration-300 ${
                        activeFeature === index ? 'animate-bounce' : ''
                      }`}>
                        {feature.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-white mb-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.title}
                        </h3>
                        <p className="text-lg text-slate-400 mb-4 font-semibold">
                          {feature.subtitle}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        
                        {/* Feature Details */}
                        <div className={`space-y-2 transition-all duration-500 ${
                          activeFeature === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                        }`}>
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
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${features[activeFeature].color} opacity-30 animate-pulse`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <div className={`text-9xl mb-8 transition-all duration-1000 ${
                  activeFeature !== null ? 'scale-110 animate-pulse' : 'scale-100'
                }`}>
                  {features[activeFeature].icon}
                </div>
                
                <h3 className={`text-4xl font-bold text-white mb-4 bg-gradient-to-r ${features[activeFeature].color} bg-clip-text text-transparent`}>
                  {features[activeFeature].title}
                </h3>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                {/* Progress Indicators */}
                <div className="flex justify-center space-x-4">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeFeature === index 
                          ? `bg-gradient-to-r ${features[index].color} scale-125` 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <a
            href="https://ia.garbotgpt.com/auth?redirect=%2F"
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-4 text-xl">
              <span className="text-2xl">✨</span>
              Experimentar la Revolución
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryFeatures;
