
import { GoogleGenAI } from "@google/genai";

export const getGeminiChatResponse = async (history: { role: 'user' | 'assistant', content: string }[], userMessage: string) => {
  // Clave API integrada directamente según autorización del usuario
  const apiKey = "AIzaSyCueujA4dQj8yCygbA4pfCcJMNphYD2PaQ";
  
  const ai = new GoogleGenAI({ apiKey });
  
  // Estructura de contenidos para mantener el contexto de la conversación
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
        Hablas en español de forma amable, profesional y cercana (usando "tú" o "usted" de forma natural). 
        Conoces rutas desde ciudades como Bogotá (BOG), Medellín (MDE) y Cali (CLO). 
        Proporcionas datos históricos, requisitos de visa actualizados para colombianos (como la exención de visa en Europa/Schengen o el requisito en China e India) y consejos prácticos.`,
        temperature: 0.7,
      },
    });

    // En la SDK v3 de Gemini, accedemos directamente a .text
    return response.text || "Lo siento, no pude procesar una respuesta en este momento.";
  } catch (error) {
    console.error("Error en el servicio de Gemini:", error);
    throw new Error("Error de conexión con el asistente de IA.");
  }
};
