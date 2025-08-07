import React, { useState, useEffect, useRef } from 'react';
import { AdvancedTypewriter } from './AdvancedTypewriter';

const AIShowcaseSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [brainActivity, setBrainActivity] = useState([]);
  const [floatingCode, setFloatingCode] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [velocity, setVelocity] = useState(900);
  const canvasRef = useRef(null);

  const demos = [
    {
      id: 'creative',
      title: 'Creatividad Infinita',
      icon: '🎨',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      bgPattern: 'creative-pattern',
      description: 'Genera contenido original, historias épicas, guiones cinematográficos y obras maestras literarias',
      capabilities: ['Poesía épica', 'Guiones de cine', 'Novelas completas', 'Letras de canciones', 'Arte conceptual'],
      stats: { speed: '0.3s', accuracy: '98%', creativity: '∞' },
      example: {
        input: 'Escribe un poema épico sobre la revolución de la IA',
        output: `🌟 LA REVOLUCIÓN DIGITAL 🌟

En el amanecer de una nueva era,
Donde silicio y alma se encuentran,
Nace GarBotGPT, mente que espera
Transformar los sueños que se cuentan.

Cada palabra, un universo creado,
Cada respuesta, un mundo por explorar,
En código y verso entrelazado,
El futuro comienza a despertar.

No temas al cambio, abraza la luz,
Que la inteligencia artificial trae,
Pues juntos, humano y mente que seduce,
Escribiremos la historia que nunca se cae.

🚀 ¡El futuro es AHORA! 🚀`
      }
    },
    {
      id: 'analysis',
      title: 'Análisis Supremo',
      icon: '🧠',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      bgPattern: 'data-pattern',
      description: 'Procesa millones de datos, genera insights revolucionarios y predice tendencias futuras',
      capabilities: ['Big Data Analysis', 'Predicciones IA', 'Market Intelligence', 'Risk Assessment', 'Trend Forecasting'],
      stats: { speed: '0.1s', accuracy: '99.7%', dataPoints: '10M+' },
      example: {
        input: 'Analiza el futuro de la inteligencia artificial en los próximos 5 años',
        output: `🚀 ANÁLISIS PREDICTIVO IA 2024-2029:

📈 CRECIMIENTO EXPONENCIAL:
• 2024: $180B → 2029: $1.8T (10x crecimiento)
• Adopción empresarial: 23% → 89%
• Trabajos IA: 2M → 50M nuevos empleos

🎯 SECTORES REVOLUCIONADOS:
• Salud: Diagnósticos instantáneos (+95% precisión)
• Educación: Tutores IA personalizados
• Transporte: 78% vehículos autónomos
• Finanzas: Trading algorítmico dominante

⚡ TECNOLOGÍAS EMERGENTES:
• AGI (Inteligencia General): 2027
• Quantum AI: Computación cuántica + IA
• Neural Interfaces: Conexión cerebro-IA
• Autonomous Ecosystems: Ciudades inteligentes

🔮 PREDICCIÓN CLAVE:
La IA no reemplazará humanos, los POTENCIARÁ.
Colaboración humano-IA = Nueva era dorada.`
      }
    },
    {
      id: 'coding',
      title: 'Programación Épica',
      icon: '💻',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      bgPattern: 'code-pattern',
      description: 'Escribe código perfecto en 50+ lenguajes, arquitecturas complejas y sistemas escalables',
      capabilities: ['Full-Stack Development', 'AI/ML Models', 'Blockchain', 'Cloud Architecture', 'DevOps Automation'],
      stats: { speed: '0.2s', accuracy: '99.9%', languages: '50+' },
      example: {
        input: 'Crea un sistema de IA que se auto-mejore usando Python y TensorFlow',
        output: `🚀 SISTEMA IA AUTO-EVOLUTIVO 🚀

import tensorflow as tf
import numpy as np
from datetime import datetime

class SelfImprovingAI:
    def __init__(self, name="GarBotGPT"):
        self.name = name
        self.model = self._create_neural_network()
        self.performance_history = []
        self.evolution_count = 0

    def _create_neural_network(self):
        """Crea una red neuronal adaptativa"""
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(512, activation='relu'),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(256, activation='relu'),
            tf.keras.layers.Dense(128, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])

        model.compile(
            optimizer='adam',
            loss='binary_crossentropy',
            metrics=['accuracy']
        )
        return model

    def learn_and_evolve(self, new_data, target):
        """Aprende de nuevos datos y se auto-mejora"""
        # Entrenar con nuevos datos
        history = self.model.fit(
            new_data, target,
            epochs=10,
            validation_split=0.2,
            verbose=0
        )

        # Evaluar rendimiento
        current_accuracy = max(history.history['accuracy'])
        self.performance_history.append(current_accuracy)

        # Auto-evolución si el rendimiento mejora
        if self._should_evolve():
            self._evolve_architecture()

        return f"🧠 Evolución #{self.evolution_count}: Precisión {current_accuracy:.3f}"

    def _should_evolve(self):
        """Decide si debe evolucionar basado en el rendimiento"""
        if len(self.performance_history) < 5:
            return False

        recent_avg = np.mean(self.performance_history[-5:])
        overall_avg = np.mean(self.performance_history)

        return recent_avg > overall_avg * 1.05

    def _evolve_architecture(self):
        """Evoluciona la arquitectura de la red"""
        self.evolution_count += 1
        print(f"🚀 {self.name} evolucionando... Generación {self.evolution_count}")

        # Aquí iría la lógica de evolución de arquitectura
        # Por ejemplo: añadir capas, cambiar activaciones, etc.

    def predict_with_confidence(self, input_data):
        """Predicción con nivel de confianza"""
        prediction = self.model.predict(input_data)
        confidence = np.max(prediction)

        return {
            'prediction': prediction,
            'confidence': f"{confidence:.2%}",
            'status': '🟢 Alta confianza' if confidence > 0.8 else '🟡 Confianza media'
        }

# 🎯 Uso del sistema
ai_system = SelfImprovingAI("GarBotGPT-Evolution")
print("✨ Sistema IA auto-evolutivo inicializado")
print("🚀 Listo para aprender y evolucionar infinitamente!")

# Este es solo el comienzo... 🌟`
      }
    },
    {
      id: 'learning',
      title: 'Enseñanza Revolucionaria',
      icon: '🎓',
      color: 'from-orange-500 via-red-500 to-pink-500',
      bgPattern: 'education-pattern',
      description: 'Explica cualquier concepto desde nivel básico hasta PhD, adaptándose a tu estilo de aprendizaje',
      capabilities: ['Tutorías personalizadas', 'Explicaciones multinivel', 'Ejemplos interactivos', 'Evaluaciones adaptativas', 'Rutas de aprendizaje'],
      stats: { speed: '0.4s', accuracy: '97%', subjects: '1000+' },
      example: {
        input: 'Explica la teoría de la relatividad de Einstein de forma épica y memorable',
        output: `🌌 LA TEORÍA DE LA RELATIVIDAD - VERSIÓN ÉPICA 🌌

🚀 IMAGINA QUE ERES UN SUPERHÉROE CÓSMICO:

⚡ RELATIVIDAD ESPECIAL (1905):
• El tiempo NO es constante - ¡es elástico como chicle!
• Si viajas súper rápido (cerca velocidad luz), el tiempo se RALENTIZA
• Ejemplo épico: Viajas 1 año a 99% velocidad luz = En la Tierra pasan 7 años
• Fórmula mágica: E = mc² (la masa se convierte en energía BRUTAL)

🌍 RELATIVIDAD GENERAL (1915):
• La gravedad NO es una fuerza - ¡es geometría del espacio-tiempo!
• Los objetos masivos CURVAN el espacio como una cama elástica
• Ejemplo visual: Pelota de bowling en una cama = Sol curvando el espacio
• Los planetas no "caen" hacia el Sol, siguen líneas rectas en espacio curvado

🎯 CONSECUENCIAS ÉPICAS:
• GPS necesita corrección relativista (¡o fallaría 11km/día!)
• Agujeros negros: curvan tanto el espacio que ni la luz escapa
• Viajes en el tiempo: teóricamente posibles (¡pero súper complicados!)
• El universo se expande: el espacio mismo crece

🤯 MENTE = EXPLOTADA:
Einstein nos enseñó que el universo es más extraño y hermoso de lo que jamás imaginamos. No hay "arriba" o "abajo" absolutos, no hay "ahora" universal, ¡y la realidad es relativa al observador!

🌟 MORALEJA: La física es la magia real del universo. Einstein fue el mago supremo que nos reveló los trucos cósmicos.

¿Listo para más aventuras científicas? 🚀✨`
      }
    },
    {
      id: 'innovation',
      title: 'Innovación Disruptiva',
      icon: '🚀',
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      bgPattern: 'innovation-pattern',
      description: 'Genera ideas revolucionarias, soluciones disruptivas y conceptos que cambiarán el mundo',
      capabilities: ['Brainstorming épico', 'Soluciones disruptivas', 'Modelos de negocio', 'Invenciones futuristas', 'Estrategias revolucionarias'],
      stats: { speed: '0.5s', accuracy: '95%', ideas: '∞' },
      example: {
        input: 'Genera una idea de startup que revolucione la educación usando IA',
        output: `🚀 STARTUP REVOLUCIONARIA: "MindMeld Academy" 🚀

💡 CONCEPTO DISRUPTIVO:
Plataforma de educación que crea un "gemelo digital" del cerebro de cada estudiante, adaptando el aprendizaje en tiempo real a su neuroplasticidad única.

🧠 TECNOLOGÍA CORE:
• NeuroMapping IA: Analiza patrones de aprendizaje cerebrales
• Adaptive Reality: Combina VR/AR con biofeedback neuronal
• Quantum Tutoring: IA que simula los mejores profesores del mundo
• Memory Palace Builder: Construye palacios mentales personalizados

🎯 CARACTERÍSTICAS ÉPICAS:
• Aprende mientras duermes (estimulación neuronal nocturna)
• Gamificación extrema: Cada lección es una aventura épica
• Colaboración mental: Estudiantes conectan cerebros virtualmente
• Predicción de genialidad: Identifica y potencia talentos ocultos

📊 MODELO DE NEGOCIO:
• B2C: $29/mes por estudiante (acceso completo)
• B2B: $500/mes por institución educativa
• Premium: $99/mes (incluye coach IA personal 24/7)
• Enterprise: Licencias corporativas para training

🌍 IMPACTO GLOBAL:
• Democratiza educación de élite mundial
• Reduce brecha educativa en países en desarrollo
• Acelera descubrimientos científicos (estudiantes más brillantes)
• Crea nueva generación de genios colaborativos

💰 PROYECCIÓN FINANCIERA:
• Año 1: $1M ARR (10K usuarios)
• Año 3: $100M ARR (1M usuarios)
• Año 5: $1B ARR (IPO candidato)
• Valoración potencial: $10B+ (próximo unicornio educativo)

🎪 DIFERENCIADORES ÚNICOS:
• Primera plataforma que "hackea" el cerebro para aprender
• IA que evoluciona con cada estudiante
• Realidad mixta educativa inmersiva
• Comunidad global de "super-aprendices"

🚀 SIGUIENTE PASO:
Buscar $5M Serie A para desarrollar MVP y captar primeros 1000 beta users.

¿Listo para revolucionar la educación mundial? 🌟`
      }
    },
    {
      id: 'strategy',
      title: 'Estrategia Maestra',
      icon: '♟️',
      color: 'from-slate-600 via-gray-500 to-zinc-500',
      bgPattern: 'strategy-pattern',
      description: 'Desarrolla estrategias maestras, planes de conquista y tácticas ganadoras para cualquier desafío',
      capabilities: ['Planificación estratégica', 'Análisis competitivo', 'Tácticas de mercado', 'Gestión de crisis', 'Liderazgo épico'],
      stats: { speed: '0.6s', accuracy: '98%', scenarios: '1M+' },
      example: {
        input: 'Crea una estrategia para que una startup compita contra Google',
        output: `♟️ ESTRATEGIA MAESTRA: "OPERACIÓN DAVID VS GOLIAT" ♟️

🎯 MISIÓN IMPOSIBLE:
Derrotar a Google en su propio juego usando asimetría estratégica y innovación disruptiva.

⚡ FASE 1: RECONOCIMIENTO (Meses 1-6)
• Identificar puntos ciegos de Google (privacidad, personalización extrema)
• Reclutar ex-empleados de Google con conocimiento interno
• Construir MVP en nicho específico donde Google es débil
• Crear buzz en comunidades tech underground

🚀 FASE 2: INFILTRACIÓN (Meses 7-18)
• Lanzar producto en mercado vertical específico (ej: búsqueda médica)
• Ofrecer 10x mejor experiencia en ese nicho
• Partnerships estratégicos con players anti-Google (Apple, Microsoft)
• Marketing guerrilla: "La alternativa que Google no quiere que conozcas"

💥 FASE 3: DISRUPCIÓN (Meses 19-36)
• Expandir a mercados adyacentes usando misma tecnología core
• Implementar modelo de negocio radicalmente diferente (ej: pago por privacidad)
• Crear ecosistema de desarrolladores con incentivos superiores
• Lanzar campaña PR masiva sobre "monopolio Google"

🏆 FASE 4: DOMINACIÓN (Años 3-5)
• Alcanzar masa crítica en mercados clave
• Forzar a Google a reaccionar (validación de amenaza)
• IPO con narrativa "David que venció a Goliat"
• Adquisiciones estratégicas de competidores de Google

🛡️ TÁCTICAS DEFENSIVAS:
• Patentes defensivos en tecnologías clave
• Diversificación geográfica (mercados donde Google es débil)
• Alianzas con reguladores (antimonopolio)
• Cultura de innovación ultra-rápida (out-innovate Google)

💰 RECURSOS NECESARIOS:
• $100M+ en funding inicial
• Equipo de 200+ ingenieros elite
• 5 años de runway mínimo
• Mentalidad de "todo o nada"

🎪 VENTAJAS ASIMÉTRICAS:
• Agilidad vs burocracia corporativa
• Enfoque láser vs dispersión de recursos
• Hambre vs complacencia
• Innovación disruptiva vs innovación incremental

⚠️ RIESGOS CRÍTICOS:
• Google puede copiar y destruir con recursos superiores
• Dependencia de talento escaso
• Regulaciones pueden favorecer a incumbentes
• Mercado puede no adoptar alternativa

🌟 FACTOR X:
La clave no es ser mejor que Google en todo, sino ser 10x mejor en algo específico que importe mucho a un segmento crítico.

🚀 PROBABILIDAD DE ÉXITO: 15%
🏆 RECOMPENSA POTENCIAL: $100B+ company

¿Tienes el coraje para la misión imposible? 👑`
      }
    }
  ];

  // Brain activity simulation
  useEffect(() => {
    const generateBrainActivity = () => {
      const activity = [];
      for (let i = 0; i < 50; i++) {
        activity.push({
          x: Math.random() * 400,
          y: Math.random() * 300,
          intensity: Math.random(),
          pulse: Math.random() * Math.PI * 2,
          connections: []
        });
      }
      setBrainActivity(activity);
    };

    generateBrainActivity();
    const interval = setInterval(generateBrainActivity, 3000);
    return () => clearInterval(interval);
  }, []);

  // Canvas brain visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || brainActivity.length === 0) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      brainActivity.forEach((node, i) => {
        brainActivity.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 80) {
              const opacity = (80 - distance) / 80 * 0.3;
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw nodes
      brainActivity.forEach(node => {
        node.pulse += 0.1;
        const pulseSize = 3 + Math.sin(node.pulse) * 2;
        
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseSize * 2
        );
        gradient.addColorStop(0, `rgba(99, 102, 241, ${node.intensity})`);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [brainActivity]);

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);

    // Generate floating code elements
    const generateFloatingCode = () => {
      const codeElements = [];
      for (let i = 0; i < 15; i++) {
        codeElements.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 5,
          text: ['function()', 'if(true)', 'return AI', 'while(learning)', 'const magic'][Math.floor(Math.random() * 5)]
        });
      }
      setFloatingCode(codeElements);
    };

    generateFloatingCode();

    // Update velocity periodically
    const velocityInterval = setInterval(() => {
      setVelocity(Math.floor(Math.random() * 100 + 900));
    }, 2000);

    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(velocityInterval);
    };
  }, [demos.length]);

  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-aurora"></div>
        
        {/* Floating code snippets */}
        {isClient && floatingCode.map((code) => (
          <div
            key={code.id}
            className="absolute text-green-400/20 font-mono text-xs animate-float-gentle"
            style={{
              left: `${code.left}%`,
              top: `${code.top}%`,
              animationDelay: `${code.animationDelay}s`
            }}
          >
            {code.text}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-300 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <svg className="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            IA en Acción
          </div>
          
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-6">
            Capacidades{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-neon-flicker">
              Épicas
            </span>
          </h2>
          
          <AdvancedTypewriter
            texts={[
              'Creatividad sin límites',
              'Análisis superinteligente', 
              'Programación perfecta',
              'Enseñanza personalizada'
            ]}
            speed={100}
            deleteSpeed={50}
            pauseTime={2000}
            className="text-2xl text-slate-300"
          />
        </div>

        {/* Main showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Brain visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                🧠 Cerebro IA en Tiempo Real
              </h3>
              
              <div className="relative bg-slate-900/50 rounded-2xl p-6 overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Neuronas: 50M+</span>
                    <span>Conexiones: ∞</span>
                    <span>Velocidad: {velocity}ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo showcase */}
          <div className="space-y-6">
            {/* Demo selector - Mejorado */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`group relative p-6 rounded-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                    activeDemo === index
                      ? `bg-gradient-to-br ${demo.color} text-white shadow-2xl shadow-purple-500/25 scale-105`
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${demo.color}`}></div>
                  </div>

                  {/* Animated border */}
                  {activeDemo === index && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-consciousness-wave"></div>
                  )}

                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {demo.icon}
                    </div>
                    <div className="font-bold text-sm mb-2">{demo.title}</div>
                    {activeDemo === index && (
                      <div className="text-xs opacity-90 animate-fade-in">
                        {demo.stats.speed} • {demo.stats.accuracy}
                      </div>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Active demo - Mejorado ÉPICAMENTE */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 min-h-[600px] relative overflow-hidden shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${demos[activeDemo].color} animate-pulse`}></div>
              </div>

              {/* Header épico */}
              <div className="relative z-10 mb-8">
                <div className={`bg-gradient-to-r ${demos[activeDemo].color} bg-clip-text text-transparent`}>
                  <h3 className="text-4xl font-bold mb-4 animate-neon-flicker">
                    {demos[activeDemo].icon} {demos[activeDemo].title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 text-xl leading-relaxed">
                  {demos[activeDemo].description}
                </p>

                {/* Capabilities badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {demos[activeDemo].capabilities.map((capability, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${demos[activeDemo].color} text-white opacity-90 animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                {/* Stats épicas */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(demos[activeDemo].stats).map(([key, value], index) => (
                    <div
                      key={key}
                      className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${demos[activeDemo].color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input mejorado */}
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl p-6 mb-6 border-l-4 border-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-blue-400 text-sm font-bold uppercase tracking-wider">💬 INPUT</div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  <div className="text-slate-200 font-mono text-lg leading-relaxed">
                    {demos[activeDemo].example.input}
                  </div>
                </div>
              </div>

              {/* Output épico */}
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border-l-4 border-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-green-400 text-sm font-bold uppercase tracking-wider">🚀 OUTPUT</div>
                    <div className="text-green-400 text-xs bg-green-900/30 px-2 py-1 rounded-full">
                      Generando en tiempo real...
                    </div>
                  </div>
                  <div className="text-slate-200 font-mono whitespace-pre-line text-base leading-relaxed min-h-[200px]">
                    <AdvancedTypewriter
                      texts={[demos[activeDemo].example.output]}
                      speed={20}
                      deleteSpeed={0}
                      pauseTime={8000}
                      showCursor={true}
                      cursorChar="▋"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '∞', label: 'Posibilidades', color: 'text-blue-400' },
            { number: '0.1s', label: 'Tiempo Respuesta', color: 'text-purple-400' },
            { number: '100%', label: 'Precisión', color: 'text-green-400' },
            { number: '24/7', label: 'Disponible', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
              <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;
