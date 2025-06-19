import { getEventById } from './events.js';

export async function setupEventModal(modalId, containerId) {
  const modal = document.getElementById(modalId);
  const container = document.getElementById(containerId);
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  const closeBtn = document.querySelector('.modal-close');

  if (!modal || !container || !modalTitle || !modalBody || !closeBtn) {
    console.log('Modal or required elements not found');
    return;
  }

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
      const eventId = Number(e.target.dataset.id);
      const event = getEventById(eventId);

      if (event) {
        modalTitle.textContent = event.title;
        modalBody.innerHTML = `
          <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
        `;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
      }
    }
  });

 function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
