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
      tags: ['Spring Boot', 'MySQL', 'Thymeleaf', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 2,
      title: 'Master Bread',
      emoji: '🥖',
      category: 'Retail',
      description: 'Plataforma completa para gestión de panaderías y múltiples puntos de venta. Inventario automático, ventas y reportes en tiempo real.',
      image: 'assets/images/master bread.png',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 3,
      title: 'Orbital',
      emoji: '🌐',
      category: 'E-commerce',
      description: 'Sistema todo-en-uno para inventario, ventas, e-commerce y gestión de gastos del hogar o negocio. Automatización completa.',
      image: 'assets/images/orbital.png',
      tags: ['Spring Boot', 'Spring Security', 'MySQL', 'Docker'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 4,
      title: 'Orbital Industrial',
      emoji: '🏭',
      category: 'Industrial',
      description: 'Solución especializada para manejo de bodega y EPP (Elementos de Protección Personal). Control de inventario industrial con código QR.',
      image: 'assets/images/orbital industrial.png',
      tags: ['Spring Boot', 'MySQL', 'QR', 'Thymeleaf'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 5,
      title: 'Mr Deleite',
      emoji: '🍔',
      category: 'Food Tech',
      description: 'Sistema de gestión integral para negocios de comida rápida. Pedidos, inventario, delivery y análisis de ventas.',
      image: 'assets/images/mrdeleite(comidas rapidas).png',
      tags: ['Spring Boot', 'MySQL', 'Thymeleaf', 'JavaScript'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 6,
      title: 'Seven+',
      emoji: '🤖',
      category: 'Automatización',
      description: 'Suite de automatización de oficina: correos automáticos, seguimiento de tareas, asistente de voz e IA en chatbots.',
      image: 'assets/images/seven+.png',
      tags: ['Python', 'LLM', 'Automatización', 'Spring Boot'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 7,
      title: 'Chat Bot IA',
      emoji: '💬',
      category: 'IA / NLP',
      description: 'CRM inteligente con chatbot integrado y procesamiento de lenguaje natural. Automatización de atención al cliente con LLMs.',
      image: 'assets/images/pagina web con chatbot integrado a plataforma educativa yoaprendotec.skyonedev.com  .png',
      tags: ['Python', 'LLM', 'NLP', 'API REST'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 8,
      title: 'SkyGPS',
      emoji: '🛰️',
      category: 'IoT',
      description: 'Plataforma de seguimiento vehicular con dispositivos Sinotrack. Monitoreo en tiempo real, rutas y alertas personalizadas.',
      image: 'assets/images/skygps.png',
      tags: ['Spring Boot', 'IoT', 'GPS', 'MySQL'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 9,
      title: 'Seguridad Ares',
      emoji: '🛡️',
      category: 'Seguridad',
      description: 'Sistema GPS especializado para vigilancia y seguimiento de activos. Geofencing y alertas de movimiento.',
      image: 'assets/images/ares.png',
      tags: ['Spring Boot', 'GPS', 'Geofencing', 'MySQL'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 10,
      title: 'CRM Sky',
      emoji: '💼',
      category: 'CRM',
      description: 'Gestión completa de embudo de ventas, cobros y cotizaciones. Pipeline visual y automatización comercial.',
      image: 'assets/images/crmsky.png',
      tags: ['Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 11,
      title: 'Escuela Educativa',
      emoji: '🎓',
      category: 'EdTech',
      description: 'Plataforma estilo Moodle con chatbot para matrículas. Contenido dinámico, evaluaciones y seguimiento de estudiantes.',
      image: 'assets/images/plataforma educativa  yoaprendo.skyonedev.com.png',
      tags: ['Spring Boot', 'Python', 'Chatbot', 'MySQL'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 12,
      title: 'Plataforma Inglés',
      emoji: '🇬🇧',
      category: 'EdTech',
      description: 'Plataforma especializada en contenido de inglés. Clases interactivas, ejercicios con IA y seguimiento de progreso.',
      image: 'assets/images/software con contenido de ingles escuela.frienlyen.com .png',
      tags: ['Spring Boot', 'IA', 'MySQL', 'JavaScript'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 13,
      title: 'Thalipuchi E-commerce',
      emoji: '🛒',
      category: 'E-commerce',
      description: 'Tienda en línea de abarrotes con sincronización automática de inventario, precios e imágenes desde el sistema Orbital. Gestión completa de pedidos y delivery.',
      image: 'assets/images/ecommerce thalipuchi.com.png',
      tags: ['Spring Boot', 'E-commerce', 'API REST', 'MySQL'],
      github: 'https://github.com/JorgeMoralesNova'
    },
    {
      id: 14,
      title: 'FriendlyEN',
      emoji: '🌐',
      category: 'EdTech',
      description: 'Plataforma web para práctica de inglés con contenido interactivo, ejercicios y seguimiento de progreso. Interfaz moderna y amigable.',
      image: 'assets/images/friendlyen.com ejemplo pagina cliente.png',
      tags: ['Spring Boot', 'Thymeleaf', 'JavaScript', 'MySQL'],
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
      tags: ['Spring Boot', 'MySQL', 'Optimización', 'Docker'],
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
    this.initLightbox();

    document.addEventListener('langChange', () => {
      Utils.applyLanguage(Utils.currentLang);
    });

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

  initLightbox() {
    if (document.querySelector('.lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Cerrar">&times;</button>
      <img src="" alt="">
      <p class="lightbox-caption"></p>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    let previousBodyOverflow = '';

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = previousBodyOverflow;
    };

    const openLightbox = (shot) => {
      const image = shot.querySelector('img');
      if (!image) return;

      previousBodyOverflow = document.body.style.overflow;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      caption.textContent = image.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    };

    document.addEventListener('click', (event) => {
      const shot = event.target.closest?.('.project-shot');
      if (shot) openLightbox(shot);
    });

    document.addEventListener('keydown', (event) => {
      const shot = event.target.closest?.('.project-shot');
      if (shot && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openLightbox(shot);
      }

      if (event.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    closeButton.addEventListener('click', closeLightbox);
  },

  renderProjects(container, type) {
    const projects = this.projectsData;

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = `project-card ${type === 'carousel' ? 'carousel-card' : ''}`;
      const badge = project.badge ? `<span class="project-badge beta">${project.badge}</span>` : `<span class="project-badge category-badge">${project.category}</span>`;
      const demoLink = project.demo && project.demo !== '#' 
        ? `<a href="${project.demo}" class="project-btn project-btn-demo" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span data-i18n="visitar">Visitar</span>
          </a>`
        : `<a href="${createWhatsAppLink(project.title)}" class="project-btn project-btn-primary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span data-i18n="solicitarDemo">Solicitar Demo</span>
          </a>`;
      
      card.innerHTML = `
        <div class="project-image">
          <div class="project-shot" role="button" tabindex="0" aria-label="Ver imagen ampliada de ${project.title}">
            <div class="project-shot-bar">
              <span class="project-shot-dot"></span>
              <span class="project-shot-dot"></span>
              <span class="project-shot-dot"></span>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%231e293b%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%236366f1%22 font-family=%22sans-serif%22 font-size=%2224%22>${project.title}</text></svg>'">
          </div>
           ${badge}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
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
              <span data-i18n="github">GitHub</span>
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
      { name: 'Java / Spring Boot', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"></circle><path d="M8 12h8M12 8v8"></path></svg>' },
      { name: 'Python', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3h5a3 3 0 0 1 3 3v5H8a3 3 0 0 0-3 3v4"></path><path d="M16 21h-5a3 3 0 0 1-3-3v-5h8a3 3 0 0 0 3-3V6"></path></svg>' },
      { name: 'JavaScript / TypeScript', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 9h8M8 12h5M8 15h8"></path></svg>' },
      { name: 'MySQL', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="7" rx="7" ry="3"></ellipse><path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"></path></svg>' },
      { name: 'Docker', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 5h10v4H7zM5 11h14v4H5zM7 17h10v2H7z"></path></svg>' },
      { name: 'Git', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 6h14M5 12h14M5 18h14"></path><circle cx="8" cy="6" r="1.5"></circle><circle cx="16" cy="12" r="1.5"></circle><circle cx="10" cy="18" r="1.5"></circle></svg>' },
      { name: 'Rust', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path><path d="M9 9l6 6M15 9l-6 6"></path></svg>' },
      { name: 'Svelte / Tauri', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5h16v14H4z"></path><path d="M8 9h8M8 13h5M8 17h8"></path></svg>' },
      { name: 'Astro', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l8 5-8 5-8-5 8-5z"></path><path d="M4 16l8 5 8-5"></path></svg>' },
      { name: 'LLMs (Claude / GPT)', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v4l3 2"></path></svg>' }
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
