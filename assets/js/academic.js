/* Keep the section navigation useful without making content depend on JavaScript. */
(() => {
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  if (!sections.length) return;
  let scheduled = false;
  const update = () => {
    const offset = document.querySelector('.site-header').offsetHeight + 45;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    links.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const schedule = () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
})();
