var openSize = document.querySelector(".catalog__item-to-oder");
var windowSize =  document.querySelector(".modal");
var overlayCatalog = document.querySelector(".modal-overlay");

openSize.addEventListener("click", function (event) {
  event.preventDefault();
  windowSize.classList.add("modal-show");
  overlayCatalog.classList.add("modal-overlay-show");
});

window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (windowSize.classList.contains("modal-show")){
      windowSize.classList.remove("modal-show");
      overlayCatalog.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener ("click", function (event) {
  if (windowSize.classList.contains("modal-show")){
      windowSize.classList.remove("modal-show");
      overlayCatalog.classList.remove("modal-overlay-show");
    }
});
