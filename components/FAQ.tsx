'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿GarBotGPT es realmente gratis?',
      answer: 'Sí, GarBotGPT es 100% gratis con acceso completo a todas las funcionalidades principales: generación de texto, imágenes, análisis de documentos, búsqueda web y más. También ofrecemos planes Pro y Enterprise con características adicionales para usuarios avanzados y empresas.'
    },
    {
      question: '¿Qué diferencia a GarBotGPT de ChatGPT, Claude o Gemini?',
      answer: 'GarBotGPT combina lo mejor de múltiples modelos de IA en una sola plataforma. Ofrecemos generación de texto, imágenes Y videos, análisis de documentos en múltiples formatos, búsqueda web en tiempo real, y todo completamente gratis. Además, nuestro enfoque está en la privacidad y cumplimiento con GDPR.'
    },
    {
      question: '¿Mis datos están seguros?',
      answer: 'Absolutamente. Usamos encriptación end-to-end (AES-256), cumplimos con GDPR y CCPA, nuestros servidores están en la UE, y NUNCA usamos tus conversaciones para entrenar modelos. Tu privacidad es nuestra prioridad número uno.'
    },
    {
      question: '¿Puedo usar GarBotGPT para mi negocio?',
      answer: 'Sí, miles de empresas ya usan GarBotGPT para automatización de contenido, atención al cliente, análisis de datos, generación de código y más. Ofrecemos planes Enterprise con SLA, soporte prioritario, API dedicada y características avanzadas.'
    },
    {
      question: '¿Qué formatos de documentos puedo analizar?',
      answer: 'GarBotGPT puede analizar PDF, Word (.doc, .docx), Excel (.xls, .xlsx), PowerPoint (.ppt, .pptx), CSV, TXT y más. Extrae información, genera resúmenes, responde preguntas específicas y compara múltiples documentos.'
    },
    {
      question: '¿Puedo generar imágenes y videos?',
      answer: 'Sí, GarBotGPT incluye generación de imágenes de alta calidad y videos cortos para redes sociales. El plan gratuito incluye 10 imágenes y 5 videos por día. Los planes Pro y Enterprise ofrecen generación ilimitada.'
    },
    {
      question: '¿En qué idiomas funciona GarBotGPT?',
      answer: 'GarBotGPT soporta más de 50 idiomas incluyendo español, inglés, francés, alemán, italiano, portugués, chino, japonés, árabe y muchos más. Puedes cambiar de idioma en cualquier momento durante la conversación.'
    },
    {
      question: '¿Necesito conocimientos técnicos para usar GarBotGPT?',
      answer: 'No, GarBotGPT está diseñado para ser extremadamente intuitivo. Solo necesitas escribir lo que quieres en lenguaje natural, como si hablaras con un asistente humano. No se requieren conocimientos de programación ni configuración compleja.'
    },
    {
      question: '¿Puedo integrar GarBotGPT con otras herramientas?',
      answer: 'Sí, ofrecemos API REST para integrar GarBotGPT en tus aplicaciones, webhooks para automatización, y plugins para herramientas populares como Slack, Discord, WordPress y más. Consulta nuestra documentación para desarrolladores.'
    },
    {
      question: '¿Cómo funciona la búsqueda web en tiempo real?',
      answer: 'GarBotGPT puede acceder a internet para obtener información actualizada, verificar fuentes, buscar noticias recientes y más. Esto significa que no estás limitado a datos de entrenamiento antiguos, sino que obtienes información actual y relevante.'
    },
    {
      question: '¿Hay límites de uso en el plan gratuito?',
      answer: 'El plan gratuito incluye acceso completo a generación de texto ilimitada, 10 imágenes/día, 5 videos/día, análisis de documentos ilimitado y búsqueda web. Los planes Pro y Enterprise eliminan todos los límites y añaden características avanzadas.'
    },
    {
      question: '¿Cómo puedo obtener soporte?',
      answer: 'Ofrecemos soporte por email, chat en vivo (horario laboral), documentación completa, tutoriales en video y una comunidad activa en Discord. Los planes Pro y Enterprise incluyen soporte prioritario 24/7.'
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900"
              style={{ letterSpacing: '-0.02em' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber sobre GarBotGPT
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/30 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-effect p-8 rounded-3xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="px-6 py-3 glass-effect text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Contactar Soporte
            </a>
            <a
              href="/blog"
              className="px-6 py-3 glass-effect text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Ver Tutoriales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

