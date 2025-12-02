'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'
import { getAllPosts, getAllCategories } from '@/lib/blog'

gsap.registerPlugin(ScrollTrigger)

const categoryGradients: Record<string, string> = {
  'Tecnología': 'from-blue-500 to-cyan-500',
  'Productividad': 'from-purple-500 to-pink-500',
  'Seguridad': 'from-green-500 to-emerald-500',
  'Casos de Uso': 'from-yellow-500 to-orange-500',
  'Guías': 'from-indigo-500 to-purple-500'
}

const categoryIcons: Record<string, string> = {
  'Tecnología': '💻',
  'Productividad': '⚡',
  'Seguridad': '🔒',
  'Casos de Uso': '💡',
  'Guías': '📚'
}

export default function BlogPage() {
  const articles = getAllPosts()
  const categories = getAllCategories()
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const featuredRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [email, setEmail] = useState('')

  const filteredArticles = activeCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ===== HERO MAGICAL ENTRANCE =====
      const heroTl = gsap.timeline()

      // Floating book/article particles
      gsap.to('.blog-particle', {
        y: 'random(-80, 80)',
        x: 'random(-50, 50)',
        rotation: 'random(-180, 180)',
        scale: 'random(0.6, 1.4)',
        duration: 'random(5, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 3, from: 'random' }
      })

      // Pulsing background orbs
      gsap.to('.blog-glow', {
        scale: 1.4,
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 1
      })

      // Badge with elastic pop
      heroTl.fromTo('.blog-badge',
        { y: -70, opacity: 0, scale: 0.2, filter: 'blur(15px)', rotation: -10 },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' }
      )

      // Title with split reveal
      heroTl.fromTo('.blog-title',
        { y: 120, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', scale: 0.85 },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.3, ease: 'expo.out' },
        '-=0.8'
      )

      // Subtitle wave in
      heroTl.fromTo('.blog-subtitle',
        { y: 60, opacity: 0, letterSpacing: '8px' },
        { y: 0, opacity: 1, letterSpacing: 'normal', duration: 1, ease: 'power4.out' },
        '-=0.6'
      )

      // ===== FEATURED ARTICLE - CINEMATIC REVEAL =====
      if (featuredRef.current) {
        const featuredTl = gsap.timeline({
          scrollTrigger: { trigger: featuredRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        })

        featuredTl.fromTo(featuredRef.current,
          {
            y: 120,
            opacity: 0,
            scale: 0.85,
            rotateX: -20,
            transformPerspective: 1000,
            filter: 'blur(10px)'
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1.4,
            ease: 'expo.out'
          }
        )

        // Inner content stagger
        const featuredContent = featuredRef.current.querySelectorAll('h2, p, span')
        featuredTl.fromTo(featuredContent,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.7'
        )
      }

      // ===== ARTICLE CARDS - MASONRY WAVE =====
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        const row = Math.floor(i / 3)
        const col = i % 3

        const cardTl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' }
        })

        // 3D perspective entrance
        cardTl.fromTo(card,
          {
            y: 100,
            x: (col - 1) * 30,
            opacity: 0,
            scale: 0.8,
            rotateX: -30,
            rotateY: (col - 1) * 10,
            transformPerspective: 800,
            filter: 'blur(5px)'
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            delay: row * 0.08 + col * 0.1,
            ease: 'expo.out'
          }
        )

        // Image reveal
        const cardImage = card.querySelector('.card-image')
        if (cardImage) {
          cardTl.fromTo(cardImage,
            { scale: 1.3, filter: 'brightness(0.5)' },
            { scale: 1, filter: 'brightness(1)', duration: 0.8, ease: 'power2.out' },
            '-=0.8'
          )
        }
      })

      // ===== NEWSLETTER - EPIC FINALE =====
      if (newsletterRef.current) {
        const nlTl = gsap.timeline({
          scrollTrigger: { trigger: newsletterRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        })

        // Container zoom reveal
        nlTl.fromTo(newsletterRef.current,
          { y: 100, opacity: 0, scale: 0.8, rotateX: 15 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.3, ease: 'expo.out' }
        )

        // Inner elements pop
        const nlElements = newsletterRef.current.querySelectorAll('h2, p, input, button')
        nlTl.fromTo(nlElements,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
          '-=0.6'
        )

        // Pulsing glow
        gsap.to('.newsletter-glow', {
          scale: 1.3,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: 'power2.out'
        })
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <NavbarGTA />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="blog-particle absolute text-xl opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {['📚', '✍️', '💡', '🔮', '📰', '🎯'][i % 6]}
            </div>
          ))}
        </div>
        {/* Glowing Orbs */}
        <div className="absolute inset-0">
          <div className="blog-glow absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[180px]" />
          <div className="blog-glow absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
          <div className="blog-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="blog-badge inline-block mb-8">
            <span className="px-8 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full text-sm font-bold text-indigo-400 border border-indigo-500/40 shadow-lg shadow-indigo-500/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Últimas Publicaciones
            </span>
          </div>
          <h1 className="blog-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-white">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Blog</span>
          </h1>
          <p className="blog-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Noticias, tutoriales y actualizaciones sobre IA y tecnología
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {articles.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div ref={featuredRef} className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Link href={`/blog/${articles[0].slug}`} className="flex flex-col md:flex-row">
                <div className={`h-64 md:h-auto md:w-1/2 bg-gradient-to-br ${categoryGradients[articles[0].category] || 'from-indigo-500 to-purple-500'} flex items-center justify-center text-8xl`}>
                  {categoryIcons[articles[0].category] || '📝'}
                </div>
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-xs font-bold text-indigo-400 w-fit mb-4">
                    DESTACADO
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-white/60 mb-6 line-clamp-3">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span>{articles[0].category}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                    <span>•</span>
                    <span>{new Date(articles[0].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setActiveCategory('Todos')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 ${
              activeCategory === 'Todos'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:scale-105 ${
                activeCategory === cat
                  ? `bg-gradient-to-r ${categoryGradients[cat]} text-white shadow-lg`
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.slice(1).map((article, index) => {
              const gradient = categoryGradients[article.category] || 'from-gray-500 to-gray-600'
              const icon = categoryIcons[article.category] || '📄'
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  ref={el => { cardsRef.current[index] = el }}
                  className="group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/10"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                    {icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent uppercase`}>
                        {article.category}
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-xs text-white/40">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-white/30">
                        {new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Leer artículo →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div ref={newsletterRef} className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-indigo-600/30 to-purple-500/30 blur-[120px]" />

            <div className="relative z-10">
              <div className="text-6xl mb-6">📬</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                No te pierdas <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">nada</span>
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Suscríbete para recibir las últimas noticias y tutoriales sobre IA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30">
                  Suscribirse
                </button>
              </div>
              <p className="mt-4 text-sm text-white/40">
                Sin spam • Cancelar cuando quieras
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

