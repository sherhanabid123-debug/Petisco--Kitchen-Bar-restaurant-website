import '../styles/global.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/animations.css';
import '../styles/menu.css';
import '../styles/gallery.css';
import '../styles/floating.css';
import { initUI } from './ui.js';
import { menuData } from './data.js';
import { renderMenu } from './menu.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderMenu(menuData);
  initGallery();
  console.log('Petisco Website Initialized');
});
