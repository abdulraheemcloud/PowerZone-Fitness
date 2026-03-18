/* ============================================================
   PowerZone Fitness – script.js
   Designed by RNS Digital | rnsdigital.co.in
   ============================================================ */

'use strict';

/* ── NAVBAR: Scroll shadow + Active link ───────────────────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  // Sticky background
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link based on scroll position
  let currentSection = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      currentSection = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load


/* ── MOBILE HAMBURGER ──────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
  // Prevent body scroll when menu open
  document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
});

// Close menu on nav link click
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navLinksEl.classList.contains('open')) {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
    document.body.style.overflow = '';
  }
});


/* ── SMOOTH SCROLL (polyfill for older Safari) ─────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ── SCROLL REVEAL ─────────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.service-card, .plan-card, .gallery-item, .contact-item, .contact-hours, .section-header'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger children of a grid parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((sib, i) => {
          if (sib === entry.target) {
            setTimeout(() => sib.classList.add('visible'), i * 90);
          }
        });
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));


/* ── HERO PLACEHOLDER (when image is missing) ──────────────── */
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  heroImg.addEventListener('error', () => {
    heroImg.style.display = 'none';
    heroImg.closest('.hero-bg').style.background =
      'linear-gradient(135deg, #1a0505 0%, #0f0f0f 50%, #0a0a0a 100%)';
  });
}

/* ── GALLERY PLACEHOLDER (when images are missing) ─────────── */
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('error', () => {
    img.parentElement.style.background =
      'linear-gradient(135deg, #1a1a1a, #0f0f0f)';
    img.style.display = 'none';
  });
});
