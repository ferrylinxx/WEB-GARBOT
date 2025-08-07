import Head from 'next/head';
import Script from 'next/script';

const SEOHead = ({
  title = "GarBotGPT - La IA Conversacional Más Avanzada del Mundo | Chat Inteligente 24/7",
  description = "Descubre GarBotGPT, el asistente de IA más avanzado con respuestas en <1s, 96% precisión y comprensión contextual superior. Únete a 50K+ usuarios que ya transformaron su productividad.",
  keywords = "GarBotGPT, inteligencia artificial, chatbot avanzado, IA conversacional, asistente virtual, chat inteligente, productividad IA, respuestas instantáneas, comprensión contextual, IA 24/7, GPT, AI assistant",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://garbotgpt.com"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GarBotGPT",
    "description": description,
    "applicationCategory": "ChatApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200"
    },
    "provider": {
      "@type": "Organization",
      "name": "GarBotGPT",
      "url": canonicalUrl,
      "logo": `${canonicalUrl}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      }
    },
    "featureList": [
      "Conversaciones naturales con IA",
      "Respuestas instantáneas",
      "Comprensión contextual avanzada",
      "Chat inteligente 24/7",
      "Múltiples idiomas",
      "Interfaz intuitiva"
    ]
  };

  return (
    <>
      <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GarBotGPT" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es, en" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="GarBotGPT" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@GarBotGPT" />
      <meta name="twitter:creator" content="@GarBotGPT" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-original.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-original.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-original.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />


      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GarBotGPT" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Tech Street" />
      <meta name="business:contact_data:locality" content="San Francisco" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="94105" />
      <meta name="business:contact_data:country_name" content="USA" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      
      {/* Language Alternatives */}
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}/es`} />
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269718356198501"
        crossOrigin="anonymous"
      ></script>
      </Head>
    </>
  );
};

export default SEOHead;
