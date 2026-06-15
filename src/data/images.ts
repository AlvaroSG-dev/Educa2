/**
 * Catálogo centralizado de imágenes del proyecto.
 * Permite cambiar rutas y textos alternativos en un solo lugar.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  category?: 'hero' | 'gallery' | 'service' | 'other';
}

export const IMAGES_CATALOG = {
  // --- HOME ---
  home_hero: {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85&auto=format&fit=crop',
    alt: 'Niña leyendo en espacio educativo luminoso',
    category: 'hero'
  },
  home_ninos_talking: {
    src: 'https://images.unsplash.com/photo-1571260898995-4ae0a0d5bd79?w=1600&q=85&auto=format&fit=crop',
    alt: 'Logopeda trabajando con niño',
    category: 'gallery'
  },
  home_reading_warm: {
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=85&auto=format&fit=crop',
    alt: 'Niña leyendo libro en ambiente cálido',
    category: 'gallery'
  },
  home_studying: {
    src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=85&auto=format&fit=crop',
    alt: 'Niño estudiando concentrado',
    category: 'gallery'
  },
  home_happy_kids: {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=85&auto=format&fit=crop',
    alt: 'Niños felices aprendiendo juntos',
    category: 'gallery'
  },
  home_classes: {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85&auto=format&fit=crop',
    alt: 'Profesora con alumnos en el aula',
    category: 'service'
  },

  // --- LOGOPEDIA ---
  logo_hero: {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&q=85&auto=format&fit=crop',
    alt: 'Primer plano de alguien hablando o comunicando',
    category: 'hero'
  },
  logo_nino1: {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85&auto=format&fit=crop',
    alt: 'Niño aprendiendo en sesión de logopedia',
    category: 'service'
  },
  logo_nino2: {
    src: 'https://images.unsplash.com/photo-1571260898995-4ae0a0d5bd79?w=1600&q=85&auto=format&fit=crop',
    alt: 'Interacción educativa alegre',
    category: 'service'
  },
  logo_nino3: {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=85&auto=format&fit=crop',
    alt: 'Progreso y satisfacción en el aprendizaje',
    category: 'service'
  },
    // --- Psicología ---
     hero_psico: {
    src: 'https://media.istockphoto.com/id/1625851354/es/foto/hombre-manos-y-escucha-para-terapia-sof%C3%A1-o-consejos-de-mujer-para-salud-mental-psicolog%C3%ADa-o.jpg?s=612x612&w=0&k=20&c=ivGyfd1bt9zuVtmkroH_D3FgCN5ew099jomE-omjSec=',
    alt: 'Progreso y satisfacción en el aprendizaje',
    category: 'service'
  },
     neuro: {
    src: 'https://escuelaelbs.lat/wp-content/uploads/que-es-neuropsicologo.jpg',
    alt: 'cerebro y la conducta',
    category: 'service'
  },
    // --- Psicopedagógia ---
    hero_psicopedagoga: {
    src: 'https://formainfancia.com/wp-content/uploads/psicopedagogia-infantil.jpg',
    alt: 'cerebro y la conducta',
    category: 'service'
  },
    psico_trabaja: {
    src: 'https://fotos.perfil.com/2022/11/15/trim/950/534/la-psicopedagogia-y-su-campo-de-accion-1454121.jpg',
    alt: 'cerebro y la conducta',
    category: 'service'
  },
    // --- Conocenos ---
} as const;

export type ImageId = keyof typeof IMAGES_CATALOG;
