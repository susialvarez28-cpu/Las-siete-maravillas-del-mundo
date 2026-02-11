
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import WonderDetail from './pages/WonderDetail';

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-xl font-playfair font-bold text-amber-500 mb-4">WONDERS</h2>
      <p className="text-sm text-gray-500 mb-8">© 2024 Guía de las Siete Maravillas del Mundo para Colombianos.</p>
      <div className="flex justify-center space-x-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
        <a href="#/" className="hover:text-amber-500 transition-colors">Aviso Legal</a>
        <a href="#/" className="hover:text-amber-500 transition-colors">Privacidad</a>
        <a href="#/" className="hover:text-amber-500 transition-colors">Contacto</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wonder/:id" element={<WonderDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;
