const openButton = document.querySelectorAll(
  "#openButton1, #openButton2, #openButton3"
);
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

// openButton.addEventListener("click", () =>
//   {dialogBox.showModal();}
// );

openButton.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id;
    if (buttonId === "openButton1") {
      dialogBoxText.textContent = "One apple contains 95 calories";
    } else if (buttonId === "openButton2") {
      dialogBoxText.textContent = "One orange contains 95 calories";
    } else if (buttonId === "openButton3") {
      dialogBoxText.textContent = "One banana contains 95 calories";
    }
    dialogBox.showModal();
  });
});

closeButton.addEventListener("click", () => {
  dialogBox.close();
});
