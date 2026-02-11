
import React from 'react';
import WonderCard from '../components/WonderCard';
import MapView from '../components/MapView';
import { WONDERS, ANCIENT_WONDERS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=2000" 
            alt="Wonders of the world" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6 animate-in fade-in slide-in-from-left-8 duration-700">
              Las Siete Maravillas <span className="text-amber-500">del Mundo Moderno</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed animate-in fade-in slide-in-from-left-8 delay-200 duration-700">
              Descubre los monumentos más impresionantes de la humanidad. Una guía completa basada en archivos históricos y consejos para viajeros.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left-8 delay-300 duration-700">
              <a 
                href="#wonders-grid" 
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all shadow-lg"
              >
                Empezar exploración
              </a>
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Mapa del mundo
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white/40 text-xs mb-2 uppercase tracking-widest">Desliza</span>
            <div className="w-0.5 h-10 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
      </section>

      {/* Cinematic Animation Section - Vertical & Complete */}
      <section className="py-24 bg-black overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">Experiencia Vertical</span>
          <h2 className="text-4xl font-playfair font-bold text-white">Historia en cada Dimensión</h2>
        </div>
        
        <div className="w-full max-w-md px-4">
          <div className="relative aspect-[9/16] rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.2)] border border-white/10 group">
            <video 
              src="https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Videos/067cfc3f-7095-4892-8efe-214d6a7d2d94.mov"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Elegant minimal overlay */}
            <div className="absolute bottom-12 left-0 w-full px-8 text-center pointer-events-none">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2 drop-shadow-lg">Legado Eterno</h3>
              <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="wonders-grid" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-white">Los Tesoros de Nuestra Era</h2>
            <p className="text-gray-400">En 2007, tras una masiva votación mundial, se eligieron estos siete sitios como los nuevos pilares del patrimonio humano.</p>
          </div>
          <div className="text-amber-500 font-bold uppercase tracking-wider text-sm flex items-center">
            <span>Explorar los 7 destinos</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {WONDERS.map((wonder) => (
            <WonderCard key={wonder.id} wonder={wonder} />
          ))}
          {/* Highlight Card with provided image */}
          <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-900/20 transition-all duration-300 border border-white/5">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0096.jpeg" 
                alt="Tesoro destacado de la comunidad" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-1">Cultura Maya</p>
              <h3 className="text-2xl font-playfair font-bold mb-4">Misterios de Chichén Itzá</h3>
              <span className="text-sm font-medium text-white/80">Estudios Recientes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Panorama Image Section */}
      <section className="pb-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/8%20Maravillas%20Del%20Mundo.jpeg" 
              alt="8 Maravillas del Mundo Panorama" 
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
               <div>
                 <h2 className="text-3xl font-playfair font-bold text-white mb-2">Visión de Conjunto</h2>
                 <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">Un legado para la eternidad</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8th Wonder Section from PDF */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border border-white/5">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">Mención de Honor</span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 italic text-white">La "Octava" Maravilla</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      El <span className="font-bold text-gray-100">Palacio Akshardham</span> en la India es frecuentemente citado como la maravilla número ocho por su deslumbrante arquitectura y escala monumental. Una joya moderna que captura la esencia espiritual del subcontinente.
                    </p>
                    <div className="flex items-center space-x-2">
                       <span className="text-3xl">🇮🇳</span>
                       <span className="font-bold text-gray-200">Nueva Delhi, India</span>
                    </div>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1542397670-4f9e47aa5114?auto=format&fit=crop&q=80&w=800" 
                      alt="Akshardham Palace" 
                      className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">Candidata Top</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <MapView />

      {/* Ancient Wonders Section - Purely Textual and Elegant */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Las Maravillas de la Antigüedad</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Antes de nuestra era moderna, estos eran los monumentos que definían la grandeza del mundo conocido.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ANCIENT_WONDERS.map((aw, i) => (
              <div key={i} className="group bg-zinc-900/30 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-amber-500/20 hover:bg-zinc-900/50 transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-amber-500/50 font-playfair italic text-6xl mb-6 block">0{i+1}</span>
                  <h3 className="text-2xl font-playfair font-bold mb-3 text-white group-hover:text-amber-500 transition-colors">{aw.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{aw.description}</p>
                </div>
                {/* Decorative glow */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Visual Reference Section */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl border border-white/5">
            <div className="p-12 lg:p-20 lg:w-1/2 text-white flex flex-col justify-center">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">Geografía Turística</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">Ubicación de los Sitios</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Visualiza la distribución estratégica de estos monumentos históricos compartida por nuestra red de viajeros y archivos históricos.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-bold text-amber-500">7</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Modernas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-500">7</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Antiguas</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0097.jpeg" 
                alt="Mapa detallado de ubicaciones turísticas" 
                className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-transparent lg:block hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" 
               alt="Travel Culture" 
               className="rounded-3xl shadow-2xl relative z-10 opacity-80"
             />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-900/20 rounded-2xl -z-10 animate-pulse"></div>
          </div>
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Legado y Cultura</span>
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">Un viaje a través de la historia y el ingenio humano</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Basado en las crónicas de Ma. Concepción Iglesias y colaboradores, esta guía expande el conocimiento sobre el delive de Chichén Itzá, el esfuerzo de 20.000 obreros en el Taj Mahal y la proeza técnica del Cristo Redentor.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Para los colombianos, estos destinos representan la máxima aspiración viajera. Aprende sobre los equinoccios en México o las noches de luna llena en Agra desde una perspectiva local y detallada.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-black object-cover" src={`https://picsum.photos/seed/${i}/100/100`} alt="User" />
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">+10,000 viajeros consultaron esta guía</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">Experiencia Inmersiva</span>
          <h2 className="text-4xl font-playfair font-bold mb-12 text-white">El Mundo en Movimiento</h2>
          
          <div className="relative group aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
             <video 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
               src="https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Videos/IMG_6158.mov"
               controls
               muted
               loop
               playsInline
             >
               Tu navegador no soporta el tag de video.
             </video>
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <p className="mt-8 text-gray-500 text-sm italic">Siente la atmósfera de los destinos más emblemáticos del planeta desde tu pantalla.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
