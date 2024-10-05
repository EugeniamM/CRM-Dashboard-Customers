const menu = document.getElementById("gamburger_menu-block");

const btnMenuOpen = document.getElementById("btn-gamburger-open");
const btnMenuClose = document.getElementById("btn-gamburger-close");
// const modalBtnOpen2 = document.getElementById("btn-open-modal-2");
// const modalBtnClose = document.getElementById("btn-close-modal");

// function openModal() {
// 	modal.style.display = "flex";
// }
// function closeModal() {
// 	modal.style.display = "none";
// }
///btnMenuOpen.addEventListener("click", openModal);
// modalBtnClose.addEventListener("click", closeModal);

function toggleModal() {
	console.log("click");
	menu.classList.toggle("open");
}
btnMenuOpen.addEventListener("click", toggleModal);
btnMenuClose.addEventListener("click", toggleModal);
