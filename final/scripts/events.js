// events.js

import { saveToLocalStorage, loadFromLocalStorage } from './utils.js';

const EVENTS_URL = 'data/events.json';

export async function loadEvents(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch(EVENTS_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const events = await response.json();

    // Save events to localStorage (example of persistence)
    saveToLocalStorage('neighborEvents', events);

    // Use map to create HTML strings
    const eventsHTML = events.map(event => `
      <article class="event-card" tabindex="0" data-id="${event.id}">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button class="details-btn" aria-label="View details for ${event.title}" data-id="${event.id}">More Info</button>
      </article>
    `).join('');

    container.innerHTML = eventsHTML;

  } catch (error) {
    container.innerHTML = '<p class="error">Failed to load events. Please try again later.</p>';
    console.error('Error loading events:', error);
  }
}

// Helper to get event by ID from localStorage
export function getEventById(id) {
  const events = loadFromLocalStorage('neighborEvents') || [];
  return events.find(ev => ev.id === id);
}
