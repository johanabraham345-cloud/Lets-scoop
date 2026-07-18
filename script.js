// =========================================================
// LET'S SCOOP — site interactions
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');

    // back-to-top visibility
    if (window.scrollY > 600) totop.classList.add('is-visible');
    else totop.classList.remove('is-visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close mobile menu when a link is tapped
  document.querySelectorAll('#navMobile a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Back to top ---------- */
  const totop = document.getElementById('totop');
  totop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Scroll-reveal on section content ---------- */
  const revealTargets = document.querySelectorAll(
    '.about__text, .about__media, .menu-card, .gallery__item, .order-card, .visit__info, .visit__map, .section__head'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => io.observe(el));

  /* ---------- Stagger menu cards / gallery items slightly ---------- */
  document.querySelectorAll('.menu-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 60}ms`;
  });
  document.querySelectorAll('.order-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });

});
