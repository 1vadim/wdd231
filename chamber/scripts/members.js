const url = "data/members.json";
const cards = document.querySelector(".cards-wrapper");

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let image = document.createElement("img");
    let Name = document.createElement("h2");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let website = document.createElement("a");
    let mLevel = document.createElement("p");

    Name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phoneNumber.textContent = member["phone-number"];
    website.textContent = `${member.website}`;
    mLevel.textContent = "membership level: " + member["membership-level"];

    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Logo of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "140");
    image.setAttribute("height", "140");
    website.setAttribute("href", member.website)

    card.appendChild(image);
    card.appendChild(Name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(mLevel);

    cards.appendChild(card);
  });
};

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

getMemberData();

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
