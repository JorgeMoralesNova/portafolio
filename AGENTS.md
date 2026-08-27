# AGENTS.md — instrucciones para el agente de código

## Qué es este proyecto

Portafolio personal estático de Jorge de Jesús Morales Nova.
**HTML + CSS + JavaScript plano, sin build step, sin frameworks, sin npm.**
Se despliega en Netlify sirviendo los archivos tal cual.

Estructura:

    index.html
    css/main.css          (~1990 líneas, estilos principales)
    css/animations.css    (~408 líneas, keyframes y utilidades de animación)
    js/utils.js           (tema, i18n ES/EN, cursor, scroll reveal, navbar, helpers)
    js/carousels.js       (datos de proyectos, grilla, carrusel, marquee de tecnologías, contadores)
    js/main.js            (bootstrap de la app, typing effect, partículas, formulario)
    assets/images/        (capturas de proyectos y foto de perfil)

## Tu tarea

Lee **`docs/mejoras-diseno.md`** completo antes de escribir una sola línea.
Ese documento es un **contrato**: contiene el análisis de diseño ya hecho y la solución
exacta para cada punto, decidida por el diseñador. Impleméntalo fielmente.

## Reglas — obligatorias

1. **No tomes decisiones de diseño propias.** Colores, tamaños, textos, tags, iconos y
   estructura están especificados. Si algo no está especificado, **déjalo como está**.
   No "mejores" nada por iniciativa propia.

2. **No inventes contenido.** No inventes tecnologías, descripciones de proyectos,
   nombres, cifras ni textos de marketing. Todo el contenido nuevo está literal en la spec.

3. **No rompas el responsive.** Es un requisito explícito del usuario. Hay breakpoints en
   968px, 768px y 480px. Consérvalos todos. Nada puede causar scroll horizontal entre
   320px y 1920px. Revisa la sección "REQUISITO TRANSVERSAL" de la spec.

4. **Edita quirúrgicamente.** No reescribas archivos completos si basta con modificar las
   reglas o funciones afectadas. Conserva el estilo de código existente (2 espacios de
   indentación, comillas simples en JS, sin punto y coma faltantes).

5. **No añadas dependencias.** Nada de npm, CDN, frameworks, preprocesadores ni build steps.
   Sólo HTML/CSS/JS plano. La única excepción ya existente son las Google Fonts del `<head>`.

6. **No uses `alert()`, `confirm()` ni `prompt()`** en ningún caso.

7. **No hagas `git commit` ni `git push`.** El usuario se encarga de eso.

8. **No toques** `assets/`, `manifest.json`, `netlify.toml`, `robots.txt` ni `README.md`.

9. **Preserva todos los atributos `data-i18n`** existentes en el HTML. El sistema de
   traducción ES/EN depende de ellos. Si mueves un elemento, se mueve con su `data-i18n`.

10. **Preserva los atributos `onerror`** de las imágenes de proyecto (fallback SVG).

## Cómo verificar tu trabajo

No hay tests. Antes de dar la tarea por terminada:

- Comprueba que `index.html` sigue siendo HTML válido y bien anidado.
- Comprueba que los tres archivos JS no tienen errores de sintaxis
  (`node --check js/utils.js && node --check js/carousels.js && node --check js/main.js`).
- Repasa la spec punto por punto (secciones 1 a 11) y confirma que cada uno está hecho.
- Revisa que no quedaron reglas CSS duplicadas o contradictorias con las que ya existían.
