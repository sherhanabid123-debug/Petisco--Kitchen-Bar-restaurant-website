export function initGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer) return;

  // Gallery Data
  const galleryItems = [
    { id: 1, title: 'Interior Vibe', image: '/src/assets/images/interior-1.jpg' },
    { id: 2, title: 'Bar Atmosphere', image: '/src/assets/images/bar.jpg' },
    { id: 3, title: 'Signature Cocktail', image: '/src/assets/images/cocktail.jpg' },
    { id: 4, title: 'The Space', image: '/src/assets/images/bar-detail.jpg' },
    { id: 5, title: 'Plated Dish', image: '/src/assets/images/food.jpg' },
    { id: 6, title: 'Evening Light', image: '/src/assets/images/hero.jpg' }
  ];

  // Render Grid
  galleryContainer.innerHTML = galleryItems.map(item => `
    <div class="gallery-item fade-in-up" onclick="openLightbox('${item.title}', '${item.image}')">
      <div class="gallery-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
      <div class="gallery-overlay">
        <span>${item.title}</span>
      </div>
    </div>
  `).join('');

  // Lightbox Logic
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <div class="lightbox-content">
      <div id="lightbox-placeholder" style="width: 80vw; height: 80vh; display: flex; align-items: center; justify-content: center;">
         <h2 id="lightbox-title" style="color: var(--color-accent); display:none;"></h2>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const closeBtn = lightbox.querySelector('.lightbox-close');
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  window.openLightbox = (title, imageSrc) => {
    const titleEl = document.getElementById('lightbox-title');
    const placeholder = document.getElementById('lightbox-placeholder');
    if (titleEl) titleEl.textContent = title;

    if (placeholder) {
      placeholder.innerHTML = `<img src="${imageSrc}" alt="${title}" style="max-width: 100%; max-height: 100%; object-fit: contain; box-shadow: 0 0 20px rgba(0,0,0,0.5);">`;
    }

    lightbox.classList.add('active');
  };
}
