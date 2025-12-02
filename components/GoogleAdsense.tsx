import Script from 'next/script'

// Google AdSense - Anuncios Automáticos
// ID: ca-pub-6269718356198501
export default function GoogleAdsense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269718356198501"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

