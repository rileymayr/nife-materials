function initHeader(opts) {
  const header = document.querySelector('header');
  if (!header) return;

  if (!opts || opts.type === 'main') {
    header.innerHTML = `
      <div class="wrap">
        <div class="header-inner">
          <div class="logomark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" opacity="0.4"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="12" x2="14.5" y2="14.5"/>
            </svg>
          </div>
          <span class="logo-text">NIFE Study Materials</span>
          <div class="header-status">
            <span class="status-pip"></span>
            <span>Study Active</span>
          </div>
        </div>
      </div>`;
  } else {
    const { back = '/', tag = '' } = opts;
    header.innerHTML = `
      <div class="wrap">
        <div class="header-inner">
          <a class="back-link" href="${back}">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M10 6H2M5 3L2 6l3 3"/>
            </svg>
            Back
          </a>
          <span class="header-tag">${tag}</span>
        </div>
      </div>`;
  }
}

function initFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-inner">
        <span>NIFE Materials — NIFE 1</span>
        <span>rileymayr</span>
      </div>
    </div>`;
}
