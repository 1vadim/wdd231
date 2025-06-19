import { loadEvents } from "./events.js";
import { setupEventModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("open");
    });
  }

  loadEvents("event-list");

  setupEventModal("event-modal", "event-list");
});
