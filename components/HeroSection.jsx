import React, { useState, useEffect } from 'react';
import ComingSoonModal from './ComingSoonModal';
import ScheduleDemoHoverPopup from './ScheduleDemoHoverPopup';
import ParticleSystem from './ParticleSystem';
import { AdvancedTypewriter, MultiEffectTypewriter } from './AdvancedTypewriter';
import { SimpleAudioReactive } from './AudioReactiveBackground';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFullscreenDemo, setShowFullscreenDemo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const phrases = [
    'El Futuro de la Conversación',
    'IA que Comprende tu Alma',
    'Más que Inteligencia Artificial',
    'Tu Compañero Digital Perfecto',
    'Revolucionando la Comunicación',
    'Donde la Magia se Encuentra con la Lógica',
    'Conversaciones que Transforman',
    'El Asistente que Siempre Soñaste'
  ];

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [typedText, currentIndex, isDeleting, phrases]);

  // Initialize client-side only elements
  useEffect(() => {
    setIsClient(true);

    // Generate particles only on client
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 5,
          animationDuration: 3 + Math.random() * 3,
          text: ['function()', 'if(true)', 'return AI', 'while(learning)', 'const magic'][Math.floor(Math.random() * 5)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Prevent body scroll when fullscreen modal is open
  useEffect(() => {
    if (showFullscreenDemo) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showFullscreenDemo]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 overflow-hidden">
      {/* Enhanced Particle System */}
      <ParticleSystem
        particleCount={150}
        colors={['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']}
        interactive={true}
      />

      {/* Audio Reactive Background */}
      <SimpleAudioReactive className="absolute inset-0" />

      {/* Revolutionary Background Effects */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />

        {/* Enhanced floating particles */}
        {isClient && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
              transform: `translateY(${Math.sin(Date.now() * 0.001 + particle.id) * 20}px)`
            }}
          />
        ))}

        {/* Dynamic gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={`${(i * 5) % 100}%`}
              y1={`${(i * 7) % 100}%`}
              x2={`${((i + 1) * 5) % 100}%`}
              y2={`${((i + 1) * 7) % 100}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Revolutionary Content */}
          <div className={`text-center lg:text-left transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Epic Brand */}
            <div className="mb-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 leading-none">
                <span className="block relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent blur-sm">
                    GarBot
                  </span>
                  <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    GarBot
                  </span>
                </span>
                <span className="block text-white mt-2">
                  GPT
                </span>
              </h1>
            </div>

            {/* Dynamic Subtitle */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 mb-4 min-h-[3rem]">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </div>

            {/* Revolutionary Description */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed font-light">
              No es solo IA. Es tu <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">compañero digital</span> que entiende, 
              aprende y evoluciona contigo. Experimenta conversaciones que trascienden lo tecnológico y se vuelven 
              <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text"> profundamente humanas</span>.
            </p>

            {/* Epic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 mb-16">
              <a href="https://ia.garbotgpt.com/auth?redirect=%2F">
                <button className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center gap-4 text-xl">
                    <span className="text-2xl">🚀</span>
                    Comenzar la Revolución
                  </span>
                </button>
              </a>

              <a href="https://ia.garbotgpt.com/auth?redirect=%2F">
                <button className="group bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 border border-white/30 hover:border-purple-500/50 shadow-2xl hover:shadow-cyan-500/30">
                  <span className="flex items-center gap-4 text-xl">
                    <span className="text-2xl">💬</span>
                    Probar Chat Épico
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  2.3M+
                </div>
                <div className="text-slate-400 text-sm">Conversaciones Diarias</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  0.2s
                </div>
                <div className="text-slate-400 text-sm">Tiempo de Respuesta</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  99.7%
                </div>
                <div className="text-slate-400 text-sm">Satisfacción</div>
              </div>
            </div>

          </div>

          {/* Revolutionary Video Section */}
          <div className={`relative transition-all duration-2000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Floating AI Elements */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse opacity-60"
                style={{
                  left: `${10 + (i * 15)}%`,
                  top: `${10 + (i * 10)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              />
            ))}

            {/* Holographic Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Revolutionary Video Container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-all duration-1000 group-hover:scale-105 group-hover:shadow-purple-500/25">

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

                {/* Epic Video Element */}
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover rounded-3xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/video-poster.jpg"
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                  >
                    <source src="https://tecnofgb.com/wp-content/uploads/2025/08/Video-de-GarBotGPT.mp4" type="video/mp4" />

                    {/* Epic Fallback */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">GarBotGPT en Acción</h3>
                        <p className="text-lg opacity-90">Experiencia revolucionaria de IA</p>
                      </div>
                    </div>
                  </video>

                  {/* Epic Overlay Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Live Indicator */}
                    <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-white font-bold text-sm">IA EN VIVO</span>
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
                      <div className="text-white text-sm font-bold">
                        2.3M+ usuarios activos
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href="https://ia.garbotgpt.com/auth?redirect=%2F"
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-xl border border-white/20"
                      >
                        Probar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </section>
  );
};

export default HeroSection;
