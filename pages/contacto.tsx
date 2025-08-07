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

const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        type: 'general'
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Contáctanos por email',
      value: 'hola@garbotgpt.com',
      action: 'mailto:hola@garbotgpt.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      title: 'Chat en Vivo',
      description: 'Habla con nuestro equipo',
      value: 'Disponible 24/7',
      action: 'https://ia.garbotgpt.com/auth?redirect=%2F',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Mensaje directo',
      value: '+34 900 123 456',
      action: 'https://wa.me/34900123456',
      color: 'from-green-600 to-green-500'
    },
    {
      icon: '🏢',
      title: 'Oficina',
      description: 'Visítanos en Madrid',
      value: 'Calle Serrano 123, Madrid',
      action: 'https://maps.google.com',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqs = [
    {
      question: '¿Cómo puedo empezar a usar GarBotGPT?',
      answer: 'Simplemente regístrate en nuestra plataforma y comienza a chatear inmediatamente. Ofrecemos una prueba gratuita sin necesidad de tarjeta de crédito.'
    },
    {
      question: '¿Qué hace diferente a GarBotGPT?',
      answer: 'Nuestra IA tiene comprensión contextual superior, respuestas en menos de 1 segundo y se adapta a tu estilo de comunicación único.'
    },
    {
      question: '¿Ofrecen soporte técnico?',
      answer: 'Sí, tenemos soporte 24/7 a través de chat, email y WhatsApp. Nuestro equipo técnico está siempre disponible para ayudarte.'
    },
    {
      question: '¿Puedo integrar GarBotGPT en mi empresa?',
      answer: 'Absolutamente. Ofrecemos soluciones empresariales con API, integraciones personalizadas y soporte dedicado.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contacto - GarBotGPT | Habla con Nuestro Equipo de Expertos en IA"
        description="¿Tienes preguntas sobre GarBotGPT? Contacta con nuestro equipo de expertos. Soporte 24/7, chat en vivo, email y WhatsApp. Respuesta garantizada en menos de 2 horas."
        keywords="contacto GarBotGPT, soporte IA, ayuda chatbot, contactar equipo, soporte técnico IA, consultas GarBotGPT"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 sm:px-12 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/30 dark:to-purple-950/20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                <span className="block mb-4">Hablemos del</span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Futuro
                </span>
                <span className="block mt-4">de la IA</span>
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Nuestro equipo de expertos está aquí para ayudarte. 
                <span className="font-bold text-indigo-600 dark:text-indigo-400"> Respuesta garantizada en menos de 2 horas</span>
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                  <div className="text-slate-600 dark:text-slate-400">Soporte Disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt;2h</div>
                  <div className="text-slate-600 dark:text-slate-400">Tiempo de Respuesta</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">98%</div>
                  <div className="text-slate-600 dark:text-slate-400">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">50+</div>
                  <div className="text-slate-600 dark:text-slate-400">Idiomas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 sm:px-12 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Múltiples Formas de <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contactarnos</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Elige el método que prefieras. Estamos aquí para ayudarte en cada paso de tu viaje con la IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800 dark:to-indigo-950/30 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">{method.description}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 sm:px-12 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Envíanos un <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mensaje</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Cuéntanos cómo podemos ayudarte. Nuestro equipo te responderá lo antes posible
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-300">¡Mensaje Enviado!</h3>
                      <p className="text-green-600 dark:text-green-400">Te responderemos en menos de 2 horas.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Tipo de Consulta
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="general">Consulta General</option>
                      <option value="technical">Soporte Técnico</option>
                      <option value="business">Soluciones Empresariales</option>
                      <option value="partnership">Alianzas</option>
                      <option value="press">Prensa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 sm:px-12 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Preguntas <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Frecuentes</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Respuestas rápidas a las preguntas más comunes sobre GarBotGPT
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                ¿No encuentras la respuesta que buscas?
              </p>
              <a
                href="https://ia.garbotgpt.com/auth?redirect=%2F"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Habla con Nuestro Chat IA
              </a>
            </div>
          </div>
        </section>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default Contacto;
