// Stack por capas: cada tecnología muestra en cuántos proyectos se usa (evidencia, no autoevaluación).

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// match: nombres exactos de `tech` en projects.js. daily: sin conteo (uso transversal).
const GROUPS = [
  { key: 'stack.backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'Netty'] },
  { key: 'stack.data', items: ['MySQL', 'SQLite'] },
  { key: 'stack.mobile', items: ['Kotlin', 'Jetpack Compose', '.NET 8', 'Avalonia', 'WPF'] },
  { key: 'stack.ai', items: [{ name: 'LLM · OpenAI', match: ['LLM', 'OpenAI'] }, 'Python', 'ML Kit', 'Smile ML', { name: 'MCP · Claude Code', daily: true }] },
  { key: 'stack.docs', items: ['OpenHTMLtoPDF', 'iText', 'Apache POI', 'ZXing', 'Tess4J'] },
  { key: 'stack.devops', items: ['Docker', { name: 'Git', daily: true }, { name: 'Linux · Plesk', daily: true }] },
  { key: 'stack.front', items: [{ name: 'HTML · CSS · JavaScript', match: ['Thymeleaf', 'HTML', 'JavaScript'] }] },
  { key: 'stack.learning', learning: true, items: ['Rust', 'Svelte / Tauri', 'Astro'] },
];

export function initStack({ root, projects, t, tx }) {
  if (!root) return;
  const total = projects.length;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  function itemHtml(raw, learning) {
    const it = typeof raw === 'string' ? { name: raw, match: [raw] } : raw;
    const name = esc(it.name);
    if (learning || it.daily) {
      return `<li><div class="stack-item"><span class="stack-name">${name}</span><span class="stack-count">${esc(t(learning ? 'stack.learningNote' : 'stack.daily'))}</span></div></li>`;
    }
    const used = projects.filter((p) => p.tech.some((x) => it.match.includes(x)));
    const n = used.length;
    const label = n === 1 ? t('stack.in1') : t('stack.inN', { n });
    const pct = Math.round((n / total) * 100);
    return `<li>
      <button class="stack-item" type="button" aria-expanded="false">
        <span class="stack-name">${name}</span><span class="stack-count">${esc(label)}</span>
        <span class="stack-bar" aria-hidden="true"><i data-w="${pct}%"></i></span>
      </button>
      <div class="stack-tip">${used.map((p) => `<span>${esc(tx(p.name))}</span>`).join('')}</div>
    </li>`;
  }

  function render() {
    root.innerHTML = GROUPS.map((g) => `
      <section class="stack-group${g.learning ? ' stack-group--learning' : ''}" data-reveal>
        <h3>${esc(t(g.key))}</h3>
        <ul class="stack-items">${g.items.map((i) => itemHtml(i, g.learning)).join('')}</ul>
      </section>`).join('');
    grow();
  }

  // Las barras crecen cuando la sección entra en pantalla
  let shown = false;
  function grow() {
    if (!shown) return;
    requestAnimationFrame(() => root.querySelectorAll('.stack-bar i').forEach((i) => { i.style.setProperty('--w', i.dataset.w); }));
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { shown = true; grow(); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(root);
  } else { shown = true; }

  function toggle(btn, force) {
    const open = force ?? !btn.classList.contains('is-open');
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  root.addEventListener('click', (e) => {
    const btn = e.target.closest('button.stack-item');
    if (btn) toggle(btn);
  });
  if (fine) {
    root.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('button.stack-item');
      if (btn && !btn.classList.contains('is-open')) toggle(btn, true);
    });
    root.addEventListener('mouseout', (e) => {
      const li = e.target.closest('li');
      const btn = li && li.querySelector('button.stack-item');
      if (btn && !li.contains(e.relatedTarget)) toggle(btn, false);
    });
  }

  document.addEventListener('langchange', render);
  render();
}
