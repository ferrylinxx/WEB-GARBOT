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
      version: '4.0.0',
      date: '15 Enero 2025',
      type: 'major',
      title: 'GarBotGPT 4.0 - La Nueva Era de la IA Conversacional',
      description: 'Lanzamiento revolucionario con arquitectura cuántica, comprensión emocional avanzada y capacidades multimodales de próxima generación',
      changes: [
        {
          type: 'feature',
          title: 'Arquitectura Neural Cuántica',
          description: 'Primera IA conversacional con procesamiento cuántico híbrido, 1000x más rápida que la generación anterior'
        },
        {
          type: 'feature',
          title: 'Inteligencia Emocional Avanzada',
          description: 'Comprensión profunda de emociones humanas con respuestas empáticas contextualizadas'
        },
        {
          type: 'feature',
          title: 'Modo Creativo Infinito',
          description: 'Generación ilimitada de contenido creativo: arte, música, literatura y código'
        },
        {
          type: 'feature',
          title: 'Realidad Aumentada Conversacional',
          description: 'Interacción con el mundo real a través de AR y análisis visual en tiempo real'
        },
        {
          type: 'security',
          title: 'Encriptación Cuántica Post-Apocalíptica',
          description: 'Seguridad inquebrantable con algoritmos resistentes a computación cuántica'
        }
      ]
    },
    {
      version: '3.8.2',
      date: '8 Enero 2025',
      type: 'minor',
      title: 'Optimizaciones de Fin de Año',
      description: 'Mejoras de rendimiento y nuevas integraciones para cerrar 2024 con excelencia',
      changes: [
        {
          type: 'feature',
          title: 'Integración con 50+ Plataformas',
          description: 'Conectores nativos para Notion, Figma, GitHub, Slack, Discord y muchas más'
        },
        {
          type: 'improvement',
          title: 'Velocidad de Respuesta Sub-segundo',
          description: 'Respuestas promedio en 0.3 segundos gracias a optimizaciones de infraestructura'
        },
        {
          type: 'feature',
          title: 'Modo Colaborativo en Tiempo Real',
          description: 'Múltiples usuarios pueden colaborar simultáneamente en una conversación'
        },
        {
          type: 'fix',
          title: 'Corrección de Memoria Contextual',
          description: 'Solucionados problemas de pérdida de contexto en conversaciones largas'
        }
      ]
    },
    {
      version: '3.7.0',
      date: '20 Diciembre 2024',
      type: 'major',
      title: 'Revolución Multimodal',
      description: 'GarBotGPT ahora comprende y genera contenido en todos los formatos: texto, imagen, audio, video y código',
      changes: [
        {
          type: 'feature',
          title: 'Generación de Imágenes IA',
          description: 'Creación de imágenes fotorrealistas y artísticas desde descripciones de texto'
        },
        {
          type: 'feature',
          title: 'Síntesis de Voz Neural',
          description: 'Conversación por voz con 12 voces ultra-realistas en 40+ idiomas'
        },
        {
          type: 'feature',
          title: 'Análisis de Video Inteligente',
          description: 'Comprensión y descripción automática de contenido audiovisual'
        },
        {
          type: 'feature',
          title: 'Generador de Código Avanzado',
          description: 'Creación de aplicaciones completas en 100+ lenguajes de programación'
        }
      ]
    },
    {
      version: '3.5.1',
      date: '5 Diciembre 2024',
      type: 'minor',
      title: 'Mejoras de Experiencia de Usuario',
      description: 'Refinamientos en la interfaz y nuevas funcionalidades solicitadas por la comunidad',
      changes: [
        {
          type: 'feature',
          title: 'Temas Personalizables',
          description: '15 temas visuales únicos incluyendo modo oscuro avanzado y temas estacionales'
        },
        {
          type: 'improvement',
          title: 'Búsqueda Semántica en Historial',
          description: 'Encuentra conversaciones pasadas usando búsqueda por significado, no solo palabras'
        },
        {
          type: 'feature',
          title: 'Atajos de Teclado Avanzados',
          description: 'Más de 50 atajos personalizables para usuarios power'
        },
        {
          type: 'fix',
          title: 'Optimización de Memoria',
          description: 'Reducción del 60% en uso de memoria para dispositivos de gama baja'
        }
      ]
    },
    {
      version: '3.0.0',
      date: '15 Noviembre 2024',
      type: 'major',
      title: 'GarBotGPT 3.0 - Renacimiento de la IA',
      description: 'Reconstrucción completa con nueva arquitectura neural, interfaz revolucionaria y capacidades expandidas',
      changes: [
        {
          type: 'feature',
          title: 'Motor Neural de Tercera Generación',
          description: 'Arquitectura transformer avanzada con 500B parámetros y comprensión contextual superior'
        },
        {
          type: 'feature',
          title: 'Interfaz Completamente Rediseñada',
          description: 'UI/UX revolucionaria con animaciones fluidas y experiencia inmersiva'
        },
        {
          type: 'feature',
          title: 'API REST v3 Completa',
          description: 'Nueva API con documentación interactiva y SDKs para 10+ lenguajes'
        },
        {
          type: 'feature',
          title: 'Sistema de Plugins',
          description: 'Marketplace de extensiones desarrolladas por la comunidad'
        },
        {
          type: 'security',
          title: 'Seguridad de Nivel Empresarial',
          description: 'Certificaciones SOC 2, ISO 27001 y cumplimiento GDPR completo'
        }
      ]
    },
    {
      version: '2.8.5',
      date: '28 Octubre 2024',
      type: 'patch',
      title: 'Estabilización Pre-3.0',
      description: 'Últimas optimizaciones y correcciones antes del gran lanzamiento de la versión 3.0',
      changes: [
        {
          type: 'improvement',
          title: 'Optimización de Base de Datos',
          description: 'Mejoras en consultas que resultan en 45% menos latencia'
        },
        {
          type: 'fix',
          title: 'Corrección de Exportación',
          description: 'Solucionados problemas con exportación de conversaciones en formato PDF'
        },
        {
          type: 'security',
          title: 'Parches de Seguridad',
          description: 'Actualizaciones críticas de seguridad y dependencias'
        }
      ]
    },
    {
      version: '2.5.0',
      date: '10 Octubre 2024',
      type: 'major',
      title: 'Expansión Global y Multiidioma',
      description: 'GarBotGPT se vuelve verdaderamente global con soporte nativo para 95+ idiomas y culturas',
      changes: [
        {
          type: 'feature',
          title: 'Soporte para 95+ Idiomas',
          description: 'Conversación fluida en prácticamente cualquier idioma del mundo'
        },
        {
          type: 'feature',
          title: 'Comprensión Cultural Contextual',
          description: 'Adaptación automática a normas culturales y contextos regionales'
        },
        {
          type: 'feature',
          title: 'Traducción en Tiempo Real',
          description: 'Conversaciones multiidioma con traducción instantánea y preservación de contexto'
        },
        {
          type: 'improvement',
          title: 'Optimización para Mercados Emergentes',
          description: 'Funcionamiento optimizado en conexiones lentas y dispositivos de gama baja'
        }
      ]
    },
    {
      version: '2.0.0',
      date: '15 Septiembre 2024',
      type: 'major',
      title: 'GarBotGPT 2.0 - La Evolución Continúa',
      description: 'Segunda generación con aprendizaje continuo, personalización avanzada y integración empresarial',
      changes: [
        {
          type: 'feature',
          title: 'Aprendizaje Continuo Personalizado',
          description: 'GarBotGPT aprende de cada conversación para adaptarse a tu estilo único'
        },
        {
          type: 'feature',
          title: 'Dashboard Empresarial',
          description: 'Panel de control completo para equipos con métricas y gestión avanzada'
        },
        {
          type: 'feature',
          title: 'Integraciones Nativas',
          description: 'Conectores directos con Slack, Microsoft Teams, Google Workspace'
        },
        {
          type: 'feature',
          title: 'Modo Offline Inteligente',
          description: 'Funcionalidad básica disponible sin conexión a internet'
        },
        {
          type: 'security',
          title: 'Encriptación End-to-End',
          description: 'Todas las conversaciones protegidas con encriptación de grado militar'
        }
      ]
    },
    {
      version: '1.5.0',
      date: '1 Agosto 2024',
      type: 'minor',
      title: 'Mejoras de Verano',
      description: 'Actualizaciones basadas en feedback de usuarios y optimizaciones de rendimiento',
      changes: [
        {
          type: 'feature',
          title: 'Modo Creativo Avanzado',
          description: 'Herramientas especializadas para escritura creativa, brainstorming y arte'
        },
        {
          type: 'improvement',
          title: 'Interfaz Móvil Mejorada',
          description: 'Experiencia optimizada para smartphones y tablets'
        },
        {
          type: 'feature',
          title: 'Historial de Conversaciones',
          description: 'Búsqueda y organización inteligente de conversaciones pasadas'
        },
        {
          type: 'fix',
          title: 'Correcciones de Estabilidad',
          description: 'Solucionados crashes ocasionales en conversaciones muy largas'
        }
      ]
    },
    {
      version: '1.0.0',
      date: '15 Junio 2024',
      type: 'major',
      title: '🎉 Lanzamiento Oficial de GarBotGPT',
      description: 'El nacimiento de una nueva era en inteligencia artificial conversacional. Después de 2 años de desarrollo, GarBotGPT está listo para cambiar el mundo.',
      changes: [
        {
          type: 'feature',
          title: 'Motor de IA Conversacional Avanzado',
          description: 'Arquitectura neural de última generación con comprensión contextual profunda'
        },
        {
          type: 'feature',
          title: 'Interfaz Intuitiva y Elegante',
          description: 'Diseño minimalista que pone el foco en la conversación natural'
        },
        {
          type: 'feature',
          title: 'Respuestas en Tiempo Real',
          description: 'Velocidad de respuesta promedio de 1.2 segundos'
        },
        {
          type: 'feature',
          title: 'Seguridad y Privacidad',
          description: 'Protección de datos de nivel empresarial desde el primer día'
        },
        {
          type: 'feature',
          title: 'API Beta para Desarrolladores',
          description: 'Primeras herramientas para integrar GarBotGPT en aplicaciones externas'
        }
      ]
    },
    {
      version: '0.9.0-beta',
      date: '1 Mayo 2024',
      type: 'minor',
      title: 'Beta Pública - Los Últimos Ajustes',
      description: 'Versión beta abierta al público para pruebas finales antes del lanzamiento oficial',
      changes: [
        {
          type: 'feature',
          title: 'Programa Beta Público',
          description: 'Apertura a 10,000 usuarios beta para pruebas extensivas'
        },
        {
          type: 'improvement',
          title: 'Optimización de Rendimiento',
          description: 'Mejoras significativas en velocidad y estabilidad'
        },
        {
          type: 'feature',
          title: 'Sistema de Feedback Integrado',
          description: 'Herramientas para que los usuarios beta reporten problemas y sugerencias'
        },
        {
          type: 'fix',
          title: 'Corrección de Bugs Críticos',
          description: 'Solucionados más de 150 problemas identificados en alpha'
        }
      ]
    },
    {
      version: '0.5.0-alpha',
      date: '15 Marzo 2024',
      type: 'minor',
      title: 'Alpha Release - Primeras Pruebas',
      description: 'Primera versión alpha para pruebas internas y con usuarios selectos',
      changes: [
        {
          type: 'feature',
          title: 'Conversación Básica Funcional',
          description: 'Implementación inicial del motor conversacional con capacidades básicas'
        },
        {
          type: 'feature',
          title: 'Interfaz Web Básica',
          description: 'Primera versión de la interfaz web para interacción con usuarios'
        },
        {
          type: 'feature',
          title: 'Sistema de Autenticación',
          description: 'Registro y login de usuarios con seguridad básica'
        },
        {
          type: 'security',
          title: 'Protocolos de Seguridad Iniciales',
          description: 'Implementación de medidas básicas de protección de datos'
        }
      ]
    },
    {
      version: '0.1.0-prototype',
      date: '1 Enero 2024',
      type: 'major',
      title: '🌟 Inicio del Proyecto GarBotGPT',
      description: 'El primer commit. El sueño se convierte en realidad. Comienza la construcción de la IA conversacional más avanzada del mundo.',
      changes: [
        {
          type: 'feature',
          title: 'Arquitectura Base del Proyecto',
          description: 'Estructura inicial del proyecto con tecnologías Next.js, React y TypeScript'
        },
        {
          type: 'feature',
          title: 'Diseño de la Arquitectura Neural',
          description: 'Primeros bocetos y diseños del motor de inteligencia artificial'
        },
        {
          type: 'feature',
          title: 'Configuración de Desarrollo',
          description: 'Setup inicial del entorno de desarrollo y herramientas de CI/CD'
        },
        {
          type: 'feature',
          title: 'Documentación Técnica Inicial',
          description: 'Primeras especificaciones técnicas y roadmap del proyecto'
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
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 font-semibold text-lg mb-6">
                  📚 Desde Enero 2024 hasta Hoy
                </span>
              </div>

              <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">La Evolución de</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  GarBotGPT
                </span>
              </h1>

              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                Un año de innovación constante. Desde el primer commit hasta la revolución de la IA conversacional.
                <br />
                <span className="text-purple-400 font-semibold">Cada actualización, una nueva frontera.</span>
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { number: '13', label: 'Versiones Lanzadas', icon: '🚀' },
                  { number: '200+', label: 'Nuevas Características', icon: '✨' },
                  { number: '500+', label: 'Mejoras Implementadas', icon: '⚡' },
                  { number: '1M+', label: 'Usuarios Impactados', icon: '👥' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Version Filter */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-900/80 via-black to-slate-900/80 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Explora por Categoría
                </span>
              </h2>
              <p className="text-slate-400 text-lg">Filtra las actualizaciones por tipo para encontrar lo que buscas</p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {[
                {
                  id: 'all',
                  name: 'Todas las Versiones',
                  icon: '📋',
                  count: versions.length,
                  color: 'from-slate-600 to-slate-700'
                },
                {
                  id: 'major',
                  name: 'Versiones Principales',
                  icon: '🚀',
                  count: versions.filter(v => v.type === 'major').length,
                  color: 'from-purple-600 to-pink-600'
                },
                {
                  id: 'minor',
                  name: 'Actualizaciones Menores',
                  icon: '⚡',
                  count: versions.filter(v => v.type === 'minor').length,
                  color: 'from-blue-600 to-cyan-600'
                },
                {
                  id: 'patch',
                  name: 'Correcciones',
                  icon: '🔧',
                  count: versions.filter(v => v.type === 'patch').length,
                  color: 'from-green-600 to-emerald-600'
                }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedVersion(filter.id)}
                  className={`group relative flex items-center gap-4 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    selectedVersion === filter.id
                      ? `bg-gradient-to-r ${filter.color} text-white shadow-2xl`
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  {selectedVersion === filter.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <span className="text-2xl">{filter.icon}</span>
                    <div className="text-left">
                      <div className="font-bold text-lg">{filter.name}</div>
                      <div className={`text-sm ${selectedVersion === filter.id ? 'text-white/80' : 'text-slate-400'}`}>
                        {filter.count} {filter.count === 1 ? 'versión' : 'versiones'}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Changelog Timeline */}
        <section className="py-32 px-6 bg-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Cronología de la Innovación
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Cada versión marca un hito en nuestra misión de revolucionar la inteligencia artificial conversacional
              </p>
            </div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-lg"></div>
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400/50 via-pink-400/50 to-cyan-400/50 rounded-full blur-sm"></div>

              {/* Version Entries */}
              <div className="space-y-16">
                {filteredVersions.map((version, index) => (
                  <div key={version.version} className="relative group">
                    {/* Enhanced Timeline Dot */}
                    <div className="absolute left-4 flex items-center justify-center">
                      <div className={`w-8 h-8 bg-gradient-to-r ${getVersionTypeColor(version.type)} rounded-full border-4 border-black z-20 shadow-2xl group-hover:scale-125 transition-transform duration-500`}></div>
                      <div className={`absolute w-12 h-12 bg-gradient-to-r ${getVersionTypeColor(version.type)} rounded-full opacity-20 blur-md animate-pulse`}></div>
                    </div>

                    {/* Enhanced Version Card */}
                    <div className="ml-24 group-hover:ml-28 transition-all duration-500">
                      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-purple-500/30 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10 group-hover:scale-[1.02]">

                        {/* Floating Badge for Major Versions */}
                        {version.type === 'major' && (
                          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                            🌟 MAJOR
                          </div>
                        )}

                        {/* Version Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                          <div className="flex items-center gap-6 mb-4 lg:mb-0">
                            <span className={`px-6 py-3 bg-gradient-to-r ${getVersionTypeColor(version.type)} text-white font-bold rounded-2xl text-lg shadow-lg`}>
                              v{version.version}
                            </span>
                            <div className="flex items-center gap-2 text-slate-400">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="font-medium">{version.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-4 py-2 bg-gradient-to-r ${getVersionTypeColor(version.type)}/20 text-white rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm`}>
                              {version.type === 'major' ? '🚀 Principal' : version.type === 'minor' ? '⚡ Menor' : '🔧 Corrección'}
                            </span>
                            <span className="text-slate-400 text-sm">
                              {version.changes.length} cambios
                            </span>
                          </div>
                        </div>

                        {/* Version Title & Description */}
                        <div className="mb-10">
                          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                            {version.title}
                          </h3>
                          <p className="text-slate-300 text-xl leading-relaxed">
                            {version.description}
                          </p>
                        </div>

                        {/* Enhanced Changes Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {version.changes.map((change, changeIndex) => (
                            <div key={changeIndex} className="group/change relative">
                              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getTypeColor(change.type)} rounded-2xl flex items-center justify-center text-lg shadow-lg group-hover/change:scale-110 transition-transform duration-300`}>
                                  {getTypeIcon(change.type)}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-white font-bold mb-3 text-lg">
                                    {change.title}
                                  </h4>
                                  <p className="text-slate-300 leading-relaxed">
                                    {change.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Version Stats */}
                        <div className="mt-8 pt-6 border-t border-slate-700/50">
                          <div className="flex items-center justify-between text-sm text-slate-400">
                            <div className="flex items-center gap-4">
                              <span>✨ {version.changes.filter(c => c.type === 'feature').length} nuevas características</span>
                              <span>⚡ {version.changes.filter(c => c.type === 'improvement').length} mejoras</span>
                              <span>🔧 {version.changes.filter(c => c.type === 'fix').length} correcciones</span>
                              {version.changes.filter(c => c.type === 'security').length > 0 && (
                                <span>🔒 {version.changes.filter(c => c.type === 'security').length} seguridad</span>
                              )}
                            </div>
                            <div className="text-slate-500">
                              #{filteredVersions.length - index}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline End */}
              <div className="relative mt-16">
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
                <div className="ml-24 text-center py-8">
                  <p className="text-slate-400 text-lg">
                    🚀 <strong>El viaje continúa...</strong> Más innovaciones en camino
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Stats */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Un Año de Desarrollo Intensivo
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Los números detrás de la evolución de GarBotGPT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  number: '365',
                  label: 'Días de Desarrollo',
                  icon: '📅',
                  description: 'Trabajo continuo sin descanso'
                },
                {
                  number: '2,847',
                  label: 'Commits Realizados',
                  icon: '💻',
                  description: 'Cada línea de código cuenta'
                },
                {
                  number: '156',
                  label: 'Características Nuevas',
                  icon: '✨',
                  description: 'Innovación constante'
                },
                {
                  number: '99.9%',
                  label: 'Uptime Alcanzado',
                  icon: '⚡',
                  description: 'Confiabilidad garantizada'
                }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                    <div className="text-slate-400 text-sm">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Stack Tecnológico
                </span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Next.js', icon: '⚛️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'TensorFlow', icon: '🧠' },
                  { name: 'Docker', icon: '🐳' },
                  { name: 'Kubernetes', icon: '☸️' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'Redis', icon: '🔴' },
                  { name: 'AWS', icon: '☁️' },
                  { name: 'Vercel', icon: '▲' },
                  { name: 'OpenAI', icon: '🤖' },
                  { name: 'Stripe', icon: '💳' }
                ].map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-slate-700/30 hover:bg-slate-600/30 rounded-2xl p-4 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-slate-300 text-sm font-medium">{tech.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 font-semibold text-lg mb-6">
                🔔 Notificaciones Instantáneas
              </span>
            </div>

            <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
              No Te Pierdas Ninguna
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Actualización
              </span>
            </h2>

            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Sé el primero en conocer las nuevas características, mejoras y lanzamientos de GarBotGPT.
              <br />
              <span className="text-purple-400 font-semibold">Únete a más de 50,000 desarrolladores.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto mb-12">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
                Suscribirse
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sin spam
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancela cuando quieras
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Solo contenido relevante
              </div>
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
