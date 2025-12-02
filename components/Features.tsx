'use client'

import GlassCard3D from './GlassCard3D'

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Generación de texto',
      description: 'En múltiples idiomas con contexto avanzado'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Análisis de documentos',
      description: 'PDF, Word y resumen automático'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Creación de imágenes',
      description: 'Generación y análisis visual por IA'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Generación de videos',
      description: 'Crea videos con IA de forma automática'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Generación de código',
      description: 'Webs completas y múltiples lenguajes'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Exportación',
      description: 'PDF, Word, CSV, Markdown y más'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Búsqueda web',
      description: 'Resumen con fuentes verificadas'
    }
  ]

  return (
    <section
      id="caracteristicas"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative"
      aria-labelledby="features-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto">
        {/* Apple-style heading - Responsive - SEO */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 tracking-tight text-gray-900 px-2"
            style={{ letterSpacing: '-0.015em' }}
            itemProp="name"
          >
            Características de GarBotGPT - Potencia sin Límites
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-normal px-4"
            style={{ letterSpacing: '-0.01em' }}
            itemProp="description"
          >
            Todo lo que necesitas para crear, analizar y automatizar con inteligencia artificial.
          </p>
        </header>

        {/* Features grid - Apple style con efectos 3D - Responsive - SEO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" role="list">
          {features.map((feature, index) => (
            <article
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              role="listitem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <GlassCard3D
                className="glass-effect p-6 sm:p-8 rounded-2xl sm:rounded-3xl light-refraction dynamic-reflection h-full"
                intensity={0.8}
              >
                <div className="text-blue-600 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 tracking-tight text-gray-900"
                  style={{ letterSpacing: '-0.01em' }}
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
                  itemProp="description"
                >
                  {feature.description}
                </p>
              </GlassCard3D>
            </article>
          ))}
        </div>

        {/* CTA - Responsive */}
        <div className="mt-12 sm:mt-16 text-center px-4">

        </div>
      </div>
    </section>
  )
}
