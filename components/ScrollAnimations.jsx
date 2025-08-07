import React, { useEffect, useRef } from 'react';

const ScrollAnimations = ({ children, animation = 'fadeInUp', delay = 0, threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fadeInUp':
        return `${baseClasses} opacity-0 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0`;
      case 'fadeInLeft':
        return `${baseClasses} opacity-0 -translate-x-8 animate-in:opacity-100 animate-in:translate-x-0`;
      case 'fadeInRight':
        return `${baseClasses} opacity-0 translate-x-8 animate-in:opacity-100 animate-in:translate-x-0`;
      case 'fadeIn':
        return `${baseClasses} opacity-0 animate-in:opacity-100`;
      case 'scaleIn':
        return `${baseClasses} opacity-0 scale-95 animate-in:opacity-100 animate-in:scale-100`;
      case 'slideInUp':
        return `${baseClasses} opacity-0 translate-y-16 animate-in:opacity-100 animate-in:translate-y-0`;
      default:
        return `${baseClasses} opacity-0 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0`;
    }
  };

  return (
    <div ref={elementRef} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

// Componente para efectos de parallax
export const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = parallaxRef.current;
        const yPos = -(scrolled * speed);
        parallax.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={parallaxRef} className={className}>
      {children}
    </div>
  );
};

// Componente para contador animado
export const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  const animateCount = () => {
    const startTime = Date.now();
    const startCount = 0;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Componente para efectos de typing
export const TypingEffect = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Componente para loading states avanzados
export const LoadingSpinner = ({ size = 'md', color = 'indigo' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    indigo: 'border-indigo-600',
    purple: 'border-purple-600',
    emerald: 'border-emerald-600',
    blue: 'border-blue-600'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Componente para efectos de hover avanzados
export const HoverCard = ({ children, className = '', hoverScale = 1.05, hoverRotate = 0 }) => {
  return (
    <div 
      className={`transition-all duration-500 ease-out hover:scale-${hoverScale} hover:rotate-${hoverRotate} ${className}`}
      style={{
        '--tw-scale-x': 1,
        '--tw-scale-y': 1,
        '--tw-rotate': '0deg'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.setProperty('--tw-scale-x', hoverScale);
        e.currentTarget.style.setProperty('--tw-scale-y', hoverScale);
        e.currentTarget.style.setProperty('--tw-rotate', `${hoverRotate}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty('--tw-scale-x', 1);
        e.currentTarget.style.setProperty('--tw-scale-y', 1);
        e.currentTarget.style.setProperty('--tw-rotate', '0deg');
      }}
    >
      {children}
    </div>
  );
};

// Componente para efectos de partículas flotantes
export const FloatingParticles = ({ count = 20, colors = ['indigo', 'purple', 'emerald'] }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} bg-${particle.color}-400 rounded-full opacity-20 animate-pulse`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

// Componente para progress bars animados
export const AnimatedProgressBar = ({ progress, color = 'indigo', height = 'h-2', showPercentage = false }) => {
  const [animatedProgress, setAnimatedProgress] = React.useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedProgress(progress);
            }, 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [progress]);

  return (
    <div ref={progressRef} className="w-full">
      <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full ${height}`}>
        <div
          className={`${height} bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full transition-all duration-2000 ease-out`}
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-right mt-1 text-sm text-slate-600 dark:text-slate-400">
          {Math.round(animatedProgress)}%
        </div>
      )}
    </div>
  );
};

export default ScrollAnimations;
