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

const Privacidad = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'information-collection',
      title: '1. Información que Recopilamos',
      content: `Recopilamos diferentes tipos de información para proporcionar y mejorar nuestro servicio:

**Información Personal:**
• Nombre y dirección de correo electrónico
• Información de perfil (opcional)
• Preferencias de comunicación

**Información de Uso:**
• Conversaciones con GarBotGPT (anonimizadas)
• Patrones de uso y interacción
• Datos técnicos (dirección IP, navegador, dispositivo)
• Cookies y tecnologías similares

**Información de Pago:**
• Datos de facturación (procesados por terceros seguros)
• Historial de transacciones`
    },
    {
      id: 'information-use',
      title: '2. Cómo Utilizamos su Información',
      content: `Utilizamos la información recopilada para:

**Prestación del Servicio:**
• Proporcionar respuestas personalizadas de IA
• Mantener y mejorar la funcionalidad
• Procesar pagos y gestionar suscripciones

**Mejora del Producto:**
• Entrenar y mejorar nuestros modelos de IA
• Analizar patrones de uso para optimización
• Desarrollar nuevas características

**Comunicación:**
• Enviar actualizaciones importantes del servicio
• Responder a consultas de soporte
• Notificaciones de seguridad (solo cuando sea necesario)`
    },
    {
      id: 'data-sharing',
      title: '3. Compartir Información',
      content: `Nunca vendemos su información personal. Solo compartimos datos en casos específicos:

**Proveedores de Servicios:**
• Procesadores de pago (Stripe, PayPal)
• Servicios de infraestructura en la nube (AWS, Google Cloud)
• Herramientas de análisis (datos anonimizados)

**Requisitos Legales:**
• Cuando sea requerido por ley
• Para proteger nuestros derechos legales
• En caso de investigaciones de seguridad

**Transferencia de Negocio:**
• En caso de fusión, adquisición o venta de activos
• Siempre con las mismas protecciones de privacidad`
    },
    {
      id: 'data-security',
      title: '4. Seguridad de Datos',
      content: `Implementamos múltiples capas de seguridad:

**Encriptación:**
• Encriptación en tránsito (TLS 1.3)
• Encriptación en reposo (AES-256)
• Encriptación de extremo a extremo para conversaciones sensibles

**Controles de Acceso:**
• Autenticación multifactor obligatoria
• Principio de menor privilegio
• Auditorías regulares de acceso

**Infraestructura:**
• Centros de datos certificados SOC 2
• Monitoreo 24/7 de seguridad
• Respaldo y recuperación de desastres`
    },
    {
      id: 'data-retention',
      title: '5. Retención de Datos',
      content: `Mantenemos sus datos solo el tiempo necesario:

**Datos de Cuenta:**
• Mientras su cuenta esté activa
• 30 días después de la eliminación de cuenta

**Conversaciones:**
• Datos anonimizados para mejora del modelo
• Datos personales eliminados después de 90 días
• Opción de eliminación inmediata disponible

**Datos de Facturación:**
• Retenidos según requisitos fiscales (7 años)
• Solo información necesaria para cumplimiento`
    },
    {
      id: 'user-rights',
      title: '6. Sus Derechos',
      content: `Usted tiene control total sobre sus datos:

**Acceso y Portabilidad:**
• Ver todos los datos que tenemos sobre usted
• Exportar sus datos en formato estándar
• Obtener copias de sus conversaciones

**Corrección y Eliminación:**
• Corregir información inexacta
• Eliminar su cuenta y datos asociados
• Solicitar eliminación de conversaciones específicas

**Control de Procesamiento:**
• Optar por no participar en mejoras del modelo
• Limitar el uso de datos para análisis
• Configurar preferencias de privacidad granulares`
    },
    {
      id: 'cookies',
      title: '7. Cookies y Tecnologías de Seguimiento',
      content: `Utilizamos cookies para mejorar su experiencia:

**Cookies Esenciales:**
• Autenticación y seguridad de sesión
• Preferencias de idioma y configuración
• Funcionalidad básica del sitio

**Cookies de Análisis:**
• Métricas de uso agregadas y anonimizadas
• Optimización de rendimiento
• Detección de errores

**Control de Cookies:**
• Panel de configuración de cookies
• Opción de rechazar cookies no esenciales
• Instrucciones para configuración del navegador`
    },
    {
      id: 'international-transfers',
      title: '8. Transferencias Internacionales',
      content: `Sus datos pueden ser procesados globalmente:

**Ubicaciones de Procesamiento:**
• Servidores en Estados Unidos y Europa
• Cumplimiento con GDPR y regulaciones locales
• Cláusulas contractuales estándar para transferencias

**Protecciones:**
• Mismos estándares de seguridad globalmente
• Auditorías regulares de cumplimiento
• Certificaciones de privacidad internacionales`
    },
    {
      id: 'children-privacy',
      title: '9. Privacidad de Menores',
      content: `Protegemos especialmente a los menores:

**Restricciones de Edad:**
• Servicio no dirigido a menores de 13 años
• Verificación de edad requerida
• Consentimiento parental para menores de 16 años

**Protecciones Adicionales:**
• Eliminación inmediata de datos de menores
• Restricciones adicionales de procesamiento
• Monitoreo especial de contenido`
    },
    {
      id: 'policy-changes',
      title: '10. Cambios en la Política',
      content: `Mantenemos transparencia en los cambios:

**Notificación de Cambios:**
• Aviso por email 30 días antes de cambios importantes
• Notificación en la plataforma
• Historial de versiones disponible

**Su Elección:**
• Opción de rechazar cambios importantes
• Eliminación de cuenta si no acepta cambios
• Período de gracia para adaptación`
    },
    {
      id: 'contact-dpo',
      title: '11. Contacto y Oficial de Protección de Datos',
      content: `Para consultas sobre privacidad:

**Oficial de Protección de Datos:**
Email: dpo@garbotgpt.com
Respuesta garantizada en 72 horas

**Consultas Generales:**
Email: privacy@garbotgpt.com
Chat en vivo disponible 24/7

**Autoridades de Supervisión:**
Derecho a presentar quejas ante autoridades locales de protección de datos

Última actualización: 15 de Enero de 2025`
    }
  ];

  return (
    <>
      <SEOHead 
        title="Política de Privacidad - GarBotGPT | Protección de Datos"
        description="Política de privacidad de GarBotGPT. Conoce cómo protegemos, utilizamos y gestionamos tu información personal con los más altos estándares de seguridad."
        keywords="política privacidad GarBotGPT, protección datos IA, privacidad chatbot, GDPR compliance, seguridad datos"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 25 }).map((_, i) => (
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
                <span className="block mb-4">Política de</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Privacidad
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
                Tu privacidad es nuestra prioridad. Conoce cómo protegemos y gestionamos tu información personal.
              </p>
              
              {/* Privacy Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-lg font-bold text-white mb-2">Encriptación Total</h3>
                  <p className="text-slate-300 text-sm">Tus datos están protegidos con encriptación militar</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h3 className="text-lg font-bold text-white mb-2">GDPR Compliant</h3>
                  <p className="text-slate-300 text-sm">Cumplimos con las regulaciones más estrictas</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">👤</div>
                  <h3 className="text-lg font-bold text-white mb-2">Control Total</h3>
                  <p className="text-slate-300 text-sm">Tú decides qué datos compartir y cuándo</p>
                </div>
              </div>
              
              <div className="mt-8 text-slate-400">
                <p>Última actualización: 15 de Enero de 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              
              {/* Introduction */}
              <div className="mb-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">🔐 Nuestro Compromiso</h2>
                <p className="text-slate-300 leading-relaxed">
                  En GarBotGPT, tu privacidad no es negociable. Esta política explica de manera transparente 
                  cómo recopilamos, utilizamos, protegemos y gestionamos tu información personal. Creemos que 
                  tienes derecho a saber exactamente qué sucede con tus datos y a tener control total sobre ellos.
                </p>
              </div>

              {/* Privacy Sections */}
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

              {/* Data Rights Summary */}
              <div className="mt-12 p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-green-400 mb-4">✅ Resumen de tus Derechos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Acceder a todos tus datos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Corregir información inexacta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Eliminar tu cuenta y datos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Exportar tus datos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Limitar el procesamiento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">•</span>
                    <span>Presentar quejas</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-400 mb-4">📞 Contacto de Privacidad</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Para cualquier consulta sobre privacidad o para ejercer tus derechos:
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Oficial de Protección de Datos:</strong> dpo@garbotgpt.com</p>
                  <p><strong>Consultas Generales:</strong> privacy@garbotgpt.com</p>
                  <p><strong>Respuesta Garantizada:</strong> 72 horas máximo</p>
                  <p><strong>Chat en Vivo:</strong> Disponible 24/7 en nuestra plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Tools */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Herramientas de Privacidad
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Controla tu privacidad con nuestras herramientas avanzadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Panel de Privacidad',
                  description: 'Gestiona todas tus configuraciones de privacidad',
                  icon: '⚙️',
                  link: '/configuracion/privacidad',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Exportar Datos',
                  description: 'Descarga todos tus datos en formato estándar',
                  icon: '📥',
                  link: '/configuracion/exportar',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Eliminar Cuenta',
                  description: 'Elimina permanentemente tu cuenta y datos',
                  icon: '🗑️',
                  link: '/configuracion/eliminar',
                  color: 'from-red-500 to-pink-500'
                },
                {
                  title: 'Historial de Acceso',
                  description: 'Ve quién y cuándo accedió a tus datos',
                  icon: '📊',
                  link: '/configuracion/historial',
                  color: 'from-purple-500 to-indigo-500'
                }
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}>
                    {tool.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {tool.description}
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

export default Privacidad;
