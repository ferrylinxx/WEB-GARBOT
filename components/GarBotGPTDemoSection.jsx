import React, { useState, useEffect, useRef } from 'react';
import { AdvancedTypewriter } from './AdvancedTypewriter';

const GarBotGPTDemoSection = () => {
  const [activeTab, setActiveTab] = useState('video');
  const [isVisible, setIsVisible] = useState(false);
  const [demoStats, setDemoStats] = useState({
    users: 47832,
    queries: 1247,
    satisfaction: 4.9
  });

  const tabs = [
    {
      id: 'video',
      title: 'Demo en Vivo',
      icon: '🎥',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'features',
      title: 'Características',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'testimonials',
      title: 'Testimonios',
      icon: '💬',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const features = [
    {
      icon: '🧠',
      title: 'Inteligencia Suprema',
      description: 'Procesamiento de lenguaje natural de última generación con comprensión contextual profunda',
      stats: '99.7% precisión'
    },
    {
      icon: '⚡',
      title: 'Velocidad Extrema',
      description: 'Respuestas instantáneas en menos de 0.3 segundos, optimizado para máximo rendimiento',
      stats: '<0.3s respuesta'
    },
    {
      icon: '🎯',
      title: 'Personalización Total',
      description: 'Se adapta a tu estilo, preferencias y necesidades específicas para una experiencia única',
      stats: '100% personalizado'
    },
    {
      icon: '🌍',
      title: 'Multiidioma Avanzado',
      description: 'Soporte nativo para 50+ idiomas con traducción y comprensión cultural profunda',
      stats: '50+ idiomas'
    },
    {
      icon: '🔒',
      title: 'Privacidad Absoluta',
      description: 'Encriptación end-to-end y políticas de privacidad que protegen tus datos al 100%',
      stats: 'Privacidad total'
    },
    {
      icon: '🚀',
      title: 'Evolución Continua',
      description: 'Actualizaciones automáticas y mejoras constantes basadas en machine learning avanzado',
      stats: 'Siempre mejorando'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Elena Martínez',
      role: 'Investigadora en IA, MIT',
      avatar: '👩‍🔬',
      text: 'GarBotGPT ha revolucionado mi investigación. Su capacidad de análisis y síntesis es simplemente extraordinaria.',
      rating: 5,
      highlight: 'Revolucionario'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CEO, TechStartup',
      avatar: '👨‍💼',
      text: 'Implementamos GarBotGPT y nuestra productividad aumentó 300%. Es como tener un genio en el equipo.',
      rating: 5,
      highlight: '+300% productividad'
    },
    {
      name: 'Ana García',
      role: 'Estudiante de Doctorado',
      avatar: '👩‍🎓',
      text: 'Me ayudó a completar mi tesis en tiempo récord. Sus explicaciones son claras y siempre precisas.',
      rating: 5,
      highlight: 'Tesis completada'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats
    const interval = setInterval(() => {
      setDemoStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 10),
        queries: Math.floor(Math.random() * 2000 + 1000),
        satisfaction: 4.8 + Math.random() * 0.2
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderVideoDemo = () => (
    <div className="space-y-8">
      {/* Live Demo Container - Sin Video */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        <div className="p-8">
          {/* Header con indicador en vivo */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-white text-lg font-semibold">DEMO EN VIVO</span>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {demoStats.users.toLocaleString()} usuarios activos
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            🚀 GarBotGPT en Acción
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Descubre cómo GarBotGPT revoluciona la forma de interactuar con la inteligencia artificial.
            Desde consultas simples hasta análisis complejos, todo en tiempo real.
          </p>

          {/* Stats bar mejorado */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {demoStats.queries.toLocaleString()}
              </div>
              <div className="text-slate-400">Consultas/min</div>
              <div className="text-green-300 text-sm mt-1">↗ +12% hoy</div>
            </div>
            <div className="text-center bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {demoStats.satisfaction.toFixed(1)}/5
              </div>
              <div className="text-slate-400">Satisfacción</div>
              <div className="text-blue-300 text-sm mt-1">⭐ Excelente</div>
            </div>
            <div className="text-center bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                0.3s
              </div>
              <div className="text-slate-400">Tiempo respuesta</div>
              <div className="text-purple-300 text-sm mt-1">⚡ Ultra rápido</div>
            </div>
          </div>

          {/* Simulación de actividad en vivo */}
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Actividad en Tiempo Real
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Usuario en Madrid preguntó sobre IA</span>
                </div>
                <span className="text-slate-400 text-sm">hace 2s</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Usuario en Barcelona generó código Python</span>
                </div>
                <span className="text-slate-400 text-sm">hace 5s</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Usuario en México analizó datos</span>
                </div>
                <span className="text-slate-400 text-sm">hace 8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive preview */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Prueba GarBotGPT Ahora
        </h4>
        
        <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
          <div className="text-blue-400 text-sm font-semibold mb-2">TÚ:</div>
          <div className="text-slate-300">
            ¿Puedes explicarme cómo funciona la inteligencia artificial?
          </div>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl p-4">
          <div className="text-green-400 text-sm font-semibold mb-2">GARBOTGPT:</div>
          <div className="text-slate-300 leading-relaxed">
            <AdvancedTypewriter
              texts={[
                "¡Por supuesto! La inteligencia artificial es como darle a una computadora la capacidad de 'pensar' y aprender como lo hacemos nosotros.\n\nImagina que tienes un cerebro digital que:\n🧠 Procesa información a velocidad súper humana\n📚 Aprende de millones de ejemplos\n🎯 Reconoce patrones complejos\n💡 Genera respuestas creativas e inteligentes\n\n¿Te gustaría que profundice en algún aspecto específico?"
              ]}
              speed={50}
              deleteSpeed={0}
              pauseTime={10000}
              showCursor={true}
              cursorChar="▋"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">{feature.icon}</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-300 mb-3 leading-relaxed">{feature.description}</p>
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {feature.stats}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">{testimonial.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  {testimonial.highlight}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-3">{testimonial.role}</p>
              <p className="text-slate-300 mb-3 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-aurora"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            Demo en Vivo
          </div>
          
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-6">
            Experimenta{' '}
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-neon-flicker">
              GarBotGPT
            </span>
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Descubre el poder de la inteligencia artificial más avanzada del mundo en acción
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeTab === 'video' && renderVideoDemo()}
          {activeTab === 'features' && renderFeatures()}
          {activeTab === 'testimonials' && renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default GarBotGPTDemoSection;
