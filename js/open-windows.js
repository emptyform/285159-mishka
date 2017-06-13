var menu = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");

var openModal = document.querySelector(".button--order");
var modalWindow = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");


menu.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function () {
  if (menu.classList.contains("main-nav--closed")) {
      menu.classList.remove("main-nav--closed");
      menu.classList.add("main-nav--opened");
  } else {
    menu.classList.add("main-nav--closed");
    menu.classList.remove("main-nav--opened");
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
