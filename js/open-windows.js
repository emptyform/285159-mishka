var menu = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");

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