
import React from 'react';
import { Wonder } from '../types';

interface Props {
  wonder: Wonder;
}

const WonderCard: React.FC<Props> = ({ wonder }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-900/20 transition-all duration-300 border border-white/5">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={wonder.image} 
          alt={wonder.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-1">{wonder.country}</p>
        <h3 className="text-2xl font-playfair font-bold mb-4">{wonder.name}</h3>
        <a 
          href={`#/wonder/${wonder.id}`}
          className="inline-flex items-center text-sm font-medium border-b-2 border-amber-500 pb-1 hover:text-amber-400 transition-colors"
        >
          Explorar destino
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default WonderCard;
