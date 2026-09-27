/* =========================================================
   RUAN STUART BARBEARIA — script.js
   JavaScript puro (sem dependências externas)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header: muda de transparente para sólido ao rolar ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile (hamburger) ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fecha o menu mobile ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  /* ---------- Animações de entrada (fade-in ao rolar) ---------- */
  const faders = document.querySelectorAll('.fade-in-up');
  const appearOptions = { threshold: 0.18, rootMargin: '0px 0px -60px 0px' };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(el => appearOnScroll.observe(el));

  /* ---------- Parallax discreto no hero ---------- */
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      if (offset < window.innerHeight) {
        heroBg.style.transform = `translateY(${offset * 0.12}px)`;
      }
    }, { passive: true });
  }

  /* ---------- Lightbox da galeria ---------- */
  const galleryItems = document.querySelectorAll('.gallery__item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img');
      const alt = item.querySelector('img')?.getAttribute('alt') || '';
      lightboxImg.setAttribute('src', src);
      lightboxImg.setAttribute('alt', alt);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightboxImg.setAttribute('src', '');
    document.body.style.overflow = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

});
