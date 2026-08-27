# Especificación de mejoras de diseño — portfolio-jorge

Documento de contrato. Implementar **exactamente** lo aquí descrito.
No tomar decisiones de diseño propias. No inventar contenido, tecnologías ni textos.

Archivos a modificar: `index.html`, `css/main.css`, `css/animations.css`, `js/carousels.js`, `js/utils.js`, `js/main.js`.
NO tocar: `assets/`, `manifest.json`, `netlify.toml`, `robots.txt`, `README.md`.

## REQUISITO TRANSVERSAL — NO ROMPER EL RESPONSIVE

El sitio ya es responsive con breakpoints en **968px, 768px y 480px**. Es un requisito
duro del usuario que siga siéndolo. Reglas:

- Conservar TODOS los bloques `@media` existentes salvo que esta spec diga lo contrario.
- Cualquier regla nueva debe tener su equivalente en los 3 breakpoints si aplica.
- Nada puede provocar scroll horizontal en ningún ancho entre 320px y 1920px.
- El carrusel de proyectos (<968px) y la grilla (>=968px) deben seguir funcionando igual.
- Objetivos táctiles de 44x44px o más en móvil.

---

## 1. BUG CRÍTICO — El hero está descuadrado en desktop

### Problema
`.hero-content` es `display:grid; grid-template-columns:1fr 1fr` pero contiene **6 hijos
directos** (badge, título, subtítulo, descripción, botones, scroll). El grid los reparte
en zigzag en 3 filas por 2 columnas. Además `.hero-visual` es hermano de `.hero-content`,
no hijo, así que queda fuera del grid.

### Solución — `index.html`
Dentro de `<section class="hero">`, envolver los 6 hijos de `.hero-content` en un nuevo
`<div class="hero-text">`, y **mover `.hero-visual` DENTRO de `.hero-content`** como
segundo hijo. Estructura final:

    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">...</div>
        <h1 class="hero-title">...</h1>
        <div class="hero-subtitle">...</div>
        <p class="hero-description">...</p>
        <div class="hero-buttons">...</div>
        <div class="hero-scroll">...</div>
      </div>
      <div class="hero-visual">...</div>
    </div>

El contenido interno de cada bloque NO cambia (incluidos todos los atributos `data-i18n`).

### Solución — `css/main.css`

    .hero-content {
      width: 100%;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 1.5rem;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 4rem;
      align-items: center;
    }
    .hero-text { display: flex; flex-direction: column; align-items: flex-start; }

En el `@media (max-width: 968px)` existente: `.hero-content { grid-template-columns: 1fr; }`
y `.hero-text { align-items: center; text-align: center; }`. Mantener el
`.hero-visual { order: -1 }` que ya existe para que la foto quede arriba en móvil.

Verificación: a 1440px el badge, título, subtítulo, descripción, botones y scroll deben
quedar **apilados verticalmente en la columna izquierda**, y la foto centrada a la derecha.

---

## 2. BUG — Contraste roto en tema claro

En `[data-theme="light"]`, `--bg-tertiary: #fff` es idéntico a `--card-bg: #fff`.
Todo lo que usa `--bg-tertiary` como superficie se vuelve invisible dentro de una tarjeta:
`.project-tag`, `.project-btn-secondary`, `.btn-secondary:hover`, `.skill-bar`, `.carousel-dot`.

**Fix:** en `[data-theme="light"]` cambiar `--bg-tertiary` de `#fff` a `#e8edf4`.
No tocar el valor de `--bg-tertiary` en `[data-theme="dark"]` (`#334155`).

Verificar en tema claro que los tags de proyecto y el botón GitHub son claramente visibles.

---

## 3. BUG — Contenido invisible al entrar por deep-link

`.reveal`, `.reveal-left` y `.reveal-right` arrancan en `opacity: 0` y sólo reciben la
clase `.visible` vía IntersectionObserver. Al abrir `index.html#contacto` (o cualquier
ancla) directamente, o si el JS falla, secciones enteras quedan invisibles.

**Fix en `js/utils.js`, dentro de `initScrollReveal()`:** después de crear el observer y
observar los elementos, añadir un fallback que marque como visible todo lo que ya esté
dentro del viewport:

    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)')
        .forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
        });
    }, 300);

**Fix adicional (guard de no-JS):** añadir `class="no-js"` al elemento `<html>` y, como
primer script inline en el `<head>`, `document.documentElement.classList.remove('no-js')`.
En `css/main.css` añadir:

    .no-js .reveal, .no-js .reveal-left, .no-js .reveal-right { opacity: 1; transform: none; }
    .no-js .loader { display: none; }

---

## 4. Tratamiento de las capturas de proyecto (NO se reemplazan las imágenes)

Las imágenes existentes son de 1920x910 aproximadamente y se usan tal cual. El problema es
la presentación: hoy la captura sangra de borde a borde de la tarjeta, con crop centrado, y
los fondos blanco/crema/negro de cada app chocan entre tarjetas.

### 4.1 Marco de navegador (CSS en `main.css` + template en `js/carousels.js`)

`.project-image` pasa a ser un contenedor con fondo propio y padding, y la captura vive
dentro de un marco con barra de título falsa.

- `.project-image`: `height: 210px; padding: 0.75rem 0.75rem 0; position: relative; overflow: hidden;`
  y fondo `linear-gradient(160deg, rgba(99,102,241,0.14), rgba(139,92,246,0.06))`.
- Nuevo `.project-shot`: `height: 100%; border-radius: 8px 8px 0 0; overflow: hidden;`
  `border: 1px solid var(--card-border); box-shadow: 0 8px 20px rgba(0,0,0,0.28);`
  `background: var(--card-bg); cursor: zoom-in;`
- Nuevo `.project-shot-bar`: barra superior de 22px de alto, `background: var(--bg-tertiary)`,
  `display:flex; align-items:center; gap:5px; padding: 0 8px;` con **3 puntos** de 7px
  (`.project-shot-dot`, `border-radius:50%`) en `#ef4444`, `#f59e0b`, `#22c55e`.
- La `<img>` dentro: `width:100%; height: calc(100% - 22px); object-fit: cover;`
  y **`object-position: top center`**. Hoy el crop centrado cae en medio de las tablas
  densas; con `top` se ve el header/hero de cada app, que es la parte limpia y reconocible.
- Conservar la transición de zoom en hover que ya existe
  (`.project-card:hover .project-image img { transform: scale(1.05) }`).

El `.project-badge` (categoría) sigue en `position:absolute` sobre `.project-image`,
ajustando a `top: 1.25rem; left: 1.25rem; z-index: 3`.

Mantener intacto el atributo `onerror` de fallback SVG que ya tiene la `<img>`.

### 4.2 Lightbox (JS en `js/carousels.js` + CSS)

Al hacer clic en `.project-shot` se abre la imagen a tamaño completo, que es donde sí se
puede leer el contenido de la captura.

- Overlay `.lightbox` fijo a pantalla completa, `background: rgba(2,6,23,0.92)`,
  `backdrop-filter: blur(6px)`, `z-index: 10001`, centrado con flex,
  `opacity`/`visibility` con transición de 250ms.
- Dentro: una `<img>` con `max-width: 92vw; max-height: 88vh; border-radius: 10px;` y el
  título del proyecto como pie de foto debajo.
- Cierre con: clic en el overlay, botón `×` de 44x44px en la esquina superior derecha, y
  tecla `Escape`.
- Bloquear el scroll del body mientras está abierto (`overflow:hidden` en `<body>`),
  y restaurarlo al cerrar.
- Accesibilidad: el contenedor clicable debe tener `role="button"`, `tabindex="0"`,
  `aria-label` descriptivo, y responder también a Enter y Espacio.
- **Prohibido usar `alert()`, `confirm()` o `prompt()`.**
- Crear un único elemento lightbox reutilizable (no uno por tarjeta).

---

## 5. Tags reales por proyecto (`js/carousels.js`)

Hoy los 15 proyectos comparten los MISMOS 9 tags, ocupando 3 renglones por tarjeta y sin
comunicar nada. Reemplazar el array `tags` de cada proyecto por **exactamente** estos
valores (máximo 4 por proyecto). No añadir, quitar ni reordenar:

| id | title | tags |
|----|-------|------|
| 1 | Sky T | `['Spring Boot', 'MySQL', 'Thymeleaf', 'Docker']` |
| 2 | Master Bread | `['Java', 'Spring Boot', 'MySQL', 'Thymeleaf']` |
| 3 | Orbital | `['Spring Boot', 'Spring Security', 'MySQL', 'Docker']` |
| 4 | Orbital Industrial | `['Spring Boot', 'MySQL', 'QR', 'Thymeleaf']` |
| 5 | Mr Deleite | `['Spring Boot', 'MySQL', 'Thymeleaf', 'JavaScript']` |
| 6 | Seven+ | `['Python', 'LLM', 'Automatización', 'Spring Boot']` |
| 7 | Chat Bot IA | `['Python', 'LLM', 'NLP', 'API REST']` |
| 8 | SkyGPS | `['Spring Boot', 'IoT', 'GPS', 'MySQL']` |
| 9 | Seguridad Ares | `['Spring Boot', 'GPS', 'Geofencing', 'MySQL']` |
| 10 | CRM Sky | `['Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf']` |
| 11 | Escuela Educativa | `['Spring Boot', 'Python', 'Chatbot', 'MySQL']` |
| 12 | Plataforma Inglés | `['Spring Boot', 'IA', 'MySQL', 'JavaScript']` |
| 13 | Thalipuchi E-commerce | `['Spring Boot', 'E-commerce', 'API REST', 'MySQL']` |
| 14 | FriendlyEN | `['Spring Boot', 'Thymeleaf', 'JavaScript', 'MySQL']` |
| 15 | OptiLogix | `['Spring Boot', 'MySQL', 'Optimización', 'Docker']` |

También: los proyectos **id 13 y id 14 tienen `category: ''`**, lo que renderiza un badge
vacío sobre la imagen. Poner `category: 'E-commerce'` en id 13 y `category: 'EdTech'` en id 14.

### Estilo de los tags (`main.css`)
Dejar de usar píldoras grises sólidas. `.project-tag`:

    background: var(--primary-soft);
    color: var(--primary-text);
    border: 1px solid var(--primary-border);
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0.2rem 0.55rem;
    border-radius: 6px;

(Los tokens `--primary-soft`, `--primary-text` y `--primary-border` se definen en la sección 8.)

---

## 6. Quitar los emojis de los títulos de proyecto

`.project-title` renderiza un `<span>` con `project.emoji` antes del título. Los emojis
bajan el registro visual. **Eliminar ese `<span>` del template** en `js/carousels.js`
(tanto en la tarjeta de la grilla como en la del carrusel, si el template está duplicado).
Dejar el campo `emoji` en los datos; simplemente no renderizarlo.

---

## 7. Sección "Tecnologías" — eliminar el vacío y los iconos falsos

### Problemas
1. `padding: 8rem 0` más una sola fila de marquee deja unos 500px de espacio muerto.
2. Varios SVG del array `techs` en `initTechMarquee()` son **paths genéricos o incorrectos**:
   `C# / .NET`, `PostgreSQL / MongoDB`, `Claude / OpenAI`, `React / Angular / Vue` y
   `AWS / Docker` son círculos o triángulos sin relación con la marca.
3. Declara tecnologías (**C# / .NET, AWS, PostgreSQL / MongoDB, React / Angular / Vue**)
   que **no aparecen en la sección Habilidades**. Es una incoherencia que un reclutador nota.

### Solución
Reemplazar el array `techs` para que sea **coherente con la sección Habilidades**, con
exactamente estas 10 entradas, en este orden y con este texto literal:

`Java / Spring Boot`, `Python`, `JavaScript / TypeScript`, `MySQL`, `Docker`, `Git`,
`Rust`, `Svelte / Tauri`, `Astro`, `LLMs (Claude / GPT)`

Para los iconos: SVG simples, geométricos y **coherentes entre sí** — mismo peso de trazo,
`viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.5"`.
No intentar replicar logotipos de marca. Si no hay un icono claro para una entrada, usar
un glifo neutro consistente con el resto del set.

Reducir el vacío: `.technologies { padding: 5rem 0; }` y `.tech-marquee { padding: 1rem 0; }`.
Conservar las reducciones ya existentes en los `@media` de 768px y 480px.

---

## 8. Refinamiento visual — dejar de usar gradiente en todo

El sitio aplica el mismo gradiente `--primary` → `--secondary` a badges, botones, títulos,
iconos, bordes, tags y píldoras. Cuando todo grita, nada destaca: es lo que hace que se
lea como plantilla.

**Se CONSERVA el color de marca (indigo/violeta). No cambiar `--primary` ni `--secondary`.**

### 8.1 Tokens nuevos

    :root {
      --primary-soft:   rgba(99, 102, 241, 0.12);
      --primary-border: rgba(99, 102, 241, 0.28);
    }
    [data-theme="light"] { --primary-text: #4338ca; --primary-soft: rgba(99, 102, 241, 0.10); }
    [data-theme="dark"]  { --primary-text: #a5b4fc; }

### 8.2 Dónde SÍ se mantiene el gradiente (sólo estos tres)
- `.btn-primary` (el CTA principal del hero)
- `.hero-image-border` (el anillo animado de la foto)
- `.section-badge`

### 8.3 Dónde se REEMPLAZA por plano o tinte suave
- `.hero-tag` → `background: var(--primary-soft); color: var(--primary-text); border: 1px solid var(--primary-border);`
  (chip sutil en vez de píldora morada sólida)
- `.project-badge` → `background: rgba(15,23,42,0.72); backdrop-filter: blur(8px); color: #fff; border: 1px solid rgba(255,255,255,0.14);`
  Mantener `.project-badge.beta` con el gradiente ámbar actual.
- `.project-btn-primary` → `background: var(--primary);` plano
- `.contact-link-icon` y `.stat-icon` → `background: var(--primary-soft); border: 1px solid var(--primary-border);`
  y el `svg` interno en `color: var(--primary-text)`
- `.nav-link::after` → `background: var(--primary)` plano
- `.section-title` → **quitar** el `background-clip:text` con gradiente y usar
  `color: var(--text-primary)` plano. El gradiente hacia el texto secundario lo hace ver desvaído.
  Eliminar también `-webkit-text-fill-color: transparent`.

### 8.4 Niveles de habilidad con jerarquía

Hoy `Avanzado`, `Intermedio` y `En aprendizaje` usan el mismo morado, así que no hay
jerarquía visual. En `index.html`, añadir a cada `<span class="skill-level">` una clase
modificadora según su nivel: `skill-level--avanzado`, `skill-level--intermedio` o
`skill-level--aprendiendo`. Estilar en `main.css`:

- `.skill-level--avanzado`: `background: var(--primary); color: #fff;` (sólido)
- `.skill-level--intermedio`: `background: var(--primary-soft); color: var(--primary-text); border: 1px solid var(--primary-border);`
- `.skill-level--aprendiendo`: `background: transparent; color: var(--text-tertiary); border: 1px dashed var(--card-border);`

Mantener los atributos `data-i18n` existentes intactos.

---

## 9. Coherencia de datos y textos

### 9.1 Número de proyectos
El array `projectsData` tiene **15 proyectos**, pero el texto dice "más de 12 proyectos" y
el contador `data-target` del stat "Proyectos" es `12`. Unificar en **15**:
- En `index.html`, el `.stat-number` de "Proyectos" pasa a `data-target="15"`.
- En `index.html` y en **ambos idiomas** de `js/utils.js` (clave `sobreMiParrafo1`):
  "más de 12 proyectos completos" → "más de 15 proyectos completos", y
  "more than 12 complete projects" → "more than 15 complete projects".
- El stat "Clientes" (`data-target="12"`) se deja como está.

### 9.2 Subtítulo en inglés dentro de la página en español
En la sección "Sobre Mí", `<p class="section-subtitle">Passionate about creating impactful
solutions</p>` no tiene `data-i18n` y queda en inglés con la página en español.
Añadirle `data-i18n="sobreMiSubtitulo"` y agregar la clave en `js/utils.js`:
- `es`: `'Apasionado por crear soluciones con impacto real'`
- `en`: `'Passionate about creating impactful solutions'`

### 9.3 Email del enlace de contacto
El primer `.contact-link` apunta a `mailto:jorge@email.com` (placeholder) mientras el texto
visible dice `moralesnovajorgedejesus@gmail.com`. Corregir el `href` a
`mailto:moralesnovajorgedejesus@gmail.com`.

---

## 10. Accesibilidad y movimiento

### 10.1 `prefers-reduced-motion`
Hay partículas, marquee infinito, cursor custom, anillos rotando, tilt 3D y efecto de
tipeo, todos simultáneos. Añadir al final de `css/animations.css`:

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      .reveal, .reveal-left, .reveal-right { opacity: 1 !important; transform: none !important; }
      .hero-particles, .cursor, .cursor-follower { display: none !important; }
    }

Y en `js/main.js`, no ejecutar `initParticles()` ni `Utils.initTiltEffect()` cuando
`window.matchMedia('(prefers-reduced-motion: reduce)').matches` sea verdadero.

### 10.2 Foco visible
Hoy no existe ningún estilo de foco. Añadir en `main.css`:

    :focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; border-radius: 4px; }

---

## 11. Ritmo vertical

Todas las secciones usan `padding: 8rem 0`, sin jerarquía. Unificar a `6rem 0` en
`.about`, `.projects`, `.technologies` y `.contact` para desktop. Conservar tal cual las
reducciones ya existentes de `@media (max-width: 768px)` (5rem) y `(max-width: 480px)` (3.5rem).

---

## 12. Fuera de alcance (NO hacer)

- No convertir imágenes a WebP ni renombrar archivos de `assets/`.
- No hacer `git commit` ni `git push` — el usuario se encarga.
- No añadir dependencias, frameworks, build steps ni CDNs. El sitio es HTML/CSS/JS plano.
- No reescribir archivos completos si basta con editar las reglas afectadas.
- No cambiar el número de WhatsApp, el endpoint de Formspree ni los enlaces sociales.
- No modificar el texto "9no semestre" / "9th semester" (ya está actualizado y es correcto).
