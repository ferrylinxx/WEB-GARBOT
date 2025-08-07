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

const Comunidad = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('discord');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const communityStats = [
    { number: '150K+', label: 'Miembros Activos', icon: '👥' },
    { number: '50K+', label: 'Mensajes Diarios', icon: '💬' },
    { number: '2.5K+', label: 'Proyectos Compartidos', icon: '🚀' },
    { number: '95%', label: 'Satisfacción', icon: '⭐' }
  ];

  const communityChannels = [
    {
      id: 'discord',
      name: 'Discord',
      description: 'Chat en tiempo real con la comunidad global',
      members: '85K+',
      icon: '💬',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Canales especializados por tema',
        'Eventos semanales en vivo',
        'Soporte de la comunidad 24/7',
        'Bots exclusivos de GarBotGPT'
      ]
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Colabora en proyectos open source',
      members: '25K+',
      icon: '💻',
      color: 'from-gray-600 to-gray-800',
      features: [
        'Repositorios de ejemplos',
        'Contribuciones a la plataforma',
        'Issues y feature requests',
        'Code reviews colaborativos'
      ]
    },
    {
      id: 'reddit',
      name: 'Reddit',
      description: 'Discusiones profundas y casos de uso',
      members: '40K+',
      icon: '🗣️',
      color: 'from-orange-500 to-red-500',
      features: [
        'AMAs con el equipo',
        'Showcases de proyectos',
        'Debates sobre IA',
        'Tips y trucos avanzados'
      ]
    }
  ];

  const events = [
    {
      title: 'AI Innovation Summit 2025',
      date: '25 Febrero 2025',
      time: '10:00 AM PST',
      type: 'Virtual',
      description: 'Conferencia anual sobre el futuro de la IA conversacional',
      speakers: ['Dr. Elena Martínez', 'Carlos Rodríguez', 'Ana García'],
      attendees: '5K+ registrados'
    },
    {
      title: 'Hackathon: Build with GarBotGPT',
      date: '15 Marzo 2025',
      time: '48 horas',
      type: 'Híbrido',
      description: 'Competencia global de desarrollo con premios de $50K',
      speakers: ['Equipo de Desarrollo', 'Mentores Expertos'],
      attendees: '2K+ participantes'
    },
    {
      title: 'Community Meetup: Madrid',
      date: '10 Abril 2025',
      time: '6:00 PM CET',
      type: 'Presencial',
      description: 'Encuentro local de la comunidad española',
      speakers: ['Comunidad Local', 'Invitados Especiales'],
      attendees: '200+ confirmados'
    }
  ];

  const ambassadors = [
    {
      name: 'María González',
      role: 'AI Researcher',
      location: 'Barcelona, España',
      avatar: '👩‍💻',
      contributions: 'Tutoriales avanzados, Mentoring',
      speciality: 'Machine Learning'
    },
    {
      name: 'David Kim',
      role: 'Full Stack Developer',
      location: 'Seoul, Korea',
      avatar: '👨‍💻',
      contributions: 'Open Source, Code Reviews',
      speciality: 'API Integration'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      location: 'San Francisco, USA',
      avatar: '👩‍💼',
      contributions: 'Product Feedback, UX Research',
      speciality: 'User Experience'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Data Scientist',
      location: 'Cairo, Egypt',
      avatar: '👨‍🔬',
      contributions: 'Data Analysis, Research',
      speciality: 'Analytics'
    }
  ];

  const resources = [
    {
      title: 'Guías de la Comunidad',
      description: 'Tutoriales creados por y para la comunidad',
      icon: '📚',
      count: '500+',
      link: '/comunidad/guias'
    },
    {
      title: 'Proyectos Destacados',
      description: 'Showcases de proyectos increíbles de la comunidad',
      icon: '🌟',
      count: '150+',
      link: '/comunidad/proyectos'
    },
    {
      title: 'Templates y Ejemplos',
      description: 'Código reutilizable para acelerar tu desarrollo',
      icon: '🔧',
      count: '300+',
      link: '/comunidad/templates'
    },
    {
      title: 'Foro de Ayuda',
      description: 'Obtén ayuda de expertos de la comunidad',
      icon: '❓',
      count: '24/7',
      link: '/comunidad/foro'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Comunidad - GarBotGPT | Únete a la Revolución IA"
        description="Únete a la comunidad global de GarBotGPT. 150K+ desarrolladores, creadores y entusiastas de IA colaborando y compartiendo conocimiento."
        keywords="comunidad GarBotGPT, desarrolladores IA, Discord GarBotGPT, comunidad chatbot, eventos IA"
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
                <span className="block mb-4">Únete a la</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolución
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                Más de 150,000 desarrolladores, creadores y visionarios construyendo el futuro de la IA juntos
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Canales de Comunidad
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Múltiples espacios para conectar, aprender y colaborar con personas de todo el mundo
              </p>
            </div>

            {/* Channel Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-slate-800/50 rounded-2xl p-2">
                {communityChannels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setActiveTab(channel.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === channel.id
                        ? `bg-gradient-to-r ${channel.color} text-white`
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{channel.icon}</span>
                    {channel.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Channel Content */}
            {communityChannels.map((channel) => (
              activeTab === channel.id && (
                <div key={channel.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`text-6xl p-4 bg-gradient-to-r ${channel.color} rounded-3xl`}>
                          {channel.icon}
                        </div>
                        <div>
                          <h3 className={`text-4xl font-bold text-white mb-2 bg-gradient-to-r ${channel.color} bg-clip-text text-transparent`}>
                            {channel.name}
                          </h3>
                          <p className="text-slate-400">{channel.members} miembros activos</p>
                        </div>
                      </div>
                      
                      <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        {channel.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        {channel.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${channel.color}`}></div>
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className={`bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                        Unirse a {channel.name}
                      </button>
                    </div>

                    <div className="relative">
                      <div className={`bg-gradient-to-br ${channel.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-3xl p-12 text-center border border-white/10`}>
                        <div className="text-8xl mb-6">{channel.icon}</div>
                        <div className="text-2xl font-bold text-white mb-4">
                          Únete Ahora
                        </div>
                        <div className="text-slate-300">
                          {channel.members} miembros te esperan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Próximos Eventos
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Conecta, aprende y colabora en nuestros eventos exclusivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <span className="text-slate-400 text-sm">{event.attendees}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{event.speakers.join(', ')}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                    Registrarse
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Ambassadors */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Embajadores de la Comunidad
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Líderes que impulsan y guían nuestra comunidad global
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ambassadors.map((ambassador, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 text-center">
                  <div className="text-6xl mb-4">{ambassador.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{ambassador.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{ambassador.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{ambassador.location}</p>
                  <div className="text-sm text-slate-300 mb-4">
                    <strong>Especialidad:</strong> {ambassador.speciality}
                  </div>
                  <div className="text-xs text-slate-400">
                    {ambassador.contributions}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Recursos de la Comunidad
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Conocimiento compartido para acelerar tu aprendizaje
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="group bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                    {resource.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Listo para Ser Parte?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Únete a la comunidad más vibrante de IA y ayuda a construir el futuro de la tecnología conversacional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl">
                Unirse a Discord
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 border border-white/30">
                Ver Todos los Canales
              </button>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Comunidad;
