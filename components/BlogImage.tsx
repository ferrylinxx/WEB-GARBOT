'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function BlogImage({ 
  src, 
  alt, 
  caption, 
  width = 1200, 
  height = 675,
  priority = false 
}: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        {/* Blur placeholder */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        )}
        
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          quality={90}
          className={`w-full h-auto transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

