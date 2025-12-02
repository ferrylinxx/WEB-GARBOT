// Blog posts estáticos para evitar problemas con fs en cliente
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  author: string
  image: string
  tags: string[]
  content?: string
}

// Posts hardcodeados para SSG/cliente
const staticPosts: BlogPost[] = [
  {
    slug: 'introduccion-ia-generativa',
    title: 'Introducción a la IA Generativa: El Futuro de la Creatividad',
    excerpt: 'Descubre cómo la inteligencia artificial generativa está transformando la forma en que creamos contenido, desde texto hasta imágenes y videos.',
    date: '2024-11-28',
    category: 'Tecnología',
    readTime: '8 min',
    author: 'GarBotGPT Team',
    image: '/blog/ia-generativa.jpg',
    tags: ['IA', 'Generativa', 'Creatividad', 'Innovación']
  },
  {
    slug: 'guia-productividad-ia',
    title: '10 Formas de Aumentar tu Productividad con IA',
    excerpt: 'Aprende técnicas prácticas para integrar la inteligencia artificial en tu flujo de trabajo diario y multiplicar tu eficiencia.',
    date: '2024-11-25',
    category: 'Productividad',
    readTime: '6 min',
    author: 'GarBotGPT Team',
    image: '/blog/productividad-ia.jpg',
    tags: ['Productividad', 'Tips', 'Automatización', 'Workflow']
  },
  {
    slug: 'seguridad-datos-ia',
    title: 'Seguridad y Privacidad en la Era de la IA',
    excerpt: 'Todo lo que necesitas saber sobre cómo proteger tus datos al usar herramientas de inteligencia artificial.',
    date: '2024-11-20',
    category: 'Seguridad',
    readTime: '7 min',
    author: 'GarBotGPT Team',
    image: '/blog/seguridad-ia.jpg',
    tags: ['Seguridad', 'Privacidad', 'GDPR', 'Datos']
  },
  {
    slug: 'casos-uso-empresas',
    title: 'Casos de Uso: Cómo las Empresas Usan GarBotGPT',
    excerpt: 'Historias reales de empresas que han transformado sus operaciones usando nuestra plataforma de IA.',
    date: '2024-11-15',
    category: 'Casos de Uso',
    readTime: '10 min',
    author: 'GarBotGPT Team',
    image: '/blog/casos-uso.jpg',
    tags: ['Empresas', 'Casos de Éxito', 'ROI', 'Implementación']
  },
  {
    slug: 'tutorial-generacion-imagenes',
    title: 'Tutorial: Domina la Generación de Imágenes con IA',
    excerpt: 'Guía paso a paso para crear imágenes profesionales usando GarBotGPT. Desde prompts básicos hasta técnicas avanzadas.',
    date: '2024-11-10',
    category: 'Guías',
    readTime: '12 min',
    author: 'GarBotGPT Team',
    image: '/blog/tutorial-imagenes.jpg',
    tags: ['Tutorial', 'Imágenes', 'Prompts', 'Arte Digital']
  },
  {
    slug: 'futuro-ia-2025',
    title: 'El Futuro de la IA: Tendencias para 2025',
    excerpt: 'Análisis de las principales tendencias que definirán el panorama de la inteligencia artificial en el próximo año.',
    date: '2024-11-05',
    category: 'Tecnología',
    readTime: '9 min',
    author: 'GarBotGPT Team',
    image: '/blog/futuro-ia.jpg',
    tags: ['Tendencias', '2025', 'Predicciones', 'Innovación']
  }
]

export function getAllPosts(): BlogPost[] {
  return staticPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  return staticPosts.find(post => post.slug === slug) || null
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const categories = getAllPosts().map(post => post.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const tags = getAllPosts().flatMap(post => post.tags)
  return Array.from(new Set(tags))
}

