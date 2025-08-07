import React, { useState, useEffect } from 'react';

const EpicTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, TechVision AI",
      company: "Fortune 500",
      avatar: "👩‍💼",
      quote: "GarBotGPT no es solo IA, es el futuro de la comunicación humana. Ha revolucionado completamente cómo interactuamos con la tecnología.",
      rating: 5,
      impact: "300% aumento en productividad",
      background: "from-purple-600 to-pink-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "Fundador & CTO",
      company: "StartupUnicorn",
      avatar: "👨‍💻",
      quote: "Después de probar docenas de IAs, GarBotGPT es la única que realmente entiende el contexto y las emociones. Es como hablar con un genio empático.",
      rating: 5,
      impact: "500K+ usuarios conquistados",
      background: "from-cyan-600 to-blue-600"
    },
    {
      name: "Elena Vasquez",
      role: "Directora de Innovación",
      company: "Global Corp",
      avatar: "👩‍🔬",
      quote: "La capacidad de GarBotGPT para generar ideas creativas y soluciones innovadoras ha superado todas nuestras expectativas. Es pura magia tecnológica.",
      rating: 5,
      impact: "10x mejora en creatividad",
      background: "from-green-600 to-emerald-600"
    },
    {
      name: "David Kim",
      role: "Investigador Principal",
      company: "MIT Labs",
      avatar: "👨‍🔬",
      quote: "Como investigador en IA, puedo afirmar que GarBotGPT representa un breakthrough genuino. Su arquitectura emocional es revolucionaria.",
      rating: 5,
      impact: "Breakthrough científico",
      background: "from-orange-600 to-red-600"
    },
    {
      name: "Isabella Thompson",
      role: "Creative Director",
      company: "Design Studio",
      avatar: "👩‍🎨",
      quote: "GarBotGPT ha desbloqueado niveles de creatividad que no sabía que existían. Es como tener un co-creador infinitamente inspirado.",
      rating: 5,
      impact: "Creatividad sin límites",
      background: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-black to-purple-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Epic Header */}
        <div className={`text-center mb-20 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
            <span className="block mb-4">Voces de la</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolución
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Líderes mundiales, innovadores y visionarios comparten cómo GarBotGPT está transformando sus realidades
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <div className={`bg-gradient-to-br ${testimonials[activeTestimonial].background} p-1 rounded-3xl`}>
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="text-center">
                {/* Avatar */}
                <div className="text-8xl mb-6 animate-bounce">
                  {testimonials[activeTestimonial].avatar}
                </div>

                {/* Quote */}
                <blockquote className="text-3xl font-light text-white leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-3xl text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className={`text-lg bg-gradient-to-r ${testimonials[activeTestimonial].background} bg-clip-text text-transparent font-semibold mb-1`}>
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-slate-400">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className={`inline-block bg-gradient-to-r ${testimonials[activeTestimonial].background} px-6 py-3 rounded-2xl`}>
                  <span className="text-white font-bold">
                    {testimonials[activeTestimonial].impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative transition-all duration-300 ${
                activeTestimonial === index ? 'scale-125' : 'scale-100 hover:scale-110'
              }`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.background} p-1`}>
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
              </div>
              {activeTestimonial === index && (
                <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.background} rounded-full opacity-50 animate-pulse`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "2.3M+", label: "Usuarios Satisfechos", icon: "😍" },
            { number: "99.7%", label: "Satisfacción", icon: "⭐" },
            { number: "0.2s", label: "Tiempo Respuesta", icon: "⚡" },
            { number: "24/7", label: "Disponibilidad", icon: "🌟" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-300 mb-8 font-light">
            Únete a los líderes que ya están viviendo el futuro
          </p>
          <a
            href="https://ia.garbotgpt.com/auth?redirect=%2F"
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-4 text-xl">
              <span className="text-2xl">🚀</span>
              Ser Parte de la Historia
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

export default EpicTestimonials;
