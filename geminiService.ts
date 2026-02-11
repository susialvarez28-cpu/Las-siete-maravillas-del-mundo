
import { GoogleGenAI } from "@google/genai";

export const getGeminiChatResponse = async (history: { role: 'user' | 'assistant', content: string }[], userMessage: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    throw new Error("API Key no disponible en el entorno.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  // Transformamos el historial al formato esperado por la API
  const contents = [
    ...history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    })),
    { role: 'user', parts: [{ text: userMessage }] }
  ];

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
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

    return response.text;
  } catch (error) {
    console.error("Error al llamar a Gemini API:", error);
    throw error;
  }
};
