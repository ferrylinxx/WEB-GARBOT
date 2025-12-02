'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

function BreadcrumbsContent() {
  const pathname = usePathname()

  // No mostrar breadcrumbs en la home
  if (pathname === '/') return null

  // Generar breadcrumbs desde la ruta
  const pathSegments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', href: '/' },
  ]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Formatear el label (capitalizar y reemplazar guiones)
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    // Nombres personalizados para rutas específicas
    const customLabels: Record<string, string> = {
      'caracteristicas': 'Características',
      'precios': 'Precios',
      'comparativa': 'Comparativa',
      'blog': 'Blog',
      'changelog': 'Changelog',
      'roadmap': 'Roadmap',
      'contacto': 'Contacto',
      'politicas': 'Políticas',
      'privacidad': 'Privacidad',
      'terminos': 'Términos y Condiciones',
      'cookies': 'Política de Cookies',
    }

    if (customLabels[segment]) {
      label = customLabels[segment]
    }

    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  // Schema.org JSON-LD para breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://garbotgpt.com${crumb.href}`,
    })),
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs visuales */}
      <nav aria-label="Breadcrumb" className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1

              return (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-4 h-4 mx-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  
                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default function Breadcrumbs() {
  return (
    <Suspense fallback={null}>
      <BreadcrumbsContent />
    </Suspense>
  )
}

