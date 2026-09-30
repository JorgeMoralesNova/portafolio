# Portafolio · Jorge de Jesús Morales Nova

Desarrollador backend Java · Cofundador y Líder de desarrollo en Skyonetec.

En vivo: https://jorgemoralesnova.github.io/portafolio/

HTML, CSS y JavaScript con módulos ES, sin frameworks ni build. Se publica con GitHub Pages
desde la rama `master`.

## Estructura

```
index.html
css/styles.css            sistema de diseño completo (tema oscuro y claro)
js/main.js                arranque; cada módulo se inicia aislado
js/i18n.js                textos ES / EN
js/data/projects.js       los 18 proyectos (fuente única)
js/modules/               hero (diagrama vivo), cases, archive, stack, lightbox, contact, terminal
assets/projects/<id>/     capturas WebP 800 / 1600
assets/me/                retrato
cv/                       CV en PDF (ES y EN); fuentes en cv/src
```

## Tareas comunes

- **Añadir o editar un proyecto:** `js/data/projects.js`. Con `featured: true` sale como caso
  de estudio; si no, va al archivo.
- **Cambiar un texto:** `js/i18n.js` (las dos lenguas) y el texto por defecto en `index.html`.
- **Regenerar el CV:** editar `cv/src/cv-es.html` y `cv/src/cv-en.html`, luego
  `sh cv/src/build.sh` (usa Microsoft Edge en modo headless).
- **Probar en local:** `py -m http.server 8766` y abrir http://127.0.0.1:8766/
