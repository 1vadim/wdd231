export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

export function loadFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return null;
  }
}

export function setupModal({ modalId, openBtnId, closeBtnClass }) {
  const modal = document.getElementById(modalId);
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = modal.querySelector(`.${closeBtnClass}`);

  if (!modal || !openBtn || !closeBtn) {
    console.warn('Modal or buttons not found for setupModal');
    return;
  }

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    openBtn.focus();
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
