const App = {
  typingTexts: [
    'Ingeniero de Software',
    'Ingeniero de Protocolos',
    'Creador de Soluciones',
    'Desarrollador Full Stack'
  ],

  init() {
    this.hideLoader();
    Utils.initTheme();
    Utils.initLangToggle();
    Utils.initCursor();
    Utils.initSmoothScroll();
    Utils.initScrollReveal();
    Utils.initNavbar();
    Utils.initBackToTop();
    Utils.initMobileNav();
    this.initParticles();
    this.initTypingEffect();
    Carousels.initProjectsCarousel();
    Carousels.initTechMarquee();
    Carousels.initStatsAnimation();
    this.initContactForm();
    Utils.initTiltEffect();
    this.setCurrentYear();
    this.setActiveNavLink();
  },

  hideLoader() {
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500);
    });
  },

  initParticles() {
    const container = document.getElementById('particles');
    if (container) {
      Utils.createParticles(container, 30);
    }
  },

  initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
      const currentText = this.typingTexts[textIndex];

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % this.typingTexts.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  },

  initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      let isValid = true;

      if (!name.value.trim()) {
        name.classList.add('error');
        isValid = false;
      } else {
        name.classList.remove('error');
      }

      if (!Utils.validateEmail(email.value)) {
        email.classList.add('error');
        isValid = false;
      } else {
        email.classList.remove('error');
      }

      if (!message.value.trim()) {
        message.classList.add('error');
        isValid = false;
      } else {
        message.classList.remove('error');
      }

      if (!isValid) return;

      const submitBtn = form.querySelector('.form-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/mreovnnr', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          const status = document.getElementById('form-status');
          if (status) {
            status.textContent = '¡Mensaje enviado! Te responderé pronto.';
            status.className = 'form-status success';
          }
          form.reset();
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        const status = document.getElementById('form-status');
        if (status) {
          status.textContent = 'Error al enviar. Intenta de nuevo.';
          status.className = 'form-status error';
        }
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });

    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  },

  setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  },

  setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

if ('IntersectionObserver' in window) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Utils.animateProgressBars();
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }
}

Utils.initTiltEffect = function() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
};