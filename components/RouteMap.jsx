import React, { useState, useEffect } from 'react';
import { Card3D, HoverGlow } from './ParticleBackground';
import { CityWithFlag } from './RouteWithFlags';

const RouteMap = () => {
  const [activeRoute, setActiveRoute] = useState(null);
  const [animatedRoutes, setAnimatedRoutes] = useState([]);

  const routes = [
    {
      id: 1,
      from: { name: 'Madrid', x: 25, y: 45 },
      to: { name: 'París', x: 30, y: 35 },
      status: 'active',
      shipments: 45,
      color: 'from-blue-500 to-indigo-600',
      dotColor: 'bg-blue-500'
    },
    {
      id: 2,
      from: { name: 'Barcelona', x: 32, y: 42 },
      to: { name: 'Berlín', x: 40, y: 30 },
      status: 'active',
      shipments: 32,
      color: 'from-emerald-500 to-teal-600',
      dotColor: 'bg-emerald-500'
    },
    {
      id: 3,
      from: { name: 'Valencia', x: 28, y: 48 },
      to: { name: 'Roma', x: 42, y: 50 },
      status: 'pending',
      shipments: 18,
      color: 'from-yellow-500 to-orange-600',
      dotColor: 'bg-yellow-500'
    },
    {
      id: 4,
      from: { name: 'Sevilla', x: 22, y: 52 },
      to: { name: 'Ámsterdam', x: 35, y: 28 },
      status: 'completed',
      shipments: 28,
      color: 'from-purple-500 to-pink-600',
      dotColor: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRoutes(routes);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-emerald-500';
      case 'pending': return 'text-yellow-500';
      case 'completed': return 'text-blue-500';
      default: return 'text-slate-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'pending':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'completed':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <HoverGlow glowColor="#6366f1" className="h-full">
      <Card3D intensity={10} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              Mapa de Rutas Globales
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {routes.filter(r => r.status === 'active').length} Activas
              </span>
            </div>
          </div>

          {/* World Map */}
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 mb-6 overflow-hidden">
            {/* Map background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simplified world map paths */}
                <path d="M10,20 Q20,15 30,20 T50,25 Q60,20 70,25 T90,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M15,35 Q25,30 35,35 T55,40 Q65,35 75,40 T95,45" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M5,45 Q15,40 25,45 T45,50 Q55,45 65,50 T85,55" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </svg>
            </div>

            {/* Routes */}
            <div className="relative h-48">
              {animatedRoutes.map((route, index) => (
                <div key={route.id} className="absolute inset-0">
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id={`route-gradient-${route.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={route.color.split(' ')[1]} stopOpacity="0.8" />
                        <stop offset="50%" stopColor={route.color.split(' ')[3]} stopOpacity="0.6" />
                        <stop offset="100%" stopColor={route.color.split(' ')[1]} stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`M ${route.from.x}% ${route.from.y}% Q ${(route.from.x + route.to.x) / 2}% ${Math.min(route.from.y, route.to.y) - 10}% ${route.to.x}% ${route.to.y}%`}
                      stroke={`url(#route-gradient-${route.id})`}
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </svg>

                  {/* From point */}
                  <div
                    className={`absolute w-4 h-4 ${route.dotColor} rounded-full shadow-lg animate-ping`}
                    style={{
                      left: `${route.from.x}%`,
                      top: `${route.from.y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                  <div
                    className={`absolute w-2 h-2 ${route.dotColor} rounded-full`}
                    style={{
                      left: `${route.from.x}%`,
                      top: `${route.from.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />

                  {/* To point */}
                  <div
                    className={`absolute w-4 h-4 ${route.dotColor} rounded-full shadow-lg animate-ping`}
                    style={{
                      left: `${route.to.x}%`,
                      top: `${route.to.y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.2 + 0.5}s`
                    }}
                  />
                  <div
                    className={`absolute w-2 h-2 ${route.dotColor} rounded-full`}
                    style={{
                      left: `${route.to.x}%`,
                      top: `${route.to.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />

                  {/* Moving dot animation */}
                  {route.status === 'active' && (
                    <div
                      className={`absolute w-3 h-3 ${route.dotColor} rounded-full shadow-lg animate-pulse`}
                      style={{
                        left: `${route.from.x + (route.to.x - route.from.x) * 0.6}%`,
                        top: `${route.from.y + (route.to.y - route.from.y) * 0.6 - 5}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Route List */}
          <div className="space-y-3">
            {routes.map((route) => (
              <div
                key={route.id}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeRoute === route.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-200 dark:border-indigo-700'
                    : 'bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                }`}
                onClick={() => setActiveRoute(activeRoute === route.id ? null : route.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 ${getStatusColor(route.status)}`}>
                    {getStatusIcon(route.status)}
                    <span className="text-sm font-medium capitalize">{route.status}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      <CityWithFlag city={route.from.name} size="xs" /> → <CityWithFlag city={route.to.name} size="xs" />
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {route.shipments} envíos
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${route.dotColor} rounded-full animate-pulse`}></div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card3D>
    </HoverGlow>
  );
};

export default RouteMap;
