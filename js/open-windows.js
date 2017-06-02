var toggle = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.toggle("main-nav--close");
toggle.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--close");
});

var order = document.querySelector(".button--order");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");

order.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (event) {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
  }
});