'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

export default function TerminosPage() {
  const sections = [
    { id: 'aceptacion', title: '1. Aceptación de los Términos' },
    { id: 'descripcion', title: '2. Descripción del Servicio' },
    { id: 'registro', title: '3. Registro y Cuenta' },
    { id: 'uso', title: '4. Uso Aceptable' },
    { id: 'prohibido', title: '5. Uso Prohibido' },
    { id: 'propiedad', title: '6. Propiedad Intelectual' },
    { id: 'planes', title: '7. Planes y Pagos' },
    { id: 'cancelacion', title: '8. Cancelación y Reembolsos' },
    { id: 'limitacion', title: '9. Limitación de Responsabilidad' },
    { id: 'indemnizacion', title: '10. Indemnización' },
    { id: 'modificaciones', title: '11. Modificaciones' },
    { id: 'terminacion', title: '12. Terminación' },
    { id: 'ley', title: '13. Ley Aplicable' },
    { id: 'contacto', title: '14. Contacto' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <DocumentIcon />
            </div>
            <div>
              <span className="px-4 py-1.5 bg-blue-500/20 rounded-full text-xs font-bold text-blue-400 border border-blue-500/30">
                DOCUMENTO LEGAL
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Términos y <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Condiciones</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-8">
            Estos términos regulan el uso de GarBotGPT. Al utilizar nuestros servicios, aceptas cumplir con estas condiciones.
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
                      <a href={`#${section.id}`} className="text-sm text-white/50 hover:text-blue-400 transition-colors block py-1">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link href="/politicas/privacidad" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Ver Política de Privacidad →
                  </Link>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <section id="aceptacion" className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">1</span>
                  Aceptación de los Términos
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Al acceder, navegar o utilizar GarBotGPT (&quot;el Servicio&quot;), aceptas estar legalmente vinculado por estos Términos y Condiciones (&quot;Términos&quot;).</p>
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <p className="font-medium text-blue-400">⚠️ Si no estás de acuerdo con estos Términos, no debes utilizar el Servicio.</p>
                  </div>
                  <p>Estos Términos constituyen un acuerdo legal vinculante entre tú (&quot;Usuario&quot;) y GarBotGPT (&quot;nosotros&quot;, &quot;nuestro&quot;).</p>
                </div>
              </section>

              <section id="descripcion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">2</span>
                  Descripción del Servicio
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>GarBotGPT es una plataforma de inteligencia artificial avanzada que proporciona:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">💬 Generación de Texto</h4>
                      <p className="text-sm">Creación de contenido, respuestas, traducciones y más en múltiples idiomas.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">📄 Análisis de Documentos</h4>
                      <p className="text-sm">Procesamiento, resumen y extracción de información de documentos.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">🖼️ Análisis de Imágenes</h4>
                      <p className="text-sm">Descripción, análisis y procesamiento de contenido visual.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">💻 Generación de Código</h4>
                      <p className="text-sm">Creación, revisión y explicación de código en múltiples lenguajes.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="registro" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">3</span>
                  Registro y Cuenta de Usuario
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Para acceder a ciertas funcionalidades, debes crear una cuenta. Al registrarte, te comprometes a:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Proporcionar información precisa, actual y completa</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Mantener la confidencialidad de tu contraseña</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Ser responsable de todas las actividades bajo tu cuenta</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Tener al menos 16 años de edad</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mt-4">
                    <p className="text-amber-400 text-sm">⚠️ Nos reservamos el derecho de suspender cuentas que violen estos términos.</p>
                  </div>
                </div>
              </section>

              <section id="uso" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">4</span>
                  Uso Aceptable
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Te otorgamos una licencia limitada, no exclusiva, intransferible y revocable para usar el Servicio de acuerdo con estos Términos.</p>
                  <p className="font-medium text-white mt-4">Puedes usar GarBotGPT para:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-3"><span className="text-green-400">✓</span> Uso personal y profesional legítimo</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">✓</span> Generación de contenido para proyectos propios</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">✓</span> Asistencia en tareas de programación y análisis</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">✓</span> Aprendizaje y educación</li>
                  </ul>
                </div>
              </section>

              <section id="prohibido" className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">5</span>
                  Uso Prohibido
                </h2>
                <div className="space-y-4 text-white/70">
                  <p className="font-medium text-white">Está estrictamente prohibido usar GarBotGPT para:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Contenido Ilegal</h4>
                      <p className="text-sm">Generar contenido que viole leyes locales, nacionales o internacionales.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Contenido Dañino</h4>
                      <p className="text-sm">Crear contenido violento, abusivo, difamatorio o que incite al odio.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Malware y Hacking</h4>
                      <p className="text-sm">Desarrollar software malicioso o intentar acceso no autorizado.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Spam y Fraude</h4>
                      <p className="text-sm">Generar spam, phishing o contenido fraudulento.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Suplantación</h4>
                      <p className="text-sm">Hacerse pasar por otra persona o entidad.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="font-bold text-red-400 mb-2">🚫 Desinformación</h4>
                      <p className="text-sm">Crear noticias falsas o información engañosa.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="propiedad" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">6</span>
                  Propiedad Intelectual
                </h2>
                <div className="space-y-4 text-white/70">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                      <h4 className="font-bold text-green-400 mb-3">✅ Tu Contenido</h4>
                      <p className="text-sm">Mantienes todos los derechos sobre el contenido que generas usando GarBotGPT. Eres libre de usar, modificar y distribuir el contenido generado.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                      <h4 className="font-bold text-blue-400 mb-3">🔒 Nuestra Plataforma</h4>
                      <p className="text-sm">GarBotGPT, incluyendo su código, diseño, logos y tecnología, son propiedad exclusiva de GarBotGPT y están protegidos por leyes de propiedad intelectual.</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mt-4">Nos otorgas una licencia limitada para usar tu contenido únicamente con el fin de proporcionar y mejorar el Servicio.</p>
                </div>
              </section>

              <section id="planes" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">7</span>
                  Planes y Pagos
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>GarBotGPT ofrece diferentes planes de suscripción:</p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <h4 className="font-bold text-white mb-2">Gratuito</h4>
                      <p className="text-2xl font-black text-white">0€</p>
                      <p className="text-sm text-white/50">Funciones básicas limitadas</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30 text-center">
                      <h4 className="font-bold text-blue-400 mb-2">Pro</h4>
                      <p className="text-2xl font-black text-white">19€<span className="text-sm font-normal">/mes</span></p>
                      <p className="text-sm text-white/50">Acceso completo</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <h4 className="font-bold text-white mb-2">Enterprise</h4>
                      <p className="text-2xl font-black text-white">Personalizado</p>
                      <p className="text-sm text-white/50">Soluciones a medida</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6 text-sm">
                    <li>• Los pagos se procesan de forma segura a través de proveedores certificados PCI-DSS</li>
                    <li>• Las suscripciones se renuevan automáticamente al final de cada período</li>
                    <li>• Los precios pueden cambiar con previo aviso de 30 días</li>
                  </ul>
                </div>
              </section>

              <section id="cancelacion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">8</span>
                  Cancelación y Reembolsos
                </h2>
                <div className="space-y-4 text-white/70">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-white mb-3">Cancelación</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Puedes cancelar tu suscripción en cualquier momento</li>
                        <li>• La cancelación será efectiva al final del período actual</li>
                        <li>• Mantendrás acceso hasta que expire tu suscripción</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Reembolsos</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Garantía de devolución de 14 días para nuevos usuarios</li>
                        <li>• No se realizan reembolsos parciales por períodos no utilizados</li>
                        <li>• Contacta a soporte para solicitar un reembolso</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="limitacion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">9</span>
                  Limitación de Responsabilidad
                </h2>
                <div className="space-y-4 text-white/70">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <p className="text-amber-400 font-medium">El Servicio se proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN DISPONIBILIDAD&quot;.</p>
                  </div>
                  <p className="mt-4">No garantizamos que:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> El Servicio será ininterrumpido, seguro o libre de errores</li>
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> Los resultados generados serán precisos, completos o confiables</li>
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> El Servicio cumplirá con tus expectativas específicas</li>
                  </ul>
                  <p className="text-sm text-white/50 mt-4">En ningún caso seremos responsables por daños indirectos, incidentales, especiales o consecuentes que excedan el monto pagado por el Servicio en los últimos 12 meses.</p>
                </div>
              </section>

              <section id="indemnizacion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">10</span>
                  Indemnización
                </h2>
                <div className="text-white/70">
                  <p>Aceptas indemnizar y mantener indemne a GarBotGPT, sus directores, empleados y afiliados de cualquier reclamación, daño, pérdida o gasto (incluyendo honorarios legales) que surja de:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> Tu uso del Servicio</li>
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> Tu violación de estos Términos</li>
                    <li className="flex items-start gap-3"><span className="text-white/40">•</span> Tu violación de derechos de terceros</li>
                  </ul>
                </div>
              </section>

              <section id="modificaciones" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">11</span>
                  Modificaciones del Servicio y Términos
                </h2>
                <div className="text-white/70">
                  <p>Nos reservamos el derecho de:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3"><span className="text-blue-400">•</span> Modificar o discontinuar el Servicio (o cualquier parte) con o sin previo aviso</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400">•</span> Actualizar estos Términos en cualquier momento</li>
                    <li className="flex items-start gap-3"><span className="text-blue-400">•</span> Cambiar precios con 30 días de antelación</li>
                  </ul>
                  <p className="mt-4">Te notificaremos sobre cambios significativos por email o mediante un aviso en el Servicio.</p>
                </div>
              </section>

              <section id="terminacion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">12</span>
                  Terminación
                </h2>
                <div className="text-white/70">
                  <p>Podemos terminar o suspender tu acceso al Servicio inmediatamente, sin previo aviso, si:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3"><span className="text-red-400">•</span> Incumples estos Términos</li>
                    <li className="flex items-start gap-3"><span className="text-red-400">•</span> Realizas actividades fraudulentas o ilegales</li>
                    <li className="flex items-start gap-3"><span className="text-red-400">•</span> Abusas del Servicio o de otros usuarios</li>
                  </ul>
                  <p className="mt-4">Tras la terminación, tu derecho a usar el Servicio cesará inmediatamente.</p>
                </div>
              </section>

              <section id="ley" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">13</span>
                  Ley Aplicable y Jurisdicción
                </h2>
                <div className="text-white/70">
                  <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de España y la Unión Europea.</p>
                  <p className="mt-4">Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales de Barcelona, España.</p>
                  <p className="mt-4 text-sm text-white/50">Para consumidores de la UE: Tienes derecho a presentar reclamaciones ante la plataforma de resolución de litigios en línea de la UE: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a></p>
                </div>
              </section>

              <section id="contacto" className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">14</span>
                  Contacto
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Si tienes preguntas sobre estos Términos, puedes contactarnos:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">📧 Email Legal</h4>
                      <a href="mailto:legal@garbotgpt.com" className="text-blue-400 hover:underline">legal@garbotgpt.com</a>
                    </div>
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">🎧 Soporte</h4>
                      <a href="mailto:support@garbotgpt.com" className="text-blue-400 hover:underline">support@garbotgpt.com</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance Box */}
              <section className="p-8 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">✅ Aceptación</h2>
                <p className="text-white/70 text-center max-w-2xl mx-auto">
                  Al utilizar GarBotGPT, reconoces que has leído, entendido y aceptas estar legalmente vinculado por estos Términos y Condiciones.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

