// Pacific Voice — submission form
// Prototype: no real backend, shows confirmation only

(function() {
  const form = document.getElementById('concern-form');
  const success = document.getElementById('success');
  const referenceEl = document.getElementById('reference-number');

  if (!form || !success) return;

  // Smooth scroll on internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Generate a fake reference number for the prototype
  function generateReference() {
    const random = Math.floor(10000 + Math.random() * 90000);
    return 'PV-2026-' + random;
  }

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (field.type === 'checkbox' && !field.checked) {
        valid = false;
        field.closest('.checkbox-label').style.color = '#B5384A';
      } else if (field.type !== 'checkbox' && !field.value.trim()) {
        valid = false;
        field.style.borderColor = '#B5384A';
        field.addEventListener('input', function() {
          field.style.borderColor = '';
        }, { once: true });
      }
    });

    // Also check that at least one of email or phone is filled
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    if (!email && !phone) {
      valid = false;
      form.querySelector('#email').style.borderColor = '#B5384A';
      form.querySelector('#phone').style.borderColor = '#B5384A';
    }

    if (!valid) {
      // Scroll to first invalid field
      const firstInvalid = form.querySelector('[style*="border-color"], .checkbox-label[style*="color"]');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Show success state
    form.hidden = true;
    const intro = document.querySelector('.form-intro');
    if (intro) intro.hidden = true;
    success.hidden = false;
    referenceEl.textContent = generateReference();

    // Scroll to top of form area
    document.querySelector('.form-container').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})();
