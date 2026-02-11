
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Hola! 👋 Soy tu guía virtual. ¿Sobre qué maravilla del mundo te gustaría aprender hoy o necesitas saber cómo viajar desde Colombia?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const responseText = await getGeminiChatResponse(messages, userMsg);
      setMessages([...newMessages, { role: 'assistant', content: responseText || "No pude generar una respuesta." }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'assistant', content: "Lo siento, tuve un problema conectando con el servidor." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-zinc-900 w-80 sm:w-96 h-[500px] mb-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-amber-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">✈️</span>
              </div>
              <div>
                <h3 className="text-sm font-bold">Guía de Maravillas</h3>
                <p className="text-[10px] opacity-80">Asistente IA - En línea</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-zinc-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-amber-700 text-white rounded-tr-none' : 'bg-zinc-800 text-gray-200 shadow-sm border border-white/5 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl shadow-sm border border-white/5 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregúntame algo..."
                className="flex-1 bg-zinc-800 border-none rounded-full px-4 py-2 text-sm text-white focus:ring-2 focus:ring-amber-700 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-700 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border border-white/10"
      >
        <span className="text-2xl">{isOpen ? '❌' : '💬'}</span>
      </button>
    </div>
  );
};

export default AIChat;
