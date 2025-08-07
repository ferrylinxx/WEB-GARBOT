import React, { useState, useEffect } from 'react';

const EpicNotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const epicNotifications = [
    {
      id: 1,
      type: 'success',
      icon: '🚀',
      title: '¡Usuario conectado desde Madrid!',
      message: 'Alguien acaba de descubrir GarBotGPT',
      color: 'from-emerald-500 to-teal-500',
      duration: 4000
    },
    {
      id: 2,
      type: 'info',
      icon: '🧠',
      title: 'IA procesando 1,247 consultas/min',
      message: 'Rendimiento óptimo detectado',
      color: 'from-blue-500 to-cyan-500',
      duration: 3500
    },
    {
      id: 3,
      type: 'achievement',
      icon: '⭐',
      title: '¡Nuevo récord de precisión!',
      message: '98.7% de respuestas perfectas hoy',
      color: 'from-yellow-500 to-orange-500',
      duration: 4500
    },
    {
      id: 4,
      type: 'user',
      icon: '👨‍💻',
      title: 'Desarrollador desde Barcelona',
      message: 'Resolvió 15 bugs con GarBotGPT',
      color: 'from-purple-500 to-pink-500',
      duration: 3800
    },
    {
      id: 5,
      type: 'milestone',
      icon: '🎯',
      title: '50,000+ usuarios activos',
      message: 'Hito alcanzado este mes',
      color: 'from-indigo-500 to-purple-500',
      duration: 5000
    },
    {
      id: 6,
      type: 'creative',
      icon: '🎨',
      title: 'Artista desde México',
      message: 'Creó 20 poemas únicos en 5 minutos',
      color: 'from-pink-500 to-rose-500',
      duration: 4200
    }
  ];

  useEffect(() => {
    let notificationIndex = 0;
    
    const showNotification = () => {
      const notification = {
        ...epicNotifications[notificationIndex],
        timestamp: Date.now()
      };
      
      setNotifications(prev => [...prev, notification]);
      
      // Remove notification after duration
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.timestamp !== notification.timestamp));
      }, notification.duration);
      
      notificationIndex = (notificationIndex + 1) % epicNotifications.length;
    };

    // Show first notification immediately
    showNotification();
    
    // Then show notifications at intervals
    const interval = setInterval(showNotification, 6000);
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.timestamp}
          className={`
            bg-gradient-to-r ${notification.color} 
            text-white p-4 rounded-2xl shadow-2xl 
            transform transition-all duration-500 ease-out
            animate-slide-in-right hover:scale-105
            backdrop-blur-sm border border-white/20
            relative overflow-hidden
          `}
          style={{
            animation: 'slideInRight 0.5s ease-out, fadeOut 0.5s ease-in ' + (notification.duration - 500) + 'ms forwards'
          }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-consciousness-wave"></div>
          
          {/* Content */}
          <div className="relative z-10 flex items-start gap-3">
            <div className="text-2xl animate-bounce">
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm mb-1 truncate">
                {notification.title}
              </div>
              <div className="text-xs opacity-90 leading-relaxed">
                {notification.message}
              </div>
            </div>
            <button
              onClick={() => {
                setNotifications(prev => 
                  prev.filter(n => n.timestamp !== notification.timestamp)
                );
              }}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-white/50 animate-shrink-width"
              style={{
                animation: `shrinkWidth ${notification.duration}ms linear forwards`
              }}
            ></div>
          </div>
        </div>
      ))}
      
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7.5a7.5 7.5 0 017.5 7.5v5z" />
        </svg>
      </button>
    </div>
  );
};

// Live activity feed component
const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  const activityTypes = [
    { icon: '💬', action: 'preguntó sobre', topic: 'inteligencia artificial', location: 'Madrid' },
    { icon: '🎨', action: 'creó un', topic: 'poema épico', location: 'Barcelona' },
    { icon: '💻', action: 'debugeó', topic: 'código Python', location: 'México DF' },
    { icon: '📊', action: 'analizó', topic: 'datos financieros', location: 'Buenos Aires' },
    { icon: '🧠', action: 'exploró', topic: 'neurociencia', location: 'Bogotá' },
    { icon: '🚀', action: 'optimizó', topic: 'algoritmos ML', location: 'Lima' }
  ];

  useEffect(() => {
    const generateActivity = () => {
      const activity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
      const newActivity = {
        id: Date.now(),
        ...activity,
        timestamp: new Date().toLocaleTimeString(),
        user: `Usuario${Math.floor(Math.random() * 9999)}`
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    };

    generateActivity();
    const interval = setInterval(generateActivity, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white p-4 rounded-2xl shadow-2xl border border-slate-700 max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold">Actividad en Vivo</span>
      </div>
      
      <div className="space-y-2 max-h-40 overflow-hidden">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className={`text-xs p-2 rounded-lg bg-slate-800/50 transition-all duration-500 ${
              index === 0 ? 'animate-slide-in-left' : ''
            }`}
            style={{ opacity: 1 - (index * 0.2) }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="truncate">
                  <span className="text-blue-400">{activity.user}</span> {activity.action} <span className="text-purple-400">{activity.topic}</span>
                </div>
                <div className="text-slate-400 text-xs">
                  {activity.location} • {activity.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpicNotificationSystem;
export { LiveActivityFeed };
