import React, { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DescriptionSection from '../components/DescriptionSection';
import FeaturesSection from '../components/FeaturesSection';
import StatisticsSection from '../components/StatisticsSection';
import AIShowcaseSection from '../components/AIShowcaseSection';
import TestimonialsGPTSection from '../components/TestimonialsGPTSection';
import ComparisonSection from '../components/ComparisonSection';

import FinalCTASection from '../components/FinalCTASection';

import EpicLoader from '../components/EpicLoader';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import RevolutionaryFeatures from '../components/RevolutionaryFeatures';
import EpicTestimonials from '../components/EpicTestimonials';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure page is fully loaded
    const handleLoad = () => {
      // Add a small delay for visual effect, then hide loader
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout to ensure loader doesn't stay forever
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <>
      <SEOHead />
      <EpicLoader isLoading={isLoading}>
        <div className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}>
        <Navbar />
        <HeroSection />
        <RevolutionaryFeatures />
        <DescriptionSection />
        <FeaturesSection />
        <StatisticsSection />
        <AIShowcaseSection />
        <EpicTestimonials />
        <TestimonialsGPTSection />
        <ComparisonSection />

        <FinalCTASection />
        <Footer />
        <ScrollToTop />
        </div>
      </EpicLoader>
    </>
  );
}
