const url = "data/members.json";
const cards = document.querySelector("#cards");

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let image = document.createElement("img");
    let Name = document.createElement("h2");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let website = document.createElement("p");
    let mLevel = document.createElement("p");

    Name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phoneNumber.textContent = member["phone-number"];
    website.textContent = `${member.website}`;
    mLevel.textContent = member["membership-level"];

    image.setAttribute("src", member.image);
    image.setAttribute("alt", `Logo of ${member.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "140");
    image.setAttribute("height", "140");

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
