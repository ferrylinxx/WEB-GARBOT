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

const Changelog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const versions = [
    {
      version: '3.2.0',
      date: '15 Enero 2025',
      type: 'major',
      title: 'Revolución de la Memoria Conversacional',
      description: 'Introducimos memoria persistente avanzada que recuerda contexto entre sesiones',
      changes: [
        {
          type: 'feature',
          title: 'Memoria Conversacional Persistente',
          description: 'GarBotGPT ahora recuerda conversaciones anteriores y mantiene contexto entre sesiones'
        },
        {
          type: 'feature',
          title: 'Análisis de Sentimientos en Tiempo Real',
          description: 'Detección automática del estado emocional para respuestas más empáticas'
        },
        {
          type: 'improvement',
          title: 'Velocidad de Respuesta Mejorada',
          description: 'Reducción del 40% en tiempo de respuesta gracias a optimizaciones de infraestructura'
        },
        {
          type: 'fix',
          title: 'Corrección de Errores de Codificación',
          description: 'Solucionados problemas con caracteres especiales en múltiples idiomas'
        }
      ]
    },
    {
      version: '3.1.5',
      date: '8 Enero 2025',
      type: 'minor',
      title: 'Mejoras de Seguridad y Performance',
      description: 'Actualizaciones críticas de seguridad y optimizaciones de rendimiento',
      changes: [
        {
          type: 'security',
          title: 'Encriptación Cuántica Mejorada',
          description: 'Implementación de nuevos algoritmos de encriptación post-cuántica'
        },
        {
          type: 'improvement',
          title: 'Optimización de Base de Datos',
          description: 'Mejoras en consultas que resultan en 25% menos latencia'
        },
        {
          type: 'feature',
          title: 'Modo Oscuro Automático',
          description: 'Detección automática de preferencias del sistema operativo'
        }
      ]
    },
    {
      version: '3.1.0',
      date: '22 Diciembre 2024',
      type: 'major',
      title: 'Integración Multimodal',
      description: 'Soporte completo para imágenes, audio y documentos en conversaciones',
      changes: [
        {
          type: 'feature',
          title: 'Procesamiento de Imágenes',
          description: 'Análisis y descripción automática de imágenes subidas por usuarios'
        },
        {
          type: 'feature',
          title: 'Transcripción de Audio',
          description: 'Conversión de voz a texto en más de 50 idiomas'
        },
        {
          type: 'feature',
          title: 'Análisis de Documentos PDF',
          description: 'Extracción y análisis inteligente de contenido de documentos'
        },
        {
          type: 'improvement',
          title: 'Interfaz Rediseñada',
          description: 'Nueva UI más intuitiva y accesible para todas las funcionalidades'
        }
      ]
    },
    {
      version: '3.0.8',
      date: '10 Diciembre 2024',
      type: 'patch',
      title: 'Correcciones y Estabilidad',
      description: 'Múltiples correcciones de bugs y mejoras de estabilidad',
      changes: [
        {
          type: 'fix',
          title: 'Corrección de Memoria Caché',
          description: 'Solucionado problema que causaba respuestas inconsistentes'
        },
        {
          type: 'fix',
          title: 'Mejora en Exportación de Conversaciones',
          description: 'Corregidos errores de formato en exportaciones PDF y Word'
        },
        {
          type: 'improvement',
          title: 'Optimización de Móviles',
          description: 'Mejor rendimiento en dispositivos con recursos limitados'
        }
      ]
    },
    {
      version: '3.0.0',
      date: '1 Diciembre 2024',
      type: 'major',
      title: 'GarBotGPT 3.0 - Nueva Era',
      description: 'Lanzamiento de la tercera generación con IA completamente rediseñada',
      changes: [
        {
          type: 'feature',
          title: 'Motor de IA Completamente Nuevo',
          description: 'Arquitectura neural avanzada con 10x mejor comprensión contextual'
        },
        {
          type: 'feature',
          title: 'API REST v3',
          description: 'Nueva API con endpoints mejorados y mejor documentación'
        },
        {
          type: 'feature',
          title: 'Personalización Avanzada',
          description: 'Configuración granular de personalidad y estilo de respuesta'
        },
        {
          type: 'feature',
          title: 'Integraciones Nativas',
          description: 'Conectores directos con Slack, Discord, Teams y más'
        }
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'feature': return 'from-green-500 to-emerald-500';
      case 'improvement': return 'from-blue-500 to-cyan-500';
      case 'fix': return 'from-orange-500 to-red-500';
      case 'security': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'feature': return '✨';
      case 'improvement': return '⚡';
      case 'fix': return '🔧';
      case 'security': return '🔒';
      default: return '📝';
    }
  };

  const getVersionTypeColor = (type) => {
    switch (type) {
      case 'major': return 'from-purple-500 to-pink-500';
      case 'minor': return 'from-blue-500 to-cyan-500';
      case 'patch': return 'from-green-500 to-emerald-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const filteredVersions = selectedVersion === 'all' 
    ? versions 
    : versions.filter(version => version.type === selectedVersion);

  return (
    <>
      <SEOHead 
        title="Changelog - GarBotGPT | Historial de Actualizaciones"
        description="Mantente al día con todas las actualizaciones, nuevas características y mejoras de GarBotGPT. Historial completo de versiones y cambios."
        keywords="changelog GarBotGPT, actualizaciones IA, nuevas características, historial versiones, mejoras chatbot"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
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

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">Historial de</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Cambios
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Descubre todas las mejoras, nuevas características y actualizaciones que hacen de GarBotGPT cada día más poderoso
              </p>
            </div>
          </div>
        </section>

        {/* Version Filter */}
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { id: 'all', name: 'Todas las Versiones', icon: '📋' },
                { id: 'major', name: 'Versiones Principales', icon: '🚀' },
                { id: 'minor', name: 'Actualizaciones Menores', icon: '⚡' },
                { id: 'patch', name: 'Correcciones', icon: '🔧' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedVersion(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedVersion === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <span className="text-lg">{filter.icon}</span>
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Changelog Timeline */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>

              {/* Version Entries */}
              <div className="space-y-12">
                {filteredVersions.map((version, index) => (
                  <div key={version.version} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${getVersionTypeColor(version.type)} rounded-full border-4 border-black z-10`}></div>

                    {/* Version Card */}
                    <div className="ml-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                      {/* Version Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                          <span className={`px-4 py-2 bg-gradient-to-r ${getVersionTypeColor(version.type)} text-white font-bold rounded-xl text-sm`}>
                            v{version.version}
                          </span>
                          <span className="text-slate-400">{version.date}</span>
                        </div>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getVersionTypeColor(version.type)}/20 text-white rounded-full text-sm font-medium border border-white/10`}>
                          {version.type === 'major' ? 'Principal' : version.type === 'minor' ? 'Menor' : 'Corrección'}
                        </span>
                      </div>

                      {/* Version Title & Description */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {version.title}
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {version.description}
                      </p>

                      {/* Changes List */}
                      <div className="space-y-4">
                        {version.changes.map((change, changeIndex) => (
                          <div key={changeIndex} className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30">
                            <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r ${getTypeColor(change.type)} rounded-xl flex items-center justify-center text-sm`}>
                              {getTypeIcon(change.type)}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-2">
                                {change.title}
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                {change.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Mantente Actualizado
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Sé el primero en conocer las nuevas características y mejoras de GarBotGPT
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                Suscribirse
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

export default Changelog;
