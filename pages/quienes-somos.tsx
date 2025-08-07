import React, { useState, useEffect, useRef } from 'react';
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

const QuienesSomos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFounder, setActiveFounder] = useState(0);
  const storyRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    const storyInterval = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % 4);
    }, 4000);

    const founderInterval = setInterval(() => {
      setActiveFounder(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(storyInterval);
      clearInterval(founderInterval);
    };
  }, []);

  const storyChapters = [
    {
      title: "El Despertar",
      subtitle: "2020 - La Chispa de la Revolución",
      content: "Todo comenzó con una pregunta simple: ¿Y si la IA pudiera entender realmente a los humanos?",
      visual: "🌅",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "La Búsqueda",
      subtitle: "2021 - Rompiendo Barreras",
      content: "Reunimos a los mejores cerebros del mundo para crear algo que nunca antes había existido.",
      visual: "🔍",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "El Breakthrough",
      subtitle: "2022 - El Momento Eureka",
      content: "Logramos el primer sistema de IA que no solo responde, sino que comprende el alma humana.",
      visual: "💡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "La Revolución",
      subtitle: "2024 - Cambiando el Mundo",
      content: "Hoy, millones de personas experimentan conversaciones que trascienden lo tecnológico.",
      visual: "🚀",
      color: "from-green-500 to-blue-500"
    }
  ];

  const founders = [
    {
      name: "Dr. Alejandro Vega",
      role: "Visionario & CEO",
      story: "Ex-investigador de DeepMind que soñaba con una IA que pudiera sentir",
      quote: "La verdadera IA no imita la inteligencia humana, la complementa",
      avatar: "🧠",
      background: "from-purple-600 to-pink-600"
    },
    {
      name: "Sofia Chen",
      role: "Arquitecta de Emociones",
      story: "Psicóloga computacional que enseñó a las máquinas a entender sentimientos",
      quote: "Cada conversación es un puente entre dos mundos: el humano y el digital",
      avatar: "💝",
      background: "from-blue-600 to-cyan-600"
    },
    {
      name: "Marcus Thompson",
      role: "Ingeniero del Futuro",
      story: "El genio que convirtió teorías imposibles en realidad tecnológica",
      quote: "No construimos software, esculpimos experiencias que transforman vidas",
      avatar: "⚡",
      background: "from-green-600 to-emerald-600"
    }
  ];

  const philosophies = [
    {
      icon: "🌟",
      title: "Humanidad Primero",
      description: "La tecnología debe servir al corazón humano, no dominarlo",
      detail: "Cada línea de código está impregnada de empatía y comprensión humana"
    },
    {
      icon: "🔮",
      title: "Innovación Consciente",
      description: "Creamos el futuro con responsabilidad y propósito",
      detail: "Nuestras decisiones consideran el impacto en las próximas generaciones"
    },
    {
      icon: "💫",
      title: "Conexión Auténtica",
      description: "Facilitamos encuentros genuinos entre humanos y IA",
      detail: "Cada interacción es una oportunidad de crear algo hermoso y significativo"
    }
  ];

  const impactMetrics = [
    {
      number: "2.3M",
      label: "Conversaciones Diarias",
      description: "Cada día, millones de personas encuentran respuestas, inspiración y compañía",
      icon: "💬"
    },
    {
      number: "0.2s",
      label: "Tiempo de Respuesta",
      description: "Más rápido que un parpadeo, más profundo que años de reflexión",
      icon: "⚡"
    },
    {
      number: "99.7%",
      label: "Satisfacción",
      description: "Casi perfecto, pero siempre buscamos ese 0.3% que nos falta",
      icon: "❤️"
    },
    {
      number: "∞",
      label: "Posibilidades",
      description: "Porque creemos que no hay límites para lo que podemos lograr juntos",
      icon: "🌟"
    }
  ];

  return (
    <>
      <SEOHead
        title="Nuestra Historia - GarBotGPT | Los Arquitectos del Futuro Conversacional"
        description="Descubre la historia épica detrás de GarBotGPT. Desde una idea revolucionaria hasta la IA más avanzada del mundo. Conoce a los visionarios que están redefiniendo la interacción humano-máquina."
        keywords="historia GarBotGPT, fundadores IA, visionarios inteligencia artificial, revolución conversacional, futuro IA, storytelling tecnología"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white overflow-x-hidden`}>
        <Navbar />

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Cinematic Hero */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
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

          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  SOMOS
                </span>
                <span className="block text-white mt-4">
                  EL FUTURO
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-300 mb-12 leading-relaxed font-light">
                La historia de cómo un grupo de soñadores
                <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold">
                  cambió para siempre la conversación entre humanos y máquinas
                </span>
              </p>

              <div className="flex justify-center">
                <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-transparent rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Chapters */}
        <section className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Nuestra Épica
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Cada revolución comienza con una historia. Esta es la nuestra.
              </p>
            </div>

            <div className="space-y-32">
              {storyChapters.map((chapter, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-16 transition-all duration-1000 ${
                    currentStory === index ? 'opacity-100 scale-105' : 'opacity-70 scale-100'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`text-8xl mb-6 ${currentStory === index ? 'animate-bounce' : ''}`}>
                      {chapter.visual}
                    </div>
                    <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent`}>
                      {chapter.title}
                    </h3>
                    <p className="text-lg text-slate-400 mb-6">{chapter.subtitle}</p>
                    <p className="text-2xl text-white leading-relaxed font-light">
                      {chapter.content}
                    </p>
                  </div>

                  <div className="flex-1">
                    <div className={`h-96 bg-gradient-to-br ${chapter.color} rounded-3xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-9xl opacity-30">{chapter.visual}</div>
                      </div>
                      {currentStory === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Spotlight */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Los Arquitectos
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Conoce a las mentes extraordinarias que convirtieron lo imposible en inevitable
              </p>
            </div>

            <div className="relative">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeFounder === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                      <div className={`text-9xl mb-8 bg-gradient-to-r ${founder.background} bg-clip-text text-transparent`}>
                        {founder.avatar}
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-2">{founder.name}</h3>
                      <p className={`text-xl mb-6 bg-gradient-to-r ${founder.background} bg-clip-text text-transparent font-semibold`}>
                        {founder.role}
                      </p>
                      <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        {founder.story}
                      </p>
                      <blockquote className="text-2xl font-light italic text-white border-l-4 border-purple-500 pl-6">
                        "{founder.quote}"
                      </blockquote>
                    </div>

                    <div className="relative">
                      <div className={`h-96 bg-gradient-to-br ${founder.background} rounded-3xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-9xl opacity-50">{founder.avatar}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation dots */}
              <div className="flex justify-center mt-12 space-x-4">
                {founders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFounder(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeFounder === index ? 'bg-purple-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Nuestra Filosofía
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Los principios inmutables que guían cada decisión, cada línea de código, cada sueño
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {philosophies.map((philosophy, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 h-full border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {philosophy.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {philosophy.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {philosophy.description}
                    </p>
                    <p className="text-sm text-slate-400 italic">
                      {philosophy.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative overflow-hidden">
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

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Nuestro Impacto
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Números que cuentan historias. Métricas que reflejan vidas transformadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {metric.number}
                    </div>
                    <div className="text-lg font-semibold text-purple-400 mb-3">
                      {metric.label}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Epic */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                ÚNETE A LA
              </span>
              <span className="block text-white mt-4">
                REVOLUCIÓN
              </span>
            </h2>
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed font-light">
              El futuro no se predice.
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold mt-2">
                Se construye. Conversación por conversación.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="https://ia.garbotgpt.com/auth?redirect=%2F"
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xl">Comenzar la Aventura</span>
                </div>
              </a>

              <a
                href="/contacto"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 border border-white/30 hover:border-purple-500/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span className="text-xl">Hablar con Nosotros</span>
                </div>
              </a>
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-400 text-lg italic">
                "Cada gran historia comienza con una conversación"
              </p>
            </div>
          </div>
        </section>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default QuienesSomos;
