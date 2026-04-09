const WHATSAPP_NUMBER = '573105148847';

const createWhatsAppLink = (projectName) => {
  const message = encodeURIComponent(`Hola Jorge! Me interesa el proyecto "${projectName}". ¿Podemos agendar una demo?`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const Carousels = {
  projectsData: [
    {
      id: 1,
      title: 'Sky T',
      emoji: '🚗',
      category: 'Gestión',
      description: 'Sistema integral de gestión de parque automotor y disponibilidad de máquinas. Control total de flota, mantenimiento preventivo y seguimiento GPS en tiempo real.',
      image: 'assets/images/sky-t.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 2,
      title: 'Master Bread',
      emoji: '🥖',
      category: 'Retail',
      description: 'Plataforma completa para gestión de panaderías y múltiples puntos de venta. Inventario automático, ventas y reportes en tiempo real.',
      image: 'assets/images/master bread.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 3,
      title: 'Orbital',
      emoji: '🌐',
      category: 'E-commerce',
      description: 'Sistema todo-en-uno para inventario, ventas, e-commerce y gestión de gastos del hogar o negocio. Automatización completa.',
      image: 'assets/images/orbital.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 4,
      title: 'Orbital Industrial',
      emoji: '🏭',
      category: 'Industrial',
      description: 'Solución especializada para manejo de bodega y EPP (Elementos de Protección Personal). Control de inventario industrial con código QR.',
      image: 'assets/images/orbital industrial.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 5,
      title: 'Mr Deleite',
      emoji: '🍔',
      category: 'Food Tech',
      description: 'Sistema de gestión integral para negocios de comida rápida. Pedidos, inventario, delivery y análisis de ventas.',
      image: 'assets/images/mrdeleite(comidas rapidas).png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 6,
      title: 'Seven+',
      emoji: '🤖',
      category: 'Automatización',
      description: 'Suite de automatización de oficina: correos automáticos, seguimiento de tareas, asistente de voz e IA en chatbots.',
      image: 'assets/images/seven+.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 7,
      title: 'Chat Bot IA',
      emoji: '💬',
      category: 'IA / NLP',
      description: 'CRM inteligente con chatbot integrado y procesamiento de lenguaje natural. Automatización de atención al cliente con LLMs.',
      image: 'assets/images/pagina web con chatbot integrado a plataforma educativa yoaprendotec.skyonedev.com  .png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 8,
      title: 'SkyGPS',
      emoji: '🛰️',
      category: 'IoT',
      description: 'Plataforma de seguimiento vehicular con dispositivos Sinotrack. Monitoreo en tiempo real, rutas y alertas personalizadas.',
      image: 'assets/images/skygps.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 9,
      title: 'Seguridad Ares',
      emoji: '🛡️',
      category: 'Seguridad',
      description: 'Sistema GPS especializado para vigilancia y seguimiento de activos. Geofencing y alertas de movimiento.',
      image: 'assets/images/ares.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 10,
      title: 'CRM Sky',
      emoji: '💼',
      category: 'CRM',
      description: 'Gestión completa de embudo de ventas, cobros y cotizaciones. Pipeline visual y automatización comercial.',
      image: 'assets/images/crmsky.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 11,
      title: 'Escuela Educativa',
      emoji: '🎓',
      category: 'EdTech',
      description: 'Plataforma estilo Moodle con chatbot para matrículas. Contenido dinámico, evaluaciones y seguimiento de estudiantes.',
      image: 'assets/images/plataforma educativa  yoaprendo.skyonedev.com.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 12,
      title: 'Plataforma Inglés',
      emoji: '🇬🇧',
      category: 'EdTech',
      description: 'Plataforma especializada en contenido de inglés. Clases interactivas, ejercicios con IA y seguimiento de progreso.',
      image: 'assets/images/software con contenido de ingles escuela.frienlyen.com .png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 13,
      title: 'Thalipuchi E-commerce',
      emoji: '🛒',
      category: 'E-commerce',
      description: 'Tienda en línea de abarrotes con sincronización automática de inventario, precios e imágenes desde el sistema Orbital. Gestión completa de pedidos y delivery.',
      image: 'assets/images/ecommerce thalipuchi.com.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 14,
      title: 'FriendlyEN',
      emoji: '🌐',
      category: 'Web',
      description: 'Plataforma web para práctica de inglés con contenido interactivo, ejercicios y seguimiento de progreso. Interfaz moderna y amigable.',
      image: 'assets/images/friendlyen.com ejemplo pagina cliente.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      demo: 'https://friendlyen.com',
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 15,
      title: 'OptiLogix',
      emoji: '📦',
      category: 'Logística',
      description: 'Sistema de gestión logística para empresas. Optimización de rutas, seguimiento de envíos, control de inventario y análisis de operaciones en tiempo real.',
      image: 'assets/images/ejemplo software de logistica optilogix.png',
      tags: ['Java', 'HTML', 'CSS', 'JS', 'Thymeleaf', 'Spring Security', 'Spring Boot', 'Python', 'Docker'],
      demo: '#',
      github: 'https://github.com/JorgeMoralesNova',
      badge: 'Beta'
    }
  ],

  initProjectsCarousel() {
    const track = document.getElementById('projects-track');
    const dotsContainer = document.getElementById('projects-dots');
    const prevBtn = document.getElementById('projects-prev');
    const nextBtn = document.getElementById('projects-next');
    const grid = document.getElementById('projects-grid');

    if (!track) return;

    this.renderProjects(track, 'carousel');
    this.renderProjects(grid, 'grid');

    let currentIndex = 0;
    const cards = track.querySelectorAll('.project-card');
    const totalCards = cards.length;
    // 1 card per view on mobile (<768px), 2 on tablet (768-968px)
    const visibleCards = window.innerWidth < 768 ? 1 : 2;

    // Set exact card widths based on the container's actual rendered width
    this.resizeCarouselCards(track, visibleCards);

    this.createDots(dotsContainer, totalCards, visibleCards);
    this.updateCarousel(track, currentIndex, cards);

    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      this.updateCarousel(track, currentIndex, cards);
      this.updateDots(dotsContainer, currentIndex, visibleCards);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(totalCards - visibleCards, currentIndex + 1);
      this.updateCarousel(track, currentIndex, cards);
      this.updateDots(dotsContainer, currentIndex, visibleCards);
    });

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < totalCards - visibleCards) {
          currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
          currentIndex--;
        }
        this.updateCarousel(track, currentIndex, cards);
        this.updateDots(dotsContainer, currentIndex, visibleCards);
      }
    }, { passive: true });

    window.addEventListener('resize', Utils.debounce(() => {
      const newVisibleCards = window.innerWidth < 768 ? 1 : 2;
      if (newVisibleCards !== visibleCards) {
        location.reload();
      }
    }, 250));
  },

  resizeCarouselCards(track, visibleCards) {
    const container = track.closest('.carousel-container');
    if (!container) return;
    const containerWidth = container.offsetWidth;
    const cardWidth = Math.floor(containerWidth / visibleCards);
    track.querySelectorAll('.carousel-card').forEach(card => {
      card.style.width = cardWidth + 'px';
      card.style.minWidth = cardWidth + 'px';
      card.style.maxWidth = cardWidth + 'px';
    });
  },

  renderProjects(container, type) {
    const projects = this.projectsData;

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = `project-card ${type === 'carousel' ? 'carousel-card' : ''}`;
      const badge = project.badge ? `<span class="project-badge beta">${project.badge}</span>` : `<span class="project-badge">${project.category}</span>`;
      const demoLink = project.demo && project.demo !== '#' 
        ? `<a href="${project.demo}" class="project-btn project-btn-demo" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Visitar
          </a>`
        : `<a href="${createWhatsAppLink(project.title)}" class="project-btn project-btn-primary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Demo
          </a>`;
      
      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%231e293b%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%236366f1%22 font-family=%22sans-serif%22 font-size=%2224%22>${project.title}</text></svg>'">
          ${badge}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.emoji} ${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-buttons">
            ${demoLink}
            <a href="${project.github}" class="project-btn project-btn-secondary" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  },

  createDots(container, total, visible) {
    const numDots = Math.ceil(total / visible);
    container.innerHTML = '';

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
      dot.addEventListener('click', () => {
        const track = document.getElementById('projects-track');
        const cards = track.querySelectorAll('.project-card');
        this.updateCarousel(track, i * visible, cards);
        this.updateDots(container, i * visible, visible);
      });
      container.appendChild(dot);
    }
  },

  updateDots(container, currentIndex, visibleCards) {
    const dots = container.querySelectorAll('.carousel-dot');
    const activeDotIndex = Math.floor(currentIndex / visibleCards);
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeDotIndex);
    });
  },

  updateCarousel(track, currentIndex, cards) {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  },

  initTechMarquee() {
    const marquee = document.querySelector('.marquee-content');
    if (!marquee) return;

    const techs = [
      { name: 'Java Spring Boot', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 3C7.56 3 5.85 4.24 5.18 6.08L4.98 6.5H3.5C2.67 6.5 2 7.17 2 8v8c0 .83.67 1.5 1.5 1.5h3.48c.32 0 .58-.26.58-.58 0-.5-.11-.98-.32-1.38l-.17-.32c1.85-.59 3.53-1.87 4.53-3.61l.02-.04c.14-.24.46-.35.72-.22.26.13.36.44.22.68-.02.03-.03.06-.05.09-.78 1.36-1.99 2.36-3.39 2.87l-.87.32c-.21.07-.35.26-.35.48v1.58c0 .62.5 1.12 1.12 1.12h2.76c.62 0 1.12-.5 1.12-1.12v-1.58c0-.22-.14-.41-.35-.48l-.87-.32c-1.4-.51-2.61-1.51-3.39-2.87-.14-.24-.04-.55.22-.68.26-.13.58-.02.72.22l.02.04c1 1.74 2.68 3.02 4.53 3.61l-.17.32c-.21.4-.32.88-.32 1.38 0 .32.26.58.58.58h3.48c.83 0 1.5-.67 1.5-1.5V8c0-.83-.67-1.5-1.5-1.5h-1.48l-.2-.42C15.15 4.24 13.44 3 11.5 3h-2z"/></svg>' },
      { name: 'Python / AI / LLM', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zM19.33 20.5l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>' },
      { name: 'JavaScript / TypeScript', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>' },
      { name: 'C# / .NET', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a9.966 9.966 0 016.65 2.55.786.786 0 011.05.24c.14.25.1.59-.09.77a12.04 12.04 0 01-7.61 2.44c-.56 0-1.11-.04-1.64-.12a.782.782 0 01-.61-.95.78.78 0 01.95-.6c.44.07.89.1 1.33.1a10.48 10.48 0 006.63-2.14 8.34 8.34 0 002.66-6.27 8.36 8.36 0 00-2.62-6.24 8.34 8.34 0 00-6.63-2.15A8.35 8.35 0 008.65 4.3a8.36 8.36 0 002.63 6.23v.03a.78.78 0 01.46.27.78.78 0 01-.04 1.08.775.775 0 01-.77-.01 6.79 6.79 0 01-2.11-4.97 6.8 6.8 0 012.11-5.05 6.8 6.8 0 015.37-1.76c1.82 0 3.53.72 4.81 2.04a6.8 6.8 0 012.04 4.83 6.78 6.78 0 01-2.04 4.84 6.74 6.74 0 01-4.81 2.03 7.4 7.4 0 01-1.02.06 6.79 6.79 0 01-5.38-2.03.781.781 0 01.06-1.08.785.785 0 011.08.06z"/></svg>' },
      { name: 'Astro / Svelte / Tauri', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.608 6.383v11.53L12 24l10.392-5.883V6.177L12 0zm0 2.116l7.864 4.486v8.774L12 19.548l-7.864-4.486V6.807L12 2.116z"/></svg>' },
      { name: 'Docker / Git', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>' },
      { name: 'Claude / OpenAI', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>' },
      { name: 'PostgreSQL / MongoDB', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>' },
      { name: 'AWS / Docker', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51a1.2 1.2 0 0 0 .415-.823c0-.303-.089-.535-.263-.694-.174-.16-.395-.239-.658-.239-.32 0-.613.088-.862.271-.255.184-.47.431-.638.751-.168.32-.252.683-.252 1.091 0 .335.073.607.207.823.144.216.335.38.583.494.248.111.51.167.79.167zm8.274-1.602c.056 0 .096.016.127.056.024.04.04.12.04.248v2.378c0 .247-.031.435-.096.559-.063.12-.159.224-.28.303-.119.08-.263.143-.423.183-.16.04-.335.064-.519.064-.392 0-.735-.049-1.02-.143a1.857 1.857 0 0 1-.662-.415 1.839 1.839 0 0 1-.375-.558 2.76 2.76 0 0 1-.183-.583h.439a1.346 1.346 0 0 0 .32.607c.16.184.367.32.63.415.263.096.567.144.918.144.2 0 .403-.016.615-.056.208-.04.4-.111.575-.2a1.2 1.2 0 0 0 .415-.359c.1-.16.144-.344.144-.551 0-.327-.143-.573-.423-.734-.28-.16-.757-.24-1.437-.24h-.366v-.407h.31c.576 0 .967-.104 1.165-.303.2-.2.295-.479.295-.835 0-.271-.056-.479-.175-.614-.12-.136-.271-.231-.455-.295-.184-.063-.383-.096-.606-.096-.192 0-.383.016-.575.056-.191.04-.367.104-.526.176a1.19 1.19 0 0 0-.327.248.449.449 0 0 0-.12.192c0 .048.024.096.08.144.063.048.144.08.256.104.112.024.24.04.383.04.231 0 .438-.024.614-.08.176-.056.32-.12.432-.2a.868.868 0 0 0 .248-.263c.063-.104.104-.2.127-.304.024-.1.04-.232.04-.384v-.431c0-.128-.016-.2-.056-.24a.293.293 0 0 0-.2-.064h-.758v-.583h3.714zm-3.676 2.944c.167 0 .408-.024.718-.08.31-.056.583-.16.806-.304.224-.144.392-.336.512-.567.119-.23.167-.512.167-.846 0-.271-.032-.503-.103-.694a1.114 1.114 0 0 0-.303-.471 1.58 1.58 0 0 0-.47-.303 1.346 1.346 0 0 0-.622-.112c-.183 0-.359.024-.527.08-.168.056-.32.12-.455.2a1.522 1.522 0 0 0-.535.711h-.407v-1.701h3.938v.575h-3.298v.95h2.19v.519c0 .247.031.455.095.614.064.16.16.295.28.415.12.119.271.208.455.263.183.056.391.08.622.08zm5.008-1.602h.95v.583h-.95v1.701h-.591v-1.701h-2.667v-.583h2.667v-.95h.591zm3.133 0h.607v2.284h-.607v.575h-1.669v-.575h-.607v-2.284h.607v-.575h1.669z"/></svg>' },
      { name: 'React / Angular / Vue', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' }
    ];

    const duplicatedTechs = [...techs, ...techs];
    duplicatedTechs.forEach(tech => {
      const item = document.createElement('div');
      item.className = 'tech-item';
      item.innerHTML = `
        <div class="tech-icon">${tech.icon}</div>
        <span class="tech-name">${tech.name}</span>
      `;
      marquee.appendChild(item);
    });
  },

  initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          Utils.animateCounter(entry.target, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
  }
};

window.Carousels = Carousels;
