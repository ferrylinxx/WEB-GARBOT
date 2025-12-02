'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

export default function ScrollEffectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Register plugin on client only
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      const ctx = gsap.context(() => {
        // Kill all existing ScrollTriggers first
        ScrollTrigger.getAll().forEach(t => t.kill())

        // Hero animations
        gsap.fromTo('.hero-title',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
        )
        gsap.fromTo('.hero-subtitle',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.3 }
        )
        gsap.fromTo('.hero-cta',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
        )

        // Floating particles
        document.querySelectorAll('.particle').forEach((el) => {
          gsap.to(el, {
            y: -600,
            x: (Math.random() - 0.5) * 300,
            opacity: 0,
            duration: 4 + Math.random() * 4,
            repeat: -1,
            delay: Math.random() * 5,
            ease: 'none'
          })
        })

        // Section 1: Text Reveal - each character animates
        gsap.fromTo('.reveal-title .char',
          { y: 100, opacity: 0, rotationX: -90 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.section-reveal',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 2: Cards Stagger
        gsap.fromTo('.feature-card',
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.section-cards',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 3: Parallax layers
        gsap.to('.parallax-layer-1', {
          y: -300,
          scrollTrigger: {
            trigger: '.section-parallax',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        })
        gsap.to('.parallax-layer-2', {
          y: -500,
          scrollTrigger: {
            trigger: '.section-parallax',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
        gsap.to('.parallax-layer-3', {
          y: -150,
          scrollTrigger: {
            trigger: '.section-parallax',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          }
        })

        // Section 4: Horizontal scroll
        const slides = gsap.utils.toArray('.h-slide') as HTMLElement[]
        if (slides.length > 0) {
          const totalWidth = slides.length * 100
          gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: '.section-horizontal',
              start: 'top top',
              end: `+=${totalWidth}%`,
              scrub: 1,
              pin: true,
              anticipatePin: 1
            }
          })
        }

        // Section 5: Counter animation
        document.querySelectorAll('.counter-num').forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target') || '0')
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.section-stats',
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            onUpdate: () => {
              counter.textContent = Math.floor(obj.val).toLocaleString()
            }
          })
        })

        // Section 6: Image reveal with clip-path
        gsap.fromTo('.image-reveal',
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: '.section-image',
              start: 'top 65%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 7: Text scrub gradient
        gsap.to('.scrub-text', {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-scrub',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        })

        // Section 8: 3D Cards flip
        gsap.fromTo('.card-3d',
          { rotationY: -90, opacity: 0, transformOrigin: 'left center' },
          {
            rotationY: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.section-3d',
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 9: SVG Draw
        document.querySelectorAll('.draw-path').forEach((path) => {
          const p = path as SVGPathElement
          const length = p.getTotalLength()
          gsap.set(p, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(p, {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: '.section-svg',
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })
        })

        // Section 10: Morphing shape
        gsap.to('.morph-shape', {
          borderRadius: '50%',
          rotation: 360,
          scale: 1.3,
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-morph',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })

        // Section 11: Blur text reveal
        gsap.fromTo('.blur-text',
          { filter: 'blur(30px)', opacity: 0, y: 80 },
          {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.section-blur',
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 12: Split merge
        gsap.fromTo('.split-left',
          { x: '-150%' },
          {
            x: '0%',
            ease: 'none',
            scrollTrigger: {
              trigger: '.section-split',
              start: 'top bottom',
              end: 'center center',
              scrub: 1
            }
          }
        )
        gsap.fromTo('.split-right',
          { x: '150%' },
          {
            x: '0%',
            ease: 'none',
            scrollTrigger: {
              trigger: '.section-split',
              start: 'top bottom',
              end: 'center center',
              scrub: 1
            }
          }
        )

        // Section 13: Pinned gallery
        ScrollTrigger.create({
          trigger: '.section-pinned',
          start: 'top top',
          end: '+=400%',
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress
            document.querySelectorAll('.pinned-image').forEach((img, i, arr) => {
              const imgEl = img as HTMLElement
              const segmentSize = 1 / arr.length
              const start = i * segmentSize
              const end = (i + 1) * segmentSize
              if (progress >= start && progress < end) {
                gsap.to(imgEl, { opacity: 1, scale: 1, duration: 0.5 })
              } else {
                gsap.to(imgEl, { opacity: 0, scale: 0.8, duration: 0.5 })
              }
            })
          }
        })

        // Section 14: Elastic elements
        gsap.fromTo('.elastic-item',
          { scale: 0, opacity: 0, rotation: -45 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            stagger: { each: 0.08, from: 'random' },
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: '.section-elastic',
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Section 15: Glitch effect
        ScrollTrigger.create({
          trigger: '.section-glitch',
          start: 'top 80%',
          onEnter: () => {
            const glitchTl = gsap.timeline({ repeat: 5, repeatDelay: 0.5 })
            glitchTl.to('.glitch-text', { skewX: 20, x: 10, duration: 0.05 })
              .to('.glitch-text', { skewX: -20, x: -10, duration: 0.05 })
              .to('.glitch-text', { skewX: 10, x: 5, duration: 0.05 })
              .to('.glitch-text', { skewX: 0, x: 0, duration: 0.05 })
          }
        })

        // ============== NEW GOD-LEVEL EFFECTS ==============

        // Section 16: 3D Rotating Cube
        gsap.to('.cube-face', {
          rotationY: 360,
          rotationX: 360,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: { trigger: '.section-cube', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 17: Infinite Marquee
        gsap.to('.marquee-track', {
          xPercent: -50,
          ease: 'none',
          duration: 20,
          repeat: -1
        })

        // Section 18: Perspective Zoom
        gsap.fromTo('.zoom-container',
          { scale: 0.1, opacity: 0, z: -2000 },
          { scale: 1, opacity: 1, z: 0, ease: 'power4.out',
            scrollTrigger: { trigger: '.section-zoom', start: 'top 80%', end: 'center center', scrub: 1 }
          }
        )

        // Section 19: Wave Text
        gsap.fromTo('.wave-char',
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.05, repeat: -1, yoyo: true },
            scrollTrigger: { trigger: '.section-wave-text', start: 'top 80%' }
          }
        )

        // Section 20: Rotating Gallery
        ScrollTrigger.create({
          trigger: '.section-gallery',
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            gsap.to('.gallery-item', { rotation: self.progress * 360, stagger: 0.1 })
          }
        })

        // Section 21: Text Decoder
        ScrollTrigger.create({
          trigger: '.section-decoder',
          start: 'top 70%',
          onEnter: () => {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
            document.querySelectorAll('.decode-char').forEach((el, i) => {
              const original = el.getAttribute('data-char') || ''
              let iterations = 0
              const interval = setInterval(() => {
                el.textContent = chars[Math.floor(Math.random() * chars.length)]
                iterations++
                if (iterations > 10 + i * 2) {
                  el.textContent = original
                  clearInterval(interval)
                }
              }, 50)
            })
          }
        })

        // Section 22: Stacking Cards
        gsap.utils.toArray('.stack-card').forEach((card, i) => {
          gsap.fromTo(card as HTMLElement,
            { y: i * 50, scale: 1 - i * 0.05, opacity: 1 - i * 0.2 },
            { y: 0, scale: 1, opacity: 1,
              scrollTrigger: { trigger: '.section-stack', start: `top+=${i * 100} 80%`, end: `top+=${i * 100 + 200} 30%`, scrub: true }
            }
          )
        })

        // Section 23: Circular Progress
        gsap.to('.progress-circle', {
          strokeDashoffset: 0,
          scrollTrigger: { trigger: '.section-progress', start: 'top 70%', end: 'center center', scrub: 1 }
        })

        // Section 24: Matrix Rain
        ScrollTrigger.create({
          trigger: '.section-matrix',
          start: 'top 80%',
          onEnter: () => {
            document.querySelectorAll('.matrix-column').forEach((col, i) => {
              gsap.to(col, { y: 500, duration: 2 + Math.random() * 2, repeat: -1, delay: i * 0.1, ease: 'none' })
            })
          }
        })

        // Section 25: Magnetic Grid
        gsap.fromTo('.magnetic-item',
          { scale: 0, rotation: 180 },
          { scale: 1, rotation: 0, duration: 0.8, stagger: { grid: [4, 4], from: 'center', amount: 1 },
            scrollTrigger: { trigger: '.section-magnetic', start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )

        // Section 26: Kinetic Typography
        gsap.to('.kinetic-word', {
          y: (i) => (i % 2 === 0 ? -100 : 100),
          scrollTrigger: { trigger: '.section-kinetic', start: 'top bottom', end: 'bottom top', scrub: 1 }
        })

        // Section 27: 3D Tunnel
        gsap.fromTo('.tunnel-ring',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: { each: 0.1, from: 'end' },
            scrollTrigger: { trigger: '.section-tunnel', start: 'top 80%', end: 'center center', scrub: 1 }
          }
        )

        // Section 28: Particle Explosion
        ScrollTrigger.create({
          trigger: '.section-explosion',
          start: 'top 70%',
          onEnter: () => {
            document.querySelectorAll('.explosion-particle').forEach((p) => {
              gsap.to(p, {
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 800,
                rotation: Math.random() * 720,
                opacity: 0,
                duration: 1.5,
                ease: 'power4.out'
              })
            })
          }
        })

        // Section 29: Flip Book
        gsap.utils.toArray('.flip-page').forEach((page, i) => {
          gsap.fromTo(page as HTMLElement,
            { rotationX: 0 },
            { rotationX: -180,
              scrollTrigger: { trigger: '.section-flipbook', start: `top+=${i * 80} top`, end: `top+=${i * 80 + 150} top`, scrub: true }
            }
          )
        })

        // Section 30: Bouncing Physics
        gsap.fromTo('.bounce-ball',
          { y: -300 },
          { y: 0, ease: 'bounce.out', duration: 2,
            scrollTrigger: { trigger: '.section-bounce', start: 'top 70%', toggleActions: 'play none none reverse' }
          }
        )

        // Section 31: Spiral Animation
        gsap.utils.toArray('.spiral-item').forEach((item, i) => {
          gsap.fromTo(item as HTMLElement,
            { rotation: i * 30, scale: 0, opacity: 0 },
            { rotation: 0, scale: 1, opacity: 1, duration: 1, delay: i * 0.1,
              scrollTrigger: { trigger: '.section-spiral', start: 'top 75%', toggleActions: 'play none none reverse' }
            }
          )
        })

        // Section 32: Liquid Morph
        gsap.to('.liquid-blob', {
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          rotation: 360,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })

        // Section 33: Text Mask Reveal
        gsap.fromTo('.mask-reveal',
          { backgroundSize: '0% 100%' },
          { backgroundSize: '100% 100%',
            scrollTrigger: { trigger: '.section-mask', start: 'top 70%', end: 'center center', scrub: 1 }
          }
        )

        // Section 34: Orbit Animation
        ScrollTrigger.create({
          trigger: '.section-orbit',
          start: 'top top',
          end: '+=300%',
          pin: true,
          onUpdate: (self) => {
            document.querySelectorAll('.orbit-planet').forEach((planet, i) => {
              const angle = self.progress * 360 * (i + 1) * (Math.PI / 180)
              const radius = 100 + i * 60
              gsap.set(planet, {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
              })
            })
          }
        })

        // Section 35: Epic Finale
        gsap.fromTo('.finale-text span',
          { y: 200, opacity: 0, rotationX: -90 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: '.section-finale', start: 'top 70%', toggleActions: 'play none none reverse' }
          }
        )

        // ============== 30 NEW PROFESSIONAL EFFECTS ==============

        // Section 36: 3D Depth Parallax
        gsap.utils.toArray('.depth-layer').forEach((layer, i) => {
          gsap.to(layer as HTMLElement, {
            y: (i + 1) * -200,
            scrollTrigger: { trigger: '.section-depth', start: 'top bottom', end: 'bottom top', scrub: true }
          })
        })

        // Section 37: Image Zoom Reveal
        gsap.fromTo('.zoom-image',
          { scale: 2, clipPath: 'circle(0% at 50% 50%)' },
          { scale: 1, clipPath: 'circle(100% at 50% 50%)', ease: 'power2.inOut',
            scrollTrigger: { trigger: '.section-zoom-image', start: 'top 70%', end: 'center center', scrub: 1 }
          }
        )

        // Section 38: Image Sequence (simulated)
        ScrollTrigger.create({
          trigger: '.section-sequence',
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const frame = Math.floor(self.progress * 59)
            document.querySelectorAll('.sequence-frame').forEach((el, i) => {
              (el as HTMLElement).style.opacity = i === frame ? '1' : '0'
            })
          }
        })

        // Section 39: SVG Section Transition
        gsap.fromTo('.svg-wave-path',
          { attr: { d: 'M0,100 C200,100 400,100 600,100 L600,200 L0,200 Z' } },
          { attr: { d: 'M0,100 C200,0 400,200 600,100 L600,200 L0,200 Z' },
            scrollTrigger: { trigger: '.section-svg-transition', start: 'top 80%', end: 'center center', scrub: 1 }
          }
        )

        // Section 40: SVG Clip Path Mask
        gsap.to('.clip-circle',
          { attr: { r: 800 },
            scrollTrigger: { trigger: '.section-svg-clip', start: 'top 70%', end: 'center center', scrub: 1 }
          }
        )

        // Section 41: Multi-layer Parallax
        gsap.utils.toArray('.parallax-layer').forEach((layer, i) => {
          const speed = (i + 1) * 0.3
          gsap.to(layer as HTMLElement, {
            yPercent: -100 * speed,
            scrollTrigger: { trigger: '.section-parallax-multi', start: 'top bottom', end: 'bottom top', scrub: true }
          })
        })

        // Section 42: AirPods Style - Product Rotation
        ScrollTrigger.create({
          trigger: '.section-airpods',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const rotation = self.progress * 360
            gsap.set('.airpods-product', { rotationY: rotation })
            // Update feature visibility
            const phase = Math.floor(self.progress * 4)
            document.querySelectorAll('.airpods-feature').forEach((el, i) => {
              gsap.to(el, { opacity: i === phase ? 1 : 0, y: i === phase ? 0 : 20, duration: 0.3 })
            })
          }
        })

        // Section 43: 3D Card Stack
        gsap.utils.toArray('.card-3d-stack').forEach((card, i) => {
          gsap.fromTo(card as HTMLElement,
            { z: -500, rotationX: 45, opacity: 0 },
            { z: 0, rotationX: 0, opacity: 1, ease: 'power3.out',
              scrollTrigger: { trigger: '.section-card-stack', start: `top+=${i * 150} 80%`, end: `top+=${i * 150 + 200} 30%`, scrub: true }
            }
          )
        })

        // Section 44: Horizontal Image Gallery with Snap
        ScrollTrigger.create({
          trigger: '.section-h-gallery',
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            gsap.to('.h-gallery-track', { xPercent: -80 * self.progress, ease: 'none', overwrite: true })
          }
        })

        // Section 45: Text Scramble on Scroll
        ScrollTrigger.create({
          trigger: '.section-scramble',
          start: 'top 70%',
          onEnter: () => {
            const text = 'INNOVATION'
            const el = document.querySelector('.scramble-text')
            if (!el) return
            let iteration = 0
            const interval = setInterval(() => {
              el.textContent = text.split('').map((char, i) =>
                i < iteration ? char : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
              ).join('')
              iteration += 0.5
              if (iteration > text.length) clearInterval(interval)
            }, 40)
          }
        })

        // Section 46: Morphing Blob Background
        gsap.to('.morph-blob',
          { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', rotation: 360, scale: 1.2, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' }
        )

        // Section 47: Cinematic Text Wipe
        gsap.fromTo('.wipe-text',
          { backgroundSize: '0% 100%' },
          { backgroundSize: '200% 100%',
            scrollTrigger: { trigger: '.section-wipe', start: 'top 70%', end: 'center center', scrub: 1 }
          }
        )

        // Section 48: 3D Perspective Grid
        gsap.fromTo('.grid-item-3d',
          { rotationX: 60, y: 100, opacity: 0 },
          { rotationX: 0, y: 0, opacity: 1, stagger: { grid: [4, 4], from: 'center', amount: 0.8 },
            scrollTrigger: { trigger: '.section-3d-grid', start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )

        // Section 49: Magnetic Cursor Effect Cards
        document.querySelectorAll('.magnetic-card').forEach(card => {
          card.addEventListener('mousemove', (e: Event) => {
            const evt = e as MouseEvent
            const rect = (card as HTMLElement).getBoundingClientRect()
            const x = evt.clientX - rect.left - rect.width / 2
            const y = evt.clientY - rect.top - rect.height / 2
            gsap.to(card, { x: x * 0.2, y: y * 0.2, rotationY: x * 0.05, rotationX: -y * 0.05, duration: 0.5 })
          })
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 0.5 })
          })
        })

        // Section 50: Infinite Loop Marquee
        const marquee = document.querySelector('.infinite-marquee')
        if (marquee) {
          gsap.to('.infinite-marquee', { xPercent: -50, ease: 'none', duration: 30, repeat: -1 })
        }

        // Section 51: SVG Path Draw Animation
        gsap.utils.toArray('.draw-svg-path').forEach(path => {
          const length = (path as SVGPathElement).getTotalLength?.() || 1000
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(path, {
            strokeDashoffset: 0, ease: 'power2.inOut',
            scrollTrigger: { trigger: '.section-draw-svg', start: 'top 70%', end: 'center center', scrub: 1 }
          })
        })

        // Section 52: Fade Through Sections
        gsap.utils.toArray('.fade-section').forEach((section, i) => {
          gsap.fromTo(section as HTMLElement,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0,
              scrollTrigger: { trigger: section as HTMLElement, start: 'top 80%', end: 'top 20%', scrub: true }
            }
          )
        })

        // Section 53: Zoom Out Reveal
        gsap.fromTo('.zoom-out-content',
          { scale: 3, opacity: 0 },
          { scale: 1, opacity: 1,
            scrollTrigger: { trigger: '.section-zoom-out', start: 'top 80%', end: 'center center', scrub: 1 }
          }
        )

        // Section 54: Staggered Text Lines
        gsap.fromTo('.stagger-line',
          { x: -100, opacity: 0, skewX: 10 },
          { x: 0, opacity: 1, skewX: 0, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: '.section-stagger-text', start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )

        // Section 55: Floating Elements
        gsap.utils.toArray('.float-element').forEach((el, i) => {
          gsap.to(el as HTMLElement, {
            y: (i % 2 === 0 ? -30 : 30),
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          })
        })

        // Section 56: Counter Animation
        ScrollTrigger.create({
          trigger: '.section-counter',
          start: 'top 70%',
          onEnter: () => {
            document.querySelectorAll('.count-up').forEach(el => {
              const target = parseInt(el.getAttribute('data-target') || '0')
              gsap.to(el, {
                textContent: target,
                duration: 2,
                snap: { textContent: 1 },
                ease: 'power2.out'
              })
            })
          }
        })

        // Section 57: Reveal with Mask
        gsap.fromTo('.mask-box',
          { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
            scrollTrigger: { trigger: '.section-mask-reveal', start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )

        // Section 58: Rotating Wheel
        gsap.to('.rotating-wheel', {
          rotation: 360,
          scrollTrigger: { trigger: '.section-wheel', start: 'top bottom', end: 'bottom top', scrub: 0.5 }
        })

        // Section 59: Accordion Expand
        gsap.utils.toArray('.accordion-item').forEach((item, i) => {
          gsap.fromTo(item as HTMLElement,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.5, delay: i * 0.1,
              scrollTrigger: { trigger: '.section-accordion', start: 'top 70%', toggleActions: 'play none none reverse' }
            }
          )
        })

        // Section 60: Split Screen Slide
        gsap.to('.split-left-panel', {
          xPercent: -50,
          scrollTrigger: { trigger: '.section-split-screen', start: 'top bottom', end: 'bottom top', scrub: true }
        })
        gsap.to('.split-right-panel', {
          xPercent: 50,
          scrollTrigger: { trigger: '.section-split-screen', start: 'top bottom', end: 'bottom top', scrub: true }
        })

        // Section 61: Typewriter Effect
        ScrollTrigger.create({
          trigger: '.section-typewriter',
          start: 'top 70%',
          onEnter: () => {
            const text = 'Building the future of web experiences...'
            const el = document.querySelector('.typewriter-text')
            if (!el) return
            let i = 0
            el.textContent = ''
            const type = () => {
              if (i < text.length) {
                el.textContent += text.charAt(i)
                i++
                setTimeout(type, 50)
              }
            }
            type()
          }
        })

        // Section 62: Radial Gradient Follow
        document.querySelector('.section-radial')?.addEventListener('mousemove', (e: Event) => {
          const evt = e as MouseEvent
          const target = e.currentTarget as HTMLElement
          const rect = target.getBoundingClientRect()
          const x = ((evt.clientX - rect.left) / rect.width) * 100
          const y = ((evt.clientY - rect.top) / rect.height) * 100
          gsap.to(target, { background: `radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.3), transparent 50%)`, duration: 0.3 })
        })

        // Section 63: Flip Card 3D
        gsap.utils.toArray('.flip-card-3d').forEach(card => {
          ScrollTrigger.create({
            trigger: card as HTMLElement,
            start: 'top 70%',
            onEnter: () => gsap.to(card, { rotationY: 180, duration: 0.8, ease: 'power2.inOut' }),
            onLeaveBack: () => gsap.to(card, { rotationY: 0, duration: 0.8, ease: 'power2.inOut' })
          })
        })

        // Section 64: Exploding Grid
        ScrollTrigger.create({
          trigger: '.section-explode',
          start: 'top 70%',
          onEnter: () => {
            gsap.to('.explode-item', {
              x: () => (Math.random() - 0.5) * 400,
              y: () => (Math.random() - 0.5) * 400,
              rotation: () => Math.random() * 360,
              scale: 0,
              opacity: 0,
              stagger: 0.05,
              duration: 1
            })
          }
        })

        // Section 65: Pinned Video Scrub (simulated)
        ScrollTrigger.create({
          trigger: '.section-video-scrub',
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = Math.floor(self.progress * 100)
            const progressEl = document.querySelector('.video-progress')
            if (progressEl) progressEl.textContent = `${progress}%`
          }
        })

        // ========== FREEFRONTEND EFFECTS (66-97) ==========

        // Section 66: Parallax Effect with Decorative Elements
        gsap.utils.toArray('.parallax-deco').forEach((el, i) => {
          gsap.to(el as HTMLElement, {
            yPercent: -50 * (i + 1),
            rotation: 15 * (i % 2 === 0 ? 1 : -1),
            scrollTrigger: { trigger: '.section-parallax-deco', start: 'top bottom', end: 'bottom top', scrub: 1 }
          })
        })

        // Section 67: Horizontal Scroll Section (Pinned)
        const horizontalSection = document.querySelector('.horizontal-scroll-container')
        if (horizontalSection) {
          const panels = gsap.utils.toArray('.horizontal-panel')
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: { trigger: '.section-horizontal-scroll', start: 'top top', end: '+=300%', pin: true, scrub: 1 }
          })
        }

        // Section 68: Infinite Cover Flow Carousel
        ScrollTrigger.create({
          trigger: '.section-coverflow',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const cards = document.querySelectorAll('.coverflow-card')
            cards.forEach((card, i) => {
              const offset = (self.progress * cards.length - i) * 100
              gsap.set(card, { xPercent: offset, scale: 1 - Math.abs(offset) * 0.003, opacity: 1 - Math.abs(offset) * 0.01 })
            })
          }
        })

        // Section 69: Scroll-Driven Gears Animation
        gsap.to('.gear-1', { rotation: 360, scrollTrigger: { trigger: '.section-gears', start: 'top bottom', end: 'bottom top', scrub: 1 } })
        gsap.to('.gear-2', { rotation: -360, scrollTrigger: { trigger: '.section-gears', start: 'top bottom', end: 'bottom top', scrub: 1 } })
        gsap.to('.gear-3', { rotation: 360, scrollTrigger: { trigger: '.section-gears', start: 'top bottom', end: 'bottom top', scrub: 1 } })

        // Section 70: Illustration Parallax Hero
        gsap.utils.toArray('.illustration-layer').forEach((layer, i) => {
          gsap.to(layer as HTMLElement, {
            y: (i + 1) * -100,
            scrollTrigger: { trigger: '.section-illustration-parallax', start: 'top bottom', end: 'bottom top', scrub: true }
          })
        })

        // Section 71: Infinite Scrolling Cards 3D
        ScrollTrigger.create({
          trigger: '.section-infinite-cards',
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 0.3,
          onUpdate: (self) => {
            const cards = document.querySelectorAll('.infinite-card')
            cards.forEach((card, i) => {
              const progress = (self.progress * 5 + i * 0.2) % 1
              const y = (progress - 0.5) * 600
              const scale = 1 - Math.abs(progress - 0.5) * 0.5
              const rotateX = (progress - 0.5) * 45
              gsap.set(card, { y, scale, rotateX, zIndex: Math.round(scale * 10) })
            })
          }
        })

        // Section 72: Super Mario Scrollytelling
        gsap.to('.mario-character', { x: () => window.innerWidth * 2, scrollTrigger: { trigger: '.section-mario', start: 'top top', end: '+=300%', pin: true, scrub: 1 } })
        gsap.to('.mario-bg', { x: () => -window.innerWidth, scrollTrigger: { trigger: '.section-mario', start: 'top top', end: '+=300%', scrub: 1 } })

        // Section 73: Draggable Timeline
        const timelineItems = gsap.utils.toArray('.timeline-item')
        gsap.to(timelineItems, {
          xPercent: -100 * (timelineItems.length - 1),
          ease: 'none',
          scrollTrigger: { trigger: '.section-timeline', start: 'top top', end: '+=400%', pin: true, scrub: 1 }
        })

        // Section 74: Preloader Hero Sequence
        gsap.from('.hero-sequence-title', {
          y: 100, opacity: 0, duration: 1,
          scrollTrigger: { trigger: '.section-hero-sequence', start: 'top 80%', toggleActions: 'play none none reverse' }
        })
        gsap.from('.hero-sequence-subtitle', {
          y: 50, opacity: 0, duration: 1, delay: 0.3,
          scrollTrigger: { trigger: '.section-hero-sequence', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 75: 3D Card Carousel Scroll
        ScrollTrigger.create({
          trigger: '.section-3d-carousel',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const cards = document.querySelectorAll('.carousel-3d-card')
            cards.forEach((card, i) => {
              const angle = (self.progress * 360 + i * (360 / cards.length)) % 360
              const rad = (angle * Math.PI) / 180
              const x = Math.sin(rad) * 300
              const z = Math.cos(rad) * 300
              const scale = (z + 300) / 600
              gsap.set(card, { x, scale: 0.5 + scale * 0.5, zIndex: Math.round(scale * 10), opacity: 0.3 + scale * 0.7 })
            })
          }
        })

        // Section 76: Full Screen Slideshow with ClipPath
        const slideshowSlides = gsap.utils.toArray('.slideshow-slide')
        slideshowSlides.forEach((slide, i) => {
          if (i > 0) {
            gsap.from(slide as HTMLElement, {
              clipPath: 'inset(100% 0 0 0)',
              scrollTrigger: { trigger: slide as HTMLElement, start: 'top bottom', end: 'top top', scrub: true }
            })
          }
        })

        // Section 77: Layout Explorations with Stagger
        gsap.from('.layout-box', {
          y: 100, opacity: 0, stagger: 0.1, duration: 0.8,
          scrollTrigger: { trigger: '.section-layout', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 78: React-style Parallax
        gsap.utils.toArray('.react-parallax-item').forEach((item, i) => {
          gsap.to(item as HTMLElement, {
            y: (i % 2 === 0 ? -150 : 150),
            scrollTrigger: { trigger: '.section-react-parallax', start: 'top bottom', end: 'bottom top', scrub: true }
          })
        })

        // Section 79: Simple Horizontal Scroll React-style
        const hScrollPanels = gsap.utils.toArray('.h-scroll-panel')
        if (hScrollPanels.length > 0) {
          gsap.to(hScrollPanels, {
            xPercent: -100 * (hScrollPanels.length - 1),
            ease: 'none',
            scrollTrigger: { trigger: '.section-h-scroll-simple', start: 'top top', end: '+=200%', pin: true, scrub: 1 }
          })
        }

        // Section 80: Scroll-Based Reveal In/Out
        gsap.utils.toArray('.reveal-box').forEach((box) => {
          ScrollTrigger.create({
            trigger: box as HTMLElement,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => gsap.to(box as HTMLElement, { opacity: 1, y: 0, duration: 0.5 }),
            onLeave: () => gsap.to(box as HTMLElement, { opacity: 0, y: -50, duration: 0.5 }),
            onEnterBack: () => gsap.to(box as HTMLElement, { opacity: 1, y: 0, duration: 0.5 }),
            onLeaveBack: () => gsap.to(box as HTMLElement, { opacity: 0, y: 50, duration: 0.5 })
          })
        })

        // Section 81: Fanned Cards Carousel
        ScrollTrigger.create({
          trigger: '.section-fanned',
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const cards = document.querySelectorAll('.fanned-card')
            cards.forEach((card, i) => {
              const baseAngle = -30 + i * 15
              const fanProgress = self.progress * 60 - 30
              gsap.set(card, { rotation: baseAngle + fanProgress, transformOrigin: 'bottom center' })
            })
          }
        })

        // Section 82: Three.js Style 3D Model Scroll
        ScrollTrigger.create({
          trigger: '.section-3d-model',
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const model = document.querySelector('.model-3d')
            if (model) {
              gsap.set(model, { rotationY: self.progress * 360, rotationX: Math.sin(self.progress * Math.PI) * 30 })
            }
          }
        })

        // Section 83: Hero Reveal with Split Text Effect
        gsap.from('.hero-reveal-char', {
          y: 100, opacity: 0, stagger: 0.02, duration: 0.5,
          scrollTrigger: { trigger: '.section-hero-reveal', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 84: Color Spectrum Layout
        gsap.utils.toArray('.spectrum-block').forEach((block, i) => {
          gsap.from(block as HTMLElement, {
            scale: 0, rotation: 180, opacity: 0, duration: 0.8, delay: i * 0.1,
            scrollTrigger: { trigger: '.section-spectrum', start: 'top 80%', toggleActions: 'play none none reverse' }
          })
        })

        // Section 85: CSS Scroll-Driven Progress Bar
        ScrollTrigger.create({
          trigger: '.section-progress-bar',
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const bar = document.querySelector('.scroll-progress-fill')
            if (bar) gsap.set(bar, { scaleX: self.progress })
          }
        })

        // Section 86: SVG Illustration Transition
        gsap.from('.svg-illustration path', {
          strokeDashoffset: 1000, stagger: 0.1, duration: 2,
          scrollTrigger: { trigger: '.section-svg-illustration', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 87: SVG Clip Path Animation
        gsap.to('.clip-path-reveal', {
          clipPath: 'circle(100% at 50% 50%)',
          scrollTrigger: { trigger: '.section-clip-path', start: 'top center', end: 'bottom center', scrub: true }
        })

        // Section 88: Movie Stacking Cards
        const movieCards = gsap.utils.toArray('.movie-card')
        movieCards.forEach((card, i) => {
          gsap.to(card as HTMLElement, {
            y: -i * 20, scale: 1 - i * 0.05, zIndex: movieCards.length - i,
            scrollTrigger: { trigger: '.section-movie-stack', start: 'top center', end: 'bottom center', scrub: true }
          })
        })

        // Section 89: Parallax Scroll with Multiple Layers
        gsap.utils.toArray('.multi-parallax-layer').forEach((layer, i) => {
          gsap.to(layer as HTMLElement, {
            y: (i + 1) * -200, ease: 'none',
            scrollTrigger: { trigger: '.section-multi-parallax', start: 'top bottom', end: 'bottom top', scrub: true }
          })
        })

        // Section 90: Grid to Slider Transition
        ScrollTrigger.create({
          trigger: '.section-grid-slider',
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const items = document.querySelectorAll('.grid-slider-item')
            items.forEach((item, i) => {
              const row = Math.floor(i / 3)
              const col = i % 3
              const targetX = self.progress * (i * 110 - col * 110)
              const targetY = self.progress * (-row * 110)
              gsap.set(item, { x: targetX, y: targetY })
            })
          }
        })

        // Section 91: Stagger In/Out with Mask
        gsap.from('.mask-text-line', {
          yPercent: 100, stagger: 0.1, duration: 0.8,
          scrollTrigger: { trigger: '.section-mask-text', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 92: Push-Right Menu Animation
        gsap.from('.push-menu-item', {
          x: -100, opacity: 0, stagger: 0.1, duration: 0.5,
          scrollTrigger: { trigger: '.section-push-menu', start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        // Section 93: Book Page Flip Effect
        ScrollTrigger.create({
          trigger: '.section-book',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const pages = document.querySelectorAll('.book-page')
            pages.forEach((page, i) => {
              const pageProgress = (self.progress * pages.length - i)
              const rotation = Math.max(0, Math.min(180, pageProgress * 180))
              gsap.set(page, { rotationY: rotation, transformOrigin: 'left center' })
            })
          }
        })

        // Section 94: Scroll Velocity Text
        let lastScrollY = 0
        ScrollTrigger.create({
          trigger: '.section-velocity',
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity()) / 1000
            const text = document.querySelector('.velocity-text')
            if (text) gsap.to(text, { skewX: velocity * 2, duration: 0.3 })
          }
        })

        // Section 95: Morphing Shapes
        gsap.to('.morph-shape', {
          borderRadius: '50%', rotation: 180, scale: 1.5,
          scrollTrigger: { trigger: '.section-morph', start: 'top center', end: 'bottom center', scrub: true }
        })

        // Section 96: Scroll Snap Gallery
        gsap.utils.toArray('.snap-item').forEach((item, i) => {
          gsap.from(item as HTMLElement, {
            scale: 0.8, opacity: 0, duration: 0.5,
            scrollTrigger: { trigger: item as HTMLElement, start: 'top 80%', toggleActions: 'play none none reverse' }
          })
        })

        // Section 97: Final Mega Effect - Everything Combined
        ScrollTrigger.create({
          trigger: '.section-mega-final',
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress
            gsap.set('.mega-circle', { scale: 1 + p * 2, rotation: p * 720, opacity: 1 - p * 0.5 })
            gsap.set('.mega-text', { y: -p * 200, opacity: 1 - p })
            gsap.set('.mega-particles', { y: -p * 500 })
          }
        })

      }, containerRef)

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-purple-950/30 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {isClient && Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="particle absolute w-2 h-2 bg-blue-400/60 rounded-full"
              style={{
                left: `${(i * 2.5) % 100}%`,
                top: `${80 + (i % 5) * 5}%`,
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`
              }} />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="hero-title">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8">
              ✨ GSAP ScrollTrigger Showcase
            </span>
            <h1 className="text-7xl md:text-9xl font-black leading-none mb-6">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">SCROLL</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">MAGIC</span>
            </h1>
          </div>
          <p className="hero-subtitle text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12">
            Descubre 30+ efectos de animación profesionales impulsados por GSAP ScrollTrigger. Cada sección es una experiencia única.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105">
              Explorar Efectos ↓
            </a>
            <Link href="/" className="px-8 py-4 bg-white/5 border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              ← Volver al Inicio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-sm">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 1: Text Reveal */}
      <section id="start" className="section-reveal min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 01 • Text Reveal</span>
          <h2 className="reveal-title text-6xl md:text-8xl font-black leading-tight mb-8" style={{ perspective: '1000px' }}>
            {'REVOLUCIONA'.split('').map((char, i) => (
              <span key={i} className="char inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{char}</span>
            ))}
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">Cada letra aparece con un efecto 3D de rotación individual creando una entrada dramática</p>
        </div>
      </section>

      {/* SECTION 2: Feature Cards Stagger */}
      <section className="section-cards min-h-screen flex items-center py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 02 • Stagger Animation</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Cards en Cascada</h2>
            <p className="text-xl text-white/50">Las tarjetas aparecen secuencialmente con efecto elástico</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚀', title: 'Velocidad', desc: 'Animaciones a 60fps' },
              { icon: '🎨', title: 'Diseño', desc: 'UI moderna y limpia' },
              { icon: '⚡', title: 'Potencia', desc: 'GSAP ScrollTrigger' },
              { icon: '🎯', title: 'Precisión', desc: 'Control total' },
              { icon: '💎', title: 'Premium', desc: 'Efectos de alta gama' },
              { icon: '🔥', title: 'Performance', desc: 'Optimizado al máximo' },
              { icon: '✨', title: 'Magia', desc: 'Experiencia única' },
              { icon: '🌟', title: 'Estrella', desc: 'Destaca tu web' }
            ].map((item, i) => (
              <div key={i} className="feature-card group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Parallax Layers */}
      <section className="section-parallax min-h-[150vh] relative overflow-hidden">
        <div className="parallax-layer-1 absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl" />
        </div>
        <div className="parallax-layer-2 absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/40 blur-2xl" />
        </div>
        <div className="parallax-layer-3 absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 03 • Multi-Layer Parallax</span>
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">DEPTH</h2>
            <p className="text-2xl text-white/60 mt-4">Múltiples capas moviéndose a diferentes velocidades</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Horizontal Scroll */}
      <section className="section-horizontal h-screen relative">
        <div className="absolute top-8 left-8 z-20">
          <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-sm">
            Efecto 04 • Horizontal Scroll
          </span>
        </div>
        <div className="h-full flex items-center">
          <div className="flex">
            {[
              { bg: 'from-blue-600 to-cyan-500', icon: '🚀', title: 'Lanzamiento', desc: 'Despega tu proyecto' },
              { bg: 'from-purple-600 to-pink-500', icon: '💡', title: 'Innovación', desc: 'Ideas revolucionarias' },
              { bg: 'from-orange-500 to-red-500', icon: '🔥', title: 'Impacto', desc: 'Resultados explosivos' },
              { bg: 'from-green-500 to-emerald-500', icon: '🌱', title: 'Crecimiento', desc: 'Evolución constante' },
              { bg: 'from-indigo-600 to-purple-600', icon: '🎯', title: 'Objetivo', desc: 'Meta alcanzada' }
            ].map((slide, i) => (
              <div key={i} className={`h-slide flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br ${slide.bg}`}>
                <div className="text-center">
                  <div className="text-9xl mb-8">{slide.icon}</div>
                  <h3 className="text-6xl font-black text-white mb-4">{slide.title}</h3>
                  <p className="text-2xl text-white/80">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Stats Counter */}
      <section className="section-stats min-h-screen flex items-center py-32 relative bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-20">
            <span className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 05 • Counter Animation</span>
            <h2 className="text-5xl md:text-7xl font-black text-white">Números Impactantes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 99, suffix: '%', label: 'Satisfacción' },
              { num: 50000, suffix: '+', label: 'Usuarios' },
              { num: 1000000, suffix: '', label: 'Animaciones' },
              { num: 24, suffix: '/7', label: 'Soporte' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  <span className="counter-num" data-target={stat.num}>0</span>{stat.suffix}
                </div>
                <p className="text-white/60 mt-4 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Image Reveal */}
      <section className="section-image min-h-screen flex items-center py-32 relative">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 06 • Clip Path Reveal</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Revelación Cinematográfica</h2>
              <p className="text-xl text-white/50 mb-8">La imagen se revela con un efecto de cortina horizontal que crea una entrada dramática y profesional.</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm">ClipPath</span>
                <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm">Scroll Trigger</span>
              </div>
            </div>
            <div className="image-reveal rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🎬</div>
                <p className="text-2xl font-bold text-white">Contenido Revelado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Text Scrub */}
      <section className="section-scrub min-h-[200vh] relative flex items-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="text-center px-4">
            <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 07 • Text Gradient Scrub</span>
            <h2 className="scrub-text text-6xl md:text-9xl font-black bg-gradient-to-r from-white via-pink-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent" style={{ backgroundPositionX: '100%' }}>
              SCROLL ME
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 8: 3D Cards */}
      <section className="section-3d min-h-screen flex items-center py-32 relative" style={{ perspective: '1500px' }}>
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-20">
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 08 • 3D Flip Cards</span>
            <h2 className="text-5xl md:text-7xl font-black text-white">Perspectiva 3D</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'DevOps'].map((title, i) => (
              <div key={i} className="card-3d p-8 rounded-3xl bg-gradient-to-b from-violet-500/20 to-purple-500/10 border border-violet-500/30 text-center" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-6xl mb-6">{['⚛️', '🔧', '☁️'][i]}</div>
                <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                <p className="text-white/60">Animación 3D con rotación en el eje Y que crea profundidad visual.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: SVG Draw */}
      <section className="section-svg min-h-screen flex items-center py-32 relative bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto px-4 w-full text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 09 • SVG Line Draw</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16">Dibujando en Tiempo Real</h2>
          <svg className="w-full max-w-4xl mx-auto h-64" viewBox="0 0 800 200">
            <path className="draw-path" d="M50,100 C150,20 250,180 350,100 S550,20 650,100 S750,180 780,100" fill="none" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" />
            <path className="draw-path" d="M50,150 Q200,50 400,150 T750,150" fill="none" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* SECTION 10: Morphing Shape */}
      <section className="section-morph min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 10 • Shape Morphing</span>
            <div className="morph-shape w-64 h-64 mx-auto bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-3xl mb-8" />
            <p className="text-xl text-white/50">La forma cambia de cuadrado a círculo mientras haces scroll</p>
          </div>
        </div>
      </section>

      {/* SECTION 11: Blur Text */}
      <section className="section-blur min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 11 • Blur Reveal</span>
          <h2 className="blur-text text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            NITIDEZ PERFECTA
          </h2>
          <p className="blur-text text-xl text-white/50 mt-8 max-w-2xl mx-auto">El texto emerge del desenfoque creando un efecto de enfoque cinematográfico</p>
        </div>
      </section>

      {/* SECTION 12: Split Animation */}
      <section className="section-split min-h-[200vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="flex gap-4">
            <div className="split-left w-48 h-96 bg-gradient-to-r from-blue-600 to-blue-400 rounded-l-3xl flex items-center justify-center">
              <span className="text-4xl font-bold text-white transform -rotate-90">IZQUIERDA</span>
            </div>
            <div className="split-right w-48 h-96 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-r-3xl flex items-center justify-center">
              <span className="text-4xl font-bold text-white transform -rotate-90">DERECHA</span>
            </div>
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <span className="text-teal-400 text-sm font-semibold">Efecto 12 • Split Merge</span>
          </div>
        </div>
      </section>

      {/* SECTION 13: Pinned Gallery */}
      <section className="section-pinned h-screen relative bg-gradient-to-b from-purple-950/20 to-black">
        <div className="absolute top-8 left-8 z-20">
          <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-sm">
            Efecto 13 • Pinned Gallery
          </span>
        </div>
        <div className="h-full flex items-center justify-center relative">
          {['🌅', '🌌', '🏔️', '🌊'].map((emoji, i) => (
            <div key={i} className="pinned-image absolute inset-0 flex items-center justify-center opacity-0 scale-80 transition-all duration-500" style={{ opacity: i === 0 ? 1 : 0, transform: i === 0 ? 'scale(1)' : 'scale(0.8)' }}>
              <div className="text-center">
                <div className="text-[200px]">{emoji}</div>
                <p className="text-2xl text-white/60">Imagen {i + 1} de 4</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14: Elastic Elements */}
      <section className="section-elastic min-h-screen flex items-center py-32 relative">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-20">
            <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 14 • Elastic Animation</span>
            <h2 className="text-5xl md:text-7xl font-black text-white">Rebote Elástico</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="elastic-item w-24 h-24 rounded-2xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center text-2xl font-bold text-white">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: Glitch Effect */}
      <section className="section-glitch min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center px-4">
          <span className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 15 • Glitch Text</span>
          <h2 className="glitch-text text-7xl md:text-9xl font-black text-red-500">
            GLITCH
          </h2>
          <p className="text-xl text-white/50 mt-8">Efecto de distorsión que simula un fallo digital</p>
        </div>
      </section>

      {/* ============== 20 NEW GOD-LEVEL SECTIONS ============== */}

      {/* SECTION 16: 3D Rotating Cube */}
      <section className="section-cube min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-indigo-950/20 to-black" style={{ perspective: '1000px' }}>
        <div className="text-center">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 16 • 3D Cube</span>
          <div className="relative w-40 h-40 mx-auto mb-8" style={{ transformStyle: 'preserve-3d' }}>
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, i) => (
              <div key={face} className={`cube-face absolute w-40 h-40 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20 flex items-center justify-center text-4xl font-bold`}
                style={{
                  transform: [
                    'translateZ(80px)',
                    'translateZ(-80px) rotateY(180deg)',
                    'translateX(-80px) rotateY(-90deg)',
                    'translateX(80px) rotateY(90deg)',
                    'translateY(-80px) rotateX(90deg)',
                    'translateY(80px) rotateX(-90deg)'
                  ][i]
                }}>
                {['🎲', '🎯', '💎', '⚡', '🚀', '🌟'][i]}
              </div>
            ))}
          </div>
          <h2 className="text-5xl font-black text-white">Cubo 3D Interactivo</h2>
        </div>
      </section>

      {/* SECTION 17: Infinite Marquee */}
      <section className="section-marquee min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-rose-950/20 via-black to-rose-950/20">
        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          <span className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-4 block px-8">Efecto 17 • Infinite Marquee</span>
        </div>
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-[200px] font-black text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text mx-8">
              GARBOT GPT •
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 18: Perspective Zoom */}
      <section className="section-zoom min-h-[200vh] relative" style={{ perspective: '2000px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="zoom-container text-center" style={{ transformStyle: 'preserve-3d' }}>
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 18 • Perspective Zoom</span>
            <h2 className="text-8xl md:text-[200px] font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              ZOOM
            </h2>
            <p className="text-2xl text-white/50 mt-8">Desde el infinito hacia ti</p>
          </div>
        </div>
      </section>

      {/* SECTION 19: Wave Text */}
      <section className="section-wave-text min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-blue-950/30">
        <div className="text-center px-4">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 19 • Wave Text</span>
          <h2 className="text-6xl md:text-8xl font-black">
            {'ONDULANTE'.split('').map((char, i) => (
              <span key={i} className="wave-char inline-block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">{char}</span>
            ))}
          </h2>
        </div>
      </section>

      {/* SECTION 20: Rotating Gallery */}
      <section className="section-gallery h-screen relative bg-black overflow-hidden">
        <div className="absolute top-8 left-8 z-20">
          <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-sm text-amber-400">
            Efecto 20 • Rotating Gallery
          </span>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="relative w-80 h-80">
            {['🎨', '🎬', '🎵', '📸', '🎮', '📚'].map((emoji, i) => (
              <div key={i} className="gallery-item absolute w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-4xl"
                style={{ top: '50%', left: '50%', transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-120px)` }}>
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 21: Text Decoder */}
      <section className="section-decoder min-h-screen flex items-center justify-center relative bg-gradient-to-b from-green-950/20 to-black">
        <div className="text-center px-4">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 21 • Matrix Decoder</span>
          <h2 className="text-6xl md:text-9xl font-mono font-black text-green-400">
            {'HACKING'.split('').map((char, i) => (
              <span key={i} className="decode-char inline-block" data-char={char}>{char}</span>
            ))}
          </h2>
          <p className="text-xl text-green-400/50 mt-8 font-mono">&gt; Decodificando mensaje...</p>
        </div>
      </section>

      {/* SECTION 22: Stacking Cards */}
      <section className="section-stack min-h-[300vh] relative">
        <div className="sticky top-20 flex items-start justify-center pt-20">
          <div className="relative w-80">
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-8 block text-center">Efecto 22 • Stacking Cards</span>
            {['Pro', 'Premium', 'Enterprise', 'Ultimate'].map((plan, i) => (
              <div key={i} className={`stack-card absolute top-0 left-0 w-full p-8 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 border border-white/20`}
                style={{ zIndex: 4 - i }}>
                <h3 className="text-3xl font-bold text-white mb-4">{plan}</h3>
                <p className="text-white/60">Nivel {i + 1} de suscripción con características exclusivas</p>
                <div className="text-5xl mt-4">{'💎⭐🚀🔥'[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 23: Circular Progress */}
      <section className="section-progress min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-cyan-950/20">
        <div className="text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 23 • Circular Progress</span>
          <svg className="w-64 h-64 mx-auto mb-8" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle className="progress-circle" cx="50" cy="50" r="45" fill="none" stroke="url(#progressGrad)" strokeWidth="8" strokeLinecap="round"
              style={{ strokeDasharray: 283, strokeDashoffset: 283, transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <text x="50" y="55" textAnchor="middle" className="text-3xl font-bold fill-white">100%</text>
          </svg>
          <h2 className="text-4xl font-black text-white">Progreso Circular</h2>
        </div>
      </section>

      {/* SECTION 24: Matrix Rain */}
      <section className="section-matrix min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <div className="absolute inset-0 flex justify-around">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="matrix-column text-green-400 font-mono text-xs opacity-60 flex flex-col"
              style={{ transform: 'translateY(-100%)' }}>
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="mb-1">{String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="relative z-10 text-center">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 24 • Matrix Rain</span>
          <h2 className="text-6xl md:text-8xl font-black text-green-400">MATRIX</h2>
        </div>
      </section>

      {/* SECTION 25: Magnetic Grid */}
      <section className="section-magnetic min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-fuchsia-950/20">
        <div className="text-center">
          <span className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 25 • Magnetic Grid</span>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="magnetic-item w-20 h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-2xl">
                {['⚡', '💫', '✨', '🌟', '💎', '🔮', '🎯', '🚀', '💜', '🌸', '🦋', '🔥', '⭐', '💡', '🎨', '🎭'][i]}
              </div>
            ))}
          </div>
          <h2 className="text-4xl font-black text-white">Grid Magnético</h2>
        </div>
      </section>

      {/* SECTION 26: Kinetic Typography */}
      <section className="section-kinetic min-h-[200vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="flex flex-col gap-4">
            {['DISEÑO', 'CÓDIGO', 'MAGIA', 'PODER'].map((word, i) => (
              <span key={i} className={`kinetic-word text-7xl md:text-9xl font-black ${i % 2 === 0 ? 'text-blue-400' : 'text-cyan-400'}`}>
                {word}
              </span>
            ))}
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <span className="text-blue-400 text-sm font-semibold">Efecto 26 • Kinetic Typography</span>
          </div>
        </div>
      </section>

      {/* SECTION 27: 3D Tunnel */}
      <section className="section-tunnel min-h-[200vh] relative" style={{ perspective: '1000px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="tunnel-ring absolute border-4 border-purple-500/50 rounded-full"
                style={{
                  width: `${100 + i * 80}px`,
                  height: `${100 + i * 80}px`,
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translateZ(${-i * 100}px)`
                }} />
            ))}
          </div>
          <div className="absolute z-10 text-center">
            <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Efecto 27 • 3D Tunnel</span>
          </div>
        </div>
      </section>

      {/* SECTION 28: Particle Explosion */}
      <section className="section-explosion min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="explosion-particle absolute w-4 h-4 rounded-full"
              style={{ background: `hsl(${i * 7}, 70%, 50%)` }} />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Efecto 28 • Particle Explosion</span>
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">BOOM!</h2>
        </div>
      </section>

      {/* SECTION 29: Flip Book */}
      <section className="section-flipbook min-h-[400vh] relative" style={{ perspective: '2000px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-80 h-96" style={{ transformStyle: 'preserve-3d' }}>
            {['🎬', '🎨', '🚀', '💎', '⚡'].map((emoji, i) => (
              <div key={i} className="flip-page absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/10"
                style={{ transformOrigin: 'top center', backfaceVisibility: 'hidden' }}>
                <div className="text-center">
                  <div className="text-8xl mb-4">{emoji}</div>
                  <p className="text-white/60">Página {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <span className="text-slate-400 text-sm font-semibold">Efecto 29 • Flip Book</span>
          </div>
        </div>
      </section>

      {/* SECTION 30: Bouncing Physics */}
      <section className="section-bounce min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-yellow-950/20">
        <div className="text-center">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 30 • Physics Bounce</span>
          <div className="h-80 flex items-end justify-center gap-8 mb-8">
            {['🔴', '🟡', '🟢', '🔵', '🟣'].map((ball, i) => (
              <div key={i} className="bounce-ball text-6xl" style={{ animationDelay: `${i * 0.1}s` }}>{ball}</div>
            ))}
          </div>
          <h2 className="text-4xl font-black text-white">Física Realista</h2>
        </div>
      </section>

      {/* SECTION 31: Spiral Animation */}
      <section className="section-spiral min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-pink-950/20">
        <div className="text-center">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 31 • Spiral Entry</span>
          <div className="relative w-80 h-80 mx-auto mb-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="spiral-item absolute w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-xl"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${60 + i * 10}px)`
                }}>
                {i + 1}
              </div>
            ))}
          </div>
          <h2 className="text-4xl font-black text-white">Entrada en Espiral</h2>
        </div>
      </section>

      {/* SECTION 32: Liquid Blob */}
      <section className="section-liquid min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 32 • Liquid Morph</span>
          <div className="liquid-blob w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
          <h2 className="text-4xl font-black text-white">Morfología Líquida</h2>
        </div>
      </section>

      {/* SECTION 33: Text Mask Reveal */}
      <section className="section-mask min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center">
            <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 33 • Mask Reveal</span>
            <h2 className="mask-reveal text-6xl md:text-9xl font-black bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent"
              style={{ backgroundRepeat: 'no-repeat' }}>
              REVELADO
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 34: Orbit Animation */}
      <section className="section-orbit h-screen relative bg-gradient-to-b from-black via-blue-950/30 to-black">
        <div className="absolute top-8 left-8 z-20">
          <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-sm text-yellow-400">
            Efecto 34 • Solar System
          </span>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl shadow-yellow-500/50" />
            {/* Orbits */}
            {[100, 160, 220].map((r, i) => (
              <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{ width: r * 2, height: r * 2 }} />
            ))}
            {/* Planets */}
            {['🔴', '🔵', '🟢'].map((planet, i) => (
              <div key={i} className="orbit-planet absolute text-3xl"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {planet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 35: Epic Finale */}
      <section className="section-finale min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-black to-blue-950/50" />
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${(i * 1.01) % 100}%`,
                top: `${(i * 1.7) % 100}%`,
                animationDelay: `${(i * 0.05) % 3}s`,
                opacity: 0.3 + (i % 7) * 0.1
              }} />
          ))}
        </div>
        <div className="relative z-10 text-center px-4" style={{ perspective: '1000px' }}>
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 35 • Grand Finale</span>
          <h2 className="finale-text text-7xl md:text-[150px] font-black leading-none mb-8">
            {'ÉPICO'.split('').map((char, i) => (
              <span key={i} className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">{char}</span>
            ))}
          </h2>
          <p className="text-2xl text-white/50 max-w-2xl mx-auto">35 efectos ScrollTrigger de nivel dios. ¡Pero hay más!</p>
        </div>
      </section>

      {/* ============== 30 NEW PROFESSIONAL SECTIONS ============== */}

      {/* SECTION 36: 3D Depth Parallax */}
      <section className="section-depth min-h-[200vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 36 • 3D Depth Parallax</span>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`depth-layer absolute inset-0 flex items-center justify-center`}>
              <div className={`w-${80 - i * 10} h-${80 - i * 10} rounded-3xl bg-gradient-to-br opacity-${100 - i * 15}`}
                style={{ width: `${400 - i * 60}px`, height: `${400 - i * 60}px`, background: `linear-gradient(135deg, hsl(${200 + i * 30}, 70%, 50%), hsl(${220 + i * 30}, 70%, 30%))` }}>
                <div className="w-full h-full flex items-center justify-center text-6xl font-black text-white/30">{i}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 37: Image Zoom Reveal */}
      <section className="section-zoom-image min-h-[200vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
          <span className="absolute top-8 left-8 text-amber-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 37 • Image Zoom Reveal</span>
          <div className="zoom-image w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500 via-orange-600 to-red-700">
            <div className="text-center">
              <div className="text-[200px]">🌅</div>
              <h3 className="text-5xl font-black text-white">Revelación Cinematográfica</h3>
              <p className="text-xl text-white/60 mt-4">Zoom + Clip Circle Animation</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 38: Image Sequence Scroll */}
      <section className="section-sequence h-screen relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-green-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 38 • Image Sequence</span>
        <div className="h-full flex items-center justify-center relative">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="sequence-frame absolute inset-0 flex items-center justify-center"
              style={{ opacity: i === 0 ? 1 : 0 }}>
              <div className="text-center" style={{ transform: `rotate(${i * 6}deg) scale(${1 + i * 0.02})` }}>
                <div className="text-[150px]">🎬</div>
                <div className="text-4xl font-bold text-white">Frame {i + 1}/60</div>
                <div className="w-64 h-2 bg-white/20 rounded-full mt-4 mx-auto">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${(i / 59) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 39: SVG Section Transition */}
      <section className="section-svg-transition min-h-screen relative bg-gradient-to-b from-black to-purple-950/50">
        <span className="absolute top-8 left-8 text-purple-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 39 • SVG Wave Transition</span>
        <div className="h-full flex items-center justify-center py-32">
          <div className="text-center relative z-10">
            <h2 className="text-6xl font-black text-white mb-8">Transiciones SVG</h2>
            <p className="text-xl text-white/50">La onda se anima mientras scrolleas</p>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 600 200" preserveAspectRatio="none">
          <path className="svg-wave-path" d="M0,100 C200,100 400,100 600,100 L600,200 L0,200 Z" fill="url(#waveGrad)" />
          <defs><linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
        </svg>
      </section>

      {/* SECTION 40: SVG Clip Path Mask */}
      <section className="section-svg-clip min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden">
          <span className="absolute top-8 left-8 text-pink-400 text-sm font-semibold tracking-widest uppercase z-30">Efecto 40 • SVG Clip Mask</span>
          <svg className="absolute inset-0 w-full h-full">
            <defs><clipPath id="circleClip"><circle className="clip-circle" cx="50%" cy="50%" r="0" /></clipPath></defs>
            <foreignObject width="100%" height="100%" clipPath="url(#circleClip)">
              <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-700 flex items-center justify-center">
                <div className="text-center"><div className="text-[150px]">✨</div><h3 className="text-5xl font-black text-white">Contenido Revelado</h3></div>
              </div>
            </foreignObject>
          </svg>
          <div className="text-center z-10"><h2 className="text-4xl font-black text-white/30">Scroll para revelar</h2></div>
        </div>
      </section>

      {/* SECTION 41: Multi-layer Parallax */}
      <section className="section-parallax-multi min-h-[300vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen">
          <span className="absolute top-8 left-8 text-teal-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 41 • Multi-Layer Parallax</span>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`parallax-layer absolute inset-0 flex items-end justify-center pb-32`}>
              <div className="text-center" style={{ opacity: 1 - i * 0.2 }}>
                <div style={{ fontSize: `${200 - i * 30}px` }}>{'🏔️🌲🏠⛅'[i - 1]}</div>
                <p className="text-white/50 text-lg">Capa {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 42: AirPods Style Product */}
      <section className="section-airpods h-screen relative bg-black" style={{ perspective: '1000px' }}>
        <span className="absolute top-8 left-8 text-white text-sm font-semibold tracking-widest uppercase z-20">Efecto 42 • AirPods Style</span>
        <div className="h-full flex items-center justify-center">
          <div className="relative">
            <div className="airpods-product text-[200px]" style={{ transformStyle: 'preserve-3d' }}>🎧</div>
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96">
              {['Cancelación de Ruido', 'Audio Espacial', 'Batería 30h', 'Resistente al Agua'].map((feature, i) => (
                <div key={i} className="airpods-feature text-center opacity-0" style={{ position: 'absolute', width: '100%' }}>
                  <h3 className="text-3xl font-bold text-white">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 43: 3D Card Stack */}
      <section className="section-card-stack min-h-[400vh] relative" style={{ perspective: '2000px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-indigo-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 43 • 3D Card Stack</span>
          <div className="relative w-80" style={{ transformStyle: 'preserve-3d' }}>
            {['🚀 Startup', '💡 Ideas', '🎯 Goals', '⚡ Speed', '💎 Quality'].map((card, i) => (
              <div key={i} className="card-3d-stack absolute top-0 left-0 w-full p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 border border-white/20"
                style={{ transformStyle: 'preserve-3d', zIndex: 5 - i }}>
                <div className="text-5xl mb-4">{card.split(' ')[0]}</div>
                <h3 className="text-2xl font-bold text-white">{card.split(' ')[1]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 44: Horizontal Image Gallery */}
      <section className="section-h-gallery h-screen relative bg-gradient-to-r from-slate-900 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-rose-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 44 • Horizontal Gallery</span>
        <div className="h-full flex items-center">
          <div className="h-gallery-track flex gap-8 px-8">
            {['🌅', '🌄', '🏞️', '🌌', '🌠', '🎆', '🌃', '🏙️'].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-[500px] h-[400px] rounded-3xl bg-gradient-to-br from-rose-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center">
                <div className="text-center"><div className="text-[100px]">{img}</div><p className="text-white/60 mt-4">Imagen {i + 1}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 45: Text Scramble */}
      <section className="section-scramble min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center">
          <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 45 • Text Scramble</span>
          <h2 className="scramble-text text-6xl md:text-9xl font-mono font-black text-lime-400">INNOVATION</h2>
          <p className="text-xl text-lime-400/50 mt-8 font-mono">&gt; Decodificando el futuro...</p>
        </div>
      </section>

      {/* SECTION 46: Morphing Blob Background */}
      <section className="section-morph-blob min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
        <div className="morph-blob absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-30 blur-3xl" />
        <div className="relative z-10 text-center">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 46 • Morphing Blob</span>
          <h2 className="text-6xl font-black text-white">Fondo Orgánico</h2>
          <p className="text-xl text-white/50 mt-4">El blob se transforma infinitamente</p>
        </div>
      </section>

      {/* SECTION 47: Cinematic Text Wipe */}
      <section className="section-wipe min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 47 • Text Wipe</span>
            <h2 className="wipe-text text-6xl md:text-9xl font-black" style={{ background: 'linear-gradient(90deg, #f97316, #ea580c)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundRepeat: 'no-repeat' }}>
              CINEMATICO
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 48: 3D Perspective Grid */}
      <section className="section-3d-grid min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-blue-950/30" style={{ perspective: '1500px' }}>
        <div className="text-center">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 48 • 3D Grid</span>
          <div className="grid grid-cols-4 gap-4 mb-8" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="grid-item-3d w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl font-bold text-white">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 49: Magnetic Cards */}
      <section className="section-magnetic-cards min-h-screen flex items-center justify-center relative bg-black" style={{ perspective: '1000px' }}>
        <div className="text-center">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 49 • Magnetic Cards</span>
          <div className="flex gap-8">
            {['⚡', '🚀', '💎'].map((icon, i) => (
              <div key={i} className="magnetic-card w-48 h-64 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
                <span className="text-6xl">{icon}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-8">Mueve el cursor sobre las cards</p>
        </div>
      </section>

      {/* SECTION 50: Infinite Marquee */}
      <section className="section-infinite-marquee min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-emerald-950/30 via-black to-emerald-950/30">
        <span className="absolute top-8 left-8 text-emerald-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 50 • Infinite Marquee</span>
        <div className="infinite-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-[180px] font-black text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mx-8">INFINITO •</span>
          ))}
        </div>
      </section>

      {/* SECTION 51: SVG Path Draw */}
      <section className="section-draw-svg min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 51 • SVG Draw</span>
          <svg className="w-96 h-48 mx-auto mb-8" viewBox="0 0 400 100">
            <path className="draw-svg-path" d="M20,80 Q100,10 200,50 T380,20" fill="none" stroke="url(#drawGrad)" strokeWidth="4" strokeLinecap="round" />
            <path className="draw-svg-path" d="M20,50 C80,90 150,10 200,50 S320,90 380,50" fill="none" stroke="url(#drawGrad2)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="drawGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient>
              <linearGradient id="drawGrad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient>
            </defs>
          </svg>
          <h2 className="text-4xl font-black text-white">Líneas Animadas</h2>
        </div>
      </section>

      {/* SECTION 52: Fade Through */}
      <section className="section-fade-through py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-16 block text-center">Efecto 52 • Fade Through</span>
        {['Diseño', 'Desarrollo', 'Innovación'].map((text, i) => (
          <div key={i} className="fade-section min-h-[50vh] flex items-center justify-center">
            <h2 className="text-7xl font-black bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent">{text}</h2>
          </div>
        ))}
      </section>

      {/* SECTION 53: Zoom Out Reveal */}
      <section className="section-zoom-out min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden">
          <span className="absolute top-8 left-8 text-yellow-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 53 • Zoom Out</span>
          <div className="zoom-out-content text-center">
            <div className="text-[150px]">🔭</div>
            <h2 className="text-5xl font-black text-white">Desde lo Macro</h2>
            <p className="text-xl text-white/50 mt-4">Al detalle perfecto</p>
          </div>
        </div>
      </section>

      {/* SECTION 54: Staggered Text */}
      <section className="section-stagger-text min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-red-950/20">
        <div className="text-center">
          <span className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-12 block">Efecto 54 • Staggered Lines</span>
          {['Creatividad', 'Tecnología', 'Excelencia', 'Futuro'].map((line, i) => (
            <div key={i} className="stagger-line text-5xl md:text-7xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">{line}</div>
          ))}
        </div>
      </section>

      {/* SECTION 55: Floating Elements */}
      <section className="section-floating min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-sky-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 55 • Floating</span>
        <div className="absolute inset-0 flex items-center justify-center">
          {['💫', '✨', '⭐', '🌟', '💎', '🔮'].map((el, i) => (
            <div key={i} className="float-element absolute text-6xl" style={{ left: `${20 + i * 12}%`, top: `${30 + (i % 3) * 20}%` }}>{el}</div>
          ))}
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-black text-white">Elementos Flotantes</h2>
        </div>
      </section>

      {/* SECTION 56: Counter Animation */}
      <section className="section-counter min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-green-950/20">
        <div className="text-center">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-12 block">Efecto 56 • Counter</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ num: 10000, label: 'Usuarios' }, { num: 500, label: 'Proyectos' }, { num: 99, label: '% Satisfacción' }, { num: 24, label: 'Horas Soporte' }].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="text-5xl font-black text-green-400"><span className="count-up" data-target={stat.num}>0</span></div>
                <p className="text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 57: Mask Reveal Box */}
      <section className="section-mask-reveal min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center">
          <span className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 57 • Mask Box</span>
          <div className="mask-box p-16 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-purple-700">
            <div className="text-8xl mb-4">🎭</div>
            <h2 className="text-4xl font-black text-white">Revelado con Máscara</h2>
          </div>
        </div>
      </section>

      {/* SECTION 58: Rotating Wheel */}
      <section className="section-wheel min-h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-b from-black to-amber-950/20">
          <span className="absolute top-8 left-8 text-amber-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 58 • Wheel</span>
          <div className="rotating-wheel text-[200px]">⚙️</div>
        </div>
      </section>

      {/* SECTION 59: Accordion */}
      <section className="section-accordion min-h-screen flex items-center justify-center relative bg-black py-32">
        <div className="max-w-2xl mx-auto w-full px-4">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-8 block text-center">Efecto 59 • Accordion</span>
          {['¿Qué es GSAP?', '¿Qué es ScrollTrigger?', '¿Es gratis?', '¿Cómo empezar?'].map((q, i) => (
            <div key={i} className="accordion-item overflow-hidden bg-white/5 border border-white/10 rounded-2xl mb-4 p-6">
              <h3 className="text-xl font-bold text-white">{q}</h3>
              <p className="text-white/50 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 60: Split Screen */}
      <section className="section-split-screen min-h-[200vh] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex">
          <span className="absolute top-8 left-8 text-white text-sm font-semibold tracking-widest uppercase z-20">Efecto 60 • Split Screen</span>
          <div className="split-left-panel w-1/2 h-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <div className="text-center"><div className="text-8xl">🌊</div><h3 className="text-3xl font-bold text-white mt-4">Izquierda</h3></div>
          </div>
          <div className="split-right-panel w-1/2 h-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <div className="text-center"><div className="text-8xl">🔥</div><h3 className="text-3xl font-bold text-white mt-4">Derecha</h3></div>
          </div>
        </div>
      </section>

      {/* SECTION 61: Typewriter */}
      <section className="section-typewriter min-h-screen flex items-center justify-center relative bg-black">
        <div className="text-center">
          <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-8 block">Efecto 61 • Typewriter</span>
          <div className="typewriter-text text-4xl md:text-6xl font-mono text-lime-400 min-h-[80px]"></div>
          <div className="inline-block w-1 h-12 bg-lime-400 animate-pulse ml-2"></div>
        </div>
      </section>

      {/* SECTION 62: Radial Gradient Follow */}
      <section className="section-radial min-h-screen flex items-center justify-center relative bg-slate-950 cursor-none">
        <span className="absolute top-8 left-8 text-blue-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 62 • Radial Follow</span>
        <div className="text-center z-10">
          <h2 className="text-5xl font-black text-white">Mueve el Cursor</h2>
          <p className="text-xl text-white/50 mt-4">El gradiente te sigue</p>
        </div>
      </section>

      {/* SECTION 63: Flip Cards 3D */}
      <section className="section-flip-3d min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-violet-950/20" style={{ perspective: '2000px' }}>
        <div className="text-center">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-12 block">Efecto 63 • Flip 3D</span>
          <div className="flex gap-8">
            {['🎨', '🚀', '💡'].map((icon, i) => (
              <div key={i} className="flip-card-3d w-40 h-56 rounded-2xl relative" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center text-6xl">{icon}</div>
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-600 to-rose-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white" style={{ transform: 'rotateY(180deg)' }}>FLIP</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 64: Exploding Grid */}
      <section className="section-explode min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-red-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 64 • Exploding Grid</span>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="explode-item w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-orange-600" />
          ))}
        </div>
      </section>

      {/* SECTION 65: Video Scrub (simulated) */}
      <section className="section-video-scrub h-screen relative bg-gradient-to-b from-black to-blue-950/30">
        <span className="absolute top-8 left-8 text-blue-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 65 • Video Scrub</span>
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-[150px]">🎬</div>
            <h2 className="text-5xl font-black text-white mb-4">Video Progress</h2>
            <div className="video-progress text-6xl font-mono text-blue-400">0%</div>
          </div>
        </div>
      </section>

      {/* ========== FREEFRONTEND EFFECTS (66-97) ========== */}

      {/* SECTION 66: Parallax Effect with Decorative Elements */}
      <section className="section-parallax-deco min-h-[200vh] relative bg-gradient-to-b from-indigo-950 via-purple-950 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-indigo-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 66 • Parallax Decorativo</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h2 className="text-6xl md:text-8xl font-black text-white text-center z-10">Parallax<br/>Decorativo</h2>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`parallax-deco absolute w-32 h-32 rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'} opacity-60`}
              style={{ left: `${10 + (i * 12) % 80}%`, top: `${20 + (i * 15) % 60}%` }} />
          ))}
        </div>
      </section>

      {/* SECTION 67: Horizontal Scroll Section (Pinned) */}
      <section className="section-horizontal-scroll min-h-screen relative bg-black">
        <span className="absolute top-8 left-8 text-green-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 67 • Horizontal Scroll Pinned</span>
        <div className="horizontal-scroll-container h-screen flex overflow-hidden">
          {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'].map((text, i) => (
            <div key={i} className={`horizontal-panel flex-shrink-0 w-screen h-screen flex items-center justify-center ${['bg-gradient-to-br from-red-600 to-orange-500', 'bg-gradient-to-br from-green-600 to-teal-500', 'bg-gradient-to-br from-blue-600 to-purple-500', 'bg-gradient-to-br from-pink-600 to-rose-500', 'bg-gradient-to-br from-yellow-500 to-amber-600'][i]}`}>
              <h3 className="text-7xl font-black text-white">{text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 68: Infinite Cover Flow Carousel */}
      <section className="section-coverflow min-h-screen relative bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 68 • Cover Flow Carousel</span>
        <div className="h-screen flex items-center justify-center">
          <div className="relative w-full h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="coverflow-card absolute w-64 h-80 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}>
                <span className="text-6xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 69: Scroll-Driven Gears Animation */}
      <section className="section-gears min-h-[150vh] relative bg-gradient-to-b from-slate-900 to-zinc-900 overflow-hidden">
        <span className="absolute top-8 left-8 text-amber-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 69 • Gears Animation</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative">
            <div className="gear-1 absolute -left-32 -top-16 w-48 h-48 border-8 border-amber-500 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-amber-500 rounded-full" />
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="absolute w-4 h-16 bg-amber-500" style={{ transform: `rotate(${i * 45}deg) translateY(-40px)` }} />
              ))}
            </div>
            <div className="gear-2 w-64 h-64 border-8 border-orange-500 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-orange-500 rounded-full" />
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="absolute w-4 h-20 bg-orange-500" style={{ transform: `rotate(${i * 30}deg) translateY(-56px)` }} />
              ))}
            </div>
            <div className="gear-3 absolute -right-24 top-8 w-40 h-40 border-8 border-yellow-500 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full" />
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="absolute w-4 h-12 bg-yellow-500" style={{ transform: `rotate(${i * 60}deg) translateY(-32px)` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 70: Illustration Parallax Hero */}
      <section className="section-illustration-parallax min-h-[200vh] relative bg-gradient-to-b from-sky-900 via-sky-800 to-sky-950 overflow-hidden">
        <span className="absolute top-8 left-8 text-sky-300 text-sm font-semibold tracking-widest uppercase z-20">Efecto 70 • Illustration Parallax</span>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="illustration-layer absolute bottom-0 w-full h-32 bg-gradient-to-t from-green-800 to-transparent" />
          <div className="illustration-layer absolute bottom-20 left-10 w-40 h-60 bg-green-700 rounded-t-full" />
          <div className="illustration-layer absolute bottom-20 right-20 w-32 h-48 bg-green-600 rounded-t-full" />
          <div className="illustration-layer absolute top-20 right-1/4 w-24 h-24 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
          <div className="illustration-layer absolute top-40 left-1/4 w-48 h-24 bg-white/30 rounded-full blur-sm" />
          <h2 className="relative z-10 text-6xl md:text-8xl font-black text-white text-center">Paisaje<br/>Parallax</h2>
        </div>
      </section>

      {/* SECTION 71: Infinite Scrolling Cards 3D */}
      <section className="section-infinite-cards min-h-screen relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-rose-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 71 • Infinite Cards 3D</span>
        <div className="h-screen flex items-center justify-center" style={{ perspective: '1000px' }}>
          <div className="relative w-80 h-96" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`infinite-card absolute inset-0 rounded-2xl flex items-center justify-center text-6xl font-black text-white ${['bg-gradient-to-br from-rose-500 to-pink-600', 'bg-gradient-to-br from-violet-500 to-purple-600', 'bg-gradient-to-br from-blue-500 to-cyan-600', 'bg-gradient-to-br from-emerald-500 to-teal-600', 'bg-gradient-to-br from-amber-500 to-orange-600'][i]}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 72: Super Mario Scrollytelling */}
      <section className="section-mario min-h-screen relative bg-gradient-to-b from-sky-400 to-sky-600 overflow-hidden">
        <span className="absolute top-8 left-8 text-red-600 text-sm font-semibold tracking-widest uppercase z-20">Efecto 72 • Mario Scrollytelling</span>
        <div className="mario-bg absolute inset-0 flex items-end">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-16 h-16 bg-amber-700 border-2 border-amber-900" style={{ marginBottom: `${(i % 3) * 16}px` }} />
          ))}
        </div>
        <div className="h-screen flex items-end pb-20">
          <div className="mario-character text-8xl">🏃</div>
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <h2 className="text-6xl font-black text-white drop-shadow-lg">LEVEL 1-1</h2>
        </div>
      </section>

      {/* SECTION 73: Draggable Timeline */}
      <section className="section-timeline min-h-screen relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <span className="absolute top-8 left-8 text-emerald-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 73 • Timeline Horizontal</span>
        <div className="h-screen flex items-center overflow-hidden">
          <div className="flex gap-8 px-8">
            {['2020', '2021', '2022', '2023', '2024', '2025'].map((year, i) => (
              <div key={i} className="timeline-item flex-shrink-0 w-80 h-96 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 flex flex-col justify-between">
                <span className="text-6xl font-black text-white/30">{year}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Milestone {i + 1}</h3>
                  <p className="text-white/70">Important event description for this year.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 74: Preloader Hero Sequence */}
      <section className="section-hero-sequence min-h-screen relative bg-black flex items-center justify-center overflow-hidden">
        <span className="absolute top-8 left-8 text-fuchsia-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 74 • Hero Sequence</span>
        <div className="text-center">
          <h2 className="hero-sequence-title text-7xl md:text-9xl font-black bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-6">WELCOME</h2>
          <p className="hero-sequence-subtitle text-2xl text-white/60">Experience the future of web animation</p>
        </div>
      </section>

      {/* SECTION 75: 3D Card Carousel Scroll */}
      <section className="section-3d-carousel min-h-screen relative bg-gradient-to-b from-violet-950 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-violet-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 75 • 3D Carousel</span>
        <div className="h-screen flex items-center justify-center" style={{ perspective: '1000px' }}>
          <div className="relative w-96 h-96" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="carousel-3d-card absolute w-48 h-64 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-xl flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="text-5xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 76: Full Screen Slideshow with ClipPath */}
      <section className="section-slideshow min-h-[400vh] relative">
        <span className="absolute top-8 left-8 text-lime-400 text-sm font-semibold tracking-widest uppercase z-30">Efecto 76 • ClipPath Slideshow</span>
        {['from-lime-600 to-green-700', 'from-cyan-600 to-blue-700', 'from-rose-600 to-pink-700', 'from-amber-500 to-orange-600'].map((gradient, i) => (
          <div key={i} className={`slideshow-slide sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br ${gradient}`}>
            <h2 className="text-8xl font-black text-white">Slide {i + 1}</h2>
          </div>
        ))}
      </section>

      {/* SECTION 77: Layout Explorations with Stagger */}
      <section className="section-layout min-h-screen relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 overflow-hidden">
        <span className="absolute top-8 left-8 text-teal-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 77 • Layout Stagger</span>
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-black text-white mb-12 text-center">Layout Grid</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`layout-box h-48 rounded-2xl bg-gradient-to-br ${['from-teal-500 to-cyan-600', 'from-purple-500 to-pink-600', 'from-orange-500 to-red-600', 'from-green-500 to-emerald-600'][i % 4]} flex items-center justify-center`}>
                <span className="text-4xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 78: React-style Parallax */}
      <section className="section-react-parallax min-h-[200vh] relative bg-gradient-to-b from-indigo-900 to-purple-950 overflow-hidden">
        <span className="absolute top-8 left-8 text-indigo-300 text-sm font-semibold tracking-widest uppercase z-20">Efecto 78 • React Parallax</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`react-parallax-item w-32 h-32 rounded-2xl bg-gradient-to-br ${i % 2 === 0 ? 'from-indigo-500 to-blue-600' : 'from-purple-500 to-pink-600'} flex items-center justify-center shadow-xl`}>
                <span className="text-3xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 79: Simple Horizontal Scroll */}
      <section className="section-h-scroll-simple min-h-screen relative bg-black">
        <span className="absolute top-8 left-8 text-orange-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 79 • H-Scroll Simple</span>
        <div className="h-screen flex overflow-hidden">
          {['Panel A', 'Panel B', 'Panel C', 'Panel D'].map((text, i) => (
            <div key={i} className={`h-scroll-panel flex-shrink-0 w-screen h-screen flex items-center justify-center ${['bg-orange-600', 'bg-red-600', 'bg-pink-600', 'bg-purple-600'][i]}`}>
              <h3 className="text-8xl font-black text-white">{text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 80: Scroll-Based Reveal In/Out */}
      <section className="section-reveal min-h-[300vh] relative bg-gradient-to-b from-slate-900 to-black py-40">
        <span className="absolute top-8 left-8 text-sky-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 80 • Reveal In/Out</span>
        <div className="container mx-auto px-8 space-y-96">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="reveal-box opacity-0 translate-y-20 p-12 rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 max-w-2xl mx-auto">
              <h3 className="text-4xl font-black text-white mb-4">Reveal Box {i + 1}</h3>
              <p className="text-white/70">This box appears when scrolling into view and disappears when leaving.</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 81: Fanned Cards Carousel */}
      <section className="section-fanned min-h-screen relative bg-gradient-to-b from-amber-900 to-orange-950 overflow-hidden">
        <span className="absolute top-8 left-8 text-amber-300 text-sm font-semibold tracking-widest uppercase z-20">Efecto 81 • Fanned Cards</span>
        <div className="h-screen flex items-center justify-center">
          <div className="relative w-64 h-96">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`fanned-card absolute inset-0 rounded-2xl bg-gradient-to-br ${['from-amber-400 to-orange-500', 'from-red-400 to-rose-500', 'from-pink-400 to-fuchsia-500', 'from-purple-400 to-violet-500', 'from-blue-400 to-cyan-500'][i]} shadow-xl flex items-center justify-center`}
                style={{ transformOrigin: 'bottom center' }}>
                <span className="text-6xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 82: Three.js Style 3D Model Scroll */}
      <section className="section-3d-model min-h-screen relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 82 • 3D Model Rotation</span>
        <div className="h-screen flex items-center justify-center" style={{ perspective: '1000px' }}>
          <div className="model-3d w-64 h-64 relative" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl" style={{ transform: 'translateZ(32px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl" style={{ transform: 'translateZ(-32px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-6xl">📦</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 83: Hero Reveal with Split Text Effect */}
      <section className="section-hero-reveal min-h-screen relative bg-gradient-to-b from-rose-950 to-black flex items-center justify-center overflow-hidden">
        <span className="absolute top-8 left-8 text-rose-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 83 • Split Text Reveal</span>
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white">
            {'SPLIT TEXT'.split('').map((char, i) => (
              <span key={i} className="hero-reveal-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h2>
          <p className="text-xl text-white/50 mt-6">Each character animates individually</p>
        </div>
      </section>

      {/* SECTION 84: Color Spectrum Layout */}
      <section className="section-spectrum min-h-screen relative bg-black py-20 overflow-hidden">
        <span className="absolute top-8 left-8 text-pink-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 84 • Color Spectrum</span>
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-black text-white mb-12 text-center">Spectrum</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-teal-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-rose-500'].map((color, i) => (
              <div key={i} className={`spectrum-block w-24 h-24 rounded-2xl ${color}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 85: CSS Scroll-Driven Progress Bar */}
      <section className="section-progress-bar min-h-[200vh] relative bg-gradient-to-b from-emerald-950 to-black">
        <span className="absolute top-8 left-8 text-emerald-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 85 • Progress Bar</span>
        <div className="fixed top-0 left-0 right-0 h-2 bg-white/20 z-50">
          <div className="scroll-progress-fill h-full bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left" style={{ transform: 'scaleX(0)' }} />
        </div>
        <div className="h-screen flex items-center justify-center sticky top-0">
          <h2 className="text-6xl font-black text-white text-center">Scroll to see<br/>progress bar</h2>
        </div>
      </section>

      {/* SECTION 86: SVG Illustration Transition */}
      <section className="section-svg-illustration min-h-screen relative bg-gradient-to-b from-violet-950 to-black flex items-center justify-center overflow-hidden">
        <span className="absolute top-8 left-8 text-violet-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 86 • SVG Path Draw</span>
        <svg className="svg-illustration w-96 h-96" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 L90 90 L10 90 Z" className="text-violet-400" strokeDasharray="1000" strokeDashoffset="0" />
          <circle cx="50" cy="50" r="30" className="text-pink-400" strokeDasharray="1000" strokeDashoffset="0" />
          <rect x="25" y="25" width="50" height="50" className="text-cyan-400" strokeDasharray="1000" strokeDashoffset="0" />
        </svg>
      </section>

      {/* SECTION 87: SVG Clip Path Animation */}
      <section className="section-clip-path min-h-[200vh] relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-lime-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 87 • Clip Path Reveal</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="clip-path-reveal w-[80vw] h-[80vh] bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 rounded-3xl flex items-center justify-center"
            style={{ clipPath: 'circle(0% at 50% 50%)' }}>
            <h2 className="text-6xl md:text-8xl font-black text-white text-center">REVEALED</h2>
          </div>
        </div>
      </section>

      {/* SECTION 88: Movie Stacking Cards */}
      <section className="section-movie-stack min-h-[200vh] relative bg-gradient-to-b from-slate-900 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-red-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 88 • Movie Stack</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-80 h-[450px]">
            {['The Matrix', 'Inception', 'Interstellar', 'Blade Runner', 'Dune'].map((movie, i) => (
              <div key={i} className={`movie-card absolute inset-0 rounded-2xl bg-gradient-to-br ${['from-green-600 to-emerald-800', 'from-blue-600 to-indigo-800', 'from-purple-600 to-violet-800', 'from-cyan-600 to-teal-800', 'from-amber-600 to-orange-800'][i]} p-6 flex flex-col justify-end shadow-2xl`}>
                <h3 className="text-3xl font-black text-white">{movie}</h3>
                <p className="text-white/60">Sci-Fi Classic</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 89: Parallax Scroll with Multiple Layers */}
      <section className="section-multi-parallax min-h-[300vh] relative bg-gradient-to-b from-sky-900 via-indigo-900 to-purple-950 overflow-hidden">
        <span className="absolute top-8 left-8 text-sky-300 text-sm font-semibold tracking-widest uppercase z-20">Efecto 89 • Multi-Layer Parallax</span>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="multi-parallax-layer absolute w-full h-full bg-gradient-to-t from-purple-900/50 to-transparent" />
          <div className="multi-parallax-layer absolute bottom-0 w-full h-64 bg-gradient-to-t from-indigo-900 to-transparent" />
          <div className="multi-parallax-layer absolute w-96 h-96 rounded-full bg-yellow-400/20 blur-3xl top-20 left-1/4" />
          <div className="multi-parallax-layer absolute w-64 h-64 rounded-full bg-pink-500/30 blur-2xl bottom-40 right-1/4" />
          <h2 className="relative z-10 text-7xl font-black text-white text-center">LAYERS</h2>
        </div>
      </section>

      {/* SECTION 90: Grid to Slider Transition */}
      <section className="section-grid-slider min-h-screen relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-fuchsia-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 90 • Grid to Slider</span>
        <div className="h-screen flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`grid-slider-item w-24 h-24 rounded-xl bg-gradient-to-br ${['from-fuchsia-500 to-pink-600', 'from-purple-500 to-violet-600', 'from-blue-500 to-cyan-600'][i % 3]} flex items-center justify-center`}>
                <span className="text-2xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 91: Stagger In/Out with Mask */}
      <section className="section-mask-text min-h-screen relative bg-gradient-to-b from-slate-900 to-black flex items-center justify-center overflow-hidden">
        <span className="absolute top-8 left-8 text-amber-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 91 • Mask Text Reveal</span>
        <div className="text-center space-y-4">
          {['MASKED', 'TEXT', 'REVEAL', 'EFFECT'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <h2 className="mask-text-line text-6xl md:text-8xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{line}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 92: Push-Right Menu Animation */}
      <section className="section-push-menu min-h-screen relative bg-gradient-to-b from-teal-950 to-black py-20 overflow-hidden">
        <span className="absolute top-8 left-8 text-teal-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 92 • Push Menu</span>
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-black text-white mb-12">Menu Items</h2>
          <div className="space-y-4 max-w-md">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
              <div key={i} className="push-menu-item p-6 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-all cursor-pointer">
                <span className="text-2xl font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 93: Book Page Flip Effect */}
      <section className="section-book min-h-screen relative bg-gradient-to-b from-amber-950 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-amber-300 text-sm font-semibold tracking-widest uppercase z-20">Efecto 93 • Book Flip</span>
        <div className="h-screen flex items-center justify-center" style={{ perspective: '1500px' }}>
          <div className="relative w-80 h-[450px]" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`book-page absolute inset-0 rounded-r-lg bg-gradient-to-r ${['from-amber-100 to-amber-200', 'from-orange-100 to-orange-200', 'from-yellow-100 to-yellow-200', 'from-lime-100 to-lime-200', 'from-emerald-100 to-emerald-200'][i]} p-8 shadow-xl`}
                style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden' }}>
                <h3 className="text-3xl font-bold text-slate-800">Page {i + 1}</h3>
                <p className="text-slate-600 mt-4">Content for page {i + 1}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 94: Scroll Velocity Text */}
      <section className="section-velocity min-h-[200vh] relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-pink-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 94 • Velocity Skew</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h2 className="velocity-text text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">VELOCITY</h2>
        </div>
      </section>

      {/* SECTION 95: Morphing Shapes */}
      <section className="section-morph min-h-[200vh] relative bg-gradient-to-b from-violet-950 to-black overflow-hidden">
        <span className="absolute top-8 left-8 text-violet-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 95 • Morphing Shape</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="morph-shape w-64 h-64 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-3xl" />
        </div>
      </section>

      {/* SECTION 96: Scroll Snap Gallery */}
      <section className="section-snap min-h-screen relative bg-gradient-to-b from-slate-900 to-black py-20 overflow-hidden">
        <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 96 • Snap Gallery</span>
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-black text-white mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`snap-item aspect-square rounded-2xl bg-gradient-to-br ${['from-cyan-500 to-blue-600', 'from-purple-500 to-pink-600', 'from-green-500 to-teal-600', 'from-orange-500 to-red-600'][i % 4]} flex items-center justify-center`}>
                <span className="text-5xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 97: Final Mega Effect */}
      <section className="section-mega-final min-h-screen relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-white text-sm font-semibold tracking-widest uppercase z-20">Efecto 97 • Mega Final</span>
        <div className="h-screen flex items-center justify-center relative">
          <div className="mega-particles absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="absolute w-2 h-2 bg-white rounded-full"
                style={{ left: `${(i * 2) % 100}%`, top: `${(i * 3) % 100}%`, opacity: 0.3 }} />
            ))}
          </div>
          <div className="mega-circle absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 opacity-50 blur-xl" />
          <h2 className="mega-text relative z-10 text-7xl md:text-9xl font-black text-white text-center">THE END</h2>
        </div>
      </section>

      {/* GRAND FINALE */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-t from-purple-950/50 via-black to-blue-950/50">
        <div className="absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{ left: `${(i * 0.67) % 100}%`, top: `${(i * 1.3) % 100}%`, animationDelay: `${(i * 0.03) % 3}s`, opacity: 0.2 + (i % 5) * 0.1 }} />
          ))}
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">97 EFECTOS</h2>
          <p className="text-2xl text-white/50 max-w-2xl mx-auto mb-12">Has explorado todos los efectos ScrollTrigger de nivel profesional. ¡Ahora es tu turno de crear!</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            ¿Listo para<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Implementar</span>?
          </h2>
          <p className="text-xl text-white/50 mb-12">Todos estos efectos están disponibles con GSAP ScrollTrigger. Lleva tu web al siguiente nivel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              ← Volver al Inicio
            </Link>
            <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Documentación GSAP →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

