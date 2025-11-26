import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Instancia reutilizable de remark (mejora rendimiento)
const remarkProcessor = remark().use(html, { sanitize: false })

const postsDirectory = path.join(process.cwd(), 'content/blog')

// Cache para posts procesados (mejora velocidad)
const postCache = new Map<string, BlogPost>()
const allPostsCache: { data: BlogPost[] | null, timestamp: number } = { data: null, timestamp: 0 }
const CACHE_DURATION = 60000 // 1 minuto en desarrollo

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

export function getAllPosts(): BlogPost[] {
  // Usar cache si está disponible y es reciente
  const now = Date.now()
  if (allPostsCache.data && (now - allPostsCache.timestamp) < CACHE_DURATION) {
    return allPostsCache.data
  }

  // Verificar si el directorio existe
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        readTime: data.readTime,
        author: data.author,
        image: data.image,
        tags: data.tags || [],
      } as BlogPost
    })

  // Ordenar por fecha descendente
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  // Guardar en cache
  allPostsCache.data = sortedPosts
  allPostsCache.timestamp = now

  return sortedPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Verificar cache primero
  if (postCache.has(slug)) {
    return postCache.get(slug)!
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convertir markdown a HTML usando instancia reutilizable
    const processedContent = await remarkProcessor.process(content)
    const contentHtml = processedContent.toString()

    const post = {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      readTime: data.readTime,
      author: data.author,
      image: data.image,
      tags: data.tags || [],
      content: contentHtml,
    }

    // Guardar en cache
    postCache.set(slug, post)

    return post
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = allPosts.map(post => post.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap(post => post.tags)
  return Array.from(new Set(tags))
}

