// Sistema de idioma ES/EN.
// - Elementos con data-i18n="clave"       → textContent
// - Elementos con data-i18n-attr="attr:clave[,attr:clave]" → atributos
// - Textos bilingües en datos: { es, en } → tx(obj)
// Al cambiar de idioma se emite el evento `langchange` en document.

const DICT = {
  es: {
    skip: 'Saltar al contenido',
    'nav.work': 'Trabajo',
    'nav.path': 'Trayectoria',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'a11y.lang': 'Cambiar a inglés',
    'a11y.theme': 'Cambiar tema claro u oscuro',
    'a11y.menu': 'Abrir menú',
    'a11y.copy': 'Copiar correo',
    'a11y.close': 'Cerrar',
    'a11y.prev': 'Imagen anterior',
    'a11y.next': 'Imagen siguiente',
    'a11y.filters': 'Filtrar proyectos por sector',
    'cta.cv': 'Descargar CV',
    'cta.cvShort': 'CV',
    'cta.work': 'Ver mi trabajo',

    'hero.hello': 'Hola, soy Jorge',
    'hero.status': 'Abierto a oportunidades laborales',
    'hero.role': 'Desarrollador backend Java · Cofundador de Skyonetec',
    'hero.lead': 'Construyo software de gestión, rastreo GPS y automatización con IA que empresas reales usan todos los días. Lidero el desarrollo en Skyonetec y busco sumarme a un equipo como desarrollador backend Java.',

    'sys.title': 'arquitectura.típica',
    'sys.clientK': 'clientes',
    'sys.client': 'Web · Android · Escritorio',
    'sys.dbK': 'datos',
    'sys.docsK': 'salidas',
    'sys.hint': 'Pasa el cursor o toca un nodo para ver qué proyectos lo usan.',
    'sys.uses': 'lo usan',
    'sys.projects': 'proyectos',

    'proof.systems': 'sistemas diseñados y construidos',
    'proof.prod': 'primeros sistemas en producción',
    'proof.java': 'empecé a programar en Java',
    'proof.semN': '9.º',
    'proof.sem': 'semestre de Ingeniería de Sistemas',

    'work.kicker': 'Trabajo seleccionado',
    'work.title': 'Sistemas que diseñé y construí de punta a punta',
    'work.lead': 'Cada proyecto: el problema, lo que construí, cómo está armado y qué cambió. El código es privado de los clientes; las demos, bajo solicitud.',
    'case.challenge': 'El reto',
    'case.built': 'Lo que construí',
    'case.results': 'Qué cambió',
    'case.flow': 'Cómo está armado',
    'case.role': 'Rol: arquitectura y desarrollo completo',
    'case.live': 'Ver en vivo',
    'case.demo': 'Solicitar demo',
    'case.private': 'Código privado',
    'case.zoom': 'Ampliar captura',
    'case.demoMsg': 'Hola Jorge, vi tu portafolio y me gustaría ver una demo de {name}.',

    'arch.kicker': 'Más proyectos',
    'arch.title': 'Archivo',
    'arch.lead': 'Otros doce sistemas que construí, del ERP a la tienda en línea.',
    'arch.all': 'Todos',
    'arch.open': 'Ver captura',

    'path.kicker': 'Trayectoria',
    'path.title': 'De la curiosidad a sistemas en producción',
    'path.t1': 'Primeras líneas en C++',
    'path.d1': 'Aprendí lo básico por curiosidad: variables, ciclos y mis primeros programas de consola.',
    'path.t2': 'Java, por mi cuenta',
    'path.d2': 'En la pandemia, con 15 años, aprendí Java de forma autodidacta y luego Spring Boot. Ahí empezó todo.',
    'path.y3': 'Mayo 2024',
    'path.t3': 'Soporte de ERP en Matrix SQL',
    'path.d3': 'De mayo a agosto atendí usuarios e incidencias de un ERP empresarial. Conocí de cerca cómo se usa el software en contabilidad, inventario y ventas, y decidí enfocarme en construirlo.',
    'path.t4': 'Cofundo Skyonetec',
    'path.d4': 'Como Líder de desarrollo diseño y construyo toda la línea de productos: web con Spring Boot, apps Android, escritorio en .NET e integraciones con IA.',
    'path.now': 'Hoy',
    'path.t5': '18 sistemas y 9.º semestre',
    'path.d5': 'Termino Ingeniería de Sistemas en la Universidad de la Costa (CUC) y busco crecer dentro de un equipo de desarrollo.',

    'stack.title': 'Herramientas, con evidencia',
    'stack.lead': 'En lugar de porcentajes, cuántos de mis proyectos usan cada tecnología. Pasa el cursor para verlos.',
    'stack.backend': 'Backend',
    'stack.data': 'Datos',
    'stack.mobile': 'Móvil y escritorio',
    'stack.ai': 'IA',
    'stack.docs': 'Documentos',
    'stack.devops': 'DevOps',
    'stack.front': 'Frontend',
    'stack.learning': 'Explorando',
    'stack.inN': 'en {n} proyectos',
    'stack.in1': 'en 1 proyecto',
    'stack.daily': 'uso diario',
    'stack.learningNote': 'aprendiendo',

    'ai.kicker': 'Cómo trabajo con IA',
    'ai.title': 'Yo diseño y reviso. La IA acelera.',
    'ai.lead': 'Escribo especificaciones que funcionan como contrato, delego la escritura repetitiva a agentes de código y reviso cada cambio antes de desplegarlo.',
    'ai.c1t': 'Diseño primero',
    'ai.c1d': 'Entidades, reglas de negocio y criterios de aceptación quedan escritos antes de la primera línea de código.',
    'ai.c2t': 'IA dentro del producto',
    'ai.c2d': 'Chatbots conectados a plataformas, transcripción y resúmenes automáticos: Seven+, Chat Bot IA y SkyMeet.',
    'ai.c3t': 'MCP y agentes',
    'ai.c3d': 'Conecto modelos de lenguaje con herramientas y datos mediante Model Context Protocol, y uso agentes de código en mi flujo diario.',

    'about.title': 'Me gusta entender el negocio antes de escribir código',
    'about.p1': 'Soy de Barranquilla. Empecé a programar por curiosidad y en la pandemia aprendí Java por mi cuenta. Desde 2024 construyo con Skyonetec sistemas que usan empresas reales, mientras termino Ingeniería de Sistemas en la CUC.',
    'about.p2': 'Pasar por el soporte de un ERP me enseñó cómo se usa de verdad el software en el día a día de una empresa. Skyonetec es mi proyecto propio y lo sigo compaginando; ahora quiero además crecer dentro de un equipo: revisión de código, buenas prácticas y retos más grandes.',
    'about.quote': 'La tecnología debe simplificar la vida real. Por eso automatizo lo repetitivo, para que las personas se enfoquen en lo que importa.',
    'about.f1k': 'Idiomas',
    'about.f1v': 'Español nativo · Inglés A2, en progreso',
    'about.f2k': 'Estudio',
    'about.f2v': 'Ingeniería de Sistemas · CUC · 9.º semestre',
    'about.f3k': 'Aprendiendo',

    'contact.title': '¿Hablamos?',
    'contact.lead': 'Estoy abierto a ofertas de empleo como desarrollador backend Java, en Barranquilla o remoto. También respondo propuestas de proyectos.',
    'contact.copied': 'Correo copiado',
    'form.name': 'Nombre',
    'form.email': 'Correo',
    'form.type': 'Motivo',
    'form.t1': 'Oferta de empleo',
    'form.t2': 'Proyecto',
    'form.t3': 'Otro',
    'form.msg': 'Mensaje',
    'form.send': 'Enviar mensaje',
    'form.sending': 'Enviando…',
    'form.ok': 'Gracias, recibí tu mensaje. Te respondo pronto.',
    'form.err': 'No se pudo enviar. Escríbeme directo a moralesnovajorgedejesus@gmail.com.',
    'form.invalid': 'Revisa los campos marcados.',

    'footer.made': 'Hecho a mano con HTML, CSS y JavaScript, sin frameworks.',
  },

  en: {
    skip: 'Skip to content',
    'nav.work': 'Work',
    'nav.path': 'Journey',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'a11y.lang': 'Switch to Spanish',
    'a11y.theme': 'Toggle light or dark theme',
    'a11y.menu': 'Open menu',
    'a11y.copy': 'Copy email',
    'a11y.close': 'Close',
    'a11y.prev': 'Previous image',
    'a11y.next': 'Next image',
    'a11y.filters': 'Filter projects by sector',
    'cta.cv': 'Download resume',
    'cta.cvShort': 'Resume',
    'cta.work': 'See my work',

    'hero.hello': 'Hi, I\'m Jorge',
    'hero.status': 'Open to job opportunities',
    'hero.role': 'Java backend developer · Co-founder of Skyonetec',
    'hero.lead': 'I build management software, GPS tracking and AI automation that real companies use every day. I lead development at Skyonetec and I\'m looking to join a team as a Java backend developer.',

    'sys.title': 'typical.architecture',
    'sys.clientK': 'clients',
    'sys.client': 'Web · Android · Desktop',
    'sys.dbK': 'data',
    'sys.docsK': 'outputs',
    'sys.hint': 'Hover or tap a node to see which projects use it.',
    'sys.uses': 'use it',
    'sys.projects': 'projects',

    'proof.systems': 'systems designed and built',
    'proof.prod': 'first systems in production',
    'proof.java': 'started coding in Java',
    'proof.semN': '9th',
    'proof.sem': 'semester of Systems Engineering',

    'work.kicker': 'Selected work',
    'work.title': 'Systems I designed and built end to end',
    'work.lead': 'Each project: the problem, what I built, how it\'s wired and what changed. Client code is private; demos on request.',
    'case.challenge': 'The challenge',
    'case.built': 'What I built',
    'case.results': 'What changed',
    'case.flow': 'How it\'s wired',
    'case.role': 'Role: architecture and full development',
    'case.live': 'See it live',
    'case.demo': 'Request a demo',
    'case.private': 'Private code',
    'case.zoom': 'Enlarge screenshot',
    'case.demoMsg': 'Hi Jorge, I saw your portfolio and I\'d like to see a demo of {name}.',

    'arch.kicker': 'More projects',
    'arch.title': 'Archive',
    'arch.lead': 'Twelve more systems I built, from ERP to online store.',
    'arch.all': 'All',
    'arch.open': 'View screenshot',

    'path.kicker': 'Journey',
    'path.title': 'From curiosity to production systems',
    'path.t1': 'First lines of C++',
    'path.d1': 'I learned the basics out of curiosity: variables, loops and my first console programs.',
    'path.t2': 'Java, self-taught',
    'path.d2': 'During the pandemic, at 15, I taught myself Java and then Spring Boot. That\'s where it all started.',
    'path.y3': 'May 2024',
    'path.t3': 'ERP support at Matrix SQL',
    'path.d3': 'From May to August I handled users and incidents for a business ERP. I saw up close how software is used in accounting, inventory and sales, and decided to focus on building it.',
    'path.t4': 'Co-founding Skyonetec',
    'path.d4': 'As Lead Developer I design and build the whole product line: Spring Boot web apps, Android apps, .NET desktop apps and AI integrations.',
    'path.now': 'Now',
    'path.t5': '18 systems and 9th semester',
    'path.d5': 'I\'m finishing Systems Engineering at Universidad de la Costa (CUC) and want to grow inside a development team.',

    'stack.title': 'Tools, with evidence',
    'stack.lead': 'Instead of percentages, how many of my projects use each technology. Hover to see them.',
    'stack.backend': 'Backend',
    'stack.data': 'Data',
    'stack.mobile': 'Mobile & desktop',
    'stack.ai': 'AI',
    'stack.docs': 'Documents',
    'stack.devops': 'DevOps',
    'stack.front': 'Frontend',
    'stack.learning': 'Exploring',
    'stack.inN': 'in {n} projects',
    'stack.in1': 'in 1 project',
    'stack.daily': 'daily use',
    'stack.learningNote': 'learning',

    'ai.kicker': 'How I work with AI',
    'ai.title': 'I design and review. AI speeds it up.',
    'ai.lead': 'I write specs that act as a contract, hand repetitive writing to coding agents and review every change before deploying it.',
    'ai.c1t': 'Design first',
    'ai.c1d': 'Entities, business rules and acceptance criteria are written down before the first line of code.',
    'ai.c2t': 'AI inside the product',
    'ai.c2d': 'Chatbots connected to platforms, automatic transcription and summaries: Seven+, Chat Bot IA and SkyMeet.',
    'ai.c3t': 'MCP and agents',
    'ai.c3d': 'I connect language models to tools and data through the Model Context Protocol, and use coding agents in my daily workflow.',

    'about.title': 'I like to understand the business before writing code',
    'about.p1': 'I\'m from Barranquilla, Colombia. I started coding out of curiosity and taught myself Java during the pandemic. Since 2024 I\'ve been building systems that real companies use with Skyonetec, while finishing Systems Engineering at CUC.',
    'about.p2': 'Working in ERP support taught me how software is really used in a company\'s day-to-day. Skyonetec is my own venture and I keep running it alongside; now I also want to grow inside a team: code reviews, good practices and bigger challenges.',
    'about.quote': 'Technology should make real life simpler. That\'s why I automate the repetitive, so people can focus on what matters.',
    'about.f1k': 'Languages',
    'about.f1v': 'Spanish (native) · English A2, improving',
    'about.f2k': 'Studies',
    'about.f2v': 'Systems Engineering · CUC · 9th semester',
    'about.f3k': 'Learning',

    'contact.title': 'Let\'s talk',
    'contact.lead': 'I\'m open to job offers as a Java backend developer, in Barranquilla or remote. I also reply to project proposals.',
    'contact.copied': 'Email copied',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.type': 'Reason',
    'form.t1': 'Job offer',
    'form.t2': 'Project',
    'form.t3': 'Other',
    'form.msg': 'Message',
    'form.send': 'Send message',
    'form.sending': 'Sending…',
    'form.ok': 'Thanks, I got your message. I\'ll reply soon.',
    'form.err': 'It couldn\'t be sent. Email me directly at moralesnovajorgedejesus@gmail.com.',
    'form.invalid': 'Please check the highlighted fields.',

    'footer.made': 'Handmade with HTML, CSS and JavaScript, no frameworks.',
  },
};

const CV = {
  es: { href: 'cv/CV-Jorge-Morales-Nova.pdf', name: 'CV-Jorge-Morales-Nova.pdf' },
  en: { href: 'cv/Resume-Jorge-Morales-Nova.pdf', name: 'Resume-Jorge-Morales-Nova.pdf' },
};

export const getLang = () => (document.documentElement.lang === 'en' ? 'en' : 'es');

export const t = (key, vars) => {
  const lang = getLang();
  let s = DICT[lang][key] ?? DICT.es[key] ?? key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
};

// Texto bilingüe de los datos: acepta string u objeto { es, en }.
export const tx = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[getLang()] ?? v.es : v);

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      el.setAttribute(attr, t(key));
    });
  });
  const cv = CV[getLang()];
  document.querySelectorAll('[data-cv]').forEach((a) => {
    a.setAttribute('href', cv.href);
    a.setAttribute('download', cv.name);
  });
}

export function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem('jm-lang', lang); } catch (e) { /* sin almacenamiento */ }
  applyI18n();
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
