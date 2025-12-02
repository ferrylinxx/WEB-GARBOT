'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

export default function TerminosPage() {
  return (
    <>
      <NavbarGTA />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Términos y Condiciones
            </h1>
            <p className="text-white/40 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-white/60">
              <section>
                <h2 className="text-xl font-bold mb-4 text-white">1. Aceptación de los Términos</h2>
                <p>Al acceder y utilizar GarBotGPT, aceptas estar sujeto a estos Términos y Condiciones.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">2. Descripción del Servicio</h2>
                <p className="mb-4">GarBotGPT es una plataforma de inteligencia artificial que proporciona:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Generación de texto avanzada en múltiples idiomas</li>
                  <li>Análisis y procesamiento de documentos</li>
                  <li>Creación y análisis de imágenes</li>
                  <li>Generación de código en múltiples lenguajes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">3. Registro y Cuenta de Usuario</h2>
                <p className="mb-4">Para utilizar ciertos servicios, debes crear una cuenta. Te comprometes a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa y completa</li>
                  <li>Mantener la seguridad de tu contraseña</li>
                  <li>Notificarnos sobre cualquier uso no autorizado</li>
                  <li>Tener al menos 16 años de edad</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">4. Uso Aceptable</h2>
                <p className="mb-4">Al utilizar GarBotGPT, aceptas NO:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizar el servicio para fines ilegales</li>
                  <li>Generar contenido ilegal, dañino o abusivo</li>
                  <li>Intentar obtener acceso no autorizado a nuestros sistemas</li>
                  <li>Violar derechos de propiedad intelectual</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">5. Propiedad Intelectual</h2>
                <p className="mb-4"><strong className="text-white">Contenido Generado:</strong> Mantienes la propiedad del contenido que generas.</p>
                <p><strong className="text-white">Plataforma:</strong> GarBotGPT y su contenido son propiedad exclusiva de GarBotGPT.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">6. Planes y Pagos</h2>
                <p className="mb-4">GarBotGPT ofrece diferentes planes de suscripción:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Plan Gratuito:</strong> Acceso limitado a funcionalidades básicas</li>
                  <li><strong className="text-white">Planes Premium:</strong> Acceso completo con diferentes niveles de uso</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">7. Cancelación y Reembolsos</h2>
                <p>Puedes cancelar tu suscripción en cualquier momento. La cancelación será efectiva al final del período de facturación actual.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">8. Limitación de Responsabilidad</h2>
                <p className="mb-4">El servicio se proporciona "tal cual" y "según disponibilidad". No garantizamos que:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El servicio será ininterrumpido o libre de errores</li>
                  <li>Los resultados serán precisos o confiables</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">9. Modificaciones del Servicio</h2>
                <p>Nos reservamos el derecho de modificar o discontinuar el servicio con o sin previo aviso.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">10. Terminación</h2>
                <p>Podemos terminar o suspender tu cuenta inmediatamente si incumples estos Términos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">11. Ley Aplicable</h2>
                <p>Estos Términos se regirán de acuerdo con las leyes de España y la Unión Europea.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">12. Contacto</h2>
                <p className="mb-4">Si tienes preguntas, puedes contactarnos:</p>
                <ul className="list-none space-y-2">
                  <li><strong className="text-white">Email:</strong> <a href="mailto:legal@garbotgpt.com" className="text-slate-400 hover:text-white">legal@garbotgpt.com</a></li>
                  <li><strong className="text-white">Soporte:</strong> <a href="mailto:support@garbotgpt.com" className="text-slate-400 hover:text-white">support@garbotgpt.com</a></li>
                </ul>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold mb-4 text-white">Aceptación</h2>
                <p>Al utilizar GarBotGPT, reconoces que has leído, entendido y aceptas estos Términos y Condiciones.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterGTA />
    </>
  )
}

