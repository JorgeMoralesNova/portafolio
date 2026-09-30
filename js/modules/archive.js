const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function initArchive({ list, filters, preview, projects, sectors, t, tx, openLightbox }) {
  if (!list || !filters) {
    return;
  }
  let active = 'all';

  function countFor(id) {
    if (id === 'all') {
      return projects.length;
    }
    return projects.filter((p) => Array.isArray(p.sectors) && p.sectors.includes(id)).length;
  }

  function firstSectorLabel(p) {
    const firstId = Array.isArray(p.sectors) && p.sectors.length > 0 ? p.sectors[0] : null;
    if (!firstId) {
      return '';
    }
    const found = sectors.find((s) => s.id === firstId);
    if (!found) {
      return '';
    }
    const label = tx(found.label);
    return label == null ? '' : label;
  }

  function renderFilters() {
    let html = '<button type="button" class="filter-chip" data-filter="all" aria-pressed="'
      + (active === 'all' ? 'true' : 'false') + '">'
      + esc(t('arch.all')) + ' <span class="filter-count mono">' + esc(countFor('all')) + '</span></button>';
    sectors.forEach((s) => {
      const n = countFor(s.id);
      if (n < 1) {
        return;
      }
      const label = tx(s.label);
      html += '<button type="button" class="filter-chip" data-filter="' + esc(s.id) + '" aria-pressed="'
        + (active === s.id ? 'true' : 'false') + '">'
        + esc(label == null ? '' : label) + ' <span class="filter-count mono">' + esc(n) + '</span></button>';
    });
    filters.innerHTML = html;
  }

  function applyVisibility() {
    const rows = list.querySelectorAll('.arc-row');
    rows.forEach((row) => {
      const dataSectors = row.getAttribute('data-sectors') || '';
      const parts = dataSectors.split(' ').filter(Boolean);
      const show = active === 'all' || parts.includes(active);
      if (show) {
        row.classList.remove('is-hidden');
      } else {
        row.classList.add('is-hidden');
      }
    });
  }

  function updateRowsWithTransition() {
    const apply = () => {
      applyVisibility();
    };
    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const vt = document.startViewTransition(() => {
        apply();
      });
      // Si la transición se aborta (pestaña oculta), el cambio ya se aplicó igual
      vt.ready.catch(() => {});
      vt.finished.catch(() => {});
    } else {
      apply();
    }
  }

  function renderList() {
    let html = '';
    projects.forEach((p) => {
      const rawName = tx(p.name);
      const name = rawName == null ? '' : rawName;
      const rawTag = tx(p.tagline);
      const tagline = rawTag == null ? '' : rawTag;
      const sectorLabel = firstSectorLabel(p);
      const stack = Array.isArray(p.tech)
        ? p.tech.filter((tech) => tech !== 'Java' && tech !== 'Spring Security' && tech !== 'Thymeleaf').slice(0, 3).join(' · ')
        : '';
      const dataSectors = Array.isArray(p.sectors) ? p.sectors.join(' ') : '';
      html += '<li class="arc-row" data-id="' + esc(p.id) + '" data-sectors="' + esc(dataSectors) + '" style="view-transition-name: arc-' + esc(p.id) + '">'
        + '<button class="arc-btn" type="button" aria-label="' + esc(t('arch.open') + ': ' + name) + '">'
        + '<span class="arc-name">' + esc(name) + '</span>'
        + '<span class="arc-tag">' + esc(tagline) + '</span>'
        + '<span class="arc-sector mono">' + esc(sectorLabel) + '</span>'
        + '<span class="arc-stack mono">' + esc(stack) + '</span>'
        + '<svg class="ic arc-icon" aria-hidden="true"><use href="#i-zoom"/></svg>'
        + '</button></li>';
    });
    list.innerHTML = html;
    applyVisibility();
  }

  filters.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-filter]');
    if (!btn) {
      return;
    }
    const f = btn.getAttribute('data-filter');
    if (!f || f === active) {
      return;
    }
    active = f;
    const buttons = filters.querySelectorAll('[data-filter]');
    buttons.forEach((b) => {
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === active ? 'true' : 'false');
    });
    updateRowsWithTransition();
  });

  list.addEventListener('click', (event) => {
    const btn = event.target.closest('.arc-btn');
    if (!btn) {
      return;
    }
    const row = btn.closest('.arc-row');
    if (!row) {
      return;
    }
    const id = row.getAttribute('data-id');
    const p = projects.find((proj) => String(proj.id) === id);
    if (!p) {
      return;
    }
    if (!Array.isArray(p.images) || p.images.length === 0) {
      return;
    }
    const caption = tx(p.name) + ' — ' + tx(p.summary);
    const imgs = p.images.map((im) => ({ ...im, caption: caption }));
    openLightbox(imgs, 0);
  });

  if (preview && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    list.addEventListener('mouseover', (event) => {
      const row = event.target.closest('.arc-row');
      if (!row) {
        return;
      }
      const id = row.getAttribute('data-id');
      const p = projects.find((proj) => String(proj.id) === id);
      if (!p || !Array.isArray(p.images) || !p.images[0]) {
        return;
      }
      const img = preview.querySelector('img');
      if (!img) {
        return;
      }
      img.src = p.images[0].src;
      preview.classList.add('is-visible');
    });
    list.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      requestAnimationFrame(() => {
        // Si no cabe a la derecha del cursor, se muestra a la izquierda
        const w = preview.offsetWidth || 320;
        const px = x + 28 + w > window.innerWidth ? x - 28 - w : x + 28;
        preview.style.transform = 'translate3d(' + px + 'px, ' + (y - 110) + 'px, 0)';
      });
    });
    list.addEventListener('mouseleave', () => {
      preview.classList.remove('is-visible');
    });
  }

  document.addEventListener('langchange', () => {
    renderFilters();
    renderList();
  });

  renderFilters();
  renderList();
}
