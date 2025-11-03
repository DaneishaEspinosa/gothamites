const toggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav ul');
const iconSpan = toggleButton.querySelector('.icon');

// Toggle menu open/close
toggleButton.addEventListener('click', () => {
  const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('open');

  if (!expanded) {
    toggleButton.setAttribute('aria-label', 'Close navigation menu');
    iconSpan.textContent = '✖';
  } else {
    toggleButton.setAttribute('aria-label', 'Open navigation menu');
    iconSpan.textContent = '☰';
  }
});

// Auto-close when focus leaves nav
document.addEventListener('focusin', (event) => {
  if (!navList.classList.contains('open')) return;

  const isInsideNav = navList.contains(event.target) || toggleButton.contains(event.target);
  if (!isInsideNav) {
    navList.classList.remove('open');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Open navigation menu');
    iconSpan.textContent = '☰';
  }
});