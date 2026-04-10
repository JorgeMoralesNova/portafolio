const Utils = {
  translations: {
    es: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      proyectos: 'Proyectos',
      tecnologias: 'Tecnologías',
      contacto: 'Contacto',
      disponible: 'Disponible para proyectos',
      verProyectos: 'Ver Proyectos',
      contactar: 'Contactar',
      scroll: 'Scroll',
      conoceMiHistoria: 'Conoce mi historia',
      passionate: 'Passionate about creating impactful solutions',
      habilidades: 'Mis Habilidades',
      avanzado: 'Avanzado',
      intermedio: 'Intermedio',
      enAprendizaje: 'En aprendizaje',
      proyectosCompletados: 'Proyectos Completados',
      clientesSatisfechos: 'Clientes Satisfechos',
      anosExperiencia: 'Años de Experiencia',
      tecnologiasDominadas: 'Tecnologías Dominadas',
      hablemos: 'Hablemos',
      tienesProyecto: '¿Tienes un proyecto en mente? Contáctame',
      conversemos: '¡Conversemos!',
      innovadoras: 'Estoy siempre abierto a nuevos proyectos, ideas innovadoras o simplemente para una buena conversación sobre tecnología.',
      enviarMensaje: 'Enviar Mensaje',
      copyright: 'Todos los derechos reservados.',
      trabajoDestacado: 'Trabajo Destacado',
      solucionesConstruidas: 'Soluciones que he construido para clientes reales',
      stackTecnologico: 'Stack Tecnológico',
      herramientasDomino: 'Herramientas que domino para crear soluciones completas',
      sobreMiTitulo: 'Ingeniero de Sistemas & IA',
      sobreMiParrafo1: 'Con 21 años, actualmente cursando 8vo semestre de Ingeniería de Sistemas, he desarrollado más de 12 proyectos completos combinando desarrollo backend con Spring Boot, automatización con IA y soluciones de vanguardia. Mi punto fuerte es Java/Spring Boot, pero domino igual de bien Python, JavaScript/TypeScript y Rust.',
      sobreMiParrafo2: 'Experto combinando IA y programación. Manejo avanzado de LLMs (OpenAI, Claude), implementación de MCP (Model Context Protocol), y desarrollo de chatbots inteligentes conectados a CRM y plataformas educativas. Automatizo flujos de trabajo con herramientas de IA como Claude Code.',
      filosofia: 'Creo que la tecnología debe simplificar la vida real. Por eso me especializo en automatizar procesos aburridos para que las personas puedan enfocarse en lo que realmente importa.',
      proyectosLabel: 'Proyectos',
      clientesLabel: 'Clientes',
      anosLabel: 'Años Exp.',
      tecnologiasLabel: 'Tecnologías',
      skyT: 'Sky T, Master Bread, Orbital',
      automatizaciones: 'Automatizaciones, Chatbots IA',
      frontendProyectos: 'Frontend en proyectos varios',
      despleigueProyectos: 'Despliegue de proyectos en producción',
      basesDatos: 'Bases de datos en proyectos reales',
      proyectosPersonales: 'Proyectos personales',
      explorandoFrameworks: 'Explorando frameworks',
      iaAutomatizacion: 'IA & Automatización',
      anos21: '21 años',
      heroDescripcion: 'Experto combinando IA y programación. Desarrollo soluciones con Spring Boot, automatizo flujos con LLMs (Claude, GPT) y creo chatbots inteligentes conectados a CRM y plataformas educativas.',
      solicitarDemo: 'Solicitar Demo',
      visitar: 'Visitar',
      github: 'GitHub'
    },
    en: {
      inicio: 'Home',
      sobreMi: 'About Me',
      proyectos: 'Projects',
      tecnologias: 'Technologies',
      contacto: 'Contact',
      disponible: 'Available for projects',
      verProyectos: 'View Projects',
      contactar: 'Contact Me',
      scroll: 'Scroll',
      conoceMiHistoria: 'Know my story',
      passionate: 'Passionate about creating impactful solutions',
      habilidades: 'My Skills',
      avanzado: 'Advanced',
      intermedio: 'Intermediate',
      enAprendizaje: 'Learning',
      proyectosCompletados: 'Completed Projects',
      clientesSatisfechos: 'Satisfied Clients',
      anosExperiencia: 'Years of Experience',
      tecnologiasDominadas: 'Technologies Mastered',
      hablemos: "Let's Talk",
      tienesProyecto: 'Have a project in mind? Contact me',
      conversemos: "Let's Chat!",
      innovadoras: "I'm always open to new projects, innovative ideas or just a good conversation about technology.",
      enviarMensaje: 'Send Message',
      copyright: 'All rights reserved.',
      trabajoDestacado: 'Featured Work',
      solucionesConstruidas: 'Solutions I have built for real clients',
      stackTecnologico: 'Tech Stack',
      herramientasDomino: 'Tools I master to create complete solutions',
      sobreMiTitulo: 'Systems Engineer & AI',
      sobreMiParrafo1: 'At 21 years old, currently in my 8th semester of Systems Engineering, I have developed more than 12 complete projects combining backend development with Spring Boot, AI automation and cutting-edge solutions. My strength is Java/Spring Boot, but I also handle Python, JavaScript/TypeScript and Rust.',
      sobreMiParrafo2: 'Expert combining AI and programming. Advanced handling of LLMs (OpenAI, Claude), MCP (Model Context Protocol) implementation, and intelligent chatbots connected to CRM and educational platforms. I automate workflows with AI tools like Claude Code.',
      filosofia: 'I believe technology should simplify real life. That is why I specialize in automating boring processes so people can focus on what really matters.',
      proyectosLabel: 'Projects',
      clientesLabel: 'Clients',
      anosLabel: 'Years Exp.',
      tecnologiasLabel: 'Technologies',
      skyT: 'Sky T, Master Bread, Orbital',
      automatizaciones: 'Automations, AI Chatbots',
      frontendProyectos: 'Frontend in various projects',
      despleigueProyectos: 'Project deployment in production',
      basesDatos: 'Databases in real projects',
      proyectosPersonales: 'Personal projects',
      explorandoFrameworks: 'Exploring frameworks',
      iaAutomatizacion: 'AI & Automation',
      anos21: '21 years old',
      heroDescripcion: 'Expert combining AI and programming. I develop solutions with Spring Boot, automate workflows with LLMs (Claude, GPT) and create intelligent chatbots connected to CRM and educational platforms.',
      solicitarDemo: 'Request Demo',
      visitar: 'Visit',
      github: 'GitHub'
    }
  },

  currentLang: 'es',

  debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  isElementInViewport(el, threshold = 0.1) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
  },

  getScrollY() {
    return window.scrollY || document.documentElement.scrollTop;
  },

  getScrollDirection() {
    const currentScrollY = this.getScrollY();
    const direction = currentScrollY > this.lastScrollY ? 'down' : 'up';
    this.lastScrollY = currentScrollY;
    return direction;
  },

  lastScrollY: 0,

  formatDate(date) {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('es-ES', options);
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{8,}$/;
    return re.test(phone);
  },

  sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  },

  copyToClipboard(text) {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return Promise.resolve();
  },

  lazyLoadImage(img, src) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = src;
            image.classList.add('loaded');
            obs.unobserve(image);
          }
        });
      }, { rootMargin: '50px' });
      observer.observe(img);
    } else {
      img.src = src;
    }
  },

  createParticles(container, count = 20) {
    const colors = ['#6366f1', '#8b5cf6', '#10b981'];
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 2}px;
        height: ${Math.random() * 8 + 2}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: float ${Math.random() * 4 + 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
      `;
      container.appendChild(particle);
    }
  },

  animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target >= 10 ? `${target}+` : target;
      }
    };

    requestAnimationFrame(update);
  },

  animateProgressBars() {
    const bars = document.querySelectorAll('.skill-progress');
    bars.forEach(bar => {
      const progress = bar.dataset.progress;
      bar.style.width = `${progress}%`;
    });
  },

  showToast(message, duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 10);
    } else {
      toast.querySelector('span').textContent = message;
      toast.classList.add('show');
    }

    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  },

  initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.left = `${cursorX - 10}px`;
      cursor.style.top = `${cursorY - 10}px`;
    });

    function animateFollower() {
      followerX += (cursorX - followerX) * 0.15;
      followerY += (cursorY - followerY) * 0.15;
      follower.style.left = `${followerX - 4}px`;
      follower.style.top = `${followerY - 4}px`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverElements = document.querySelectorAll('a, button, .project-card, .tech-item, .stat-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  },

  initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    html.setAttribute('data-theme', theme);

    toggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  },

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  },

  initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = Utils.throttle(() => {
      if (Utils.getScrollY() > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
  },

  initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    const handleScroll = Utils.throttle(() => {
      if (Utils.getScrollY() > 500) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });

    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  },

  initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    const savedLang = localStorage.getItem('lang') || 'es';
    this.currentLang = savedLang;
    this.applyLanguage(savedLang);
    this.updateLangButton(savedLang);

    btn.addEventListener('click', () => {
      this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', this.currentLang);
      this.applyLanguage(this.currentLang);
      this.updateLangButton(this.currentLang);
      document.dispatchEvent(new CustomEvent('langChange'));
    });
  },

  updateLangButton(lang) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const label = btn.querySelector('.lang-label');
    if (label) {
      label.textContent = lang.toUpperCase();
    }
  },

  applyLanguage(lang) {
    const t = this.translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.placeholder = t[key];
      }
    });
  }
};

window.Utils = Utils;