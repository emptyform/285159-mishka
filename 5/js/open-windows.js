var menu = document.querySelector(".page-header");
var toggle = document.querySelector(".page-header__toggle");

var openModal = document.querySelector(".button--order");
var modalWindow = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");


menu.classList.remove("page-header--menu-nojs");

toggle.addEventListener("click", function () {
  if (menu.classList.contains("page-header--menu-closed")) {
      menu.classList.remove("page-header--menu-closed");
      menu.classList.add("page-header--menu-opened");
  } else {
    menu.classList.add("page-header--menu-closed");
    menu.classList.remove("page-header--menu-opened");
  }
});

openModal.addEventListener("click", function (event) {
  event.preventDefault();
  modalWindow.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
});

window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modalWindow.classList.contains("modal-show")){
      modalWindow.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener ("click", function (event) {
  if (modalWindow.classList.contains("modal-show")){
      modalWindow.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
});
