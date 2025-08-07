import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Producto',
      href: '#',
      dropdown: [
        { name: 'Características', href: '/caracteristicas' },
        { name: 'Casos de Uso', href: '/casos-de-uso' },
        { name: 'Precios', href: '/precios' }
      ]
    },
    {
      name: 'Recursos',
      href: '#',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentación', href: '/documentacion' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Comunidad', href: '/comunidad' }
      ]
    },
    {
      name: 'Empresa',
      href: '#',
      dropdown: [
        { name: 'Quiénes Somos', href: '/quienes-somos' },
        { name: 'Contacto', href: '/contacto' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl shadow-2xl border-b border-slate-200/40 dark:border-slate-700/40'
        : 'bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className={`relative w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
              isScrolled ? 'shadow-xl' : 'shadow-2xl'
            }`}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <svg className="relative w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              }`}>
                GarBotGPT
              </h1>
              <p className={`text-sm font-medium text-slate-600 dark:text-slate-400 transition-all duration-500 ${
                isScrolled ? 'opacity-70 text-xs' : 'opacity-100 text-sm'
              }`}>
                AI Assistant
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="relative group py-3 px-6 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 flex items-center gap-2">
                  {/* Enhanced background for better readability */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 border ${
                    isScrolled
                      ? 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border-slate-200/50 dark:border-slate-700/50 shadow-lg'
                      : 'bg-black/30 backdrop-blur-2xl border-white/30 shadow-2xl'
                  }`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/8 via-purple-500/8 to-pink-500/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Content with better contrast */}
                  <div className="relative z-10 flex items-center gap-2">
                    <span className={`transition-all duration-300 font-medium ${
                      isScrolled
                        ? 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300'
                        : 'text-white group-hover:text-white drop-shadow-2xl'
                    }`} style={{
                      textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.8)'
                    }}>
                      {item.name}
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                      isScrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white/80'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Enhanced hover indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:w-10 transition-all duration-500 rounded-full shadow-lg"></div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-sm transition-all duration-500"></div>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-slate-200/40 dark:border-slate-700/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-2">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 font-medium"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://ia.garbotgpt.com/auth?redirect=%2F"
              className={`font-semibold transition-all duration-300 py-2.5 px-4 rounded-xl hover:scale-105 ${
                isScrolled
                  ? 'text-slate-800 dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                  : 'text-white hover:text-white hover:bg-white/20 backdrop-blur-xl'
              }`}
              style={{
                textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              Iniciar Sesión
            </a>
            <a
              href="https://ia.garbotgpt.com/auth?redirect=%2F"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20 hover:border-white/30"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Regístrate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-slate-600 dark:bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-slate-600 dark:bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-slate-600 dark:bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-slate-200 dark:border-slate-700">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="https://ia.garbotgpt.com/auth?redirect=%2F" className="block w-full text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-center">
                Iniciar Sesión
              </a>
              <a href="https://ia.garbotgpt.com/auth?redirect=%2F" className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background blur */}
      {isScrolled && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 backdrop-blur-3xl"></div>
      )}
    </nav>
  );
};

export default Navbar;
