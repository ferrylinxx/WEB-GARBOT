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

const Documentacion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('getting-started');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'getting-started',
      title: 'Primeros Pasos',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'basic-usage',
      title: 'Uso Básico',
      icon: '💬',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'advanced-features',
      title: 'Características Avanzadas',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'integrations',
      title: 'Integraciones',
      icon: '🔗',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: '🔧',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'troubleshooting',
      title: 'Solución de Problemas',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const documentation = {
    'getting-started': {
      title: 'Primeros Pasos con GarBotGPT',
      content: [
        {
          subtitle: '1. Crear tu Cuenta',
          text: 'Regístrate en GarBotGPT con tu email o cuenta de Google/GitHub. El proceso toma menos de 30 segundos.',
          code: null
        },
        {
          subtitle: '2. Configuración Inicial',
          text: 'Personaliza tu perfil y preferencias para obtener respuestas más precisas y relevantes.',
          code: null
        },
        {
          subtitle: '3. Tu Primera Conversación',
          text: 'Simplemente escribe tu pregunta o solicitud. GarBotGPT entiende lenguaje natural perfectamente.',
          code: `// Ejemplo de primera conversación
Usuario: "Hola, ¿puedes ayudarme a escribir un email profesional?"
GarBotGPT: "¡Por supuesto! Me encantaría ayudarte. ¿Podrías contarme más detalles sobre el email que necesitas escribir? Por ejemplo:
- ¿A quién va dirigido?
- ¿Cuál es el propósito?
- ¿Qué tono prefieres (formal, amigable, etc.)?"`
        }
      ]
    },
    'basic-usage': {
      title: 'Uso Básico de GarBotGPT',
      content: [
        {
          subtitle: 'Tipos de Conversación',
          text: 'GarBotGPT puede ayudarte con múltiples tipos de tareas: escritura, análisis, programación, creatividad, educación y más.',
          code: null
        },
        {
          subtitle: 'Comandos Básicos',
          text: 'Usa comandos naturales para obtener mejores resultados.',
          code: `// Ejemplos de comandos efectivos
"Explícame como si tuviera 5 años..."
"Hazme un resumen de..."
"Ayúdame a mejorar este texto..."
"Genera 5 ideas para..."
"Analiza este código y encuentra errores..."`
        },
        {
          subtitle: 'Contexto y Memoria',
          text: 'GarBotGPT recuerda el contexto de tu conversación. Puedes hacer referencias a mensajes anteriores.',
          code: null
        }
      ]
    },
    'advanced-features': {
      title: 'Características Avanzadas',
      content: [
        {
          subtitle: 'Personalización de Personalidad',
          text: 'Ajusta el tono, estilo y personalidad de GarBotGPT según tus preferencias.',
          code: `// Configuración de personalidad
{
  "tone": "professional", // casual, professional, friendly, formal
  "expertise_level": "expert", // beginner, intermediate, expert
  "response_length": "detailed", // brief, balanced, detailed
  "creativity": "high" // low, medium, high
}`
        },
        {
          subtitle: 'Análisis de Documentos',
          text: 'Sube documentos PDF, Word, o texto plano para análisis inteligente.',
          code: null
        },
        {
          subtitle: 'Generación de Código',
          text: 'GarBotGPT puede generar, revisar y optimizar código en más de 50 lenguajes de programación.',
          code: `// Ejemplo: Generar una función Python
Usuario: "Crea una función que calcule el factorial de un número"

GarBotGPT:
def factorial(n):
    """
    Calcula el factorial de un número entero positivo.
    
    Args:
        n (int): Número entero positivo
    
    Returns:
        int: Factorial de n
    """
    if n < 0:
        raise ValueError("El factorial no está definido para números negativos")
    elif n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)`
        }
      ]
    },
    'integrations': {
      title: 'Integraciones Disponibles',
      content: [
        {
          subtitle: 'Slack Integration',
          text: 'Integra GarBotGPT directamente en tu workspace de Slack para colaboración en equipo.',
          code: `// Configuración Slack
/garbotgpt setup
/garbotgpt ask "¿Cómo optimizar nuestro proceso de desarrollo?"`
        },
        {
          subtitle: 'Discord Bot',
          text: 'Añade GarBotGPT a tu servidor de Discord para asistencia 24/7.',
          code: null
        },
        {
          subtitle: 'API REST',
          text: 'Integra GarBotGPT en tus aplicaciones usando nuestra API REST.',
          code: `// Ejemplo API REST
POST https://api.garbotgpt.com/v1/chat
{
  "message": "Hola, ¿cómo estás?",
  "user_id": "user123",
  "context": "previous_conversation_id"
}`
        }
      ]
    },
    'api-reference': {
      title: 'Referencia de API',
      content: [
        {
          subtitle: 'Autenticación',
          text: 'Todas las llamadas a la API requieren autenticación mediante API Key.',
          code: `// Headers requeridos
{
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}`
        },
        {
          subtitle: 'Endpoints Principales',
          text: 'Los endpoints más utilizados de nuestra API.',
          code: `// Chat Endpoint
POST /v1/chat
{
  "message": "string",
  "user_id": "string",
  "context": "string (optional)",
  "settings": {
    "temperature": 0.7,
    "max_tokens": 1000
  }
}

// Response
{
  "response": "string",
  "conversation_id": "string",
  "tokens_used": 150,
  "response_time": 0.2
}`
        },
        {
          subtitle: 'Rate Limits',
          text: 'Límites de uso por plan de suscripción.',
          code: `// Rate Limits
Explorador: 50 requests/hour
Profesional: 1000 requests/hour
Empresarial: 10000 requests/hour
Enterprise: Unlimited`
        }
      ]
    },
    'troubleshooting': {
      title: 'Solución de Problemas Comunes',
      content: [
        {
          subtitle: 'Respuestas Lentas',
          text: 'Si experimentas respuestas lentas, verifica tu conexión a internet y el estado de nuestros servidores.',
          code: null
        },
        {
          subtitle: 'Errores de API',
          text: 'Los códigos de error más comunes y sus soluciones.',
          code: `// Códigos de Error Comunes
400 - Bad Request: Verifica el formato de tu solicitud
401 - Unauthorized: API Key inválida o expirada
429 - Rate Limited: Has excedido tu límite de requests
500 - Server Error: Error temporal del servidor

// Ejemplo de manejo de errores
try {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + apiKey },
    body: JSON.stringify({ message: 'Hola' })
  });
  
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
  }
  
  const data = await response.json();
} catch (error) {
  console.error('Error:', error.message);
}`
        },
        {
          subtitle: 'Contactar Soporte',
          text: 'Si el problema persiste, contacta a nuestro equipo de soporte técnico.',
          code: null
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Documentación - GarBotGPT | Guías y Referencias Técnicas"
        description="Documentación completa de GarBotGPT: guías de inicio, API reference, integraciones y solución de problemas. Todo lo que necesitas para dominar tu IA."
        keywords="documentación GarBotGPT, API reference, guías IA, integración chatbot, tutorial GarBotGPT"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
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
                <span className="block mb-4">Documentación</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Completa
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Todo lo que necesitas saber para dominar GarBotGPT y aprovechar al máximo su potencial
              </p>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h3 className="text-xl font-bold text-white mb-6">Secciones</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeSection === section.id
                            ? `bg-gradient-to-r ${section.color} text-white`
                            : 'text-slate-300 hover:bg-slate-800/50'
                        }`}
                      >
                        <span className="text-xl">{section.icon}</span>
                        <span className="font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h2 className="text-4xl font-bold text-white mb-8">
                    {documentation[activeSection].title}
                  </h2>

                  <div className="space-y-8">
                    {documentation[activeSection].content.map((item, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white">
                          {item.subtitle}
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {item.text}
                        </p>
                        {item.code && (
                          <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
                            <pre className="text-sm text-slate-300">
                              <code>{item.code}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Enlaces Rápidos
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Accesos directos a los recursos más utilizados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'API Playground',
                  description: 'Prueba nuestra API en tiempo real',
                  icon: '🎮',
                  link: '/api-playground',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Ejemplos de Código',
                  description: 'Repositorio con ejemplos prácticos',
                  icon: '💻',
                  link: '/ejemplos',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Status Page',
                  description: 'Estado en tiempo real de nuestros servicios',
                  icon: '📊',
                  link: '/status',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Comunidad',
                  description: 'Únete a nuestra comunidad de desarrolladores',
                  icon: '👥',
                  link: '/comunidad',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 bg-gradient-to-r ${link.color} bg-clip-text text-transparent`}>
                    {link.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              ¿Necesitas Ayuda Adicional?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Nuestro equipo de soporte técnico está disponible 24/7 para ayudarte
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/faq"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                Ver FAQ
              </a>
              <a
                href="/contacto"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 border border-white/30"
              >
                Contactar Soporte
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Documentacion;
