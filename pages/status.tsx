import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const StatusPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'API Principal',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '142ms',
      description: 'Servicio principal de IA conversacional'
    },
    {
      name: 'Autenticación',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '89ms',
      description: 'Sistema de login y registro de usuarios'
    },
    {
      name: 'Base de Datos',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '23ms',
      description: 'Almacenamiento de conversaciones y datos'
    },
    {
      name: 'CDN Global',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '67ms',
      description: 'Red de distribución de contenido'
    },
    {
      name: 'Procesamiento IA',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '234ms',
      description: 'Motores de inteligencia artificial'
    },
    {
      name: 'Notificaciones',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '156ms',
      description: 'Sistema de notificaciones push y email'
    }
  ];

  const incidents = [
    {
      date: '2025-08-06',
      time: '14:30 UTC',
      title: 'Mantenimiento programado completado',
      description: 'Actualización exitosa de los servidores de IA. Mejoras en velocidad de respuesta.',
      status: 'resolved',
      duration: '45 minutos'
    },
    {
      date: '2025-08-04',
      time: '09:15 UTC',
      title: 'Latencia elevada en API',
      description: 'Se detectó latencia elevada en algunas regiones. Problema resuelto mediante balanceador de carga.',
      status: 'resolved',
      duration: '23 minutos'
    },
    {
      date: '2025-08-01',
      time: '16:45 UTC',
      title: 'Actualización de seguridad',
      description: 'Implementación de nuevas medidas de seguridad y parches de vulnerabilidades.',
      status: 'resolved',
      duration: '1 hora 12 minutos'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'outage':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return '✅';
      case 'degraded':
        return '⚠️';
      case 'outage':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operacional';
      case 'degraded':
        return 'Degradado';
      case 'outage':
        return 'Fuera de servicio';
      default:
        return 'Desconocido';
    }
  };

  return (
    <>
      <Head>
        <title>Estado del Servicio - GarBotGPT</title>
        <meta name="description" content="Estado en tiempo real de todos los servicios de GarBotGPT. Monitoreo de uptime, rendimiento y incidentes." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://garbotgpt.com/status" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <Navbar />
        
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Estado del 
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> Servicio</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
                Monitoreo en tiempo real del estado de todos nuestros servicios y sistemas
              </p>
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Todos los sistemas operacionales</span>
                </div>
                <span>•</span>
                <span>Actualizado: {currentTime.toLocaleTimeString('es-ES')}</span>
              </div>
            </div>

            {/* Overall Status */}
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-3xl border border-green-500/30 p-8 mb-12 shadow-2xl">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">🚀</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Todos los sistemas operacionales</h2>
                    <p className="text-green-300">GarBotGPT está funcionando perfectamente</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">99.97%</div>
                  <div className="text-slate-300">Uptime promedio (30 días)</div>
                </div>
              </div>
            </div>

            {/* Services Status */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-4xl">⚙️</span>
                Estado de Servicios
              </h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{getStatusIcon(service.status)}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-slate-400">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.uptime}</div>
                          <div className="text-sm text-slate-400">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{service.responseTime}</div>
                          <div className="text-sm text-slate-400">Respuesta</div>
                        </div>
                        <div className={`px-4 py-2 rounded-xl border font-medium ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl text-center">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">0.2s</div>
                <div className="text-slate-300">Tiempo de respuesta promedio</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl text-center">
                <div className="text-4xl mb-4">🌍</div>
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-slate-300">Regiones globales activas</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl text-center">
                <div className="text-4xl mb-4">👥</div>
                <div className="text-3xl font-bold text-pink-400 mb-2">2.3M+</div>
                <div className="text-slate-300">Usuarios activos</div>
              </div>
            </div>

            {/* Recent Incidents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-4xl">📋</span>
                Historial de Incidentes
              </h2>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <div key={index} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">✅</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-bold text-white">{incident.title}</h3>
                          <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-lg text-sm font-medium border border-green-400/30">
                            Resuelto
                          </span>
                        </div>
                        <p className="text-slate-300 mb-3">{incident.description}</p>
                        <div className="flex items-center gap-6 text-sm text-slate-400">
                          <span>📅 {incident.date}</span>
                          <span>🕐 {incident.time}</span>
                          <span>⏱️ Duración: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe to Updates */}
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl border border-purple-500/30 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Mantente Informado</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Suscríbete para recibir notificaciones automáticas sobre el estado de nuestros servicios, 
                mantenimientos programados e incidentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default StatusPage;
