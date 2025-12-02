'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

export default function CookiesPage() {
  return (
    <>
      <NavbarGTA />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Política de Cookies
            </h1>
            <p className="text-white/40 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-white/60">
              <section>
                <h2 className="text-xl font-bold mb-4 text-white">¿Qué son las Cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Cómo Utilizamos las Cookies</h2>
                <p className="mb-4">En GarBotGPT utilizamos cookies para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantener tu sesión activa y recordar tus preferencias</li>
                  <li>Entender cómo utilizas nuestro servicio para mejorarlo</li>
                  <li>Personalizar tu experiencia y contenido</li>
                  <li>Garantizar la seguridad de tu cuenta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Tipos de Cookies</h2>

                <div className="space-y-4">
                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-2 text-white">1. Cookies Estrictamente Necesarias</h3>
                    <p>Esenciales para que puedas navegar por el sitio web y utilizar sus funciones.</p>
                    <p className="text-sm text-white/40 mt-2"><strong className="text-white/60">Duración:</strong> Sesión o hasta 1 año</p>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-2 text-white">2. Cookies de Rendimiento</h3>
                    <p>Recopilan información sobre cómo los visitantes utilizan el sitio web.</p>
                    <p className="text-sm text-white/40 mt-2"><strong className="text-white/60">Duración:</strong> Hasta 2 años</p>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-2 text-white">3. Cookies de Funcionalidad</h3>
                    <p>Permiten que el sitio web recuerde las elecciones que haces.</p>
                    <p className="text-sm text-white/40 mt-2"><strong className="text-white/60">Duración:</strong> Hasta 1 año</p>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-2 text-white">4. Cookies de Publicidad (Opcional)</h3>
                    <p>Se utilizan para mostrar anuncios relevantes para ti.</p>
                    <p className="text-sm text-slate-400 mt-2"><strong>Nota:</strong> Requieren tu consentimiento explícito.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Cookies de Terceros</h2>
                <p className="mb-4">Utilizamos servicios de terceros que pueden establecer cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Google Analytics:</strong> Para analizar el uso del sitio web</li>
                  <li><strong className="text-white">Servicios de autenticación:</strong> Para gestionar el inicio de sesión</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Cómo Gestionar las Cookies</h2>
                <p className="mb-4">Tienes el derecho de decidir si aceptas o rechazas las cookies.</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">Configuración del Navegador</h3>
                    <p className="mb-2">La mayoría de los navegadores te permiten:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ver qué cookies tienes y eliminarlas</li>
                      <li>Bloquear cookies de terceros</li>
                      <li>Bloquear todas las cookies</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-white/60">
                      <strong className="text-white">Importante:</strong> Si bloqueas las cookies, algunas funciones pueden no funcionar correctamente.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Enlaces a Configuración de Cookies</h2>
                <ul className="list-none space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Safari</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">Microsoft Edge</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">Contacto</h2>
                <p>Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:</p>
                <p className="mt-2">
                  <a href="mailto:privacy@garbotgpt.com" className="text-slate-400 hover:text-white">privacy@garbotgpt.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterGTA />
    </>
  )
}

