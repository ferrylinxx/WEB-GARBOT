'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// ID de AdSense
const ADSENSE_ID = 'ca-pub-6269718356198501'

// Componente para cargar AdSense globalmente
export function GoogleAdsenseScript() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  )
}

// Props para los diferentes tipos de anuncios
interface AdUnitProps {
  slot: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

// Anuncio Display estándar
export function AdBanner({ slot, format = 'auto', responsive = true, className = '', style }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

// Anuncio In-Article (entre párrafos)
export function AdInArticle({ slot, className = '' }: { slot: string; className?: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-in-article my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
      />
    </div>
  )
}

// Anuncio Multiplex (grid de anuncios)
export function AdMultiplex({ slot, className = '' }: { slot: string; className?: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-multiplex my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
      />
    </div>
  )
}

// Anuncio fijo en footer (sticky)
export function AdStickyFooter({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', height: '90px' }}
          data-ad-client={ADSENSE_ID}
          data-ad-slot={slot}
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}

// Anuncio lateral (sidebar)
export function AdSidebar({ slot, className = '' }: { slot: string; className?: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-sidebar sticky top-24 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '250px' }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      />
    </div>
  )
}

