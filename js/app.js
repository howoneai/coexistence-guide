// Co-Existence Book Guide - Interactions
document.addEventListener('DOMContentLoaded', () => {
  // --- Reading progress bar ---
  const bar = document.getElementById('progress-bar');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (bar) bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Scroll spy for TOC links ---
  const targets = Array.from(document.querySelectorAll('.section-anchor'));
  const links = Array.from(document.querySelectorAll('.toc-link'));
  const linkMap = new Map();
  links.forEach(l => {
    const id = (l.getAttribute('href') || '').replace('#', '');
    if (id) linkMap.set(id, l);
  });
  const spy = () => {
    const top = window.scrollY + 130;
    let current = null;
    for (const t of targets) {
      if (t.getBoundingClientRect().top + window.scrollY <= top) current = t;
    }
    links.forEach(l => l.classList.remove('active'));
    if (current && linkMap.has(current.id)) linkMap.get(current.id).classList.add('active');
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  // --- Mobile TOC drawer ---
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.btn-toc-toggle');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
    sidebar.addEventListener('click', (e) => {
      if (e.target.closest('.toc-link') && window.innerWidth <= 1080) {
        sidebar.classList.remove('open');
      }
    });
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1080 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && e.target !== toggleBtn) sidebar.classList.remove('open');
      }
    });
  }

  // --- Question accordion cards ---
  document.querySelectorAll('.q-card').forEach(card => {
    const head = card.querySelector('.q-head');
    if (!head) return;
    head.addEventListener('click', () => card.classList.toggle('open'));
  });

  // --- Image lightbox ---
  const lb = document.querySelector('.lightbox');
  const lbImg = lb ? lb.querySelector('img') : null;
  document.querySelectorAll('.fig img, .hero-cover').forEach(img => {
    img.addEventListener('click', () => {
      if (!lb || !lbImg) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  if (lb) {
    lb.addEventListener('click', () => {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // --- Back to top button ---
  const btt = document.querySelector('.back-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 900) btt.classList.add('visible');
      else btt.classList.remove('visible');
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
