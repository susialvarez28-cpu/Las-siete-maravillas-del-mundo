
import { Wonder, AncientWonder } from './types';

export const WONDERS: Wonder[] = [
  {
    id: 'gran-muralla',
    name: 'Gran Muralla China',
    country: 'China',
    location: { lat: 40.4319, lng: 116.5704, city: 'Huairou, Pekín' },
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200',
    history: 'Antigua fortificación construida para proteger el imperio de China desde el siglo III AC de los ataques de los nómadas xiongnu. No solo impedía el paso, sino que evitaba que los invasores trajeran caballerías consigo.',
    travelFromColombia: {
      routes: ['Vuelo Bogotá (BOG) -> Ámsterdam/París/Madrid -> Pekín (PEK)', 'Vuelo Medellín (MDE) -> Estados Unidos (Visa requerida) -> Pekín'],
      airports: ['Aeropuerto Internacional de Pekín-Capital', 'Aeropuerto Internacional de Pekín-Daxing'],
      localTransport: ['Tren de alta velocidad desde Pekín', 'Autobuses turísticos', 'Teleféricos en sectores como Mutianyu'],
      recommendations: ['Visa de China requerida para colombianos', 'Llevar zapatos cómodos', 'Evitar fines de semana festivos chinos.']
    },
    characteristics: {
      value: 'Símbolo de la perseverancia y el ingenio defensivo chino.',
      architecture: 'Extraordinariamente larga, con 7.300 km de este a oeste. Cubre 6.400 km cruzando siete provincias.',
      importance: 'Patrimonio de la Humanidad por la UNESCO desde 1987. Reconstruida por diferentes dinastías por más de 1.000 años.',
      experience: 'Caminatas con vistas espectaculares de montañas escarpadas.',
      bestTime: 'Primavera (Abril-Mayo) y Otoño (Septiembre-Octubre).'
    },
    curiosities: [
      'El propósito principal era impedir que los invasores trajeran caballos.',
      'Se extiende desde el paso de Shanghai cerca de Bohai hasta el Paso de Jiayu.',
      'Cruza desiertos, montañas y siete provincias chinas.'
    ]
  },
  {
    id: 'petra',
    name: 'Petra',
    country: 'Jordania',
    location: { lat: 30.3285, lng: 35.4444, city: 'Ma\'an' },
    image: 'https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0101.webp',
    history: 'Petra significa "piedra" en griego. Fue la capital del antiguo reino nabateo y se localiza en un valle angosto al sur del Mar Muerto.',
    travelFromColombia: {
      routes: ['Bogotá (BOG) -> Madrid/Estambul -> Ammán (AMM)', 'Cali (CLO) -> Panamá -> Estambul -> Ammán'],
      airports: ['Aeropuerto Internacional de la Reina Alia (Ammán)'],
      localTransport: ['Coche alquilado (3 horas desde Ammán)', 'Autobuses JETT', 'Taxis privados'],
      recommendations: ['Visa requerida (disponible on-arrival o vía Jordan Pass)', 'Comprar el Jordan Pass con antelación.']
    },
    characteristics: {
      value: 'Centro de rutas comerciales de incienso y especias.',
      architecture: 'Construcciones labradas en la misma roca del valle, como la Tesorería y el Templo de los Leones Alados.',
      importance: 'Reconocida como Patrimonio de la Humanidad en 1985.',
      experience: 'Desde mayo de 2005 está hermanada con la ciudadela de Machu Picchu en Perú.',
      bestTime: 'Marzo a Mayo y Septiembre a Noviembre.'
    },
    curiosities: [
      'Su nombre significa literalmente "Piedra".',
      'Está hermanada oficialmente con Machu Picchu.',
      'Alberga el famoso Templo de los Leones Alados.'
    ]
  },
  {
    id: 'cristo-redentor',
    name: 'Cristo Redentor',
    country: 'Brasil',
    location: { lat: -22.9519, lng: -43.2105, city: 'Río de Janeiro' },
    image: 'https://images.unsplash.com/photo-1593995863951-57c27e518295?auto=format&fit=crop&q=80&w=1200',
    history: 'Ubicada a 709 metros sobre el nivel del mar en la cima del morro do Corcovado. Inaugurada el 12 de octubre de 1931 tras 5 años de obras.',
    travelFromColombia: {
      routes: ['Vuelo directo Bogotá (BOG) -> Río de Janeiro (GIG) con Avianca', 'Bogotá -> São Paulo -> Río de Janeiro'],
      airports: ['Aeropuerto Internacional de Galeão (GIG)', 'Aeropuerto Santos Dumont (SDU)'],
      localTransport: ['Tren del Corcovado', 'Vans oficiales de Paineiras', 'Taxi/Uber hasta la base'],
      recommendations: ['No requiere visa para colombianos', 'Comprar entradas online para evitar filas.']
    },
    characteristics: {
      value: 'Símbolo del cristianismo y la hospitalidad brasileña.',
      architecture: 'Altura total de 38m (8m del pedestal). Recibe a dos millones de turistas anualmente.',
      importance: 'En 2003 se inauguró un sistema de escaleras automáticas para facilitar el acceso.',
      experience: 'Originalmente la iluminación iba a ser accionada desde Nápoles por Guillermo Marconi.',
      bestTime: 'Septiembre a Noviembre para evitar el calor extremo y lluvias.'
    },
    curiosities: [
      'Originalmente se intentó encender su luz desde Italia vía radio.',
      'Tiene una altura de 38 metros, equivalente a un edificio de 13 pisos.',
      'S.S. Juan Pablo II lo visitó en su restauración de 1980.'
    ]
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Perú',
    location: { lat: -13.1631, lng: -72.5450, city: 'Cusco' },
    image: 'https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0100.jpeg',
    history: 'Significa "Cima Vieja". Ciudadela inca construida a mediados del siglo XV. Fue probablemente una residencia de Pachacútec o Inca Yupanqui.',
    travelFromColombia: {
      routes: ['Vuelo directo Bogotá (BOG) -> Lima -> Cusco', 'Medellín (MDE) -> Lima -> Cusco'],
      airports: ['Aeropuerto Alejandro Velasco Astete (Cusco)'],
      localTransport: ['Tren desde Ollantaytambo o Poroy', 'Bus desde Aguas Calientes', 'Camino Inca (4 días)'],
      recommendations: ['No requiere visa para colombianos', 'Aclimatarse al menos 2 días en Cusco para evitar el mal de montaña.']
    },
    characteristics: {
      value: 'Obra maestra de ingeniería y arquitectura inca.',
      architecture: 'Muros de piedra seca pulida. Declarado Monumento Histórico de la Ingeniería Civil en 2006.',
      importance: 'Se ha descartado su uso militar, confirmando su rol como santuario religioso y palacio.',
      experience: 'Sentir la energía mística entre las nubes de los Andes.',
      bestTime: 'Temporada seca (Abril a Octubre).'
    },
    curiosities: [
      'Su nombre en quechua significa "Vieja Montaña".',
      'Fue declarada Monumento Histórico de la Ingeniería Civil por la XXX Convención Panamericana.',
      'Se cree que fue la residencia de descanso del primer emperador inca, Pachacútec.'
    ]
  },
  {
    id: 'chichen-itza',
    name: 'Chichén Itzá',
    country: 'México',
    location: { lat: 20.6843, lng: -88.5678, city: 'Yucatán' },
    image: 'https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0099.webp',
    history: 'Uno de los principales asentamientos mayas. Hacia el siglo IX dC se convirtió en un centro político clave de las tierras bajas del Mayab.',
    travelFromColombia: {
      routes: ['Vuelo directo Bogotá (BOG) -> Cancún (CUN)', 'Medellín (MDE) -> Cancún'],
      airports: ['Aeropuerto Internacional de Cancún'],
      localTransport: ['Autobuses ADO desde Cancún o Playa del Carmen', 'Tour privado', 'Alquiler de coche (2-3 horas)'],
      recommendations: ['No requiere visa pero sí prerregistro electrónico (Forma Migratoria)', 'Llevar mucha agua y protector solar.']
    },
    characteristics: {
      value: 'Reflejo del avanzado conocimiento astronómico maya.',
      architecture: 'Mezcla elementos "mexicanizados" con reminiscencias del estilo Puuc de la arquitectura clásica maya.',
      importance: 'Inscrita en la lista del Patrimonio de la Humanidad en 1988.',
      experience: 'Escuchar el canto del quetzal al aplaudir frente a la pirámide de Kukulcán.',
      bestTime: 'Noviembre a Febrero (clima más fresco).'
    },
    curiosities: [
      'Sufrió un delive violento hacia el final del siglo XIII con incendios en sus estructuras.',
      'Su arquitectura muestra una mezcla única de estilos regionales y del Altiplano Central.',
      'Fue el centro de poder más importante de la península yucateca.'
    ]
  },
  {
    id: 'coliseo',
    name: 'Coliseo Romano',
    country: 'Italia',
    location: { lat: 41.8902, lng: 12.4922, city: 'Roma' },
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200',
    history: 'Conocido popularmente como Anfiteatro Flavio. Construido en el siglo I por los emperadores de la dinastía Flavia para luchas de gladiadores.',
    travelFromColombia: {
      routes: ['Vuelo directo Bogotá (BOG) -> Madrid -> Roma (FCO)', 'Bogotá -> París -> Roma'],
      airports: ['Aeropuerto de Roma-Fiumicino (Leonardo da Vinci)'],
      localTransport: ['Metro Línea B (Estación Colosseo)', 'Autobuses urbanos', 'Caminata desde el centro histórico'],
      recommendations: ['No requiere visa para estancias cortas (Schengen)', 'Reservar entradas con meses de anticipación.']
    },
    characteristics: {
      value: 'Icono de la grandeza arquitectónica del Imperio Romano.',
      architecture: 'Capacidad para 50.000 espectadores, lo que le convertía en el anfiteatro más grande de la Antigüedad.',
      importance: 'Patrimonio de la Humanidad desde 1980. Se mantiene iluminado cuando se conmuta una sentencia de muerte.',
      experience: 'Recorrer la arena e imaginar los rugidos de la multitud.',
      bestTime: 'Abril a Junio y Septiembre a Octubre.'
    },
    curiosities: [
      'Se mantiene iluminado por 48 horas cada vez que en el mundo se perdona una vida condenada a muerte.',
      'Fue inmortalizado en el cine por la película Gladiator con una reconstrucción digital épica.',
      'Su nombre real es Anfiteatro Flavio.'
    ]
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    country: 'India',
    location: { lat: 27.1751, lng: 78.0421, city: 'Agra' },
    image: 'https://cnjddrqxqfnonjfhxbcx.supabase.co/storage/v1/object/public/Imagenes/IMG_0102.jpeg',
    history: 'Mausoleo construido entre 1631 y 1654 por el emperador Sha Jahan en honor a su esposa favorita Mumtaz Mahal, quien murió dando a luz a su 14º hijo.',
    travelFromColombia: {
      routes: ['Bogotá (BOG) -> Ámsterdam/Dubái -> Nueva Delhi (DEL)', 'Cali -> Panamá -> Nueva York -> Delhi'],
      airports: ['Aeropuerto Internacional Indira Gandhi (Delhi)'],
      localTransport: ['Tren rápido Gatimaan Express desde Delhi', 'Autobús turístico', 'Rickshaws locales en Agra'],
      recommendations: ['Visa electrónica (e-Visa) requerida para colombianos', 'Cerrado los viernes.']
    },
    characteristics: {
      value: 'Monumento al amor eterno y joya del arte musulmán en India.',
      architecture: 'Demando el esfuerzo de 20.000 obreros. El mármol presenta fluorescencia bajo la luz de la luna.',
      importance: 'Considerado el más bello ejemplo de arquitectura mogola (islámica, persa, india y turca).',
      experience: 'Las visitas nocturnas en noches de luna llena son una experiencia tradicional recuperada.',
      bestTime: 'Octubre a Marzo.'
    },
    curiosities: [
      'El mármol blanco brilla con fluorescencia natural bajo la luz de la luna.',
      'Sha Jahan construyó este templo por el dolor de perder a su esposa tras su 14º parto.',
      'Las visitas nocturnas estuvieron prohibidas desde 1984 hasta hace pocos años.'
    ]
  }
];

export const ANCIENT_WONDERS: AncientWonder[] = [
  {
    name: "Pirámides de Giza (Egipto)",
    description: "Construidas durante la IV dinastía (c. 2680 a.C.). Es la única maravilla antigua que sobrevive hasta nuestros días."
  },
  {
    name: "Jardines Colgantes de Babilonia",
    description: "Construidos por el rey Nabucodonosor II hacia el 600 a.C. Eran una montaña artificial de terrazas ajardinadas."
  },
  {
    name: "Estatua de Zeus en Olimpia",
    description: "Figura de 12 metros tallada por Fidias en marfil y oro (siglo V a.C.). Una de las proezas escultóricas más grandes de la historia."
  },
  {
    name: "Templo de Artemisa en Éfeso",
    description: "Destruido por los bárbaros en el año 262 d.C. Una de las mayores estructuras sagradas de la antigüedad."
  },
  {
    name: "Mausoleo de Halicarnaso",
    description: "Tumba monumental para el rey Mausolo de Caria. De ella proviene la palabra 'mausoleo'."
  },
  {
    name: "Coloso de Rodas",
    description: "Estatua de bronce de 30 metros que representaba al dios Helios, puerta de entrada a la bahía de Rodas."
  },
  {
    name: "Faro de Alejandría",
    description: "Situado en una isla en Egipto, tenía una altura impresionante de 134 metros. Destruido en el siglo XIV."
  }
];
