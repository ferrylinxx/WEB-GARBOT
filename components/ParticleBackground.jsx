import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ density = 50, colors = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b'] }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = particlesRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * 0.02 + 0.01,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += particle.rotationSpeed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Pulse effect
        particle.opacity += particle.pulse;
        if (particle.opacity > 0.6 || particle.opacity < 0.1) {
          particle.pulse *= -1;
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
        // Main particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.globalAlpha = particle.opacity * 1.5;
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 100) * 0.2;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

// Componente de efectos 3D para tarjetas
export const Card3D = ({ children, className = '', intensity = 15 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * intensity;
      const rotateY = (centerX - x) / centerX * intensity;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// Componente de efectos de hover avanzados
export const HoverGlow = ({ children, glowColor = '#6366f1', className = '' }) => {
  return (
    <div 
      className={`relative group ${className}`}
      style={{
        '--glow-color': glowColor
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

// Componente de ondas animadas
export const AnimatedWaves = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
            fill="url(#wave-gradient)"
            className="animate-pulse"
          />
          <path 
            d="M0,80 C300,40 600,120 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z" 
            fill="url(#wave-gradient)"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          />
        </svg>
      </div>
    </div>
  );
};

// Componente de loading con efectos avanzados
export const AdvancedLoader = ({ size = 'md', color = 'indigo' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className={`absolute inset-0 border-4 border-${color}-200 rounded-full animate-spin`}></div>
        
        {/* Inner spinning element */}
        <div className={`absolute inset-2 border-4 border-transparent border-t-${color}-600 rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        
        {/* Center dot */}
        <div className={`absolute inset-1/2 w-2 h-2 bg-${color}-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}></div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 border-4 border-${color}-400 rounded-full animate-ping opacity-20`}></div>
      </div>
    </div>
  );
};

export default ParticleBackground;
