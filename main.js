document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded');

  const burger = document.querySelector('.burger');
  const overlay = document.getElementById('navOverlay');
  const mobileNav = document.getElementById('mobileNav');

  if (!burger || !overlay || !mobileNav) {
    console.log('Burger elements missing', { burger, overlay, mobileNav });
    return;
  }

  function openMenu(){
    document.body.classList.add('menu-open');
    burger.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded','false');
  }
  function toggleMenu(){
    document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});