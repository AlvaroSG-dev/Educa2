# educa2 — Centro Psicopedagógico

Rediseño web del centro **educa2** construido con **Astro** + **Tailwind CSS**.  
Arquitectura multi-página, efectos parallax con Vanilla JS y transiciones de página nativas.

---

## �️ Gestión de Imágenes

Se ha implementado un sistema centralizado para gestionar las imágenes del proyecto. Esto permite cambiar una URL o un texto alternativo en un solo lugar y que se aplique en toda la web.

### Cómo añadir una imagen nueva
1. Edita el archivo [src/data/images.ts](src/data/images.ts).
2. Añade un nuevo par clave-valor al objeto `IMAGES_CATALOG`.

### Uso del componente CentralImage
El componente [src/components/CentralImage.astro](src/components/CentralImage.astro) facilita el uso de estas imágenes y añade funcionalidades de filtrado y SEO.

```astro
---
import CentralImage from '../components/CentralImage.astro';
---

<!-- Uso básico con ID del catálogo -->
<CentralImage id="home_hero" className="rounded-xl shadow" />

<!-- Uso como fondo (Hero con Parallax) -->
<CentralImage 
  id="logo_hero" 
  isBackground={true} 
  blur={true} 
  brightness={0.4} 
  scale={1.1}
/>

<!-- Uso con URL manual (si no está en el catálogo) -->
<CentralImage src="https://..." alt="Descripción" />
```

---

## �🚀 Instalación y arranque

### 1. Requisitos previos
- Node.js **18+**
- npm o pnpm

### 2. Instalar dependencias

```bash
npm install
```

### 3. Arrancar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

### 4. Build de producción

```bash
npm run build
npm run preview   # previsualiza el build
```

---

## 📁 Estructura del proyecto

```
educa2/
├── public/                    # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Layout base compartido: Nav + Footer + meta SEO
│   ├── components/
│   │   ├── Nav.astro           # Navegación sticky multi-página con estado activo
│   │   ├── Footer.astro        # Pie de página con las dos sedes
│   │   ├── HojasSVG.astro      # Hojas SVG flotantes decorativas
│   │   ├── ParallaxSection.astro  # Wrapper con efecto parallax via scroll+rAF
│   │   └── ServiceCard.astro   # Card animada con IntersectionObserver
│   ├── pages/
│   │   ├── index.astro              # / — Home: Hero + resumen servicios
│   │   ├── conocenos.astro          # /conocenos
│   │   ├── psicopedagogia.astro     # /psicopedagogia
│   │   ├── logopedia.astro          # /logopedia ⭐
│   │   └── clases-particulares.astro # /clases-particulares ⭐
│   └── styles/
│       └── global.css         # Tailwind directives + keyframes + view-transitions
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🎨 Identidad visual

| Token | Valor | Uso |
|-------|-------|-----|
| `verde` | `#8fbc4e` | Color principal, CTAs primarios |
| `verde-claro` | `#a8c96e` | Acentos suaves, hojas |
| `verde-oscuro` | `#5a8a1f` | Hover de botones verdes |
| `verde-bg` | `#e8f5d0` | Fondos de sección |
| `burdeos` | `#b03030` | Clases Particulares |
| `morado` | `#7b3f9e` | Logopedia |
| `gris` | `#2d3748` | Texto principal |
| `gris-claro` | `#718096` | Texto secundario |

**Tipografía:** Nunito (Google Fonts) — pesos 400, 600, 700, 800, 900.

---

## ✨ Características técnicas

### Parallax
- `ParallaxSection.astro` usa `scroll` listener + `requestAnimationFrame`
- `will-change: transform` solo en el layer de fondo activo
- Intensidad configurable por sección vía `parallaxIntensity` prop

### Animaciones de entrada
- `ServiceCard.astro` usa `IntersectionObserver` con threshold 0.15
- Fade + slide-up escalonado por índice (delay 0–700ms)
- Respeta `prefers-reduced-motion`

### Navegación multi-página
- `<a href>` estándar, sin router SPA
- `aria-current="page"` en el enlace activo
- Nav sticky con fondo transparente → opaco al hacer scroll

### Transiciones de página
- API nativa `@view-transition` (CSS)  
- Fade simple de 220ms/280ms entre páginas
- Sin dependencias adicionales de JS

### SEO
- Cada página tiene `<title>` y `<meta description>` únicos
- `lang="es"` en el HTML
- Estructura semántica: `<header>`, `<main>`, `<footer>`, `<nav>` con `aria-label`

---

## 📞 Contacto del centro

| Sede | Dirección | Teléfono |
|------|-----------|----------|
| Jerez de la Frontera | Avd. Reino Unido, 4 | 956 06 2004 |
| Puerto Real | Avd. 14 de Abril, 58 | 956 06 2004 |

---

## 🛠 Personalización rápida

**Cambiar colores** → `tailwind.config.mjs`  
**Cambiar contenido** → archivos en `src/pages/`  
**Añadir hojas** → duplicar `<svg>` en `HojasSVG.astro`  
**Ajustar intensidad parallax** → prop `parallaxIntensity` en cada página  
**Añadir página nueva** → crear `src/pages/nueva-pagina.astro` + enlace en `Nav.astro`
