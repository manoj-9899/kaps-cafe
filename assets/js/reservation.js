(function () {
  'use strict';

  var WHATSAPP_NUMBER = '918983229224';
  var formCard = document.getElementById('reservation-form-card');
  var form = document.getElementById('reservation-form');
  var submitBtn = document.getElementById('reservation-submit');

  var formTemplate = '';
  var lastWhatsAppUrl = '';
  var lastBooking = null;

  function setMinDate() {
    var dateInput = document.getElementById('res-date');
    if (!dateInput) return;

    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0');
    dateInput.min = year + '-' + month + '-' + day;
  }

  function getDigits(phone) {
    return phone.replace(/[\s\-()]/g, '').replace(/\D/g, '');
  }

  function formatDate(dateValue) {
    var parts = dateValue.split('-');
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  function isPastDate(dateValue) {
    var parts = dateValue.split('-');
    var selected = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected < today;
  }

  function getFirstName(fullName) {
    return fullName.trim().split(/\s+/)[0] || 'there';
  }

  function clearFieldError(field) {
    var wrapper = field.closest('.reservation__field');
    if (!wrapper) return;

    wrapper.classList.remove('reservation__field--error');
    var errorEl = wrapper.querySelector('.reservation__error');
    if (errorEl) errorEl.textContent = '';
  }

  function setFieldError(field, message) {
    var wrapper = field.closest('.reservation__field');
    if (!wrapper) return;

    wrapper.classList.add('reservation__field--error');
    var errorEl = wrapper.querySelector('.reservation__error');
    if (errorEl) errorEl.textContent = message;
  }

  function validateForm() {
    var name = document.getElementById('res-name');
    var phone = document.getElementById('res-phone');
    var date = document.getElementById('res-date');
    var time = document.getElementById('res-time');

    var fields = [name, phone, date, time];
    fields.forEach(clearFieldError);

    var errors = [];
    var isValid = true;

    if (!name.value.trim()) {
      setFieldError(name, 'Please enter your name.');
      errors.push(name);
      isValid = false;
    }

    var phoneDigits = getDigits(phone.value);
    if (!phone.value.trim()) {
      setFieldError(phone, 'Please enter your WhatsApp number.');
      errors.push(phone);
      isValid = false;
    } else if (phoneDigits.length < 10) {
      setFieldError(phone, 'Please enter a valid 10-digit number.');
      errors.push(phone);
      isValid = false;
    }

    if (!date.value) {
      setFieldError(date, 'Please select a preferred date.');
      errors.push(date);
      isValid = false;
    } else if (isPastDate(date.value)) {
      setFieldError(date, 'Please choose today or a future date.');
      errors.push(date);
      isValid = false;
    }

    if (!time.value) {
      setFieldError(time, 'Please select a preferred time.');
      errors.push(time);
      isValid = false;
    }

    if (!isValid) {
      submitBtn.classList.remove('reservation__submit--shake');
      void submitBtn.offsetWidth;
      submitBtn.classList.add('reservation__submit--shake');

      errors[0].focus({ preventScroll: true });
      errors[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return isValid;
  }

  function formatPhoneForMessage(phone) {
    var digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
      return '+91 ' + digits.slice(0, 5) + ' ' + digits.slice(5);
    }
    if (digits.length === 12 && digits.indexOf('91') === 0) {
      return '+91 ' + digits.slice(2, 7) + ' ' + digits.slice(7);
    }
    return phone.trim();
  }

  function buildWhatsAppMessage(data) {
    var cafe = 'Kaps Caf\u00E9';
    var lines = [
      '\uD83C\uDF7D *Table Reservation \u2014 ' + cafe + '*',
      '',
      '*BOOKING DETAILS*',
      '\uD83D\uDCC5 Date: ' + data.formattedDate,
      '\uD83D\uDD52 Time: ' + data.time,
      '\uD83D\uDC65 Guests: ' + data.guests
    ];

    if (data.occasion && data.occasion !== 'Just visiting') {
      lines.push('\uD83C\uDF89 Occasion: ' + data.occasion);
    }

    lines.push('');
    lines.push('*GUEST DETAILS*');
    lines.push('\uD83D\uDC64 Name: ' + data.name);
    lines.push('\uD83D\uDCDE WhatsApp: ' + formatPhoneForMessage(data.phone));

    if (data.notes) {
      lines.push('\uD83D\uDCDD Note: ' + data.notes);
    }

    lines.push('');
    lines.push('Please confirm my table. Thank you! \uD83D\uDE4F');

    return lines.join('\n');
  }

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  function openWhatsApp(url) {
    if (window.innerWidth <= 768) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  function collectFormData() {
    var name = document.getElementById('res-name').value.trim();
    var phone = document.getElementById('res-phone').value.trim();
    var dateValue = document.getElementById('res-date').value;
    var time = document.getElementById('res-time').value;
    var guests = document.getElementById('res-guests').value;
    var occasion = document.getElementById('res-occasion').value;
    var notes = document.getElementById('res-notes').value.trim();

    return {
      name: name,
      firstName: getFirstName(name),
      phone: phone,
      dateValue: dateValue,
      formattedDate: formatDate(dateValue),
      time: time,
      guests: guests,
      occasion: occasion,
      notes: notes
    };
  }

  function showSuccess(data) {
    formCard.innerHTML =
      '<div class="reservation__success">' +
      '<svg class="reservation__check" viewBox="0 0 72 72" aria-hidden="true">' +
      '<circle class="reservation__check-circle" cx="36" cy="36" r="34"></circle>' +
      '<path class="reservation__check-path" d="M22 37 L32 47 L52 27"></path>' +
      '</svg>' +
      '<h3 class="reservation__success-title">See you soon, ' + escapeHtml(data.firstName) + '!</h3>' +
      '<p class="reservation__success-text">Your table request has been sent to us on WhatsApp. We will confirm within a few minutes.</p>' +
      '<div class="reservation__summary">' +
      '<div><span class="reservation__summary-label">Date</span><span class="reservation__summary-value">' + escapeHtml(data.formattedDate) + '</span></div>' +
      '<div><span class="reservation__summary-label">Time</span><span class="reservation__summary-value">' + escapeHtml(data.time) + '</span></div>' +
      '<div><span class="reservation__summary-label">Guests</span><span class="reservation__summary-value">' + escapeHtml(data.guests) + '</span></div>' +
      '</div>' +
      '<button type="button" class="reservation__retry" id="reservation-retry">WhatsApp did not open? Try again</button>' +
      '<button type="button" class="reservation__reset" id="reservation-reset">Make another reservation</button>' +
      '</div>';

    document.getElementById('reservation-retry').addEventListener('click', function () {
      openWhatsApp(lastWhatsAppUrl);
    });

    document.getElementById('reservation-reset').addEventListener('click', resetForm);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function resetForm() {
    formCard.innerHTML = formTemplate;
    form = document.getElementById('reservation-form');
    submitBtn = document.getElementById('reservation-submit');
    bindFormEvents();
    setMinDate();
    lastWhatsAppUrl = '';
    lastBooking = null;
  }

  function bindFormEvents() {
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm()) return;

      var data = collectFormData();
      var message = buildWhatsAppMessage(data);
      lastWhatsAppUrl = buildWhatsAppUrl(message);
      lastBooking = data;

      openWhatsApp(lastWhatsAppUrl);
      showSuccess(data);
    });

    form.querySelectorAll('.reservation__input, .reservation__select, .reservation__textarea').forEach(function (field) {
      field.addEventListener('focus', function () {
        clearFieldError(field);
      });
    });
  }

  function init() {
    if (!formCard || !form) return;

    formTemplate = formCard.innerHTML;
    setMinDate();
    bindFormEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
