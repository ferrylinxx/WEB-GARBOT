import React, { useState, useEffect } from 'react';

const EpicLoader = ({ isLoading = true, children }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inicializando GarBotGPT...');
  const [currentStep, setCurrentStep] = useState(0);
  const [particles, setParticles] = useState([]);

  const loadingSteps = [
    { text: 'Inicializando GarBotGPT...', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { text: 'Cargando redes neuronales...', icon: '🧠', color: 'from-purple-500 to-pink-500' },
    { text: 'Conectando IA conversacional...', icon: '💬', color: 'from-green-500 to-emerald-500' },
    { text: 'Activando procesamiento cuántico...', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { text: 'Sincronizando consciencia digital...', icon: '🌟', color: 'from-indigo-500 to-purple-500' },
    { text: 'Optimizando respuestas inteligentes...', icon: '🎯', color: 'from-red-500 to-pink-500' },
    { text: 'Preparando experiencia revolucionaria...', icon: '✨', color: 'from-teal-500 to-blue-500' },
    { text: '¡Bienvenido al futuro de la IA!', icon: '🎉', color: 'from-gradient-rainbow' }
  ];

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      color: ['blue', 'purple', 'pink', 'cyan', 'green'][Math.floor(Math.random() * 5)]
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15 + 8;
        const newProgress = Math.min(prev + increment, 95);

        // Update loading step based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        if (stepIndex < loadingSteps.length && stepIndex !== currentStep) {
          setCurrentStep(stepIndex);
          setLoadingText(loadingSteps[stepIndex].text);
        }

        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, currentStep]);

  // Complete progress when loading is done
  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      setCurrentStep(loadingSteps.length - 1);
      setLoadingText(loadingSteps[loadingSteps.length - 1].text);
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
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Aurora effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/5 via-indigo-500/10 to-violet-500/5 animate-aurora-reverse"></div>

        {/* Enhanced floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-float-particle bg-${particle.color}-400/60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed + 2}s`,
              opacity: particle.opacity
            }}
          />
        ))}

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={`${(i * 5) % 100}%`}
              y1={`${(i * 7) % 100}%`}
              x2={`${((i + 1) * 5) % 100}%`}
              y2={`${((i + 1) * 7) % 100}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Enhanced Logo/Brand */}
        <div className="mb-12">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-50">
              <h1 className={`text-8xl font-black bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent`}>
                GarBotGPT
              </h1>
            </div>
            <h1 className={`relative text-8xl font-black bg-gradient-to-r ${currentStepData.color} bg-clip-text text-transparent animate-pulse`}>
              GarBotGPT
            </h1>
          </div>
          <p className="text-slate-300 text-2xl mt-4 font-light">El Futuro de la Inteligencia Artificial</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentStepData.color} animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Revolutionary Loading Animation */}
        <div className="mb-12">
          <div className="relative w-48 h-48 mx-auto">
            {/* Multiple rotating rings */}
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border-3 border-slate-700 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-4 border-2 border-slate-600 rounded-full animate-spin"></div>

            {/* Main progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#main-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-500 ease-out drop-shadow-lg"
              />
              <defs>
                <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="25%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="75%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center content with icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2 animate-bounce">
                  {currentStepData.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {Math.floor(progress)}%
                </div>
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
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
