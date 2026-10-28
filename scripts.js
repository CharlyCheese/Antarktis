/* Progressive enhancement: Inhalte und Anker funktionieren auch ohne JavaScript. */
(() => {
  'use strict';

  // Derselbe Eisbelag wie im Einstieg, als wiederverwendbares SVG-Dekor.
  // Die drei festen Bruchkonturen ändern sich nicht bei jedem Seitenaufruf.
  function decorateIceButtons() {
    const shapes = [
      {
        "width": 300,
        "height": 64,
        "outer": "M4.0 3.0 L14.0 1.0 L32.3 1.1 L51.0 1.4 L72.8 2.2 L89.0 2.1 L111.6 4.2 L130.0 3.9 L151.3 3.5 L175.8 4.5 L193.3 4.1 L209.6 2.8 L230.4 4.4 L250.5 2.8 L273.3 3.0 L286.8 2.5 L295.0 1.0 L299.0 7.0 L297.0 24.3 L300.0 34.6 L296.0 59.0 L287.0 60.6 L268.5 59.6 L250.2 62.7 L235.2 59.0 L220.3 60.8 L194.6 62.6 L178.7 61.4 L152.8 59.3 L131.5 59.2 L113.0 61.5 L94.0 60.8 L74.7 60.4 L54.5 60.6 L38.5 59.6 L11.7 60.8 L3.0 61.0 L1.0 46.1 L4.0 30.7 L0.0 18.6Z",
        "inner": "M5.9 4.8 L15.8 2.9 L33.9 3.0 L52.4 3.3 L73.8 4.1 L89.8 4.0 L112.1 5.9 L130.2 5.6 L151.3 5.3 L175.4 6.3 L192.7 5.9 L208.8 4.7 L229.3 6.2 L249.2 4.7 L271.7 4.8 L285.0 4.4 L293.1 2.9 L297.0 8.6 L295.0 24.8 L298.0 34.4 L294.1 57.3 L285.2 58.8 L266.9 57.8 L248.9 60.8 L234.0 57.3 L219.4 59.0 L194.0 60.7 L178.3 59.5 L152.8 57.6 L131.8 57.5 L113.5 59.7 L94.7 59.0 L75.7 58.6 L55.8 58.8 L40.0 57.9 L13.5 59.0 L5.0 59.2 L3.0 45.2 L5.9 30.8 L2.0 19.4Z"
      },
      {
        "width": 120,
        "height": 44,
        "outer": "M4.0 3.0 L14.0 3.1 L38.4 2.9 L62.2 2.6 L82.6 2.5 L99.4 1.5 L115.0 1.0 L119.0 7.0 L117.0 16.7 L120.0 23.8 L116.0 39.0 L107.0 40.4 L84.5 39.3 L63.4 41.8 L42.4 42.0 L26.1 42.6 L3.0 41.0 L1.0 31.7 L4.0 21.1 L0.0 12.8Z",
        "inner": "M5.9 4.7 L15.5 4.8 L39.1 4.7 L62.1 4.4 L81.9 4.3 L98.0 3.4 L113.2 2.9 L117.0 8.4 L115.1 17.2 L118.0 23.6 L114.1 37.5 L105.4 38.8 L83.7 37.7 L63.3 40.0 L43.0 40.2 L27.2 40.8 L4.9 39.3 L3.0 30.8 L5.9 21.2 L2.0 13.6Z"
      },
      {
        "width": 120,
        "height": 44,
        "outer": "M4.0 3.0 L14.0 1.3 L32.7 3.2 L56.0 2.9 L71.6 1.8 L91.2 4.6 L110.5 4.6 L115.0 1.0 L119.0 7.0 L117.0 16.7 L120.0 23.8 L116.0 39.0 L107.0 39.2 L86.2 39.4 L69.5 42.9 L55.0 39.4 L32.7 40.4 L12.6 41.2 L3.0 41.0 L1.0 31.7 L4.0 21.1 L0.0 12.8Z",
        "inner": "M5.9 4.7 L15.5 3.2 L33.7 4.9 L56.1 4.6 L71.2 3.6 L90.1 6.2 L108.8 6.2 L113.2 2.9 L117.0 8.4 L115.1 17.2 L118.0 23.6 L114.1 37.5 L105.4 37.6 L85.3 37.8 L69.2 41.0 L55.1 37.8 L33.6 38.8 L14.2 39.5 L4.9 39.3 L3.0 30.8 L5.9 21.2 L2.0 13.6Z"
      }
    ];
    document.querySelectorAll('.ice-button, .ice-label').forEach((button, index) => {
      const shape = shapes[button.classList.contains('button') || button.classList.contains('ice-label') ? 0 : 1 + index % 2];
      const { width, height, outer, inner } = shape;
      const id = `ice-ui-${index}`;
      const padX = width > 150 ? 18 : 14;
      const padY = width > 150 ? 13 : 8;
      // Alle eingefügten Werte stammen aus festen Konturen, nicht aus Benutzereingaben.
      // Farben und Zustände stehen in styles.css; IDs sind pro Dokument eindeutig.
      button.insertAdjacentHTML('afterbegin', `
        <svg class="ice-button-art" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="${id}-texture" width="${width}" height="${height}" patternUnits="userSpaceOnUse"><image href="frontend/bilder_landschaft/eisdecke.png" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/></pattern>
            <radialGradient id="${id}-quiet"><stop class="ice-tone-quiet" offset=".55" stop-opacity=".85"/><stop class="ice-tone-quiet" offset="1" stop-opacity="0"/></radialGradient>
            <linearGradient id="${id}-light" x2=".3" y2="1"><stop class="ice-tone-light"/><stop class="ice-tone-mid" offset=".5"/><stop class="ice-tone-blue" offset="1"/></linearGradient>
            <linearGradient id="${id}-selected" x2=".3" y2="1"><stop class="ice-tone-blue" stop-opacity=".5"/><stop class="ice-tone-mid" offset=".5" stop-opacity=".2"/><stop class="ice-tone-light" offset="1" stop-opacity=".5"/></linearGradient>
            <linearGradient id="${id}-beam"><stop class="ice-tone-beam" stop-opacity="0"/><stop class="ice-tone-beam-center" offset=".5" stop-opacity=".7"/><stop class="ice-tone-beam" offset="1" stop-opacity="0"/></linearGradient>
            <clipPath id="${id}-clip"><path d="${outer}"/></clipPath>
            <mask id="${id}-rim"><rect width="${width}" height="${height}" fill="white"/><rect x="${padX}" y="${padY}" width="${width - 2 * padX}" height="${height - 2 * padY}" rx="3" fill="black"/></mask>
          </defs>
          <path class="ice-ui-base" d="${outer}"/>
          <path d="${inner}" fill="url(#${id}-texture)"/>
          <path class="ice-ui-tint" d="${inner}" fill="url(#${id}-light)"/>
          <ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * .49}" ry="${height * .53}" fill="url(#${id}-quiet)" clip-path="url(#${id}-clip)"/>
          <path class="ice-ui-selected" d="${inner}" fill="url(#${id}-selected)"/>
          <g clip-path="url(#${id}-clip)" mask="url(#${id}-rim)">
            <path class="ice-ui-inner-edge" d="${inner}"/>
            <rect class="ice-ui-glint" x="-${width}" width="${width * .6}" height="${height}" fill="url(#${id}-beam)"/>
          </g>
          <path class="ice-ui-lit-edge" d="${outer}"/>
        </svg>`);
      button.classList.add('ice-decorated');
      // Labels sind Teil des Kartenlinks und erhalten keine eigenen Aktionen.
      if (!button.classList.contains('ice-button')) return;
      let lightTimer;
      button.addEventListener('click', () => {
        // Ergänzt den Lichtreflex für Touch, ohne Navigation oder Filter zu verzögern.
        window.clearTimeout(lightTimer);
        button.classList.add('ice-lit');
        lightTimer = window.setTimeout(() => button.classList.remove('ice-lit'), 900);
      });
    });
  }
  decorateIceButtons();

  // Optionaler Einstieg: index.html selbst bleibt jederzeit direkt erreichbar.
  const iceTrigger = document.querySelector('.ice-trigger');
  if (iceTrigger) {
    const seenKey = 'antarktis.openingSeen';
    const destination = iceTrigger.href;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let opening = false;
    // Lokale Dateien können ohne Sitzungsspeicher funktionieren; nur das
    // Merken des Besuchs entfällt dann. Der native Link bleibt immer nutzbar.
    try {
      if (sessionStorage.getItem(seenKey) === 'true') {
        window.location.replace(destination);
        return;
      }
    } catch { /* Sitzungsspeicher ist optional. */ }
    iceTrigger.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (opening) return;
      opening = true;
      document.querySelector('#opening-status').textContent = 'Die Antarktis öffnet sich.';
      document.body.classList.add('is-opening');
      // CSS: 1,05 s Bewegung nach 0,08 s Verzögerung. Der Timer navigiert
      // auch dann zuverlässig, wenn transitionend nicht ausgelöst wird.
      window.setTimeout(() => {
        try { sessionStorage.setItem(seenKey, 'true'); } catch { /* Optional. */ }
        window.location.replace(destination);
      }, reducedMotion.matches ? 160 : 1200);
    });
    return;
  }

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

  // Nur Anker dieser Seite verfolgen. Seitenlinks behalten aria-current="page".
  const navLinks = [...document.querySelectorAll('.navigation a')]
    .filter((link) => link.getAttribute('href').startsWith('#'));
  if (!navLinks.length) return;
  const sections = navLinks.map((link) => document.getElementById(link.hash.slice(1)));
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
