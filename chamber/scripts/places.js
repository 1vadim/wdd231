import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector("#allplaces")


async function  displayPlaces(places) {
  places.forEach(element => {
const thecard = document.createElement('div')

const photo = document.createElement('img')
photo.src = `images/${element.image}`
photo.alt = element.name 
thecard.appendChild(photo)

const title = document.createElement('h2')
title.innerText = element.name
thecard.appendChild(title)

const address = document.createElement('address')
address.innerText = element.address
thecard.appendChild(address)

const desc = document.createElement('p')
desc.innerText = element.description
thecard.appendChild(desc)

showHere.appendChild(thecard)
  });
}

displayPlaces(places)

const messageBox = document.getElementById('visitMessage');
    const messageText = document.getElementById('visitText');
    const lastVisit = localStorage.getItem('lastVisit');
    const closeBtn = document.getElementById('closeBtn');
    const now = Date.now();

    closeBtn.addEventListener("click", () => {
    messageBox.style.display = 'none';
  });

    function showMessage(text) {
      messageText.textContent = text;
      messageBox.style.display = 'block';
    }

  if (!lastVisit) {
      showMessage("Welcome! Let us know if you have any questions.");
    } else {
      const msInDay = 1000 * 60 * 60 * 24;
      const daysPassed = Math.floor((now - Number(lastVisit)) / msInDay);

      if (daysPassed < 1) {
        showMessage("Back so soon! Awesome!");
      } else if (daysPassed === 1) {
        showMessage("You last visited 1 day ago.");
      } else {
        showMessage(`You last visited ${daysPassed} days ago.`);
      }
    }

    localStorage.setItem('lastVisit', now.toString());