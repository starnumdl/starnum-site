/* =============================================
   STARNUM — main.js
   Scroll reveal · Nav scroll state · Mobile menu
   ============================================= */

(function () {
  'use strict';

  /* ---- NAV: scroll state ---- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ---- NAV: mobile toggle ---- */
  const toggle   = document.getElementById('navToggle');
  const mobileNav = document.getElementById('navMobile');

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---- SCROLL REVEAL ---- */
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));

  /* ---- RULE DRAW-IN (signature detail) ---- */
  const rules = document.querySelectorAll('.rule');

  const ruleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = '100%';
          ruleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  rules.forEach(rule => {
    // Only animate the full-width divider rules, not the gold accent ones
    if (!rule.classList.contains('rule--gold')) {
      rule.style.width = '0%';
      rule.style.transition = 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      ruleObserver.observe(rule);
    }
  });

})();
