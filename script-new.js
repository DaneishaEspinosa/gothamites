(function () {
  const toggleButton = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav ul');
  if (!toggleButton || !navList) return;

  const iconSpan = toggleButton.querySelector('.icon');

  function openMenu() {
    toggleButton.setAttribute('aria-expanded', 'true');
    toggleButton.setAttribute('aria-label', 'Close navigation menu');
    navList.classList.add('open');
    if (iconSpan) iconSpan.textContent = '✖';
  }

  function closeMenu() {
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Open navigation menu');
    navList.classList.remove('open');
    if (iconSpan) iconSpan.textContent = '☰';
  }

  // Toggle menu open/close
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navList.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!navList.classList.contains('open')) return;
    const clickedInside = nav.contains(e.target) || toggleButton.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Keep state consistent on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) closeMenu();
  });
})();
