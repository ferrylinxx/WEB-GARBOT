import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: `${post.title} | Blog GarBotGPT`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://garbotgpt.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Schema.org Article para SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://garbotgpt.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GarBotGPT',
      logo: {
        '@type': 'ImageObject',
        url: 'https://garbotgpt.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://garbotgpt.com/blog/${slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content?.split(' ').length || 0,
  }

  return (
    <main className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <article className="relative px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900" 
              style={{ 
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
             style={{ 
               fontWeight: 400,
               letterSpacing: '-0.01em'
             }}>
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{post.readTime} de lectura</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full glass-effect text-sm text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Content */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-blue max-w-none
                       prose-headings:font-bold prose-headings:tracking-tight
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:my-6 prose-li:my-2
                       prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                       prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-10 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              ¿Listo para probar GarBotGPT?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experimenta el poder de la IA de forma completamente gratuita
            </p>
            <a
              href="https://ia.garbotgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Comenzar Gratis
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

