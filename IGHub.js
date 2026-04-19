// ── Detect mobile ──
const isMobile = () => window.innerWidth <= 900;

// ── Smooth scroll (desktop only) ──
let scrollTarget = window.scrollY;
let currentScroll = window.scrollY;

function smoothScroll() {
  currentScroll += (scrollTarget - currentScroll) * 0.1;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

if (!isMobile()) {
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollTarget += e.deltaY;
    scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
  }, { passive: false });

  smoothScroll();
}

// ── Header hide/show on scroll ──
let lastScrollY = window.scrollY;
const header = document.querySelector('.curved-sides-header');

window.addEventListener('scroll', () => {
  if (window.scrollY < lastScrollY) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
  lastScrollY = window.scrollY;
});

// ── Hamburger menu toggle ──
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

// ── Parallax: scaled image (desktop only) ──
window.addEventListener("scroll", () => {
  if (isMobile()) return;
  const imgOne = document.querySelector('.scaled-js');
  if (!imgOne) return;
  const speed = 0.1;
  const y = window.scrollY * speed;
  imgOne.style.transform = `translateX(${y}px) scale(${1 + y / 1000})`;
});

// ── Parallax: sliding grids (desktop only) ──
window.addEventListener("scroll", () => {
  if (isMobile()) return;
  const scrollY = window.scrollY;
  const speed = 0.4;

  const gridTop = document.querySelector('.top-grid-js');
  const gridBottom = document.querySelector('.bottom-grid-js');
  if (!gridTop || !gridBottom) return;

  gridTop.style.transform = `translateX(${-scrollY * speed}px)`;
  gridBottom.style.transform = `translateX(${scrollY * speed}px)`;
});

// ── Parallax: last section slide (desktop only) ──
window.addEventListener("scroll", () => {
  if (isMobile()) return;
  const scrollY = window.scrollY;
  const speed = -0.18;

  const lastLeft = document.querySelector('.last-white-border');
  const lastRight = document.querySelector('.last-image');
  if (!lastLeft || !lastRight) return;

  lastLeft.style.transform = `translateX(${-scrollY * speed}px)`;
  lastRight.style.transform = `translateX(${scrollY * speed}px)`;
});
