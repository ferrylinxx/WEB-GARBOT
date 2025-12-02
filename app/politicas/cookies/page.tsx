'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'

const CookieIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
  </svg>
)

export default function CookiesPage() {
  const sections = [
    { id: 'que-son', title: '1. ¿Qué son las Cookies?' },
    { id: 'uso', title: '2. Cómo Utilizamos las Cookies' },
    { id: 'tipos', title: '3. Tipos de Cookies' },
    { id: 'lista', title: '4. Lista de Cookies' },
    { id: 'terceros', title: '5. Cookies de Terceros' },
    { id: 'gestionar', title: '6. Gestionar Cookies' },
    { id: 'navegadores', title: '7. Configuración por Navegador' },
    { id: 'contacto', title: '8. Contacto' },
  ]

  const cookiesList = [
    { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguir usuarios únicos', duration: '2 años', type: 'Analítica' },
    { name: '_ga_*', provider: 'Google Analytics', purpose: 'Mantener estado de sesión', duration: '2 años', type: 'Analítica' },
    { name: 'session_id', provider: 'GarBotGPT', purpose: 'Mantener sesión de usuario', duration: 'Sesión', type: 'Necesaria' },
    { name: 'auth_token', provider: 'GarBotGPT', purpose: 'Autenticación de usuario', duration: '30 días', type: 'Necesaria' },
    { name: 'preferences', provider: 'GarBotGPT', purpose: 'Guardar preferencias de usuario', duration: '1 año', type: 'Funcional' },
    { name: 'theme', provider: 'GarBotGPT', purpose: 'Preferencia de tema (claro/oscuro)', duration: '1 año', type: 'Funcional' },
    { name: 'cookie_consent', provider: 'GarBotGPT', purpose: 'Recordar consentimiento de cookies', duration: '1 año', type: 'Necesaria' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <CookieIcon />
            </div>
            <div>
              <span className="px-4 py-1.5 bg-amber-500/20 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                TRANSPARENCIA
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Política de <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Cookies</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-8">
            Utilizamos cookies para mejorar tu experiencia. Aquí te explicamos qué cookies usamos, por qué las usamos y cómo puedes gestionarlas.
          </p>
          <p className="text-white/40">
            Última actualización: 2 de diciembre de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <nav className="lg:col-span-1">
              <div className="sticky top-32 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-bold mb-4">Contenido</h3>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-sm text-white/50 hover:text-amber-400 transition-colors block py-1">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link href="/politicas/privacidad" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                    Ver Política de Privacidad →
                  </Link>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <section id="que-son" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">1</span>
                  ¿Qué son las Cookies?
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web.</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">🍪 Cookies Propias</h4>
                      <p className="text-sm">Establecidas por el sitio web que estás visitando (GarBotGPT).</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">🌐 Cookies de Terceros</h4>
                      <p className="text-sm">Establecidas por servicios externos (como Google Analytics).</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mt-4">Las cookies no pueden dañar tu dispositivo ni acceder a otros archivos almacenados en él.</p>
                </div>
              </section>

              <section id="uso" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">2</span>
                  Cómo Utilizamos las Cookies
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>En GarBotGPT utilizamos cookies para los siguientes propósitos:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">✓</span> <strong className="text-white">Autenticación:</strong> Mantener tu sesión activa mientras navegas</li>
                    <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">✓</span> <strong className="text-white">Preferencias:</strong> Recordar tu idioma, tema y configuración</li>
                    <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">✓</span> <strong className="text-white">Seguridad:</strong> Proteger tu cuenta contra accesos no autorizados</li>
                    <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">✓</span> <strong className="text-white">Análisis:</strong> Entender cómo usas el servicio para mejorarlo</li>
                    <li className="flex items-start gap-3"><span className="text-amber-400 mt-1">✓</span> <strong className="text-white">Rendimiento:</strong> Optimizar la velocidad y funcionamiento del sitio</li>
                  </ul>
                </div>
              </section>

              <section id="tipos" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">3</span>
                  Tipos de Cookies
                </h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs font-bold text-green-400">NECESARIAS</span>
                      <span className="text-white/40 text-sm">No requieren consentimiento</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">Cookies Estrictamente Necesarias</h4>
                    <p className="text-white/70 text-sm">Esenciales para el funcionamiento básico del sitio. Sin ellas, no podrías iniciar sesión ni usar funciones básicas.</p>
                    <p className="text-white/40 text-xs mt-2">Duración: Sesión - 1 año</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs font-bold text-blue-400">FUNCIONALES</span>
                      <span className="text-white/40 text-sm">Mejoran tu experiencia</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">Cookies de Funcionalidad</h4>
                    <p className="text-white/70 text-sm">Permiten recordar tus preferencias como idioma, tema visual y configuración personalizada.</p>
                    <p className="text-white/40 text-xs mt-2">Duración: Hasta 1 año</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs font-bold text-purple-400">ANALÍTICAS</span>
                      <span className="text-white/40 text-sm">Requieren consentimiento</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">Cookies de Rendimiento/Analíticas</h4>
                    <p className="text-white/70 text-sm">Recopilan información anónima sobre cómo los visitantes usan el sitio para ayudarnos a mejorarlo.</p>
                    <p className="text-white/40 text-xs mt-2">Duración: Hasta 2 años</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-amber-500/20 rounded-full text-xs font-bold text-amber-400">PUBLICIDAD</span>
                      <span className="text-white/40 text-sm">Requieren consentimiento explícito</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">Cookies de Publicidad (Opcional)</h4>
                    <p className="text-white/70 text-sm">Se utilizan para mostrar anuncios relevantes. Actualmente NO utilizamos cookies de publicidad.</p>
                    <p className="text-white/40 text-xs mt-2">Duración: Variable</p>
                  </div>
                </div>
              </section>

              <section id="lista" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">4</span>
                  Lista Detallada de Cookies
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-2 text-white font-bold">Cookie</th>
                        <th className="text-left py-3 px-2 text-white font-bold">Proveedor</th>
                        <th className="text-left py-3 px-2 text-white font-bold">Propósito</th>
                        <th className="text-left py-3 px-2 text-white font-bold">Duración</th>
                        <th className="text-left py-3 px-2 text-white font-bold">Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookiesList.map((cookie, index) => (
                        <tr key={index} className="border-b border-white/5 text-white/70">
                          <td className="py-3 px-2 font-mono text-xs text-amber-400">{cookie.name}</td>
                          <td className="py-3 px-2">{cookie.provider}</td>
                          <td className="py-3 px-2">{cookie.purpose}</td>
                          <td className="py-3 px-2">{cookie.duration}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              cookie.type === 'Necesaria' ? 'bg-green-500/20 text-green-400' :
                              cookie.type === 'Funcional' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="terceros" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">5</span>
                  Cookies de Terceros
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Utilizamos servicios de terceros que pueden establecer sus propias cookies:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        </div>
                        <h4 className="font-bold text-white">Google Analytics</h4>
                      </div>
                      <p className="text-sm">Servicio de análisis web que nos ayuda a entender cómo los usuarios interactúan con nuestro sitio.</p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 text-sm hover:underline mt-2 inline-block">Ver política de privacidad →</a>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xl">🔐</div>
                        <h4 className="font-bold text-white">Supabase Auth</h4>
                      </div>
                      <p className="text-sm">Servicio de autenticación para gestionar el inicio de sesión de forma segura.</p>
                      <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 text-sm hover:underline mt-2 inline-block">Ver política de privacidad →</a>
                    </div>
                  </div>
                </div>
              </section>

              <section id="gestionar" className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">6</span>
                  Cómo Gestionar las Cookies
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Tienes el derecho de decidir si aceptas o rechazas las cookies. Puedes gestionar tus preferencias de varias formas:</p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">🎛️ Banner de Cookies</h4>
                      <p className="text-sm">Cuando visitas nuestro sitio por primera vez, puedes aceptar o rechazar cookies no esenciales.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">⚙️ Configuración del Navegador</h4>
                      <p className="text-sm">Puedes configurar tu navegador para bloquear o eliminar cookies.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mt-4">
                    <p className="text-amber-400 text-sm">⚠️ <strong>Importante:</strong> Si bloqueas las cookies necesarias, algunas funciones del sitio pueden no funcionar correctamente.</p>
                  </div>
                </div>
              </section>

              <section id="navegadores" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">7</span>
                  Configuración por Navegador
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Cada navegador tiene su propia forma de gestionar cookies. Aquí tienes enlaces directos a las instrucciones:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold">C</div>
                      <div>
                        <h4 className="font-bold text-white">Google Chrome</h4>
                        <p className="text-sm text-white/50">Gestionar cookies en Chrome</p>
                      </div>
                    </a>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">F</div>
                      <div>
                        <h4 className="font-bold text-white">Mozilla Firefox</h4>
                        <p className="text-sm text-white/50">Gestionar cookies en Firefox</p>
                      </div>
                    </a>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">S</div>
                      <div>
                        <h4 className="font-bold text-white">Safari</h4>
                        <p className="text-sm text-white/50">Gestionar cookies en Safari</p>
                      </div>
                    </a>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">E</div>
                      <div>
                        <h4 className="font-bold text-white">Microsoft Edge</h4>
                        <p className="text-sm text-white/50">Gestionar cookies en Edge</p>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <section id="contacto" className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">8</span>
                  Contacto
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos:</p>
                  <div className="p-5 rounded-xl bg-black/30 mt-4">
                    <h4 className="font-bold text-white mb-2">📧 Email de Privacidad</h4>
                    <a href="mailto:privacy@garbotgpt.com" className="text-amber-400 hover:underline">privacy@garbotgpt.com</a>
                  </div>
                  <p className="text-sm text-white/50 mt-4">
                    Para más información sobre cómo tratamos tus datos personales, consulta nuestra <Link href="/politicas/privacidad" className="text-amber-400 hover:underline">Política de Privacidad</Link>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

