'use client'

import dynamic from 'next/dynamic'
import StructuredData from '@/components/StructuredData'
import Prefetch from '@/components/Prefetch'
import NavbarGTA from '@/components/NavbarGTA'
import HeroGTA from '@/components/HeroGTA'
import { AdBanner } from '@/components/GoogleAdsense'

// Lazy load components below the fold - GSAP nivel DIOS
const VideoHeroGTA = dynamic(() => import('@/components/VideoHeroGTA'), {
  ssr: false,
  loading: () => null
})
const FeaturesGTA = dynamic(() => import('@/components/FeaturesGTA'), {
  ssr: false,
  loading: () => null
})
const ModelsGTA = dynamic(() => import('@/components/ModelsGTA'), {
  ssr: false,
  loading: () => null
})
const DemoGTA = dynamic(() => import('@/components/DemoGTAv2'), {
  ssr: false,
  loading: () => null
})
const ShowcaseGTA = dynamic(() => import('@/components/ShowcaseGTA'), {
  ssr: false,
  loading: () => null
})
// const StatsGTA = dynamic(() => import('@/components/StatsGTA'), {
//   ssr: false,
//   loading: () => null
// })
const TestimonialsGTA = dynamic(() => import('@/components/TestimonialsGTA'), {
  ssr: false,
  loading: () => null
})
const PricingGTA = dynamic(() => import('@/components/PricingGTA'), {
  ssr: false,
  loading: () => null
})
// const TechStackGTA = dynamic(() => import('@/components/TechStackGTA'), {
//   ssr: false,
//   loading: () => null
// })
const FAQGTA = dynamic(() => import('@/components/FAQGTA'), {
  ssr: false,
  loading: () => null
})
const CTAGTA = dynamic(() => import('@/components/CTAGTA'), {
  ssr: false,
  loading: () => null
})
const FooterGTA = dynamic(() => import('@/components/FooterGTA'), {
  ssr: true,
  loading: () => null
})

export default function Home() {
  return (
    <>
      <StructuredData />
      <Prefetch />
      <main className="min-h-screen bg-black overflow-x-hidden" itemScope itemType="https://schema.org/WebPage">
        <NavbarGTA />
        <HeroGTA />
        <VideoHeroGTA />

        {/* Ad después del hero - Alta visibilidad */}
        <div className="max-w-6xl mx-auto px-4 py-4">
          <AdBanner slot="1234567890" format="horizontal" className="rounded-xl overflow-hidden" />
        </div>

        <FeaturesGTA />
        <ModelsGTA />

        {/* Ad entre secciones principales */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <AdBanner slot="2345678901" format="auto" className="rounded-xl overflow-hidden" />
        </div>

        <DemoGTA />
        <ShowcaseGTA />
        {/* <StatsGTA /> */}
        <TestimonialsGTA />

        {/* Ad antes de precios - Alta conversión */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <AdBanner slot="3456789012" format="auto" className="rounded-xl overflow-hidden" />
        </div>

        <PricingGTA />
        {/* <TechStackGTA /> */}
        <FAQGTA />

        {/* Ad antes del CTA final */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <AdBanner slot="4567890123" format="horizontal" className="rounded-xl overflow-hidden" />
        </div>

        <CTAGTA />
        <FooterGTA />
      </main>
    </>
  )
}

