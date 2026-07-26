function extractTag(description) {
  const match = description.match(/\(([^)]+)\)\s*$/);
  if (!match) return { text: description, tag: null };
  return { text: description.replace(match[0], '').trim(), tag: match[1] };
}

function renderItems(category) {
  return category.items.map((item, i) => {
    const { text, tag } = extractTag(item.description);
    return `
      <li class="menu-row fade-in-up" style="animation-delay:${i * 60}ms">
        <div class="menu-row-top">
          <span class="menu-name">${item.name}</span>
          <span class="menu-leader" aria-hidden="true"></span>
          <span class="menu-price">${item.price}</span>
        </div>
        <div class="menu-row-bottom">
          <p class="menu-desc">${text}</p>
          ${tag ? `<span class="menu-tag">${tag}</span>` : ''}
        </div>
      </li>
    `;
  }).join('');
}

export function renderMenu(data) {
  const container = document.getElementById('menu-container');
  if (!container) return;

  const keys = Object.keys(data).filter(k => data[k] && data[k].items && data[k].items.length);
  if (!keys.length) return;

  container.innerHTML = `
    <div class="menu-tabs" role="tablist">
      ${keys.map((k, i) => `
        <button class="menu-tab${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}" data-key="${k}">
          ${data[k].title}
        </button>
      `).join('')}
    </div>
    <ul class="menu-list" id="menu-list"></ul>
  `;

  const list = container.querySelector('#menu-list');
  const tabs = container.querySelectorAll('.menu-tab');

  function showCategory(key) {
    list.innerHTML = renderItems(data[key]);
    tabs.forEach(t => {
      const isActive = t.dataset.key === key;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showCategory(tab.dataset.key));
  });

  showCategory(keys[0]);
}
