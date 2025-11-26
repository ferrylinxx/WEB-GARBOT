import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Política de Privacidad - GarBotGPT',
  description: 'Política de privacidad de GarBotGPT. Información sobre cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacidadPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 sm:p-12 rounded-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-gray-900">
              Política de Privacidad
            </h1>
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Información que Recopilamos</h2>
                <p className="mb-4">
                  En GarBotGPT, recopilamos la siguiente información:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Información de cuenta:</strong> Nombre, dirección de correo electrónico y contraseña cuando creas una cuenta.</li>
                  <li><strong>Datos de uso:</strong> Información sobre cómo utilizas nuestro servicio, incluyendo consultas, interacciones y preferencias.</li>
                  <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y datos de dispositivo.</li>
                  <li><strong>Cookies y tecnologías similares:</strong> Utilizamos cookies para mejorar tu experiencia.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Cómo Utilizamos tu Información</h2>
                <p className="mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar, mantener y mejorar nuestros servicios de IA</li>
                  <li>Personalizar tu experiencia y ofrecer contenido relevante</li>
                  <li>Comunicarnos contigo sobre actualizaciones, seguridad y soporte</li>
                  <li>Analizar el uso del servicio para mejorar funcionalidades</li>
                  <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Base Legal para el Tratamiento (RGPD)</h2>
                <p className="mb-4">
                  Procesamos tus datos personales bajo las siguientes bases legales:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentimiento:</strong> Has dado tu consentimiento para el procesamiento de datos personales.</li>
                  <li><strong>Ejecución de contrato:</strong> El procesamiento es necesario para cumplir con nuestros servicios.</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y garantizar la seguridad.</li>
                  <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales aplicables.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Compartir Información</h2>
                <p className="mb-4">
                  No vendemos tu información personal. Podemos compartir información con:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro servicio (hosting, análisis, soporte).</li>
                  <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li>
                  <li><strong>Transferencias empresariales:</strong> En caso de fusión, adquisición o venta de activos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Seguridad de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Encriptación de datos en tránsito y en reposo (SSL/TLS)</li>
                  <li>Controles de acceso estrictos y autenticación multifactor</li>
                  <li>Auditorías de seguridad regulares y pruebas de penetración</li>
                  <li>Formación continua del personal en protección de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Tus Derechos (RGPD)</h2>
                <p className="mb-4">
                  Bajo el RGPD, tienes los siguientes derechos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Derecho de acceso:</strong> Solicitar una copia de tus datos personales.</li>
                  <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                  <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido").</li>
                  <li><strong>Derecho de limitación:</strong> Restringir el procesamiento de tus datos.</li>
                  <li><strong>Derecho de portabilidad:</strong> Recibir tus datos en formato estructurado.</li>
                  <li><strong>Derecho de oposición:</strong> Oponerte al procesamiento de tus datos.</li>
                  <li><strong>Derecho a retirar el consentimiento:</strong> En cualquier momento.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacta con nosotros en: <a href="mailto:privacy@garbotgpt.com" className="text-blue-600 hover:underline">privacy@garbotgpt.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Retención de Datos</h2>
                <p>
                  Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los criterios para determinar el período de retención incluyen:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>La duración de tu relación con nosotros</li>
                  <li>Obligaciones legales o regulatorias</li>
                  <li>Necesidades de resolución de disputas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Transferencias Internacionales</h2>
                <p>
                  Tus datos pueden ser transferidos y procesados en países fuera del Espacio Económico Europeo (EEE). En tales casos, garantizamos que se implementen salvaguardas adecuadas, como cláusulas contractuales estándar aprobadas por la Comisión Europea.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Menores de Edad</h2>
                <p>
                  Nuestro servicio no está dirigido a menores de 16 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, tomaremos medidas para eliminar esa información.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Cambios a esta Política</h2>
                <p>
                  Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Te recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Contacto</h2>
                <p className="mb-4">
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tus datos, puedes contactarnos:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:privacy@garbotgpt.com" className="text-blue-600 hover:underline">privacy@garbotgpt.com</a></li>
                  <li><strong>Delegado de Protección de Datos:</strong> <a href="mailto:dpo@garbotgpt.com" className="text-blue-600 hover:underline">dpo@garbotgpt.com</a></li>
                </ul>
                <p className="mt-4">
                  También tienes derecho a presentar una reclamación ante la autoridad de protección de datos de tu país si consideras que el procesamiento de tus datos personales infringe el RGPD.
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

