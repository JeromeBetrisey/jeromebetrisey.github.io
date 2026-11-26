/* Tiny renderer for the academic website. No dependencies. */
(() => {
  'use strict';
  const data = window.SITE;
  if (!data) return;
  const byId = id => document.getElementById(id);
  const isPublications = document.body.dataset.page === 'publications';
  const node = (tag, className = '', value = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== '') el.textContent = String(value);
    return el;
  };
  const appendText = (parent, tag, text, className = '') => {
    if (text == null || text === '') return null;
    const el = node(tag, className, text);
    parent.appendChild(el);
    return el;
  };
  const urlOK = url => typeof url === 'string' && /^(https?:\/\/|mailto:|assets\/|files\/)/i.test(url);
  const link = (label, url, cls = '') => {
    if (!urlOK(url)) return null;
    const a = node('a', cls, label);
    a.href = url;
    if (/^https?:\/\//i.test(url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  /* Email can be a plain string or { user, domain } (kept apart in the files to deter spam robots) */
  const emailHref = () => {
    const e = data.email;
    if (!e) return '';
    const address = typeof e === 'string' ? e : (e.user && e.domain ? e.user + '\u0040' + e.domain : '');
    return address ? 'mailto:' + address : '';
  };
  /* Colour theme. The site opens in `theme` from content.js. A discreet ✦ at the top left of the menu bar lets a visitor
     cycle through the palettes; their choice is remembered in their own browser only. The head of each
     HTML page applies the remembered palette before the page is drawn, to avoid a flash of colour. */
  const THEMES = [
    { id: 'encre', label: 'Encre & papier' },
    { id: 'ardoise', label: 'Ardoise' },
    { id: 'sarcelle', label: 'Sarcelle' },
    { id: 'etoile', label: "Lumière d'étoile" },
    { id: 'nuit', label: 'Nuit' },
    { id: 'foret', label: 'Forêt' },
    { id: 'aurore', label: 'Aurore' },
    { id: 'graphite', label: 'Graphite' },
    { id: 'nebuleuse', label: 'Nébuleuse' }
  ];
  const known = id => THEMES.some(t => t.id === id);
  const storedTheme = () => { try { const t = localStorage.getItem('site-theme'); return known(t) ? t : null; } catch (e) { return null; } };
  const applyTheme = id => {
    if (!id || id === 'ardoise') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', id);
  };
  let currentTheme = storedTheme() || (known(data.theme) ? data.theme : 'ardoise');
  applyTheme(currentTheme);
  function paletteButton() {
    const wrap = node('span', 'palette-toggle-wrap');
    const name = node('span', 'palette-name'); name.setAttribute('aria-live', 'polite');
    const b = node('button', 'palette-toggle', '✦'); b.type = 'button';
    const describe = () => { const t = THEMES.find(x => x.id === currentTheme); b.title = 'Colours: ' + t.label + ' (click to change)'; b.setAttribute('aria-label', b.title); };
    let timer;
    b.addEventListener('click', () => {
      const i = THEMES.findIndex(t => t.id === currentTheme);
      currentTheme = THEMES[(i + 1) % THEMES.length].id;
      applyTheme(currentTheme);
      try { localStorage.setItem('site-theme', currentTheme); } catch (e) {}
      describe();
      name.textContent = THEMES.find(t => t.id === currentTheme).label;
      name.classList.add('show'); clearTimeout(timer);
      timer = setTimeout(() => name.classList.remove('show'), 1800);
    });
    describe();
    wrap.append(b, name);
    return wrap;
  }
  const anchorTo = id => (isPublications ? 'index.html' : '') + '#' + id;
  const sections = [
    { label: 'Home', id: 'home' },
    { label: 'Research', id: 'research' },
    { label: 'CV', id: 'cv' },
    { label: 'Publications', href: 'publications.html' },
    ...(data.showMedia ? [{ label: 'Media', id: 'media' }] : [])
  ];

  function addNav(target) {
    const head = byId('site-header');
    if (!head) return;
    const wrap = node('div', 'header-content wrap');
    const nav = node('nav', 'nav-links');
    nav.setAttribute('aria-label', 'Main navigation');
    sections.forEach(item => {
      const a = node('a', 'nav-link', item.label);
      a.href = item.href || anchorTo(item.id);
      a.dataset.section = item.id || 'publications';
      nav.appendChild(a);
    });
    wrap.append(paletteButton(), nav); head.appendChild(wrap);
  }

  function fillHome() {
    byId('hero-title').textContent = data.name || 'Your Name';
    (data.affiliation || []).forEach((line, i) => {
      if (i) byId('hero-role').appendChild(node('br'));
      byId('hero-role').append(line);
    });
    byId('hero-tagline').textContent = data.home.tagline || '';
    byId('about-title').textContent = data.home.aboutTitle || 'About me';
    (data.home.aboutParagraphs || []).forEach(p => appendText(byId('about-paragraphs'), 'p', p));
    (data.home.focus || []).forEach(term => appendText(byId('focus-list'), 'li', term));
    if (urlOK(data.portrait)) {
      const holder = byId('portrait-holder');
      holder.replaceChildren();
      const img = node('img'); img.src = data.portrait; img.alt = 'Portrait of ' + (data.name || 'the researcher'); img.loading = 'eager';
      holder.appendChild(img); holder.classList.add('has-image');
    }
    [['Email', emailHref()],['ORCID', data.links.orcid],['NASA SciX', data.links.ads],['Google Scholar', data.links.scholar],['GitHub', data.links.github]].forEach(([name, href]) => {
      const a = link(name + ' ↗', href, 'subtle-link'); if (a) byId('about-links').appendChild(a);
    });

    byId('research-intro').textContent = data.researchIntro || '';
    (data.research || []).forEach((entry, index) => {
      const article = node('article', 'research-item');
      const figure = node('figure', 'research-art' + (entry.imageTall ? ' is-tall' : ''));
      if (urlOK(entry.image)) {
        const img = node('img'); img.src = entry.image; img.alt = entry.imageAlt || entry.title || 'Research image'; img.loading = 'lazy';
        figure.appendChild(img);
      }
      if (entry.caption) appendText(figure, 'figcaption', entry.caption);
      const text = node('div', 'research-copy');
      appendText(text, 'h3', entry.title || 'Research topic');
      (entry.paragraphs || []).forEach(p => appendText(text, 'p', p));
      article.append(figure, text); byId('research-list').appendChild(article);
    });

    byId('cv-intro').textContent = data.cv.introduction || '';
    function renderCV(items, target) {
      (items || []).forEach(item => {
        const block = node('article', 'cv-entry');
        appendText(block, 'span', item.dates, 'cv-dates');
        const text = node('div');
        appendText(text, 'h4', item.title);
        appendText(text, 'p', item.organisation);
        block.appendChild(text); target.appendChild(block);
      });
    }
    renderCV(data.cv.appointments, byId('cv-appointments'));
    renderCV(data.cv.education, byId('cv-education'));
    if (data.showMedia) {
      byId('media').hidden = false;
      const records = data.media || [];
      if (!records.length) appendText(byId('media-list'), 'p', 'Media appearances and public talks will be listed here.');
      records.forEach(item => {
        const row = node('div', 'media-entry');
        appendText(row, 'span', item.year, 'publication-year');
        const body = node('div');
        const a = link(item.title, item.url, 'text-link');
        if (a) body.appendChild(a); else appendText(body, 'h3', item.title);
        appendText(body, 'p', item.source, 'publication-meta');
        row.appendChild(body); byId('media-list').appendChild(row);
      });
    }
  }

  function addPublication(p, target) {
    const row = node('article', 'publication-row');
    appendText(row, 'div', p.year || '', 'publication-year');
    const body = node('div', 'publication-body');
    appendText(body, 'h3', p.title || 'Publication title');
    if (p.authors) {
      const authors = node('p', 'publication-authors');
      const me = data.authorName || '';
      const idx = me ? p.authors.indexOf(me) : -1;
      if (idx >= 0) {
        authors.append(p.authors.slice(0, idx), node('strong', '', me), p.authors.slice(idx + me.length));
      } else authors.textContent = p.authors;
      body.appendChild(authors);
    }
    appendText(body, 'p', p.journal || '', 'publication-meta');
    const links = node('div', 'publication-links');
    (p.links || []).forEach(l => { const a = link(l.label + ' ↗', l.url, 'text-link'); if (a) links.appendChild(a); });
    if (links.childElementCount) body.appendChild(links);
    row.appendChild(body); target.appendChild(row);
  }

  function fillPublications() {
    (data.publications || []).forEach(p => addPublication(p, byId('all-publications')));
    (data.proceedings || []).forEach(p => addPublication(p, byId('proceedings')));
    if (urlOK(data.links.ads)) {
      const ads = byId('ads-more'); ads.hidden = false; ads.href = data.links.ads;
      ads.target = '_blank'; ads.rel = 'noopener noreferrer';
    }
  }

  function addFooter() {
    const f = byId('site-footer'); if (!f) return;
    const wrap = node('div', 'wrap footer-inner');
    const left = node('div');
    appendText(left, 'p', data.name || 'Your Name', 'footer-name');
    appendText(left, 'p', data.institution || '', 'footer-institution');
    wrap.appendChild(left);
    const right = node('div', 'footer-links');
    [['Email', emailHref()],['ORCID',data.links.orcid],['NASA SciX',data.links.ads],['GitHub',data.links.github]].forEach(([name,href]) => {
      const a = link(name,href); if (a) right.appendChild(a);
    });
    wrap.appendChild(right); f.appendChild(wrap);
    const lower = node('div','wrap footer-bottom');
    appendText(lower,'span','© '+new Date().getFullYear()+' '+(data.name||'Your Name'));
    f.appendChild(lower);
  }

  function setActiveNav() {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const active = isPublications ? 'publications' : (() => {
      const top = window.scrollY + document.querySelector('.site-header').offsetHeight + 120;
      let selected = 'home';
      ['home','research','cv',...(data.showMedia ? ['media'] : [])].forEach(id => {
        const sec = byId(id); if (sec && sec.offsetTop <= top) selected = id;
      });
      return selected;
    })();
    links.forEach(a => {
      const current = a.dataset.section === active;
      a.classList.toggle('active',current);
      if (current) a.setAttribute('aria-current', isPublications ? 'page' : 'location');
      else a.removeAttribute('aria-current');
    });
  }

  addNav();
  if (isPublications) fillPublications(); else fillHome();
  addFooter();
  document.title = (isPublications ? 'Publications — ' : '') + (data.name || 'Academic website');
  setActiveNav();
  /* On tall screens the last section (CV, or Media when enabled) is shorter than the space below the
     menu bar, so the page cannot scroll far enough to bring it to the top when its tab is clicked.
     Give it just enough minimum height to fill the window above the footer. */
  function fitLastSection() {
    const visible = Array.from(document.querySelectorAll('main > section')).filter(s => !s.hidden);
    const last = visible[visible.length - 1];
    if (!last) return;
    const header = document.querySelector('.site-header').offsetHeight;
    const footer = byId('site-footer') ? byId('site-footer').offsetHeight : 0;
    last.style.minHeight = Math.max(0, window.innerHeight - header - footer) + 'px';
  }

  if (!isPublications) {
    fitLastSection();
    window.addEventListener('resize', fitLastSection);
    window.addEventListener('scroll', setActiveNav, { passive: true });
    window.addEventListener('hashchange', setActiveNav);
    window.addEventListener('load', () => {
      if (location.hash) {
        const target = document.getElementById(location.hash.substring(1));
        if (target && !target.hidden) target.scrollIntoView();
      }
      setActiveNav();
    });
  }
})();
