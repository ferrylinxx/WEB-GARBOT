import React, { useState, useEffect } from 'react';

const EpicLoader = ({ isLoading = true, children }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inicializando GarBotGPT...');
  const [currentStep, setCurrentStep] = useState(0);
  const [particles, setParticles] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [neuralNodes, setNeuralNodes] = useState([]);

  const loadingSteps = [
    { text: 'Inicializando matriz cuántica...', icon: '🌌', color: 'from-blue-500 to-cyan-500', duration: 800 },
    { text: 'Cargando redes neuronales avanzadas...', icon: '🧠', color: 'from-purple-500 to-pink-500', duration: 1000 },
    { text: 'Conectando consciencia artificial...', icon: '💭', color: 'from-green-500 to-emerald-500', duration: 900 },
    { text: 'Activando procesamiento cuántico...', icon: '⚡', color: 'from-yellow-500 to-orange-500', duration: 700 },
    { text: 'Sincronizando inteligencia emocional...', icon: '❤️', color: 'from-red-500 to-pink-500', duration: 850 },
    { text: 'Optimizando velocidad de pensamiento...', icon: '🚀', color: 'from-indigo-500 to-purple-500', duration: 750 },
    { text: 'Calibrando personalidad adaptativa...', icon: '🎭', color: 'from-teal-500 to-blue-500', duration: 900 },
    { text: 'Preparando revolución conversacional...', icon: '✨', color: 'from-pink-500 to-purple-500', duration: 600 },
    { text: '¡Bienvenido al futuro de la IA!', icon: '🎉', color: 'from-gradient-rainbow', duration: 1200 }
  ];

  // Generate enhanced particles and neural network
  useEffect(() => {
    const newParticles = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.9 + 0.1,
      color: ['blue', 'purple', 'pink', 'cyan', 'green', 'yellow', 'red'][Math.floor(Math.random() * 7)],
      type: Math.random() > 0.7 ? 'star' : 'circle',
      pulseSpeed: Math.random() * 2 + 1
    }));
    setParticles(newParticles);

    // Generate neural network nodes
    const nodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      connections: Math.floor(Math.random() * 4) + 2,
      active: false
    }));
    setNeuralNodes(nodes);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    let stepTimer;
    let glitchTimer;
    let neuralTimer;

    const progressStep = () => {
      if (currentStep < loadingSteps.length - 1) {
        const step = loadingSteps[currentStep];

        // Glitch effect for dramatic steps
        if (currentStep === 3 || currentStep === 6) {
          setGlitchEffect(true);
          setTimeout(() => setGlitchEffect(false), 200);
        }

        // Activate neural nodes progressively
        setNeuralNodes(prev => prev.map((node, i) => ({
          ...node,
          active: i <= currentStep * 2
        })));

        setProgress((currentStep + 1) * (100 / loadingSteps.length));
        setLoadingText(step.text);
        setCurrentStep(prev => prev + 1);

        stepTimer = setTimeout(progressStep, step.duration);
      } else {
        // Final completion
        setProgress(100);
        setTimeout(() => {
          setLoadingText('¡Experiencia lista! Preparando interfaz...');
        }, 500);
      }
    };

    // Start the loading sequence
    stepTimer = setTimeout(progressStep, 300);

    // Random glitch effects
    glitchTimer = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }
    }, 1500);

    // Neural network activation
    neuralTimer = setInterval(() => {
      setNeuralNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.3
      })));
    }, 800);

    return () => {
      clearTimeout(stepTimer);
      clearInterval(glitchTimer);
      clearInterval(neuralTimer);
    };
  }, [isLoading]);

  // Complete progress when loading is done
  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      setCurrentStep(loadingSteps.length - 1);
      setLoadingText('¡Bienvenido al futuro de la IA!');
    }
  }, [isLoading]);

  if (!isLoading && progress >= 100) {
    return (
      <div className="animate-fade-in">
        {children}
      </div>
    );
  }

  const currentStepData = loadingSteps[currentStep] || loadingSteps[0];

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-purple-950 flex items-center justify-center z-50 overflow-hidden ${glitchEffect ? 'animate-glitch' : ''}`}>
      {/* Revolutionary animated background */}
      <div className="absolute inset-0">
        {/* Multi-layer aurora effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-pink-500/10 animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 via-indigo-500/20 to-violet-500/10 animate-aurora-reverse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-yellow-500/10 to-red-500/5 animate-aurora-vertical"></div>

        {/* Enhanced floating particles with different types */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute ${particle.type === 'star' ? 'animate-twinkle' : 'animate-float-particle'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.id * 0.05}s`,
              animationDuration: `${particle.speed + 1}s`,
              opacity: particle.opacity
            }}
          >
            {particle.type === 'star' ? (
              <div className={`w-${Math.floor(particle.size)}px h-${Math.floor(particle.size)}px bg-${particle.color}-400 transform rotate-45`}>
                <div className={`w-full h-0.5 bg-${particle.color}-400 absolute top-1/2 left-0 transform -translate-y-1/2`}></div>
                <div className={`w-0.5 h-full bg-${particle.color}-400 absolute left-1/2 top-0 transform -translate-x-1/2`}></div>
              </div>
            ) : (
              <div
                className={`rounded-full bg-gradient-to-r from-${particle.color}-400 to-${particle.color}-600 shadow-lg animate-pulse`}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDuration: `${particle.pulseSpeed}s`
                }}
              />
            )}
          </div>
        ))}

        {/* Advanced neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {/* Neural nodes */}
          {neuralNodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.active ? "4" : "2"}
                fill={node.active ? "url(#node-gradient-active)" : "url(#node-gradient)"}
                className={node.active ? "animate-pulse" : ""}
              />
              {/* Connection lines */}
              {neuralNodes.slice(0, node.connections).map((targetNode, i) => (
                <line
                  key={`${node.id}-${i}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke={node.active && targetNode.active ? "url(#connection-active)" : "url(#connection-inactive)"}
                  strokeWidth={node.active && targetNode.active ? "2" : "1"}
                  className={node.active && targetNode.active ? "animate-pulse" : ""}
                  opacity={node.active && targetNode.active ? "0.8" : "0.3"}
                />
              ))}
            </g>
          ))}

          <defs>
            <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </radialGradient>
            <radialGradient id="node-gradient-active" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
            <linearGradient id="connection-active" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="connection-inactive" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>

        {/* Quantum field effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-quantum-wave"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Revolutionary Logo/Brand */}
        <div className="mb-16">
          <div className="relative">
            {/* Multiple glow layers */}
            <div className="absolute inset-0 blur-3xl opacity-40">
              <h1 className={`text-9xl font-black bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}>
                GarBotGPT
              </h1>
            </div>
            <div className="absolute inset-0 blur-xl opacity-60">
              <h1 className={`text-9xl font-black bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}>
                GarBotGPT
              </h1>
            </div>
            <h1 className={`relative text-9xl font-black bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent ${glitchEffect ? 'animate-glitch-text' : 'animate-pulse'}`}>
              GarBotGPT
            </h1>

            {/* Floating logo icon */}
            <div className="absolute -top-8 -right-8">
              <img
                src="/favicon-original.png"
                alt="GarBotGPT"
                className="w-16 h-16 animate-float opacity-80"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-slate-200 text-3xl font-light">El Futuro de la Inteligencia Artificial</p>
            <p className="text-slate-400 text-lg">Revolucionando la conversación humano-IA</p>

            {/* Animated dots */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-3">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentStepData.color} animate-bounce shadow-lg`}
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Loading Animation */}
        <div className="mb-16">
          <div className="relative w-80 h-80 mx-auto">
            {/* Quantum field rings */}
            <div className="absolute inset-0 border-4 border-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-spin-slow shadow-2xl"></div>
            <div className="absolute inset-4 border-3 border-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full animate-spin-reverse shadow-xl"></div>
            <div className="absolute inset-8 border-2 border-gradient-to-r from-pink-500/50 to-cyan-500/50 rounded-full animate-spin shadow-lg"></div>
            <div className="absolute inset-12 border border-gradient-to-r from-cyan-500/60 to-blue-500/60 rounded-full animate-spin-slow-reverse"></div>

            {/* Holographic progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#quantum-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                className="transition-all duration-700 ease-out drop-shadow-2xl"
                filter="url(#glow)"
              />

              <defs>
                <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="20%" stopColor="#8b5cf6" />
                  <stop offset="40%" stopColor="#ec4899" />
                  <stop offset="60%" stopColor="#f59e0b" />
                  <stop offset="80%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Central hologram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative">
                {/* Holographic backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>

                <div className="relative z-10">
                  <div className={`text-8xl mb-4 ${glitchEffect ? 'animate-glitch-icon' : 'animate-float'} filter drop-shadow-2xl`}>
                    {currentStepData.icon}
                  </div>
                  <div className="text-5xl font-black text-white mb-3 animate-pulse">
                    {Math.floor(progress)}%
                  </div>
                  <div className="text-lg text-slate-300 font-medium mb-4">
                    {currentStep < loadingSteps.length ? `Paso ${currentStep + 1} de ${loadingSteps.length}` : 'Completado'}
                  </div>

                  {/* Quantum dots */}
                  <div className="flex justify-center space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentStepData.color} animate-quantum-pulse shadow-lg`}
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting elements */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-orbit"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${i * 45}deg) translateX(100px) translateY(-50%)`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Loading text */}
        <div className="mb-10">
          <div className="relative">
            <p className={`text-white text-2xl font-bold mb-4 bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent animate-pulse`}>
              {loadingText}
            </p>
          </div>

          {/* Step indicators */}
          <div className="flex justify-center space-x-3 mb-6">
            {loadingSteps.map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep
                    ? `bg-gradient-to-r ${step.color} shadow-lg`
                    : 'bg-slate-700'
                } ${index === currentStep ? 'scale-125 animate-pulse' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden mb-8 shadow-inner">
          <div
            className={`h-full bg-gradient-to-r ${currentStepData.color} transition-all duration-500 ease-out relative overflow-hidden rounded-full`}
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse"></div>
          </div>
        </div>

        {/* Dynamic stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {Math.floor(progress * 47)}K
            </div>
            <div className="text-slate-400 text-sm">Neuronas Activas</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {Math.floor(progress * 1.2)}s
            </div>
            <div className="text-slate-400 text-sm">Tiempo Restante</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {Math.floor(progress * 8.5)}GB
            </div>
            <div className="text-slate-400 text-sm">Datos Procesados</div>
          </div>
        </div>

        {/* Inspirational message */}
        <div className="mt-8 text-slate-300 text-lg font-light italic">
          <p className="animate-fade-in-out">
            "La inteligencia artificial no es el futuro, es el presente revolucionario"
          </p>
        </div>
      </div>
    </div>
  );
};

// Simple loading spinner for smaller components
const MiniLoader = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    pink: 'border-pink-500',
    green: 'border-green-500'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
  );
};

// Skeleton loader for content
const SkeletonLoader = ({ lines = 3, className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-slate-300 dark:bg-slate-700 rounded mb-3 last:mb-0"
          style={{ width: `${100 - (i * 10)}%` }}
        />
      ))}
    </div>
  );
};

export default EpicLoader;
export { MiniLoader, SkeletonLoader };

// CSS Animations for EpicLoader
const loaderStyles = `
  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  @keyframes glitch-icon {
    0%, 100% { transform: translate(0) scale(1); filter: hue-rotate(0deg); }
    25% { transform: translate(-2px, 2px) scale(1.05); filter: hue-rotate(90deg); }
    50% { transform: translate(2px, -2px) scale(0.95); filter: hue-rotate(180deg); }
    75% { transform: translate(-2px, -2px) scale(1.05); filter: hue-rotate(270deg); }
  }

  @keyframes aurora {
    0%, 100% { transform: translateX(-100%) rotate(0deg); opacity: 0.3; }
    50% { transform: translateX(100%) rotate(180deg); opacity: 0.8; }
  }

  @keyframes aurora-reverse {
    0%, 100% { transform: translateX(100%) rotate(180deg); opacity: 0.4; }
    50% { transform: translateX(-100%) rotate(0deg); opacity: 0.7; }
  }

  @keyframes aurora-vertical {
    0%, 100% { transform: translateY(-100%) rotate(90deg); opacity: 0.2; }
    50% { transform: translateY(100%) rotate(270deg); opacity: 0.6; }
  }

  @keyframes quantum-wave {
    0%, 100% { transform: translateX(-100%) skewX(-12deg); }
    50% { transform: translateX(100%) skewX(12deg); }
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
  }

  @keyframes float-particle {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
  }

  @keyframes quantum-pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes spin-slow-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes fade-in-out {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .animate-glitch { animation: glitch 0.3s ease-in-out; }
  .animate-glitch-icon { animation: glitch-icon 0.5s ease-in-out; }
  .animate-aurora { animation: aurora 20s ease-in-out infinite; }
  .animate-aurora-reverse { animation: aurora-reverse 25s ease-in-out infinite; }
  .animate-aurora-vertical { animation: aurora-vertical 30s ease-in-out infinite; }
  .animate-quantum-wave { animation: quantum-wave 15s ease-in-out infinite; }
  .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
  .animate-float-particle { animation: float-particle 4s ease-in-out infinite; }
  .animate-quantum-pulse { animation: quantum-pulse 2s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-spin-reverse { animation: spin-reverse 6s linear infinite; }
  .animate-spin-slow-reverse { animation: spin-slow-reverse 10s linear infinite; }
  .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
  .animate-fade-in-out { animation: fade-in-out 4s ease-in-out infinite; }
  .animate-float { animation: float 3s ease-in-out infinite; }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = loaderStyles;
  document.head.appendChild(styleSheet);
}
