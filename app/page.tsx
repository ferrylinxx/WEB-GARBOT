'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import StructuredData from '@/components/StructuredData'
import PremiumBackground from '@/components/PremiumBackground'
import Prefetch from '@/components/Prefetch'

// Lazy load components below the fold with loading optimization
const About = dynamic(() => import('@/components/About'), {
  ssr: true,
  loading: () => null
})
const Stats = dynamic(() => import('@/components/Stats'), {
  ssr: false,
  loading: () => null
})
const Features = dynamic(() => import('@/components/Features'), {
  ssr: false,
  loading: () => null
})
const Services = dynamic(() => import('@/components/Services'), {
  ssr: false,
  loading: () => null
})
const WhyChoose = dynamic(() => import('@/components/WhyChoose'), {
  ssr: false,
  loading: () => null
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
  loading: () => null
})
const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: false,
  loading: () => null
})
const CTA = dynamic(() => import('@/components/CTA'), {
  ssr: false,
  loading: () => null
})
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
  loading: () => null
})

export default function Home() {
  return (
    <>
      <StructuredData />
      <Prefetch />
      <PremiumBackground />
      <main className="min-h-screen relative" itemScope itemType="https://schema.org/WebPage">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Features />
        <Services />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

