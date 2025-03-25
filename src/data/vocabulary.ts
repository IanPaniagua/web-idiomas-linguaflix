export interface VocabularyItem {
  word: string;
  translation: string;
  image?: string;
}

export interface VocabularyCategory {
  category: string;
  items: VocabularyItem[];
}

// Vocabulario de Restaurante
export const restauranteVocabulary: VocabularyCategory = {
  category: "Restaurante",
  items: [
    {
      word: "das Frühstück",
      translation: "el desayuno",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=300&fit=crop"
    },
    {
      word: "das Mittagessen",
      translation: "la comida",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop"
    },
    {
      word: "das Abendessen",
      translation: "la cena",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop"
    },
    {
      word: "die Vorspeise",
      translation: "el entrante",
      image: "https://images.unsplash.com/photo-1607098665874-fd193397547b?w=300&h=300&fit=crop"
    },
    {
      word: "die Hauptspeise",
      translation: "el plato principal",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop"
    },
    {
      word: "der Nachtisch",
      translation: "el postre",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop"
    },
    {
      word: "die Speisekarte",
      translation: "la carta/el menú",
      image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?w=300&h=300&fit=crop"
    },
    {
      word: "der Kellner / die Kellnerin",
      translation: "el camarero / la camarera",
      image: "https://images.unsplash.com/photo-1623158000618-6fb6e0e8dfeb?w=300&h=300&fit=crop"
    },
    {
      word: "bestellen",
      translation: "pedir",
      image: "https://images.unsplash.com/photo-1566454825481-9263931e7cb8?w=300&h=300&fit=crop"
    },
    {
      word: "die Rechnung",
      translation: "la cuenta",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop"
    },
    {
      word: "bezahlen",
      translation: "pagar",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop"
    },
    {
      word: "das Trinkgeld",
      translation: "la propina",
      image: "https://images.unsplash.com/photo-1523676060187-f55189a71f5e?w=300&h=300&fit=crop"
    }
  ]
};

// Vocabulario de Saludos
export const saludosVocabulary: VocabularyCategory = {
  category: "Saludos y Presentaciones",
  items: [
    {
      word: "Hallo",
      translation: "Hola",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&h=300&fit=crop"
    },
    {
      word: "Guten Morgen",
      translation: "Buenos días",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&h=300&fit=crop"
    },
    {
      word: "Guten Tag",
      translation: "Buen día",
      image: "https://images.unsplash.com/photo-1600095139305-151b1ccd4696?w=300&h=300&fit=crop"
    },
    {
      word: "Guten Abend",
      translation: "Buenas tardes/noches",
      image: "https://images.unsplash.com/photo-1562832135-14a35d25edef?w=300&h=300&fit=crop"
    },
    {
      word: "Auf Wiedersehen",
      translation: "Adiós",
      image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=300&h=300&fit=crop"
    },
    {
      word: "Tschüss",
      translation: "Chao",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=300&fit=crop"
    },
    {
      word: "Ich heiße...",
      translation: "Me llamo...",
      image: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?w=300&h=300&fit=crop"
    },
    {
      word: "Mein Name ist...",
      translation: "Mi nombre es...",
      image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=300&h=300&fit=crop"
    },
    {
      word: "Wie heißt du?",
      translation: "¿Cómo te llamas?",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=300&h=300&fit=crop"
    },
    {
      word: "Woher kommst du?",
      translation: "¿De dónde eres?",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=300&h=300&fit=crop"
    },
    {
      word: "Ich komme aus...",
      translation: "Soy de...",
      image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=300&h=300&fit=crop"
    },
    {
      word: "Freut mich",
      translation: "Encantado/a",
      image: "https://images.unsplash.com/photo-1579156412503-f22426427da9?w=300&h=300&fit=crop"
    }
  ]
};

// Vocabulario de Viajes
export const viajesVocabulary: VocabularyCategory = {
  category: "Viajes y Turismo",
  items: [
    {
      word: "der Flughafen",
      translation: "el aeropuerto",
      image: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?w=300&h=300&fit=crop"
    },
    {
      word: "der Bahnhof",
      translation: "la estación de tren",
      image: "https://images.unsplash.com/photo-1551322119-85ec5bd60e4d?w=300&h=300&fit=crop"
    },
    {
      word: "das Flugzeug",
      translation: "el avión",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop"
    },
    {
      word: "der Zug",
      translation: "el tren",
      image: "https://images.unsplash.com/photo-1604715553529-0a2dce1258cf?w=300&h=300&fit=crop"
    },
    {
      word: "der Bus",
      translation: "el autobús",
      image: "https://images.unsplash.com/photo-1562620669-98104534c6cd?w=300&h=300&fit=crop"
    },
    {
      word: "das Taxi",
      translation: "el taxi",
      image: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=300&h=300&fit=crop"
    },
    {
      word: "das Hotel",
      translation: "el hotel",
      image: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=300&h=300&fit=crop"
    },
    {
      word: "die Unterkunft",
      translation: "el alojamiento",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=300&fit=crop"
    },
    {
      word: "das Zimmer",
      translation: "la habitación",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=300&h=300&fit=crop"
    },
    {
      word: "die Rezeption",
      translation: "la recepción",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=300&fit=crop"
    },
    {
      word: "der Schlüssel",
      translation: "la llave",
      image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?w=300&h=300&fit=crop"
    },
    {
      word: "der Reisepass",
      translation: "el pasaporte",
      image: "https://images.unsplash.com/photo-1548017383-180adf0ea6c8?w=300&h=300&fit=crop"
    }
  ]
};

// Vocabulario de Familia
export const familiaVocabulary: VocabularyCategory = {
  category: "La Familia",
  items: [
    {
      word: "die Familie",
      translation: "la familia",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop"
    },
    {
      word: "die Eltern",
      translation: "los padres",
      image: "https://images.unsplash.com/photo-1591604129939-a6f48e0b6d29?w=300&h=300&fit=crop"
    },
    {
      word: "der Vater",
      translation: "el padre",
      image: "https://images.unsplash.com/photo-1509506489701-dfe23b067808?w=300&h=300&fit=crop"
    },
    {
      word: "die Mutter",
      translation: "la madre",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop"
    },
    {
      word: "der Bruder",
      translation: "el hermano",
      image: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?w=300&h=300&fit=crop"
    },
    {
      word: "die Schwester",
      translation: "la hermana",
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=300&h=300&fit=crop"
    },
    {
      word: "der Großvater",
      translation: "el abuelo",
      image: "https://images.unsplash.com/photo-1605459802636-63f8e3cb89ff?w=300&h=300&fit=crop"
    },
    {
      word: "die Großmutter",
      translation: "la abuela",
      image: "https://images.unsplash.com/photo-1593100126453-19b562a800c1?w=300&h=300&fit=crop"
    }
  ]
};

// Vocabulario de Colores
export const coloresVocabulary: VocabularyCategory = {
  category: "Los Colores",
  items: [
    {
      word: "rot",
      translation: "rojo",
      image: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=300&h=300&fit=crop"
    },
    {
      word: "blau",
      translation: "azul",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&h=300&fit=crop"
    },
    {
      word: "gelb",
      translation: "amarillo",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=300&h=300&fit=crop"
    },
    {
      word: "grün",
      translation: "verde",
      image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=300&h=300&fit=crop"
    },
    {
      word: "schwarz",
      translation: "negro",
      image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=300&h=300&fit=crop"
    },
    {
      word: "weiß",
      translation: "blanco",
      image: "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=300&h=300&fit=crop"
    },
    {
      word: "grau",
      translation: "gris",
      image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=300&h=300&fit=crop"
    },
    {
      word: "lila",
      translation: "morado",
      image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=300&h=300&fit=crop"
    }
  ]
};

// Vocabulario de Números
export const numerosVocabulary: VocabularyCategory = {
  category: "Números y Contar",
  items: [
    {
      word: "eins",
      translation: "uno",
      image: "https://images.unsplash.com/photo-1532354058425-ba7ccc7e4a24?w=300&h=300&fit=crop"
    },
    {
      word: "zwei",
      translation: "dos",
      image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=300&h=300&fit=crop"
    },
    {
      word: "drei",
      translation: "tres",
      image: "https://images.unsplash.com/photo-1554475901-6dacab15881c?w=300&h=300&fit=crop"
    },
    {
      word: "vier",
      translation: "cuatro",
      image: "https://images.unsplash.com/photo-1508908324153-d1a219719814?w=300&h=300&fit=crop"
    },
    {
      word: "fünf",
      translation: "cinco",
      image: "https://images.unsplash.com/photo-1517261200038-0dc1506fd0d9?w=300&h=300&fit=crop"
    },
    {
      word: "sechs",
      translation: "seis",
      image: "https://images.unsplash.com/photo-1586253634026-8cb574908d1a?w=300&h=300&fit=crop"
    },
    {
      word: "sieben",
      translation: "siete",
      image: "https://images.unsplash.com/photo-1577971132997-c10be9372519?w=300&h=300&fit=crop"
    },
    {
      word: "acht",
      translation: "ocho",
      image: "https://images.unsplash.com/photo-1521752305290-ff25c9b5755a?w=300&h=300&fit=crop"
    }
  ]
};

// Map de todas las categorías de vocabulario por ID de lección
export const vocabularyMap = {
  restaurante: restauranteVocabulary,
  saludos: saludosVocabulary,
  viajes: viajesVocabulary,
  familia: familiaVocabulary,
  colores: coloresVocabulary,
  numeros: numerosVocabulary,
};

// Función para obtener el vocabulario por ID de lección
export function getVocabularyByLessonId(lessonId: string): VocabularyCategory | null {
  return vocabularyMap[lessonId as keyof typeof vocabularyMap] || null;
} 