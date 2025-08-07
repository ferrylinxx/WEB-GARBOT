import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Producto',
      links: [
        { name: 'Características', href: '/caracteristicas' },
        { name: 'Casos de Uso', href: '/casos-de-uso' },
        { name: 'Precios', href: '/precios' },
        { name: 'API', href: '/documentacion' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentación', href: '/documentacion' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Comunidad', href: '/comunidad' },
        { name: 'Changelog', href: '/changelog' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Quiénes Somos', href: '/quienes-somos' },
        { name: 'Contacto', href: '/contacto' },
        { name: 'Carreras', href: '/carreras' },
        { name: 'Prensa', href: '/prensa' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos', href: '/terminos' },
        { name: 'Privacidad', href: '/privacidad' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Seguridad', href: '/seguridad' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <img
                  src="/favicon-original.png"
                  alt="GarBotGPT Logo"
                  className="w-8 h-8 rounded-lg"
                />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GarBotGPT
              </h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              El futuro de la conversación inteligente. IA que comprende, aprende y evoluciona contigo.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com/garbotgpt"
                className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50"
              >
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/garbotgpt"
                className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50"
              >
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/garbotgpt"
                className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50"
              >
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/garbotgpt"
                className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50"
              >
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    >
                      <span className="w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter subscription */}
        <div className="mt-20 pt-12 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mantente en la Vanguardia
            </h4>
            <p className="text-slate-300 mb-8 text-lg">
              Recibe insights exclusivos sobre IA, actualizaciones de producto y contenido premium directamente en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
              © 2025 GarBotGPT. Todos los derechos reservados. Construyendo el futuro de la IA conversacional.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacidad" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="/cookies" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
                Cookies
              </a>
              <a href="/status" className="text-slate-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Estado del Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
