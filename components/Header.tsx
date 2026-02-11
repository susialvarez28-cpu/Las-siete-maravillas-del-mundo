
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#/" className="flex items-center space-x-2">
          <span className="text-2xl font-playfair font-bold text-amber-500">WONDERS</span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-gray-400 font-semibold">Mundo Moderno</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#/" className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors">Inicio</a>
          <a href="#/maravillas" className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors">Maravillas</a>
          <a href="#/mapa" className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors">Mapa</a>
        </nav>
        <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
