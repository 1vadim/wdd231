const benefitDescriptions = {
  "NP": [
    "Access to public webinars",
    "Community support forum",
    "Listing in nonprofit directory"
  ],
  "Bronze": [
    "Includes all NP benefits",
    "Invitation to monthly networking events",
    "Basic promotional listings on the homepage"
  ],
  "Silver": [
    "Includes all Bronze benefits",
    "Priority placement in the business directory",
    "Discounts on sponsored events",
    "Quarterly advertising credits"
  ],
  "Gold": [
    "Includes all Silver benefits",
    "Personalized training sessions",
    "Premium advertising spotlights",
    "Free access to all paid webinars",
    "Feature in monthly newsletter"
  ]
};


const timestampField = document.getElementById('timestamp');
  if (timestampField) {
    const now = new Date().toISOString();
    timestampField.value = now;
  }


const myclose = document.querySelector(".modal-header button");
const mydialog = document.querySelector("#benefit-modal");
const buttons = document.querySelectorAll(".membership-cards button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.parentElement.id;
      showBenefits(level);
    });
  });


myclose.addEventListener("click", () => {
  mydialog.close();
  });

function showBenefits(level) {
  const title = document.getElementById("modal-title");
  const list = document.getElementById("modal-benefits");
  

 
    title.textContent = `${level} Membership Benefits`;
    list.innerHTML = ""; 
    benefitDescriptions[level].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    mydialog.showModal();
       
  };

