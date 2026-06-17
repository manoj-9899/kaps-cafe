(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');

  function getNavOffset() {
    return nav ? nav.offsetHeight : 70;
  }

  function scrollToTarget(selector) {
    const el = document.querySelector(selector);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - getNavOffset();
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function initHero() {
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      requestAnimationFrame(function () {
        hero.classList.add('hero--loaded');
      });
    } else {
      hero.classList.add('hero--loaded');
    }

    hero.querySelectorAll('.hero__cta').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();
        scrollToTarget(href);
      });
    });

    const scrollBtn = hero.querySelector('.hero__scroll');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function () {
        scrollToTarget('#marquee');
      });
    }
  }

  function isMobileView() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  var highlightsCarousel = null;

  function destroyHighlightsCarousel() {
    if (!highlightsCarousel) return;

    var grid = highlightsCarousel.grid;
    var track = grid.querySelector('.highlights__track');

    highlightsCarousel.listeners.forEach(function (item) {
      item.target.removeEventListener(item.type, item.handler, item.options);
    });

    if (track) {
      while (track.firstChild) {
        grid.appendChild(track.firstChild);
      }
      track.remove();
    }

    grid.classList.remove('highlights__grid--carousel');
    grid.style.transform = '';
    highlightsCarousel = null;
  }

  function getHighlightsSlideOffset(grid, track, cards, index) {
    var card = cards[index];
    if (!card) return 0;

    var gap = parseFloat(getComputedStyle(track).gap) || 16;
    var cardWidth = card.offsetWidth;
    var left = index * (cardWidth + gap);
    var centered = left - (grid.clientWidth - cardWidth) / 2;
    var max = Math.max(0, track.scrollWidth - grid.clientWidth);

    return Math.max(0, Math.min(centered, max));
  }

  function setupHighlightsCarousel() {
    var grid = document.querySelector('.highlights__grid');
    var dots = document.querySelectorAll('.highlights__dot');
    if (!grid) return;

    destroyHighlightsCarousel();

    if (!isMobileView() || !dots.length) return;

    var track = document.createElement('div');
    track.className = 'highlights__track';

    while (grid.firstChild) {
      track.appendChild(grid.firstChild);
    }

    grid.appendChild(track);
    grid.classList.add('highlights__grid--carousel');

    var cards = track.querySelectorAll('.highlight-card');
    if (!cards.length) return;

    var state = {
      index: 0,
      translate: 0,
      axis: null,
      startX: 0,
      startY: 0,
      startTranslate: 0
    };

    var listeners = [];

    function addListener(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      listeners.push({ target: target, type: type, handler: handler, options: options });
    }

    function updateDots() {
      dots.forEach(function (dot, i) {
        dot.classList.toggle('highlights__dot--active', i === state.index);
      });
    }

    function applyTranslate(value, animate) {
      state.translate = value;
      track.classList.toggle('highlights__track--dragging', !animate);
      track.style.transform = 'translate3d(' + (-value) + 'px, 0, 0)';
    }

    function goToSlide(index, animate) {
      var next = Math.max(0, Math.min(index, cards.length - 1));
      state.index = next;
      applyTranslate(getHighlightsSlideOffset(grid, track, cards, next), animate !== false);
      updateDots();
    }

    function onTouchStart(e) {
      if (e.touches.length !== 1) return;
      state.axis = null;
      state.startX = e.touches[0].clientX;
      state.startY = e.touches[0].clientY;
      state.startTranslate = state.translate;
      track.classList.add('highlights__track--dragging');
    }

    function onTouchMove(e) {
      if (e.touches.length !== 1) return;

      var dx = e.touches[0].clientX - state.startX;
      var dy = e.touches[0].clientY - state.startY;

      if (state.axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        state.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }

      if (state.axis === 'x') {
        var max = Math.max(0, track.scrollWidth - grid.clientWidth);
        var next = state.startTranslate - dx;
        next = Math.max(0, Math.min(next, max));
        applyTranslate(next, false);
      }
    }

    function onTouchEnd(e) {
      track.classList.remove('highlights__track--dragging');

      if (state.axis === 'x') {
        var dx = e.changedTouches[0].clientX - state.startX;
        if (dx < -40) {
          goToSlide(state.index + 1);
        } else if (dx > 40) {
          goToSlide(state.index - 1);
        } else {
          goToSlide(state.index);
        }
      }

      state.axis = null;
    }

    addListener(track, 'touchstart', onTouchStart, { passive: true });
    addListener(track, 'touchmove', onTouchMove, { passive: true });
    addListener(track, 'touchend', onTouchEnd, { passive: true });
    addListener(track, 'touchcancel', onTouchEnd, { passive: true });

    dots.forEach(function (dot, i) {
      addListener(dot, 'click', function () {
        goToSlide(i);
      });
    });

    addListener(window, 'resize', function () {
      goToSlide(state.index, false);
    }, { passive: true });

    goToSlide(0, false);

    highlightsCarousel = {
      grid: grid,
      listeners: listeners
    };
  }

  function initHighlightsCarousel() {
    setupHighlightsCarousel();
  }

  function initTapReveal() {
    if (!isMobileView()) return;

    const cards = document.querySelectorAll('.highlight-card');
    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (!card.classList.contains('highlight-card--tapped')) {
          e.preventDefault();
          cards.forEach(function (other) {
            other.classList.remove('highlight-card--tapped');
          });
          card.classList.add('highlight-card--tapped');
        }
      });
    });

    const cells = document.querySelectorAll('.instagram__cell:not(.instagram__cell--all)');
    cells.forEach(function (cell) {
      cell.addEventListener('click', function (e) {
        if (!cell.classList.contains('instagram__cell--tapped')) {
          e.preventDefault();
          cells.forEach(function (other) {
            other.classList.remove('instagram__cell--tapped');
          });
          cell.classList.add('instagram__cell--tapped');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.highlight-card')) {
        cards.forEach(function (card) {
          card.classList.remove('highlight-card--tapped');
        });
      }
      if (!e.target.closest('.instagram__cell')) {
        cells.forEach(function (cell) {
          cell.classList.remove('instagram__cell--tapped');
        });
      }
    });
  }

  function initHighlights() {
    const cards = document.querySelectorAll('.highlight-card');
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = isMobileView();

    if (prefersReducedMotion) {
      cards.forEach(function (card) {
        card.classList.add('highlight-card--visible');
      });
      initHighlightsCarousel();
      initTapReveal();
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('highlight-card--visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: mobile ? 0.1 : 0.15,
        rootMargin: mobile ? '0px 0px -20px 0px' : '0px 0px -40px 0px'
      }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });

    initHighlightsCarousel();
    initTapReveal();
  }

  function initScrollReveal(sectionId, visibleClass) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      section.classList.add(visibleClass);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
  }

  function initAboutAndInstagram() {
    initScrollReveal('about', 'about--visible');
    initScrollReveal('instagram-feed', 'instagram--visible');
  }

  function isCafeOpen() {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    return minutes >= 11 * 60 && minutes < 22 * 60;
  }

  function updateCafeHoursStatus() {
    const dot = document.getElementById('find-us-live-dot');
    const text = document.getElementById('find-us-live-text');
    if (!dot || !text) return;

    const open = isCafeOpen();

    dot.classList.toggle('find-us__live-dot--closed', !open);
    text.classList.toggle('find-us__live-text--closed', !open);
    text.textContent = open ? 'Open now' : 'Closed · Opens at 11:00 AM';
  }

  function initFindUs() {
    initScrollReveal('find-us', 'find-us--visible');
    updateCafeHoursStatus();
  }

  function initFooterNav() {
    document.querySelectorAll('.footer__nav-link[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();

        const tabId = link.getAttribute('data-menu-tab');
        if (tabId && window.KapsMenu && typeof window.KapsMenu.switchTab === 'function') {
          window.KapsMenu.switchTab(tabId, true);
        }

        scrollToTarget(href);
      });
    });
  }

  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    const SCROLL_THRESHOLD = 400;

    function updateVisibility() {
      const visible = window.scrollY > SCROLL_THRESHOLD;
      btn.classList.toggle('back-to-top--visible', visible);
      btn.hidden = !visible;
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function init() {
    initHero();
    initHighlights();
    initAboutAndInstagram();
    initFindUs();
    initFooterNav();
    initBackToTop();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setupHighlightsCarousel();
      }, 150);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
