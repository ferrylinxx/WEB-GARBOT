import React from 'react';
import RouteWithFlags from './RouteWithFlags';

const DescriptionSection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-900 dark:via-indigo-950/30 dark:to-purple-950/20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            <span className="block mb-2">¿Por qué elegir</span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GarBotGPT?
            </span>
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            El asistente de IA conversacional más avanzado. Conversaciones naturales, respuestas precisas
            y comprensión contextual que revoluciona la forma en que interactúas con la inteligencia artificial.
          </p>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced content section */}
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-500/25">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Conversaciones Naturales
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Nuestro sistema de IA comprende el contexto y mantiene conversaciones fluidas,
                  respondiendo de manera natural y coherente, como si hablaras con un experto humano
                  disponible las 24 horas del día.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/25">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Respuestas Instantáneas
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Procesamiento ultrarrápido de consultas con respuestas precisas en segundos.
                  Nuestro modelo de IA avanzado comprende el contexto y proporciona información
                  relevante y actualizada al instante.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/25">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Inteligencia Avanzada
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprensión profunda del lenguaje natural con capacidad de aprendizaje continuo.
                  Adaptación inteligente a tu estilo de comunicación y preferencias personales
                  para una experiencia cada vez más personalizada.
                </p>
              </div>
            </div>

            {/* Enhanced Call to action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">¿Listo para experimentar la IA conversacional?</h4>
                <p className="text-lg opacity-90 mb-6">
                  Únete a más de 10,000 usuarios que ya disfrutan de conversaciones inteligentes con GarBotGPT.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://ia.garbotgpt.com/auth?redirect=%2F" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                    <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Probar Chat Gratis
                  </a>
                  <button className="bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
                    <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ver Ejemplos
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element - Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 via-slate-50/90 to-indigo-50/80 dark:from-slate-800/90 dark:via-slate-900/80 dark:to-indigo-950/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-slate-700/30 hover:scale-105 transition-all duration-700 group">
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="space-y-8">
                {/* Enhanced Header */}
                <div className="text-center mb-8">
                  <h4 className="font-bold text-slate-900 dark:text-white text-2xl mb-3">Conversaciones en Tiempo Real</h4>
                  <p className="text-slate-600 dark:text-slate-400">Ejemplos de interacciones inteligentes con GarBotGPT</p>
                </div>

                {/* Chat Examples */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    {/* Chat 1 - Usuario */}
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                        <p className="text-sm">¿Puedes explicarme qué es la inteligencia artificial?</p>
                        <div className="text-xs opacity-75 mt-1">Hace 2 min</div>
                      </div>
                    </div>

                    {/* Chat 1 - Bot */}
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                        <p className="text-sm">La IA es la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana, como aprender, razonar y resolver problemas.</p>
                        <div className="text-xs opacity-75 mt-1">Hace 2 min</div>
                      </div>
                    </div>

                    {/* Chat 2 - Usuario */}
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                        <p className="text-sm">¿Cómo funciona el aprendizaje automático?</p>
                        <div className="text-xs opacity-75 mt-1">Hace 1 min</div>
                      </div>
                    </div>

                    {/* Chat 2 - Bot */}
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                        <p className="text-sm">El aprendizaje automático permite a los algoritmos mejorar automáticamente a través de la experiencia, identificando patrones en los datos sin ser programados explícitamente.</p>
                        <div className="text-xs opacity-75 mt-1">Hace 1 min</div>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/30 dark:from-slate-900 dark:via-green-950/30 dark:to-emerald-950/20 rounded-2xl p-6 shadow-xl text-center border border-green-200/30 dark:border-green-800/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Usuarios Activos</div>
                    <div className="w-full h-1 bg-green-200 dark:bg-green-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-cyan-950/20 rounded-2xl p-6 shadow-xl text-center border border-blue-200/30 dark:border-blue-800/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">96%</div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Precisión IA</div>
                    <div className="w-full h-1 bg-blue-200 dark:bg-blue-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/30 dark:from-slate-900 dark:via-indigo-950/30 dark:to-purple-950/20 rounded-2xl p-6 shadow-xl text-center border border-indigo-200/30 dark:border-indigo-800/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">0.8s</div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tiempo Respuesta</div>
                    <div className="w-full h-1 bg-indigo-200 dark:bg-indigo-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full animate-pulse" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
