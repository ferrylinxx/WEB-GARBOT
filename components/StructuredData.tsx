export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GarBotGPT',
    url: 'https://garbotgpt.com',
    logo: 'https://garbotgpt.com/logo.png',
    description: 'Asistente de inteligencia artificial disponible 24/7',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'garbotgpt@garbotgpt.com',
      contactType: 'Customer Service',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://twitter.com/garbotgpt',
      'https://facebook.com/garbotgpt',
      'https://linkedin.com/company/garbotgpt',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GarBotGPT',
    url: 'https://garbotgpt.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://garbotgpt.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'GarBotGPT',
    description: 'Asistente de inteligencia artificial para generar texto, analizar documentos, crear imágenes y automatizar tareas',
    brand: {
      '@type': 'Brand',
      name: 'GarBotGPT',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://garbotgpt.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es GarBotGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GarBotGPT es un asistente de inteligencia artificial disponible 24/7 que puede generar texto en múltiples idiomas, analizar documentos PDF y Word, crear imágenes con IA, generar código y automatizar tareas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿GarBotGPT es gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, GarBotGPT ofrece una versión gratuita con acceso a múltiples funcionalidades de inteligencia artificial.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué puede hacer GarBotGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GarBotGPT puede generar texto en múltiples idiomas, analizar documentos PDF y Word, crear imágenes con IA, generar código en múltiples lenguajes, realizar búsquedas web inteligentes y exportar contenido en formatos como PDF, Word, CSV y Markdown.',
        },
      },
      {
        '@type': 'Question',
        name: '¿GarBotGPT está disponible 24/7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, GarBotGPT está disponible las 24 horas del día, los 7 días de la semana para ayudarte con tus tareas de inteligencia artificial.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En qué idiomas funciona GarBotGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GarBotGPT puede generar texto y comunicarse en múltiples idiomas, incluyendo español, inglés, francés, alemán, italiano, portugués y muchos más.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://garbotgpt.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Características',
        item: 'https://garbotgpt.com/caracteristicas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Blog',
        item: 'https://garbotgpt.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contacto',
        item: 'https://garbotgpt.com/contacto',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

