export function initTerminal({ el, body, getLines }) {
  if (!el || !body) {
    return;
  }
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var caretHtml = '<span class="t-caret" aria-hidden="true"></span>';
  function lineHtml(cmd, comment) {
    return '<span class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">' + esc(cmd) + '</span><span class="t-comment">  # ' + esc(comment) + '</span></span>';
  }
  function typingHtml(cmdPartial) {
    return '<span class="t-line"><span class="t-prompt">$</span> <span class="t-cmd">' + esc(cmdPartial) + '</span></span>';
  }
  function outHtml(text) {
    return '<span class="t-out">' + esc(text) + '</span>';
  }
  function renderAll() {
    var lines = getLines() || [];
    var parts = [];
    lines.forEach(function (line) {
      parts.push(lineHtml(line.cmd || '', line.comment || ''));
      (line.out || []).forEach(function (o) {
        parts.push(outHtml(o));
      });
    });
    parts.push(caretHtml);
    body.innerHTML = parts.join('\n');
  }
  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  var runId = 0;
  var started = false;
  function paint(done, extra) {
    var parts = done.slice();
    if (extra) {
      parts = parts.concat(extra);
    }
    parts.push(caretHtml);
    body.innerHTML = parts.join('\n');
  }
  function animate(myId) {
    var lines = getLines() || [];
    var done = [];
    var chain = Promise.resolve();
    lines.forEach(function (line) {
      var cmd = String(line.cmd == null ? '' : line.cmd);
      var comment = String(line.comment == null ? '' : line.comment);
      var out = line.out || [];
      chain = chain.then(function () {
        if (myId !== runId) {
          return null;
        }
        var i = 1;
        function typeNext() {
          if (myId !== runId) {
            return Promise.resolve();
          }
          if (i <= cmd.length) {
            paint(done, [typingHtml(cmd.slice(0, i))]);
            i += 1;
            return sleep(28).then(typeNext);
          }
          return Promise.resolve();
        }
        return typeNext().then(function () {
          if (myId !== runId) {
            return null;
          }
          var full = lineHtml(cmd, comment);
          paint(done, [full]);
          return sleep(260).then(function () {
            if (myId !== runId) {
              return null;
            }
            var shown = [full];
            var outChain = Promise.resolve();
            out.forEach(function (o) {
              outChain = outChain.then(function () {
                if (myId !== runId) {
                  return null;
                }
                shown.push(outHtml(o));
                paint(done, shown);
                return sleep(180);
              });
            });
            return outChain.then(function () {
              if (myId !== runId) {
                return null;
              }
              done.push(full);
              out.forEach(function (o) {
                done.push(outHtml(o));
              });
              return sleep(420);
            });
          });
        });
      });
    });
    chain.then(function () {
      if (myId !== runId) {
        return;
      }
      paint(done, null);
    });
  }
  function start() {
    if (started) {
      return;
    }
    started = true;
    var reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      renderAll();
      return;
    }
    runId += 1;
    animate(runId);
  }
  document.addEventListener('langchange', function () {
    if (!started) {
      return;
    }
    runId += 1;
    renderAll();
  });
  var reducedNow = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedNow || typeof IntersectionObserver === 'undefined') {
    start();
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(el);
}
