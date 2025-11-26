import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - GarBotGPT',
  description: 'Términos y condiciones de uso de GarBotGPT. Lee nuestros términos de servicio antes de utilizar nuestra plataforma de IA.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function TerminosPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 sm:p-12 rounded-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-gray-900">
              Términos y Condiciones
            </h1>
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar GarBotGPT, aceptas estar sujeto a estos Términos y Condiciones, todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de las leyes locales aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Descripción del Servicio</h2>
                <p className="mb-4">
                  GarBotGPT es una plataforma de inteligencia artificial que proporciona:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Generación de texto avanzada en múltiples idiomas</li>
                  <li>Análisis y procesamiento de documentos</li>
                  <li>Creación y análisis de imágenes</li>
                  <li>Generación de videos con IA</li>
                  <li>Generación de código en múltiples lenguajes</li>
                  <li>Búsqueda web inteligente</li>
                  <li>Exportación de contenido en diversos formatos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Registro y Cuenta de Usuario</h2>
                <p className="mb-4">
                  Para utilizar ciertos servicios, debes crear una cuenta. Al crear una cuenta, te comprometes a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa, actual y completa</li>
                  <li>Mantener la seguridad de tu contraseña</li>
                  <li>Notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta</li>
                  <li>Ser responsable de todas las actividades que ocurran bajo tu cuenta</li>
                  <li>Tener al menos 16 años de edad</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Uso Aceptable</h2>
                <p className="mb-4">
                  Al utilizar GarBotGPT, aceptas NO:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizar el servicio para fines ilegales o no autorizados</li>
                  <li>Generar contenido que sea ilegal, dañino, amenazante, abusivo, acosador, difamatorio, vulgar, obsceno o invasivo de la privacidad de otros</li>
                  <li>Intentar obtener acceso no autorizado a nuestros sistemas o redes</li>
                  <li>Interferir o interrumpir el servicio o los servidores</li>
                  <li>Utilizar el servicio para crear spam o contenido no solicitado</li>
                  <li>Violar derechos de propiedad intelectual de terceros</li>
                  <li>Realizar ingeniería inversa, descompilar o desensamblar el software</li>
                  <li>Utilizar bots, scrapers o herramientas automatizadas sin autorización</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Propiedad Intelectual</h2>
                <p className="mb-4">
                  <strong>Contenido Generado:</strong> Mantienes la propiedad del contenido que generas utilizando GarBotGPT, sujeto a estos términos.
                </p>
                <p className="mb-4">
                  <strong>Plataforma:</strong> GarBotGPT y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de GarBotGPT y sus licenciantes.
                </p>
                <p>
                  <strong>Licencia de Uso:</strong> Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para usar el servicio de acuerdo con estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Planes y Pagos</h2>
                <p className="mb-4">
                  GarBotGPT ofrece diferentes planes de suscripción:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Plan Gratuito:</strong> Acceso limitado a funcionalidades básicas</li>
                  <li><strong>Planes Premium:</strong> Acceso completo con diferentes niveles de uso</li>
                </ul>
                <p className="mt-4">
                  Los pagos se procesan de forma segura a través de proveedores de pago de terceros. Al suscribirte a un plan de pago, autorizas cargos recurrentes hasta que canceles tu suscripción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Cancelación y Reembolsos</h2>
                <p className="mb-4">
                  Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación será efectiva al final del período de facturación actual.
                </p>
                <p>
                  Los reembolsos se considerarán caso por caso y están sujetos a nuestra política de reembolsos. Generalmente, no ofrecemos reembolsos por períodos parciales de suscripción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Limitación de Responsabilidad</h2>
                <p className="mb-4">
                  El servicio se proporciona "tal cual" y "según disponibilidad". No garantizamos que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El servicio será ininterrumpido, seguro o libre de errores</li>
                  <li>Los resultados obtenidos del uso del servicio serán precisos o confiables</li>
                  <li>La calidad del servicio cumplirá con tus expectativas</li>
                </ul>
                <p className="mt-4">
                  En ningún caso GarBotGPT será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Modificaciones del Servicio</h2>
                <p>
                  Nos reservamos el derecho de modificar o discontinuar, temporal o permanentemente, el servicio (o cualquier parte del mismo) con o sin previo aviso. No seremos responsables ante ti ni ante terceros por cualquier modificación, suspensión o discontinuación del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Terminación</h2>
                <p className="mb-4">
                  Podemos terminar o suspender tu cuenta y acceso al servicio inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación si incumples estos Términos.
                </p>
                <p>
                  Tras la terminación, tu derecho a usar el servicio cesará inmediatamente. Si deseas terminar tu cuenta, puedes simplemente dejar de usar el servicio o contactarnos para solicitar la eliminación de tu cuenta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Ley Aplicable</h2>
                <p>
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de España y la Unión Europea, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de España.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Cambios a los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material se determinará a nuestra sola discreción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Contacto</h2>
                <p className="mb-4">
                  Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:legal@garbotgpt.com" className="text-blue-600 hover:underline">legal@garbotgpt.com</a></li>
                  <li><strong>Soporte:</strong> <a href="mailto:support@garbotgpt.com" className="text-blue-600 hover:underline">support@garbotgpt.com</a></li>
                </ul>
              </section>

              <section className="bg-blue-50 p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Aceptación</h2>
                <p>
                  Al utilizar GarBotGPT, reconoces que has leído, entendido y aceptas estar sujeto a estos Términos y Condiciones, así como a nuestra Política de Privacidad.
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

