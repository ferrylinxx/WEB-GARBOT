import React, { useState, useEffect } from 'react';

const TestimonialsGPTSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Investigadora Científica",
      company: "Universidad Complutense",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "GarBotGPT ha revolucionado mi investigación. Sus respuestas son increíblemente precisas y me ayuda a explorar ideas complejas de manera natural.",
      rating: 5,
      highlight: "Precisión científica excepcional",
      metrics: { productivity: "+300%", accuracy: "96%" }
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      role: "Escritor y Creativo",
      company: "Freelance",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Como escritor, necesito inspiración constante. GarBotGPT mantiene conversaciones creativas que estimulan mi imaginación y me ayudan a superar bloqueos.",
      rating: 5,
      highlight: "Creatividad sin límites",
      metrics: { productivity: "+250%", accuracy: "94%" }
    },
    {
      id: 3,
      name: "Ana Martín",
      role: "Estudiante de Medicina",
      company: "Universidad de Barcelona",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: "Estudiar medicina es complejo, pero GarBotGPT explica conceptos difíciles de manera clara y se adapta a mi ritmo de aprendizaje.",
      rating: 5,
      highlight: "Aprendizaje personalizado",
      metrics: { productivity: "+180%", accuracy: "98%" }
    },
    {
      id: 4,
      name: "David López",
      role: "Desarrollador Senior",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "La capacidad de GarBotGPT para entender código y ayudar con debugging es impresionante. Es como tener un compañero de programación 24/7.",
      rating: 5,
      highlight: "Asistente de código perfecto",
      metrics: { productivity: "+220%", accuracy: "95%" }
    }
  ];

  const useCases = [
    {
      icon: "🎓",
      title: "Educación",
      description: "Aprende cualquier tema con explicaciones personalizadas y ejemplos prácticos",
      color: "from-blue-500 to-cyan-500",
      stats: "10M+ estudiantes"
    },
    {
      icon: "💡",
      title: "Creatividad",
      description: "Genera ideas, historias y contenido original que inspire tu trabajo",
      color: "from-purple-500 to-pink-500",
      stats: "5M+ creadores"
    },
    {
      icon: "🔬",
      title: "Investigación",
      description: "Analiza datos complejos y explora conceptos científicos avanzados",
      color: "from-emerald-500 to-teal-500",
      stats: "2M+ investigadores"
    },
    {
      icon: "💼",
      title: "Productividad",
      description: "Optimiza tu trabajo diario con asistencia inteligente y automatización",
      color: "from-orange-500 to-red-500",
      stats: "8M+ profesionales"
    },
    {
      icon: "🎨",
      title: "Arte y Diseño",
      description: "Explora conceptos visuales, tendencias y técnicas creativas",
      color: "from-indigo-500 to-purple-500",
      stats: "3M+ artistas"
    },
    {
      icon: "📊",
      title: "Análisis",
      description: "Interpreta datos complejos y genera insights valiosos para tu negocio",
      color: "from-green-500 to-emerald-500",
      stats: "4M+ analistas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Testimonials Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Testimonios Reales
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              usuarios
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Más de <span className="font-bold text-indigo-600 dark:text-indigo-400">50,000 usuarios</span> han transformado 
            su forma de trabajar, aprender y crear con GarBotGPT
          </p>

          {/* Main Testimonial Card */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden relative">
              {/* Animated gradient border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full blur-xl animate-float-delayed"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-indigo-100 dark:ring-indigo-900/30 shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-yellow-400 fill-current animate-pulse" viewBox="0 0 20 20" style={{ animationDelay: `${i * 0.1}s` }}>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic font-light max-w-4xl">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl px-8 py-4 mb-8 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-indigo-700 dark:text-indigo-300 font-bold text-lg">
                    ✨ {testimonials[currentTestimonial].highlight}
                  </span>
                </div>
                
                {/* Metrics */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl px-6 py-3">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                      {testimonials[currentTestimonial].metrics.productivity}
                    </div>
                    <div className="text-emerald-700 dark:text-emerald-300 text-sm">Productividad</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl px-6 py-3">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                      {testimonials[currentTestimonial].metrics.accuracy}
                    </div>
                    <div className="text-blue-700 dark:text-blue-300 text-sm">Precisión</div>
                  </div>
                </div>
                
                {/* Author Info */}
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-lg">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125 shadow-lg' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Casos de uso{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                infinitos
              </span>
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              GarBotGPT se adapta a cualquier necesidad, desde educación hasta creatividad profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200 dark:border-slate-700 hover:border-transparent overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {useCase.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                    {useCase.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGPTSection;
