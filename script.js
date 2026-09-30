const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuToggle && navigation) {
  // Without JavaScript the links remain visible on every screen size.
  menuToggle.hidden = false;
  const setMenuOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.querySelector('span').textContent = open ? '−' : '＋';
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', () => setMenuOpen(false));
}

for (const year of document.querySelectorAll('[data-year]')) {
  year.textContent = new Date().getFullYear();
}
