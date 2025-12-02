'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

// Logos de empresas que usan GarBotGPT
const companyLogos = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
]

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'CEO, TechStart',
    text: 'GarBotGPT ha revolucionado nuestra productividad. Es como tener un equipo de expertos 24/7.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop'
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    role: 'Senior Developer, Spotify',
    text: 'La generación de código es increíble. Ahorro horas cada día en tareas repetitivas.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: false
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Lead Designer, Figma',
    text: 'GarBotGPT-5-mini integrado es un game-changer. Creo conceptos visuales en segundos.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop'
  },
  {
    id: 4,
    name: 'Pedro López',
    role: 'Data Scientist, IBM',
    text: 'El análisis de documentos me ahorra semanas de trabajo. Impresionante precisión.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: false
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    role: 'Marketing Director, HubSpot',
    text: 'Escribo contenido 10x más rápido. La calidad supera mis expectativas.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop'
  },
  {
    id: 6,
    name: 'Diego Torres',
    role: 'Estudiante MIT',
    text: 'Me ayuda a estudiar y entender conceptos complejos de manera simple.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    hasVideo: false
  },
]

export default function TestimonialsGTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Logos animation
      gsap.fromTo(logosRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: logosRef.current, start: 'top 90%' }
        }
      )

      // Infinite scroll - Track 1 (left)
      const track1Width = track1Ref.current?.scrollWidth || 0
      gsap.to(track1Ref.current, {
        x: -track1Width / 2,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })

      // Infinite scroll - Track 2 (right)
      const track2Width = track2Ref.current?.scrollWidth || 0
      gsap.fromTo(track2Ref.current,
        { x: -track2Width / 2 },
        {
          x: 0,
          duration: 35,
          ease: 'none',
          repeat: -1,
        }
      )

      // Parallax on scroll
      gsap.to(track1Ref.current, {
        x: '+=100',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 }
      })
      gsap.to(track2Ref.current, {
        x: '-=100',
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 }
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[420px] p-6 mx-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative">
      {/* Video thumbnail */}
      {t.hasVideo && t.videoThumbnail && (
        <div
          className="relative mb-4 rounded-xl overflow-hidden cursor-pointer group/video"
          onClick={() => setActiveVideo(t.id)}
        >
          <img
            src={t.videoThumbnail}
            alt={`Video de ${t.name}`}
            className="w-full h-32 object-cover group-hover/video:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover/video:scale-110 transition-transform">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white/80">
            0:45
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-white font-semibold">{t.name}</div>
          <div className="text-white/50 text-sm">{t.role}</div>
        </div>
        <div className="ml-auto flex">
          {[...Array(t.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">&quot;{t.text}&quot;</p>
    </div>
  )

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.1)_0%,transparent_50%)]" />

      <div className="relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-8 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Testimonios</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Lo que dicen <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">nuestros usuarios</span>
          </h2>
        </div>

        {/* Company Logos */}
        <div className="max-w-5xl mx-auto px-4 mb-16">
          <p className="text-center text-white/40 text-sm mb-8 uppercase tracking-widest">Usado por equipos en</p>
          <div ref={logosRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 w-auto invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Track 1 */}
        <div className="mb-6 overflow-hidden">
          <div ref={track1Ref} className="flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`t1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Track 2 (reversed) */}
        <div className="overflow-hidden">
          <div ref={track2Ref} className="flex">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
              <TestimonialCard key={`t2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Placeholder for video - en producción sería un <video> o embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Video testimonial</p>
                <p className="text-white/40 text-xs mt-1">(Demo - En producción sería un video real)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

