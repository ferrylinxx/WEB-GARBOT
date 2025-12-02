'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import Link from 'next/link'

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function PrivacidadPage() {
  const sections = [
    { id: 'info', title: '1. Información que Recopilamos' },
    { id: 'uso', title: '2. Uso de la Información' },
    { id: 'legal', title: '3. Base Legal (RGPD)' },
    { id: 'compartir', title: '4. Compartir Información' },
    { id: 'seguridad', title: '5. Seguridad de Datos' },
    { id: 'derechos', title: '6. Tus Derechos (RGPD)' },
    { id: 'retencion', title: '7. Retención de Datos' },
    { id: 'transferencias', title: '8. Transferencias Internacionales' },
    { id: 'menores', title: '9. Menores de Edad' },
    { id: 'cambios', title: '10. Cambios en la Política' },
    { id: 'contacto', title: '11. Contacto' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <ShieldIcon />
            </div>
            <div>
              <span className="px-4 py-1.5 bg-green-500/20 rounded-full text-xs font-bold text-green-400 border border-green-500/30">
                RGPD COMPLIANT
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Política de <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Privacidad</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-8">
            En GarBotGPT, tu privacidad es nuestra prioridad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
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
                      <a href={`#${section.id}`} className="text-sm text-white/50 hover:text-green-400 transition-colors block py-1">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link href="/politicas/terminos" className="text-sm text-green-400 hover:text-green-300 transition-colors">
                    Ver Términos de Servicio →
                  </Link>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <section id="info" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">1</span>
                  Información que Recopilamos
                </h2>
                <div className="space-y-6 text-white/70">
                  <p>En GarBotGPT, recopilamos diferentes tipos de información para proporcionarte nuestros servicios de inteligencia artificial:</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">Información de Cuenta</h4>
                      <ul className="text-sm space-y-1 text-white/60">
                        <li>• Nombre completo</li>
                        <li>• Dirección de correo electrónico</li>
                        <li>• Contraseña (encriptada)</li>
                        <li>• Foto de perfil (opcional)</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">Datos de Uso</h4>
                      <ul className="text-sm space-y-1 text-white/60">
                        <li>• Consultas realizadas al chatbot</li>
                        <li>• Historial de conversaciones</li>
                        <li>• Preferencias de configuración</li>
                        <li>• Documentos subidos (procesados y eliminados)</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">Información Técnica</h4>
                      <ul className="text-sm space-y-1 text-white/60">
                        <li>• Dirección IP</li>
                        <li>• Tipo de navegador y versión</li>
                        <li>• Sistema operativo</li>
                        <li>• Identificadores de dispositivo</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-white mb-2">Cookies y Tracking</h4>
                      <ul className="text-sm space-y-1 text-white/60">
                        <li>• Cookies de sesión</li>
                        <li>• Cookies de preferencias</li>
                        <li>• Cookies analíticas (Google Analytics)</li>
                        <li>• <Link href="/politicas/cookies" className="text-green-400 hover:underline">Ver Política de Cookies</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="uso" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">2</span>
                  Uso de la Información
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Utilizamos la información recopilada para los siguientes fines:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Proporcionar, mantener y mejorar nuestros servicios de IA</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Personalizar tu experiencia y ofrecer contenido relevante</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Procesar tus consultas y generar respuestas precisas</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Comunicarnos contigo sobre actualizaciones y soporte técnico</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Entrenar y mejorar nuestros modelos de IA (datos anonimizados)</li>
                    <li className="flex items-start gap-3"><span className="text-green-400 mt-1">✓</span> Cumplir con obligaciones legales y regulatorias</li>
                  </ul>
                </div>
              </section>

              <section id="legal" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">3</span>
                  Base Legal (RGPD)
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Conforme al Reglamento General de Protección de Datos (RGPD), procesamos tus datos bajo las siguientes bases legales:</p>
                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                      <h4 className="font-bold text-white">Consentimiento (Art. 6.1.a)</h4>
                      <p className="text-sm mt-1">Has proporcionado tu consentimiento explícito para el procesamiento de tus datos personales.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500">
                      <h4 className="font-bold text-white">Ejecución de Contrato (Art. 6.1.b)</h4>
                      <p className="text-sm mt-1">El procesamiento es necesario para la ejecución de un contrato del que eres parte.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500">
                      <h4 className="font-bold text-white">Interés Legítimo (Art. 6.1.f)</h4>
                      <p className="text-sm mt-1">El procesamiento es necesario para nuestros intereses legítimos, como mejorar nuestros servicios.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
                      <h4 className="font-bold text-white">Obligación Legal (Art. 6.1.c)</h4>
                      <p className="text-sm mt-1">El procesamiento es necesario para cumplir con una obligación legal.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="compartir" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">4</span>
                  Compartir Información
                </h2>
                <div className="space-y-4 text-white/70">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-6">
                    <p className="font-bold text-red-400">🚫 NUNCA vendemos tu información personal a terceros.</p>
                  </div>
                  <p>Podemos compartir información limitada con:</p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3"><span className="text-white font-bold">Proveedores de servicios:</span> Empresas que nos ayudan a operar (hosting, analytics)</li>
                    <li className="flex items-start gap-3"><span className="text-white font-bold">APIs de IA:</span> OpenAI para procesamiento de consultas (sin identificación personal)</li>
                    <li className="flex items-start gap-3"><span className="text-white font-bold">Cumplimiento legal:</span> Cuando sea requerido por ley o autoridades competentes</li>
                    <li className="flex items-start gap-3"><span className="text-white font-bold">Protección de derechos:</span> Para proteger nuestros derechos, propiedad o seguridad</li>
                  </ul>
                </div>
              </section>

              <section id="seguridad" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">5</span>
                  Seguridad de Datos
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">🔐</div>
                      <div><h4 className="font-bold text-white">Encriptación SSL/TLS</h4><p className="text-sm text-white/60">Datos en tránsito protegidos</p></div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">🔑</div>
                      <div><h4 className="font-bold text-white">Encriptación AES-256</h4><p className="text-sm text-white/60">Datos en reposo protegidos</p></div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">🛡️</div>
                      <div><h4 className="font-bold text-white">Firewall & WAF</h4><p className="text-sm text-white/60">Protección contra ataques</p></div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">📋</div>
                      <div><h4 className="font-bold text-white">Auditorías regulares</h4><p className="text-sm text-white/60">Tests de penetración anuales</p></div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="derechos" className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">6</span>
                  Tus Derechos (RGPD)
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Bajo el RGPD, tienes los siguientes derechos sobre tus datos personales:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">📋 Derecho de Acceso</h4><p className="text-sm">Solicitar una copia de todos tus datos personales</p></div>
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">✏️ Derecho de Rectificación</h4><p className="text-sm">Corregir datos inexactos o incompletos</p></div>
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">🗑️ Derecho de Supresión</h4><p className="text-sm">Solicitar la eliminación de tus datos (&quot;derecho al olvido&quot;)</p></div>
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">📦 Derecho de Portabilidad</h4><p className="text-sm">Recibir tus datos en formato estructurado y legible</p></div>
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">⛔ Derecho de Oposición</h4><p className="text-sm">Oponerte al procesamiento de tus datos</p></div>
                    <div className="p-4 rounded-xl bg-black/30"><h4 className="font-bold text-white mb-1">⏸️ Derecho de Limitación</h4><p className="text-sm">Restringir el procesamiento de tus datos</p></div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                    <p className="text-green-400 font-medium">Para ejercer estos derechos, contacta: <a href="mailto:privacy@garbotgpt.com" className="underline">privacy@garbotgpt.com</a></p>
                    <p className="text-sm text-green-300/70 mt-1">Responderemos en un plazo máximo de 30 días.</p>
                  </div>
                </div>
              </section>

              <section id="retencion" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">7</span>
                  Retención de Datos
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Conservamos tus datos durante el tiempo estrictamente necesario:</p>
                  <table className="w-full mt-4 text-sm">
                    <thead><tr className="border-b border-white/10"><th className="text-left py-3 text-white">Tipo de Dato</th><th className="text-left py-3 text-white">Período de Retención</th></tr></thead>
                    <tbody>
                      <tr className="border-b border-white/5"><td className="py-3">Datos de cuenta</td><td className="py-3">Mientras la cuenta esté activa + 30 días</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3">Historial de chat</td><td className="py-3">90 días (eliminación automática)</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3">Documentos subidos</td><td className="py-3">Procesados y eliminados en 24 horas</td></tr>
                      <tr className="border-b border-white/5"><td className="py-3">Datos de facturación</td><td className="py-3">7 años (obligación legal)</td></tr>
                      <tr><td className="py-3">Logs de seguridad</td><td className="py-3">1 año</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="transferencias" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">8</span>
                  Transferencias Internacionales
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Tus datos pueden ser transferidos fuera del Espacio Económico Europeo (EEE). Garantizamos salvaguardas adecuadas mediante:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Cláusulas Contractuales Estándar (SCCs) aprobadas por la Comisión Europea</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Decisiones de adecuación para países con nivel de protección equivalente</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Medidas técnicas adicionales (encriptación, pseudonimización)</li>
                  </ul>
                </div>
              </section>

              <section id="menores" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">9</span>
                  Menores de Edad
                </h2>
                <div className="text-white/70">
                  <p>Nuestro servicio <strong className="text-white">no está dirigido a menores de 16 años</strong>. No recopilamos intencionadamente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.</p>
                </div>
              </section>

              <section id="cambios" className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">10</span>
                  Cambios en la Política
                </h2>
                <div className="text-white/70">
                  <p>Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos a través de:</p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Email a la dirección registrada</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Notificación en la plataforma</li>
                    <li className="flex items-start gap-3"><span className="text-green-400">•</span> Actualización de la fecha &quot;Última modificación&quot;</li>
                  </ul>
                </div>
              </section>

              <section id="contacto" className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">11</span>
                  Contacto
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">📧 Email de Privacidad</h4>
                      <a href="mailto:privacy@garbotgpt.com" className="text-green-400 hover:underline">privacy@garbotgpt.com</a>
                    </div>
                    <div className="p-5 rounded-xl bg-black/30">
                      <h4 className="font-bold text-white mb-2">👤 Delegado de Protección de Datos</h4>
                      <a href="mailto:dpo@garbotgpt.com" className="text-green-400 hover:underline">dpo@garbotgpt.com</a>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mt-4">
                    También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
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

