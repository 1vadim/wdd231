// utils.js

// Save data to localStorage
export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

// Load data from localStorage
export function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return null;
  }
}

// Create an accessible modal and manage open/close
export function setupModal({ modalId, openBtnId, closeBtnClass }) {
  const modal = document.getElementById(modalId);
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = modal.querySelector(`.${closeBtnClass}`);

  if (!modal || !openBtn || !closeBtn) {
    console.warn('Modal or buttons not found for setupModal');
    return;
  }

  // Open modal
  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    openBtn.focus();
  }

  // Close modal on close button
  closeBtn.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
