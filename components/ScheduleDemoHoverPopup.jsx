import React, { useState } from 'react';

const ScheduleDemoHoverPopup = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Delay de 1 segundo para que aparezca el popup
    const timer = setTimeout(() => {
      if (isHovered) {
        setShowPopup(true);
      }
    }, 1000);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPopup(false);
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Schedule Demo Popup */}
      {showPopup && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 max-w-sm w-80">
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-slate-800"></div>
            
            {/* Header with calendar icon */}
            <div className="text-center mb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                Agendar Demo
              </h4>
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Disponible Próximamente
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-4">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Estamos preparando un sistema de agendamiento personalizado para que puedas reservar tu demo en el horario que mejor te convenga.
              </p>
              
              {/* Features list */}
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Demo personalizada de 30 minutos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Consultor especializado asignado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Análisis de tu caso específico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Propuesta de implementación</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Mientras tanto, puedes registrarte para recibir notificaciones
              </p>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-sm">
                Notificarme cuando esté listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleDemoHoverPopup;
