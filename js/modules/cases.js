// Casos de estudio: bloques alternos con captura en marco, reto, lo construido,
// flujo de arquitectura, resultados y stack.

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (id, cls = 'ic') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;

function media(p, t, tx) {
  const name = tx(p.name);

  if (p.id === 'skymeet') {
    const bars = Array.from({ length: 14 }, (_, i) => `<i style="animation-delay:${(i * 0.09).toFixed(2)}s"></i>`).join('');
    const step = (ic, es, en, meta) => `
      <li class="meet-step">${icon(ic)}<span>${esc(tx({ es, en }))}</span><small>${esc(meta)}</small></li>`;
    return `
      <div class="meet-mock" role="img" aria-label="${esc(tx({ es: 'SkyMeet: de la grabación al acta en PDF', en: 'SkyMeet: from recording to PDF minutes' }))}">
        <div class="shot-bar"><span class="sys-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="shot-url">SkyMeet · .NET 8</span></div>
        <div class="meet-body">
          <div class="meet-file">${icon('mail')}<span>${esc(tx({ es: 'reunion-comite.mp4', en: 'committee-meeting.mp4' }))}</span><span class="meet-wave" aria-hidden="true">${bars}</span></div>
          <ol class="meet-steps">
            ${step('check', 'Audio extraído', 'Audio extracted', 'ffmpeg')}
            ${step('check', 'Transcripción por fragmentos', 'Chunked transcription', 'OpenAI')}
            <li class="meet-step">${icon('zoom')}<span>${esc(tx({ es: 'Resumen y compromisos', en: 'Summary and action items' }))}</span><small>LLM</small></li>
          </ol>
          <div class="meet-bar" aria-hidden="true"><i></i></div>
          <div class="meet-pdf">${icon('down')}<span>${esc(tx({ es: 'Acta ejecutiva lista', en: 'Executive minutes ready' }))}<small>PdfSharp · ${esc(tx({ es: 'historial en SQLite', en: 'history in SQLite' }))}</small></span></div>
        </div>
      </div>`;
  }

  if (!p.images.length) return '';
  const first = p.images[0];
  const plain = !first.srcset;
  const bar = plain ? '' : `<span class="shot-bar"><span class="sys-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="shot-url">~/${esc(p.id)}</span></span>`;
  const img = (im, cls = '') => `<img class="${cls}" src="${esc(im.src)}"${im.srcset ? ` srcset="${esc(im.srcset)}" sizes="(max-width: 899px) 92vw, 640px"` : ''} alt="${esc(im.alt)}" loading="lazy" decoding="async" width="1600" height="1000">`;

  const thumbs = p.images.length > 1
    ? `<div class="case-thumbs">${p.images.map((im, i) => `
        <button class="thumb" type="button" data-thumb="${i}" aria-current="${i === 0}" aria-label="${esc(im.alt)}">
          <img src="${esc(im.src)}" alt="" loading="lazy" width="800" height="500">
        </button>`).join('')}</div>`
    : '';

  return `
    <button class="shot${plain ? ' shot--plain' : ''}" type="button" data-shot="0" aria-label="${esc(t('case.zoom'))}: ${esc(name)}">
      ${bar}${img(first, 'shot-img')}
      <span class="shot-zoom">${icon('zoom')}${esc(t('case.zoom'))}</span>
    </button>${thumbs}`;
}

function caseHtml(p, t, tx, waLink) {
  const name = tx(p.name);
  const list = (arr) => arr.map((x) => `<li>${esc(x)}</li>`).join('');
  const action = p.url
    ? `<a class="btn btn-sm btn-secondary" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(t('case.live'))}${icon('ext')}</a>`
    : `<a class="btn btn-sm btn-secondary" href="${esc(waLink(t('case.demoMsg', { name })))}" target="_blank" rel="noopener">${icon('wa')}${esc(t('case.demo'))}</a>`;

  return `
  <article class="case" id="caso-${esc(p.id)}" style="--case-accent:${esc(p.accent)}" data-reveal>
    <div class="case-media">${media(p, t, tx)}</div>
    <div class="case-body">
      <p class="case-kind mono">${esc(tx(p.kind))}</p>
      <h3 class="case-name">${esc(name)}</h3>
      <p class="case-tagline">${esc(tx(p.tagline))}</p>

      <div class="case-block">
        <h4 class="case-label">${esc(t('case.challenge'))}</h4>
        <p>${esc(tx(p.challenge))}</p>
      </div>

      <div class="case-block">
        <h4 class="case-label">${esc(t('case.built'))}</h4>
        <ul class="case-list">${list(tx(p.built))}</ul>
      </div>

      <div class="case-block">
        <h4 class="case-label">${esc(t('case.flow'))}</h4>
        <ol class="flow">${p.flow.map((f) => `<li><span>${esc(tx(f))}</span></li>`).join('')}</ol>
      </div>

      <div class="case-block">
        <h4 class="case-label">${esc(t('case.results'))}</h4>
        <ul class="case-results">${tx(p.results).map((r) => `<li>${icon('check')}<span>${esc(r)}</span></li>`).join('')}</ul>
      </div>

      <div class="case-block">
        <h4 class="case-label">Stack</h4>
        <ul class="chips">${p.tech.map((x) => `<li class="chip">${esc(x)}</li>`).join('')}</ul>
      </div>

      <div class="case-foot">
        <p class="case-role">${esc(t('case.role'))}</p>
        <div class="case-actions">
          <span class="case-private">${icon('lock')}${esc(t('case.private'))}</span>
          ${action}
        </div>
      </div>
    </div>
  </article>`;
}

export function initCases({ root, projects, t, tx, waLink, openLightbox, onRender }) {
  if (!root) return;
  const current = {}; // imagen visible por proyecto

  function render() {
    root.innerHTML = projects.map((p) => caseHtml(p, t, tx, waLink)).join('');
    // Restaura la miniatura elegida tras re-render (cambio de idioma)
    projects.forEach((p) => { if (current[p.id]) select(p, current[p.id]); });
    if (onRender) onRender(root);
  }

  function select(p, i) {
    const art = root.querySelector(`#caso-${p.id}`);
    if (!art) return;
    const im = p.images[i];
    const main = art.querySelector('.shot-img');
    if (!main || !im) return;
    main.src = im.src;
    if (im.srcset) main.srcset = im.srcset; else main.removeAttribute('srcset');
    main.alt = im.alt;
    art.querySelector('.shot').dataset.shot = String(i);
    art.querySelectorAll('.thumb').forEach((b) => b.setAttribute('aria-current', String(Number(b.dataset.thumb) === i)));
    current[p.id] = i;
  }

  root.addEventListener('click', (e) => {
    const art = e.target.closest('.case');
    if (!art) return;
    const p = projects.find((x) => `caso-${x.id}` === art.id);
    if (!p) return;

    const thumb = e.target.closest('.thumb');
    if (thumb) { select(p, Number(thumb.dataset.thumb)); return; }

    const shot = e.target.closest('.shot');
    if (shot && openLightbox) {
      const name = tx(p.name);
      openLightbox(p.images.map((im) => ({ ...im, caption: `${name} — ${im.alt.replace(/^[^:]+:\s*/, '')}` })), Number(shot.dataset.shot) || 0);
    }
  });

  document.addEventListener('langchange', render);
  render();
}
