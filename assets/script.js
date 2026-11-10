const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.textContent = open ? '×' : '☰';
  };

  const isOpen = () => nav.classList.contains('open');

  // Toggle button
  toggle.addEventListener('click', () => {
    setOpen(!isOpen());
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      if (isOpen()) setOpen(false);
    })
  );

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (isOpen() && !nav.contains(e.target) && !toggle.contains(e.target)) {
      setOpen(false);
    }
  });
}
