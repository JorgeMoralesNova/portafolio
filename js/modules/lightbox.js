export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    return { open() {}, close() {} };
  }
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const closeBtn = lightbox.querySelector('[data-lb-close]');
  const prevBtn = lightbox.querySelector('[data-lb-prev]');
  const nextBtn = lightbox.querySelector('[data-lb-next]');
  let images = [];
  let index = 0;
  let lastFocused = null;
  let opened = false;
  let hideTimer = null;

  function preloadAt(i) {
    const len = images.length;
    if (!len) {
      return;
    }
    const j = ((i % len) + len) % len;
    const item = images[j];
    if (!item) {
      return;
    }
    const src = item.full || item.src;
    if (src) {
      const im = new Image();
      im.src = src;
    }
  }

  function renderCurrent() {
    const item = images[index];
    if (!item) {
      return;
    }
    const full = item.full || item.src || '';
    const alt = item.alt || '';
    const caption = item.caption || item.alt || '';
    lbImg.src = full;
    lbImg.alt = alt;
    lbCaption.textContent = caption;
  }

  function go(delta) {
    if (images.length < 2) {
      return;
    }
    index = ((index + delta) % images.length + images.length) % images.length;
    const item = images[index];
    const full = item.full || item.src || '';
    const alt = item.alt || '';
    const caption = item.caption || item.alt || '';
    lbImg.classList.add('is-swapping');
    lbImg.src = full;
    lbImg.alt = alt;
    lbCaption.textContent = caption;
    preloadAt(index + 1);
    preloadAt(index - 1);
  }

  function open(imgs, idx = 0) {
    if (!Array.isArray(imgs) || imgs.length === 0) {
      return;
    }
    images = imgs;
    index = ((idx % images.length) + images.length) % images.length;
    lastFocused = document.activeElement;
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    renderCurrent();
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
    });
    document.body.classList.add('lb-lock');
    opened = true;
    if (images.length < 2) {
      if (prevBtn) {
        prevBtn.setAttribute('hidden', '');
      }
      if (nextBtn) {
        nextBtn.setAttribute('hidden', '');
      }
    } else {
      if (prevBtn) {
        prevBtn.removeAttribute('hidden');
      }
      if (nextBtn) {
        nextBtn.removeAttribute('hidden');
      }
    }
    if (closeBtn) {
      closeBtn.focus();
    }
    preloadAt(index + 1);
    preloadAt(index - 1);
  }

  function close() {
    if (!opened) {
      return;
    }
    opened = false;
    lightbox.classList.remove('is-open');
    hideTimer = setTimeout(() => {
      lightbox.setAttribute('hidden', '');
      document.body.classList.remove('lb-lock');
      hideTimer = null;
    }, 250);
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      go(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      go(1);
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      close();
    });
  }
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      close();
    }
  });
  if (lbImg) {
    lbImg.addEventListener('load', () => {
      lbImg.classList.remove('is-swapping');
    });
  }
  document.addEventListener('keydown', (event) => {
    if (!opened) {
      return;
    }
    if (event.key === 'Escape') {
      close();
    } else if (event.key === 'ArrowLeft') {
      go(-1);
    } else if (event.key === 'ArrowRight') {
      go(1);
    } else if (event.key === 'Tab') {
      const focusables = Array.from(lightbox.querySelectorAll('button:not([hidden])'));
      if (focusables.length === 0) {
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  return { open, close };
}
