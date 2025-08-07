import React, { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Terminos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      title: '1. Aceptación de los Términos',
      content: `Al acceder y utilizar GarBotGPT, usted acepta estar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable. Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio.`
    },
    {
      id: 'service-description',
      title: '2. Descripción del Servicio',
      content: `GarBotGPT es una plataforma de inteligencia artificial conversacional que proporciona asistencia automatizada a través de tecnología de procesamiento de lenguaje natural. Nuestro servicio incluye, pero no se limita a:
      
      • Conversaciones de texto en tiempo real
      • Análisis y generación de contenido
      • Asistencia en tareas específicas
      • Integración con aplicaciones de terceros
      • API para desarrolladores`
    },
    {
      id: 'user-accounts',
      title: '3. Cuentas de Usuario',
      content: `Para acceder a ciertas funciones del servicio, debe crear una cuenta. Usted es responsable de:
      
      • Mantener la confidencialidad de su cuenta y contraseña
      • Todas las actividades que ocurran bajo su cuenta
      • Notificar inmediatamente cualquier uso no autorizado
      • Proporcionar información precisa y actualizada
      
      Nos reservamos el derecho de suspender o terminar cuentas que violen estos términos.`
    },
    {
      id: 'acceptable-use',
      title: '4. Uso Aceptable',
      content: `Al utilizar GarBotGPT, usted acepta NO:
      
      • Usar el servicio para actividades ilegales o no autorizadas
      • Intentar obtener acceso no autorizado a nuestros sistemas
      • Transmitir virus, malware o código malicioso
      • Acosar, abusar o dañar a otros usuarios
      • Violar derechos de propiedad intelectual
      • Generar contenido spam o no solicitado
      • Usar el servicio para crear contenido discriminatorio u ofensivo`
    },
    {
      id: 'intellectual-property',
      title: '5. Propiedad Intelectual',
      content: `El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de GarBotGPT y sus licenciantes. El servicio está protegido por derechos de autor, marcas comerciales y otras leyes. Nuestras marcas comerciales no pueden ser utilizadas sin nuestro consentimiento previo por escrito.`
    },
    {
      id: 'privacy-data',
      title: '6. Privacidad y Datos',
      content: `Su privacidad es importante para nosotros. Nuestra Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestro servicio. Al usar GarBotGPT, acepta la recopilación y el uso de información de acuerdo con nuestra Política de Privacidad.`
    },
    {
      id: 'service-availability',
      title: '7. Disponibilidad del Servicio',
      content: `Nos esforzamos por mantener GarBotGPT disponible 24/7, pero no garantizamos que el servicio esté libre de interrupciones. Podemos suspender temporalmente el servicio para mantenimiento, actualizaciones o por razones técnicas. No seremos responsables por cualquier pérdida o daño resultante de la indisponibilidad temporal del servicio.`
    },
    {
      id: 'limitation-liability',
      title: '8. Limitación de Responsabilidad',
      content: `En ningún caso GarBotGPT, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de su uso del servicio.`
    },
    {
      id: 'termination',
      title: '9. Terminación',
      content: `Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación si usted incumple los Términos y Condiciones. Al terminar, su derecho a usar el servicio cesará inmediatamente.`
    },
    {
      id: 'changes-terms',
      title: '10. Cambios a los Términos',
      content: `Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que los nuevos términos entren en vigor.`
    },
    {
      id: 'governing-law',
      title: '11. Ley Aplicable',
      content: `Estos Términos se regirán e interpretarán de acuerdo con las leyes del país donde GarBotGPT tiene su sede principal, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa será resuelta en los tribunales competentes de dicha jurisdicción.`
    },
    {
      id: 'contact',
      title: '12. Información de Contacto',
      content: `Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos en:
      
      Email: legal@garbotgpt.com
      Dirección: [Dirección de la empresa]
      Teléfono: [Número de teléfono]
      
      Última actualización: 15 de Enero de 2025`
    }
  ];

  return (
    <>
      <SEOHead 
        title="Términos y Condiciones - GarBotGPT | Condiciones de Uso"
        description="Términos y condiciones de uso de GarBotGPT. Conoce tus derechos y responsabilidades al utilizar nuestra plataforma de inteligencia artificial."
        keywords="términos condiciones GarBotGPT, condiciones uso IA, términos servicio chatbot, legal GarBotGPT"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl font-black text-white mb-8 leading-tight">
                <span className="block mb-4">Términos y</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Condiciones
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Condiciones de uso claras y transparentes para una experiencia segura con GarBotGPT
              </p>
              <div className="mt-8 text-slate-400">
                <p>Última actualización: 15 de Enero de 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              
              {/* Introduction */}
              <div className="mb-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Introducción</h2>
                <p className="text-slate-300 leading-relaxed">
                  Bienvenido a GarBotGPT. Estos términos y condiciones describen las reglas y regulaciones 
                  para el uso del sitio web y servicios de GarBotGPT. Al acceder a este sitio web y utilizar 
                  nuestros servicios, asumimos que acepta estos términos y condiciones. No continúe usando 
                  GarBotGPT si no acepta todos los términos y condiciones establecidos en esta página.
                </p>
              </div>

              {/* Terms Sections */}
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div key={section.id} className="border-b border-slate-700/50 pb-8 last:border-b-0">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {section.title}
                    </h3>
                    <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notice */}
              <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ Aviso Importante</h3>
                <p className="text-slate-300 leading-relaxed">
                  Estos términos y condiciones pueden cambiar ocasionalmente. Es su responsabilidad 
                  revisar periódicamente estos términos para estar al tanto de cualquier actualización. 
                  Su uso continuado del servicio después de cualquier cambio constituye su aceptación 
                  de los nuevos términos.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-green-400 mb-4">📞 ¿Preguntas Legales?</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Si tiene alguna pregunta sobre estos Términos y Condiciones, no dude en contactarnos:
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Email:</strong> legal@garbotgpt.com</p>
                  <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
                  <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Documentos Relacionados
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Otros documentos legales importantes que debes conocer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Política de Privacidad',
                  description: 'Cómo protegemos y utilizamos tu información personal',
                  icon: '🔒',
                  link: '/privacidad',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Política de Cookies',
                  description: 'Información sobre el uso de cookies en nuestro sitio',
                  icon: '🍪',
                  link: '/cookies',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Código de Conducta',
                  description: 'Normas de comportamiento en nuestra comunidad',
                  icon: '📋',
                  link: '/codigo-conducta',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((doc, index) => (
                <a
                  key={index}
                  href={doc.link}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 bg-gradient-to-r ${doc.color} bg-clip-text text-transparent`}>
                    {doc.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {doc.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Terminos;
