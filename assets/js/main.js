/* ============================================================
   Portfolio — Theme Toggle, Mobile Menu, Scroll Reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // === Theme Toggle ===
  const themeBtn = document.getElementById('theme-btn');
  const html = document.documentElement;
  const KEY = 'tk-portfolio-theme';

  // Load saved theme or default to dark
  const saved = localStorage.getItem(KEY);
  if (saved) {
    html.classList.toggle('dark', saved === 'dark');
  } else {
    html.classList.add('dark');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem(KEY, isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
    });

    // Set initial icon
    themeBtn.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
  }

  // === Mobile Menu ===
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // === Navbar shadow on scroll ===
  const nav = document.querySelector('.nav-bar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // === Scroll Reveal (IntersectionObserver) ===
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  // === Identity Tabs (Translator / Vibe-Coder) ===
  const tabs = document.querySelectorAll('.identity-tab');
  const panels = {
    translation: document.getElementById('panel-translation'),
    coder: document.getElementById('panel-coder'),
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      if (!target || !panels[target]) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      Object.values(panels).forEach(p => { if (p) p.classList.remove('active'); });
      panels[target].classList.add('active');
    });
  });

  // === Smooth scroll for nav links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // === Contact Form (Netlify AJAX) ===
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      try {
        const data = new FormData(contactForm);
        data.append('form-name', 'contact');
        await fetch('/', { method: 'POST', body: new URLSearchParams(data) });
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Message sent!';
        btn.style.background = 'var(--green)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 4000);
      } catch {
        btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed — email me directly';
        btn.style.background = 'var(--red)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
          btn.disabled = false;
        }, 5000);
      }
    });
  }
});
