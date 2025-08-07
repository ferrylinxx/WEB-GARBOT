import React from 'react';

const StatisticsSection = () => {
  const stats = [
    {
      number: "50K+",
      label: "Usuarios Activos",
      description: "Confían en nuestro asistente IA",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "96%",
      label: "Precisión IA",
      description: "Exactitud en respuestas generadas",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "85%",
      label: "Mejora Productividad",
      description: "Incremento en eficiencia diaria",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-600"
    },
    {
      number: "< 1s",
      label: "Tiempo de Respuesta",
      description: "Para conversaciones fluidas",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600"
    },

    {
      number: "24/7",
      label: "Disponibilidad",
      description: "Asistencia continua sin interrupciones",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="statistics" className="py-20 px-6 sm:px-12 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Métricas reales de usuarios que han mejorado su productividad
            con GarBotGPT. Únete a la revolución conversacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className={`text-5xl sm:text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated line */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${stat.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
            Casos de Uso
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Casos de uso */}
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg px-8 py-4 text-slate-600 dark:text-slate-300 font-semibold">
              EDUCACIÓN
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg px-8 py-4 text-slate-600 dark:text-slate-300 font-semibold">
              INVESTIGACIÓN
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg px-8 py-4 text-slate-600 dark:text-slate-300 font-semibold">
              CREATIVIDAD
            </div>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg px-8 py-4 text-slate-600 dark:text-slate-300 font-semibold">
              PRODUCTIVIDAD
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-6 py-3 rounded-full text-lg font-semibold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Únete a estos resultados excepcionales
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
