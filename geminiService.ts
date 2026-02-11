
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiChatResponse = async (history: { role: 'user' | 'assistant', content: string }[], userMessage: string) => {
  if (!API_KEY) {
    throw new Error("API Key no configurada.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model' as any,
        parts: [{ text: m.content }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `Eres un asistente de viajes experto especializado en las Siete Maravillas del Mundo Moderno. 
      Tu enfoque principal es ayudar a usuarios colombianos. 
      Hablas en español de forma amable, profesional y cercana. 
      Conoces rutas desde ciudades como Bogotá, Medellín y Cali. 
      Puedes dar datos históricos, recomendaciones de seguridad, requisitos de visa para colombianos y curiosidades. 
      Responde de forma concisa pero informativa.`,
      temperature: 0.7,
    },
  });

  const response = await model;
  return response.text;
};
