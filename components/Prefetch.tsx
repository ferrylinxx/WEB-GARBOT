'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Prefetch() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch páginas importantes después de 2 segundos
    const timer = setTimeout(() => {
      router.prefetch('/blog')
      router.prefetch('/caracteristicas')
      router.prefetch('/precios')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return null
}

