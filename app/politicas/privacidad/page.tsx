'use client'

import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

export default function PrivacidadPage() {
  return (
    <>
      <NavbarGTA />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Política de Privacidad
            </h1>
            <p className="text-white/40 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-white/60">
              <section>
                <h2 className="text-xl font-bold mb-4 text-white">1. Información que Recopilamos</h2>
                <p className="mb-4">En GarBotGPT, recopilamos la siguiente información:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Información de cuenta:</strong> Nombre, correo electrónico y contraseña.</li>
                  <li><strong className="text-white">Datos de uso:</strong> Consultas, interacciones y preferencias.</li>
                  <li><strong className="text-white">Información técnica:</strong> IP, navegador, sistema operativo.</li>
                  <li><strong className="text-white">Cookies:</strong> Utilizamos cookies para mejorar tu experiencia.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">2. Cómo Utilizamos tu Información</h2>
                <p className="mb-4">Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar, mantener y mejorar nuestros servicios de IA</li>
                  <li>Personalizar tu experiencia y ofrecer contenido relevante</li>
                  <li>Comunicarnos contigo sobre actualizaciones y soporte</li>
                  <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">3. Base Legal (RGPD)</h2>
                <p className="mb-4">Procesamos tus datos bajo las siguientes bases legales:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Consentimiento:</strong> Has dado tu consentimiento para el procesamiento.</li>
                  <li><strong className="text-white">Ejecución de contrato:</strong> Necesario para cumplir con nuestros servicios.</li>
                  <li><strong className="text-white">Interés legítimo:</strong> Para mejorar servicios y garantizar seguridad.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">4. Compartir Información</h2>
                <p className="mb-4">No vendemos tu información personal. Podemos compartir información con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Proveedores de servicios:</strong> Empresas que nos ayudan a operar.</li>
                  <li><strong className="text-white">Cumplimiento legal:</strong> Cuando sea requerido por ley.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">5. Seguridad de Datos</h2>
                <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales.</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Encriptación de datos en tránsito y en reposo (SSL/TLS)</li>
                  <li>Controles de acceso estrictos y autenticación multifactor</li>
                  <li>Auditorías de seguridad regulares</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">6. Tus Derechos (RGPD)</h2>
                <p className="mb-4">Bajo el RGPD, tienes los siguientes derechos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Derecho de acceso:</strong> Solicitar una copia de tus datos.</li>
                  <li><strong className="text-white">Derecho de rectificación:</strong> Corregir datos inexactos.</li>
                  <li><strong className="text-white">Derecho de supresión:</strong> Solicitar la eliminación de tus datos.</li>
                  <li><strong className="text-white">Derecho de portabilidad:</strong> Recibir tus datos en formato estructurado.</li>
                  <li><strong className="text-white">Derecho de oposición:</strong> Oponerte al procesamiento.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacta: <a href="mailto:privacy@garbotgpt.com" className="text-slate-400 hover:text-white">privacy@garbotgpt.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">7. Retención de Datos</h2>
                <p>Conservamos tus datos solo durante el tiempo necesario para cumplir con los fines descritos en esta política.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">8. Transferencias Internacionales</h2>
                <p>Tus datos pueden ser transferidos fuera del EEE. Garantizamos salvaguardas adecuadas.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">9. Menores de Edad</h2>
                <p>Nuestro servicio no está dirigido a menores de 16 años.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-white">10. Contacto</h2>
                <p className="mb-4">Si tienes preguntas, puedes contactarnos:</p>
                <ul className="list-none space-y-2">
                  <li><strong className="text-white">Email:</strong> <a href="mailto:privacy@garbotgpt.com" className="text-slate-400 hover:text-white">privacy@garbotgpt.com</a></li>
                  <li><strong className="text-white">DPO:</strong> <a href="mailto:dpo@garbotgpt.com" className="text-slate-400 hover:text-white">dpo@garbotgpt.com</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterGTA />
    </>
  )
}

