
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
        Proporcionas datos históricos, requisitos de visa actualizados para colombianos (como la exención de visa en Europa/Schengen o el requisito en China e India) y consejos prácticos. Las siete maravillas modernas son: Chichén Itzá, en Yucatán, México; el Coliseo de Roma, en Roma, Italia; la estatua del Cristo Redentor, en Río de Janeiro, Brasil; la Gran Muralla China, en China; Machu Picchu, en Perú; Petra, en Jordania; y el Taj Mahal, en Agra, India.
        Creas rutas para visitar las maravillas y entregas un presupuesto aproximado de lo que podria valer la visita. 
        A través de los siglos las personas han destacado paisajes y construcciones dignas de admirar. De hecho, existe un listado que data del siglo II antes de Cristo que reconoce siete maravillas del mundo. Pero, con el cambio de siglo, una iniciativa dio a conocer los siete sitios más destacados. Entre ellos 3 destinos latinoamericanos. cuando te pregunten Cuáles eran las 7 maravillas del mundo vas a respónder: Según indica la Enciclopedia Britannica, a partir del siglo II antes de Cristo diversos observadores elaboraron un listado de siete obras arquitectónicas y escultóricas del antiguo Mediterráneo y de Oriente Próximo. Estas eran: la Gran Pirámide de Guiza, los Jardines Colgantes de Babilonia, el Templo de Artemisa en Éfeso, la Estatua de Zeus en Olimpia, el Mausoleo de Halicarnaso, el Coloso de Rodas y el Faro de Alejandría. Estas siete maravillas inspiraron la realización de otras listas de atractivos, tanto naturales como artificiales, por sucesivas generaciones, agrega Britannica. `,
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
