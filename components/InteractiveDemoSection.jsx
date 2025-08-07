import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ComingSoonModal from './ComingSoonModal';

const InteractiveDemoSection = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const tabs = [
    { id: 'chat', name: 'Chat Inteligente', icon: '💬' },
    { id: 'responses', name: 'Respuestas IA', icon: '🧠' },
    { id: 'context', name: 'Comprensión Contextual', icon: '🎯' },
    { id: 'analytics', name: 'Análisis Conversacional', icon: '📈' }
  ];

  const renderChatDemo = () => (
    <div className="space-y-6">
      {/* Video Demo */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
          <div className="aspect-video relative">
            <iframe
              src="https://www.dailymotion.com/embed/video/x9nu3ug"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="GarBotGPT Demo"
              className="rounded-3xl"
            ></iframe>

            {/* Overlay controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold">
                🔴 DEMO EN VIVO
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                47,832 espectadores
              </div>
            </div>
          </div>

          {/* Video info */}
          <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900">
            <h3 className="text-xl font-bold text-white mb-2">
              🚀 GarBotGPT en Acción
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Descubre cómo GarBotGPT revoluciona la IA conversacional
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">1,247</div>
                <div className="text-slate-400 text-xs">Consultas/min</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">4.9/5</div>
                <div className="text-slate-400 text-xs">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">0.3s</div>
                <div className="text-slate-400 text-xs">Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Conversación en Tiempo Real</h4>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 h-96 overflow-y-auto border border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¿Puedes explicarme qué es la inteligencia artificial?</p>
                  <div className="text-xs opacity-75 mt-1">14:32</div>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs">
                  <p className="text-sm">La inteligencia artificial es la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana.</p>
                  <div className="text-xs opacity-75 mt-1">14:32</div>
                </div>
              </div>
              
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
          
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="Escribe tu pregunta aquí..."
              className="flex-1 p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Características del Chat</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 border-l-4 border-indigo-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">Respuesta Rápida</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Respuestas en menos de 1 segundo</p>
              </div>
              
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">IA Inteligente</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Comprensión contextual avanzada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResponsesDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Tipos de Respuestas IA</h4>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Q</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Respuestas Informativas</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Explicaciones detalladas y precisas</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  "La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar, CO₂ y agua en glucosa y oxígeno..."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">C</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Contenido Creativo</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Historias, poemas y contenido original</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  "En un mundo donde la tecnología y la naturaleza se fusionan, un joven programador descubre..."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Ejemplo en Tiempo Real</h4>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 h-96 overflow-y-auto border border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¿Puedes escribir un haiku sobre la inteligencia artificial?</p>
                  <div className="text-xs opacity-75 mt-2">15:42</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-4 rounded-2xl rounded-bl-md max-w-xs border border-slate-200 dark:border-slate-600">
                  <p className="text-sm font-mono leading-relaxed">
                    Bits de sabiduría<br/>
                    Fluyen en circuitos fríos—<br/>
                    Mente digital
                  </p>
                  <div className="text-xs opacity-75 mt-2">15:42</div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¡Increíble! ¿Puedes explicar la estructura del haiku?</p>
                  <div className="text-xs opacity-75 mt-2">15:43</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-4 rounded-2xl rounded-bl-md max-w-xs border border-slate-200 dark:border-slate-600">
                  <p className="text-sm">
                    ¡Por supuesto! Un haiku tradicional sigue la estructura 5-7-5 sílabas:
                    <br/><br/>
                    • Primera línea: 5 sílabas<br/>
                    • Segunda línea: 7 sílabas<br/>
                    • Tercera línea: 5 sílabas<br/><br/>
                    También suele incluir una referencia a la naturaleza o las estaciones.
                  </p>
                  <div className="text-xs opacity-75 mt-2">15:43</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContextDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Comprensión Contextual Avanzada</h4>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 h-80 overflow-y-auto border border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¿Cuál es la capital de Francia?</p>
                  <div className="text-xs opacity-75 mt-1">16:20</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs border border-slate-200 dark:border-slate-600">
                  <p className="text-sm">La capital de Francia es París.</p>
                  <div className="text-xs opacity-75 mt-1">16:20</div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¿Cuántos habitantes tiene?</p>
                  <div className="text-xs opacity-75 mt-1">16:21</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs border border-slate-200 dark:border-slate-600">
                  <p className="text-sm">París tiene aproximadamente 2.1 millones de habitantes en la ciudad propiamente dicha, y alrededor de 12 millones en el área metropolitana.</p>
                  <div className="text-xs opacity-75 mt-1">16:21</div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-br-md max-w-xs">
                  <p className="text-sm">¿Y sus monumentos más famosos?</p>
                  <div className="text-xs opacity-75 mt-1">16:22</div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-3 rounded-2xl rounded-bl-md max-w-xs border border-slate-200 dark:border-slate-600">
                  <p className="text-sm">Los monumentos más famosos de París incluyen la Torre Eiffel, el Arco del Triunfo, Notre-Dame, el Museo del Louvre y la Basílica del Sagrado Corazón en Montmartre.</p>
                  <div className="text-xs opacity-75 mt-1">16:22</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Capacidades Contextuales</h4>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Memoria de Conversación</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Recuerda todo el contexto previo</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Mantiene el hilo completo de la conversación, permitiendo referencias a temas anteriores sin necesidad de repetir información.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Referencias Cruzadas</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Conecta información relacionada</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Identifica y conecta automáticamente información relacionada de diferentes partes de la conversación para respuestas más completas.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Inferencia Inteligente</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Comprende intenciones implícitas</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Entiende preguntas indirectas y referencias implícitas, proporcionando respuestas precisas incluso cuando la pregunta no es explícita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsDemo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Análisis Conversacional Avanzado</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Conversaciones hoy</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">1,247</div>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                  +23%
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Tiempo promedio</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">0.8s</div>
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  -65%
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Precisión IA</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">96%</div>
                </div>
                <div className="text-purple-600 dark:text-purple-400 text-sm font-medium bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                  +12%
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Satisfacción</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">4.8/5</div>
                </div>
                <div className="text-yellow-600 dark:text-yellow-400 text-sm font-medium bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                  +89%
                </div>
              </div>
              <div className="flex justify-center">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Rendimiento en Tiempo Real</h4>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">Eficiencia IA</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">98%</span>
            </div>
            <div className="h-48 flex items-end justify-between gap-2">
              {[65, 78, 82, 90, 85, 95, 88, 92, 96, 89, 94, 98].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg transition-all duration-500 hover:scale-110 animate-pulse"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400">Últimas 12 horas</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">50K+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Usuarios activos</div>
            </div>
            <div className="bg-white dark:bg-slate-700 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">24/7</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat':
        return renderChatDemo();
      case 'responses':
        return renderResponsesDemo();
      case 'context':
        return renderContextDemo();
      case 'analytics':
        return renderAnalyticsDemo();
      default:
        return renderChatDemo();
    }
  };

  return (
    <section id="demo" className="py-20 px-6 sm:px-12 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Ve GarBotGPT en{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              acción
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explora las capacidades conversacionales de nuestro asistente de IA con esta demo interactiva
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-2xl">
          {renderTabContent()}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://ia.garbotgpt.com/auth?redirect=%2F"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Probar Chat Completo
          </a>
        </div>
      </div>

      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </section>
  );
};

export default InteractiveDemoSection;
