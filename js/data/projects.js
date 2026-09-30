// Fuente única de proyectos del portafolio.
// Stacks verificados contra los pom.xml / .csproj de cada proyecto (C:\Users\Janus\Desktop\Proyectos).
// Textos bilingües: { es, en }. SkyGuard se presenta sin cliente ni ciudad.

export const WHATSAPP = '573105148847';
export const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const SECTORS = [
  { id: 'gestion', label: { es: 'Gestión y ERP', en: 'Management & ERP' } },
  { id: 'logistica', label: { es: 'Logística y flota', en: 'Logistics & fleet' } },
  { id: 'iot', label: { es: 'IoT y GPS', en: 'IoT & GPS' } },
  { id: 'ia', label: { es: 'IA y automatización', en: 'AI & automation' } },
  { id: 'edtech', label: { es: 'EdTech', en: 'EdTech' } },
  { id: 'ecommerce', label: { es: 'E-commerce', en: 'E-commerce' } },
  { id: 'seguridad', label: { es: 'Seguridad', en: 'Safety & security' } },
];

const WEB = ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'MySQL'];

const img = (id, name, alt, big = true) => ({
  src: `assets/projects/${id}/${name}-800.webp`,
  srcset: big ? `assets/projects/${id}/${name}-800.webp 800w, assets/projects/${id}/${name}-1600.webp 1600w` : null,
  full: big ? `assets/projects/${id}/${name}-1600.webp` : `assets/projects/${id}/${name}-800.webp`,
  alt,
});

export const PROJECTS = [
  {
    id: 'skyguard',
    name: 'SkyGuard',
    featured: true,
    accent: '#F59E0B',
    sectors: ['seguridad', 'gestion', 'logistica'],
    kind: { es: 'Plataforma web · Gestión de emergencias', en: 'Web platform · Emergency management' },
    tagline: { es: 'Plataforma integral para un cuerpo de bomberos', en: 'All-in-one platform for a fire department' },
    summary: {
      es: 'Inspecciones, certificados verificables, emergencias, flota y tableros gerenciales en una sola plataforma.',
      en: 'Inspections, verifiable certificates, emergencies, fleet and executive dashboards in a single platform.',
    },
    challenge: {
      es: 'Las inspecciones, emergencias y vehículos se llevaban en hojas de cálculo y papel: sin trazabilidad, sin indicadores y con certificados fáciles de falsificar.',
      en: 'Inspections, emergencies and vehicles lived in spreadsheets and paper: no traceability, no metrics and certificates that were easy to forge.',
    },
    built: {
      es: [
        'Inspecciones con checklist Cumple / No cumple / N/A por sección',
        'Certificados PDF con código QR y verificación pública de autenticidad',
        'Registro de emergencias con tiempos de despacho, respuesta y control',
        'Flota: disponibilidad, SOAT, tecnomecánica y personal habilitado',
        'Tableros de operación, gerencial y mapa de riesgo',
      ],
      en: [
        'Checklist inspections (Pass / Fail / N/A) per section',
        'PDF certificates with QR code and public authenticity check',
        'Emergency log with dispatch, response and control times',
        'Fleet: availability, insurance, inspections and qualified staff',
        'Operations and executive dashboards plus a risk map',
      ],
    },
    results: {
      es: ['Cualquier ciudadano verifica un certificado escaneando el QR', 'Indicadores de respuesta en tiempo real para la dirección', 'Alertas de documentos vencidos de vehículos y personal'],
      en: ['Any citizen can verify a certificate by scanning its QR', 'Real-time response metrics for leadership', 'Alerts for expired vehicle and staff documents'],
    },
    flow: [
      { es: 'Inspector', en: 'Inspector' },
      'Spring Boot + Security',
      'MySQL',
      { es: 'PDF + QR', en: 'PDF + QR' },
      { es: 'Verificación pública', en: 'Public check' },
    ],
    tech: [...WEB, 'Spring AOP', 'OpenHTMLtoPDF', 'iText', 'Apache POI', 'ZXing'],
    images: [
      img('skyguard', 'operacion', 'SkyGuard: tablero de operación'),
      img('skyguard', 'checklist', 'SkyGuard: checklist de inspección'),
      img('skyguard', 'flota', 'SkyGuard: gestión de flota'),
      img('skyguard', 'verificacion', 'SkyGuard: verificación pública de certificado', false),
    ],
  },
  {
    id: 'skygps',
    name: 'SkyGPS',
    featured: true,
    accent: '#EF4444',
    sectors: ['iot', 'logistica'],
    kind: { es: 'Web + IoT · Tiempo real', en: 'Web + IoT · Real time' },
    tagline: { es: 'Rastreo satelital de vehículos en tiempo real', en: 'Real-time satellite vehicle tracking' },
    summary: {
      es: 'Recibe la señal de dispositivos GPS y la convierte en monitoreo, rutas y alertas.',
      en: 'Ingests the signal from GPS devices and turns it into monitoring, routes and alerts.',
    },
    challenge: {
      es: 'Las empresas con vehículos dependían de la plataforma genérica del fabricante, sin reportes propios ni control sobre sus datos.',
      en: 'Companies with vehicles depended on the manufacturer\'s generic platform, with no custom reports and no control over their data.',
    },
    built: {
      es: [
        'Servidor TCP propio (Netty) que recibe las tramas de los dispositivos',
        'Monitoreo en tiempo real con estados por tiempo sin reporte',
        'Historial de rutas y reportes de tracking',
        'Asignación de dispositivos a vehículos, usuarios y licencias',
      ],
      en: [
        'Custom TCP server (Netty) that receives device frames',
        'Real-time monitoring with "no report" status by elapsed time',
        'Route history and tracking reports',
        'Device-to-vehicle assignment, users and licenses',
      ],
    },
    results: {
      es: ['Los datos de ubicación quedan bajo control de la empresa', 'Detección inmediata de equipos que dejaron de reportar', 'Reportes exportables a PDF y Excel'],
      en: ['Location data stays under the company\'s control', 'Instant detection of devices that stopped reporting', 'Reports exportable to PDF and Excel'],
    },
    flow: [
      { es: 'Dispositivo GPS', en: 'GPS device' },
      { es: 'Servidor TCP (Netty)', en: 'TCP server (Netty)' },
      'Spring Boot',
      'MySQL',
      { es: 'Panel en vivo', en: 'Live dashboard' },
    ],
    tech: [...WEB, 'Netty', 'OpenHTMLtoPDF', 'iText', 'Apache POI', 'Docker'],
    images: [img('skygps', 'main', 'SkyGPS: monitoreo de vehículos')],
  },
  {
    id: 'skyscan',
    name: 'SkyScan',
    featured: true,
    accent: '#A78BFA',
    sectors: ['logistica', 'gestion'],
    kind: { es: 'Android + Escritorio', en: 'Android + Desktop' },
    tagline: { es: 'Tu celular, un lector de códigos profesional', en: 'Your phone as a professional barcode scanner' },
    summary: {
      es: 'La app lee códigos con la cámara y los envía al computador, directo a Excel o a cualquier software.',
      en: 'The app reads codes with the camera and sends them to the computer, straight into Excel or any software.',
    },
    challenge: {
      es: 'Una solución heredada en VB.NET exigía Office instalado, se colgaba y no tenía identidad de marca.',
      en: 'A legacy VB.NET solution required Office, kept freezing and had no brand identity.',
    },
    built: {
      es: [
        'App Android reescrita en Jetpack Compose con Material 3',
        'Lectura con CameraX + ML Kit y emparejamiento por QR',
        'Servidor de escritorio multiplataforma (Windows, Linux, Mac)',
        'Exportación a Excel sin Office, tabla en vivo y autoguardado',
      ],
      en: [
        'Android app rewritten in Jetpack Compose with Material 3',
        'Scanning with CameraX + ML Kit and QR pairing',
        'Cross-platform desktop server (Windows, Linux, Mac)',
        'Excel export without Office, live table and autosave',
      ],
    },
    results: {
      es: ['Cero cierres inesperados tras la modernización', 'Funciona sin instalar .NET ni Office en el equipo del cliente', 'Publicada gratis para cualquier negocio'],
      en: ['Zero unexpected crashes after the rewrite', 'Runs without installing .NET or Office on the client machine', 'Published for free for any business'],
    },
    flow: [
      'CameraX + ML Kit',
      'Android (Compose)',
      { es: 'Red local', en: 'Local network' },
      'Servidor .NET 8',
      'Excel',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit', '.NET 8', 'Avalonia'],
    images: [{ src: 'assets/projects/skyscan/feature-1024.webp', srcset: null, full: 'assets/projects/skyscan/feature-1024.webp', alt: 'SkyScan: app Android y servidor de escritorio' }],
    url: 'https://scancode.skyonetec.com/',
  },
  {
    id: 'skymeet',
    name: 'SkyMeet',
    featured: true,
    accent: '#22D3EE',
    sectors: ['ia'],
    kind: { es: 'Escritorio · IA', en: 'Desktop · AI' },
    tagline: { es: 'De la grabación de una reunión a un acta en PDF', en: 'From a meeting recording to PDF minutes' },
    summary: {
      es: 'Importas la grabación de Google Meet y la app transcribe, resume y entrega un PDF listo para compartir.',
      en: 'Import a Google Meet recording and the app transcribes, summarizes and delivers a ready-to-share PDF.',
    },
    challenge: {
      es: 'Las actas se redactaban a mano horas después, y se perdían decisiones y compromisos.',
      en: 'Minutes were written by hand hours later, and decisions and commitments got lost.',
    },
    built: {
      es: [
        'Pipeline automático: audio → transcripción → resumen → PDF',
        'Transcripción por fragmentos con progreso y cancelación',
        'Historial local consultable de todas las reuniones',
        'API key cifrada en el equipo y panel de consumo',
      ],
      en: [
        'Automatic pipeline: audio → transcript → summary → PDF',
        'Chunked transcription with progress and cancel',
        'Searchable local history of every meeting',
        'Encrypted API key on the machine and usage panel',
      ],
    },
    results: {
      es: ['Actas listas en minutos, no en horas', 'Un único ejecutable: no requiere instalar .NET ni ffmpeg', 'Control del costo de uso por reunión'],
      en: ['Minutes ready in minutes, not hours', 'Single executable: no .NET or ffmpeg install needed', 'Cost control per meeting'],
    },
    flow: [
      { es: 'Grabación', en: 'Recording' },
      'ffmpeg',
      { es: 'Transcripción IA', en: 'AI transcript' },
      { es: 'Resumen IA', en: 'AI summary' },
      { es: 'Acta PDF', en: 'PDF minutes' },
    ],
    tech: ['.NET 8', 'WPF', 'OpenAI', 'SQLite', 'NAudio', 'PdfSharp'],
    images: [],
  },
  {
    id: 'seven',
    name: 'Seven+',
    featured: true,
    accent: '#34D399',
    sectors: ['ia', 'gestion'],
    kind: { es: 'Web · Automatización', en: 'Web · Automation' },
    tagline: { es: 'Suite de automatización de oficina con IA', en: 'Office automation suite with AI' },
    summary: {
      es: 'Correos automáticos, seguimiento de tareas, asistente de voz y chatbots con IA.',
      en: 'Automated emails, task tracking, a voice assistant and AI chatbots.',
    },
    challenge: {
      es: 'Los equipos administrativos perdían horas en tareas repetitivas de correo y seguimiento.',
      en: 'Admin teams were losing hours on repetitive email and follow-up tasks.',
    },
    built: {
      es: ['Envío automático de correos programados', 'Seguimiento de tareas por responsable', 'Asistente de voz', 'Chatbots con IA'],
      en: ['Scheduled automatic emails', 'Task tracking per owner', 'Voice assistant', 'AI chatbots'],
    },
    results: {
      es: ['Menos tareas manuales repetitivas', 'Seguimiento centralizado del equipo'],
      en: ['Fewer repetitive manual tasks', 'Centralized team follow-up'],
    },
    flow: [
      { es: 'Tareas y correos', en: 'Tasks & emails' },
      'Spring Boot',
      'Python + LLM',
      { es: 'Envíos programados', en: 'Scheduled sends' },
    ],
    tech: [...WEB, 'Python', 'LLM', 'Docker'],
    images: [img('seven', 'main', 'Seven+: tablero de tareas')],
  },
  {
    id: 'chatbot',
    name: 'Chat Bot IA',
    featured: true,
    accent: '#60A5FA',
    sectors: ['ia', 'edtech'],
    kind: { es: 'Web · IA conversacional', en: 'Web · Conversational AI' },
    tagline: { es: 'Atención automática con lenguaje natural', en: 'Automated support with natural language' },
    summary: {
      es: 'Chatbot conectado a una plataforma educativa que responde, orienta y matricula.',
      en: 'Chatbot connected to an education platform that answers, guides and enrolls.',
    },
    challenge: {
      es: 'Las preguntas repetidas de los estudiantes saturaban al equipo de atención.',
      en: 'Repeated student questions were overwhelming the support team.',
    },
    built: {
      es: ['Chatbot con procesamiento de lenguaje natural', 'Integración con la plataforma educativa', 'Flujo guiado de matrícula'],
      en: ['Natural language chatbot', 'Integration with the education platform', 'Guided enrollment flow'],
    },
    results: {
      es: ['Atención 24/7 sin ampliar el equipo', 'Respuestas consistentes'],
      en: ['24/7 support without growing the team', 'Consistent answers'],
    },
    flow: [
      { es: 'Estudiante', en: 'Student' },
      'Chat web',
      'LLM',
      { es: 'Plataforma', en: 'Platform' },
      { es: 'Matrícula', en: 'Enrollment' },
    ],
    tech: [...WEB, 'Python', 'LLM', 'Docker'],
    images: [img('chatbot', 'main', 'Chat Bot IA en la plataforma educativa')],
  },

  // ---------- Archivo ----------
  {
    id: 'orbital',
    name: 'Orbital',
    sectors: ['gestion', 'ecommerce'],
    tagline: { es: 'Inventario, ventas y e-commerce en uno', en: 'Inventory, sales and e-commerce in one' },
    summary: {
      es: 'Inventario, ventas, tienda en línea y gastos, con pronósticos basados en aprendizaje automático.',
      en: 'Inventory, sales, online store and expenses, with machine-learning forecasts.',
    },
    tech: [...WEB, 'Spring AOP', 'Smile ML', 'ZXing', 'Docker'],
    images: [img('orbital', 'main', 'Orbital: inventario y ventas')],
  },
  {
    id: 'thalipuchi',
    name: 'Thalipuchi',
    sectors: ['ecommerce'],
    tagline: { es: 'Tienda en línea sincronizada con el inventario', en: 'Online store synced with inventory' },
    summary: {
      es: 'E-commerce de abarrotes que sincroniza productos, precios e imágenes desde Orbital automáticamente.',
      en: 'Grocery e-commerce that syncs products, prices and images from Orbital automatically.',
    },
    tech: [...WEB, 'API REST', 'Docker'],
    images: [img('thalipuchi', 'main', 'Thalipuchi: tienda en línea')],
  },
  {
    id: 'crmsky',
    name: 'CRM Sky',
    sectors: ['gestion'],
    tagline: { es: 'Embudo de ventas, cobros y cotizaciones', en: 'Sales pipeline, billing and quotes' },
    summary: {
      es: 'Pipeline visual de ventas, cotizaciones en PDF, cobros y lectura de documentos con OCR.',
      en: 'Visual sales pipeline, PDF quotes, billing and OCR document reading.',
    },
    tech: [...WEB, 'iText', 'PDFBox', 'Tess4J'],
    images: [img('crmsky', 'main', 'CRM Sky: embudo de ventas')],
  },
  {
    id: 'skyt',
    name: 'Sky T',
    sectors: ['logistica'],
    tagline: { es: 'Gestión de parque automotor y maquinaria', en: 'Fleet and machinery management' },
    summary: {
      es: 'Disponibilidad de máquinas, mantenimiento preventivo, documentos y costos de la flota.',
      en: 'Machine availability, preventive maintenance, documents and fleet costs.',
    },
    tech: [...WEB, 'iText', 'PDFBox'],
    images: [img('skyt', 'main', 'Sky T: gestión de flota')],
  },
  {
    id: 'optilogix',
    name: 'OptiLogix',
    sectors: ['logistica'],
    tagline: { es: 'Gestión logística y de almacén', en: 'Logistics and warehouse management' },
    summary: {
      es: 'Ubicaciones de almacén, inventario en tiempo real y seguimiento de envíos.',
      en: 'Warehouse locations, real-time inventory and shipment tracking.',
    },
    tech: [...WEB, 'Apache POI'],
    images: [img('optilogix', 'main', 'OptiLogix: almacén')],
  },
  {
    id: 'ares',
    name: 'Seguridad Ares',
    sectors: ['iot', 'seguridad'],
    tagline: { es: 'Rastreo de activos para seguridad privada', en: 'Asset tracking for private security' },
    summary: {
      es: 'Seguimiento GPS de activos con geocercas y alertas de movimiento.',
      en: 'GPS asset tracking with geofences and movement alerts.',
    },
    tech: [...WEB, 'Netty', 'Docker'],
    images: [img('ares', 'main', 'Seguridad Ares: rastreo de activos')],
  },
  {
    id: 'masterbread',
    name: 'Master Bread',
    sectors: ['gestion'],
    tagline: { es: 'Gestión de panaderías multisede', en: 'Multi-branch bakery management' },
    summary: {
      es: 'Inventario, ventas y reportes para varias panaderías y puntos de venta.',
      en: 'Inventory, sales and reports for several bakeries and points of sale.',
    },
    tech: [...WEB, 'iText', 'Apache POI'],
    images: [img('masterbread', 'main', 'Master Bread: panel de ventas')],
  },
  {
    id: 'mrdeleite',
    name: 'Mr Deleite',
    sectors: ['gestion'],
    tagline: { es: 'Sistema para comidas rápidas', en: 'Fast-food restaurant system' },
    summary: {
      es: 'Pedidos, inventario, domicilios y análisis de ventas para restaurantes de comida rápida.',
      en: 'Orders, inventory, delivery and sales analytics for fast-food restaurants.',
    },
    tech: [...WEB, 'iText', 'Apache POI'],
    images: [img('mrdeleite', 'main', 'Mr Deleite: pedidos')],
  },
  {
    id: 'orbital-industrial',
    name: 'Orbital Industrial',
    sectors: ['gestion', 'logistica'],
    tagline: { es: 'Bodega y elementos de protección personal', en: 'Warehouse and personal protective equipment' },
    summary: {
      es: 'Control de bodega y entrega de EPP con códigos QR.',
      en: 'Warehouse control and PPE handover with QR codes.',
    },
    tech: [...WEB, 'ZXing'],
    images: [img('orbital-industrial', 'main', 'Orbital Industrial: bodega')],
  },
  {
    id: 'escuela',
    name: 'YoAprendo',
    sectors: ['edtech'],
    tagline: { es: 'Plataforma educativa estilo LMS', en: 'LMS-style education platform' },
    summary: {
      es: 'Cursos, evaluaciones y seguimiento de estudiantes, con chatbot para matrículas.',
      en: 'Courses, assessments and student tracking, with an enrollment chatbot.',
    },
    tech: [...WEB, 'Python', 'Docker'],
    images: [img('escuela', 'main', 'YoAprendo: plataforma educativa')],
  },
  {
    id: 'ingles',
    name: { es: 'Plataforma de inglés', en: 'English platform' },
    sectors: ['edtech'],
    tagline: { es: 'Práctica de inglés con contenido interactivo', en: 'English practice with interactive content' },
    summary: {
      es: 'Clases interactivas, ejercicios con audio y seguimiento del progreso.',
      en: 'Interactive lessons, audio exercises and progress tracking.',
    },
    tech: [...WEB, 'Docker'],
    images: [img('ingles', 'main', 'Plataforma de inglés')],
  },
  {
    id: 'friendlyen',
    name: 'Friendly English',
    sectors: ['edtech'],
    tagline: { es: 'Sitio web de academia de inglés', en: 'English academy website' },
    summary: {
      es: 'Sitio corporativo con laboratorio de audio interactivo, programas y contacto.',
      en: 'Corporate site with an interactive audio lab, programs and contact.',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    images: [img('friendlyen', 'main', 'Friendly English: sitio web')],
    url: 'https://friendlyen.com/',
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const ARCHIVE = PROJECTS.filter((p) => !p.featured);
export const byId = (id) => PROJECTS.find((p) => p.id === id);

// Proyectos que usan una tecnología (coincidencia exacta con `tech`).
export const usedIn = (names) => {
  const list = Array.isArray(names) ? names : [names];
  return PROJECTS.filter((p) => p.tech.some((t) => list.includes(t)));
};
