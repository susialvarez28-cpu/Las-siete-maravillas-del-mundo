
export interface Wonder {
  id: string;
  name: string;
  country: string;
  location: { lat: number; lng: number; city: string };
  image: string;
  history: string;
  travelFromColombia: {
    routes: string[];
    airports: string[];
    localTransport: string[];
    recommendations: string[];
  };
  characteristics: {
    value: string;
    architecture: string;
    importance: string;
    experience: string;
    bestTime: string;
  };
  curiosities?: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AncientWonder {
  name: string;
  description: string;
  image?: string;
}
