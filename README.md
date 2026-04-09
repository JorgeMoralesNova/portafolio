# Portfolio Jorge - Ingeniero de Software & Protocolos

Portfolio personal dinámico y responsive, listo para desplegar en Netlify.

## 🚀 Despliegue en Netlify

### Método 1: Drag & Drop
1. Ve a [Netlify Drop](https://app.netlify.com/drop)
2. Arrastra la carpeta `portfolio-jorge` completa
3. ¡Listo! Tu sitio estará disponible al instante

### Método 2: Git + Netlify
1. Sube este proyecto a un repositorio Git (GitHub, GitLab, Bitbucket)
2. Conecta el repositorio en [Netlify](https://app.netlify.com)
3. Netlify detectará automáticamente `netlify.toml`
4. Deploy automático en cada push

### Método 3: CLI de Netlify
```bash
npm install -g netlify-cli
cd portfolio-jorge
netlify deploy --prod
```

## 📁 Estructura del Proyecto

```
portfolio-jorge/
├── index.html              # Página principal
├── css/
│   ├── main.css           # Estilos principales
│   └── animations.css     # Animaciones y efectos
├── js/
│   ├── main.js            # Lógica principal
│   ├── carousels.js       # Carruseles interactivos
│   └── utils.js           # Utilidades
├── assets/
│   ├── images/            # Imágenes de proyectos y recursos
│   └── icons/             # Iconos personalizados
├── netlify.toml           # Configuración de Netlify
├── manifest.json          # PWA manifest
├── robots.txt             # SEO
└── README.md              # Este archivo
```

## 🖼️ Reemplazar Imágenes

### Imágenes de Proyectos
Coloca tus imágenes en `assets/images/` con los siguientes nombres:

| Proyecto | Nombre de archivo |
|----------|-------------------|
| Sky T | `skyt.webp` |
| Master Bread | `masterbread.webp` |
| Orbital | `orbital.webp` |
| Orbital Industrial | `orbital-ind.webp` |
| Mr Deleite | `mrdeleite.webp` |
| Seven+ | `sevenplus.webp` |
| Chat Bot Integrado | `chatbot.webp` |
| SkyGPS | `skyps.webp` |
| Seguridad Ares | `seguridadares.webp` |
| Escuela Educativa | `escuela.webp` |
| Escuela Educativa Inglés | `escuela-ingles.webp` |
| CRM Sky | `crm-sky.webp` |

### Imagen Hero/Foto Personal
Reemplaza `assets/images/hero-bg.webp` con tu foto.

### Logo
Reemplaza `assets/images/logo.svg` con tu logo.

### Formatos Recomendados
- **Proyectos**: WebP, 800x600px, < 200KB
- **Hero**: WebP, 1920x1080px, < 500KB
- **Logo**: SVG o PNG con transparencia

## ⚙️ Personalización

### Cambiar Información Personal
Edita las secciones en `index.html`:
- **Línea ~60**: Título del hero y typing effect
- **Línea ~75**: Descripción del hero
- **Línea ~130-180**: Sección "Sobre mí"
- **Línea ~350+**: Proyectos (datos en JavaScript)
- **Línea ~500+**: Información de contacto

### Modificar Colores
En `css/main.css`, variables CSS en `:root`:
```css
:root {
  --primary: #6366f1;      /* Color principal */
  --secondary: #8b5cf6;    /* Color secundario */
  --accent: #10b981;       /* Color de acento */
  --bg-dark: #0f172a;      /* Fondo oscuro */
  --bg-light: #f8fafc;     /* Fondo claro */
}
```

### Cambiar Tecnologías en Carrusel
En `js/carousels.js`, función `initTechMarquee()`.

### Ajustar Velocidad de Animaciones
En `css/animations.css`:
- `--typing-speed`: Velocidad del efecto typing
- `--marquee-speed`: Velocidad del carrusel infinito
- `--reveal-duration`: Duración de animaciones de aparición

## 🔧 Funcionalidades

- [x] Diseño mobile-first responsive
- [x] Tema claro/oscuro con toggle
- [x] Efecto typing en hero
- [x] Partículas animadas
- [x] Carrusel de proyectos (swipe + flechas)
- [x] Carrusel infinito de tecnologías
- [x] Tarjetas 3D con tilt effect
- [x] Scroll reveal progresivo
- [x] Formulario de contacto Netlify Forms
- [x] Validación JavaScript
- [x] PWA básico (manifest + service worker listo)
- [x] SEO básico (meta tags, Open Graph)
- [x] Accesibilidad WCAG 2.1 AA
- [x] Cursor personalizado (desktop)
- [x] Smooth scroll
- [x] Lazy loading en imágenes
- [x] Glassmorphism en navbar

## 🌐 Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

## 📝 Licencia

MIT License - Libre para uso personal y comercial.

---

¿Preguntas? Abre un issue en el repositorio o contacta directamente.
