// Diagrama vivo del hero: nodos HTML posicionados por CSS (--x/--y),
// conexiones SVG calculadas desde sus posiciones reales y "paquetes" que viajan por ellas.

const NODE_MATCH = {
  client: null, // todos los proyectos
  api: ['Spring Boot'],
  ai: ['LLM', 'OpenAI'],
  db: ['MySQL', 'SQLite'],
  iot: ['Netty'],
  docs: ['OpenHTMLtoPDF', 'iText', 'Apache POI', 'ZXing', 'PDFBox', 'PdfSharp'],
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const SVG_NS = 'http://www.w3.org/2000/svg';

export function initHero({ stage, svg, caption, projects, t, tx }) {
  if (!stage || !svg) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = [...stage.querySelectorAll('.sys-node')];
  const byKey = Object.fromEntries(nodes.map((n) => [n.dataset.node, n]));
  const core = byKey.api;
  const outer = nodes.filter((n) => n !== core);

  const usersOf = (key) => {
    const match = NODE_MATCH[key];
    return match ? projects.filter((p) => p.tech.some((x) => match.includes(x))) : projects;
  };

  // ---------- Conexiones ----------
  let edges = [];

  function layout() {
    const box = stage.getBoundingClientRect();
    if (!box.width) return;
    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
    svg.textContent = '';
    const center = (el) => {
      const r = el.getBoundingClientRect();
      return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
    };
    const c = center(core);
    edges = outer.map((node, i) => {
      const p = center(node);
      // Curva suave: punto de control desplazado en perpendicular
      const mx = (c.x + p.x) / 2;
      const my = (c.y + p.y) / 2;
      const dx = p.x - c.x;
      const dy = p.y - c.y;
      const bend = (i % 2 ? 1 : -1) * 0.12;
      const qx = mx - dy * bend;
      const qy = my + dx * bend;

      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', `M${p.x},${p.y} Q${qx},${qy} ${c.x},${c.y}`);
      path.setAttribute('class', 'sys-line');
      svg.appendChild(path);

      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('r', '3.2');
      dot.setAttribute('class', 'sys-packet');
      if (reduced) dot.style.display = 'none';
      svg.appendChild(dot);

      const edge = { key: node.dataset.node, path, dot, len: path.getTotalLength(), phase: i / outer.length, speed: 0.22 + (i % 3) * 0.05 };
      place(edge);
      return edge;
    });
    applyState();
  }

  // ---------- Animación de paquetes ----------
  let running = false;
  let last = 0;

  // Ida y vuelta: del nodo al core y regreso
  function place(e) {
    const k = e.phase < 0.5 ? e.phase * 2 : 2 - e.phase * 2;
    const pt = e.path.getPointAtLength(e.len * k);
    e.dot.setAttribute('cx', pt.x);
    e.dot.setAttribute('cy', pt.y);
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    for (const e of edges) {
      e.phase = (e.phase + dt * e.speed) % 1;
      place(e);
    }
    requestAnimationFrame(frame);
  }

  function setRunning(on) {
    if (reduced || on === running) return;
    running = on;
    if (on) { last = performance.now(); requestAnimationFrame(frame); }
  }

  // ---------- Estado activo ----------
  let active = null;

  function applyState() {
    nodes.forEach((n) => {
      const k = n.dataset.node;
      n.classList.toggle('is-active', k === active);
      n.classList.toggle('is-dim', !!active && active !== 'api' && k !== active && k !== 'api');
      n.setAttribute('aria-pressed', String(k === active));
    });
    edges.forEach((e) => {
      const on = !!active && (active === 'api' || e.key === active);
      e.path.classList.toggle('is-active', on);
      e.path.classList.toggle('is-dim', !!active && !on);
      e.dot.classList.toggle('is-dim', !!active && !on);
    });
    renderCaption();
  }

  function renderCaption() {
    if (!caption) return;
    if (!active) {
      caption.innerHTML = `<span class="mono accent">&gt;</span> ${esc(t('sys.hint'))}`;
      return;
    }
    const node = byKey[active];
    const label = node.querySelector('.sys-v').textContent;
    const list = usersOf(active);
    caption.innerHTML =
      `<span class="mono accent">&gt;</span> <strong>${list.length} ${esc(t('sys.projects'))}</strong> ${esc(t('sys.uses'))}: ${esc(label)}` +
      `<span class="sys-projs">${list.map((p) => `<span class="sys-proj">${esc(tx(p.name))}</span>`).join('')}</span>`;
  }

  function activate(key) {
    active = key;
    applyState();
  }

  // ---------- Recorrido automático hasta que el usuario interactúe ----------
  const tourOrder = ['client', 'api', 'db', 'ai', 'iot', 'docs'];
  let tourTimer = null;
  let tourIdx = 0;
  let touched = false;

  function startTour() {
    if (reduced || touched || tourTimer) return;
    tourTimer = setInterval(() => {
      activate(tourOrder[tourIdx % tourOrder.length]);
      tourIdx++;
    }, 3200);
  }
  function stopTour() {
    clearInterval(tourTimer);
    tourTimer = null;
  }
  function userTook() {
    touched = true;
    stopTour();
  }

  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  nodes.forEach((n) => {
    const k = n.dataset.node;
    if (fine) {
      n.addEventListener('mouseenter', () => { userTook(); activate(k); });
    }
    n.addEventListener('focus', () => { userTook(); activate(k); });
    n.addEventListener('click', () => { userTook(); activate(active === k && !fine ? null : k); });
  });
  if (fine) stage.addEventListener('mouseleave', () => activate(null));

  // ---------- Ciclo de vida ----------
  let visible = false;
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    setRunning(visible && !document.hidden);
    if (visible) startTour(); else stopTour();
  }, { threshold: 0.15 });
  io.observe(stage);

  document.addEventListener('visibilitychange', () => setRunning(visible && !document.hidden));

  let rt;
  const ro = new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(layout, 60); });
  ro.observe(stage);

  document.addEventListener('langchange', () => { requestAnimationFrame(layout); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  layout();
}
