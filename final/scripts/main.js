// main.js

import { loadEvents } from './events.js';
import { setupEventModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Responsive hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('open');
    });
  }


  loadEvents('event-list');
  

  // Setup event modal for event details
  setupEventModal('event-modal', 'event-list');
});
