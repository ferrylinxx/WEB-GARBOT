'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import NavbarGTA from '@/components/NavbarGTA'
import FooterGTA from '@/components/FooterGTA'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Desarrollo Web', level: 95 },
  { name: 'Inteligencia Artificial', level: 90 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / APIs', level: 88 },
  { name: 'Python / ML', level: 85 },
  { name: 'UI/UX Design', level: 80 },
]

const projects = [
  { name: 'GarBotGPT', desc: 'Plataforma de IA todo en uno con chatbot avanzado', tech: ['Next.js', 'OpenAI', 'Tailwind'] },
  { name: 'TecnoFGB', desc: 'Blog de tecnología y noticias tech', tech: ['WordPress', 'SEO', 'Analytics'] },
  { name: 'Apps iOS/Android', desc: 'Desarrollo de aplicaciones móviles', tech: ['React Native', 'Swift', 'Kotlin'] },
]

const stats = [
  { value: '50K+', label: 'Usuarios Activos' },
  { value: '10M+', label: 'Mensajes Procesados' },
  { value: '5+', label: 'Años Experiencia' },
  { value: '20+', label: 'Proyectos' },
]

const values = [
  { title: 'Innovación', desc: 'Siempre explorando nuevas tecnologías y soluciones.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Calidad', desc: 'Código limpio y productos que funcionan.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Pasión', desc: 'Amo lo que hago y se nota en cada proyecto.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { title: 'Aprendizaje', desc: 'Nunca paro de aprender y mejorar.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
]

export default function SobreMiPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', { y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out' })

      gsap.from('.stat-item', {
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8
      })

      gsap.from('.skill-bar', {
        scrollTrigger: { trigger: skillsRef.current, start: 'top 80%' },
        width: 0, duration: 1.2, stagger: 0.1, ease: 'power2.out'
      })

      gsap.from('.project-card', {
        scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' },
        y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.2)'
      })

      gsap.from('.value-card', {
        scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' },
        scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.6
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <NavbarGTA />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl font-bold text-cyan-400">
              FG
            </div>
          </div>
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            Desarrollador & Creador de GarBotGPT
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Ferran Garola Bonilla
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Desarrollador Full-Stack apasionado por la inteligencia artificial y la creación de productos digitales innovadores. Creador de GarBotGPT y TecnoFGB.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/ferran-garola-bonilla-4b275a337/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/ferrylinxx" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Mi Historia</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-6">
            Soy un desarrollador apasionado por la tecnología y la inteligencia artificial. Comencé mi camino en la programación desde joven, y hoy me dedico a crear productos digitales que impactan positivamente en la vida de las personas.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            GarBotGPT nació de mi visión de democratizar el acceso a la IA, creando una plataforma intuitiva y potente que cualquier persona pueda usar. También escribo sobre tecnología en TecnoFGB, compartiendo mis conocimientos con la comunidad.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Habilidades</h2>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="project-card group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                  {project.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-white/60 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="value-card bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterGTA />
    </main>
  )
}

