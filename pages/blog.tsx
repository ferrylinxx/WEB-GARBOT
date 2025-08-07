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

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'ai-news', name: 'Noticias IA', count: 4 },
    { id: 'tutorials', name: 'Tutoriales', count: 3 },
    { id: 'case-studies', name: 'Casos de Estudio', count: 2 },
    { id: 'tech-insights', name: 'Insights Técnicos', count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'El Futuro de la IA Conversacional: Más Allá de ChatGPT',
      excerpt: 'Exploramos las próximas fronteras de la inteligencia artificial conversacional y cómo GarBotGPT está liderando esta revolución.',
      author: 'Dr. Elena Martínez',
      date: '15 Enero 2025',
      readTime: '8 min',
      category: 'ai-news',
      image: '🚀',
      featured: true,
      tags: ['IA', 'Futuro', 'Tecnología']
    },
    {
      id: 2,
      title: 'Cómo Integrar GarBotGPT en tu Flujo de Trabajo',
      excerpt: 'Guía completa para maximizar tu productividad integrando GarBotGPT en tus herramientas diarias de trabajo.',
      author: 'Carlos Rodríguez',
      date: '12 Enero 2025',
      readTime: '12 min',
      category: 'tutorials',
      image: '⚡',
      featured: false,
      tags: ['Productividad', 'Integración', 'Workflow']
    },
    {
      id: 3,
      title: 'Caso de Estudio: Startup Aumenta Ventas 300% con IA',
      excerpt: 'Descubre cómo una startup tecnológica triplicó sus ventas implementando GarBotGPT en su estrategia de marketing.',
      author: 'Ana García',
      date: '10 Enero 2025',
      readTime: '6 min',
      category: 'case-studies',
      image: '📈',
      featured: true,
      tags: ['Ventas', 'Marketing', 'Éxito']
    },
    {
      id: 4,
      title: 'La Arquitectura Detrás de GarBotGPT: Deep Dive Técnico',
      excerpt: 'Un análisis profundo de la arquitectura neural y los algoritmos que hacen posible la magia de GarBotGPT.',
      author: 'Miguel Torres',
      date: '8 Enero 2025',
      readTime: '15 min',
      category: 'tech-insights',
      image: '🧠',
      featured: false,
      tags: ['Arquitectura', 'Neural Networks', 'Algoritmos']
    },
    {
      id: 5,
      title: '10 Prompts Avanzados para Maximizar tu IA',
      excerpt: 'Técnicas avanzadas de prompting que transformarán la calidad de tus interacciones con GarBotGPT.',
      author: 'Sofia Chen',
      date: '5 Enero 2025',
      readTime: '10 min',
      category: 'tutorials',
      image: '💡',
      featured: false,
      tags: ['Prompts', 'Técnicas', 'Optimización']
    },
    {
      id: 6,
      title: 'IA Ética: Nuestro Compromiso con la Responsabilidad',
      excerpt: 'Exploramos nuestro enfoque hacia el desarrollo ético de IA y las medidas que tomamos para garantizar un futuro responsable.',
      author: 'Dr. Elena Martínez',
      date: '3 Enero 2025',
      readTime: '7 min',
      category: 'ai-news',
      image: '🛡️',
      featured: true,
      tags: ['Ética', 'Responsabilidad', 'Futuro']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <SEOHead 
        title="Blog - GarBotGPT | Insights, Tutoriales y Noticias de IA"
        description="Mantente al día con las últimas noticias, tutoriales y insights sobre inteligencia artificial. Blog oficial de GarBotGPT con contenido experto."
        keywords="blog GarBotGPT, noticias IA, tutoriales inteligencia artificial, insights tecnología, casos de estudio IA"
      />
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-black text-white`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 40 }).map((_, i) => (
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
                <span className="block mb-4">Blog</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  GarBotGPT
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Insights, tutoriales y las últimas noticias del mundo de la inteligencia artificial
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 px-6 bg-black relative">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  Destacado
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{featuredPost.image}</div>
                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <span className="text-slate-400">Por {featuredPost.author}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{featuredPost.date}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{featuredPost.readTime} lectura</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`/blog/${featuredPost.id}`}
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Leer Artículo
                    </a>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center">
                      <div className="text-9xl mb-4">{featuredPost.image}</div>
                      <div className="text-2xl font-bold text-white">Artículo Destacado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-6 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article
                  key={post.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                  >
                    Leer más
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Mantente Actualizado
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Recibe los últimos insights sobre IA directamente en tu inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Blog;
