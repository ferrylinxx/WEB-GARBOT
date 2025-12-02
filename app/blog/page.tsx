'use client'

import { useLayoutEffect, useRef } from 'react'
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        )
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <NavbarGTA />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Noticias, tutoriales y actualizaciones
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
            Todos
          </button>
          {categories.map((cat) => (
            <button key={cat} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white font-medium text-sm transition-all hover:scale-105">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const gradient = categoryGradients[article.category] || 'from-gray-500 to-gray-600'
              const icon = categoryIcons[article.category] || '📄'
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  ref={el => { cardsRef.current[index] = el }}
                  className="group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className={`h-40 bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl`}>
                    {icon}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent uppercase`}>
                        {article.category}
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-xs text-white/40">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30">
                        {new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Leer →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

