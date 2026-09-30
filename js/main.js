// Arranque del portafolio. Cada módulo se inicia aislado: si uno falla, el resto sigue.
import { t, tx, getLang, setLang, applyI18n } from './i18n.js';
import { PROJECTS, FEATURED, ARCHIVE, SECTORS, waLink } from './data/projects.js';
import { initHero } from './modules/hero.js';
import { initCases } from './modules/cases.js';
import { initStack } from './modules/stack.js';
import { initLightbox } from './modules/lightbox.js';
import { initArchive } from './modules/archive.js';
import { initContact } from './modules/contact.js';
import { initTerminal } from './modules/terminal.js';

const $ = (s) => document.querySelector(s);
const safe = (name, fn) => {
  try { return fn(); } catch (err) { console.error(`[${name}]`, err); return undefined; }
};
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Idioma y tema ----------
function initLang() {
  const btn = $('#langToggle');
  const paint = () => { btn.querySelector('.lang-cur').textContent = getLang().toUpperCase(); };
  applyI18n();
  paint();
  btn.addEventListener('click', () => {
    setLang(getLang() === 'es' ? 'en' : 'es');
    paint();
  });
}

function initTheme() {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const sync = () => { if (meta) meta.content = root.dataset.theme === 'light' ? '#F6F5F1' : '#0B0D12'; };
  sync();
  $('#themeToggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('jm-theme', root.dataset.theme); } catch (e) { /* sin almacenamiento */ }
    sync();
  });
}

// ---------- Cabecera, menú y scroll-spy ----------
function initHeader() {
  const header = $('#siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const btn = $('#menuToggle');
  const menu = $('#mobileMenu');
  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    header.classList.toggle('is-scrolled', open || window.scrollY > 16);
  };
  btn.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); } });
  matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });

  // Scroll-spy: la sección que cruza la franja superior de la pantalla
  const links = [...document.querySelectorAll('.nav-links a[data-spy]')];
  const alias = { archivo: 'trabajo', ia: 'stack' };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = alias[en.target.id] || en.target.id;
      links.forEach((a) => a.classList.toggle('is-active', a.dataset.spy === id));
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  document.querySelectorAll('main > section[id]').forEach((s) => io.observe(s));
}

// ---------- Revelado al hacer scroll ----------
const revealIO = !reduced && 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  : null;

function reveal(scope = document) {
  const els = scope.querySelectorAll('[data-reveal]:not(.is-in)');
  if (!revealIO) { els.forEach((el) => el.classList.add('is-in')); return; }
  els.forEach((el) => revealIO.observe(el));
}

function markReveal() {
  document.querySelectorAll('.sec-head, .proof, .tl-item, .term, .ai-card, .about-photo, .about-text > p, .about-quote, .about-facts, .contact-links, .contact-form, .filters, .archive')
    .forEach((el) => el.setAttribute('data-reveal', ''));
  reveal();
  // Red de seguridad: lo que ya está en pantalla al cargar (p. ej. entrada por ancla)
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
    });
  }, 400);
}

// ---------- Terminal de la sección IA ----------
const TERMINAL = {
  es: [
    { cmd: 'vim spec/inventario.md', comment: 'yo diseño: entidades, reglas y criterios' },
    { cmd: 'agent run --spec spec/inventario.md', comment: 'el agente escribe lo repetitivo', out: ['✓ archivos generados siguiendo el contrato'] },
    { cmd: 'git diff', comment: 'reviso cada cambio antes de aceptarlo' },
    { cmd: 'mvn verify && docker compose up -d', comment: 'pruebo y despliego', out: ['✓ build ok · servicio arriba'] },
  ],
  en: [
    { cmd: 'vim spec/inventory.md', comment: 'I design: entities, rules and criteria' },
    { cmd: 'agent run --spec spec/inventory.md', comment: 'the agent writes the repetitive parts', out: ['✓ files generated following the contract'] },
    { cmd: 'git diff', comment: 'I review every change before accepting it' },
    { cmd: 'mvn verify && docker compose up -d', comment: 'test and deploy', out: ['✓ build ok · service up'] },
  ],
};

// ---------- Inicio ----------
safe('lang', initLang);
safe('theme', initTheme);
safe('header', initHeader);

const lightbox = safe('lightbox', () => initLightbox()) || { open() {} };

safe('hero', () => initHero({ stage: $('#sysStage'), svg: $('#sysLines'), caption: $('#sysCaption'), projects: PROJECTS, t, tx }));
safe('cases', () => initCases({ root: $('#cases'), projects: FEATURED, t, tx, waLink, openLightbox: lightbox.open, onRender: (root) => reveal(root) }));
safe('archive', () => initArchive({ list: $('#archiveList'), filters: $('#archiveFilters'), preview: $('#archivePreview'), projects: ARCHIVE, sectors: SECTORS, t, tx, openLightbox: lightbox.open }));
safe('stack', () => initStack({ root: $('#stackGrid'), projects: PROJECTS, t, tx }));
safe('terminal', () => initTerminal({ el: $('#aiTerm'), body: $('#aiTermBody'), getLines: () => TERMINAL[getLang()] }));
safe('contact', () => initContact({ form: $('#contactForm'), status: $('#cfStatus'), copyBtn: $('#copyMail'), t }));
safe('reveal', markReveal);
document.addEventListener('langchange', () => reveal());

const year = $('#year');
if (year) year.textContent = String(new Date().getFullYear());
