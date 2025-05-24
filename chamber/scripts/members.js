async function fetchSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();

    const eligible = data.members.filter((m) => m.level === 2 || m.level === 3);

    const shuffled = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector(".spotlight-container");

    container.innerHTML = shuffled
      .map(
        (member) => `
      <section class="spotlight-card">
        <img src="${member.image}" alt="${member.name} logo" />
        <h3>${member.name}</h3>
        <p>${member["phone-number"]}</p>
        <p>${member.address}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><em>Membership Level: ${member.level}</em></p>
      </section>
    `
      )
      .join("");
  } catch (err) {
    console.error("Spotlight fetch error:", err);
  }
}

fetchSpotlights();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", showGrid);

function showGrid() {
  display.classList.add("grid");
  display.classList.remove("list");
}

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
