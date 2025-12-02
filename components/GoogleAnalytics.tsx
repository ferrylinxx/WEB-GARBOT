'use client'

import { useEffect, Suspense, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-1XXL8PDYBB'

// Event tracking helper functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'CTA', `${ctaName} - ${location}`)
}

// Track demo usage
export const trackDemoUsage = (action: string) => {
  trackEvent('demo_interaction', 'Demo', action)
}

// Track pricing interactions
export const trackPricingView = (plan: string) => {
  trackEvent('view_pricing', 'Pricing', plan)
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'Engagement', `${percentage}%`)
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'Engagement', undefined, seconds)
}

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', 'Navigation', url)
}

// Track file downloads
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'Downloads', fileName)
}

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', 'Forms', formName)
}

// Track search queries
export const trackSearch = (query: string) => {
  trackEvent('search', 'Search', query)
}

// Track errors
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', errorType, errorMessage)
}

function GoogleAnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Page view tracking
  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  // Scroll depth tracking
  useEffect(() => {
    if (typeof window === 'undefined') return

    const scrollDepths = [25, 50, 75, 100]
    const trackedDepths = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      scrollDepths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Time on page tracking
  useEffect(() => {
    if (typeof window === 'undefined') return

    const startTime = Date.now()
    const intervals = [30, 60, 120, 300] // 30s, 1m, 2m, 5m
    const trackedIntervals = new Set<number>()

    const checkTime = setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)

      intervals.forEach((interval) => {
        if (timeSpent >= interval && !trackedIntervals.has(interval)) {
          trackedIntervals.add(interval)
          trackTimeOnPage(interval)
        }
      })
    }, 10000) // Check every 10 seconds

    return () => clearInterval(checkTime)
  }, [pathname])

  // Track outbound links
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (anchor && anchor.href && !anchor.href.startsWith(window.location.origin)) {
        trackOutboundLink(anchor.href)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              // Enhanced measurement
              enhanced_measurement: true,
              // User engagement
              send_page_view: true,
              // Session settings
              session_timeout: 30 * 60, // 30 minutes
              // Custom dimensions
              custom_map: {
                'dimension1': 'user_type',
                'dimension2': 'page_category',
                'dimension3': 'experiment_variant'
              },
              // Link tracking
              link_attribution: true,
              // Cookie settings
              cookie_flags: 'SameSite=None;Secure',
              cookie_expires: 63072000, // 2 years
            });

            // Track Core Web Vitals
            if (typeof PerformanceObserver !== 'undefined') {
              // First Contentful Paint
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FCP',
                    value: Math.round(entry.startTime),
                    non_interaction: true
                  });
                }
              }).observe({type: 'paint', buffered: true});

              // Largest Contentful Paint
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'LCP',
                    value: Math.round(entry.startTime),
                    non_interaction: true
                  });
                }
              }).observe({type: 'largest-contentful-paint', buffered: true});

              // First Input Delay
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: 'FID',
                    value: Math.round(entry.processingStart - entry.startTime),
                    non_interaction: true
                  });
                }
              }).observe({type: 'first-input', buffered: true});

              // Cumulative Layout Shift
              let clsValue = 0;
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                }
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'CLS',
                  value: Math.round(clsValue * 1000),
                  non_interaction: true
                });
              }).observe({type: 'layout-shift', buffered: true});
            }

            // Track page visibility
            document.addEventListener('visibilitychange', function() {
              gtag('event', 'page_visibility', {
                event_category: 'Engagement',
                event_label: document.visibilityState,
                non_interaction: true
              });
            });

            // Track errors
            window.addEventListener('error', function(e) {
              gtag('event', 'javascript_error', {
                event_category: 'Errors',
                event_label: e.message,
                value: 1,
                non_interaction: true
              });
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsContent />
      </Suspense>
    </>
  )
}

// TypeScript declarations
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

