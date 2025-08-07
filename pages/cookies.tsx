import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CookiesPage = () => {
  return (
    <>
      <Head>
        <title>Política de Cookies - GarBotGPT</title>
        <meta name="description" content="Información sobre el uso de cookies en GarBotGPT. Conoce cómo utilizamos las cookies para mejorar tu experiencia." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://garbotgpt.com/cookies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <Navbar />
        
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Política de 
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Cookies</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Información transparente sobre cómo utilizamos las cookies para mejorar tu experiencia en GarBotGPT
              </p>
              <div className="mt-6 text-slate-400">
                <p>Última actualización: 7 de agosto de 2025</p>
              </div>
            </div>

            {/* Content */}
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
              <div className="prose prose-invert prose-lg max-w-none">
                
                {/* ¿Qué son las cookies? */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">🍪</span>
                    ¿Qué son las cookies?
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. 
                    Nos ayudan a recordar tus preferencias, mejorar tu experiencia de navegación y proporcionar funcionalidades personalizadas.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    En GarBotGPT, utilizamos cookies de manera responsable y transparente para ofrecerte la mejor experiencia posible 
                    con nuestra plataforma de inteligencia artificial.
                  </p>
                </section>

                {/* Tipos de cookies */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">📊</span>
                    Tipos de cookies que utilizamos
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-purple-400 mb-3">🔧 Cookies Técnicas (Necesarias)</h3>
                      <p className="text-slate-300 mb-3">
                        Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Autenticación de usuario</li>
                        <li>• Mantenimiento de sesión</li>
                        <li>• Configuraciones de seguridad</li>
                        <li>• Funcionalidades básicas de navegación</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-cyan-400 mb-3">📈 Cookies Analíticas</h3>
                      <p className="text-slate-300 mb-3">
                        Nos ayudan a entender cómo interactúas con nuestro sitio para mejorarlo continuamente.
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Google Analytics (análisis de tráfico)</li>
                        <li>• Métricas de rendimiento</li>
                        <li>• Patrones de uso y navegación</li>
                        <li>• Optimización de la experiencia de usuario</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-pink-400 mb-3">🎯 Cookies de Personalización</h3>
                      <p className="text-slate-300 mb-3">
                        Permiten recordar tus preferencias y personalizar tu experiencia.
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Preferencias de idioma</li>
                        <li>• Configuraciones de tema (claro/oscuro)</li>
                        <li>• Historial de conversaciones</li>
                        <li>• Configuraciones personalizadas de IA</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-yellow-400 mb-3">💰 Cookies Publicitarias</h3>
                      <p className="text-slate-300 mb-3">
                        Utilizadas para mostrar anuncios relevantes y medir su efectividad.
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Google AdSense</li>
                        <li>• Anuncios personalizados</li>
                        <li>• Medición de conversiones</li>
                        <li>• Remarketing y retargeting</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Gestión de cookies */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">⚙️</span>
                    Gestión de cookies
                  </h2>
                  <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-6 border border-purple-500/30">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Tienes control total sobre las cookies. Puedes:
                    </p>
                    <ul className="text-slate-300 space-y-2 mb-6">
                      <li>• <strong>Aceptar todas:</strong> Para una experiencia completa y personalizada</li>
                      <li>• <strong>Rechazar opcionales:</strong> Solo cookies técnicas necesarias</li>
                      <li>• <strong>Personalizar:</strong> Elegir qué tipos de cookies permitir</li>
                      <li>• <strong>Cambiar preferencias:</strong> Modificar tu elección en cualquier momento</li>
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                        Configurar Cookies
                      </button>
                      <button className="bg-slate-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-600 transition-all duration-300">
                        Rechazar Opcionales
                      </button>
                    </div>
                  </div>
                </section>

                {/* Cookies de terceros */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">🤝</span>
                    Cookies de terceros
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-lg font-bold text-blue-400 mb-3">Google Analytics</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Para análisis de tráfico y comportamiento de usuarios.
                      </p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-400 hover:text-blue-300 text-sm underline">
                        Ver política de privacidad →
                      </a>
                    </div>
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <h3 className="text-lg font-bold text-green-400 mb-3">Google AdSense</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        Para mostrar anuncios relevantes y medir su rendimiento.
                      </p>
                      <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" 
                         className="text-green-400 hover:text-green-300 text-sm underline">
                        Ver política de anuncios →
                      </a>
                    </div>
                  </div>
                </section>

                {/* Configuración del navegador */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">🌐</span>
                    Configuración del navegador
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    También puedes gestionar las cookies directamente desde tu navegador:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                      <h4 className="font-bold text-white mb-2">Chrome</h4>
                      <p className="text-slate-400 text-sm">Configuración → Privacidad y seguridad → Cookies</p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                      <h4 className="font-bold text-white mb-2">Firefox</h4>
                      <p className="text-slate-400 text-sm">Opciones → Privacidad y seguridad → Cookies</p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                      <h4 className="font-bold text-white mb-2">Safari</h4>
                      <p className="text-slate-400 text-sm">Preferencias → Privacidad → Cookies</p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                      <h4 className="font-bold text-white mb-2">Edge</h4>
                      <p className="text-slate-400 text-sm">Configuración → Privacidad → Cookies</p>
                    </div>
                  </div>
                </section>

                {/* Contacto */}
                <section className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-4xl">📧</span>
                    ¿Tienes preguntas?
                  </h2>
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/50">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Si tienes alguna pregunta sobre nuestra política de cookies o necesitas ayuda con la configuración, 
                      no dudes en contactarnos.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="/contacto" 
                         className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                        Contactar Soporte
                      </a>
                      <a href="mailto:privacy@garbotgpt.com" 
                         className="bg-slate-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-600 transition-all duration-300">
                        privacy@garbotgpt.com
                      </a>
                    </div>
                  </div>
                </section>

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

export default CookiesPage;
