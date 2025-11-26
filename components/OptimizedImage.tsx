'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  quality = 85
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Generar blur placeholder simple
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f0f0f0" offset="20%" />
          <stop stop-color="#e0e0e0" offset="50%" />
          <stop stop-color="#f0f0f0" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f0f0f0" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width || 700, height || 475))}`

  // Determinar la ruta de la imagen optimizada
  const getOptimizedSrc = () => {
    // Si es logo.png, usar la versión optimizada
    if (src === '/logo.png') {
      return '/optimized/logo.webp'
    }
    return src
  }

  const optimizedSrc = getOptimizedSrc()

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}

