/* Progressive enhancement: Inhalte und Anker funktionieren auch ohne JavaScript. */
(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  const mobileQuery = window.matchMedia('(max-width: 760px)');

  // Ein Zustand steuert Darstellung und die Information für Screenreader.
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }

  if (menuButton && navigation) {
    document.documentElement.classList.add('js');
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) setMenu(false);
    });
    mobileQuery.addEventListener('change', () => setMenu(false));
  }

  // Filter lesen die Kategorie direkt aus der jeweiligen Karte.
  const filters = document.querySelector('.animal-filters');
  const cards = [...document.querySelectorAll('.animal-card')];
  const filterStatus = document.querySelector('#filter-status');
  if (filters && cards.length && filterStatus) {
    filters.hidden = false;
    filters.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      const selected = button.dataset.filter;
      filters.querySelectorAll('button').forEach((filter) => {
        filter.setAttribute('aria-pressed', String(filter === button));
      });
      cards.forEach((card) => {
        card.hidden = selected !== 'alle' && card.dataset.category !== selected;
      });
      const count = cards.filter((card) => !card.hidden).length;
      filterStatus.textContent = `${count} ${count === 1 ? 'Tiergruppe wird' : 'Tiergruppen werden'} angezeigt.`;
    });
  }

  // Aktueller Abschnitt: auf Scrollen, Anker und Größenänderungen reagieren.
  const navLinks = [...document.querySelectorAll('.navigation a')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  function updateNavigation() {
    const marker = window.innerHeight * 0.35;
    let current = 0;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= marker) current = index;
    });
    navLinks.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function scheduleNavigation() {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener('scroll', scheduleNavigation, { passive: true });
  window.addEventListener('resize', scheduleNavigation);
  window.addEventListener('load', updateNavigation);
  updateNavigation();
})();
