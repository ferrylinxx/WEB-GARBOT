'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, TechStartup',
      company: 'Barcelona',
      image: '/testimonials/maria.jpg',
      content: 'GarBotGPT ha transformado completamente nuestra forma de trabajar. Lo que antes nos tomaba días, ahora lo hacemos en horas. La generación de contenido y análisis de datos son increíbles.',
      rating: 5,
      highlight: 'Ahorro de 20 horas semanales'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Desarrollador Full Stack',
      company: 'Madrid',
      image: '/testimonials/carlos.jpg',
      content: 'Como desarrollador, GarBotGPT es mi copiloto perfecto. Me ayuda con código, debugging, documentación y hasta con ideas de arquitectura. Es como tener un senior developer disponible 24/7.',
      rating: 5,
      highlight: '3x más productivo'
    },
    {
      name: 'Ana Martínez',
      role: 'Marketing Manager',
      company: 'Valencia',
      image: '/testimonials/ana.jpg',
      content: 'Gestiono campañas para 15 clientes y GarBotGPT es esencial. Genera copy, imágenes, videos y analiza métricas. Mi equipo ha duplicado su output sin aumentar el estrés.',
      rating: 5,
      highlight: '2x más campañas'
    },
    {
      name: 'David López',
      role: 'Freelance Writer',
      company: 'Sevilla',
      image: '/testimonials/david.jpg',
      content: 'Escribo artículos para múltiples blogs y GarBotGPT me ayuda con investigación, estructura y primeros borradores. Puedo enfocarme en la creatividad mientras la IA maneja lo repetitivo.',
      rating: 5,
      highlight: '5x más artículos'
    },
    {
      name: 'Laura Sánchez',
      role: 'Estudiante de Medicina',
      company: 'Bilbao',
      image: '/testimonials/laura.jpg',
      content: 'GarBotGPT me ayuda a resumir papers médicos, preparar presentaciones y estudiar para exámenes. Es como tener un tutor personal que nunca se cansa.',
      rating: 5,
      highlight: 'Notas mejoradas 40%'
    },
    {
      name: 'Roberto Fernández',
      role: 'Consultor de Negocios',
      company: 'Zaragoza',
      image: '/testimonials/roberto.jpg',
      content: 'Uso GarBotGPT para análisis de mercado, creación de propuestas y presentaciones para clientes. La calidad es profesional y el tiempo ahorrado es invaluable.',
      rating: 5,
      highlight: '10+ clientes más'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm font-semibold text-orange-600 border border-orange-500/30">
              ⭐ 4.8/5 de 12,500+ reseñas
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900"
              style={{ letterSpacing: '-0.02em' }}>
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de profesionales ya están multiplicando su productividad con GarBotGPT
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="glass-effect p-8 md:p-12 rounded-3xl mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {testimonials[activeIndex].name.charAt(0)}
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-3">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[activeIndex].role}</div>
                  <div className="text-xs text-gray-500">{testimonials[activeIndex].company}</div>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {testimonials[activeIndex].highlight}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial selector */}
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                  : 'glass-effect text-gray-700 hover:scale-105'
              }`}
            >
              {testimonial.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Únete a miles de profesionales que ya están transformando su forma de trabajar
          </p>
          <a
            href="https://ia.garbotgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Comenzar Gratis Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

