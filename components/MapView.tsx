
import React from 'react';
import { WONDERS } from '../constants';

const MapView: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Ubicación Global</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Explora dónde se encuentran estos tesoros de la humanidad en el mapa interactivo.</p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Simple World Map Background (Representation) */}
        <div className="relative aspect-[21/9] bg-gray-800 rounded-3xl overflow-hidden border border-gray-700">
           <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-amber-500">
              {/* Abstract landmass representation */}
              <path d="M150,150 Q200,100 300,150 T500,100 T700,200 T900,150 L900,400 L100,400 Z" />
           </svg>
           
           {/* Markers */}
           {WONDERS.map((w, i) => {
             // Basic coordinate mapping for illustration
             const x = ((w.location.lng + 180) * 1000) / 360;
             const y = ((90 - w.location.lat) * 500) / 180;
             
             return (
               <a 
                key={w.id} 
                href={`#/wonder/${w.id}`}
                className="absolute w-4 h-4 -ml-2 -mt-2 group cursor-pointer"
                style={{ left: `${x}%`, top: `${y}%` }}
               >
                 <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                 <div className="relative w-full h-full bg-amber-600 rounded-full border-2 border-white"></div>
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-gray-900 text-xs font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                   {w.name}
                 </div>
               </a>
             );
           })}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {WONDERS.map(w => (
            <a 
              key={w.id} 
              href={`#/wonder/${w.id}`}
              className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              {w.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapView;
