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

        // Section 38: Scroll Velocity Skew
        let skewSetter = gsap.quickTo('.velocity-skew-text', 'skewX', { duration: 0.3 })
        ScrollTrigger.create({
          trigger: '.section-velocity-skew',
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const velocity = self.getVelocity()
            skewSetter(gsap.utils.clamp(-15, 15, velocity / 300))
          }
        })

        // Section 39: Video Scrub Control
        const video = document.querySelector('.scroll-video') as HTMLVideoElement
        if (video) {
          video.pause()
          ScrollTrigger.create({
            trigger: '.section-video-scrub',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              if (video.duration) {
                video.currentTime = self.progress * video.duration
              }
            }
          })
        }

        // Section 40: Text Scramble
        ScrollTrigger.create({
          trigger: '.section-scramble',
          start: 'top 60%',
          onEnter: () => {
            const el = document.querySelector('.scramble-text') as HTMLElement
            if (el) {
              const finalText = el.getAttribute('data-text') || 'SCRAMBLE'
              const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
              let iteration = 0
              const interval = setInterval(() => {
                el.innerText = finalText.split('').map((char, i) => {
                  if (i < iteration) return finalText[i]
                  return chars[Math.floor(Math.random() * chars.length)]
                }).join('')
                if (iteration >= finalText.length) clearInterval(interval)
                iteration += 1/3
              }, 30)
            }
          }
        })

        // Section 41: Sticky Cross-Fade
        gsap.utils.toArray('.crossfade-panel').forEach((panel, i) => {
          gsap.fromTo(panel as HTMLElement,
            { opacity: 0 },
            { opacity: 1, ease: 'none',
              scrollTrigger: {
                trigger: panel as HTMLElement,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true
              }
            }
          )
        })

        // Section 42: Perspective Tilt on Scroll
        gsap.utils.toArray('.tilt-card').forEach((card) => {
          gsap.to(card as HTMLElement, {
            rotateX: 15,
            rotateY: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          })
        })

        // Section 43: Text Highlight Reveal
        gsap.fromTo('.highlight-text span',
          { backgroundSize: '0% 100%' },
          { backgroundSize: '100% 100%', stagger: 0.1, ease: 'none',
            scrollTrigger: { trigger: '.section-highlight', start: 'top 60%', end: 'center center', scrub: 1 }
          }
        )

        // Section 44: Folding Paper Effect
        gsap.utils.toArray('.paper-fold').forEach((fold, i) => {
          gsap.fromTo(fold as HTMLElement,
            { rotateX: -90, transformOrigin: 'top center' },
            { rotateX: 0, ease: 'power2.out',
              scrollTrigger: {
                trigger: '.section-paper',
                start: `top+=${i * 100} 60%`,
                end: `top+=${i * 100 + 200} 30%`,
                scrub: 1
              }
            }
          )
        })

        // Section 45: Curtain Reveal
        gsap.to('.curtain-left', {
          xPercent: -100,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '.section-curtain', start: 'top 50%', end: 'center center', scrub: 1 }
        })
        gsap.to('.curtain-right', {
          xPercent: 100,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '.section-curtain', start: 'top 50%', end: 'center center', scrub: 1 }
        })

        // Section 46: CSS Filter Progression
        gsap.fromTo('.filter-image',
          { filter: 'grayscale(100%) blur(10px) brightness(0.3)' },
          { filter: 'grayscale(0%) blur(0px) brightness(1)', ease: 'none',
            scrollTrigger: { trigger: '.section-filter', start: 'top 70%', end: 'center center', scrub: 1 }
          }
        )

        // Section 47: Scatter Gather 3D
        gsap.utils.toArray('.scatter-item').forEach((item, i) => {
          const randomX = (Math.random() - 0.5) * 500
          const randomY = (Math.random() - 0.5) * 500
          const randomZ = (Math.random() - 0.5) * 500
          const randomRotate = Math.random() * 360
          gsap.fromTo(item as HTMLElement,
            { x: randomX, y: randomY, z: randomZ, rotation: randomRotate, opacity: 0 },
            { x: 0, y: 0, z: 0, rotation: 0, opacity: 1, ease: 'power3.out',
              scrollTrigger: { trigger: '.section-scatter', start: 'top 60%', end: 'center center', scrub: 1 }
            }
          )
        })

        // Section 48: Scroll Progress Map
        gsap.utils.toArray('.progress-dot').forEach((dot, i) => {
          ScrollTrigger.create({
            trigger: `.map-section-${i + 1}`,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => gsap.to(dot as HTMLElement, { scale: 1.5, backgroundColor: '#00ff88', duration: 0.3 }),
            onLeave: () => gsap.to(dot as HTMLElement, { scale: 1, backgroundColor: '#ffffff', duration: 0.3 }),
            onEnterBack: () => gsap.to(dot as HTMLElement, { scale: 1.5, backgroundColor: '#00ff88', duration: 0.3 }),
            onLeaveBack: () => gsap.to(dot as HTMLElement, { scale: 1, backgroundColor: '#ffffff', duration: 0.3 })
          })
        })

        // Section 49: Zoom to Detail
        gsap.fromTo('.zoom-detail',
          { scale: 0.1, opacity: 0.3 },
          { scale: 1, opacity: 1, ease: 'power2.inOut',
            scrollTrigger: { trigger: '.section-zoom-detail', start: 'top top', end: 'bottom bottom', scrub: 1, pin: true }
          }
        )

        // Section 50: Confetti Celebration
        ScrollTrigger.create({
          trigger: '.section-confetti',
          start: 'top 60%',
          once: true,
          onEnter: () => {
            const container = document.querySelector('.confetti-container')
            if (container) {
              for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div')
                confetti.className = 'confetti-piece'
                confetti.style.cssText = `
                  position: absolute;
                  width: ${Math.random() * 10 + 5}px;
                  height: ${Math.random() * 10 + 5}px;
                  background: hsl(${Math.random() * 360}, 100%, 50%);
                  left: 50%;
                  top: 50%;
                  border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                `
                container.appendChild(confetti)
                gsap.to(confetti, {
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                  rotation: Math.random() * 720,
                  opacity: 0,
                  duration: 2 + Math.random(),
                  ease: 'power2.out'
                })
              }
            }
          }
        })

        // Section 51: Magnetic Cursor Effect
        const magneticItems = document.querySelectorAll('.magnetic-cursor-item')
        magneticItems.forEach((item) => {
          const el = item as HTMLElement
          el.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3 })
          })
          el.addEventListener('mouseleave', () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
          })
        })

        // Section 52: Particle Flow
        const particleCanvas = document.querySelector('.particle-canvas') as HTMLCanvasElement
        if (particleCanvas) {
          const ctx = particleCanvas.getContext('2d')
          particleCanvas.width = window.innerWidth
          particleCanvas.height = window.innerHeight
          const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
          for (let i = 0; i < 100; i++) {
            particles.push({
              x: Math.random() * particleCanvas.width,
              y: Math.random() * particleCanvas.height,
              vx: (Math.random() - 0.5) * 2,
              vy: Math.random() * 2 + 1,
              size: Math.random() * 3 + 1
            })
          }
          let scrollVelocity = 0
          ScrollTrigger.create({
            trigger: '.section-particle-flow',
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => { scrollVelocity = self.getVelocity() / 1000 }
          })
          function animateParticles() {
            if (ctx) {
              ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height)
              particles.forEach((p) => {
                p.y += p.vy + scrollVelocity
                p.x += p.vx
                if (p.y > particleCanvas.height) { p.y = 0; p.x = Math.random() * particleCanvas.width }
                if (p.y < 0) { p.y = particleCanvas.height }
                if (p.x > particleCanvas.width) p.x = 0
                if (p.x < 0) p.x = particleCanvas.width
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(100, 200, 255, ${0.5 + Math.abs(scrollVelocity) * 0.1})`
                ctx.fill()
              })
            }
            requestAnimationFrame(animateParticles)
          }
          animateParticles()
        }

        // Section 53: Scroll Snap Hybrid
        gsap.utils.toArray('.snap-section').forEach((section) => {
          gsap.fromTo(section as HTMLElement,
            { opacity: 0.3, scale: 0.9 },
            { opacity: 1, scale: 1, ease: 'power2.out',
              scrollTrigger: { trigger: section as HTMLElement, start: 'top center', end: 'center center', scrub: 1 }
            }
          )
        })

        // Section 54: Typewriter Scroll
        ScrollTrigger.create({
          trigger: '.section-typewriter',
          start: 'top 60%',
          end: 'center center',
          scrub: 1,
          onUpdate: (self) => {
            const text = document.querySelector('.typewriter-text') as HTMLElement
            const fullText = text?.getAttribute('data-text') || ''
            if (text) {
              const chars = Math.floor(self.progress * fullText.length)
              text.textContent = fullText.substring(0, chars) + (self.progress < 1 ? '|' : '')
            }
          }
        })

        // Section 55: Color Morph Background
        gsap.to('.section-color-morph', {
          background: 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: '.section-color-morph',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })

        // Section 56: 3D Card Stack Shuffle
        gsap.utils.toArray('.shuffle-card').forEach((card, i, arr) => {
          gsap.fromTo(card as HTMLElement,
            { z: -i * 50, rotateY: i * 5, x: i * 20 },
            { z: 0, rotateY: 0, x: 0, ease: 'power2.out',
              scrollTrigger: { trigger: '.section-shuffle', start: 'top 60%', end: 'center center', scrub: 1 }
            }
          )
        })

        // Section 57: Infinite Zoom Tunnel
        gsap.to('.tunnel-layer', {
          scale: 10,
          opacity: 0,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: '.section-infinite-tunnel', start: 'top top', end: 'bottom bottom', scrub: 1, pin: true }
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
            Descubre 37 efectos de animación profesionales impulsados por GSAP ScrollTrigger. Cada sección es una experiencia única.
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
          <p className="text-2xl text-white/50 max-w-2xl mx-auto">37 efectos ScrollTrigger de nivel profesional. ¡Ahora es tu turno de crear!</p>
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

      {/* SECTION 38: Scroll Velocity Skew */}
      <section className="section-velocity-skew min-h-[200vh] relative bg-gradient-to-b from-black via-indigo-950/30 to-black overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-indigo-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 38 • Velocity Skew</span>
          <div className="text-center">
            <h2 className="velocity-skew-text text-6xl md:text-[150px] font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">
              VELOCITY
            </h2>
            <p className="text-xl text-white/50 mt-8">Scrollea rápido para ver el efecto skew</p>
          </div>
        </div>
      </section>

      {/* SECTION 39: Video Scrub Control */}
      <section className="section-video-scrub min-h-[300vh] relative bg-black">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-red-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 39 • Video Scrub</span>
          <div className="relative w-full max-w-4xl aspect-video bg-gradient-to-br from-red-900 to-orange-900 rounded-3xl overflow-hidden flex items-center justify-center">
            <video className="scroll-video w-full h-full object-cover opacity-80" muted playsInline preload="auto">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl">🎬</span>
                <p className="text-white text-xl mt-4">Scrollea para controlar el video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 40: Text Scramble */}
      <section className="section-scramble min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-green-950/30">
        <span className="absolute top-8 left-8 text-green-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 40 • Text Scramble</span>
        <div className="text-center">
          <h2 className="scramble-text text-5xl md:text-8xl font-mono font-black text-green-400" data-text="HACKED">
            HACKED
          </h2>
          <p className="text-xl text-white/50 mt-8">Efecto de hackeo estilo película</p>
        </div>
      </section>

      {/* SECTION 41: Sticky Cross-Fade */}
      <section className="section-crossfade min-h-[400vh] relative">
        <span className="absolute top-8 left-8 text-purple-400 text-sm font-semibold tracking-widest uppercase z-30">Efecto 41 • Cross-Fade</span>
        <div className="sticky top-0 h-screen">
          {['from-purple-900 to-indigo-900', 'from-blue-900 to-cyan-900', 'from-teal-900 to-green-900', 'from-yellow-900 to-orange-900'].map((gradient, i) => (
            <div key={i} className={`crossfade-panel absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <h2 className="text-6xl md:text-8xl font-black text-white/80">Panel {i + 1}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 42: Perspective Tilt on Scroll */}
      <section className="section-tilt min-h-screen flex items-center py-20 relative bg-gradient-to-b from-black to-slate-900" style={{ perspective: '1000px' }}>
        <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 42 • Perspective Tilt</span>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="tilt-card p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30" style={{ transformStyle: 'preserve-3d' }}>
                <div className="text-6xl mb-4">{'🎴🃏🎯'[i-1]}</div>
                <h3 className="text-2xl font-bold text-white">Card {i}</h3>
                <p className="text-white/60 mt-2">Se inclina según tu posición de scroll</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 43: Text Highlight Reveal */}
      <section className="section-highlight min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-900 to-black">
        <span className="absolute top-8 left-8 text-yellow-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 43 • Highlight Reveal</span>
        <div className="text-center max-w-4xl px-8">
          <p className="highlight-text text-3xl md:text-5xl font-bold text-white leading-relaxed">
            {['Este', 'texto', 'se', 'ilumina', 'palabra', 'por', 'palabra', 'mientras', 'scrolleas'].map((word, i) => (
              <span key={i} className="inline-block mx-2 px-2" style={{ background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 85%', backgroundSize: '0% 30%' }}>
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* SECTION 44: Folding Paper Effect */}
      <section className="section-paper min-h-[300vh] relative bg-gradient-to-b from-black to-amber-950/30" style={{ perspective: '2000px' }}>
        <span className="absolute top-8 left-8 text-amber-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 44 • Paper Fold</span>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="paper-fold w-80 h-40 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-xl flex items-center justify-center border-b border-amber-300" style={{ transformOrigin: 'top center' }}>
                <span className="text-3xl font-bold text-amber-900">Fold {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 45: Curtain Reveal */}
      <section className="section-curtain min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-rose-400 text-sm font-semibold tracking-widest uppercase z-30">Efecto 45 • Curtain Reveal</span>
        <div className="curtain-left absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-rose-900 to-rose-800 z-20 flex items-center justify-end pr-8">
          <span className="text-6xl">🎭</span>
        </div>
        <div className="curtain-right absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rose-900 to-rose-800 z-20 flex items-center justify-start pl-8">
          <span className="text-6xl">🎭</span>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">REVEAL!</h2>
          <p className="text-xl text-white/50 mt-4">El telón se abre con el scroll</p>
        </div>
      </section>

      {/* SECTION 46: CSS Filter Progression */}
      <section className="section-filter min-h-[200vh] relative bg-black overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-violet-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 46 • Filter Progression</span>
          <div className="filter-image w-full max-w-4xl aspect-video rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center">
              <div className="text-center">
                <span className="text-[150px]">🌈</span>
                <h3 className="text-4xl font-black text-white">De Gris a Color</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 47: Scatter Gather 3D */}
      <section className="section-scatter min-h-[200vh] relative bg-gradient-to-b from-black to-emerald-950/30" style={{ perspective: '1000px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-emerald-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 47 • Scatter Gather</span>
          <div className="relative w-96 h-96 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`scatter-item absolute w-16 h-16 rounded-xl bg-gradient-to-br ${['from-emerald-400 to-teal-500', 'from-green-400 to-emerald-500', 'from-teal-400 to-cyan-500'][i % 3]} flex items-center justify-center shadow-xl`}>
                <span className="text-2xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 48: Scroll Progress Map */}
      <section className="section-progress-map min-h-[400vh] relative bg-black">
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="progress-dot w-3 h-3 rounded-full bg-white/50 transition-all duration-300" />
          ))}
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <section key={i} className={`map-section-${i} h-screen flex items-center justify-center`}>
            <span className="absolute top-8 left-8 text-white/50 text-sm font-semibold tracking-widest uppercase">Efecto 48 • Progress Map - Section {i}</span>
            <div className={`text-center p-12 rounded-3xl bg-gradient-to-br ${['from-blue-600/20 to-indigo-600/20', 'from-purple-600/20 to-pink-600/20', 'from-green-600/20 to-teal-600/20', 'from-orange-600/20 to-red-600/20', 'from-cyan-600/20 to-blue-600/20'][i-1]} border border-white/10`}>
              <h2 className="text-6xl font-black text-white">Section {i}</h2>
              <p className="text-white/50 mt-4">Observa el mapa de progreso a la derecha</p>
            </div>
          </section>
        ))}
      </section>

      {/* SECTION 49: Zoom to Detail */}
      <section className="section-zoom-detail min-h-[300vh] relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-sky-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 49 • Zoom to Detail</span>
        <div className="zoom-detail h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-[300px] leading-none">🌍</div>
            <h3 className="text-4xl font-black text-white mt-8">Del Macro al Micro</h3>
            <p className="text-white/50 mt-4">Zoom extremo controlado por scroll</p>
          </div>
        </div>
      </section>

      {/* SECTION 50: Confetti Celebration */}
      <section className="section-confetti min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-yellow-950/30 overflow-hidden">
        <span className="absolute top-8 left-8 text-yellow-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 50 • Confetti!</span>
        <div className="confetti-container absolute inset-0 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white">🎉 CELEBRA! 🎉</h2>
          <p className="text-xl text-white/50 mt-8">El confeti explota al llegar aquí</p>
        </div>
      </section>

      {/* SECTION 51: Magnetic Cursor Effect */}
      <section className="section-magnetic-cursor min-h-screen flex items-center justify-center relative bg-gradient-to-b from-yellow-950/30 to-black">
        <span className="absolute top-8 left-8 text-pink-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 51 • Magnetic Cursor</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['🧲', '💫', '✨', '⚡'].map((emoji, i) => (
            <div key={i} className="magnetic-cursor-item w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-600/30 border border-pink-500/50 flex items-center justify-center cursor-pointer hover:border-pink-400 transition-colors">
              <span className="text-5xl">{emoji}</span>
            </div>
          ))}
        </div>
        <p className="absolute bottom-8 text-white/50">Mueve el cursor sobre los elementos</p>
      </section>

      {/* SECTION 52: Particle Flow */}
      <section className="section-particle-flow min-h-[200vh] relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-blue-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 52 • Particle Flow</span>
        <canvas className="particle-canvas absolute inset-0" />
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center relative z-10">
            <h2 className="text-6xl font-black text-white/80">Flujo de Partículas</h2>
            <p className="text-xl text-white/50 mt-4">Las partículas reaccionan a la velocidad del scroll</p>
          </div>
        </div>
      </section>

      {/* SECTION 53: Scroll Snap Hybrid */}
      <section className="section-snap-hybrid bg-black" style={{ scrollSnapType: 'y mandatory' }}>
        <span className="fixed top-8 left-8 text-orange-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 53 • Snap Hybrid</span>
        {['🚀', '🌟', '💎', '🔥'].map((emoji, i) => (
          <div key={i} className="snap-section h-screen flex items-center justify-center" style={{ scrollSnapAlign: 'start' }}>
            <div className={`p-16 rounded-3xl bg-gradient-to-br ${['from-orange-600/20 to-red-600/20', 'from-purple-600/20 to-pink-600/20', 'from-cyan-600/20 to-blue-600/20', 'from-yellow-600/20 to-orange-600/20'][i]} border border-white/10`}>
              <span className="text-[100px] block text-center">{emoji}</span>
              <h3 className="text-3xl font-bold text-white text-center mt-4">Snap Section {i + 1}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 54: Typewriter Scroll */}
      <section className="section-typewriter min-h-[200vh] relative bg-gradient-to-b from-black to-green-950/20">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-green-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 54 • Typewriter</span>
          <div className="text-center">
            <p className="typewriter-text text-3xl md:text-5xl font-mono text-green-400" data-text="El texto se escribe mientras scrolleas...">|</p>
          </div>
        </div>
      </section>

      {/* SECTION 55: Color Morph Background */}
      <section className="section-color-morph min-h-[200vh] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-white text-sm font-semibold tracking-widest uppercase z-20">Efecto 55 • Color Morph</span>
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-black text-white">MORPHING</h2>
            <p className="text-xl text-white/70 mt-4">El fondo cambia de color con el scroll</p>
          </div>
        </div>
      </section>

      {/* SECTION 56: 3D Card Stack Shuffle */}
      <section className="section-shuffle min-h-[200vh] relative bg-black" style={{ perspective: '1500px' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <span className="absolute top-8 left-8 text-fuchsia-400 text-sm font-semibold tracking-widest uppercase z-20">Efecto 56 • Card Shuffle</span>
          <div className="relative w-72 h-96" style={{ transformStyle: 'preserve-3d' }}>
            {['from-fuchsia-500 to-pink-600', 'from-purple-500 to-violet-600', 'from-blue-500 to-cyan-600', 'from-teal-500 to-green-600', 'from-yellow-500 to-orange-600'].map((gradient, i) => (
              <div key={i} className={`shuffle-card absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
                <span className="text-6xl font-black text-white">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 57: Infinite Zoom Tunnel */}
      <section className="section-infinite-tunnel min-h-[400vh] relative bg-black overflow-hidden">
        <span className="absolute top-8 left-8 text-cyan-400 text-sm font-semibold tracking-widest uppercase z-30">Efecto 57 • Infinite Tunnel</span>
        <div className="h-screen flex items-center justify-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`tunnel-layer absolute rounded-full border-4 ${['border-cyan-500', 'border-blue-500', 'border-purple-500', 'border-pink-500', 'border-red-500'][i % 5]}`}
              style={{ width: `${(i + 1) * 10}vw`, height: `${(i + 1) * 10}vw`, opacity: 1 - i * 0.08 }} />
          ))}
          <h2 className="relative z-10 text-4xl font-black text-white">∞ INFINITY ∞</h2>
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
          <h2 className="text-6xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">57 EFECTOS</h2>
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

