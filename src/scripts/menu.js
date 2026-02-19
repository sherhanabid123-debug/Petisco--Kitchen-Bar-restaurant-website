export function renderMenu(data) {
  const container = document.getElementById('menu-container');
  if (!container) return;

  const categories = Object.keys(data);

  container.innerHTML = categories.map(key => {
    const category = data[key];
    if (!category || !category.items || category.items.length === 0) return '';

    return `
      <div class="menu-category fade-in-up">
        <h3>${category.title}</h3>
        <div class="menu-grid">
          ${category.items.map(item => `
            <div class="menu-item">
              <div class="menu-header">
                <span class="menu-name">${item.name}</span>
                <span class="menu-price">${item.price}</span>
              </div>
              <p class="menu-desc">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}
