
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WONDERS } from '../constants';

const WonderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const wonder = WONDERS.find(w => w.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!wonder) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4 text-white">Destino no encontrado</h1>
        <a href="#/" className="text-amber-500 font-bold underline">Volver al inicio</a>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-gray-200">
      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={wonder.image} alt={wonder.name} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 text-white">
          <a href="#/" className="inline-flex items-center text-sm text-amber-500 font-bold mb-6 hover:text-amber-400">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a la selección
          </a>
          <p className="text-lg font-bold tracking-widest uppercase mb-2">{wonder.country}</p>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold">{wonder.name}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-12 bg-black">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-playfair font-bold mb-6 flex items-center text-white">
              <span className="text-amber-500 mr-4">01.</span> Reseña Histórica
            </h2>
            <div className="text-gray-300 text-lg leading-relaxed bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
              {wonder.history}
            </div>
          </section>

          {/* New Curiosities Section from PDF */}
          {wonder.curiosities && (
            <section className="bg-zinc-900 text-white p-12 rounded-[3rem] shadow-2xl border border-white/10">
              <h2 className="text-2xl font-playfair font-bold mb-8 text-amber-500">
                Sabías que... (Datos Curiosos)
              </h2>
              <div className="grid gap-6">
                {wonder.curiosities.map((fact, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <span className="text-amber-500 font-bold">✦</span>
                    <p className="text-gray-300 leading-relaxed italic">{fact}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-playfair font-bold mb-8 flex items-center text-white">
              <span className="text-amber-500 mr-4">02.</span> Cómo llegar desde Colombia
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold flex items-center text-amber-500">
                  <span className="mr-2">✈️</span> Rutas sugeridas
                </h3>
                <ul className="space-y-3">
                  {wonder.travelFromColombia.routes.map((r, i) => (
                    <li key={i} className="text-sm bg-zinc-900 border-l-4 border-amber-500 p-3 rounded-r-lg">{r}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold flex items-center text-amber-500">
                  <span className="mr-2">🏢</span> Aeropuertos de llegada
                </h3>
                <ul className="space-y-3">
                  {wonder.travelFromColombia.airports.map((a, i) => (
                    <li key={i} className="text-sm flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-playfair font-bold mb-8 flex items-center text-white">
              <span className="text-amber-500 mr-4">03.</span> Características y Experiencia
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                 <div>
                    <h4 className="font-bold text-gray-100 mb-2">Valor Cultural</h4>
                    <p className="text-gray-400 text-sm">{wonder.characteristics.value}</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-100 mb-2">Arquitectura</h4>
                    <p className="text-gray-400 text-sm">{wonder.characteristics.architecture}</p>
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <h4 className="font-bold text-gray-100 mb-2">Importancia Histórica</h4>
                    <p className="text-gray-400 text-sm">{wonder.characteristics.importance}</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-100 mb-2">La Experiencia</h4>
                    <p className="text-gray-400 text-sm italic">"{wonder.characteristics.experience}"</p>
                 </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 shadow-xl">
             <h3 className="text-xl font-bold mb-6 text-white">Guía Rápida</h3>
             <div className="space-y-6">
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Mejor época</p>
                   <p className="font-medium text-gray-200">{wonder.characteristics.bestTime}</p>
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Ubicación</p>
                   <p className="font-medium text-gray-200">{wonder.location.city}, {wonder.country}</p>
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Transporte Local</p>
                   <div className="flex flex-wrap gap-2 mt-2">
                      {wonder.travelFromColombia.localTransport.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-zinc-800 border border-white/10 rounded uppercase font-bold text-gray-400">{t}</span>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-amber-700 text-white p-8 rounded-3xl shadow-xl">
             <h3 className="text-xl font-bold mb-4">Tips para Colombianos</h3>
             <ul className="space-y-4">
                {wonder.travelFromColombia.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="mr-3">✅</span>
                    {rec}
                  </li>
                ))}
             </ul>
             <button 
              onClick={() => {
                alert("¡Usa nuestro chat de IA abajo a la derecha para preguntar más sobre este destino!");
              }}
              className="w-full mt-8 py-3 bg-white text-amber-900 font-bold rounded-xl hover:bg-amber-50 transition-colors"
             >
                Preguntar a la IA
             </button>
          </div>
          
          <div className="rounded-3xl overflow-hidden h-48 relative shadow-lg border border-white/5">
             <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600" alt="View" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-800">Ver Galería</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonderDetail;
