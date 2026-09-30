/* Keep the section navigation useful without making content depend on JavaScript. */
(() => {
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  if (!sections.length) return;
  let scheduled = false;
  let preferred = window.location.hash;
  links.forEach(link => link.addEventListener('click', () => {
    preferred = link.hash;
    schedule();
  }));
  window.addEventListener('hashchange', () => {
    preferred = window.location.hash;
    schedule();
  });
  const update = () => {
    const offset = document.querySelector('.site-header').offsetHeight + 45;
    let current = sections[0];
    let nearest = -Infinity;
    for (const section of sections) {
      const top = section.getBoundingClientRect().top;
      if (top <= offset && top > nearest + 1) {
        current = section;
        nearest = top;
      }
    }
    // Respect the clicked section when two desktop columns share a row.
    const selected = sections.find(section => '#' + section.id === preferred);
    if (selected) {
      const rect = selected.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) current = selected;
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
