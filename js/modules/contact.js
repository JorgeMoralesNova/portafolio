export function initContact({ form, status, copyBtn, t }) {
  if (form) {
    var nameInput = form.elements.namedItem ? form.elements.namedItem('name') : form.elements.name;
    var emailInput = form.elements.namedItem ? form.elements.namedItem('email') : form.elements.email;
    var msgInput = form.elements.namedItem ? form.elements.namedItem('message') : form.elements.message;
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var submitBtn = form.querySelector('button[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.querySelector('span') : null;

    function setFieldState(input, valid) {
      var field = input && input.closest ? input.closest('.field') : null;
      if (valid) {
        if (field) {
          field.classList.remove('is-invalid');
        }
        input.removeAttribute('aria-invalid');
      } else {
        if (field) {
          field.classList.add('is-invalid');
        }
        input.setAttribute('aria-invalid', 'true');
      }
    }

    function bindClear(input) {
      input.addEventListener('input', function () {
        var field = input.closest ? input.closest('.field') : null;
        if (field) {
          field.classList.remove('is-invalid');
        }
        input.removeAttribute('aria-invalid');
      });
    }

    [nameInput, emailInput, msgInput].forEach(function (input) {
      if (input && input.addEventListener) {
        bindClear(input);
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var gotcha = form.elements.namedItem ? form.elements.namedItem('_gotcha') : form.elements._gotcha;
      if (gotcha && gotcha.value !== '') {
        if (status) {
          status.textContent = t('form.ok');
          status.className = 'form-status is-ok';
        }
        form.reset();
        return;
      }
      var nameOk = !!(nameInput && nameInput.value.trim() !== '');
      var emailOk = !!(emailInput && emailRe.test(emailInput.value.trim()));
      var msgOk = !!(msgInput && msgInput.value.trim().length >= 10);
      if (nameInput) {
        setFieldState(nameInput, nameOk);
      }
      if (emailInput) {
        setFieldState(emailInput, emailOk);
      }
      if (msgInput) {
        setFieldState(msgInput, msgOk);
      }
      if (!nameOk || !emailOk || !msgOk) {
        if (status) {
          status.textContent = t('form.invalid');
          status.className = 'form-status is-error';
        }
        var firstInvalid = !nameOk ? nameInput : (!emailOk ? emailInput : msgInput);
        if (firstInvalid && firstInvalid.focus) {
          firstInvalid.focus();
        }
        return;
      }
      if (submitBtn) {
        submitBtn.disabled = true;
      }
      if (submitLabel) {
        submitLabel.textContent = t('form.sending');
      }
      form.classList.add('is-sending');
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          if (status) {
            status.textContent = t('form.ok');
            status.className = 'form-status is-ok';
          }
        } else {
          if (status) {
            status.textContent = t('form.err');
            status.className = 'form-status is-error';
          }
        }
      }).catch(function () {
        if (status) {
          status.textContent = t('form.err');
          status.className = 'form-status is-error';
        }
      }).finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
        }
        if (submitLabel) {
          submitLabel.textContent = t('form.send');
        }
        form.classList.remove('is-sending');
      });
    });
  }

  if (copyBtn) {
    var resetTimer = null;
    copyBtn.addEventListener('click', function () {
      var text = copyBtn.dataset.copy || '';
      function done() {
        copyBtn.classList.add('is-copied');
        copyBtn.setAttribute('aria-label', t('contact.copied'));
        if (resetTimer) {
          clearTimeout(resetTimer);
        }
        resetTimer = setTimeout(function () {
          copyBtn.classList.remove('is-copied');
          copyBtn.setAttribute('aria-label', t('a11y.copy'));
        }, 1800);
      }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          // ignore
        }
        ta.remove();
        done();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
    });
  }
}
