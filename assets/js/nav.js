(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const logo = document.getElementById('nav-logo');
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-overlay');
  const closeBtn = document.getElementById('nav-close');

  const SCROLL_THRESHOLD = 60;
  const scrollLinks = document.querySelectorAll(
    '.nav__link, .nav__reserve, .nav__overlay-link'
  );

  function getNavOffset() {
    return nav ? nav.offsetHeight : 70;
  }

  function scrollToTarget(target) {
    const el = document.querySelector(target);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - getNavOffset();
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function handleScroll() {
    if (!nav) return;
    nav.classList.toggle('nav--scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  function openMenu() {
    overlay.classList.add('nav__overlay--open');
    overlay.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('nav__overlay--open');
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function handleAnchorClick(e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;

    e.preventDefault();

    const tabId = this.getAttribute('data-menu-tab');
    if (tabId && window.KapsMenu && typeof window.KapsMenu.switchTab === 'function') {
      window.KapsMenu.switchTab(tabId, true);
    }

    scrollToTarget(href);

    if (overlay.classList.contains('nav__overlay--open')) {
      closeMenu();
    }
  }

  function handleLogoClick(e) {
    const href = logo.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (overlay.classList.contains('nav__overlay--open')) {
      closeMenu();
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (logo) {
    logo.addEventListener('click', handleLogoClick);
  }

  scrollLinks.forEach(function (link) {
    link.addEventListener('click', handleAnchorClick);
  });

  if (hamburger) {
    hamburger.addEventListener('click', openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('nav__overlay--open')) {
      closeMenu();
    }
  });
})();
