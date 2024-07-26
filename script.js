let button = document.querySelector(".main__button button");
let modal = document.querySelector(".modal");
let modalCloseButton = document.querySelector(".modal__close");

button.addEventListener("click", () => {
	modal.style.display = "block";
});

modalCloseButton.addEventListener("click", () => {
	modal.style.display = "none";
});
