import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Política de Cookies - GarBotGPT',
  description: 'Información sobre el uso de cookies en GarBotGPT. Conoce qué cookies utilizamos y cómo gestionarlas.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function CookiesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 sm:p-12 rounded-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-gray-900">
              Política de Cookies
            </h1>
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cómo Utilizamos las Cookies</h2>
                <p className="mb-4">
                  En GarBotGPT utilizamos cookies para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantener tu sesión activa y recordar tus preferencias</li>
                  <li>Entender cómo utilizas nuestro servicio para mejorarlo</li>
                  <li>Personalizar tu experiencia y contenido</li>
                  <li>Analizar el rendimiento y uso del sitio web</li>
                  <li>Garantizar la seguridad de tu cuenta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Tipos de Cookies que Utilizamos</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Cookies Estrictamente Necesarias</h3>
                    <p className="mb-2">
                      Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funciones.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Ejemplos:</strong> Cookies de sesión, cookies de autenticación, cookies de seguridad.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duración:</strong> Sesión o hasta 1 año
                    </p>
                  </div>

                  <div className="bg-white/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Cookies de Rendimiento</h3>
                    <p className="mb-2">
                      Estas cookies recopilan información sobre cómo los visitantes utilizan el sitio web.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Ejemplos:</strong> Google Analytics, métricas de rendimiento.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duración:</strong> Hasta 2 años
                    </p>
                  </div>

                  <div className="bg-white/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Cookies de Funcionalidad</h3>
                    <p className="mb-2">
                      Estas cookies permiten que el sitio web recuerde las elecciones que haces y proporcionen funciones mejoradas.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Ejemplos:</strong> Preferencias de idioma, tema oscuro/claro, configuración de usuario.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duración:</strong> Hasta 1 año
                    </p>
                  </div>

                  <div className="bg-white/50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Cookies de Publicidad (Opcional)</h3>
                    <p className="mb-2">
                      Estas cookies se utilizan para mostrar anuncios relevantes para ti y tus intereses.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Ejemplos:</strong> Google Ads, Facebook Pixel.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Duración:</strong> Hasta 2 años
                    </p>
                    <p className="text-sm text-blue-600 mt-2">
                      <strong>Nota:</strong> Requieren tu consentimiento explícito.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cookies de Terceros</h2>
                <p className="mb-4">
                  Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
                  <li><strong>Servicios de autenticación:</strong> Para gestionar el inicio de sesión</li>
                  <li><strong>CDN y servicios de hosting:</strong> Para mejorar el rendimiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cómo Gestionar las Cookies</h2>
                <p className="mb-4">
                  Tienes el derecho de decidir si aceptas o rechazas las cookies. Puedes gestionar tus preferencias de cookies de las siguientes maneras:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Configuración del Navegador</h3>
                    <p className="mb-2">La mayoría de los navegadores te permiten:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ver qué cookies tienes y eliminarlas individualmente</li>
                      <li>Bloquear cookies de terceros</li>
                      <li>Bloquear cookies de sitios específicos</li>
                      <li>Bloquear todas las cookies</li>
                      <li>Eliminar todas las cookies al cerrar el navegador</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Importante:</strong> Si bloqueas las cookies, es posible que algunas funciones del sitio web no funcionen correctamente.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Enlaces a Configuración de Cookies por Navegador</h2>
                <ul className="list-none space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Actualizaciones de esta Política</h2>
                <p>
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Te recomendamos revisar esta página regularmente para estar informado sobre nuestro uso de cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contacto</h2>
                <p>
                  Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:
                </p>
                <p className="mt-2">
                  <a href="mailto:privacy@garbotgpt.com" className="text-blue-600 hover:underline">privacy@garbotgpt.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

